# Design System

## Identity

WAR ROOM uses a cinematic intelligence-room identity: near-black surfaces, restrained gold signal accents, serif display typography, mono metadata, and measured ambient movement.

## Non-negotiable visual constraints

- Preserve the black-and-gold palette and classified-dossier tone.
- Motion adds depth, not friction: loaders, particles, Canvas, hover, and parallax must remain subtle.
- All interaction remains usable with keyboard and `prefers-reduced-motion`.
- Cards, banners, details, story modals, and Intelligence Center elements share the same hierarchy: classification/meta, title, operational context, action.

## Responsive rules

- Validate desktop and narrow mobile layouts after visual changes.
- Avoid horizontal overflow and protect readable line lengths.
- Do not substitute a screenshot or image that weakens context, attribution, or contrast.

## Canonical implementation

The latest entrance separates the left documentary title/reading/actions from a right static SVG network. The network depicts editorial themes (origin, techniques, impact, response), not real causal links. Mouse feedback is a small, short-lived spark effect with native cursor. Mobile keeps reading/actions ahead of the complete static composition. No continuous hero orbit/pulse animation or global mouse-following light is used. Promotional pieces use the same vector/palette and credit their real map capture and editorial audio illustration.

The experience layer uses restrained gold, off-white and black reading surfaces, larger 16px body copy, serif documentary headings and 44px minimum controls. Dossiers have one five-tab reading workspace, including full-width mobile composition. Header controls remain available while scrolling. Scroll is native, and section navigation has no timed delay. Episode IDs and dates stay visible; ornamental number badges and percentage tracks are hidden.

All 17 documentaries distinguish archive, illustrative AI reconstruction, geographic context and editorial document summaries. Each has a unique opening, consistent six-chapter controls and a complete reading path. Natural Earth cartography replaces schematic continents; regional anchors and displaced controls are explicit. Map animation is purposeful and independently pausable, including offscreen pause; background effects stop during modal reading. Audio/video availability corresponds to real files only; NotPetya offers a synthetic-voice teaser and an independent silent version.

Personal-voice chapter/full players are explicit choices, visually quiet and labeled as authorized synthesis. Native controls preserve pause/volume/seeking. Audio never gates reading or auto-advances chapters; reduced scenery still allows chosen narration. The standalone library uses the same black/gold/off-white typography and responsive control hierarchy.

The design system lives in the CSS and markup inside `index.html`; this file records constraints rather than duplicating implementation.
