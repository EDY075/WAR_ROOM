const {chromium}=require('playwright');
const {mkdirSync}=require('node:fs');
(async()=>{
  const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'msedge',headless:true});
  const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/';
  mkdirSync('assets/screenshots/experience',{recursive:true});
  try{
    for(const mobile of [false,true]){
      const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:900},isMobile:mobile,hasTouch:mobile});
      const suffix=mobile?'mobile':'desktop';
      await page.goto(base);await page.waitForTimeout(2600);
      await page.screenshot({path:'assets/screenshots/experience/hero-'+suffix+'.png'});
      await page.locator('#hero-cta').click();await page.waitForTimeout(150);
      await page.screenshot({path:'assets/screenshots/experience/intelligence-'+suffix+'.png'});
      await page.goto(base+'?tab=story&chapter=spread#dossier-notpetya');await page.waitForTimeout(500);
      await page.getByRole('button',{name:'Pausar animação'}).click();
      await page.screenshot({path:'assets/screenshots/experience/propagation-'+suffix+'.png'});
      await page.goto(base+'?tab=story&chapter=impact#dossier-notpetya');
      await page.locator('.dossier-figure img').evaluate(image=>image.decode());
      await page.screenshot({path:'assets/screenshots/experience/impact-'+suffix+'.png'});
      await page.close();
    }
    const narrow=await browser.newPage({viewport:{width:320,height:740}});
    await narrow.goto(base+'?tab=story#dossier-notpetya');
    await narrow.waitForTimeout(350);
    if(await narrow.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('320px overflow');
    await narrow.screenshot({path:'assets/screenshots/experience/pilot-narrow.png'});
    await narrow.close();
  }finally{await browser.close();}
  console.log('Real local screenshots: desktop, mobile and 320px; archive image decoded.');
})().catch(error=>{console.error(error);process.exit(1);});
