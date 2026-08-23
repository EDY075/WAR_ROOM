# Project Context

## Mission

WAR ROOM is a portfolio-quality, browser-native documentary experience about cyber conflicts. It turns public historical material into 17 interactive dossiers, from Morris Worm (1988) to five modern conflict dossiers.

## Product objective

Preserve a cinematic, accessible, and performant investigation experience while clearly distinguishing documented public intelligence from attribution claims. The project is educational and visual; it is not a live SOC or threat-intelligence feed.

## Current release

`v1.1.0 — CTI Evolution` is the approved release candidate. Publication is paused while three later `origin/main` README commits are reviewed; the latest public release remains `v1.0.3`. The candidate adds global search, synchronized investigative navigation, CTI explorers, deep links, an operational chronology, accessibility refinements, and release evidence without rewriting the 17-dossier historical corpus.

## Content model

- 12 classic episodes have source material in `episodes/`.
- 5 modern dossiers cover Russia x Ukraine, Volt Typhoon, Salt Typhoon, Lazarus Group, and Israel x Iran.
- Every on-page dossier is represented in the `EPISODES`, `STORIES`, and `INTEL_INDEX` data in `index.html`.
- Public sources and credits must be kept attributable; unavailable information is stated as not publicly disclosed rather than invented.

## Delivery model

The root `index.html` is served directly from `main` by GitHub Pages. The canonical URLs are listed in [CURRENT_STATE.md](CURRENT_STATE.md).
