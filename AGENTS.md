# AGENTS.md — getvibe.dev

Hub site for **The Vibe Suite**: ten local-first companions for agentic coding CLIs (Claude Code, Codex, Gemini). This repo is the static catalog at https://getvibe.dev — not the tools themselves.

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
| [vibebrand](https://getvibe.dev/vibebrand) | `npx vibebrand` | |
| [vibecodereview](https://getvibe.dev/vibecodereview) | `npx vibecodereview` | |

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

## CI runners

This repo is public, so every job runs on GitHub-hosted `ubuntu-latest`.
Public repos get those runners for free; Ubicloud bills by the minute.
Private `pooriaarab/*` repos stay on Ubicloud. The Dell fleet is retired.
Never re-add a self-hosted label. See pooriaarab/scripts#217.

<!-- pr-standards:start -->

## Pull requests

One issue. One PR. One concern. Under 500 counted lines.

Open the issue first. No issue, no branch. The issue number ties the branch, the
title, the body and the merged commit to one agreed piece of work.

```text
branch:  get-<issue>-<slug>          get-142-fix-onboarding-drop-off
title:   [GET-<issue>] <Subject>   [GET-142] Fix onboarding drop-off
body:    Closes #142
         ## What / ## Why / ## How I verified
         Assisted-by: <agent>:<model>
```

Subject line: imperative mood, 10-50 characters, no trailing period, no emoji.
Write "Fix the drop-off", not "Fixed the drop-off".

Hard caps, failed by the `pr-standards` CI check: 500 counted lines, 40 counted
files, exactly one `Closes #`. Lockfiles, build output, snapshots, generated
code and migrations are not counted. There is no label that clears the cap and
no one to ask for one. Split the change.

Settings for this repo are in `.github/pr-standards.json`. The standard is at
https://github.com/pooriaarab/scripts/blob/main/pr-standards.md

<!-- pr-standards:end -->

<!-- cursor-cloud:start -->

## Cloud agents (Cursor)

This repo runs on [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent). Local
`.env.local` does **not** sync — mirror keys in **Dashboard → Cloud Agents → Secrets**.

| Secret type | Use for |
|---|---|
| Runtime Secret | API keys, passwords (hidden from chat/commits) |
| Environment Variable | Non-sensitive config (URLs, flags) |
| Build Secret | Private npm/docker registries during install only |

### Install & test

Install command lives in `.cursor/environment.json`. After dashboard setup:

1. **Environments** → link this repo → wait for **Build = Success**
2. **Secrets** → copy every key from your local `.env.local` / `.env.example`
3. Run the project's test/lint command before opening a PR (see below)

### Verify before PR

```bash
echo 'No test command detected'
```

### Pull requests

Follow the fleet PR standard in this repo's `AGENTS.md` (`<!-- pr-standards:start -->` block).
Cloud agents need push access via Git integration and a successful environment Build.

Setup guide: https://github.com/pooriaarab/scripts/blob/main/cursor-cloud-rollout.md

<!-- cursor-cloud:end -->
