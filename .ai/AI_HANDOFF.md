# AI Handoff

## Fast start

Read the documents in the order defined by [README.md](README.md). Then run `git status --short`, `git log -1 --oneline`, and the static verification described in [WORKFLOW.md](WORKFLOW.md).

## Current handoff

- Project: WAR ROOM, a static Cyber Threat Intelligence center with cinematic dossier narratives.
- Version and release: `v1.1.0 — CTI Evolution`, published on GitHub Pages and GitHub Releases.
- Branch: `main`; use a `codex/` branch for every new scoped change.
- Product scope: 17 dossiers, including five modern dossiers; Intelligence Center; black-and-gold cinematic design.
- Current product layer: conservative CTI UI, stateful navigation, selectable data-backed explorers/relations, accessible experience controls, operational chronology, and optimized initial-load performance. Episode history and static architecture remain preserved.
- Migration: the official workspace was copied and hash-validated from a preserved local source. Source removal is outside the repository release workflow.
- Validation: four verification scripts pass for all 17 dossiers. Refinement Lighthouse is desktop 100/100/100/100 and mobile 96/100/100/100; mobile target size and ARIA checks pass.

## Completion contract

Before handing work off, update the relevant `.ai/` documents, run the applicable validation, report the exact commit/tag/URLs, and leave the working tree clean.
