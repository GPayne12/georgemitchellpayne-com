---
title: "Session 12: Failing Open"
date: 2026-08-03
order: 12
tags: ["build-log", "security", "hooks", "coursework", "school"]
draft: false
objective: "Fix the security hooks I had recorded as fixed in July, work out why five weeks of evidence never reached me, and give the degree a surface before it has a single outcome to show."
activity: "Rebuilt the hooks that had been reading the wrong level of the payload and passing every check by default. Added a weekly health check that probes each live hook with a benign payload and validates the response, counts errors in recent transcripts, and compares configuration across machines, plus a sweep that scans every repository for the two defect patterns. Committed the draft flip that had only ever existed in a working tree. Published the backlog. Shipped /coursework at 0 of 10 complete."
assessment: "A hook I recorded as fixed in July had been passing every call by default for five weeks, logging errors into a file nobody read. The system generated evidence of its own failure the entire time and nothing put it in front of me. I was not missing data. I was missing display."
cardAssessment: "Five weeks of a security hook blocking nothing, logging the proof into a file I never opened. I was not missing data. I was missing display."
excerpt: "I had written down that the security hooks were fixed on July 6. They had been blocking nothing since, and logging that fact into a file I was not reading."
---

On July 6 I recorded that the security hooks on both machines were fixed. They were not. So, like all things AI, I returned to the task to fix it.

There were gaps, because the hooks read the fields they were matching from the wrong level of the payload, so nothing ever matched and every check passed by default. Then they answered with a value the schema does not accept, so each allowed call logged an error nobody was reading. How long did it drag on for: five weeks.

So I weaved in a more sensible health check. It now probes each live hook with a benign payload and validates what comes back, counts the errors in recent transcripts, and compares configuration across machines. A separate sweep scans every repository for the two defect patterns, and flags fixes that exist on one machine but not the others. All of it runs weekly now, on the Monday schedule, on both machines.

## An instinct is not a control

I have benefited a great deal from this site since the first repository I ever created — which was, as I have said here more than once, a security control. That same instinct shipped a hook which blocked nothing for five weeks and told nobody. Worse than nothing, honestly: every call it waved through logged an error into a file I was not reading, so the system generated evidence of its own failure the entire time and I had built no habit of going to look.

In some ways the earlier claim is dead. But in some ways it was only ever half done. The instinct was real, it was early, and it is still the reason any of this tooling exists. But an instinct is not a control. A control is a thing that fails loudly. What I earned on August 3 is the second half — the probe, the sweep, and the stage that catches a fix that never left the machine it was written on. That last one is the piece I am proudest of, because it caught the public repository still serving broken hooks hours after both of my own machines were clean. My machines being fixed was never the point. The public copy is the product.

That is the part of designing in public nobody warns you about. Publishing an outcome is easy. What is hard is that for five weeks the information already existed. It was being written to a file, on a schedule, in my own home directory, and nothing put it in front of me. I was not missing data. I was missing display.

The same week gave me a smaller version of the same thing. On the 24th I flipped Sessions 4 and 5 to draft so they could be rewritten, and then never committed it — the flip lived in a working tree on one machine and nowhere else, so both entries stayed publicly live for another four days while I believed they were down. On the 28th it happened for real, and the backlog went out behind it: the widget cut and the security day, split out of an old entry that had been carrying both, then the dashboard week and the phone becoming a node. Nothing told me the entries were still up in the meantime, because nothing was watching.

## School, at zero

As I continue to retcon my way into present tense with my log entries, I am eventually catching up to the present. And presently, I am in the midst of school. This session also characterizes how I reentered into a period of intense learning — as a fully employed parent and part-time student.

[/coursework](/coursework) went live the same week: the whole program mapped out, 8 core concentrations across 38 courses and 58 weeks, plus a specialization period and a capstone, published at 0 of 10 complete.

I guess I could have uploaded the course schedule in PDF format, but it would not have fit well with my messaging. I uploaded the details of the schedule because they are fusing with who I am. I now have a whole page dedicated to my experience precisely because I want people to know how much this program means to me at this time, what I am working on, and what the outcomes are expected to be. The program is elevating my practice, but it is not happening overnight. The topics are scaffolded and the way they meet my present moment is constantly in flux. But instead of simply summarizing the journey in a year, I will live the experience like the other parts of my professionalism on display here.

Publishing a program at 0 of 10 complete is the same decision as publishing an [analytics page that reads zero](/log/session-10-starting-at-zero). The instrument goes up before the numbers do, because an instrument that only appears once the numbers flatter you is not an instrument. It is a press release.

Sometimes you do not know how you are failing, and you cannot fix it without more information. Sometimes the information has to be on display in real time, even when the outcomes are nowhere near clear, because the alternative is a system quietly producing evidence that nobody reads.

Designing in public is the exercise, and the outcomes are increasingly being discovered in real time.
