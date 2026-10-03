/* Reproducible lossless editorial exports. No remote fonts or imagery. */
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const sharp=require('sharp');
const crypto=require('node:crypto');
const root=path.resolve('assets/media/war-room-launch-2026');
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/';
async function writeExport(file,data){
  // Windows preview/indexing may briefly hold an existing image during replacement.
  for(let attempt=0;attempt<3;attempt++){
    try{fs.writeFileSync(file,data);return;}catch(error){
      if(attempt===2||!['EBUSY','EPERM','UNKNOWN'].includes(error.code))throw error;
      await new Promise(resolve=>setTimeout(resolve,500));
    }
  }
}
(async()=>{
  fs.mkdirSync(path.join(root,'source/art'),{recursive:true});
  fs.copyFileSync('assets/images/entrance/network.svg',path.join(root,'source/art/network.svg'));
  fs.copyFileSync('assets/images/entrance/galaxy.webp',path.join(root,'source/art/galaxy.webp'));
  const targets=[];
  for(let i=1;i<=5;i++)targets.push({kind:'feed',slide:i,width:1080,height:1350,file:`instagram/feed-${i}.png`});
  for(let i=1;i<=5;i++)targets.push({kind:'story',slide:i,width:1080,height:1920,file:`instagram/story-${i}.png`});
  targets.push({kind:'linkedin',slide:1,width:1200,height:627,file:'linkedin/post-1200x627.png'});
  targets.push({kind:'linkedin',slide:2,width:1080,height:1350,file:'linkedin/post-1080x1350.png'});
  const browser=await chromium.launch({channel:'msedge',headless:true});
  const manifest={edition:'galaxy-2026-10-03',link:'https://edy075.github.io/WAR_ROOM/',generated:new Date().toISOString(),colorSpace:'sRGB',sourceRuntime:'1db8095',files:[]};
  try{
    const capture=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
    await capture.goto(base);await capture.locator('#loading-screen').waitFor({state:'hidden'});
    await capture.locator('.space-background img').evaluate(e=>e.decode());
    await capture.locator('#entrance-pause').click();await capture.mouse.move(0,0);
    await capture.locator('#entrance-pause').evaluate(e=>e.blur());await capture.waitForTimeout(600);
    await capture.screenshot({path:path.join(root,'source/art/hero.png')});
    await capture.locator('[data-topic="techniques"]').click();await capture.locator('[data-topic="techniques"]').evaluate(e=>e.blur());
    await capture.locator('.hero-network').screenshot({path:path.join(root,'source/art/network.png')});
    await capture.locator('#hero-cta').click();await capture.locator('#map-camera img').evaluate(e=>e.decode());
    await capture.locator('.intel-map-card').screenshot({path:path.join(root,'source/art/map.png')});
    await capture.goto(base+'?tab=story&chapter=opening#dossier-notpetya');
    await capture.locator('#loading-screen').waitFor({state:'hidden'});await capture.locator('.pilot-scene img').evaluate(e=>e.decode());
    await capture.locator('.pilot-scene').screenshot({path:path.join(root,'source/art/reading.png')});
    await capture.locator('.narration-panel').screenshot({path:path.join(root,'source/art/audio.png')});
    await capture.close();
    const intro=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
    await intro.goto(base,{waitUntil:'domcontentloaded'});
    await intro.locator('.loading-content').screenshot({path:path.join(root,'source/art/preloader.png')});
    await intro.close();
    for(const target of targets){
      const page=await browser.newPage({viewport:{width:target.width,height:target.height},deviceScaleFactor:2});
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto(base+`assets/media/war-room-launch-2026/source/poster.html?kind=${target.kind}&slide=${target.slide}`);
      await page.waitForFunction(()=>window.posterReady);
      await page.evaluate(()=>Promise.all([...document.images].map(img=>img.decode())));
      const overflow=await page.evaluate(()=>{const p=document.getElementById('poster'),f=p.querySelector('.footer'),rect=f.getBoundingClientRect(),before=f.previousElementSibling.getBoundingClientRect();return p.scrollHeight>p.clientHeight||rect.bottom>p.clientHeight||(p.classList.contains('story')&&(rect.bottom>1620||p.firstElementChild.getBoundingClientRect().top<220))||before.bottom>rect.top;});
      if(overflow||errors.length)throw new Error(`Composition overflow/error ${target.file}: ${errors}`);
      const master=path.join(root,'masters',target.file),native=path.join(root,target.file);
      fs.mkdirSync(path.dirname(master),{recursive:true});fs.mkdirSync(path.dirname(native),{recursive:true});
      const rendered=await page.screenshot();
      await writeExport(master,rendered);
      await writeExport(native,await sharp(rendered).resize(target.width,target.height).toColourspace('srgb').png().toBuffer());
      for(const file of [native,master]){
        const data=fs.readFileSync(file),meta=await sharp(data).metadata();
        manifest.files.push({path:path.relative(root,file).replaceAll('\\','/'),width:meta.width,height:meta.height,bytes:data.length,sha256:crypto.createHash('sha256').update(data).digest('hex')});
      }
      await page.close();console.log('Exported '+target.file);
    }
  }finally{await browser.close();}
  fs.writeFileSync(path.join(root,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
})().catch(e=>{console.error(e);process.exitCode=1;});
