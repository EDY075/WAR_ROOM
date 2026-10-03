"""Package only reviewed public assets; verify every ZIP entry by bytes."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path(__file__).resolve().parents[1] / 'assets/media/war-room-launch-2026'
archive = root / 'war-room-postaveis-hd.zip'
manifest = json.loads((root / 'manifest.json').read_text(encoding='utf-8'))
reviewed = {entry['path'] for entry in manifest['files']} | {
    'README.md', 'index.html', 'manifest.json', 'source/poster.html',
    'texts/POSTAGENS.md', 'texts/INSTAGRAM.txt', 'texts/LINKEDIN.txt', 'texts/STORIES.txt',
    'source/art/network.svg', 'source/art/galaxy.webp', 'source/art/hero.png',
    'source/art/network.png', 'source/art/map.png', 'source/art/reading.png',
    'source/art/audio.png', 'source/art/preloader.png',
}
assert len(reviewed) == 40
actual = {p.relative_to(root).as_posix() for p in root.rglob('*') if p.is_file() and p != archive}
assert actual == reviewed, f'Unexpected/missing public files: {actual ^ reviewed}'
files = sorted(root / name for name in reviewed)
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
print(f'PASS: {len(files)} reviewed public files; ZIP CRC, entry bytes and image hashes match. {archive.stat().st_size:,} bytes; SHA-256 {hashlib.sha256(archive.read_bytes()).hexdigest()}')
