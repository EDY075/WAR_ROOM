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

There is no `package.json`, backend, Python test suite, or compilation step. Do not report `npm run build`, `pytest`, `mypy`, or `ruff` as WAR ROOM gates. Use the actual validation in [WORKFLOW.md](WORKFLOW.md).
