# AGENTS.md — getvibe.dev

Hub site for **The Vibe Suite**: eight local-first companions for agentic coding CLIs (Claude Code, Codex, Gemini). This repo is the static catalog at https://getvibe.dev — not the tools themselves.

## Mental model

You pick a companion → you get one `npx` command that runs on the user's machine next to their agent CLI. No dashboard, no cloud account.

## The faces

- **HTTP** — `https://getvibe.dev/` (suite) and `https://getvibe.dev/<tool>` (one page per companion).
- **CLI** — each tool is a one-shot `npx` (see below). There is no getvibe SDK, HTTP API, or MCP in this repo.

## The suite

| Tool | Command | Repo (if the name differs) |
| --- | --- | --- |
| [viberadio](https://getvibe.dev/viberadio) | `npx viberadio-fm` | `pooriaarab/viberadio` |
| [vibemovie](https://getvibe.dev/vibemovie) | `npx vibemovie` | |
| [vibelive](https://getvibe.dev/vibelive) | `npx vibelive` | |
| [vibeshare](https://getvibe.dev/vibeshare) | `npx vibeshare-live` | `pooriaarab/vibeshare` |
| [vibedonate](https://getvibe.dev/vibedonate) | `npx vibedonate` | |
| [vibedate](https://getvibe.dev/vibedate) | `npx vibedate` | `pooriaarab/vibedating` |
| [vibeads](https://getvibe.dev/vibeads) | `npx vibeads` | |
| [vibenotifications](https://getvibe.dev/vibenotifications) | `npx vibenotifications` | |

## The loop

1. **Discover** — `GET https://getvibe.dev/agents.md` (this file) or `GET https://getvibe.dev/llms.txt`.
2. **Pick** — choose a companion from the table; open its `/<tool>` page if you need the tagline or demo.
3. **Run** — execute the listed `npx` command on the user's machine, next to their agent CLI.
4. **Verify** — the process starts locally. There is nothing to configure on getvibe.dev.

## Rules

- This repo is a static site. Do not invent an API, auth, billing, or MCP for getvibe.dev.
- Package names are not always the product names: `viberadio-fm`, `vibeshare-live`. vibedate's GitHub repo is `pooriaarab/vibedating`.
- Do not fabricate testimonials, metrics, or paid plans. None exist on this site.
- Local-first: the tools run on the user's machine with the user's keys.

## Offer

Free. No paid plans, no account, no checkout on getvibe.dev. Each companion is a public npm package you run with the `npx` command above.
