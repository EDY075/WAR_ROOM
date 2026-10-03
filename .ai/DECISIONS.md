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
- ADR-015: The user explicitly extended the documentary treatment to all 17 dossiers. Each receives six manual chapters, its own editorial headings/context, complete original reading and analysis, chapter deep links and sources. This separate presentation layer does not mutate the canonical corpus. Case changes begin at the opening; browser history restores the saved chapter.
- ADR-016: Replace schematic continents with locally generated Natural Earth 1:110m cartography (public domain). Equirectangular projection and representative regional anchors are explicit; displaced controls use leader lines. Geography is context, not attack routes, victim locations or live telemetry. SVG geography is shared, cached and loaded on demand; zoom uses buttons, with no scroll interception or GIS runtime.
- ADR-017: Deliver actual synthetic Portuguese narration produced locally with an installed engine, after transcription/format checks, as a 42-second teaser plus MP3/VTT. Preserve the independent silent 36-second version and complete reading. No personal voice profile is used; existing local engine preferences are restored. Runtime remains static and media stays on demand.
- ADR-018: After the user approved their reference-based voice sample and explicitly authorized prolonged versions for all seventeen cases, produce six chapter narrations plus a full MP3 per case. Keep original personal recordings/reference and raw production WAVs in ignored local storage; only authorized finished narrations, transcripts and timing files enter the review branch. Use the existing documented chapter prose, preserve canonical historical arrays, and improve clarity with restrained EQ/dynamics and measured loudness. Explicit playback loads only the selected file; chapter/case/tab/close/hidden transitions pause media. No TTS service is required at runtime and no personal VoiceStudio profile/preferences are modified.

Record a new ADR entry before changing architecture, deployment, dependencies, data model, historical corpus, or visual identity. Small scoped fixes belong in `MEMORY_LOG.md` unless they establish a reusable rule.

## Publication preparation · 2026-10-03

Publication scope on 2026-10-03: the owner authorized GitHub/main, existing root GitHub Pages and the existing portfolio Worker. Keep historical v1.1.0 tag intact, retain static /WAR_ROOM/ paths and publish only approved final media. Preserve the dirty portfolio checkout by implementing in an isolated Git worktree based on remote main, carrying forward the already published runtime before adding this case.
