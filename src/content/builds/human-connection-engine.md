---
title: "Human Connection Engine"
slug: "human-connection-engine"
order: 3
repo: "https://github.com/GPayne12/human-connection-engine"
private: true
stack: ["React", "TypeScript", "Vite", "Express", "Web Crypto API", "Swift / Vision"]
status: "in-progress"
summary: "A local-first tool for sustaining a healthy professional
  networking cadence — tracks relationships, outreach campaigns, and stage
  history with no account and nobody else holding a copy of who you know.
  Layers 0–3 (design constraints, data model, cadence engine, UI) are built.
  Layer 5 shipped export/import and moved the graph off per-browser storage
  onto a single-user service on my own machine. Two importers fill it: the
  official LinkedIn export, and a screen-recording capture for the people
  that export doesn't reach. Prepare-only AI is scoped and next."
decisionLog: "No account and no vendor copy: the relationship graph lives in
  a single-user service bound to loopback on my own machine, backed by a plain
  JSON file rather than SQLite at this data volume. Sensitive notes and origin
  stories are encrypted at rest with AES-GCM-256, performed by the service
  rather than the browser — that lets a second device reach the same store
  without a per-browser passphrase, which was the login step the original
  design rejected. The key file is owner-read-only. Campaign stage history is
  append-only, preserving the full story of how a relationship progressed
  rather than letting it be silently edited away. Every person requires an
  origin story, written in my own words, before they can leave the dormant
  tier or reach a campaign board — and the importers deliberately leave that
  field empty, because the one thing that cannot be reconstructed from a data
  export is the one thing nothing is allowed to fabricate."
whatBroke: "Moving the graph off per-browser storage did not carry the live
  data with it. The export path built two hours earlier is the only reason it
  came back: roll back, export, import into the new service, verify field by
  field. Nothing was lost, and it is now a rule — export the live data before
  any storage-backend change. The screen-recording importer fought back too.
  The first run produced 1,100 people and almost no names, because LinkedIn
  puts the Message button between the name and the headline rather than after
  the entry, so treating it as an end-of-row marker threw every name away."
---
