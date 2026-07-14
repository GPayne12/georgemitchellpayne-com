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
    excerpt: z.string().optional(),
  }),
});

export const collections = { cases, builds, log };
