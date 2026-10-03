"""Offline, resumable media production using an installed OmniVoice runtime.

Reference recordings and raw WAVs stay in ignored audit/, never public assets.
No VoiceStudio preferences, existing profiles, or runtime source are modified.
"""
import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--runtime-root', required=True)
parser.add_argument('--model-snapshot', required=True)
parser.add_argument('--reference', required=True)
parser.add_argument('--reference-text', required=True)
parser.add_argument('--workspace', default='.')
parser.add_argument('--only')
args = parser.parse_args()
root = Path(args.workspace).resolve()
raw_root = root / 'audit' / 'narration-raw'
output = root / 'assets' / 'media' / 'narrations'
corpus = json.loads((output / 'scripts.json').read_text(encoding='utf-8'))
if args.only and args.only not in {item['id'] for item in corpus['cases']}:
    parser.error('--only must name an existing dossier')
reference_hash = hashlib.sha256(Path(args.reference).read_bytes() + Path(args.reference_text).read_bytes()).hexdigest()
os.environ.update(HF_HUB_OFFLINE='1', TRANSFORMERS_OFFLINE='1', TORCH_COMPILE_DISABLE='1', TQDM_DISABLE='1')
sys.path.insert(0, args.runtime_root)
import numpy as np
import torch
import soundfile as sf
from omnivoice import OmniVoice

torch.set_num_threads(6)
print('Loading installed model; GPU transformer, CPU codec; offline', flush=True)
model = OmniVoice.from_pretrained(args.model_snapshot, device_map='cpu', dtype=torch.float32,
                                 load_asr=False, local_files_only=True)
codec = model.audio_tokenizer
model.audio_tokenizer = None
model.to('cuda', dtype=torch.float16)
model.audio_tokenizer = codec
model.llm.set_attn_implementation('sdpa')
prompt = model.create_voice_clone_prompt(ref_audio=args.reference,
                                        ref_text=Path(args.reference_text).read_text(encoding='utf-8'))
rate = model.sampling_rate
print(f'Reference cached; GPU weights {torch.cuda.memory_allocated()/1024**2:.0f} MiB', flush=True)

# Speech-only spellings; scripts/transcripts retain canonical proper names.
pronunciations = {
    'Morris Worm': 'Mórris Uórm', 'Robert Tappan Morris': 'Róbert Tápan Mórris',
    'NotPetya': 'Nót Pétia', 'ILOVEYOU': 'Ai Lóv Iú', 'WannaCry': 'Uána Crai',
    'SolarWinds': 'Sôlar Uínds', 'Stuxnet': 'Stúksnet', 'Colonial Pipeline': 'Colônial Páiplaine',
    'Volt Typhoon': 'Vólt Taifún', 'Salt Typhoon': 'Sált Taifún', 'Lazarus': 'Lázarus',
    'Log4j': 'Log quatro jota', 'CyberAv3ngers': 'Cáiber Avêngers', 'Unitronics': 'Iunitrônics',
    'M.E.Doc': 'Médoc', 'PsExec': 'Pí és éxec', 'Microsoft': 'Máicrosoft', 'FireEye': 'Fáier Ai',
    'Mandiant': 'Mândiant', 'Maersk': 'Mérsk', 'CISA': 'Císa', 'HMIs': 'interfaces de operação',
    'PLCs': 'controladores lógicos programáveis', 'FBI': 'éfe bê i', 'SMB': 'falhas no protocolo de compartilhamento de arquivos S M B',
    'WMI': 'instrumentação de gerenciamento do Windows', 'MGM': 'ême gê ême', 'NCSC': 'ene cê esse cê', 'GAO': 'gê a ó',
    'EUA': 'Estados Unidos', 'DOJ': 'Departamento de Justiça dos Estados Unidos',
    'CCDCOE': 'centro de excelência de defesa cibernética cooperativa da OTAN',
    'IRGC': 'i érre gê cê', 'APT29': 'a pê tê vinte e nove', 'CFAA': 'cê éfe a a',
    'OT': 'tecnologia operacional', 'TI': 'tecnologia da informação', 'GRU': 'gê érre u',
    'US$ 80 milhões': 'oitenta milhões de dólares', 'US$ 1 bilhão': 'um bilhão de dólares',
    'US$ 80': 'oitenta dólares', 'SBOM': 'lista de materiais de software',
    'CVE-2021-44228': 'identificador C V E, dois mil e vinte e um, quatro quatro dois dois oito',
}

