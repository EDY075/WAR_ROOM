# Current State

| Field | State |
| --- | --- |
| Public release | Documentary edition published 2026-10-03; previous tag `v1.1.0 — CTI Evolution` preserved |
| Current work | All 17 documentaries/narrations preserved; full-viewport interactive entrance, galaxy and reload/preloader evolution |
| Branch | Public `main`; `codex/war-room-experience` preserved |
| Last sprint | 2026-10-03 · full-viewport hero, interactive investigation points, illustrated moving galaxy and reload-to-hero |
| Last commit | Resolve with `git log -1 --oneline`; galaxy entrance runtime `1db8095` (32s movement); documentation revisions resolve with git log |
| Public Pages | https://edy075.github.io/WAR_ROOM/ (documentary edition live) |
| Local preview | http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya |

## Current product state

- Latest entrance: at least 100svh, responsive original galaxy (illustration identified as AI), CSS transform-only ambience behind the page (32s linear sweep, adjusted from 48s easing at owner request), floating network art with four stable interactive controls, title/button feedback and bounded native-cursor sparks. Manual pause, OS/user reduced effects, hidden document and modal reading stop motion; offscreen network pauses. Mobile remains complete with natural content height. No shader or global Canvas renderer.
- Preloader: brief skippable 850ms opening on navigation/reload, fonts deadline 700ms in parallel, no required media download. Reduced motion skips the minimum/fade. Explicit reload clears context and returns to hero; fresh direct links and back/forward preserve context. Initial dialog restore follows loader exit; visibility changes immediately on opening to preserve focus with reduced motion.
- Three-run comparison of the original 48s galaxy against `4531865` (not rerun for the subsequent 32s duration adjustment): renderer task median /1.5s 29.903 → 60.352ms desktop, 41.214 → 64.595ms mobile emulation. Movement costs more than the previous static entrance; zero idle JS callbacks, zero forced episode rendering and zero decorative callbacks during reading/reduced samples remain. One additional responsive image, 159KB desktop /47KB mobile. Current method, screenshots and limits: [GALAXY_ENTRANCE_VALIDATION.md](../docs/GALAXY_ENTRANCE_VALIDATION.md). Previous percentages are historical.
- Existing HD launch ZIP at `assets/media/war-room-launch-2026/` remains the prior vector entrance edition; unchanged bytes/texts. No audio regeneration or social posting in this iteration. GitHub/LinkedIn/confirmed Instagram credits remain.

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

## Publication · 2026-10-03

Galaxy published and verified: initial runtime `648ef97`, Pages `37155681649`; final speed adjustment runtime `1db8095`, Pages `37156496540`; portfolio cover runtime `66d5d15`, Worker `acb96424-b85d-4cc0-ae6f-77c64130ea13`. Full public suites/media bytes/playback passed, responsive cover hashes match, original portfolio 276 hashes unchanged. Exact evidence recorded in [GALAXY_ENTRANCE_VALIDATION.md](../docs/GALAXY_ENTRANCE_VALIDATION.md).

Previous static entrance publication (historical):

Latest entrance runtime `a9272bf`, successful Pages build `37151443101`. Portfolio cover runtime `01af7f2`, existing Worker version `85c20a35-3a11-4be5-9bf5-5e7f8c3e0b30`. Public entrance/experience/documentary checks passed, as did direct chapter/full audio playback, all 16 promotional image/master hashes, ZIP/source hashes and portfolio navigation/cover hashes. Both codex branches are preserved; main advanced without force push. The original portfolio checkout still has zero differences across the 276-file saved snapshot. The portfolio's additional npm audit has 12 existing dependency advisories; package/lockfile unchanged, remediation belongs to a separately validated dependency update. Full evidence and limits: [ENTRANCE_VALIDATION.md](../docs/ENTRANCE_VALIDATION.md) and [PUBLICATION_2026-10-03.md](../docs/PUBLICATION_2026-10-03.md).

## Validation and evidence

- Four original verification scripts pass, plus canonical-data, experience/documentary desktop/mobile browser checks and all 119 audio browser decodes. Narration tests cover playback, no preloading, library, error/retry, keyboard, lifecycle/races and reduced effects.
- Browser scenarios cover all 17 routes and all 102 chapters at both viewports, image decode, map zoom/history, chapter links beyond the pilot, keyboard/tabs/focus/Escape, search/filters/history, gallery race/failure, reduced effects and real video playback/pause.
- Screenshots: `assets/screenshots/experience/` (documentary stage) and `assets/screenshots/narration/` (current audio/library); actual archive image decoded separately, narrow 320px checked. Race tests deliberately use network fixtures; they do not prove external-source availability.
- The corpus/map iteration at `4e66d81` has its own historical three-run Chromium Edge/CDP comparison against `aeaa524`. A separate current narration-delivery comparison is recorded in the validation report; do not reuse prior source measurements as current. Reading/reduced samples reach zero callbacks, and dossier opening forces zero episode entries. Medians, source revisions, method and limits: [EXPERIENCE_VALIDATION.md](../docs/EXPERIENCE_VALIDATION.md). Earlier pilot-only samples in the memory log are intermediate historical measurements.
- Prior v1.1.0 Lighthouse scores are historical release evidence, not measurements of this branch. No new Lighthouse, field INP or lab mobile hardware claim is made.

## Limits and follow-up

- Personal voice (2026-10-03): the user approved the local sample and authorized prolonged versions for all 17 cases. Delivered 17 full MP3s / 102 chapter MP3s (42:13.53 total full narration), scripts, references, VTT and a lazy library. Restrained EQ/dynamics improve clarity; finished-file loudness measures −16.78 to −16.21 LUFS, max true peak −1.88 dBTP. Original personal audio/reference/raw WAVs remain local and out of Git. Details and actual QA limits: [NARRATION_PRODUCTION.md](../docs/NARRATION_PRODUCTION.md).

- The owner explicitly authorized publication to GitHub, GitHub Pages and the existing portfolio on 2026-10-03. Preserve the prior v1.1.0 tag; publish the documentary edition from main after validation. Personal reference/raw audio remains excluded. Publication completed and verified: [PUBLICATION_2026-10-03.md](../docs/PUBLICATION_2026-10-03.md).
- Classic remote gallery sources can fail independently; reading/references retain an alternative. A legacy Petya screenshot receives a visible qualification while original records stay preserved.
- Both teasers have readable text; narrated version adds synthetic Portuguese voice, with no external music. Regenerating speech needs local VoiceStudio and installed OmniVoice; playback requires only delivered static files. The older teaser uses a standard synthetic voice; the new prolonged audio uses the approved reference. No saved personal voice profile/preferences were modified.
