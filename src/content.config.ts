import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    domains: z.array(z.enum(['learning-design', 'engineering', 'leadership'])),
    tier: z.enum(['flagship', 'supporting']),
    center: z.boolean().default(false),
    status: z.enum(['complete', 'in-progress']).default('in-progress'),
    timeline: z.string().optional(),
    situation: z.string(),
    constraint: z.string(),
    decision: z.string(),
    artifact: z.string(),
    /** Optional line rendered under the artifact diagram — scope or provenance note. */
    artifactNote: z.string().optional(),
    measuredOutcome: z.string(),
    engineeringTranslation: z.string(),
  }),
});

const builds = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    repo: z.string().url(),
    demo: z.string().url().optional(),
    stack: z.array(z.string()),
    status: z.enum(['live', 'in-progress']),
    summary: z.string(),
    decisionLog: z.string(),
    whatBroke: z.string().optional(),
  }),
});

const log = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    order: z.number(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    objective: z.string().optional(),
    activity: z.string().optional(),
    assessment: z.string().optional(),
    cardAssessment: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

/**
 * One file per course in the *full* curriculum — including courses not yet
 * started. Status drives everything the page renders: only `complete` courses
 * get a badge, a reflection, and a detail page.
 */
const coursework = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/coursework' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        slug: z.string(),
        /** Catalog code, e.g. "EDUC 601". Shown in mono as the row's anchor. */
        code: z.string(),
        /** Sort order within the group. */
        order: z.number(),
        /** Curriculum section: "Core", "Year 1 — Fall", "Specialization"… */
        group: z.string(),
        /** Sort order of the group itself. Same value on every course in it. */
        groupOrder: z.number().default(0),
        credits: z.number().optional(),
        status: z.enum(['complete', 'in-progress', 'planned']).default('planned'),
        /** "Spring 2026" — the term taken, or the term it is slotted for. */
        term: z.string().optional(),
        completedOn: z.coerce.date().optional(),
        /** Badge art in src/assets/coursework/. Completed courses only. */
        badge: image().optional(),
        /** Describe what the badge depicts; leave unset to mark it decorative. */
        badgeAlt: z.string().optional(),
        /** Issuer verification link (Credly, registrar, etc.). */
        verifyUrl: z.string().url().optional(),
        /** Catalog-style one-liner. Shown for every course, any status. */
        summary: z.string(),
        /** The courses inside this concentration, in schedule order. */
        courses: z.array(z.string()).default([]),
        /** How the course is assessed — "Exam + project", etc. */
        assessment: z.string().optional(),
        /** The few words on finishing it. Required once status is complete. */
        reflection: z.string().optional(),
        skills: z.array(z.string()).default([]),
      })
      .refine(c => c.status !== 'complete' || Boolean(c.reflection), {
        message:
          'A completed course needs a `reflection` — a few words on what it was actually worth.',
        path: ['reflection'],
      }),
});

export const collections = { cases, builds, log, coursework };
