# Knowledge Base

## Product and content

- Historical attribution must distinguish agency evidence, industry naming, and actor claims.
- For public IOCs, link to credible advisories or STIX-style sources instead of reproducing active infrastructure.
- When data is not public, state that clearly; never fill gaps with plausible fiction.

## Experience and accessibility

- Decorative Canvas and ambient motion are progressive enhancement. They must not block content, keyboard navigation, or reduced-motion users.
- A cinematic CTA still needs semantic destination, focus transfer, hash state, and visible keyboard behavior.
- Validate real image loading (`naturalWidth`) rather than trusting a URL string.

## Release discipline

- Keep portfolio release changes separate from historical content work.
- Preserve public tags; issue a new patch tag rather than moving an existing release.
- Confirm publication through Git, GitHub README/release, and GitHub Pages rather than only a local push.

## Continuity

- `.ai/` is the single official AI context for WAR ROOM. Root documentation points here; this directory links between canonical documents rather than repeating procedures.

## CTI interface and performance

- A static historical corpus must label its verified coverage separately from the current edition year; simulated live status erodes analytical credibility.
- A lazy `<img>` can still be fetched eagerly when the same URL is placed in inline `background-image`. Defer both representations until the image is actually needed.
- Map, timeline, filters, cards, search, and deep links should derive from one selected-dossier state so that every investigative path stays synchronized.
- Decorative canvas, particles, grain, and pointer effects must pause while the document is hidden and converge to a stopped state; reduced-effects is a user preference, not only a media query.
- Relations between campaigns must be derived from exact structured fields already in the corpus and described as correlations, never as invented causality or attribution.
- On a dense geographic map, replace overlapping mobile hotspots with an accessible horizontal control rail rather than enlarging collisions.
- A remote webfont can block a local/offline cinematic loader and distort Speed Index; a system-serif fallback removes that dependency while preserving the visual language.
