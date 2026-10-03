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

The latest entrance fills at least 100svh with a large documentary title, direct map/archive actions and an interactive editorial network. Origin, techniques, response and impact are thematic explanations, not causal links between attacks. Only network art floats; 48px targets and labels remain stable. A responsive dark original galaxy (identified as AI illustration) sits behind all content with restrained gold/teal/violet colors and opaque reading surfaces. Title/actions give short transform/color feedback. Ambient CSS transforms stop on manual pause, reduced effects, hidden document or modal reading; the network pauses offscreen/hover/focus. Native cursor sparks remain bounded. Mobile preserves the full composition and lets the hero grow without clipping. No circular glow, shader or global Canvas background.

The preloader has an immediately skippable 850ms opening; reduced motion skips presentation delay. Reload starts from the hero while normal history/direct links preserve context. The previously delivered promotional vector pieces are unchanged, with their original credits.

The experience layer uses restrained gold, off-white and black reading surfaces, larger 16px body copy, serif documentary headings and 44px minimum controls. Dossiers have one five-tab reading workspace, including full-width mobile composition. Header controls remain available while scrolling. Scroll is native, and section navigation has no timed delay. Episode IDs and dates stay visible; ornamental number badges and percentage tracks are hidden.

All 17 documentaries distinguish archive, illustrative AI reconstruction, geographic context and editorial document summaries. Each has a unique opening, consistent six-chapter controls and a complete reading path. Natural Earth cartography replaces schematic continents; regional anchors and displaced controls are explicit. Map animation is purposeful and independently pausable, including offscreen pause; background effects stop during modal reading. Audio/video availability corresponds to real files only; NotPetya offers a synthetic-voice teaser and an independent silent version.

Personal-voice chapter/full players are explicit choices, visually quiet and labeled as authorized synthesis. Native controls preserve pause/volume/seeking. Audio never gates reading or auto-advances chapters; reduced scenery still allows chosen narration. The standalone library uses the same black/gold/off-white typography and responsive control hierarchy.

The design system lives in the CSS and markup inside `index.html`; this file records constraints rather than duplicating implementation.
