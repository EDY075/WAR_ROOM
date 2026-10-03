const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const sharp=require('sharp');
(async()=>{
  const root=path.resolve('assets/media/war-room-launch-2026');
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json')));
  assert.equal(manifest.link,'https://edy075.github.io/WAR_ROOM/');
  assert.equal(manifest.files.length,24);
  const natives=manifest.files.filter(f=>!f.path.startsWith('masters/'));
  assert.equal(natives.length,12);
  for(let i=1;i<=5;i++)for(const [kind,height] of [['feed',1350],['story',1920]]){
    const item=natives.find(f=>f.path===`instagram/${kind}-${i}.png`);
    assert(item);assert.equal(item.width,1080);assert.equal(item.height,height);
  }
  for(const [name,w,h] of [['post-1200x627',1200,627],['post-1080x1350',1080,1350]]){
    const item=natives.find(f=>f.path===`linkedin/${name}.png`);
    assert(item);assert.equal(item.width,w);assert.equal(item.height,h);
  }
  const ig=fs.readFileSync(path.join(root,'texts/INSTAGRAM.txt'),'utf8'),li=fs.readFileSync(path.join(root,'texts/LINKEDIN.txt'),'utf8'),stories=fs.readFileSync(path.join(root,'texts/STORIES.txt'),'utf8');
  assert(ig.split('\n')[0].length<=125);assert(ig.length<=2200);assert(li.length<=3000);
  assert(ig.includes(manifest.link));assert(li.includes(manifest.link));
  assert.equal((stories.match(/Link do sticker:/g)||[]).length,5);
  assert.equal((stories.match(/Texto do sticker:/g)||[]).length,5);
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
    const metaMaster=await sharp(rawMaster).metadata();
    assert.equal(metaMaster.format,'png');assert.equal(metaMaster.space,'srgb');
    assert.equal(metaMaster.width,master.width);assert.equal(metaMaster.height,master.height);
    assert.equal(data.length,entry.bytes);assert.equal(rawMaster.length,master.bytes);
    thumbs.push({input:await sharp(data).resize(300,535,{fit:'contain',background:'#24241d'}).png().toBuffer(),left:(i%4)*320,top:Math.floor(i/4)*555});
  }
  fs.mkdirSync('audit',{recursive:true});
  await sharp({create:{width:1280,height:1665,channels:3,background:'#24241d'}}).composite(thumbs).png().toFile('audit/launch-contact-sheet.png');
  assert(fs.readFileSync(path.join(root,'texts/POSTAGENS.md'),'utf8').includes(manifest.link));
  assert(fs.readFileSync(path.join(root,'source/poster.html'),'utf8').includes(manifest.link));
  console.log('PASS: 5 feed + 5 stories + 2 LinkedIn PNGs, 12 2x masters, sRGB, dimensions, SHA-256, captions and links. Visual QA: audit/launch-contact-sheet.png');
})().catch(e=>{console.error(e);process.exitCode=1;});
