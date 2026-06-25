---
title: "Redesigning Performance Support for a 2,000-Person Sales Org"
slug: "performance-support-redesign"
order: 1
domains: ["learning-design", "engineering"]
tier: "flagship"
center: false
status: "in-progress"

situation: "A global sales team was relying on a 200-page static PDF job aid that
  was updated quarterly and ignored within days of release. Reps were calling the
  help desk for answers already documented — but buried."

constraint: "No LMS budget extension. Solution had to live inside Salesforce, the
  tool reps already had open all day. Build and rollout in under 8 weeks."

decision: "Replaced the PDF with a searchable, contextual in-app guide using
  WalkMe, mapped to CRM workflow stages rather than document sections. Content
  was chunked to the point of decision, not the topic."

artifact: "Deployed WalkMe overlay with 47 context-triggered tips, a search
  layer covering 200+ scenarios, and a feedback button on each card wired to a
  Slack channel for rapid iteration."

measuredOutcome: "Help desk calls for Salesforce questions dropped 34% in the
  first 60 days. Onboarding time-to-first-deal for new hires decreased from 11
  weeks to 8."

engineeringTranslation: "Context injection at the component level. The 'document'
  became a lookup table keyed to UI state — closer to a state machine than a
  manual. Feedback loop closed in days, not quarters."
---

<!-- PLACEHOLDER — content pending Phase 3 case study completion -->
