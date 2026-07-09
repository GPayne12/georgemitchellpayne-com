---
title: "Session 4: Cutting the Widget, Hardening the Hub"
date: 2026-06-30
order: 4
tags: ["build-log", "scope", "security", "hub"]
draft: false
objective: "Close out the site sprint's loose end — the ask-the-portfolio widget — and turn the two-machine setup into a hardened, documented hub."
activity: "Removed and archived the ask widget. Remediated every finding from the dual-Mac security assessment; both machines now pass 7/7 audit checks. Published claude-security-layers and claude-code-dual-mac to GitHub. Committed the hub's initial operating layer: meta docs, handoff structure, scaffolding scripts, and the first pieces of local-api and dev-dashboard."
assessment: "The first real scope cut. The widget was the wrong kind of play for visitors — edging on gimmicky — and if the wrong bot found it, it could cost a fortune in tokens. Cutting it bought a security layer and a hub skeleton instead."
---

This session is remembered for what came out of the site, not what went in.

## The cut

The ask-the-portfolio widget was the flashiest thing I'd built: a chat box wired to the Anthropic API, and it took three iterations of environment plumbing just to get it running on Cloudflare.

Translating my own theories and systems of design into my digital working environment was instinctual. Inspiring portfolio website visitors to want to work with me was something else entirely. The plan was for interactivity to take many forms for visitors, but to layer them in appropriately. I thought the Ask Widget could provide a distinct interactivity for visitors seeking targeted information, but after playing with usage limits, usage credits, and model throttling, I learned not only was it the wrong kind of play for visitors — edging on gimmicky — but it might cost me a fortune in tokens if the wrong bot found it.

I decided to remove the widget, but it may make a comeback in another capacity.

But now that I'm reading up on the role and responsibilities of Conversation Designers…

## The security day

At this point, the hub connecting my machines behind the scenes was starting to take shape. In order to achieve my goals, I have always known I would need to be persistent — but in this case, I needed the technology to sit in my hands wherever I went: at my desk, on the couch or on a plane, and in my pocket. Solving for that equation led me past the security-hooks-setup stage to a place where I needed to build more fundamental security protocols around my environment — not just security applied to my projects, but security applied to the environment.

June 29 went entirely to hardening. Every finding from the two-machine security assessment got remediated: hooks fixed, the local API bound to 127.0.0.1, CORS locked down, permissions tightened, SSH configs hardened. Both machines finished the day passing all seven audit checks.

The same instinct that made my first-ever repo a pre-push security hook turned the day's work into two public repos: **claude-security-layers** (a reusable hardening toolkit) and **claude-code-dual-mac** (the Tailscale + SSH setup, documented). At first, I was driven by a fear of my own early mistakes; then I began to consider outside influences, like a data exposure or prompt injection that infected my ecosystem. It pushed me to make the security repos public — to share security protocols, but also to prove that security is a critical aspect of my design systems.

## The hub bootstrap

June 30, the hub got its operating layer: machine and convention docs, a handoffs-and-plans structure so sessions can pick up where others left off, scripts to scaffold new projects and lay out dev sessions, and the first commits of two tools that matter later — a local API and a dev dashboard.

The site sprint built the public face. This week built the shop behind it.
