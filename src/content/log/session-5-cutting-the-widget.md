---
title: "Session 5: Cutting the Widget"
date: 2026-06-29
order: 5
tags: ["build-log", "scope", "ai-collaboration"]
draft: false
objective: "Close out the site sprint's loose end — the ask-the-portfolio widget — and decide whether it belonged on the site at all."
activity: "Removed and archived the ask widget after a few days in the build, and traced how it got there in the first place."
assessment: "The first real scope cut. The widget felt like a gimmick to me before a single visitor saw it, and the visitors I value most would have read it as a verdict on my practice before they ever reached the evidence."
excerpt: "The flashiest thing I had built came out of the site this week. No one else ever saw it."
---

This session is remembered for what came out of the site, not what went in.

## Everything finally had a home

I built this site from the ground up with the [Phase 0 Worksheet](/log/session-1-escape-from-squarespace) — Positioning, Assets, Voice — and by this point so much of what I had accomplished was finally being dumped into it, because there had never been a place to put it before. The tools I use to communicate my value slotted in as supports to the story: the Builds page could show my works in progress, the Log could carry my voice, the Practice page could finally display some of my greatest professional milestones.

I let that momentum carry me. Once everything had a home, I wanted a conversation about it. I wanted someone to ask me questions about the site. Question it. Question me.

And the momentum carried me one step further, into a conversation with Claude about a widget.

## The build

The ask-the-portfolio widget was the flashiest thing I'd built: a chat box wired to the Anthropic API, and it took three iterations of environment plumbing just to get it running on Cloudflare. The draw was obvious — a prospective employer could ask it questions about me and get direct answers.

I don't know that the idea was truly mine. I let the AI build it out as a potential opportunity, and we began to slot it in.

It lasted maybe a few days.

## The cut

It gave me such an uneasy feeling. I love a little well-designed piece of code, and this one didn't feel like one. It felt like a gimmick — to me, first, before anyone else had the chance to judge it.

I could see it landing that way for others, too: visitors who don't like the feel of AI interactions that lack depth. The visitors I value most would notice. They would question my practice before they even landed on the right page — before they reached a single case study, before any artifact had the chance to make its own argument. For a site built on the premise that [the proof is in the thing I made](/log/session-3-cases-and-venn), I had put a chat box in front of the proof.

The final decision came while I was working through tokens, API calls, usage limits and model throttling, when Claude explained that the widget could be hijacked by a bot and cost me. That settled it. I removed it and archived it, knowing it was a small sacrifice in the operationalization of the website.

No one even got to try it. No one noticed. But it's still worth noting.
