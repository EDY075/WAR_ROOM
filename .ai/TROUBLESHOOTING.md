# Troubleshooting

| Symptom | Check | Minimal response |
| --- | --- | --- |
| Pages shows an older site | Confirm `main` push and Pages source; allow deployment to complete; hard-refresh once. | Do not change app code before confirming deployed commit. |
| Local assets are missing | Run the static check and inspect relative paths/case. | Restore the referenced local asset and update credits if necessary. |
| CTA does not reach Intelligence Center | Verify `#hero-cta`, `focusIntelligenceCenter`, hash, and keyboard focus. | Add a narrow regression check and browser-test the final state. |
| Animation is distracting or expensive | Test `prefers-reduced-motion` and tab visibility behavior. | Reduce or pause decorative motion; never remove navigation/content access. |
| External image/reference fails | Check the source and the local credit record. | Prefer a credited local asset; do not silently replace historical context. |
| GitHub Release cannot be created | Run `gh auth status`. | Authenticate through the browser/device flow; never expose a token. |

## Escalation

If an issue affects historical facts, attribution, content structure, architecture, or public release history, stop and ask for scope before changing it.
