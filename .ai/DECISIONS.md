# Decisions

| ID | Decision | Rationale |
| --- | --- | --- |
| ADR-001 | Static single-page delivery | GitHub Pages serves the portfolio directly; no backend or build pipeline is required. |
| ADR-002 | Public-intelligence framing | Dossiers distinguish documented attribution from claims and avoid publishing active infrastructure. |
| ADR-003 | One canonical experience | `index.html` owns the runtime; `episodes/` is source material, not a second UI. |
| ADR-004 | Local modern visual assets | The five modern dossiers use local previews/maps with credits for durable portfolio rendering. |
| ADR-005 | Accessibility is progressive | Keyboard use, focus management, lazy loading, and `prefers-reduced-motion` remain first-class constraints. |
| ADR-006 | `.ai/` is official AI context | Root README links here; agents update this directory rather than duplicating operational state elsewhere. |

## Decision protocol

Record a new ADR entry before changing architecture, deployment, dependencies, data model, historical corpus, or visual identity. Small scoped fixes belong in `MEMORY_LOG.md` unless they establish a reusable rule.
