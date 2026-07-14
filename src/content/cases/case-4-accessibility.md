---
title: "Accessibility Remediation: WCAG 2.2 at Portfolio Scale"
slug: "accessibility-remediation"
order: 4
domains: ["learning-design", "engineering"]
tier: "supporting"
center: false
status: "complete"
timeline: "2021–2023"
situation: |
  When I joined Pearson in 2019, the WCAG 2.1 accessibility standards for online course design were barely a year old, and Learning Design teams were already rolling them across the partnership portfolio. I came up to speed at the course level, applying the frameworks during consultations across several programs at once. Three years later I was promoted into the Lead position for a program that now had to meet WCAG 2.2 — and multimedia was the least compliant component. Upwards of 60% of multimedia pieces weren't window/browser responsive, and more than 70% contained stock images that were poorly tracked, missing alt text, or out of license compliance heading into a private-equity acquisition. Every one of those problems was on the clock for my first months as Lead.
constraint: |
  Prioritization was the hard part. Partner needs usually sit at the center of the Lead role, but here I had to serve the organization internally first: meeting legal-compliance obligations ahead of an imminent institutional transition was paramount. Routine faculty-led fixes stayed in their normal revision cycles, while the largest course-level multimedia problems were pulled out as special projects outside standard development.
decision: |
  Each course carried its own media manifest, so step one was merging that fragmented legacy data into a single format the whole team could work in simultaneously. I built the spreadsheet that now holds program-wide data once scattered across individual Word documents — which resolved most of the early structural demands. From there the work exploded into a parallel effort: documenting stock images, aligning metadata across databases, and replacing anything not covered by the impending licenses. Hundreds of multimedia pieces spawned thousands of stock images to address. We hit the in-house license-compliance threshold two months early.
artifact: |
  Process: 330+ pieces in, 252 pieces retained (net ~78 retired by detailed scoping criteria). Media Manifest: 1 spreadsheet tabbed by course, tracking Location, Parent Page Link, Name, URL, Media Type, Time Demand, Description, Developing IDs, Original Term, Revising IDs, Term Retired, and a full scoping rubric (Outdated flags, Link Accessibility, Transcript Link, Reviewer, Objective Alignment, Decision: Retain/Modify/Retire). Rights and Permissions: 1 spreadsheet tabbed by program (Program, Course, Location, Asset Title, Asset ID, Permalink, Database, Attribution). Credits Page: 1 HTML page per course, accessible from the Course Syllabus, listing all retained assets with attribution.
measuredOutcome: |
  Timeline: September 2021 – September 2023. Reviewed 330+ multimedia pieces and thousands of underlying assets; curated down to 252 retained pieces (~78 retired). Primary accessibility standard upgraded from WCAG 2.1 AA to WCAG 2.2 AA. End-state compliance reached ~75% within 1 year and 96% within 2 years across six coordinating teams. License-compliance threshold met two months ahead of schedule.
engineeringTranslation: |
  Designed the data model and governance SOP for a portfolio-scale remediation pipeline — unified fragmented per-course manifests into one source of truth, defined a four-state triage taxonomy with objective-alignment criteria, and drove 330+ assets to WCAG 2.2 AA (96%) across six teams. Standardizing a legacy dataset and the process operating on it.
---
