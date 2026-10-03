import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const html=readFileSync('index.html','utf8');
const context={};
vm.runInNewContext(html.slice(html.indexOf('var EPISODES='),html.indexOf('var intelTechnique')),context);
// Canonical data fingerprints at aeaa524, before this authorized experience work.
const expected={EPISODES:'7cde1d877d598afdb7c21e0f679b74693d0dad05cf8115d04274dfe1bda2ad49',STORIES:'e905c39e5e04f95cfe5b66619865b7792d3f5b164a19d297c651d67a724b9e5b',INTEL_INDEX:'eee9d8ecb65016baf0449c6f8abed1c003c0a176949491f49058649ee1d249e9'};
for(const [name,hash] of Object.entries(expected))assert.equal(createHash('sha256').update(JSON.stringify(context[name])).digest('hex'),hash,`${name}: historical corpus must remain unchanged`);
assert.equal(context.EPISODES.length,17);
new vm.Script(readFileSync('assets/js/experience.js','utf8'));
console.log('Experience: all 17 canonical dossiers, narratives, references and intelligence metadata unchanged; extracted JS parses.');
