![WAR ROOM banner](banner-github.png)

<p align="center">
  <a href="https://edy075.github.io/WAR_ROOM/"><img src="https://img.shields.io/badge/Live%20Experience-GitHub%20Pages-c9a84c?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live experience"></a>
  <a href="https://github.com/EDY075/WAR_ROOM/releases/tag/v1.0.3"><img src="https://img.shields.io/badge/Release-v1.0.3-171717?style=for-the-badge&logo=github&logoColor=white" alt="Release v1.0.3"></a>
  <img src="https://img.shields.io/badge/17-Cyber%20Conflict%20Dossiers-c9a84c?style=for-the-badge" alt="17 dossiers">
  <img src="https://img.shields.io/badge/Static-HTML%20%2B%20CSS%20%2B%20JavaScript-171717?style=for-the-badge" alt="Static web stack">
</p>

# WAR ROOM

**A cinematic, interactive library of cyber conflicts.**

WAR ROOM presents 17 researched cyber-conflict dossiers, from Morris Worm to modern campaigns involving Russia x Ukraine, Volt Typhoon, Salt Typhoon, Lazarus Group, and Israel x Iran. The experience combines historical narrative, public threat intelligence, MITRE ATT&CK context, impact analysis, and a browser-native Intelligence Center.

## Demonstration

<p align="center">
  <a href="https://edy075.github.io/WAR_ROOM/"><img src="demo-10s.gif" alt="WAR ROOM final product tour" width="100%"></a>
</p>

The current tour introduces the Hero, the Intelligence Center, the modern Russia x Ukraine dossier, the narrative modal, and the investigation timeline. Open the [live experience](https://edy075.github.io/WAR_ROOM/) for the complete interactive flow.

## Captures from the final version

<p align="center">
  <img src="assets/screenshots/release-hero.jpg" alt="WAR ROOM final Hero" width="49%">
  <img src="assets/screenshots/final-consistency-intelligence.jpg" alt="WAR ROOM Intelligence Center and global timeline" width="49%">
</p>

<p align="center">
  <img src="assets/screenshots/modern-dossier.jpg" alt="Russia x Ukraine modern dossier with investigation actions" width="74%">
</p>

<p align="center">
  <img src="assets/screenshots/russia-ukraine-timeline-final.jpg" alt="Russia x Ukraine dossier detail and timeline" width="49%">
  <img src="assets/screenshots/russia-ukraine-modal-final.jpg" alt="Russia x Ukraine narrative modal" width="49%">
</p>

All portfolio visuals above are approved release assets from the published final version. The live dossier exposes the detail timeline and narrative modal without using mock data.

## What the experience includes

- 17 interactive cyber-conflict dossiers from 1988 to 2025.
- A tactical Intelligence Center with global map, 1988-2026 timeline, filters, MITRE, APT group, and public IOC explorers.
- Cinematic loader, navigation, atmospheric Canvas, subtle motion, keyboard support, and `prefers-reduced-motion` support.
- Dossier cards, details, galleries, illustrated chronology, contextual maps, references, and credited visuals.
- Local modern visual assets with credits in [assets/images/CREDITS.md](assets/images/CREDITS.md).

## Run locally

The project is a static website; no build, backend, or package installation is required.

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`, or open `index.html` directly in a modern browser.

## Project structure

```text
WAR_ROOM/
├── index.html                # Browser-native experience
├── assets/screenshots/       # Final release captures
├── assets/images/            # Local modern dossier media and credits
├── episodes/                 # Source research for classic dossiers
├── tests/                    # Static release and AI-memory checks
└── .ai/                      # Official context and handoff for any AI
```

## Continuidade por IA

Any agent can assume the project by reading [`.ai/`](.ai/). It is the official source for current state, architecture, decisions, workflow, design constraints, validation, technical memory, and roadmap.

## Credits

**Project developed by Edmilson Gomes** for academic cybersecurity research.

Focus areas: **Cybersecurity · Blue Team · Threat Intelligence · Incident Response**.

### Technologies

HTML5, CSS3, JavaScript, Canvas API, Web Audio API, IntersectionObserver, SoundCloud, GitHub Pages, and public reference material with local visual credits where applicable.

### Public research and visual sources

Thank you to the public sources that make this educational project possible:

- [MITRE ATT&CK](https://attack.mitre.org/)
- [CISA](https://www.cisa.gov/)
- [NSA](https://www.nsa.gov/)
- [CERT-UA](https://cert.gov.ua/)
- [FBI](https://www.fbi.gov/)
- [NIST](https://www.nist.gov/)
- [Kaspersky](https://www.kaspersky.com/resource-center)
- [Wikimedia Commons](https://commons.wikimedia.org/)

### Author

[![GitHub](https://img.shields.io/badge/GitHub-EDY075-171717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EDY075)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Edmilson%20Gomes-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/edmilson-gomes)

Edmilson Gomes · Cybersecurity · Blue Team · Threat Intelligence · Incident Response

## Release

The current published release is [WAR ROOM v1.0.3](https://github.com/EDY075/WAR_ROOM/releases/tag/v1.0.3). It includes the final banner, product tour GIF, and approved portfolio screenshots.

## License

Released under the [MIT License](LICENSE).
