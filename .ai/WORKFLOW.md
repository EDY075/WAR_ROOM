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

```powershell
node tests/verify-final-consistency.mjs
git diff --check
git status --short
```

Then confirm the published Pages site, browser console, core CTA, dossier rendering, and release assets when the change affects them. See [GIT_WORKFLOW.md](GIT_WORKFLOW.md) for Git and release commands.
