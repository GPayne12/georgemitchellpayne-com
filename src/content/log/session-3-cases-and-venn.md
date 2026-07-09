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

## What landed

- **Content collections** — Zod schemas for cases, builds, and log entries in `src/content.config.ts`. A case can't render without a situation, constraint, decision, artifact, and measured outcome. The schema enforces the format I want to be held to.
- **The Venn** — the three-circle diagram (Learning Design, Engineering & Building, Leadership & Governance) as a React island on `/practice`, with click-to-select and case jump links. It took several rounds to kill a size flicker and anchor the labels; the fix was locking the grid columns and clipping overflow.
- **Cases A–E** — microcredentialing, change management, the Course Revision Log, accessibility remediation, and the Instructor Resource Center. Each has an SVG artifact diagram and a detail page at `/practice/[slug]`.
- **Pages** — homepage, about, practice, builds, and log are all live, with GitHub commit telemetry wired to the now-strip.

I had been producing mind maps of my own professional development and learning journey since I was in my early twenties. Seeing the overlap of some of my greatest milestones in a format that I designed myself — an interactive Venn diagram — was a rewarding experience, like I could finally see how my experience translated across and beyond typical professional boundaries.

Next: the ask-the-portfolio widget — and a lesson in scope.
