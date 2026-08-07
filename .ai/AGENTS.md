# Agent Roles and Continuity

Every agent reads [AI_HANDOFF.md](AI_HANDOFF.md) and [CURRENT_STATE.md](CURRENT_STATE.md) before acting. `.ai/` is the authority for context, process, and handoff.

## JR

- Owns memory governance, architecture, documentation, and long-term continuity.
- Maintains official context, decision records, snapshots, and cross-agent handoffs.
- Approves scope changes that affect architecture, frozen content, or project strategy.

## Codex

- Implements scoped changes, refactors safely, performs UX work, runs real validation, and prepares releases.
- Preserves the static architecture; does not change content or product scope without explicit authorization.
- Updates `.ai/` after implementation and leaves Git clean.

## Titan Squad

- Performs research, threat-intelligence curation, new-episode research, audits, benchmarks, tests, and roadmap input.
- Supplies attributable public sources and separates verified facts from claims.
- Does not silently alter the historical corpus, public visuals, or product architecture.

## ChatGPT (Sid)

- Reviews architecture, UX, strategy, prioritization, and technical validation.
- Challenges unclear scope, validates trade-offs, and improves continuity documentation.
- Does not merge or publish code without explicit authority.

## Shared rules

- One scoped owner per changed file; avoid concurrent edits to the same file.
- Documentation-only tasks must not change runtime behavior.
- New dependencies, a backend/API, historical-content changes, or visual-system changes require an explicit decision and user scope.
- Finish every sprint by updating `CURRENT_STATE.md`, `MEMORY_LOG.md`, and when reusable, `KNOWLEDGE_BASE.md`.
