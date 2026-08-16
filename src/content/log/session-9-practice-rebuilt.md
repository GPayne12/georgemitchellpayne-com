---
title: "Session 9: In Progress"
date: 2026-07-14
order: 9
tags: ["build-log", "practice", "cases", "design"]
draft: false
objective: "Read my own site the way a recruiter, a colleague or a former classmate would read it, and settle everything it had been getting away with under my own eye alone."
activity: "Wrapped the header nav for the phones most people actually browse on and took the mouse out of the Venn hint. Pulled a named client off the homepage and gave the site a letter mark matching the ones its tools already wore. Reworded the Practice door copy, rebuilt Builds as a two-column card grid, and gave log entries an explicit excerpt field. Added Case 6, which retired the planning-worksheet letters across every case file and cross-reference, replaced the case status badge with an explicit project timeline, and reordered the list newest-first."
assessment: "An audit I did not sit down to run. Opening the site on my phone turned into a full pass over everything a stranger meets first, and a client's name came off the homepage because it was standing in front of the argument it was meant to support. This is where I started holding myself to the image I design in public."
excerpt: "I opened my own site on a phone to check one thing — and kept going until a client's name had come off the homepage."
---

The telemetry strip on the homepage may not serve a clear function for every visitor. The site is designed to welcome a range of people — to let them learn more about my professional activity, perceive real value, and discover a potential partnership. The strip displays my most recent coding activity as it is pushed to GitHub. In this way it shows my activity, my design efforts in real time, and a dedication to craft. It's also an unwieldy window into the messiness of the process. At any moment it might display something rather trivial, or something somewhat sensitive. But that is the point. It shows not only what I am working on but how, and how often — and the site and the artifacts within it are the proof. Designing for the right audience is complicated, and not everyone is looking for the same thing. Regardless, my intention is to show them that I am working, what I am working on, and how it is coming together, and to encourage partnership. I want people to see what is happening and connect with me.

<figure style="margin: var(--space-6, 1.5rem) 0;">
  <img src="/log/session-9/telemetry-strip.png" alt="The now-building telemetry strip on the homepage, reading: site georgemitchellpayne.com, phase 02 builds and telemetry, last push 1d ago, quote log: add two internal links to the Session 8 entry, status in-progress." style="width: 100%; max-width: 100%; height: auto; border: 1px solid var(--color-border, #ccc); border-radius: 4px; display: block;" loading="lazy" />
  <figcaption style="font-size: 0.85rem; color: var(--color-ink-muted, #666); line-height: 1.6; margin-top: var(--space-2, 0.5rem);">
    The strip, doing exactly what I described — the last thing I pushed was two internal links on an old entry. Trivial. It's basically always in-progress.
  </figcaption>
</figure>

## The homepage, on a phone

During this train of thought I was having about curating an experience in public, I opened my site on my phone. Immediately I noticed the navigation clipping on mobile. Knowing full well that most people who open this site will open it on a phone, I started to review the other pages, and soon it became a full audit unto itself. To start, I stopped assuming people would engage with the interactivity of the Venn diagram on the [Practice page](/practice) the same way across devices. I moved the hint above the diagram instead of below, to accommodate how people scroll on their phone, and the hint text was reworded so it no longer assumed a pointer.

Then I decided that I should take a client name out of the hero text on the home page. Somehow I decided I had not yet earned the name drop if I could not first prove the milestone on the Practice page. Then, a similar feeling came over me about my existing partners. People can reasonably put the dots together on where and how my experience transpired, from case to organization, but I decided to keep the copy describing the issues and the actions completely clean of names. The hero text now describes the cohort of institutions instead, and the rest of the site would follow. Honestly, the names were not doing work for the arguments I was making; they were standing in front of them.

In an effort to put some polish on the session, I started to play with a dedicated favicon. Every tool in the kit already wore a letter on a square. The site got one too: a white G on a full black background, the same construction inverted.

<figure style="margin: var(--space-6, 1.5rem) 0; display: flex; flex-direction: column; gap: var(--space-3, 0.75rem);">
  <div style="display: flex; gap: var(--space-4, 1rem); align-items: flex-start; flex-wrap: wrap;">
    <span style="display: flex; flex-direction: column; gap: var(--space-2, 0.5rem); align-items: center;">
      <svg width="56" height="56" viewBox="0 0 64 64" role="img" aria-label="The site's favicon: a white letter G centered on a black square." style="border: 1px solid var(--color-border, #ccc); border-radius: 3px; display: block;">
        <rect width="64" height="64" fill="#000000"></rect>
        <text x="32" y="34" text-anchor="middle" dominant-baseline="central" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="48" fill="#ffffff">G</text>
      </svg>
      <span style="font-family: var(--font-mono, monospace); font-size: 0.7rem; color: var(--color-ink-muted, #666);">the site</span>
    </span>
    <span style="display: flex; flex-direction: column; gap: var(--space-2, 0.5rem); align-items: center;">
      <svg width="56" height="56" viewBox="0 0 64 64" role="img" aria-label="A build mark: a black letter A centered on a white square." style="border: 1px solid var(--color-border, #ccc); border-radius: 3px; display: block;">
        <rect width="64" height="64" fill="#ffffff"></rect>
        <text x="32" y="34" text-anchor="middle" dominant-baseline="central" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="48" fill="#000000">A</text>
      </svg>
      <span style="font-family: var(--font-mono, monospace); font-size: 0.7rem; color: var(--color-ink-muted, #666);">a build</span>
    </span>
  </div>
  <figcaption style="font-size: 0.85rem; color: var(--color-ink-muted, #666); line-height: 1.6;">
    The same mark, inverted. Each build in the kit carries a letter on a square; from this day the site carried one too.
  </figcaption>
</figure>

## What the defaults had been deciding

- **The door copy** — the way into the Practice page was reworded into a two-part build-and-manage framing.
- **Builds as a dashboard** — two columns, project marks on the cards.
- **Excerpts as a field** — log teasers stopped defaulting to whatever the first paragraph happened to be.

What the telemetry strip cannot show is the part of this I am proudest of — the raw interaction with AI agents, the architecture of a learning ecosystem I am directing line by line. My telemetry does not always show something sexy. It shows that I'm working. The log is where everything else lives.

## The case file

The case files had carried planning-worksheet letters since before the site existed. [Learning analytics](/practice/learning-analytics) arrived as the sixth, and the letter died in the same commit that created the number — every file renamed, every cross-reference in body text converted. Case F was gone, and with it the last of a filing system built to hold a finished plan rather than a growing one. Six case studies stopped calling themselves live and started carrying dates. I realized, since I gave birth to this thing, that I have to preserve this site like the artifact that it is and keep designing it in real time. The cases are finished and say so. The site is not, and it says that too.

Ever since the site went live and [the pipeline from LinkedIn opened](/log/session-8-the-log-becomes-my-microphone), I have been building the pedestal while standing on it. A name came off the homepage because it obscured my story. The performance stays because I have decided to let it obscure something else: my tiredness, my stress, my natural messiness. Performances like this are not perpetual. There may come a day when I let this site sit still for a long time, and the strip will keep saying in-progress while the timestamp stretches from hours to months.

I'm only human. For now, this experiment is active because I am active.
