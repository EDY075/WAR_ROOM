# Decisions

| ID | Decision | Rationale |
| --- | --- | --- |
| ADR-001 | Static single-page delivery | GitHub Pages serves the portfolio directly; no backend or build pipeline is required. |
| ADR-002 | Public-intelligence framing | Dossiers distinguish documented attribution from claims and avoid publishing active infrastructure. |
| ADR-003 | One canonical experience | `index.html` owns the runtime; `episodes/` is source material, not a second UI. |
| ADR-004 | Local modern visual assets | The five modern dossiers use local previews/maps with credits for durable portfolio rendering. |
| ADR-005 | Accessibility is progressive | Keyboard use, focus management, lazy loading, and `prefers-reduced-motion` remain first-class constraints. |
| ADR-006 | `.ai/` is official AI context | Root README links here; agents update this directory rather than duplicating operational state elsewhere. |
| ADR-007 | Conservative CTI application layer | Keep the static single-page architecture and native JavaScript while adding shared selection state, global search, filters, deep links, dossier drawer, and synchronized map/timeline/cards. This preserves deployment and the 17-dossier corpus without adding a framework or build step. |
| ADR-008 | Historical status must be explicit | The verified corpus spans 1988–2025. The interface may identify the 2026 edition, but must not present simulated live telemetry, a 2026 incident, or an automatic feed as current intelligence. |
| ADR-009 | Third-party media loads on demand | Remote image preloads are prohibited for dossier content and SoundCloud is loaded only after an explicit soundtrack choice. Initial rendering favors local/runtime-critical assets and progressive enhancement. |

## Decision protocol

## Experience evolution — 2026-10-03 (authorized scope)

- ADR-010: A single modal dossier workspace has five tabs (Resumo, História, Análise, Mídia, Fontes). Existing cards, map, timeline, search and narrative actions route to this workspace. Lightbox remains a nested media viewer only. Historical EPISODES/STORIES/INTEL_INDEX remain canonical.
- ADR-011: Keep static delivery. Extract new experience styling/behavior into relative `assets/css/experience.css` and `assets/js/experience.js`; no framework, backend or production dependency. URL hash preserves legacy dossier IDs; query parameters preserve filters, search, order, tab and pilot chapter. Browser history restores context and focus.
- ADR-012: Editorial order retains episode IDs and corpus sequence. Chronological order uses the first documented year of an interval, then editorial sequence as stable tie-breaker. Complete intervals remain visible; no inferred event date.
- ADR-013: NotPetya is a six-chapter reading-first pilot. Manual navigation is default; animated propagation has a pause control. Illustrations are labeled reconstructions, diagrams are schematic, archival media retain credits. Narration is offered only if a real file exists. Heavy video loads after explicit choice.
- ADR-014: Decorative loops stop for reduced effects, OS reduced motion, hidden document and modal reading. Grain is one reusable static small texture. Natural scroll and content-visibility stay intact.

Record a new ADR entry before changing architecture, deployment, dependencies, data model, historical corpus, or visual identity. Small scoped fixes belong in `MEMORY_LOG.md` unless they establish a reusable rule.
