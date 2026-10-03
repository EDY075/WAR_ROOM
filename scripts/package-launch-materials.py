"""Package only reviewed public assets; verify every ZIP entry by bytes."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path(__file__).resolve().parents[1] / 'assets/media/war-room-launch-2026'
archive = root / 'war-room-postaveis-hd.zip'
files = sorted(p for p in root.rglob('*') if p.is_file() and p != archive)
assert len(files) == 23, f'Unexpected package contents: {len(files)}'
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
    for file in files:
        output.write(file, file.relative_to(root).as_posix())
with zipfile.ZipFile(archive) as output:
    assert output.testzip() is None
    assert len(output.namelist()) == len(files)
    for file in files:
        assert output.read(file.relative_to(root).as_posix()) == file.read_bytes()
    for entry in json.loads((root / 'manifest.json').read_text(encoding='utf-8'))['files']:
        assert hashlib.sha256(output.read(entry['path'])).hexdigest() == entry['sha256']
print(f'PASS: {len(files)} reviewed public files; ZIP CRC, entry bytes and image hashes match. {archive.stat().st_size:,} bytes')