def spoken(text):
    months=['','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    text=re.sub(r'\b(\d{2})/(\d{2})/(\d{4})\b',lambda m:f'{int(m[1])} de {months[int(m[2])]} de {m[3]}',text)
    for original, replacement in sorted(pronunciations.items(), key=lambda p: -len(p[0])):
        text = re.sub(r'(?<!\w)' + re.escape(original) + r'(?!\w)', replacement, text)
    return text

def split_script(text, maximum=44):
    """Bound attention memory with complete sentences; retain every word."""
    sentences = re.split(r'(?<=[.!?])\s+', text)
    chunks, pending = [], ''
    for sentence in sentences:
        words = sentence.split()
        if len(words) > maximum:
            if pending: chunks.append(pending); pending = ''
            for i in range(0, len(words), maximum): chunks.append(' '.join(words[i:i+maximum]))
        elif len((pending + ' ' + sentence).split()) > maximum:
            chunks.append(pending); pending = sentence
        else:
            pending = (pending + ' ' + sentence).strip()
    if pending: chunks.append(pending)
    assert ' '.join(chunks) == ' '.join(text.split()), 'Splitting must preserve the script'
    return chunks

def probe(path):
    return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries',
        'format=duration,size:stream=codec_name,sample_rate,channels','-of','json',str(path)]))

def master(raw, target):
    # Gentle mud reduction / speech presence, controlled dynamics, measured loudness.
    color = ('highpass=f=70,equalizer=f=250:t=q:w=1:g=-2.5,'
             'equalizer=f=3200:t=q:w=0.8:g=2.5,treble=g=1.5:f=6000,'
             'acompressor=threshold=0.125:ratio=2:attack=12:release=160:makeup=1.15')
    measure = subprocess.run(['ffmpeg','-hide_banner','-i',str(raw),'-af',
        color+',loudnorm=I=-16:TP=-1.5:LRA=9:print_format=json','-f','null','NUL'],
        capture_output=True, text=True, check=True)
    stats = json.loads(re.search(r'\{\s*"input_i".*?\}',measure.stderr,re.S).group())
    norm = ('loudnorm=I=-16:TP=-1.5:LRA=9:linear=true:'
        f'measured_I={stats["input_i"]}:measured_TP={stats["input_tp"]}:'
        f'measured_LRA={stats["input_lra"]}:measured_thresh={stats["input_thresh"]}:'
        f'offset={stats["target_offset"]}')
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(raw),
        '-af',color+','+norm,'-ar','24000','-ac','1','-c:a','libmp3lame','-b:a','128k',str(target)],check=True)
    return stats

def stamp(seconds):
    millis=round(seconds*1000)
    return f'{millis//3600000:02}:{millis//60000%60:02}:{millis//1000%60:02}.{millis%1000:03}'

catalog = {'language':'pt-BR','narrator':'Voz do autor · síntese autorizada','cases':[]}
if args.only and (output/'catalog.json').exists():
    catalog = json.loads((output/'catalog.json').read_text(encoding='utf-8'))
