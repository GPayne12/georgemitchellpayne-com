---
title: "Session 3: Seven Cases and a Venn Diagram"
date: 2026-06-26
order: 3
tags: ["build-log", "content", "cases", "venn"]
draft: false
objective: "Move from an empty scaffold to a portfolio website with a definitive argument: content collections, the first seven case studies, and the Venn diagram that organizes everything."
activity: "Defined schema-validated collections for cases, builds, and log. Shipped the homepage, about, practice, builds, and log pages. Added cases 1-7 with SVG artifact diagrams and detail pages. Built the Venn as a React island with click-to-select."
assessment: "The spine of the site is visible. There are three domains, seven cases plotted on the diagram, and every claim on the site now has to pass a schema test before it can render."
---

The site stopped being a design system preview and became a portfolio this session.

## Gating the content

When the portfolio website found its form, I was relieved that my story had found its new home. So much of what I learned as a student took shape as artifacts. The proof was always in the thing that I made - with or without instruction. Learning to talk about the thing that I made was an entirely separate skill I had to develop. But often the creation of the artifact, the reflections on its significance, and how it all came together was lost in time and translation. Sometimes the pieces don't match up and the output never finds its audience. This was the pain point I aimed to solve with the new website, so I designed it to deliver on that promise from day one.

Since the design took shape, I gated content development with a caveat: even if my development plans are expansive, nothing should look or feel particularly unfinished. At the outset I had nine stories that I wanted to tell from my ten years of experience. The complete list has grown to eleven, but only seven have been polished enough to commit at the time of this post.

## What landed

- **Content collections** — Zod schemas for cases, builds, and log entries in `src/content.config.ts`. A case can't render without a situation, constraint, decision, artifact, measured outcome, and engineering translation. The schema enforces the format I desire to be held to.
- **The Venn** — the three-circle diagram (Learning Design, Engineering & Building, Leadership & Governance) as a React island on `/practice`, with click-to-select and case jump links. It took several rounds to kill a size flicker and anchor the labels; the fix was locking the grid columns and clipping overflow.
- **Cases 1–7** — microcredentialing, change management, the Course Revision Log, accessibility remediation, the Instructor Resource Center, learning analytics, and course materials integration. Each has an SVG artifact diagram and a detail page at `/practice/[slug]`.
- **Pages** — homepage, about, practice, builds, and log are all live, with GitHub commit telemetry wired to the now-strip.

## The three circles and the schema

To weave the major milestones of my professional career together effectively, I decided to showcase my experience by broadening my story into the domains of expertise I had built over the last decade. More than any title, I built a decade of rapport in the domains of Learning Design, Engineering & Building, and Leadership & Governance. Because each case study corresponds to at least one of those three domains, I made the connection visual, interactive, and communicative - select a domain to explore, then select a corresponding case study.

The case schema is designed to guide the visitor directly into [an artifact](/practice/course-materials-integration) - immediately satisfying the desire to see evidence. I needed to be held to the strict format in order to provide details with consistency across all cases. But more importantly, I needed it to be enforced - or I might push an unfinished aspect of the site while I'm too busy with something else in my life.

Taking a step back, I have been producing mind maps of my own professional development and learning journey since I was in my early twenties. Seeing the overlap of some of my greatest milestones in a format that I designed myself is a deeply rewarding experience. Building the website itself will eventually become a case study on the Practice page, but for now, at least I can finally see how my experience translates across typical professional boundaries.

The seven cases since the launch of the website satisfy the requirements of the interactive Venn diagram on the [Practice page](/practice), but the diagram-as-device will undoubtedly continue to communicate more effectively with each successive case study published.

Next: the ask-the-portfolio widget - and a lesson in scope.
