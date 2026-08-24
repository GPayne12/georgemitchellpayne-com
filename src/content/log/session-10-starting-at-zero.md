---
title: "Session 10: Starting at Zero"
date: 2026-07-17
order: 10
tags: ["build-log", "analytics", "xapi", "security", "about"]
draft: false
objective: "Put back the learning analytics pilot I cut from Phase 0 to make the site ship, and build it as a real pipeline rather than a demonstration of one."
activity: "Rebuilt /analytics as a live xAPI pipeline into a Learning Record Store: a validated beacon, a rate-limited endpoint that constructs statements server-side, and a cached readback aggregating by page, day and landing source. Published the methodology and its limits on the page itself. Rewrote About to bridge from LinkedIn with full roles and degrees, cleared some small unfinished things, and took the two security repositories public after a seven-check verification pass."
assessment: "The analytics pilot I cut from Phase 0 so the site could ship came back as a real xAPI pipeline into a Learning Record Store, and went live reading zero. The line I put under it — the pipeline is the exhibit, the counts are just proof it runs — is my starting point."
excerpt: "I cut the analytics pilot from the first build so the site could ship. When I finally put it back, it went live reading zero, which was the only honest number it had."
---

When I was building [Phase 0](/log/session-0-the-stall-before-the-start) of this website, I designed the structure to support gradual expansion into new and exciting areas of learning design. The plan included a live demonstration of xAPI calls that could show site activity. Then I scrapped it from the initial build, because it would not ship fast enough. I needed to host a polished website, housing the depth of my experience at a glance, as quickly as possible. Dropping the learning analytics pilot freed me up to focus on the message, the style, and the delivery of the content without worrying too much about the pipelines in the background. I knew that I would eventually pick a Learning Record Store to instrument my website. I knew that I needed connections between pages to facilitate a demonstration of my skills. I knew that I needed a starting point, and 0 was the only honest place to begin.

Honestly, I have always liked reading into the data. When I first prepared to [transfer my domain from Squarespace](/log/session-1-escape-from-squarespace) I opened up Cloudflare and noticed all the instrumentation. A few days after the site went live it began to capture visitor activity. I began posting to LinkedIn as a way to share my story — designing in public — and the network began capturing the stream of visitors who clicked the link to my website. The next best place to connect the data points then became the thing I had shelved in order to ship the website itself expediently.

On July 17 I committed to rebuilding [/analytics](/analytics) as a real xAPI pipeline into a Learning Record Store, starting at zero. The foundations had been laid, and real people — and sometimes bots — were visiting my website and presumably reviewing my experience in detail. What the effort produced was simple. The page describes the value publicly: the pipeline, the methodology, the limitations, and a live readout that updates every ten minutes. From the start I added a line directly under the lead.

> The numbers are small because they are real — the pipeline is the exhibit, the counts are just proof it runs.

The disclaimer kept me honest. But I am also hopeful that it serves as a little invitation to return to the site and participate in the activity. Each visitor leaves a little mark — showing me exactly what they were interested in and where their attention floated before they drifted off to other parts of the internet.

## What it enables

The aggregation groups statements three ways: by page, by day, and by landing source. On July 17 that third grouping had nothing to put in it. Three weeks later I printed a QR code for a conference badge with a source parameter on the end of the URL, and every scan resolved into the same store, attributed, with no change to the write route and no change to the read route. The slot was already there.

That is the argument [Case 6](/practice/learning-analytics) makes at organizational scale, running here at personal scale. The value of instrumenting something is not the first number it gives you. It is that the next question you think of is already answerable.

There is a longer list of things this makes possible, and I am deliberately not building them yet: engagement depth rather than page counts, a path through the site rather than a set of hits, a read on whether the log or the practice pages are doing the work of convincing anybody. The pipeline is the foundation. Everything after this is just a query away.
