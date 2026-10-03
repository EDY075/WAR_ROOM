/* Composited ambience and on-demand pointer sparks; no idle JS renderer. */
window.WarRoomEntrance = (function () {
  function init() {
    var hero = document.getElementById('hero');
    var canvas = document.getElementById('cursor-sparks');
    if (!hero || !canvas) return;
    var topics = {
      origin: ['Origem', 'Onde a história começa. Investigue o contexto, os primeiros sinais e as atribuições documentadas de cada caso.'],
      techniques: ['Técnicas', 'Como o ataque funciona. Compare vetores de entrada, malwares e técnicas MITRE ATT&CK na análise dos dossiês.'],
      response: ['Resposta', 'Como se enfrentou a crise. Leia sobre contenção, recuperação e investigação nos capítulos de resposta.'],
      impact: ['Impacto', 'O que mudou fora das telas. Explore consequências humanas, operacionais e econômicas, com as respectivas fontes.']
    };
    var buttons = hero.querySelectorAll('[data-topic]'), panel = document.getElementById('network-topic-panel');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var topic = topics[button.dataset.topic];
        buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
        panel.querySelector('h2').textContent = topic[0];
        panel.querySelector('p').textContent = topic[1];
      });
    });
    hero.querySelector('.hero-brand').addEventListener('click', function (event) {
      event.preventDefault(); WarRoomExperience.navigate('#hero');
    });
    var pause = document.getElementById('entrance-pause');
    function syncMotionControl() {
      var allowed = effectsAllowed();
      pause.disabled = !allowed;
      pause.textContent = allowed ? (document.body.classList.contains('entrance-motion-paused') ? 'Retomar movimento' : 'Pausar movimento') : 'Movimento pausado';
    }
    pause.addEventListener('click', function () {
      var paused = document.body.classList.toggle('entrance-motion-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.textContent = paused ? 'Retomar movimento' : 'Pausar movimento';
      if (paused) stop();
    });
    var visible = true, frame = null, sparks = [], lastEmission = 0, lastFrame = 0;
    var pointer = { x: 0, y: 0 }, fine = matchMedia('(any-pointer: fine)');
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    var size = 160, dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    function stop() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null; sparks.length = 0; ctx.clearRect(0, 0, size, size);
      canvas.hidden = true;
      syncMotionControl();
    }
    function draw(now) {
      frame = null;
      if (!visible || !effectsAllowed() || !fine.matches || document.body.classList.contains('entrance-motion-paused')) { stop(); return; }
      if (now - lastFrame < 32) { frame = requestAnimationFrame(draw); return; }
      lastFrame = now;
      ctx.clearRect(0, 0, size, size);
      sparks = sparks.filter(function (spark) { return now - spark.born < spark.life; });
      sparks.forEach(function (spark) {
        var age = (now - spark.born) / 1000, fade = 1 - (now - spark.born) / spark.life;
        var x = spark.x - pointer.x + size / 2 + spark.vx * age;
        var y = spark.y - pointer.y + size / 2 + spark.vy * age + age * age * 22;
        ctx.strokeStyle = 'rgba(235,201,119,' + fade.toFixed(3) + ')';
        ctx.lineWidth = 1.15;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - spark.vx * .035, y - spark.vy * .035); ctx.stroke();
      });
      if (sparks.length) frame = requestAnimationFrame(draw); else stop();
    }
    hero.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse' || !fine.matches || !visible || !effectsAllowed() || document.body.classList.contains('entrance-motion-paused')) return;
      var now = performance.now();
      if (now - lastEmission < 32) return;
      lastEmission = now; pointer.x = event.clientX; pointer.y = event.clientY;
      canvas.style.transform = 'translate3d(' + (pointer.x - size / 2) + 'px,' + (pointer.y - size / 2) + 'px,0)';
      canvas.hidden = false;
      for (var i = 0; i < 2; i++) {
        var angle = Math.random() * Math.PI * 2;
        sparks.push({ x: pointer.x, y: pointer.y, vx: Math.cos(angle) * 27, vy: Math.sin(angle) * 27 - 9, born: now, life: 300 + Math.random() * 220 });
      }
      if (sparks.length > 24) sparks.splice(0, sparks.length - 24);
      if (frame === null) frame = requestAnimationFrame(draw);
    }, { passive: true });
    hero.addEventListener('pointerleave', stop, { passive: true });
    var observer = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      hero.classList.toggle('hero-inactive', !visible);
      if (!visible) stop();
    }, { threshold: 0 });
    observer.observe(hero);
    registerDecorative(syncMotionControl, stop);
    fine.addEventListener('change', stop);
  }
  return { init: init };
})();
