# Current State

| Field | State |
| --- | --- |
| Public release | `v1.1.0 — CTI Evolution`, unchanged |
| Current work | Documentary experience across all 17 cases, cinematic cartography and NotPetya campaign, ready for local branch review |
| Branch | `codex/war-room-experience` |
| Last sprint | 2026-10-03 · user-expanded scope: 102 chapters, real cartography and local artwork |
| Last commit | Resolve with `git log -1 --oneline`; no merge, push, tag or deployment |
| Public Pages | https://edy075.github.io/WAR_ROOM/ (still prior release) |
| Local preview | http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya |

## Current product state

- All 17 canonical EPISODES, STORIES and INTEL_INDEX records are unchanged. Fingerprints at `aeaa524` are protected by `tests/verify-experience-data.mjs`.
- One body-level modal workspace exposes Resumo, História, Análise, Mídia and Fontes; cards, archive actions, map, search and relations route into it. Legacy story modal and expanded episode details were retired.
- Selection, search, filters, map, timeline and relations stay synchronized. History stores context, scroll and stable focus selectors; direct links support dossier, tab, chapter, order, filters, query and explorer signal.
- Editorial sequence remains original. Chronological ordering and year filtering use the first year of the canonical campaign interval with editorial tie-breaks; complete ranges remain visible.
- Larger reading text and controls preserve black/gold/off-white identity. Header controls stay available on scroll. No artificial reading stagger or timed dossier opening.
- Reduced effects/OS reduced motion, hidden document and modal reading stop decorative loops. Grain is a single small static texture. Background rendering is capped; content-visibility remains automatic for every episode.
- Gallery uses request versions, load/error/timeout states and focus restoration. Stale responses and nested Escape are regression-tested.
- All 17 cases have six reading-first chapters (102 total), unique opening titles/context, manual progression, primary references, original full story disclosure and preserved analysis. New case selection begins at opening; browser history restores the saved chapter. Direct chapter links work for every case.
- Central and chapter maps share local Natural Earth 1:110m geography, explicit regional anchors, displaced controls with leader lines, keyboard zoom and a mobile rail. Chapter animation pauses manually, outside the reading viewport, with reduced motion and when hidden. No invented infection routes or live telemetry.
- Eleven new labeled contextual reconstructions supplement NotPetya artwork and the five existing credited modern archives. Local WebP covers are used in archive entries and chapters; no cover/video loads on initial hero in browser checks. Sources and prompts: [DOCUMENTARY_VISUALS.md](../docs/DOCUMENTARY_VISUALS.md).
- Cover, five carousel pages, editable HTML, six teaser frames, storyboard and real vertical MP4s (36 s silent / 42 s narrated, H.264, 1080 × 1920, 24 fps) are in `assets/media/notpetya/`. Video/audio load on demand. A real synthetic Portuguese narration MP3 and captions are delivered; local VoiceStudio / installed OmniVoice generation passed transcription validation, and existing voice settings were restored.

## Validation and evidence

- Four original verification scripts pass, plus canonical-data, experience and documentary desktop/mobile browser checks.
- Browser scenarios cover all 17 routes and all 102 chapters at both viewports, image decode, map zoom/history, chapter links beyond the pilot, keyboard/tabs/focus/Escape, search/filters/history, gallery race/failure, reduced effects and real video playback/pause.
- Screenshots: `assets/screenshots/experience/`; actual archive image decoded separately, narrow 320px checked. Race tests deliberately use network fixtures; they do not prove external-source availability.
- A fresh three-run Chromium Edge/CDP comparison against `aeaa524` measures the completed corpus/map iteration. Reading/reduced samples reach zero callbacks, and dossier opening forces zero episode entries. Current medians, method and limits: [EXPERIENCE_VALIDATION.md](../docs/EXPERIENCE_VALIDATION.md). Earlier pilot-only samples in the memory log are intermediate historical measurements.
- Prior v1.1.0 Lighthouse scores are historical release evidence, not measurements of this branch. No new Lighthouse, field INP or lab mobile hardware claim is made.

## Limits and follow-up

- Personal voice review (2026-10-03): the user supplied their own recording. A separate 16.77-second NotPetya voice-clone preview is ready in ignored `audit/` for listening review; see [VOICE_PREVIEW.md](../docs/VOICE_PREVIEW.md). It has not replaced product media or been extended to the other sixteen cases. The corpus/UI remain unchanged. Original personal audio/reference stays local and out of Git.

- No merge, push, publication, release change or deployment. Stop the temporary local preview when review finishes.
- Classic remote gallery sources can fail independently; reading/references retain an alternative. A legacy Petya screenshot receives a visible qualification while original records stay preserved.
- Both teasers have readable text; narrated version adds synthetic Portuguese voice, with no external music. Regenerating speech needs local VoiceStudio and installed OmniVoice; playback requires only delivered static files. No personal voice profile was used.
