const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4173/WAR_ROOM/';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  fs.mkdirSync('assets/screenshots/entrance', { recursive: true });
  try {
    for (const [format, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844], ['narrow', 320, 720], ['wide', 2560, 1440], ['zoom-layout', 2541, 1213]]) {
      const page = await browser.newPage({ viewport: { width, height }, isMobile: width < 768, hasTouch: width < 768 });
      const errors = [], requests = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => requests.push(r.url()));
      await page.addInitScript(() => {
        window.entranceFrames = 0;
        const raf = requestAnimationFrame;
        window.requestAnimationFrame = callback => raf.call(window, time => { entranceFrames++; callback(time); });
      });
      await page.goto(base,{waitUntil:'domcontentloaded'});
      await page.locator('#loading-screen').waitFor({state:'visible'});
      if(format==='desktop')await page.screenshot({path:'assets/screenshots/entrance/preloader-actual-desktop.png'});
      await page.locator('#loading-screen').waitFor({ state: 'hidden' });
      assert.equal(await page.locator('#mouse-glow,#wave-canvas,#ambient-particles').count(), 0);
      assert.equal(requests.some(url => /\.(mp3|mp4)|catalog\.json|world-110m/.test(url)), false, 'Cold hero must not load dossier/audio/map media');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      const title = await page.locator('.hero-title').boundingBox();
      assert(title.x >= 0 && title.x + title.width <= width, 'Title fits viewport');
      assert.equal(await page.locator('#hero').evaluate(e => e.getBoundingClientRect().height >= innerHeight), true, 'Hero covers the first viewport, including tall/zoom layouts');
      assert.equal(await page.locator('.space-background img').evaluate(e => e.complete && e.naturalWidth > 0), true, 'Local galaxy decodes');
      await page.locator('[data-topic="techniques"]').click();
      assert.equal(await page.locator('#network-topic-panel h2').textContent(), 'Técnicas');
      await page.locator('[data-topic="response"]').focus(); await page.keyboard.press('Enter');
      assert.equal(await page.locator('#network-topic-panel h2').textContent(), 'Resposta');
      await page.locator('[data-topic="impact"]').click();
      assert.equal(await page.locator('[data-topic="impact"]').getAttribute('aria-pressed'), 'true');
      await page.locator('#entrance-pause').click();
      assert.equal(await page.locator('.space-background').evaluate(e => getComputedStyle(e).animationPlayState), 'paused');
      assert.equal(await page.locator('.network-motion').evaluate(e => getComputedStyle(e).animationPlayState), 'paused');
      await page.locator('#entrance-pause').click();
      await page.locator('[data-topic="origin"]').click();
      await page.locator('.hero-brand').focus(); await page.keyboard.press('Enter');
      await page.mouse.move(1, 1);
      await page.locator('#hero-cta').focus();
      await page.locator('#hero-cta').evaluate(e=>e.blur());
      await page.screenshot({ path: `assets/screenshots/entrance/hero-${format}.png` });
      if (width < 768 || format === 'desktop') await page.locator('#hero').screenshot({ path: `assets/screenshots/entrance/hero-full-${format}.png` });
      const start = await page.evaluate(() => entranceFrames);
      await page.waitForTimeout(600);
      assert.equal(await page.evaluate(() => entranceFrames), start, 'No idle hero JS loop');
      if (format === 'desktop') {
        await page.mouse.move(500, 550); await page.mouse.move(530, 565, { steps: 12 });
        assert.equal(await page.locator('#cursor-sparks').isVisible(), true, 'Mouse movement emits bounded sparks');
        await page.waitForTimeout(750);
        assert.equal(await page.locator('#cursor-sparks').isVisible(), false, 'Spark processing stops after movement');
        await page.locator('#experience-toggle').click(); await page.locator('#effects-toggle').click();
        await page.mouse.move(560, 580, { steps: 6 });
        assert.equal(await page.locator('#cursor-sparks').isVisible(), false);
        assert.equal(await page.locator('.network-orbit-motion').evaluate(e => getComputedStyle(e).animationName), 'none');
        assert.equal(await page.locator('.space-background').evaluate(e => getComputedStyle(e).animationName), 'none');
        assert.equal(await page.locator('.network-motion').evaluate(e => getComputedStyle(e).animationName), 'none');
        await page.locator('#effects-toggle').click(); await page.locator('#experience-close').click();
      }
      await page.locator('#hero-cta').focus(); await page.keyboard.press('Enter');
      await page.waitForURL('**/#intelligence');
      assert.equal(await page.locator('#intelligence').evaluate(e => e === document.activeElement), true);
      await page.waitForFunction(() => document.querySelector('#hero').classList.contains('hero-inactive'));
      assert.equal(await page.locator('.network-orbit-motion').evaluate(e => getComputedStyle(e).animationPlayState), 'paused');
      await page.locator('#footer').scrollIntoViewIfNeeded();
      const profiles = await page.locator('.footer-profiles a').evaluateAll(nodes => nodes.map(e => e.href));
      assert.deepEqual(profiles, ['https://github.com/EDY075', 'https://www.linkedin.com/in/edmilsongomes21/', 'https://www.instagram.com/edmilson_zn_/']);
      assert.deepEqual(errors, []);
      await page.reload({waitUntil:'domcontentloaded'});
      await page.locator('#loading-screen').waitFor({state:'visible'});
      await page.locator('#loading-screen').waitFor({state:'hidden'});
      assert.equal(await page.evaluate(() => scrollY), 0, 'Reload returns to the hero');
      assert.equal(new URL(page.url()).hash, '', 'Reload clears prior route');
      await page.close();
      console.log(`PASS: entrance, idle/sparks, map route, offscreen pause and credits ${format}`);
    }
    for (const action of ['Escape', 'Enter', 'deadline']) {
      const page = await browser.newPage({ viewport: action === 'Enter' ? { width: 1440, height: 900 } : { width: 390, height: 844 } });
      await page.addInitScript(() => Object.defineProperty(document.fonts, 'ready', { get: () => new Promise(() => {}) }));
      const started = Date.now();
      await page.goto(base, { waitUntil: 'domcontentloaded' });
      await page.locator('#load-enter').waitFor({ state: 'visible' });
      const progress = await page.locator('#load-progress').boundingBox();
      assert(progress.height >= 2 && progress.width > 0, 'Progress stays visible without flex shrink');
      if (action === 'Escape') {
        await page.screenshot({ path: 'assets/screenshots/entrance/preloader-mobile.png' });
        await page.locator('#load-skip').focus();
        await page.keyboard.press('Tab');
        assert.equal(await page.locator('#load-enter').evaluate(e => e === document.activeElement), true);
        await page.keyboard.press('Shift+Tab');
        assert.equal(await page.locator('#load-skip').evaluate(e => e === document.activeElement), true);
        await page.keyboard.press('Escape');
      } else if (action === 'Enter') {
        await page.screenshot({ path: 'assets/screenshots/entrance/preloader-desktop.png' });
        await page.locator('#load-enter').focus(); await page.keyboard.press('Enter');
      }
      await page.locator('#loading-screen').waitFor({ state: 'hidden' });
      assert(Date.now() - started < 2000, 'Unavailable fonts cannot gate reading');
      if (action !== 'deadline') assert.equal(await page.locator('#hero-cta').evaluate(e => e === document.activeElement), true);
      await page.close();
    }
    const reduced = await browser.newPage({ reducedMotion: 'reduce' });
    await reduced.goto(base + '?tab=story#dossier-notpetya');
    await reduced.locator('#loading-screen').waitFor({ state: 'hidden' });
    assert.equal(await reduced.locator('#tab-story').getAttribute('aria-selected'), 'true');
    await reduced.waitForFunction(()=>document.activeElement===document.querySelector('#drawer-close'),{},{timeout:2000});
    assert.equal(await reduced.locator('#drawer-close').evaluate(e=>e===document.activeElement),true,'Fresh direct link retains dialog focus after the opening');
    await reduced.locator('.pilot-controls [data-chapter="1"]').click();
    await reduced.goBack();
    assert.equal(await reduced.locator('.pilot-chapters [aria-current="step"]').textContent(), 'Abertura');
    await reduced.reload();
    await reduced.locator('#loading-screen').waitFor({state:'hidden'});
    assert.equal(await reduced.locator('#intel-drawer').getAttribute('aria-hidden'), 'true');
    assert.equal(new URL(reduced.url()).search, '');
    assert.equal(await reduced.evaluate(() => scrollY), 0);
    await reduced.keyboard.press('Escape');
    assert.equal(await reduced.locator('.network-orbit-motion').evaluate(e => getComputedStyle(e).animationName), 'none');
    assert.equal(await reduced.locator('.hero-network svg').isVisible(), true, 'Reduced motion retains the static visual');
    await reduced.close();
    const linked=await browser.newPage();
    await linked.goto(base+'?tab=story&chapter=impact&q=NotPetya#dossier-notpetya');
    await linked.locator('#loading-screen').waitFor({state:'hidden'});
    assert.equal(await linked.locator('.pilot-chapters [aria-current="step"]').textContent(),'Impacto');
    assert.equal(await linked.locator('.space-background').evaluate(e=>getComputedStyle(e).animationPlayState),'paused','Modal reading stops galaxy motion');
    await linked.reload({waitUntil:'domcontentloaded'});
    await linked.locator('#loading-screen').waitFor({state:'hidden'});
    assert.equal(await linked.locator('#search-input').inputValue(),'','Reload resets search context');
    assert.equal(await linked.locator('#intel-drawer').getAttribute('aria-hidden'),'true');
    assert.equal(await linked.evaluate(()=>scrollY),0);
    await linked.close();
    console.log('PASS: loader keyboard/focus/timeout, direct dossier and OS reduced motion');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
