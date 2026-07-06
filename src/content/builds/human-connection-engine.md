---
title: "Human Connection Engine"
slug: "human-connection-engine"
order: 3
repo: "https://github.com/GPayne12/human-connection-engine"
demo: "http://localhost:5174"
stack: ["React", "TypeScript", "Vite", "Dexie.js / IndexedDB", "Web Crypto API"]
status: "in-progress"
summary: "A local-first tool for sustaining a healthy professional networking
  cadence — tracks relationships, outreach campaigns, and stage history
  without a backend or account. Layers 0–3 (design constraints, data model,
  cadence engine, UI) are built; AI-assisted features and data export are
  next."
decisionLog: "No backend, no account: relationship data lives in IndexedDB
  on-device via Dexie.js — a local-first tool means no vendor holds a copy of
  who you know. Sensitive notes are encrypted at rest with AES-GCM-256 via the
  Web Crypto API. Campaign stage history is append-only, preserving the full
  story of how a relationship progressed rather than letting it be silently
  edited away."
---
