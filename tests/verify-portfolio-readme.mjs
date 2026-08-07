import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const readme = readFileSync(join(root, "README.md"), "utf8");
const requiredLocalAssets = [
  "banner-github.png",
  "demo-10s.gif",
  "assets/screenshots/release-hero.jpg",
  "assets/screenshots/final-consistency-intelligence.jpg",
  "assets/screenshots/modern-dossier.jpg",
  "assets/screenshots/russia-ukraine-timeline-final.jpg",
  "assets/screenshots/russia-ukraine-modal-final.jpg"
];
const requiredLinks = [
  "https://edy075.github.io/WAR_ROOM/",
  "https://github.com/EDY075",
  "https://linkedin.com/in/edmilson-gomes",
  "https://attack.mitre.org/",
  "https://www.cisa.gov/",
  "https://www.nsa.gov/",
  "https://cert.gov.ua/",
  "https://www.fbi.gov/",
  "https://www.nist.gov/",
  "https://www.kaspersky.com/resource-center",
  "https://commons.wikimedia.org/"
];

assert(!/Sprint\s+[0-9]/i.test(readme), "README ainda referencia sprints antigas");
assert(readme.includes("Edmilson Gomes"), "Autor ausente");
assert(readme.includes("Cybersecurity") && readme.includes("Blue Team") && readme.includes("Threat Intelligence") && readme.includes("Incident Response"), "Áreas do autor ausentes");
for (const asset of requiredLocalAssets) {
  assert(readme.includes(asset), `README não referencia ${asset}`);
  assert(existsSync(join(root, asset)), `Asset ausente: ${asset}`);
}
assert(statSync(join(root, "demo-10s.gif")).size > 100_000, "GIF final parece inválido ou vazio");
for (const url of requiredLinks) assert(readme.includes(url), `Link obrigatório ausente: ${url}`);

console.log(`Portfolio README: ${requiredLocalAssets.length} assets e ${requiredLinks.length} links validados.`);
