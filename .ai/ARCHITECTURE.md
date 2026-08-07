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

- Keep the project browser-native and dependency-light.
- Do not introduce a backend or API without an explicit architecture decision.
- Do not duplicate the historical corpus: episode source files and in-page rendered data must remain traceable.
- Keep `.ai/` as the official AI context, not product runtime input.
