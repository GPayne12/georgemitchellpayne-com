# Phase 1 Runbook — Scaffold & Design System (Astro)
### georgemitchellpayne.com rebuild · executable in Claude Code

**Stack (locked):** Astro + React islands · static output for Phase 1 (serverless deferred to Phase 4) · deploy to Vercel · public repo `GPayne12/georgemitchellpayne.com`.

**How to use this:** Each session below has a paste-ready prompt block — copy it into Claude Code as your opening message for that session. Run the sessions in order. Steps marked **[YOU]** need your credentials or a judgment call and aren't Claude Code's to do. Steps marked **[CC]** are Claude Code's. Each session ends with done-criteria; don't advance until they pass. Nothing here depends on finished case studies — this is all executable now.

**Prerequisites (check once before Session 1):**
- Node 20+ (`node -v`)
- Git installed and your GitHub auth working (`gh auth status` or SSH key set)
- A Vercel account (free tier is fine)
- Your hooks repo URL handy: `github.com/GPayne12/security-hooks-setup`
- The locked positioning text (from WS1) in reach — you'll paste it in Session 4

**The hard secrets rule (applies to every session):** no API keys in the repo, ever. `.env` is gitignored from commit #1. The security hooks enforce this; the colophon will later document that they do.

---

## Session 1 — Repo & scaffold *(today's work)*

**Goal:** a running Astro starter, public on GitHub with security hooks active, deployed to a Vercel preview URL. First commit = build-log entry #1.

**Paste this into Claude Code:**

```
I'm scaffolding a personal portfolio site. Stack: Astro with React islands, 
static output for now, deploying to Vercel. This repo will be public and is 
itself a work sample, so commit hygiene matters — use conventional commits.

Do the following, pausing for me where my credentials are needed:

1. Confirm Node is 20+. If not, stop and tell me.
2. Scaffold a new Astro project in the current directory using the minimal/basics 
   template, TypeScript strict.
3. Add the React integration (astro add react).
4. Keep static output for now — do NOT add an SSR adapter yet (serverless comes 
   in a later phase).
5. Create a .gitignore that excludes node_modules, .env, .env.*, dist, and 
   .vercel. Confirm .env is ignored before any commit.
6. Verify the dev server runs (astro dev) and the build succeeds (astro build).
7. Initialize git. Stage everything, then STOP and show me the diff before the 
   first commit.

After I approve, make the first commit with a conventional-commit message, then 
give me the exact commands to (a) create the public GitHub repo 
GPayne12/georgemitchellpayne.com and push, and (b) import it into Vercel for a 
preview deploy. I'll run the credentialed steps myself.
```

**[CC]** scaffolds, verifies dev + build, stages, shows diff.
**[YOU]** approve the diff → create the public repo and push → import to Vercel.

**Then install the security hooks — paste this:**

```
Read the README at https://github.com/GPayne12/security-hooks-setup and install 
those pre-commit/pre-push hooks into THIS repo exactly as documented. After 
install, deliberately stage a dummy file containing a fake secret to confirm the 
secret-detection hook blocks the commit, then remove it. Report what each hook 
checks.
```

**Expected tree after Session 1:**
```
georgemitchellpayne.com/
├── .github/ (if hooks use it)
├── .husky/ or .git/hooks/   ← security hooks installed
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── .gitignore               ← .env excluded
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

**Done-criteria:**
- [ ] `astro build` succeeds with no errors
- [ ] Repo is **public** at GPayne12/georgemitchellpayne.com
- [ ] Security hooks installed; the fake-secret commit was blocked in testing
- [ ] Vercel preview URL resolves to the starter
- [ ] First commit exists with a conventional-commit message

**Build-log capture:** the moment this is live, the rebuild has started in public. Note the preview URL and 2–3 sentences on why you killed Squarespace — that's entry #1, drafted later but captured now.

---

## Session 2 — Design tokens & base layout

**Goal:** the visual system and the shell every page inherits, accessible from the start.

**Paste this into Claude Code:**

```
Set up the design system for this Astro site. This is a reading-heavy portfolio 
for a "learning engineer" — calm, editorial, with one signature element: a 
utility/monospace "telemetry" voice used for anything live or measured (later: 
commit data, counters, "now building" status). Aesthetic direction: "field 
notebook meets telemetry." Avoid generic AI-template defaults.

1. Create a tokens layer (CSS custom properties in a global stylesheet): color 
   palette (calm base, one restrained accent), a type scale, spacing scale, and 
   three font roles — display (sparingly, for positioning lines), body (high-
   legibility, for long-form), and mono (the telemetry voice). Pick web-safe or 
   well-hosted fonts; document the choices in a comment block.
2. Build src/layouts/Layout.astro with: semantic landmarks, a real heading 
   hierarchy, skip-to-content link, a nav and footer. Nav items: Home, Builds, 
   Log, Practice, About (stub the routes).
3. Bake accessibility in now: visible :focus-visible states, prefers-reduced-
   motion handling, sufficient contrast (WCAG 2.2 AA), and a sensible base 
   font-size/line-height for reading.
