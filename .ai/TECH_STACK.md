# Tech Stack

| Layer | Technology | Notes |
| --- | --- | --- |
| Application | HTML5 | Single entry point: `index.html` |
| Styling | CSS3 | Variables, Grid, media queries, keyframes, reduced-motion rules |
| Interaction | Browser JavaScript | No framework or build dependency |
| Visual motion | Canvas API, CSS, IntersectionObserver | Progressive enhancement; respect `prefers-reduced-motion` |
| Audio | Web Audio API and SoundCloud embed | User-controllable ambient experience |
| Media | Local assets plus credited Wikimedia/public references | Modern previews/maps are local |
| Validation | Node.js built-in modules | `node tests/verify-final-consistency.mjs` |
| Hosting | GitHub Pages | `main` branch, repository root |

## Tooling contract

Experience work adds optional development tooling: Playwright with a dedicated headless Chromium-based Edge session for browser checks/CDP metrics/PNG export, and FFmpeg for the real vertical teaser. Neither is loaded by the deployed site. `NODE_PATH` can expose the environment's bundled Playwright. There is still no package manifest, build pipeline or production dependency installation.

Sharp converts generated artwork to local WebP during development; Natural Earth GeoJSON is converted offline into SVG by a Node built-in script. Neither Sharp nor GeoJSON is shipped as runtime code. One shared 141,762-byte SVG and selected local covers provide maps/artwork without a remote GIS service.

VoiceStudio 0.5.6 with installed OmniVoice generated synthetic Portuguese narration; installed Faster-Whisper checked speech locally. Existing engine/model preferences were restored. These are media-production tools only; the deployed site loads static MP3/MP4/VTT on demand and makes no TTS/API request.

There is no `package.json`, backend, Python test suite, or compilation step. Do not report `npm run build`, `pytest`, `mypy`, or `ruff` as WAR ROOM gates. Use the actual validation in [WORKFLOW.md](WORKFLOW.md).
