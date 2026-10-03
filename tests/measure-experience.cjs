// Optional browser tooling: NODE_PATH must expose Playwright; no runtime dependency.
const { chromium } = require('playwright');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  const output = [];
  for (const mobile of [false, true]) for(let run=1;run<=3;run++) {
    const page = await browser.newPage({ viewport: mobile ? {width:390,height:844} : {width:1440,height:900}, isMobile:mobile, hasTouch:mobile });
    await page.addInitScript(() => {
      window.frameCalls = 0;
      const original = window.requestAnimationFrame;
      window.requestAnimationFrame = cb => original.call(window, time => { window.frameCalls++; cb(time); });
      window.longTasks = [];
      new PerformanceObserver(list => list.getEntries().forEach(e => window.longTasks.push(e.duration))).observe({type:'longtask',buffered:true});
    });
    const base=process.env.PREVIEW_URL || 'http://127.0.0.1:4173/WAR_ROOM/';
    if(process.argv.includes('--baseline'))await page.route(base,route=>route.fulfill({contentType:'text/html',body:execFileSync('git',['show','aeaa524:index.html'],{encoding:'utf8'})}));
    // Decorative processing comparison isolates remote image delivery from CPU samples.
    await page.route('https://upload.wikimedia.org/**',route=>route.abort());
    await page.goto(base);
    await page.waitForTimeout(2600);
    const session = await page.context().newCDPSession(page);
    await session.send('Performance.enable');
    const before = await session.send('Performance.getMetrics');
    const first = await page.evaluate(() => window.frameCalls);
    await page.waitForTimeout(1500);
    const after = await session.send('Performance.getMetrics');
    const sample=await page.evaluate(({mobile,run,first,before,after}) => ({mobile,run,domCharacters:document.documentElement.outerHTML.length, initialResources:performance.getEntriesByType('resource').length, frameCallbacks1500ms:window.frameCalls-first, taskDuration1500ms:(after.metrics.find(m=>m.name==='TaskDuration').value-before.metrics.find(m=>m.name==='TaskDuration').value)*1000, longTasks:window.longTasks.length}),{mobile,run,first,before,after});
    await page.locator('#search-open').click();await page.locator('#search-input').fill('NotPetya');await page.locator('[data-search-dossier=notpetya]').click();
    if(process.argv.includes('--baseline'))await page.locator('[data-open-dossier=notpetya]').click();else await page.locator('#tab-analysis').click();
    await page.waitForTimeout(700);
    sample.forcedEpisodesWhenOpen=await page.locator('.episode-entry').evaluateAll(nodes=>nodes.filter(n=>n.style.contentVisibility==='visible').length);
    const openFirst=await page.evaluate(()=>window.frameCalls);await page.waitForTimeout(400);sample.callbacksReading400ms=await page.evaluate(first=>window.frameCalls-first,openFirst);
    if(!process.argv.includes('--baseline'))await page.locator('#drawer-close').click();
    await page.keyboard.press('Home');await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
    await page.waitForTimeout(150);await page.locator('#experience-toggle').click();await page.locator('#effects-toggle').click();
    await page.waitForTimeout(150);const reducedFirst=await page.evaluate(()=>window.frameCalls);await page.waitForTimeout(400);sample.callbacksReduced400ms=await page.evaluate(first=>window.frameCalls-first,reducedFirst);
    output.push(sample);
    await page.close();
  }
  await browser.close();
  if(process.argv[2]) fs.writeFileSync(process.argv[2],JSON.stringify(output,null,2)+'\n');
  console.log(JSON.stringify(output));
})();
