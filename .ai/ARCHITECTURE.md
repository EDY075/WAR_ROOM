# Architecture

## Runtime architecture

WAR ROOM is a static client-side web application. It has no backend, API, database, package manager, or build output in the release path.

```text
GitHub Pages (main / root)
  -> index.html
     -> HTML sections, CSS design tokens, JavaScript data and interactions
     -> EPISODES + STORIES + INTEL_INDEX
     -> Canvas / Web Audio / IntersectionObserver browser APIs
  -> assets/images (local modern previews, maps, credits, screenshots)
  -> episodes (source texts for classic chapters)
  -> tests/verify-final-consistency.mjs
```

## Main application responsibilities

| Area | Location | Responsibility |
| --- | --- | --- |
| Experience | `index.html` | Loader, hero, navigation, chapters, modals, accessibility, motion |
| Dossier content | `index.html` | `EPISODES`, `STORIES`, and public-intelligence metadata |
| Intelligence Center | `index.html` | `INTEL_INDEX`, filters, map hotspots, timeline, explorers |
| Static media | `assets/images/` | Local previews/maps and `CREDITS.md` |
| Source material | `episodes/` | Classic episode research texts |
| Release check | `tests/verify-final-consistency.mjs` | 17 episodes, CTA, secure links, and local modern assets |

## Architectural boundaries

## Experience evolution in review

`index.html` continues to own canonical historical data and the original initialization. New behavior and styling are extracted into relative `assets/js/experience.js` and `assets/css/experience.css`, loaded without a build. The module owns dossier tabs, reading chapters, history snapshots, query context, editorial/chronological ordering and decorative-loop lifecycle. Legacy entry points call this module; the separate story modal and expanded episode details were retired.

The dossier workspace is moved to a body-level dialog before initialization so that the surrounding main/header/footer can be inert without disabling the dialog. Lightbox is a nested viewer with independent Escape and focus restoration. Canonical data fingerprints are protected by `tests/verify-experience-data.mjs`.

`assets/js/documentaries.js` owns the separate editorial overlay for 17 six-chapter documentaries, cover metadata and additional primary references. `assets/js/cartography.js` owns projection, regional anchors, camera state and shared map figures. The selected chapter is rendered into the one dialog; the corpus does not duplicate 102 chapter DOM trees. No historical array is rewritten. The local `world-110m.svg` is one cached image reused across maps, generated offline with `scripts/build-cartography.cjs`. Zoom is explicit; page scroll remains native.

`assets/media/notpetya/materials.html` is the editable source and download preview for campaign pieces; PNGs and the real MP4 are static output. Export/montage scripts are optional development tools and introduce no production dependency. All asset paths stay relative beneath `/WAR_ROOM/`.

- Keep the project browser-native and dependency-light.
- Do not introduce a backend or API without an explicit architecture decision.
- Do not duplicate the historical corpus: episode source files and in-page rendered data must remain traceable.
- Keep `.ai/` as the official AI context, not product runtime input.
