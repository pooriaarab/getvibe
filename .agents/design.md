---
schema: design-context/v1
surface: product-ui
sources:
  - styles.css
  - index.html
---

# Design Context

## Overview

The site is a quiet, dark signal board for developer tools.
It favors fast scanning, exact commands, and clear source links.
Use `styles.css` as the visual source of truth.
Keep pages static and self-contained.

## Colors

- Canvas `--bg`: `#0a0a0c`.
- Raised surface `--bg-raised`: `#121216`.
- Inset surface `--bg-inset`: `#0e0e11`.
- Primary text `--fg`: `#ededf0`.
- Muted text `--muted`: `#a3a3ad`.
- Faint text `--faint`: `#868692`.
- Hairline `--line`: `rgba(255, 255, 255, 0.08)`.
- Strong line `--line-strong`: `rgba(255, 255, 255, 0.16)`.
- Signal amber `--accent`: `#f0b429`.
- Hover amber `--accent-hover`: `#f6c555`.
- Dark accent ink `--accent-ink`: `#0a0a0c`.

Use amber for the mark, focus, current state, and primary action.
Do not add product-specific colors to the shared catalog shell.

## Typography

- Use the `--font-sans` system stack for interface text.
- Use `--font-mono` for commands and code.
- Use the existing `--t-xs` through `--t-2xl` scale.
- Keep body text at `1rem` with `1.6` line height.
- Use tight tracking only on headings and names.
- Do not load remote fonts.

## Layout

- Center content within the `65rem` container.
- Use `1.5rem` side padding, then `2rem` above `45rem`.
- Use one product column below `40rem`.
- Use two columns from `40rem` and three from `64rem`.
- Keep the hero within `40rem` and supporting copy within `34rem`.
- Let command boxes scroll horizontally instead of clipping text.
- Keep the first viewport focused on identity, promise, and product choice.

## Elevation & Depth

- Keep surfaces flat.
- Use hairline borders to separate cards and controls.
- Use background changes for hover depth.
- Use `--bg-inset` for commands and media frames.
- Do not add gradients, glow, `box-shadow`, or `text-shadow`.

## Shapes

- Use `6px` corners for controls and small frames.
- Use `12px` corners for grids and media.
- Use full pills for copy and primary action buttons.
- Draw the pulse with round line caps and joins.
- Keep media at `16:9` unless the asset requires another documented ratio.

## Components

- Header: pulse wordmark and short site navigation.
- Hero: suite name, one-line purpose, and local-first positioning.
- Product grid: lowercase name, factual tagline, command, and links.
- Command row: scrollable monospace command and a separate copy button.
- Product page: back link, product purpose, install action, facts, and media.
- Brand page: identity, mark, palette, type, voice, and reusable rules.
- Footer: quiet suite identity and organization link.
- Skip link and focus rings: visible for keyboard users.

## Do's and Don'ts

- Do preserve semantic landmarks and one page-level heading.
- Do keep focus rings at `2px` signal amber with a visible offset.
- Do label copy controls with their exact command.
- Do stop autoplay when reduced motion is requested.
- Do verify product copy against its owning repository.
- Don't add accounts, pricing tables, testimonials, or fake metrics.
- Don't use external fonts, scripts, icon libraries, or CDNs.
- Don't add dashboard patterns, bento marketing grids, or decorative glow.
- Don't change tool names or package commands for visual consistency.
