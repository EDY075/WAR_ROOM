# Git and Release Workflow

## Branching

- Use `codex/<scoped-task>` for implementation work unless the user requests another branch.
- Do not force-push, rewrite public tags, or overwrite a remote without explicit confirmation.
- Merge to `main` only after validation and explicit release scope.

## Commit style

Use Conventional Commits where useful: `docs(ai): ...`, `fix(ui): ...`, `refactor(content): ...`, `chore(release): ...`.

## Release v1.x

```powershell
git status --short
node tests/verify-final-consistency.mjs
git diff --check
git push origin main
git tag -a vX.Y.Z -m "WAR ROOM vX.Y.Z"
git push origin vX.Y.Z
gh release create vX.Y.Z --repo EDY075/WAR_ROOM --title "WAR ROOM vX.Y.Z" --notes "..."
```

Attach only approved portfolio assets. Verify the release with `gh release view vX.Y.Z --repo EDY075/WAR_ROOM` and record the final URL in [CURRENT_STATE.md](CURRENT_STATE.md).
