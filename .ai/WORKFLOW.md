# Workflow

## Documentation-only work

1. Read `.ai/README.md` and `CURRENT_STATE.md`.
2. Confirm scope and frozen items.
3. Edit only the intended documentation files.
4. Run link and static checks.
5. Update `CURRENT_STATE.md`, `MEMORY_LOG.md`, and `KNOWLEDGE_BASE.md` as applicable.
6. Commit atomically and push only after validation.

## Product change workflow

```text
scope -> source verification -> decision (if needed) -> implementation -> browser validation -> static check -> memory -> commit -> push/release
```

## Local preview

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`. Stop the temporary server after the validation; do not use infinite retries or block on the process.

## Required release checks

For experience changes also run `node tests/verify-cti-evolution.mjs`, `node tests/verify-ai-memory.mjs`, `node tests/verify-portfolio-readme.mjs` and `node tests/verify-experience-data.mjs`. With optional Playwright available through `NODE_PATH`, run `node tests/verify-experience.cjs`. It validates desktop/mobile, all 17 dossier routes, chapters, keyboard/focus, history, search/filters, image races/failures, reduced effects and real video metadata. Deterministic remote-image fixtures are explicitly used for the race/failure cases; `scripts/capture-experience.cjs` captures the real local visuals and decodes the archival image separately.

The experience preview uses the parent directory to exercise the Pages prefix: serve the directory containing WAR_ROOM, then open `http://127.0.0.1:4173/WAR_ROOM/`. For review-only delivery, keep the preview available for the user and document that it is a temporary local server; stop it when review finishes. Do not push, merge, tag or publish without new scope.

Also run `node tests/verify-documentaries.cjs` with Playwright for all 102 chapters at desktop/mobile viewports, local image decode, real cartography, map zoom/history, per-case sources, chapter deep links and reduced animation. For narration changes run `node tests/verify-narrations.cjs` (all 119 actual audio browser decodes, desktop/mobile library/playback/lifecycle/error checks), final-file measurements with `scripts/measure-narration-audio.py`, and local installed ASR review. Detailed ASR/measurement records remain ignored; sanitize results in the production report.

Run `tests/measure-experience.cjs` baseline/current sequentially, without other browser jobs competing for CPU; do not reuse intermediate pilot-only numbers after corpus/map changes. See the validation report for the reproducible method.

```powershell
node tests/verify-final-consistency.mjs
git diff --check
git status --short
```

Then confirm the published Pages site, browser console, core CTA, dossier rendering, and release assets when the change affects them. See [GIT_WORKFLOW.md](GIT_WORKFLOW.md) for Git and release commands.
