import type { APIRoute } from 'astro';

// xAPI write proxy — the site's first (and only) server endpoint, revived by
// handoff item 11 (George approved 2026-07-17). The browser sends a minimal
// {page, session} beacon; the statement is constructed HERE so clients can
// never forge arbitrary xAPI data. LRS credentials stay server-side.
export const prerender = false;

const SITE = 'https://www.georgemitchellpayne.com';
const PAGE_RE = /^\/([a-z0-9-]+\/?){0,4}$/;
const SESSION_RE = /^[a-f0-9]{16}$/;

// Per-IP rate limit, in-isolate. Resets when the isolate recycles — good
// enough to blunt casual flooding; the /analytics page discloses the limit.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.cfEnv ?? {};
  const endpoint = env.LRS_ENDPOINT ?? import.meta.env.LRS_ENDPOINT;
  const key = env.LRS_KEY ?? import.meta.env.LRS_KEY;
  const secret = env.LRS_SECRET ?? import.meta.env.LRS_SECRET;

  if (!endpoint || !key || !secret) {
    return new Response(JSON.stringify({ error: 'pipeline not provisioned' }), { status: 503 });
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  if (rateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'rate limited' }), { status: 429 });
  }

  let page: string, session: string;
  try {
    const body = await request.json();
    page = body.page;
    session = body.session;
  } catch {
    return new Response(JSON.stringify({ error: 'bad request' }), { status: 400 });
  }
  if (typeof page !== 'string' || !PAGE_RE.test(page) || typeof session !== 'string' || !SESSION_RE.test(session)) {
    return new Response(JSON.stringify({ error: 'bad request' }), { status: 400 });
  }

  const statement = {
    actor: {
      objectType: 'Agent',
      account: { homePage: SITE, name: `visitor-${session}` },
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/experienced',
      display: { 'en-US': 'experienced' },
    },
    object: {
      objectType: 'Activity',
      id: `${SITE}${page === '/' ? '/' : page.replace(/\/$/, '')}`,
      definition: { type: 'http://activitystrea.ms/schema/1.0/page' },
    },
    timestamp: new Date().toISOString(),
  };

  const res = await fetch(`${endpoint.replace(/\/$/, '')}/statements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Experience-API-Version': '1.0.3',
      Authorization: `Basic ${btoa(`${key}:${secret}`)}`,
    },
    body: JSON.stringify(statement),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'lrs rejected statement' }), { status: 502 });
  }
  return new Response(null, { status: 202 });
};
