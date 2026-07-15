---
# DRAFT — item 6 of the assessment handoff. Summary/decisionLog sourced from
# the repo README and Session 4; whatBroke authored by George 2026-07-15
# (Claude edit pass: typos, tightening). Deploys only after George's full vet.
title: "Claude Code Dual-Mac Hub"
slug: "claude-code-dual-mac"
order: 6
repo: "https://github.com/GPayne12/claude-code-dual-mac"
stack: ["Tailscale", "SSH", "Bash", "macOS", "Claude Code"]
status: "live"
summary: "Two Macs running Claude Code connected into one environment over a
  private Tailscale mesh — the desktop owns files, memory, and compute; the
  laptop drives it remotely with a single SSH prefix. No Docker, no cloud
  tunnel, no ports open to the internet. Published with bootstrap scripts
  for both machines."
decisionLog: "Tailscale over an exposed port or cloud tunnel: NAT traversal
  and encryption with nothing listening on the public internet.
  Primary-canonical, secondary-stateless: projects, Claude memory, and sessions live
  on one machine only, so there is no sync problem to solve — the laptop
  SSHes in and drives. A plain SSH prefix over remote-desktop tooling keeps
  every terminal tool on the primary (claude, brew, git, gh) usable from the
  laptop. The whole setup is captured as scripts plus docs so it is
  reproducible instead of artisanal."
whatBroke: "Bridging the machines on my network into a hub posed new and
  separate risks for the learning ecosystem taking shape inside it. I focused
  the AI on tight, personalized entry points into the environment — a single
  machine acting as the hub — quite intentionally cutting duplicative work
  across machines as well. It produced a framework and a set of tools to
  bring it to life. Once the setup was functional across the two primary
  machines (no phone access yet), the AI layered the security protocols back
  in. New threats kept emerging across the ecosystem — but each successive
  session across machines brought the threat level down."
---
