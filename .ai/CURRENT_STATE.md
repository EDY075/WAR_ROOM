# Current State

| Field | State |
| --- | --- |
| Version | `v1.1.0` |
| Status | Release candidate ready; publication paused for remote-main confirmation |
| Last sprint | CTI Evolution release preparation |
| Last product sprint | v1.0.2 final consistency pass |
| Last release | [WAR ROOM v1.0.3](https://github.com/EDY075/WAR_ROOM/releases/tag/v1.0.3) |
| Last commit | Local base `1fb3277`; remote `main` currently ends at `e33235b` |
| Pages | https://edy075.github.io/WAR_ROOM/ |

## Current product state

- All 17 dossiers render from the static application.
- The Intelligence Center indexes the same 17 dossiers and provides map, timeline, filters, and MITRE/APT/IOC explorers.
- The primary CTA focuses and navigates to `#intelligence`.
- Modern dossier previews and maps are local assets with credits in `assets/images/CREDITS.md`.
- v1.1.0 adds global search, a compact accessible experience/audio popover, a hybrid narrative/technical prologue, selectable MITRE/APT/IOC explorers, documented-correlation navigation, a shared selected-dossier state, synchronized map/timeline/cards, dossier drawer, operational chronology with previous/next navigation, hash deep links, reduced-effects control, truthful historical labels, and an evidence-backed loader.
- The historical content and 17-dossier data model remain unchanged.
- Final refinement Lighthouse evidence: desktop 100/100/100/100 and mobile 96/100/100/100 (Performance/Accessibility/Best Practices/SEO), with 238 KiB and one initial request.

## Known bugs and pending work

- No release-blocking functional bugs are known after the four automated verification scripts passed.
- The mobile map exposes an accessible 48px horizontal hotspot rail instead of overlapping geographic targets.
- Duplicate legacy function declarations covered by regression tests were removed.
- The pre-migration local source remains intentionally preserved outside the release workflow.
- Future work is intentionally deferred to [ROADMAP_AI.md](ROADMAP_AI.md).

## Frozen scope

The historical corpus and deployment model remain frozen. Do not publish until the later remote README commits are confirmed and integrated without conflict.
