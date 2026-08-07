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

The design system lives in the CSS and markup inside `index.html`; this file records constraints rather than duplicating implementation.
