// Development-only exporter. NODE_PATH must expose Playwright. Runtime stays static.
const { chromium } = require('playwright');
const { mkdirSync } = require('node:fs');
const { join } = require('node:path');
(async()=>{
  const output=join('assets','media','notpetya');mkdirSync(output,{recursive:true});
  const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'msedge',headless:true});
  try{
    const page=await browser.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
    const base=(process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/')+'assets/media/notpetya/materials.html';
    for(const type of ['carousel','teaser'])for(let i=0;i<(type==='carousel'?5:6);i++){
      await page.goto(base+'?type='+type+'&slide='+i);
      await page.locator('.piece').waitFor();
      await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(image=>image.decode().catch(()=>{})));});
      await page.locator('.piece').screenshot({path:join(output,type+'-'+(i+1)+'.png')});
    }
    await page.goto(base+'?type=cover&slide=0');
    await page.locator('.piece .photo').evaluate(image=>image.decode());
    await page.locator('.piece').screenshot({path:join(output,'cover.png')});
  }finally{await browser.close();}
  console.log('Cover, five carousel pages and six teaser frames exported.');
})().catch(e=>{console.error(e);process.exit(1);});
