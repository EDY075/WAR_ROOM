# Prompt Library

Every prompt starts by reading [AI_HANDOFF.md](AI_HANDOFF.md), [CURRENT_STATE.md](CURRENT_STATE.md), and the document linked below. End each completed task by updating memory and reporting validation.

## Architecture

`Review a proposed WAR ROOM change. Read ARCHITECTURE.md and DECISIONS.md. Identify whether it changes the static architecture, deployment, or frozen corpus. Do not implement without explicit scope and a recorded decision.`

## Frontend

`Implement a scoped browser-side change in index.html. Read ARCHITECTURE.md, CODING_STANDARDS.md, and DESIGN_SYSTEM.md. Preserve keyboard access, local asset paths, and reduced-motion support. Validate in a browser and run the static check.`

## UX

`Review a target interaction against DESIGN_SYSTEM.md. Improve hierarchy or accessibility without changing historical content, cinematic identity, architecture, or animation scope unless explicitly approved.`

## Performance

`Audit the static experience for transfer size, image loading, Canvas cost, and motion. Respect TECH_STACK.md and DESIGN_SYSTEM.md. Recommend minimal changes and preserve the portfolio presentation.`

## Research

`Research a proposed dossier using primary and authoritative public sources. Separate facts, confidence, attribution, chronology, impact, MITRE, public IOCs, and references. Do not alter an episode until the editorial plan is approved.`

## Threat Intelligence

`Validate public threat-intelligence claims for a WAR ROOM dossier. Prefer official advisories, MITRE, CERTs, and transparent confidence language. Never publish active infrastructure or unverified attribution.`

## Build

`Validate the WAR ROOM release path. Read TECH_STACK.md and WORKFLOW.md. Run node tests/verify-final-consistency.mjs, git diff --check, and inspect the browser experience. Do not claim framework build gates that this static repository does not have.`

## Release

`Prepare a WAR ROOM release. Read GIT_WORKFLOW.md and CURRENT_STATE.md. Confirm tree cleanliness, static checks, Pages behavior, tag status, and approved assets before pushing or creating a GitHub Release.`

## Troubleshooting

`Diagnose the reported WAR ROOM issue using TROUBLESHOOTING.md. Reproduce minimally, identify the narrow cause, avoid scope expansion, validate the fix, and record a reusable lesson if one is found.`

## Audit

`Audit WAR ROOM without changing runtime code. Read the full .ai directory, check Git state, static validation, link paths, Pages, release metadata, accessibility-sensitive paths, and documentation consistency. Report only evidence-backed findings.`
