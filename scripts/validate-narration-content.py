"""Local ASR review of all finished narrations; detailed transcripts stay ignored."""
import argparse, difflib, hashlib, json, os, re, time, unicodedata
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--model-snapshot',required=True)
parser.add_argument('--workspace',default='.')
parser.add_argument('--threads',type=int,default=6)
parser.add_argument('--beam-size',type=int,default=1)
args=parser.parse_args()
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',CUDA_VISIBLE_DEVICES='')
from faster_whisper import WhisperModel
root=Path(args.workspace).resolve(); output=root/'assets/media/narrations'
scripts=json.loads((output/'scripts.json').read_text(encoding='utf-8'))
audit=root/'audit/narration-asr';audit.mkdir(parents=True,exist_ok=True)
model=WhisperModel(args.model_snapshot,device='cpu',compute_type='int8',cpu_threads=args.threads,local_files_only=True)
print('Installed ASR ready on CPU; no voice/app preferences changed',flush=True)
def tokens(text):
    text=unicodedata.normalize('NFD',text.lower())
    text=''.join(c for c in text if unicodedata.category(c)!='Mn')
    # Compare prose while retaining every raw transcript for proper-name review.
    return re.findall(r'[a-z0-9]+',text)
done={};started=time.monotonic();deadline=started+7200
for cached in audit.glob('*.json'):
    if cached.name=='summary.json':continue
    record=json.loads(cached.read_text(encoding='utf-8'))
    source=next((c for c in scripts['cases'] if c['id']==record.get('id')),None)
    audio_path=output/str(record.get('id'))/'full.mp3'
    script_hash=hashlib.sha256(json.dumps(source,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
    if record.get('decoderVersion')==2 and 'segments' in record and audio_path.exists() and record.get('audioHash')==hashlib.sha256(audio_path.read_bytes()).hexdigest() and record.get('scriptHash')==script_hash:
        record.setdefault('beamSize',3);record.setdefault('cpuThreads',4)
        done[record['id']]=record
print(f'Resuming with {len(done)} completed transcript reviews',flush=True)
while len(done)<17 and time.monotonic()<deadline:
    try:catalog=json.loads((output/'catalog.json').read_text(encoding='utf-8'))
    except (FileNotFoundError,json.JSONDecodeError):time.sleep(2);continue
    for item in catalog['cases']:
        if item['id'] in done:continue
        script=next(c for c in scripts['cases'] if c['id']==item['id'])
        t=time.monotonic()
        segments,info=model.transcribe(str(root/item['src']),language='pt',beam_size=args.beam_size,vad_filter=False,temperature=0,
            condition_on_previous_text=False,word_timestamps=True,hallucination_silence_threshold=1,
            clip_timestamps=f'0,{item["duration"]}')
        parts=[{'start':s.start,'end':s.end,'text':s.text} for s in segments]
        transcript=' '.join(s['text'].strip() for s in parts)
        expected=' '.join(c['script'] for c in script['chapters'])
        a,b=tokens(expected),tokens(transcript)
        score=difflib.SequenceMatcher(None,a,b,autojunk=False).ratio()
        years=sorted(set(re.findall(r'\b(?:19|20)\d{2}\b',expected)))
        missing=[year for year in years if year not in transcript]
        record={'id':item['id'],'duration':item['duration'],'language':info.language,'proseSimilarity':round(score,4),
                'expectedYears':years,'yearsNotRecognized':missing,'segments':parts,'text':transcript,'renderSeconds':round(time.monotonic()-t,2),
                'beamSize':args.beam_size,'cpuThreads':args.threads,'decoderVersion':2,
                'audioHash':hashlib.sha256((root/item['src']).read_bytes()).hexdigest(),
                'scriptHash':hashlib.sha256(json.dumps(script,ensure_ascii=False,sort_keys=True).encode()).hexdigest()}
        (audit/f'{item["id"]}.json').write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding='utf-8')
        done[item['id']]=record
        print(f'ASR {item["id"]}: {len(b)} tokens, prose match {score:.3f}, years needing review {missing}; {len(done)}/17',flush=True)
    time.sleep(2)
if len(done)!=17:raise RuntimeError('Not all 17 finished files became available')
summary={'method':'Local Faster-Whisper large-v3, CPU int8. Token similarity is a triage aid, not an accuracy or identity guarantee.',
         'cases':[{k:v for k,v in record.items() if k not in ('segments','text','renderSeconds')} for record in done.values()]}
(audit/'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'FINISHED content review: {len(done)} cases in {time.monotonic()-started:.1f}s',flush=True)
