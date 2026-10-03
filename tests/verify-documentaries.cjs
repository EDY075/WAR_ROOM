const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require('playwright');
(async()=>{
  const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'msedge',headless:true});
  const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/WAR_ROOM/';
  const errors=[];
  try{
    for(const mobile of [false,true]){
      const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:900},isMobile:mobile,hasTouch:mobile});
      page.on('pageerror',e=>errors.push(e.message));
      await page.emulateMedia({reducedMotion:'reduce'});
      const requested=[];page.on('request',r=>requested.push(r.url()));
      await page.goto(base);await page.waitForTimeout(250);
      assert.equal(requested.filter(u=>/documentaries\/.*webp|port-reconstruction|world-110m|\.mp4|\.mp3/.test(u)).length,0,'No documentary artwork, geography, audio or video on initial hero');
      await page.locator('#hero-cta').click();
      await page.locator('#map-camera .world-cartography').evaluate(image=>image.decode());
      assert(fs.statSync('assets/images/maps/world-110m.svg').size<150000,'Local geography budget');
      await page.getByRole('button',{name:'Ampliar mapa',exact:true}).click();
      assert.match(await page.locator('#map-zoom-status').innerText(),/1.5/);
      await page.goBack();assert.equal(await page.locator('#map-zoom-status').innerText(),'Visão mundial');
      await page.goForward();assert.match(await page.locator('#map-zoom-status').innerText(),/1.5/);
      await page.getByRole('button',{name:'Visão mundial',exact:true}).click();
      const ids=await page.evaluate(()=>EPISODES.map(e=>e.id));
      const titles=new Set();
      for(const id of ids){
        await page.goto(base+'?tab=story&chapter=opening#dossier-'+id);
        await page.locator('[data-chapter][aria-current=step]').waitFor({state:'visible'});
        assert.equal(await page.locator('[data-chapter][aria-current=step]').innerText(),'Abertura');
        titles.add(await page.locator('#pilot-title').innerText());
        await page.locator('.pilot-scene .dossier-figure img').evaluate(image=>image.decode());
        assert.equal(await page.locator('.pilot-chapters button').count(),6);
        for(let chapter=0;chapter<6;chapter++){
          await page.locator('.pilot-chapters button').nth(chapter).click();
          const text=await page.locator('#dossier-panel').innerText();
          assert(!/undefined|NaN/.test(text),'Complete chapter data: '+id);
          assert(text.length>450,'Detailed reading available: '+id+'/'+chapter);
          assert.equal(await page.locator('#dossier-panel').evaluate(e=>e.scrollWidth<=e.clientWidth),true,'No chapter overflow');
          if(chapter===2){
            await page.locator('.pilot-map img').evaluate(image=>image.decode());
            assert.equal(await page.locator('.pilot-route').evaluate(e=>getComputedStyle(e).animationName),'none','Reduced motion stops map animation');
            assert.match(await page.locator('.dossier-figure figcaption').innerText(),/Natural Earth/);
            if(id==='log4j')assert.equal(await page.locator('.scope-outline').count(),1,'Global scope is not a fictional geographic origin');
          }
          if(chapter===5)assert((await page.locator('.chapter-source-folio a').count())>0,'Real chapter references');
        }
        await page.locator('#tab-sources').click();
        assert.match(await page.locator('#dossier-panel').innerText(),/Natural Earth/);
        const expected=await page.evaluate(id=>EPISODES.find(e=>e.id===id).references.map(r=>r.href),id);
        for(const href of expected)assert((await page.locator('#dossier-panel a').evaluateAll(nodes=>nodes.map(e=>e.href))).includes(href),'Original reference preserved');
        assert.equal(await page.locator('.episode-entry[style*="content-visibility: visible"]').count(),0);
      }
      assert.equal(titles.size,17,'Distinct case openings');
      await page.goto(base+'?tab=story&chapter=response#dossier-melissa');
      await page.locator('[data-chapter][aria-current=step]').waitFor({state:'visible'});
      assert.equal(await page.locator('[aria-current=step]').innerText(),'Resposta','Non-pilot chapter deep link');
      await page.locator('#dossier-footer button').last().click();
      assert.equal(await page.locator('[aria-current=step]').innerText(),'Abertura','New case starts at opening');
      await page.goBack();assert.equal(await page.locator('[aria-current=step]').innerText(),'Resposta','Back restores previous case chapter');
      await page.close();
    }
    assert.deepEqual(errors,[]);
  }finally{await browser.close();}
  console.log('102 chapters × desktop/mobile: unique openings, local imagery, geography, sources, deep links, history, reduced motion, no overflow or forced rendering.');
})().catch(e=>{console.error(e);process.exit(1);});
