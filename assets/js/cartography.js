/* Cached local geography; anchors express regional context, never infection telemetry. */
window.WarRoomCartography=(function(){
  var anchors={
    'morris-worm':[-71.06,42.36,'Boston · rede acadêmica dos EUA',38,-50],
    melissa:[-74.17,40.73,'EUA · contexto da investigação',75,4],
    iloveyou:[120.98,14.6,'Manila · origem da campanha',0,0],
    estonia:[24.75,59.44,'Tallinn · infraestrutura estoniana',-65,-22],
    stuxnet:[51.7,33.7,'Natanz · contexto industrial iraniano',35,20],
    sony:[-118.4,34.02,'Culver City · Sony Pictures',-35,40],
    wannacry:[-.12,51.5,'Reino Unido · contexto do NHS; alcance global',-65,26],
    notpetya:[30.52,50.45,'Ucrânia · ponto de partida observado',12,-20],
    solarwinds:[-77.04,38.9,'EUA · contexto de alvos governamentais',26,64],
    colonial:[-84.39,33.75,'Sudeste dos EUA · contexto do oleoduto',-22,92],
    log4j:[0,0,'Alcance global · sem origem geográfica única',0,0],
    mgm:[-115.14,36.17,'Las Vegas · contexto de operações',-56,-18],
    'ukraine-war':[30.52,50.45,'Ucrânia · infraestrutura e serviços civis',65,35],
    'volt-typhoon':[144.79,13.45,'Guam · um dos territórios citados',10,18],
    'salt-typhoon':[-77.04,38.9,'EUA · recorte de telecomunicações; campanha internacional',88,60],
    'lazarus-modern':[125.75,39.04,'Coreia do Norte · contexto de atribuição; alvos internacionais',0,-10],
    'israel-iran':[35.22,31.77,'Israel–Irã · contexto regional; alvos também no exterior',-20,46]
  };
  var zoom=1,x=50,y=50;
  function ensure(){var image=document.querySelector('#map-camera .world-cartography');if(image&&!image.getAttribute('src'))image.src=image.dataset.mapSrc;}
  function point(id,displaced){if(id==='log4j')return {x:860,y:385,label:'Alcance global · sem origem geográfica única',global:true};var a=anchors[id]||[0,0,'Contexto global',0,0];return {x:(a[0]+180)*1000/360+(displaced?a[3]:0),y:(85-a[1])*430/145+(displaced?a[4]:0),label:a[2]};}
  function links(items){return '<svg class="map-leaders" viewBox="0 0 1000 430" aria-hidden="true">'+items.filter(function(item){return item.id!=='log4j';}).map(function(item){var p=point(item.id),q=point(item.id,true);return '<path d="M'+p.x.toFixed(1)+','+p.y.toFixed(1)+'L'+q.x.toFixed(1)+','+q.y.toFixed(1)+'"/><circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="2"/>';}).join('')+'</svg>';}
  function sync(items){var leader=document.getElementById('map-leaders');if(leader)leader.innerHTML=links(items);}
  function apply(){var camera=document.getElementById('map-camera');if(!camera)return;camera.style.transform='translate('+((50-x)*(zoom-1))+'%,'+((50-y)*(zoom-1))+'%) scale('+zoom+')';document.getElementById('map-zoom-status').textContent=zoom===1?'Visão mundial':'Ampliação '+zoom.toFixed(1)+'×';document.getElementById('map-zoom-out').disabled=zoom===1;document.getElementById('map-zoom-in').disabled=zoom>=2.5;}
  function state(){return {zoom:zoom,x:x,y:y};}
  function restore(value){value=value||{};zoom=Math.min(2.5,Math.max(1,Number(value.zoom)||1));x=Math.max(0,Math.min(100,Number(value.x)||50));y=Math.max(0,Math.min(100,Number(value.y)||50));apply();}
  function init(){var viewport=document.getElementById('intel-map'),observer=new IntersectionObserver(function(entries){if(entries.some(function(e){return e.isIntersecting;})){ensure();observer.disconnect();}},{rootMargin:'200px'});observer.observe(viewport);document.querySelectorAll('[data-map-zoom]').forEach(function(button){button.addEventListener('click',function(){ensure();WarRoomExperience.save();if(button.dataset.mapZoom==='reset'){zoom=1;x=y=50;}else{zoom=Math.min(2.5,Math.max(1,zoom+Number(button.dataset.mapZoom)));var p=point(selectedIntelId||'notpetya',true);x=p.x/10;y=p.y/4.3;}apply();WarRoomExperience.commit(false);});});document.getElementById('intel-hotspots').addEventListener('focusin',function(event){var button=event.target.closest('[data-intel-hotspot]');if(button&&zoom>1){var p=point(button.dataset.intelHotspot,true);x=p.x/10;y=p.y/4.3;apply();}});apply();}
  function figure(id,paused){var p=point(id),label=intelEscape(p.label),title=EPISODES.find(function(e){return e.id===id;}).title;
    return '<figure class="dossier-figure"><div class="pilot-map'+(paused?' paused':'')+'" role="img" aria-label="Cartografia de contexto: '+label+'"><img class="world-cartography" loading="lazy" decoding="async" src="assets/images/maps/world-110m.svg" width="1000" height="430" alt=""><svg class="map-overlay" viewBox="0 0 1000 430" aria-hidden="true">'+(p.global?'<path class="pilot-route scope-outline" d="M16 16H984V414H16Z"/>':'<circle class="pilot-route map-beacon" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="20"/><circle class="map-center" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="5"/>')+''+(id==='israel-iran'?'<circle class="map-center" cx="642.8" cy="146.2" r="4"/>':'')+'</svg><span class="map-case-label">'+intelEscape(title)+'</span></div><figcaption>'+label+'. Natural Earth · domínio público. Posição regional representativa; não localiza vítimas nem comprova rotas de propagação.</figcaption><button type="button" class="pilot-link" data-map-pause aria-pressed="'+paused+'">'+(paused?'Retomar animação':'Pausar animação')+'</button></figure>';
  }
  return {point:point,sync:sync,state:state,restore:restore,init:init,figure:figure,ensure:ensure};
})();
