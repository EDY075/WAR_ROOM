# Coding Standards

## Runtime code

- Keep `index.html` browser-native, dependency-free, and readable in its established style.
- Preserve semantic HTML, labels, keyboard interactions, focus behavior, and reduced-motion support.
- Use local assets only through stable relative paths; maintain `assets/images/CREDITS.md` for new third-party visuals.
- Do not invent historical facts, attribution, IOCs, or references. Use an explicit public-disclosure statement when evidence is unavailable.
- Keep public external links secure with `target="_blank" rel="noopener noreferrer"`.

## Documentation

- Use `.ai/` for agent continuity; do not paste its state into several files.
- Link to the canonical document instead of copying operational guidance.
- Preserve existing public README content unless the change affects public use or release information.

## Validation

- A changed CTA, card, modal, asset, or interaction requires browser validation.
- A changed static contract requires `node tests/verify-final-consistency.mjs`.
- Always run `git diff --check` before commit.
