---
# DRAFT — item 6 of the assessment handoff. Summary/decisionLog sourced from
# the repo README and Session 4; whatBroke authored by George 2026-07-15
# (Claude edit pass: typos, tightening, seven-audit-checks anchor approved).
# Deploys only after George's full vet.
title: "Claude Security Layers"
slug: "claude-security-layers"
order: 7
repo: "https://github.com/GPayne12/claude-security-layers"
stack: ["Bash", "Python", "Claude Code hooks", "git-secrets", "SSH"]
status: "live"
summary: "Reusable hardening toolkit for multi-device Claude Code / AI
  development environments, extracted from a real security assessment of a
  two-machine setup. Covers Claude Code hooks (secret scanning,
  dangerous-command blocking, audit logging), SSH key handling, local API binding and
  CORS, AI-specific git secret patterns, and audit scripts that verify each
  layer actually works."
decisionLog: "Audit-first design: every finding in the source assessment was
  a silent failure — configured but protecting nothing — so the toolkit
  leads with audit scripts that verify behavior, not the presence of
  configuration. The local API template binds to 127.0.0.1 with CORS locked
  to localhost origins. Git scanning registers AI-specific credential
  patterns (Anthropic, OpenAI, GitHub, AWS, Google, Slack) rather than
  generic checks. Going public was deliberate: sharing the protocols is part
  of proving that security is a design-system concern, not an afterthought."
whatBroke: "The environment I was building started out severely exposed to
  external threats — and an ecosystem that sustains learning design work has
  to be as safe as it is useful. Once the exposures were identified, I focused
  the AI on the problem and had it repeatedly test scenarios where data could
  be leaked, stolen, or misused. The security layers broke repeatedly — each
  attempt to cover more of the ecosystem surfaced a new failure — until both
  machines passed all seven audit checks, with the protocols now built into
  the Claude Code Dual-Mac Hub repo."
---
