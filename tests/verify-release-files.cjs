/* Public/local release smoke: actual bytes and actual selected audio playback. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {chromium}=require('playwright');
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/';
const hash=data=>crypto.createHash('sha256').update(data).digest('hex');
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  try{
    const context=await browser.newContext();
    const pack='assets/media/war-room-launch-2026/';
    const manifest=JSON.parse(fs.readFileSync(pack+'manifest.json'));
    for(const file of ['index.html','assets/js/entrance.js','assets/css/entrance.css','assets/js/experience.js','assets/js/documentaries.js','assets/js/narration.js','assets/images/entrance/galaxy.webp','assets/images/entrance/galaxy-mobile.webp','assets/images/entrance/galaxy-master.png',pack+'war-room-postaveis-hd.zip',...manifest.files.map(e=>pack+e.path)]){
      const response=await context.request.get(base+file);
      assert.equal(response.status(),200,file);
      const local=fs.readFileSync(path.resolve(file));
      // Git normalizes source line endings; compare text logically, binary exactly.
      if(/\.(html|js|css)$/.test(file))assert.equal((await response.text()).replaceAll('\r\n','\n'),local.toString().replaceAll('\r\n','\n'));
      else assert.equal(hash(await response.body()),hash(local),file);
    }
    for(const width of [1440,390]){
      const page=await context.newPage(),errors=[],requests=[];
      await page.setViewportSize({width,height:900});
      page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
      await page.goto(base+'?tab=story&chapter=opening#dossier-notpetya');
      await page.locator('[data-narration-load]').waitFor();
      assert(!requests.some(url=>url.endsWith('.mp3')),'Narration is not preloaded');
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      await page.evaluate(()=>window.oldAudio=document.querySelector('.narration-panel audio'));
      await page.locator('#tab-media').click();
      assert(await page.evaluate(()=>oldAudio.paused));
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      assert(await page.locator('.narration-panel audio').evaluate(a=>a.duration)>100);
      await page.evaluate(()=>window.oldAudio=document.querySelector('.narration-panel audio'));
      await page.keyboard.press('Escape');
      assert(await page.evaluate(()=>oldAudio.paused));
      assert.deepEqual(errors,[]);
      await page.goto(base+pack);await page.locator('.grid img').first().evaluate(img=>img.decode());
      assert.equal(await page.getByRole('link',{name:'Baixar pacote ZIP HD'}).getAttribute('href'),'war-room-postaveis-hd.zip');
      await page.close();
    }
    await context.close();
    console.log('PASS: deployed entrance sources, all 16 PNG/master hashes, ZIP hash/download preview, direct dossier, real chapter/full playback and Escape desktop/mobile at '+base);
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
