import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const readme = readFileSync(join(root, "README.md"), "utf8");
const requiredLocalAssets = [
  "banner-github.png",
  "assets/screenshots/cti-hero.png",
  "assets/screenshots/cti-header-experience.png",
  "assets/screenshots/cti-mobile.png",
  "assets/screenshots/cti-prologue.png",
  "assets/screenshots/cti-explorers-relations.png",
  "assets/screenshots/cti-chronology.png"
];
const requiredLinks = [
  "https://edy075.github.io/WAR_ROOM/",
  "https://github.com/EDY075",
  "https://www.linkedin.com/in/edmilsongomes21/",
  "https://www.instagram.com/edmilson_zn_/",
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
assert(readme.includes("v1.1.0") && readme.includes("base histórica 1988–2025, edição 2026"), "Identidade da release v1.1.0 ausente");
assert(readme.includes("docs/RELEASE_AUDIT_v1.1.0.md"), "README não referencia a auditoria pública saneada");
assert(readme.includes("Edmilson Gomes"), "Autor ausente");
assert(readme.includes("Cybersecurity") && readme.includes("Blue Team") && readme.includes("Threat Intelligence") && readme.includes("Incident Response"), "Áreas do autor ausentes");
for (const asset of requiredLocalAssets) {
  assert(readme.includes(asset), `README não referencia ${asset}`);
  assert(existsSync(join(root, asset)), `Asset ausente: ${asset}`);
}
for (const url of requiredLinks) assert(readme.includes(url), `Link obrigatório ausente: ${url}`);

const publicTextFiles = readdirSync(root, { recursive: true })
  .map(String)
  .filter((path) => !/^(?:\.git|archive|audit)(?:[\\/]|$)/i.test(path))
  .filter((path) => /\.(?:html|md|mjs|js|css|json)$/i.test(path));
for (const path of publicTextFiles) {
  const content = readFileSync(join(root, path), "utf8");
  assert(!/[A-Z]:\\(?:Users|EDY-Projects)\\/i.test(content), `Path local detectado em ${path}`);
  assert(!/file:\/\//i.test(content), `URL de arquivo local detectada em ${path}`);
}

console.log(`Portfolio README: ${requiredLocalAssets.length} assets e ${requiredLinks.length} links validados.`);
