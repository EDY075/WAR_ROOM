/* Static finished media only. Catalog loads on dossier demand; audio on user choice. */
window.WarRoomNarration=(function(){
  var catalogPromise=null,catalog=null,epoch=0;
  function esc(value){return String(value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function duration(value){var seconds=Math.floor(value);return Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');}
  function pauseMedia(except){document.querySelectorAll('#intel-drawer audio,#intel-drawer video').forEach(function(media){if(media!==except)media.pause();});}
  function stop(){epoch++;pauseMedia();document.querySelectorAll('#intel-drawer audio').forEach(function(audio){audio.removeAttribute('src');audio.querySelectorAll('source').forEach(function(source){source.remove();});audio.load();});}
  function loadCatalog(){
    if(!catalogPromise)catalogPromise=fetch('assets/media/narrations/catalog.json').then(function(response){if(!response.ok)throw new Error('catalog');return response.json();}).then(function(data){
      if(!Array.isArray(data.cases))throw new Error('catalog');
      data.cases.forEach(function(item){[item].concat(item.chapters||[]).forEach(function(media){if(!/^assets\/media\/narrations\/[a-z0-9-]+\/(?:full|opening|origin|spread|impact|response|sources)\.mp3$/.test(media.src)||!Number.isFinite(media.duration))throw new Error('media');});});
      catalog=data;return data;
    }).catch(function(error){catalogPromise=null;throw error;});
    return catalogPromise;
  }
  function markup(id,chapter){return '<section class="narration-panel" data-narration-case="'+esc(id)+'" data-narration-chapter="'+(chapter==null?'full':chapter)+'" aria-busy="true"><h4>Narração '+(chapter==null?'completa':'deste capítulo')+'</h4><p class="media-note">Voz do autor · síntese autorizada. A leitura permanece disponível.</p><p class="narration-status" role="status">Preparando os controles de áudio…</p></section>';}
  function mount(root){
    var section=root.querySelector('.narration-panel');if(!section)return;
    var version=epoch;
    loadCatalog().then(function(data){
      if(version!==epoch||!section.isConnected)return;
      var item=data.cases.find(function(item){return item.id===section.dataset.narrationCase;});
      var media=item&&(section.dataset.narrationChapter==='full'?item:item.chapters[Number(section.dataset.narrationChapter)]);
      if(!media)throw new Error('missing');
      section.setAttribute('aria-busy','false');
      section.innerHTML='<h4>'+(media===item?'Narração completa':'Ouvir '+esc(media.name))+' <span>'+duration(media.duration)+'</span></h4><p class="media-note">Voz do autor · síntese autorizada, com tratamento de clareza e volume. Reprodução sob sua escolha.</p><div class="narration-actions"><button type="button" class="pilot-link" data-narration-load>Ouvir '+(media===item?'episódio completo':'este capítulo')+'</button>'+(media===item?'':'<button type="button" class="pilot-link" data-tab="media">Episódio completo · '+duration(item.duration)+'</button>')+'<a href="'+esc(media.src)+'" download>Baixar MP3</a><a href="'+esc(item.transcript)+'" target="_blank" rel="noopener noreferrer">Roteiro e referências</a></div><div class="narration-player"></div><p class="narration-status" role="status"></p>'+(media===item?'<p class="media-note"><a href="assets/media/narrations/" target="_blank" rel="noopener noreferrer">Explorar os 17 episódios narrados</a></p>':'');
    }).catch(function(){if(version!==epoch||!section.isConnected)return;section.setAttribute('aria-busy','false');section.querySelector('.narration-status').textContent='Narração indisponível neste momento. A leitura completa continua acessível.';if(!section.querySelector('[data-narration-retry]'))section.insertAdjacentHTML('beforeend','<button type="button" class="pilot-link" data-narration-retry>Tentar carregar os controles</button>');});
  }
  document.addEventListener('click',function(event){
    var button=event.target.closest('[data-narration-load],[data-narration-retry]');if(!button)return;
    var section=button.closest('.narration-panel');if(!section)return;
    if(button.hasAttribute('data-narration-retry')){mount(section.parentElement);return;}
    var item=catalog&&catalog.cases.find(function(item){return item.id===section.dataset.narrationCase;});
    var media=item&&(section.dataset.narrationChapter==='full'?item:item.chapters[Number(section.dataset.narrationChapter)]);if(!media)return;
    pauseMedia();
    var host=section.querySelector('.narration-player'),status=section.querySelector('.narration-status');
    host.innerHTML='<audio controls preload="none" aria-label="Narração '+esc(item.title)+(media===item?' completa':' · '+esc(media.name))+'"><source src="'+esc(media.src)+'" type="audio/mpeg">Seu navegador não reproduz este arquivo. Use o link para baixar o MP3.</audio>';
    var audio=host.querySelector('audio'),version=epoch,failed=false;
    function current(){return audio.isConnected&&version===epoch;}
    function fail(){failed=true;if(current())status.textContent='Não foi possível reproduzir o áudio. Tente novamente, baixe o MP3 ou continue pela leitura.';}
    audio.addEventListener('error',fail);audio.querySelector('source').addEventListener('error',fail);
    audio.addEventListener('playing',function(){if(current())status.textContent='Reproduzindo. Você pode pausar, ajustar o volume ou a velocidade nos controles.';});
    audio.addEventListener('ended',function(){if(current())status.textContent='Narração concluída. O avanço entre capítulos é manual.';});
    audio.play().catch(function(){if(current()&&!failed&&!audio.error)status.textContent='Use o botão de reprodução do player para ouvir.';});
    button.textContent='Reiniciar narração';
  });
  document.addEventListener('play',function(event){if(event.target.matches('#intel-drawer audio,#intel-drawer video'))pauseMedia(event.target);},true);
  return {markup:markup,mount:mount,stop:stop};
})();
