"""Measure the finished MP3 decode, rather than reusing mastering input stats."""
import concurrent.futures, hashlib, json, re, subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[1]
catalog = json.loads((root / 'assets/media/narrations/catalog.json').read_text(encoding='utf-8'))
files = [media for item in catalog['cases'] for media in [item, *item['chapters']]]

def measure(media):
    path = root / media['src']
    result = subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-i', str(path),
        '-af', 'loudnorm=I=-16:TP=-1.5:LRA=9:print_format=json', '-f', 'null', 'NUL'],
        capture_output=True, text=True, check=True)
    stats = json.loads(re.search(r'\{\s*"input_i".*?\}', result.stderr, re.S).group())
    return {'src': media['src'], 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
        'integratedLUFS': float(stats['input_i']), 'truePeakDBTP': float(stats['input_tp']),
        'loudnessRangeLU': float(stats['input_lra']), 'duration': media['duration']}

with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    records = list(pool.map(measure, files))
report = {'method': 'FFmpeg loudnorm input analysis of decoded finished MP3, EBU R128. Not target/output estimates.',
    'files': records}
audit = root / 'audit'; audit.mkdir(exist_ok=True)
(audit / 'narration-audio-quality.json').write_text(json.dumps(report, indent=2) + '\n')
violations = [r for r in records if abs(r['integratedLUFS'] + 16) > .8 or r['truePeakDBTP'] > -1]
print(json.dumps({'files': len(records), 'LUFSRange': [min(r['integratedLUFS'] for r in records), max(r['integratedLUFS'] for r in records)],
    'maxTruePeakDBTP': max(r['truePeakDBTP'] for r in records), 'violations': violations}, indent=2), flush=True)
if violations: raise SystemExit('Finished-audio loudness/peak checks failed')
