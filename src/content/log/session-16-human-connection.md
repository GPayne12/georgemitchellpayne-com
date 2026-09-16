---
title: "Session 16: The Toll Gate"
date: 2026-08-12
order: 16
tags: ["build-log", "human-connection-engine", "network", "linkedin", "design", "process"]
draft: false
objective: "Work out what my professional network actually is — its shape, its texture, how far it really reaches — then get the data out of LinkedIn on my own timeline, cut it down to the people genuinely worth the time, and make it impossible to act on any of them until I had written down why they mattered."
activity: "Recentered the Human Connection Engine after the TOC26 Summit and fed it a refined dataset. Pulled a thousand names off LinkedIn in an hour with a screen-recording capture tool instead of waiting two days for the official export, then swiped that list down to under 120 people. Made the origin story required before anyone leaves the dormant tier or reaches a campaign board, and set every remaining feature to unlock on use rather than on enthusiasm."
assessment: "A thousand names on LinkedIn came down to about a hundred people I could actually write a story about. Every gate I built that day is aimed at me: nobody moves forward in the tool until I've written why they matter, and the tool doesn't grow until I've used it to reach them."
excerpt: "My LinkedIn had a thousand names, and I couldn't say who most of them were. So I pulled them out in an hour, swiped them down to about a hundred, and put a toll gate in front of every one."
---

I’ve mentioned a few times that I’ve been building and using a Human Connection Engine to solve a very human problem I have been having — sustaining a healthy cadence of communications with my professional network. I don’t know who else is like this, but I genuinely don’t understand the shape and texture of my network. If LinkedIn = My professional network, then I find the representational bands of “1+, 2+, 3+” to be a little rigid. In any case, I decided there must be people I should be talking to more regularly.

Small tangent, this is likely why I don’t regularly open or participate in any other social media platforms. LinkedIn may be flooded with AI slop — mostly in written and infographic form — but it is where my network exists.

The tool I built — originally with the help of the first release of Claude Fable — was designed to harness a genuinely human-centered tool with, at the outset, only one client: me. The tool takes in the basic information I input per person and per contact and keeps me aware of the health of our communication. Because the outcome of keeping a healthy connection with my network means more emails and calls and text messages, there is nothing gamified about it (there are no streaks, badges, or engagement mechanics inside the app and there never will be), and it does not act as a shaming mechanism for my connection with any one person or everyone all at once if I misstep. The logic is designed to heal the communication divides in my own network, not run me ragged chasing empty conversations.

Finally, after having left my basement for a genuine (work) purpose — the TOC26 Summit — I recentered the Human Connection Engine tool and fed it my refined dataset.

## A thousand names

My LinkedIn had a thousand names. A thousand names! I really thought to myself, who are these people? And who am I to them? I started building my LinkedIn network just after high school and have kept it up-to-date ever since, mostly as a stand-in for my resume. I’ve since been halfway around the world and back, and held client meetings with a few people half a world away. I’ve met a lot of people and exchanged a lot of contacts (often including, or exclusively, via LinkedIn). But, I suddenly needed the data behind the platform. Ever tried to pull your contacts list from LinkedIn before? You have to fill out a form and wait up to 48 hours for a CSV file. That timeline did not work for me, so I had to get creative.

I had Claude drum up a video capture tool so that I could scroll through the list in LinkedIn and produce a CSV file I could use within an hour. It reported 98% accuracy to the name and title of each person — with some data lost to a “blurring” effect while scrolling.

## The toll gate

Then, having just poured a thousand real names into the tool, I put a gate in front of them. I built in a swiping feature (like a dating app) to bring the effective set of names down to approximately 100. A substantive number to rev the engine from the beginning again. In the end, it’s still a lot of people. It’s not the number on my LinkedIn profile, but these 100 or so people have proven themselves to me before and they may be able to help me kickstart and sustain this effort.

Every person in this tool has an origin story – who they actually are and why they are in there. As of that afternoon I made the origin story required everywhere except the dormant tier. A bulk import can land freely. But nobody gets promoted out of dormant, and nobody gets placed on a kanban board, until I write a little story about them. The add-person form surfaces the field inline and writes it in the same submit, so there is no way to route around it.

In this case, every friction is a feature, aimed at me. The failure mode this whole tool was built against is a contact list that becomes a queue of timers; of people reduced to when they are next due. Automating the intake was fine. Automating the part where I remember why someone matters is just wrong.

## The usage gates

One decision that day was not code, and it is the one I expect to hold longest.

Just like the anti-gamification framework for the tool, the features in this tool now unlock on use, not on enthusiasm. The tool awaited a set number of real people to produce a campaign board; the one after that waited until the kanban board was genuinely in use. And these usage gates exist exactly because building the tool was the most comfortable possible substitute for doing the actual thing — communicating. The only way to unlock each subsequent feature for each person is to do the human part at each step and communicate.
