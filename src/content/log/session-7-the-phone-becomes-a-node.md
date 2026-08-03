---
title: "Session 7: The Phone Becomes a Node"
date: 2026-07-08
order: 7
tags: ["build-log", "gmobile", "security", "automation", "school"]
draft: false
objective: "Enroll the iPhone as a third node in the hub — with the same security-first instincts as everything else — and point the whole setup at a degree starting in twelve days."
activity: "Built the GMobile phone node: a restricted SSH handler so the phone can only run allowlisted commands, an enrollment script, and an end-to-end test. Spent a full day hardening: doctor-script fixes, a phone-loss runbook, documented network ACLs, backup replication to the laptop, audit log rotation. Then built a school folder structure and a browser share-menu shortcut that drops articles into it, week by week."
assessment: "Three devices, one hub, and the routine work — backups, health checks, audits — now runs without me. The same week, the hub picked up its first real job: getting me ready for school."
excerpt: "The phone joins the hub - and the whole setup gets pointed at a degree starting in twelve days."
---

The phone node was the icing on the cake for the hub. If all my machines are to work together as one then the phones had to be included. Like many others, I am always on my phone. It is full of apps but strictly organized. It already holds so much of my information and life that it only made sense to add the phone as a device that could not only communicate with the other two machines, but also control them. At first I just focused on the connection aspect, then the connection underwent a series of security sweeps, tightening more and more. Now the phone can navigate through the primary machine on the hub and can manipulate files and folders as needed.

## What landed

- **GMobile** — the iPhone became a hub node. Its automation path isn't an open shell: it runs through a restricted SSH handler that only executes an allowlist of verbs, with its own enrollment script and an end-to-end test to prove the path works.
- **A hardening day** — a full-system diagnostic from the desktop, doctor-script fixes across the hub, a phone-loss runbook (what to revoke if the phone disappears), documented network ACLs, backups now replicated to the laptop over a single-purpose key, and audit logs that rotate themselves.
- **School Drop shortcut** — a restricted key enrolled as the backend for an iPhone shortcut, so one tap from the browser's share menu drops an article straight into the hub's school folders.
- **Housekeeping that compounds** — the weekly security audit now covers both machines and the security-layers checks in one pass; the Dev Dashboard got its own build entry on this site.

Coincidentally, I was also preparing diligently to go back to school. The [M.S. of AI Engineering Degree program](/coursework) was going to start on July 20th and I needed to prepare more structurally than mentally. I had been looking forward to going back to school for years, but the landscape of education was changing so much within my purview - I could see the rise and fall of various online education programs from where I work within the space. Counterintuitively, it had paralyzed me for a number of years because I could not settle on a program with deep inherent value to my career without formalizing a practice (instructional design) that I had already mastered on the job. As luck would have it, I received a mostly canned message from a Quantic recruiter inviting me to apply just as I was surviving the scam back in the Spring.

Fast forward through a few months of bootstrapping my AI IQ in and out of my 9-5 and I realize that I need structure to see this program through to completion. I have a loving family to cater to and a two hour commute arriving soon. The only thing I needed more than folder structure for success built into my hub setup was a way to quickly and efficiently drop relevant articles into the folder structure - especially while browsing the internet. So I undertook building my first shortcut. It was surprisingly challenging to create a button in my browser send-to drop down menu, but with some persistence it now functions well.

So I connected my phone to the hub - allowing me full CLI access to the hub, built out a folder structure for school, and built a little pipeline to funnel interesting news into each week of my course materials.
