const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  try{
    for(const mobile of [false,true]){
      const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:900}});
      const errors=[],requests=[];
      page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
      await page.route('https://upload.wikimedia.org/**',r=>r.abort());
      await page.goto('http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya');
      assert.equal(await page.locator('.narration-panel').count(),1,'Chapter narration must be present');
      await page.locator('[data-narration-load]').waitFor({state:'visible'});
      assert.equal(requests.some(u=>u.endsWith('.mp3')),false,'No audio before explicit play');
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      await page.evaluate(()=>window.retainedNarration=document.querySelector('.narration-panel audio'));
      await page.locator('.pilot-chapters button').nth(1).click();
      assert.equal(await page.evaluate(()=>retainedNarration.paused),true,'Chapter change must pause previous audio');
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      await page.evaluate(()=>window.retainedNarration=document.querySelector('.narration-panel audio'));
      await page.locator('#tab-media').click();
      assert.equal(await page.evaluate(()=>retainedNarration.paused),true,'Tab change pauses narration');
      // Chromium retains currentSrc as a historical URL after load() empties the
      // resource. EMPTY state and removed sources prove decoder/network release.
      assert.deepEqual(await page.evaluate(()=>({ready:retainedNarration.readyState,network:retainedNarration.networkState,sources:retainedNarration.querySelectorAll('source').length,src:retainedNarration.getAttribute('src')})),{ready:0,network:0,sources:0,src:null},'Context changes empty the old media resource');
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      assert(await page.locator('.narration-panel audio').evaluate(a=>a.duration)>100,'Full episode must be prolonged');
      await page.evaluate(()=>window.retainedNarration=document.querySelector('.narration-panel audio'));
      await page.keyboard.press('Escape');
      assert.equal(await page.evaluate(()=>retainedNarration.paused),true,'Escape pauses audio');
      // Fast case changes must invalidate deferred catalog/UI callbacks.
      await page.evaluate(()=>{WarRoomExperience.open('morris-worm','story');WarRoomExperience.open('melissa','story');});
      await page.waitForFunction(()=>document.querySelector('.narration-panel')?.dataset.narrationCase==='melissa'&&!!document.querySelector('[data-narration-load]'));
      assert.equal(await page.locator('.narration-panel a[download]').getAttribute('href'),'assets/media/narrations/melissa/opening.mp3');
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      assert.equal(await page.locator('.dossier-workspace').evaluate(e=>e.scrollWidth<=e.clientWidth),true);
      await page.emulateMedia({reducedMotion:'reduce'});
      await page.locator('[data-narration-load]').click();
      await page.waitForFunction(()=>document.querySelector('.narration-panel audio')?.currentTime>.1);
      assert.equal(await page.locator('.narration-panel audio').evaluate(a=>a.paused),false,'Reduced scenery must not block chosen narration');
      // Headless pages remain visible even when another tab comes forward.
      // Exercise the hidden-event handler explicitly and label that limitation.
      await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});
      assert.equal(await page.locator('.narration-panel audio').evaluate(a=>a.paused),true,'Simulated hidden event pauses actual audio');
      await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
      await page.locator('#tab-sources').click();
      assert.deepEqual(errors,[]);
      await page.close();
    }
    // Cold hero must not load even narration metadata or scripts.
    const cold=await browser.newPage();const initial=[];cold.on('request',r=>initial.push(r.url()));
    await cold.goto('http://127.0.0.1:4173/WAR_ROOM/');await cold.waitForTimeout(600);
    assert.equal(initial.some(u=>/narrations\/(?:catalog|scripts)\.json|\.mp3$/.test(u)),false);
    await cold.close();
    const catalog=JSON.parse(fs.readFileSync('assets/media/narrations/catalog.json','utf8'));
    assert.equal(catalog.cases.length,17);
    for(const item of catalog.cases){
      assert.equal(item.chapters.length,6);assert(item.duration>90&&item.duration<240);
      for(const audio of [item,...item.chapters]){
        assert(fs.existsSync(audio.src));
        const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',audio.src],{encoding:'utf8'}));
        assert.equal(probe.streams[0].codec_name,'mp3');assert.equal(probe.streams[0].channels,1);assert.equal(probe.streams[0].sample_rate,'24000');
        assert(Math.abs(Number(probe.format.duration)-audio.duration)<.03);
      }
      assert(fs.readFileSync(item.transcript,'utf8').includes('Referência: https://'));
      assert(fs.readFileSync(item.captions,'utf8').startsWith('WEBVTT'));
    }
    // Decode every delivered file in the actual browser, beyond container probes.
    const decoder=await browser.newPage();await decoder.goto('http://127.0.0.1:4173/WAR_ROOM/');
    for(const item of catalog.cases)for(const audio of [item,...item.chapters]){
      const result=await decoder.evaluate(src=>new Promise(resolve=>{
        const a=new Audio();let timer=setTimeout(()=>finish({error:'timeout'}),10000);
        function finish(value){clearTimeout(timer);a.removeAttribute('src');a.load();resolve(value);}
        a.onloadedmetadata=()=>finish({duration:a.duration});a.onerror=()=>finish({error:a.error.code});a.src=src;a.preload='metadata';
      }),audio.src);
      assert(!result.error,audio.src+' must decode');assert(Math.abs(result.duration-audio.duration)<.1);
    }
    await decoder.close();
    for(const mobile of [false,true]){
      const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:900}});
      const requests=[],errors=[];page.on('request',r=>requests.push(r.url()));page.on('pageerror',e=>errors.push(e.message));
      await page.goto('http://127.0.0.1:4173/WAR_ROOM/assets/media/narrations/');
      await page.locator('article').last().waitFor();assert.equal(await page.locator('article').count(),17);
      assert(!requests.some(u=>u.endsWith('.mp3')));
      const first=page.locator('article').first();await first.locator('[data-play]').first().focus();await page.keyboard.press('Enter');
      await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>.1);
      await page.evaluate(()=>window.oldLibraryAudio=document.querySelector('audio'));
      const second=page.locator('article').nth(1);await second.locator('summary').click();await second.locator('.chapters button').nth(2).click();
      await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>.1);
      assert.equal(await page.evaluate(()=>oldLibraryAudio.paused&&oldLibraryAudio.readyState===0),true);
      assert.equal(await page.locator('audio').count(),1);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      await page.close();assert.deepEqual(errors,[]);
    }
    // Both metadata and media failures preserve a concrete reading alternative.
    const failure=await browser.newPage();
    await failure.route('**/narrations/catalog.json',r=>r.abort());
    await failure.goto('http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya');
    await failure.locator('[data-narration-retry]').waitFor();
    await failure.unroute('**/narrations/catalog.json');await failure.locator('[data-narration-retry]').click();
    await failure.locator('[data-narration-load]').waitFor();await failure.route('**/*.mp3',r=>r.abort());
    await failure.locator('[data-narration-load]').click();
    await failure.waitForFunction(()=>document.querySelector('.narration-status')?.textContent.includes('Não foi possível'));
    assert.equal(await failure.locator('.pilot-scene').count(),1);assert.equal(await failure.locator('.narration-panel a[download]').count(),1);
    await failure.close();
    console.log('Narration: 17 full episodes, 102 chapters, all 119 browser decodes/probes, library, error/retry, keyboard, explicit playback, race/lifecycle, reduced motion, desktop/mobile and cold loading passed');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
