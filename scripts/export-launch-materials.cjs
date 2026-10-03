/* Reproducible lossless editorial exports. No remote fonts or imagery. */
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const sharp=require('sharp');
const crypto=require('node:crypto');
const root=path.resolve('assets/media/war-room-launch-2026');
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/';
(async()=>{
  fs.mkdirSync(path.join(root,'source/art'),{recursive:true});
  fs.copyFileSync('assets/images/entrance/network.svg',path.join(root,'source/art/network.svg'));
  fs.copyFileSync('assets/screenshots/experience/map-desktop.png',path.join(root,'source/art/map.png'));
  const targets=[];
  for(let i=1;i<=5;i++)targets.push({kind:'feed',slide:i,width:1080,height:1350,file:`instagram/feed-${i}.png`});
  for(let i=1;i<=2;i++)targets.push({kind:'story',slide:i,width:1080,height:1920,file:`instagram/story-${i}.png`});
  targets.push({kind:'linkedin',slide:1,width:1200,height:627,file:'linkedin/post-1200x627.png'});
  const browser=await chromium.launch({channel:'msedge',headless:true});
  const manifest={link:'https://edy075.github.io/WAR_ROOM/',generated:new Date().toISOString(),colorSpace:'sRGB',files:[]};
  try{
    for(const target of targets){
      const page=await browser.newPage({viewport:{width:target.width,height:target.height},deviceScaleFactor:2});
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto(base+`assets/media/war-room-launch-2026/source/poster.html?kind=${target.kind}&slide=${target.slide}`);
      await page.waitForFunction(()=>window.posterReady);
      await page.evaluate(()=>Promise.all([...document.images].map(img=>img.decode())));
      const overflow=await page.evaluate(()=>{const p=document.getElementById('poster'),f=p.querySelector('.footer');return p.scrollHeight>p.clientHeight||f.getBoundingClientRect().bottom>p.clientHeight;});
      if(overflow||errors.length)throw new Error(`Composition overflow/error ${target.file}: ${errors}`);
      const master=path.join(root,'masters',target.file),native=path.join(root,target.file);
      fs.mkdirSync(path.dirname(master),{recursive:true});fs.mkdirSync(path.dirname(native),{recursive:true});
      await page.screenshot({path:master});
      await sharp(master).resize(target.width,target.height).toColourspace('srgb').png().toFile(native);
      for(const file of [native,master]){
        const data=fs.readFileSync(file),meta=await sharp(data).metadata();
        manifest.files.push({path:path.relative(root,file).replaceAll('\\','/'),width:meta.width,height:meta.height,bytes:data.length,sha256:crypto.createHash('sha256').update(data).digest('hex')});
      }
      await page.close();console.log('Exported '+target.file);
    }
  }finally{await browser.close();}
  fs.writeFileSync(path.join(root,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
})().catch(e=>{console.error(e);process.exitCode=1;});
