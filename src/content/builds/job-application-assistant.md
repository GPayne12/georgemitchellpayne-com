---
title: "Job Application Assistant"
slug: "job-application-assistant"
order: 2
repo: "https://github.com/GPayne12/job-application-assistant"
stack: ["React", "Vite", "Claude API"]
status: "live"
summary: "AI-powered job application tool — paste a job description and get
  a fit-level analysis (strong / moderate / weak), keyword matches and gaps,
  a tailored professional summary and achievement bullets, and a generated
  cover letter, packaged into an exportable application bundle."
decisionLog: "React + Vite over a meta-framework since the tool is a single
  client-side page with no routing or server rendering needs. No backend —
  the Anthropic API key is entered in the UI and stored in localStorage,
  since the tool runs locally for one user and a server proxy would add
  deploy overhead without a real security benefit."
---
