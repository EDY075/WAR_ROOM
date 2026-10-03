"""Second ASR pass on flagged chapters; separate decoder settings prevent loops."""
import argparse, hashlib, json, os
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--model-snapshot',required=True)
parser.add_argument('--workspace',default='.')
parser.add_argument('--clips',nargs='+',required=True,help='case/chapter pairs')
args=parser.parse_args()
os.environ.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',CUDA_VISIBLE_DEVICES='')
from faster_whisper import WhisperModel
root=Path(args.workspace).resolve();audit=root/'audit/narration-asr/chapter-review';audit.mkdir(parents=True,exist_ok=True)
model=WhisperModel(args.model_snapshot,device='cpu',compute_type='int8',cpu_threads=3,local_files_only=True)
catalog=json.loads((root/'assets/media/narrations/catalog.json').read_text(encoding='utf-8'))
for pair in args.clips:
    case,chapter=pair.split('/')
    media=next(ch for item in catalog['cases'] if item['id']==case for ch in item['chapters'] if ch['id']==chapter)
    path=root/media['src'];digest=hashlib.sha256(path.read_bytes()).hexdigest()
    target=audit/f'{case}-{chapter}.json'
    if target.exists() and json.loads(target.read_text(encoding='utf-8')).get('audioHash')==digest:continue
    segments,info=model.transcribe(str(path),language='pt',beam_size=3,temperature=0,
        condition_on_previous_text=False,vad_filter=False,word_timestamps=True,
        hallucination_silence_threshold=1,clip_timestamps=f'0,{media["duration"]}')
    parts=[{'start':s.start,'end':s.end,'text':s.text} for s in segments]
    record={'clip':pair,'audioHash':digest,'duration':media['duration'],'segments':parts,
        'text':' '.join(s['text'].strip() for s in parts),'method':'CPU int8 large-v3, beam 3, no previous-text conditioning, bounded clip, silence-hallucination filter'}
    target.write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding='utf-8')
    print(pair+': '+record['text'],flush=True)
