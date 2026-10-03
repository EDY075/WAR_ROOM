/* Optional development tooling; actual local browser renders, no mockup. */
const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
  fs.mkdirSync('assets/screenshots/narration',{recursive:true});
  const browser=await chromium.launch({channel:'msedge',headless:true});
  try{
    for(const mobile of [false,true]){
      const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:900}});
      await page.goto('http://127.0.0.1:4173/WAR_ROOM/?tab=media#dossier-notpetya');
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      await page.screenshot({path:'assets/screenshots/narration/notpetya-'+(mobile?'mobile':'desktop')+'.png'});
      await page.goto('http://127.0.0.1:4173/WAR_ROOM/assets/media/narrations/');
      await page.locator('article').last().waitFor();
      await page.screenshot({path:'assets/screenshots/narration/library-'+(mobile?'mobile':'desktop')+'.png'});
      await page.close();
    }
  }finally{await browser.close();}
  console.log('Actual narration and library renders: desktop/mobile saved');
})().catch(e=>{console.error(e);process.exitCode=1});
