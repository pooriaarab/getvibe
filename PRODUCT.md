# Product

<!-- impeccable:product-schema 1 -->

## Platform

web (static site, self-contained: no external fonts, CDNs, or JS frameworks)

## Users

Developers who work with agentic coding CLIs (Claude Code, Codex, Gemini) and want small companion tools around their agent sessions. _(Inferred from the rebuild brief — no interview was held; auto permission mode disabled the question tool, so facts here are derived from the explicit brief and the incumbent site.)_

## Product Purpose

getvibe.dev is the hub for **The Vibe Suite** — nine single-command companions for a coding agent: viberadio, vibemovie, vibelive, vibeshare, vibedonate, vibedate, vibeads, vibenotifications, vibecodereview. The site must let a visitor understand what the suite is, pick a tool, and copy its install command within seconds.

## Positioning

Local-first companions: "your machine, your keys." Each tool installs with one `npx` command and lives next to the agent CLI, not in a dashboard or cloud account. _(Brief-pinned positioning.)_

## Operating Context

- Site is a static deploy at https://getvibe.dev (subpages as clean URLs `/<slug>`).
- Launch videos for six products exist at `/videos/<name>-16x9.mp4` (and 9x16 variants); vibeads, vibenotifications, and vibecodereview have none.
- Every product has both an npm package page and a GitHub repo under `pooriaarab/`.

## Capabilities and Constraints

- Self-contained: system font stack only, no external requests; inline vanilla JS permitted.
- Dark, minimal visual register; references: offrouter.com, here.now.
- Accessibility target: WCAG AA (contrast, focus states, semantic landmarks, skip link, keyboard nav).
- vibedate's repo is `pooriaarab/vibedating` (name ≠ repo). viberadio's package is `viberadio-fm`; vibeshare's is `vibeshare-live`.

## Brand Commitments

- Name/wordmark: `getvibe.dev`; suite: "The Vibe Suite".
- Tagline: "Companions for your coding agent. Local-first: your machine, your keys."
- Pulse/waveform favicon mark (SVG).
- Dark-only presentation. _(All brief-pinned.)_

## Evidence on Hand

- Launch mp4s in `/videos/` for six products.
- Taglines, install commands, package and repo names supplied in the brief.
- No testimonials, metrics, or pricing exist — none may be fabricated.

## Accessibility & Inclusion

WCAG AA is a hard requirement from the brief: ≥4.5:1 text contrast, visible focus, one h1 per page, semantic landmarks, alt/labels, keyboard operability, skip-to-content link.
