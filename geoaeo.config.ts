export default ({
  siteName: "The Vibe Suite",
  siteUrl: "https://getvibe.dev",
  description:
    "getvibe.dev is the hub for The Vibe Suite — eight local-first, one-command companions for agentic coding CLIs like Claude Code, Codex, and Gemini. Your machine, your keys.",
  tools: [
    { name: "viberadio", url: "https://getvibe.dev/viberadio", description: "Narrate your agent session as audio." },
    { name: "vibemovie", url: "https://getvibe.dev/vibemovie", description: "Turn a session into a recap video." },
    { name: "vibelive", url: "https://getvibe.dev/vibelive", description: "Multiplayer terminals for your agent." },
    { name: "vibeshare", url: "https://getvibe.dev/vibeshare", description: "Share a live session." },
    { name: "vibedonate", url: "https://getvibe.dev/vibedonate", description: "Collect support for your work." },
    { name: "vibedate", url: "https://getvibe.dev/vibedate", description: "A companion for your agent." },
    { name: "vibeads", url: "https://getvibe.dev/vibeads", description: "Contextual tool discovery." },
    { name: "vibenotifications", url: "https://getvibe.dev/vibenotifications", description: "Get notified on session events." },
  ],
  faq: [
    { question: "What is The Vibe Suite?", answer: "Eight local-first, one-command companions for agentic coding CLIs like Claude Code, Codex, and Gemini." },
    { question: "How do I install a tool?", answer: "Each tool installs with a single npx command and runs next to your agent CLI — no dashboard, no cloud account." },
  ],
  platforms: [],
  plans: [],
  pages: ["/", "/viberadio", "/vibemovie", "/vibelive", "/vibeshare", "/vibedonate", "/vibedate", "/vibeads", "/vibenotifications"],
});
