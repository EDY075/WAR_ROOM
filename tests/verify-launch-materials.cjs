const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const sharp=require('sharp');
(async()=>{
  const root=path.resolve('assets/media/war-room-launch-2026');
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json')));
  assert.equal(manifest.link,'https://edy075.github.io/WAR_ROOM/');
  assert.equal(manifest.files.length,16);
  const thumbs=[];
  for(const [i,entry] of manifest.files.filter(f=>!f.path.startsWith('masters/')).entries()){
    const data=fs.readFileSync(path.join(root,entry.path)),meta=await sharp(data).metadata();
    assert.equal(meta.format,'png');assert.equal(meta.space,'srgb');
    assert.equal(meta.width,entry.width);assert.equal(meta.height,entry.height);
    assert.equal(crypto.createHash('sha256').update(data).digest('hex'),entry.sha256);
    const master=manifest.files.find(f=>f.path==='masters/'+entry.path);
    assert.equal(master.width,entry.width*2);assert.equal(master.height,entry.height*2);
    const rawMaster=fs.readFileSync(path.join(root,master.path));
    assert.equal(crypto.createHash('sha256').update(rawMaster).digest('hex'),master.sha256);
    thumbs.push({input:await sharp(data).resize(300,535,{fit:'contain',background:'#24241d'}).png().toBuffer(),left:(i%4)*320,top:Math.floor(i/4)*555});
  }
  fs.mkdirSync('audit',{recursive:true});
  await sharp({create:{width:1280,height:1110,channels:3,background:'#24241d'}}).composite(thumbs).png().toFile('audit/launch-contact-sheet.png');
  assert(fs.readFileSync(path.join(root,'texts/POSTAGENS.md'),'utf8').includes(manifest.link));
  assert(fs.readFileSync(path.join(root,'source/poster.html'),'utf8').includes(manifest.link));
  console.log('PASS: 8 native PNGs, 8 2× masters, sRGB, dimensions, SHA-256 and links. Visual QA sheet: audit/launch-contact-sheet.png');
})().catch(e=>{console.error(e);process.exitCode=1;});
