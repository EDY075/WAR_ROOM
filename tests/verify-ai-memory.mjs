import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, normalize } from "node:path";

const root = process.cwd();
const ai = join(root, ".ai");
const required = [
  "README.md", "AGENTS.md", "AI_HANDOFF.md", "PROJECT_CONTEXT.md",
  "ARCHITECTURE.md", "TECH_STACK.md", "DECISIONS.md", "WORKFLOW.md",
  "CODING_STANDARDS.md", "DESIGN_SYSTEM.md", "TROUBLESHOOTING.md",
  "ROADMAP_AI.md", "MEMORY_LOG.md", "KNOWLEDGE_BASE.md", "PROMPTS.md",
  "CURRENT_STATE.md", "GIT_WORKFLOW.md"
];

assert(existsSync(ai), ".ai/ ausente");
for (const file of required) assert(existsSync(join(ai, file)), `Documento obrigatório ausente: .ai/${file}`);

const aiFiles = readdirSync(ai).filter((file) => file.endsWith(".md"));
for (const file of aiFiles) {
  const content = readFileSync(join(ai, file), "utf8");
  assert(!/EDY\s*SIEM/i.test(content), `Referência residual ao EDY SIEM em .ai/${file}`);
  for (const match of content.matchAll(/\]\(([^)#]+\.md)(?:#[^)]+)?\)/g)) {
    const target = normalize(join(ai, match[1]));
    assert(existsSync(target), `Link quebrado em .ai/${file}: ${match[1]}`);
  }
}

const rootReadme = readFileSync(join(root, "README.md"), "utf8");
assert(rootReadme.includes("## Continuidade por IA"), "README não possui a seção Continuidade por IA");
assert(rootReadme.includes("[`.ai/`](.ai/)"), "README não referencia a fonte oficial .ai/");

console.log(`AI memory: ${required.length} documentos obrigatórios e links internos validados.`);
