"""Independent local content review, one bounded chapter at a time."""
import argparse, difflib, hashlib, json, os, re, subprocess, time, unicodedata
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--model-snapshot',required=True)
parser.add_argument('--workspace',default='.')
args=parser.parse_args()
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',CUDA_VISIBLE_DEVICES='')
import numpy as np
import sherpa_onnx
root=Path(args.workspace).resolve();snap=Path(args.model_snapshot)
audit=root/'audit/narration-parakeet';audit.mkdir(parents=True,exist_ok=True)
catalog=json.loads((root/'assets/media/narrations/catalog.json').read_text(encoding='utf-8'))
corpus=json.loads((root/'assets/media/narrations/scripts.json').read_text(encoding='utf-8'))
recognizer=sherpa_onnx.OfflineRecognizer.from_transducer(
    encoder=str(snap/'encoder.int8.onnx'),decoder=str(snap/'decoder.int8.onnx'),
    joiner=str(snap/'joiner.int8.onnx'),tokens=str(snap/'tokens.txt'),num_threads=4,
    model_type='nemo_transducer',provider='cpu')

def tokens(text):
    text=unicodedata.normalize('NFD',text.lower())
    return re.findall(r'[a-z0-9]+',''.join(c for c in text if unicodedata.category(c)!='Mn'))

records=[];started=time.monotonic()
for item in catalog['cases']:
    source=next(c for c in corpus['cases'] if c['id']==item['id'])
    for media,chapter in zip(item['chapters'],source['chapters']):
        path=root/media['src'];digest=hashlib.sha256(path.read_bytes()).hexdigest()
        script_hash=hashlib.sha256(chapter['script'].encode()).hexdigest()
        target=audit/f'{item["id"]}-{media["id"]}.json'
        record=json.loads(target.read_text(encoding='utf-8')) if target.exists() else None
        if not record or record.get('audioHash')!=digest or record.get('scriptHash')!=script_hash:
            pcm=subprocess.check_output(['ffmpeg','-hide_banner','-loglevel','error','-nostdin',
                '-i',str(path),'-ar','16000','-ac','1','-f','f32le','pipe:1'])
            stream=recognizer.create_stream();stream.accept_waveform(16000,np.frombuffer(pcm,dtype=np.float32))
            recognizer.decode_stream(stream);text=stream.result.text
            if not text.strip():raise RuntimeError('Installed recognizer returned empty speech: '+str(path))
            a,b=tokens(chapter['script']),tokens(text)
            score=difflib.SequenceMatcher(None,a,b,autojunk=False).ratio()
            years=sorted(set(re.findall(r'\b(?:19|20)\d{2}\b',chapter['script'])))
            record={'case':item['id'],'chapter':media['id'],'audioHash':digest,'scriptHash':script_hash,
                'text':text,'proseSimilarity':round(score,4),'expectedYears':years,
                'yearsNotRecognized':[y for y in years if y not in text],
                'negationCounts':[a.count('nao'),b.count('nao')],
                'method':'Installed Parakeet TDT v3 int8, sherpa-onnx CPU 4 threads, isolated chapters. Similarity is triage, not factual accuracy.'}
            target.write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding='utf-8')
        records.append(record)
    print(item['id']+': six chapters transcribed, '+str(len(records))+'/102',flush=True)
flags=[{k:v for k,v in r.items() if k!='text'} for r in records if r['proseSimilarity']<.88 or r['yearsNotRecognized'] or r['negationCounts'][0]!=r['negationCounts'][1]]
summary={'chapters':len(records),'cases':len(catalog['cases']),'method':records[0]['method'],
    'flags':flags,'elapsedSeconds':round(time.monotonic()-started,2)}
(audit/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps(summary,indent=2),flush=True)
