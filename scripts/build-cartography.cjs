/* Offline asset generation. Input: Natural Earth ne_110m_admin_0_countries.geojson.
   Source: https://github.com/nvkelso/natural-earth-vector/tree/master/geojson
   Public domain: https://www.naturalearthdata.com/about/terms-of-use/ */
const fs=require('node:fs');
const crypto=require('node:crypto');
const input=process.argv[2];
if(!input)throw new Error('Pass the downloaded Natural Earth GeoJSON path.');
const raw=fs.readFileSync(input),data=JSON.parse(raw);
const point=([lon,lat])=>[((lon+180)*1000/360).toFixed(2),((85-lat)*430/145).toFixed(2)];
const ring=coords=>coords.map((p,i)=>(i?'L':'M')+point(p).join(',')).join('')+'Z';
const countries=data.features.filter(f=>f.properties.ADMIN!=='Antarctica').map(f=>{
  const polygons=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;
  return '<path d="'+polygons.map(p=>p.map(ring).join('')).join('')+'"/>';
}).join('');
let grid='';
for(let lon=-150;lon<=150;lon+=30){const x=point([lon,0])[0];grid+='<path d="M'+x+',0V430"/>';}
for(let lat=-30;lat<=60;lat+=30){const y=point([0,lat])[1];grid+='<path d="M0,'+y+'H1000"/>';}
const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 430"><title>Natural Earth · cartografia mundial</title><desc>Projeção equiretangular, latitudes 85°N a 60°S. Contexto geográfico; não representa rotas de ataques. Dados Natural Earth 1:110m, domínio público.</desc><defs><radialGradient id="ocean"><stop stop-color="#20291f"/><stop offset="1" stop-color="#0e1513"/></radialGradient><linearGradient id="land" x2="0" y2="1"><stop stop-color="#495042"/><stop offset="1" stop-color="#27352b"/></linearGradient></defs><rect width="1000" height="430" fill="url(#ocean)"/><g fill="none" stroke="#baa978" stroke-opacity=".1" stroke-width=".6">'+grid+'</g><g fill="url(#land)" stroke="#baad83" stroke-opacity=".35" stroke-width=".55" stroke-linejoin="round" fill-rule="evenodd">'+countries+'</g><g fill="#bcb8a5" fill-opacity=".58" font-family="Georgia,serif" font-size="11" letter-spacing="2"><text x="339" y="260">ATLÂNTICO</text><text x="55" y="276">PACÍFICO</text><text x="876" y="245">PACÍFICO</text><text x="684" y="326">ÍNDICO</text></g><g fill="#bcb8a5" fill-opacity=".55" font-family="monospace" font-size="9"><text x="8" y="80">60° N</text><text x="8" y="170">30° N</text><text x="8" y="256">0°</text><text x="8" y="347">30° S</text></g></svg>';
fs.mkdirSync('assets/images/maps',{recursive:true});
fs.writeFileSync('assets/images/maps/world-110m.svg',svg);
console.log(JSON.stringify({features:data.features.length,bytes:Buffer.byteLength(svg),sourceSHA256:crypto.createHash('sha256').update(raw).digest('hex')}));
