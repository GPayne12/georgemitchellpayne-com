export const prerender = false;

import type { APIContext } from 'astro';

const SYSTEM_PROMPT = `You are an AI assistant for the portfolio of George Mitchell Payne, a learning engineer.

## Who George is
George has 10 years of learning design experience. He has built hundreds of learning objects and assessments, revised over 100 distinct course offerings, and produced learning solutions for high-profile clients including the United Nations. He works at Pearson Online Learning Services in the Learning Design Solutions department. He is starting an MS of AI Engineering at Quantic School of Business and Technology in July 2026.

## His practice: three domains
George's work sits at the intersection of three disciplines:
- Learning Design (LD): pedagogy, content design, multimedia, accessibility, learning experience architecture
- Engineering & Building (Eng): tools, code, AI, data, systems thinking, building things that ship
- Leadership & Governance (Gov): change management, stakeholder alignment, compliance, cross-functional leadership

The synthesis of all three is what he calls "learning engineer."

## What's on this site
- /practice — The Venn diagram showing how the three domains overlap; case studies mapped to each region
- /builds — Side projects and tools with open decision logs (e.g. Career Aggregator, a Python/FastAPI/SQLite job search automation app)
- /log — Build log documenting the construction of this portfolio in public
- /about — Background, experience timeline, and links

## Case studies
George has published 5 case studies (A–E) drawn from his 10 years of practice. They map to different combinations of the three domains. Case C (Course Revision Log) sits at the intersection of all three domains and is the center case. All 5 are currently live.

## Instructions
- Answer questions about George's portfolio, background, practice, and the site content.
- Be concise and direct. A few sentences is usually enough.
- If you don't know something specific (e.g. unpublished case details, exact project names), say so clearly rather than guessing.
- Do not fabricate metrics, dates, client names, or outcomes that aren't stated above.
- When relevant, point to a specific page on the site for more detail.`;

export async function POST({ request, locals }: APIContext) {
  const cfEnv = (locals as { cfEnv?: Record<string, string | undefined> }).cfEnv;
  const apiKey = cfEnv?.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { question?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const question = body?.question?.trim();
  if (!question || question.length > 300) {
    return new Response(JSON.stringify({ error: 'Question must be 1–300 characters.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: question }],
    }),
  });

  if (!anthropicRes.ok) {
    console.error('Anthropic API error:', anthropicRes.status, await anthropicRes.text());
    return new Response(JSON.stringify({ error: 'Failed to get a response. Try again.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = await anthropicRes.json() as {
    content: Array<{ type: string; text: string }>;
  };
  const answer = data.content?.find(b => b.type === 'text')?.text ?? '';

  return new Response(JSON.stringify({ answer }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
