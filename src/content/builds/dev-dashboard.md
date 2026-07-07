---
title: "Dev Dashboard"
slug: "dev-dashboard"
order: 5
repo: "https://github.com/GPayne12/dev-dashboard"
stack: ["Node.js", "Express", "Vanilla JS"]
status: "live"
summary: "Local-first control panel for a multi-machine development hub —
  lists every project from a git-synced registry, starts and stops each
  project's dev server with one click, and streams live logs, replacing
  remembered ports and cd-ing between repos. Binds to 127.0.0.1 only;
  each machine runs its own instance against its own clone of the hub."
decisionLog: "Express is the only dependency — the tool has to start fast
  and stay maintainable, so everything else is Node built-ins and a
  no-build vanilla-JS frontend. Dev servers spawn as detached process
  groups and stop by signalling the whole group, because npm run dev
  wraps a child (vite, astro) that a plain kill would orphan. A durable
  process store re-adopts still-running servers by PID (with a PID-reuse
  guard) so restarting the dashboard never takes down the servers it
  manages. The registry is a hand-edited JSON file synced through git
  rather than editable in the UI, keeping project changes deliberate and
  reviewable. Deliberately not exposed beyond localhost — no tunneling,
  no auth-for-external-access."
---
