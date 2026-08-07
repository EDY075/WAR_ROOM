import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const expectedEpisodes = [
  "morris-worm", "melissa", "iloveyou", "estonia", "stuxnet", "sony", "wannacry",
  "notpetya", "solarwinds", "colonial", "log4j", "mgm", "ukraine-war", "volt-typhoon",
  "salt-typhoon", "lazarus-modern", "israel-iran"
];
const expectedLocalMedia = [
  "assets/images/ep13-russia-ukraine/preview.jpg",
  "assets/images/ep13-russia-ukraine/region-map.png",
  "assets/images/ep14-volt-typhoon/preview.jpg",
  "assets/images/ep14-volt-typhoon/region-map.png",
  "assets/images/ep15-salt-typhoon/preview.jpg",
  "assets/images/ep15-salt-typhoon/region-map.svg",
  "assets/images/ep16-lazarus-group/preview.jpg",
  "assets/images/ep16-lazarus-group/region-map.png",
  "assets/images/ep17-israel-iran/preview.jpg",
  "assets/images/ep17-israel-iran/region-map.png"
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const script of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) {
  new Function(script[1]);
}

for (const id of expectedEpisodes) {
  assert(html.includes('id:"' + id + '"'), `Episódio ausente: ${id}`);
  assert(html.includes('"' + id + '": {region:'), `Metadado editorial ausente: ${id}`);
}

assert(html.includes("function focusIntelligenceCenter()"), "CTA não possui rota dedicada");
assert(html.includes('"#intelligence"'), "CTA não atualiza a âncora do Intelligence Center");
assert(html.includes('hcta.addEventListener("click", focusIntelligenceCenter)'), "CTA não usa a nova rota");
assert(html.includes('target="_blank" rel="noopener noreferrer"'), "Referências externas não estão seguras");

for (const relativePath of expectedLocalMedia) {
  assert(existsSync(resolve(root, relativePath)), `Asset local ausente: ${relativePath}`);
}

console.log(`Final consistency: ${expectedEpisodes.length} episódios, CTA e ${expectedLocalMedia.length} assets validados.`);
