# Knowledge Base

## Entrance rendering and promotional exports

- Zero JavaScript animation callbacks do not prove lower rendering cost: continuous SVG transform/opacity animation increased measured renderer task time. Compare actual CDP task samples; use static vector identity when animation adds no information.
- When a preloader Enter handler moves focus to a button, prevent its native default action so the same key does not activate the destination. Test pending-font timeout, trap and focus separately from the normal fast path.
- Export social composition from local HTML at native/2× dimensions, reject overflow, inspect every piece, include sRGB/hash manifest and editable source. PNG URLs are visual addresses; use platform link controls for clickable access.

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

## Narration delivery

- Production cache keys include the authorized reference, model, seed and spoken text. A single-case rerender must preserve the other catalog entries; replace the catalog atomically.
- Final MP3 loudness/peaks must be measured after encoding; mastering targets/input stats do not prove the delivered file level. Use restrained clarity EQ for phone references, and retain the original privately.
- Whisper can repeat text in pauses and produce timestamps beyond file duration. Keep raw evidence and independently recheck bounded chapters with previous-text conditioning disabled or another installed recognizer; never turn a token similarity score into an accuracy/identity certificate.
- Chromium may retain `currentSrc` as a historical URL after `load()` empties the media. Verify removed source nodes, paused state, `readyState=HAVE_NOTHING` and `networkState=NETWORK_EMPTY`, rather than asserting the remembered URL disappears.

## CTI interface and performance

- Personal voice previews use a complete reference excerpt paired with its actual transcript. Keep original recordings/reference material outside Git and deployed assets. Automatic ASR validates spoken content, not identity similarity; obtain listening feedback before applying a narrator across the corpus. A timed-out in-process GPU generation can retain its lease until it drains: do not immediately retry on the same device. An isolated offline CPU run using installed weights can produce a short preview without changing application preferences.

- Treat editorial geography as context with a stated role (origin, affected region or attribution); never let a dot silently imply all three. Real cartography can be a shared cached SVG instead of a heavy GIS dependency. Use leader lines for displaced controls and a mobile case rail.
- A common documentary shell does not require duplicating the canonical corpus or mounting every chapter. Keep case-specific text/credits in a presentation overlay and render only the selected case/chapter. Preserve original narrative separately when it contains dramatic language or differently scoped estimates.
- Lazy local WebP imagery prevents remote-source failures from breaking the opening. Verify actual image decode for all cases and assert that their artwork/video is absent from initial hero requests.
- A compatible speech request's model field may not switch the local application's active engine. Discover the native engine selection, preserve/restore existing choices, validate supported voice tags and transcribe generated speech before using it. An HTTP success and a decodable WAV do not prove the spoken facts are correct.

- A modal inside an inert main element is also inert. Mount the modal at body level before disabling the background. Verify actual focus, not only ARIA attributes.
- Image preloader callbacks need a selection/version token and failure/timeout paths. Closing a viewer invalidates in-flight callbacks. A nested viewer's Escape must not also close its parent dossier.
- CSS hiding does not terminate JavaScript loops. Stop requestAnimationFrame and timer scheduling explicitly; retain guarded restart hooks for preference/visibility changes. Hidden loader animations should end with `display:none`.
- Snapshot scroll, filters, search, explorer, order, selected dossier, tab, chapter and stable focus selector before pushing history. After rerendering, restore focus by a stable selector, not only a detached element reference.
- Campaign chronology derives from the first year of the canonical episode interval, not a representative metadata year. Keep full intervals visible, and use editorial sequence to break ties.
- Do not infer an image's event identity from its filename. The legacy Petya screenshot metadata describes a different context; keep the source and add a visible qualification.

- A static historical corpus must label its verified coverage separately from the current edition year; simulated live status erodes analytical credibility.
- A lazy `<img>` can still be fetched eagerly when the same URL is placed in inline `background-image`. Defer both representations until the image is actually needed.
- Map, timeline, filters, cards, search, and deep links should derive from one selected-dossier state so that every investigative path stays synchronized.
- Decorative canvas, particles, grain, and pointer effects must pause while the document is hidden and converge to a stopped state; reduced-effects is a user preference, not only a media query.
- Relations between campaigns must be derived from exact structured fields already in the corpus and described as correlations, never as invented causality or attribution.
- On a dense geographic map, replace overlapping mobile hotspots with an accessible horizontal control rail rather than enlarging collisions.
- A remote webfont can block a local/offline cinematic loader and distort Speed Index; a system-serif fallback removes that dependency while preserving the visual language.

## Publication integrity

On Windows compare served text against Git blobs, not CRLF-converted working-tree bytes. Preserve dirty sibling projects in their original checkout; a release worktree can carry forward the already published runtime and later scoped integration without resetting owner files. Validate the actual public URLs and media, not only deployment command success.


## Animated entrance and reload

- Moving a decorative layer must not move its click targets. Separate animated artwork from stable 48px HTML controls; pause artwork on hover/focus.
- Zero JS rAF loops does not imply zero rendering cost: CSS transforms still trigger styles/intersections. Measure new ambient artwork against the actual immediately previous runtime and report regressions honestly.
- Removing delayed reveal observers must preserve content-visibility:auto and lazy assets; a visible class need not force all episodes to render.
- Detect explicit reload with Navigation Timing before router init. Reset only that history entry; do not force the top on normal popstate or fresh direct links.
- A reduced-motion rule can turn a zero-second visibility transition into a tiny nonzero transition and prevent immediate dialog focus. Do not transition visibility on dialog opening; restore the initial route after a preloader exits and recheck focus once after rendering, without stealing an existing dialog focus.

## Social export integrity

Render editable layouts at DPR2, then downsample upload PNGs from the rendered master; do not upscale thumbnails and label them HD. Wait for local images to decode. Verify content/footer bounds and story safe zones before export, then inspect the contact sheet and full-size samples. Keep text captions separate from the publication guide. Build ZIPs from an explicit reviewed allowlist and verify each entry's bytes, CRC and image manifest hashes. Compare the public ZIP hash after deployment; successful push alone does not prove Pages contains the new download.
