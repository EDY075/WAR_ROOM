import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");

for (const script of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) {
  new Function(script[1]);
}

const dossierIds = [...html.matchAll(/\{id:"([^"]+)",num:"\d{2}"/g)].map((match) => match[1]);
assert.equal(new Set(dossierIds).size, 17, "A coleção deve manter 17 dossiês únicos");
assert(!/GLOBAL THREAT NETWORK \/ LIVE|>AGORA<|feed de inteligencia global/i.test(html), "A interface não pode sugerir telemetria ao vivo");
assert(!html.includes('EPISODES.slice(0, 4)'), "Imagens remotas abaixo da dobra não devem ser pré-carregadas");
assert(!/<script[^>]+soundcloud\.com\/player\/api\.js/i.test(html), "SoundCloud deve ser carregado apenas sob demanda");
assert(!/episode-image-blur" style="background-image/i.test(html), "O placeholder não pode anular o lazy loading");
assert(!html.includes('var links=["Morris Worm"'), "Relações não podem permanecer hard-coded como causalidade visual");
assert(!/(?:src|href)=["']\//i.test(html), "Assets raiz-absolutos quebrariam o subdiretório /WAR_ROOM/");
assert(!/<base\s+href=["']\//i.test(html), "Base href raiz-absoluta quebraria o GitHub Pages");

for (const functionName of ["renderEpisodes", "renderIntelligence", "renderIntelTimeline", "openIntelEpisode", "openStory", "initNav"]) {
  const declarations = [...html.matchAll(new RegExp(`function ${functionName}\\(`, "g"))];
  assert.equal(declarations.length, 1, `${functionName} deve possuir uma única implementação`);
}
assert.equal([...html.matchAll(/hcta\.addEventListener\("click"/g)].length, 1, "CTA principal deve ter um único binding");

for (const contract of [
  'id="global-search"',
  'id="intel-drawer"',
  'id="back-to-top"',
  'id="effects-toggle"',
  'id="experience-popover"',
  'id="search-shortcut-key"',
  'id="mitre-search"',
  'id="group-search"',
  'id="ioc-search"',
  'id="intel-hotspots-mobile"',
  'id="relation-context"',
  'function selectIntelDossier(',
  'function openIntelEpisode(',
  'function renderCampaignRelations(',
  'function intelMatchesExplorer(',
  'function ensureSoundCloudApi(',
  'id="dossier-\' + ep.id',
  'class="episode-progress"',
  'data-episode-nav="',
  'aria-pressed="'
]) {
  assert(html.includes(contract), `Contrato operacional ausente: ${contract}`);
}

assert(html.includes('class="intel-card') && html.includes('<button type="button" class="intel-card'), "Cards CTI devem usar controles nativos");
assert(html.includes('body.effects-reduced'), "Modo de efeitos reduzidos ausente");
assert(html.includes('aria-current","location"'), "Navegação não expõe seção atual");
assert(html.includes('item.iocs.indexOf(intelExplorerState.value)>=0'), "IOC Explorer deve filtrar pelo campo IOC");
assert(/id="lb-image"[^>]+width="1280"[^>]+height="720"/.test(html), "Lightbox principal deve reservar dimensões");
assert(/id="lb-image-next"[^>]+width="1280"[^>]+height="720"/.test(html), "Camada seguinte do lightbox deve reservar dimensões");
assert(html.includes('navigator.userAgentData') && html.includes('"⌘K":"Ctrl+K"'), "Atalho visual deve respeitar a plataforma");

function hasExactCase(relativePath) {
  let current = root;
  for (const segment of relativePath.split(/[\\/]/)) {
    const names = readdirSync(current);
    if (!names.includes(segment)) return false;
    current = resolve(current, segment);
  }
  return existsSync(current) && statSync(current).isFile();
}

const localAssets = new Set([...html.matchAll(/assets\/[A-Za-z0-9_./() -]+\.(?:png|jpe?g|gif|svg|webp)/gi)].map((match) => match[0]));
for (const asset of localAssets) assert(hasExactCase(asset), `Asset ausente ou com capitalização incompatível no Linux: ${asset}`);

console.log("CTI evolution: integridade, busca, experiência, exploradores, relações, cronologia e performance validados.");
