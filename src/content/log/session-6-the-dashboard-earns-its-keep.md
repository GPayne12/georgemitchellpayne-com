---
title: "Session 6: The Dashboard Earns Its Keep"
date: 2026-07-03
order: 6
tags: ["build-log", "tooling", "dev-dashboard", "builds"]
draft: false
objective: "Grow the dev dashboard from a bootstrap into a daily driver, and bring the Builds page up to date with what the hub had actually produced."
activity: "Dashboard now persists spawned dev servers and picked up defib-trainer. Builds page gained human-connection-engine and defib-trainer cards. Polish pass: favicon, project icons, dev-layout pane banners. Gitignored backups/ so nightly tarballs can never push."
assessment: "Tooling week. The dashboard stopped being a demo and started being how I work, and the Builds page caught up with reality. Building for myself, for once, instead of for everyone else."
excerpt: "The week the tools stopped being a demo — and a rare turn toward building something for myself."
---

Until this point in my professional life, so much of what I had built had been for other people. I have an inherent serve-to-lead mentality, but because I'm a natural builder, my instinct is rarely to build something for myself. This portfolio represents a healthy new path for me.

The effort of designing something for myself by pulling the throughlines of my own experience designing for others was cathartic. And it has been a relief to put my experience into a medium that communicates well for me.

After the hub bootstrap, this week belonged to the tools — and to making them mine.

## What landed

- **Persistence** — the dev dashboard now remembers the dev servers it spawns instead of losing them between sessions, and defib-trainer joined its project list.
- **Builds page catch-up** — two new cards on the site: human-connection-engine and defib-trainer. The public record now matches what the hub has produced.
- **Polish** — a favicon and per-project icons for the dashboard, and pane banners in the dev-layout script so every terminal announces what it's for.
- **A guardrail** — `backups/` gitignored, so the nightly backup tarballs can never be pushed to a public repo. Small change, same instinct as the first repo I ever made.

I had built a home for my experience, but I had also accumulated a series of early vibe-coding projects, and I gravitate naturally toward the Agent CLI space. Building web apps kept challenging the continuity of that work — the localhosting, the ports, the browser tabs. I did not like having to explain, every single time, which web interface I wanted to boot up from the Terminal. The dashboard solved two problems at once: I stopped hunting for my own works in progress, and I could demonstrate them quickly, online or in person.

Those two new cards each have a story behind them. The Defib Trainer was my first build with a potential client — a 40-year veteran paramedic with a particular concern regarding the timeliness of defibrillation delivery and the efficacy of existing training. It is an ACLS training simulator — built for practice, not for clinical use. The Human Connection Engine came as a third addition to a suite of career maintenance tools — including the Career Aggregator and the Job Application Assistant — that I developed first for myself, but now also for others.

That engine was born out of my own job search. I already had tools for the resume, the cover letter, and the application pipeline, but Steve Dalton's 2-Hour Job Search convinced me that the role I want next will most likely come through diligent socializing. I know a lot of people, and in the middle of a full search I had inadvertently overlooked plenty of connections who could have strengthened an application. So the engine does two things: it builds and sustains my connection to the people I care about most, and it weaves in critical touchpoints with the people behind the applications that mean the most to me. Right now it runs in a heightened campaign mode. When I finally emerge from the other side of this search, it should keep me connected to my network in a healthier way.

Quiet on the outside, but the dashboard week made my working environment feel like mine.
