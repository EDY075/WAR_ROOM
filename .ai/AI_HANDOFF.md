# AI Handoff

## Fast start

Read the documents in the order defined by [README.md](README.md). Then run `git status --short`, `git log -1 --oneline`, and the static verification described in [WORKFLOW.md](WORKFLOW.md).

## Current handoff

- Project: WAR ROOM, a static Cyber Threat Intelligence center with cinematic dossier narratives.
- Version: `v1.1.0 — CTI Evolution` release candidate; latest public release remains `v1.0.3` until publication completes.
- Branch: `codex/war-room-cti-evolution`; publication is paused because `origin/main` contains three later README commits that require explicit confirmation before integration.
- Product scope: 17 dossiers, including five modern dossiers; Intelligence Center; black-and-gold cinematic design.
- Current product layer: conservative CTI UI, stateful navigation, selectable data-backed explorers/relations, accessible experience controls, operational chronology, and optimized initial-load performance. Episode history and static architecture remain preserved.
- Migration: the official workspace was copied and hash-validated from a preserved local source. Source removal is outside the repository release workflow.
- Validation: four verification scripts pass for all 17 dossiers. Refinement Lighthouse is desktop 100/100/100/100 and mobile 96/100/100/100; mobile target size and ARIA checks pass.

## Completion contract

Before handing work off, update the relevant `.ai/` documents, run the applicable validation, report the exact commit/tag/URLs, and leave the working tree clean.