4. Keep JavaScript at zero for this layer — tokens and layout are pure HTML/CSS.

Show me the palette and type choices rendered on a sample page before finalizing.
```

**Done-criteria:**
- [ ] Tokens defined as CSS custom properties, documented
- [ ] `Layout.astro` renders nav + footer, responsive at mobile and desktop widths
- [ ] Skip link, focus states, and reduced-motion handling present
- [ ] An automated AA contrast check passes (ask CC to run/scriptone)
- [ ] Still zero JS shipped on the base layout

---

## Session 3 — Content-collection schemas

**Goal:** your Phase 0 case skeleton becomes typed, validated content collections. This is the structural core — get the schema right and every case/build/log entry just fills it.

**Paste this into Claude Code:**

```
Define Astro content collections for three types, using the content collections 
API for the installed Astro version (check the version and use the current 
Content Layer / glob loader pattern; don't use a deprecated config shape). Put 
the schema in the correct config file for this version. Use Zod for validation.

Collection: cases
  - title: string
  - slug: string
  - order: number
  - domains: array of enum ["learning-design","engineering","leadership"]
  - tier: enum ["flagship","supporting"]
  - center: boolean (default false)  // sits at the Venn center
  - status: enum ["complete","in-progress"] (default "in-progress")
  - situation, constraint, decision, artifact, measuredOutcome, 
    engineeringTranslation: each a string (Markdown allowed)

Collection: builds
  - title, slug: string
  - order: number
  - repo: string (URL), demo: string (URL, optional)
  - stack: array of string
  - status: enum ["live","in-progress"]
  - summary: string
  - decisionLog: string (Markdown)

Collection: log
  - title: string
  - date: date
  - order: number
  - tags: array of string
  - draft: boolean (default false)
  - body: MDX content
  - (frontmatter for curriculum structure: objective, activity, assessment — 
    each string, optional)

Then create ONE sample entry per collection (clearly marked sample/placeholder, 
status in-progress) and a minimal page that queries the cases collection and 
lists titles, to prove the pipeline renders. Add MDX support if needed for the 
log collection.
```

**[YOU]** note: the `cases` fields mirror your worksheet exactly — domains, tier, situation→engineeringTranslation. Your Phase 0 content ports straight in; nothing is reinvented.

**Done-criteria:**
- [ ] Three collections defined with Zod schemas, validating on build
- [ ] One sample entry per collection renders without type errors
- [ ] A test page lists cases from the collection
- [ ] MDX renders for the log collection
- [ ] `astro build` still green

---

## Session 4 — Home & /about *(Phase 1 finish line)*

**Goal:** a deployed preview showing Home + About with your **locked positioning** — the first real, public face of the site.

**Paste this into Claude Code** (replace the bracketed blocks with your WS1 text first):

```
Build the homepage and /about using the design system and layout already in place.

HOMEPAGE (src/pages/index.astro):
- Lead with the primary positioning statement as the hero. Use the display font 
  for the opening line "I'm a learning engineer." Here is the locked text:
  [PASTE PRIMARY STATEMENT FROM WS1 1b]
- Two clear "doors" below the hero — one toward Builds (for AI-engineering 
  reviewers), one toward Practice (for L&D leadership). Short framing line each, 
  drawn from:
  [PASTE THE TWO AUDIENCE FRAMINGS FROM WS1 1b]
- A placeholder "now building" strip in the mono/telemetry voice (static text for 
  now; real GitHub data comes in Phase 2). Label it clearly as a placeholder in a 
  code comment.

ABOUT (src/pages/about.astro):
- The bridge narrative, then a CONDENSED experience timeline (one line per role; 
  collapse anything pre-2016 to a single "earlier" line). Keep it prose-forward, 
  minimal bullets.
- Add GitHub (GPayne12) and LinkedIn links in the header/footer.

Constraints: zero JS unless a piece genuinely needs it; maintain AA; real heading 
hierarchy; run Lighthouse and report scores. Then build and show me the preview.
```

**[YOU]** paste your WS1 primary statement and the two framings into the brackets before sending.

**Done-criteria (this is the Phase 1 gate):**
- [ ] Preview URL renders Home + About with final locked copy
- [ ] Responsive at mobile + desktop
- [ ] Lighthouse ≥95 across categories (target 100 on the static pages)
- [ ] WCAG 2.2 AA check passes
- [ ] Repo public, security hooks running, `.env` never committed
- [ ] Meta title set to "Learning Engineer" (the description stays TODO until Phase 5)

---

## After Phase 1

When the gate passes, you have a live, public, fast, accessible two-page site with your real positioning — and a repo whose commit history is itself portfolio material. That unblocks Phase 2 (builds + GitHub telemetry) and Phase 3 (the log and the Venn).

**Today's realistic stopping point:** Session 1 complete (live preview + public repo + hooks), and a start on Session 2. That alone is visible, real progress — and build-log entry #1.

**A note on the runbook itself:** if Claude Code hits an Astro API that differs from what's described here (the framework moves fast), let it use the installed version's current docs — the schema *intent* above is what matters, not exact syntax. Tell it to confirm the version first and adapt.