started = time.monotonic()
cases = sorted(corpus['cases'], key=lambda c: c['id'] != 'notpetya')
for item in cases:
    if args.only and item['id'] != args.only: continue
    directory = output / item['id']; directory.mkdir(parents=True,exist_ok=True)
    cache = raw_root / item['id']; cache.mkdir(parents=True,exist_ok=True)
    entry = {'id':item['id'],'title':item['title'],'year':item['year'],'chapters':[]}
    all_audio, total, cues = [], 0.0, []
    for number, chapter in enumerate(item['chapters']):
        pieces, positions = [], []
        chunks = split_script(chapter['script'])
        for part, text in enumerate(chunks):
            speech = spoken(text)
            seed = 1729 + number*101 + part
            key = hashlib.sha256((f'hybrid-fp16-sdpa-16-v1|{args.model_snapshot}|{reference_hash}|{seed}|'+speech).encode()).hexdigest()[:12]
            wav = cache / f'{chapter["id"]}-{part}-{key}.wav'
            if wav.exists():
                audio, cached_rate = sf.read(wav,dtype='float32'); assert cached_rate == rate
            else:
                torch.manual_seed(seed)
                t = time.monotonic()
                audio = model.generate(text=speech,language='pt',voice_clone_prompt=prompt,num_step=16,speed=1)[0]
                if isinstance(audio,torch.Tensor): audio=audio.detach().cpu().numpy().squeeze()
                assert np.isfinite(audio).all() and len(audio)>rate/2
                sf.write(wav,audio,rate,subtype='PCM_16')
                print(f'{item["id"]}/{chapter["id"]} part {part+1}/{len(chunks)}: {len(audio)/rate:.1f}s rendered in {time.monotonic()-t:.1f}s',flush=True)
            offset = sum(len(piece) for piece in pieces)/rate
            positions.append((offset,offset+len(audio)/rate,text))
            pieces.extend([audio,np.zeros(round(rate*.22),dtype='float32')])
        combined = np.concatenate(pieces)
        chapter_raw = cache / f'{chapter["id"]}-combined.wav'
        sf.write(chapter_raw,combined,rate,subtype='PCM_16')
        mp3=directory/f'{chapter["id"]}.mp3'
        stats=master(chapter_raw,mp3)
        info=probe(mp3); duration=float(info['format']['duration'])
        chapter_entry={'id':chapter['id'],'name':chapter['name'],'src':f'assets/media/narrations/{item["id"]}/{chapter["id"]}.mp3',
                       'duration':round(duration,3),'bytes':int(info['format']['size'])}
        entry['chapters'].append(chapter_entry)
        cues.extend((total+begin,total+end,text) for begin,end,text in positions)
        all_audio.extend([combined,np.zeros(round(rate*.5),dtype='float32')])
        total+=len(combined)/rate+.5
        (cache/f'{chapter["id"]}-master-measure.json').write_text(json.dumps(stats,indent=2))
    full_raw=cache/'full.wav'; sf.write(full_raw,np.concatenate(all_audio),rate,subtype='PCM_16')
    stats=master(full_raw,directory/'full.mp3'); info=probe(directory/'full.mp3')
    entry.update(src=f'assets/media/narrations/{item["id"]}/full.mp3',duration=round(float(info['format']['duration']),3),bytes=int(info['format']['size']))
    (cache/'full-master-measure.json').write_text(json.dumps(stats,indent=2))
    vtt='WEBVTT\n\n'+'\n\n'.join(f'{stamp(a)} --> {stamp(b)}\n{text}' for a,b,text in cues)+'\n'
    (directory/'full.vtt').write_text(vtt,encoding='utf-8')
    transcript=item['title']+'\nVoz do autor · síntese autorizada\n\n'+'\n\n'.join(
        chapter['script']+'\nReferência: '+chapter['source']['href'] for chapter in item['chapters'])+'\n'
    (directory/'transcript.txt').write_text(transcript,encoding='utf-8')
    entry['captions']=f'assets/media/narrations/{item["id"]}/full.vtt'
    entry['transcript']=f'assets/media/narrations/{item["id"]}/transcript.txt'
    catalog['cases'] = [case for case in catalog['cases'] if case['id'] != entry['id']]
    catalog['cases'].append(entry)
    catalog['cases'].sort(key=lambda c:next(i for i,v in enumerate(corpus['cases']) if v['id']==c['id']))
    temporary = output/'catalog.json.tmp'
    temporary.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    temporary.replace(output/'catalog.json')
    print(f'COMPLETE {item["id"]}: {entry["duration"]:.1f}s, {len(catalog["cases"])} cases; elapsed {time.monotonic()-started:.1f}s',flush=True)
print(f'FINISHED {len(catalog["cases"])} cases, {sum(c["duration"] for c in catalog["cases"])/60:.1f} minutes',flush=True)
