---
title: "Session 3: Five Cases and a Venn Diagram"
date: 2026-06-26
order: 3
tags: ["build-log", "content", "cases", "venn"]
draft: false
objective: "Move from empty scaffold to a site with an argument: content collections, the first five case studies, and the Venn diagram that organizes everything."
activity: "Defined schema-validated collections for cases, builds, and log. Shipped the homepage, about, practice, builds, and log pages. Added cases A–E with SVG artifact diagrams and detail pages. Built the Venn as a React island with click-to-select."
assessment: "The spine is visible. Three domains, five cases plotted on the diagram, and every claim on the site now has to pass a schema before it can render."
---

The site stopped being a design system preview and became a portfolio this session.

## Gating the content

As the design of the website took shape, I gated content development with a caveat: even if my web development plans are expansive, nothing should look or feel particularly unfinished. At the outset I had nine stories that I wanted to tell from my ten years of experience. The complete list has grown to eleven, but only five were polished enough to commit at the time of this post. The five cases in the launch of the website satisfy the requirements of the interactive Venn diagram on the Practice page, but the diagram-as-device will communicate more effectively with a richer set of case studies (coming soon).

## What landed

- **Content collections** — Zod schemas for cases, builds, and log entries in `src/content.config.ts`. A case can't render without a situation, constraint, decision, artifact, and measured outcome. The schema enforces the format I want to be held to.
- **The Venn** — the three-circle diagram (Learning Design, Engineering & Building, Leadership & Governance) as a React island on `/practice`, with click-to-select and case jump links. It took several rounds to kill a size flicker and anchor the labels; the fix was locking the grid columns and clipping overflow.
- **Cases A–E** — microcredentialing, change management, the Course Revision Log, accessibility remediation, and the Instructor Resource Center. Each has an SVG artifact diagram and a detail page at `/practice/[slug]`.
- **Pages** — homepage, about, practice, builds, and log are all live, with GitHub commit telemetry wired to the now-strip.

## The three circles and the schema

The diagram is designed around Learning Design, Engineering & Building, and Leadership & Governance precisely because of my multi-layered skillset and professional ambitions. The case schema was designed to guide the visitor into an artifact — immediately satisfying the desire to see evidence, but eventually to nourish the impulse to play with something. I needed to be held to the strict format in order to provide details with consistency across all cases. More importantly, I needed it to be enforced — or I might push an unfinished aspect of the site while I'm too busy with something else in my life.

I had been producing mind maps of my own professional development and learning journey since I was in my early twenties. Seeing the overlap of some of my greatest milestones in a format that I designed myself — an interactive Venn diagram — was a rewarding experience, like I could finally see how my experience translated across and beyond typical professional boundaries.

Next: the ask-the-portfolio widget — and a lesson in scope.
