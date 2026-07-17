import type { APIRoute } from 'astro';

// Read side of the xAPI pipeline: queries the LRS with server-side credentials,
// aggregates, and returns plain JSON for the /analytics page. Responses are
// cached ~10 minutes (edge Cache API when available) so the LRS isn't hit per
// pageview — the /analytics page discloses the cache window.
export const prerender = false;

const SITE = 'https://www.georgemitchellpayne.com';
const CACHE_TTL = 600;
const MAX_PAGES = 8; // paging cap: at most ~2000 statements per aggregation

type Statement = {
  timestamp: string;
  object?: { objectType?: string; id?: string };
};

function aggregate(statements: Statement[]) {
  const byPage = new Map<string, number>();
  const byDay = new Map<string, number>();
  let first: string | null = null;
  let total = 0;

  for (const s of statements) {
    // Count only page-view activities on this site — excludes voiding
    // statements (StatementRef objects) and anything else in the store.
    const id = s.object?.id ?? '';
    if (s.object?.objectType !== 'Activity' || !id.startsWith(SITE)) continue;
    total++;
    const page = id.replace(SITE, '') || '/';
    byPage.set(page, (byPage.get(page) ?? 0) + 1);
    const day = s.timestamp?.slice(0, 10);
    if (day) byDay.set(day, (byDay.get(day) ?? 0) + 1);
    if (s.timestamp && (!first || s.timestamp < first)) first = s.timestamp;
  }

  const weekAgo = new Date(Date.now() - 7 * 86_400_000).toISOString().slice(0, 10);
  const last7 = [...byDay.entries()].filter(([d]) => d >= weekAgo).reduce((n, [, c]) => n + c, 0);

  return {
    provisioned: true,
    total,
    capped: statements.length >= MAX_PAGES * 250,
    firstStatement: first,
    last7,
    byPage: [...byPage.entries()].map(([page, count]) => ({ page, count })).sort((a, b) => b.count - a.count),
    byDay: [...byDay.entries()].map(([date, count]) => ({ date, count })).sort((a, b) => (a.date < b.date ? -1 : 1)),
  };
}

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.cfEnv ?? {};
  const endpoint = env.LRS_ENDPOINT ?? import.meta.env.LRS_ENDPOINT;
  const key = env.LRS_KEY ?? import.meta.env.LRS_KEY;
  const secret = env.LRS_SECRET ?? import.meta.env.LRS_SECRET;

  const json = (body: object, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': `public, max-age=${CACHE_TTL}` },
    });

  if (!endpoint || !key || !secret) return json({ provisioned: false });

  // Edge cache (workerd only; absent in dev — guard and skip).
  const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default;
  const cacheKey = new Request(new URL('/api/analytics', request.url).toString());
  if (cache) {
    const hit = await cache.match(cacheKey).catch(() => undefined);
    if (hit) return hit;
  }

  const headers = {
    'X-Experience-API-Version': '1.0.3',
    Authorization: `Basic ${btoa(`${key}:${secret}`)}`,
  };

  const statements: Statement[] = [];
  try {
    const base = endpoint.replace(/\/$/, '');
    let url: string | null = `${base}/statements?limit=250`;
    for (let i = 0; i < MAX_PAGES && url; i++) {
      const res: globalThis.Response = await fetch(url, { headers });
      if (!res.ok) throw new Error(`lrs ${res.status}`);
      const data: { statements?: Statement[]; more?: string } = await res.json();
      statements.push(...(data.statements ?? []));
      url = data.more ? new URL(data.more, base).toString() : null;
    }
  } catch {
    return json({ provisioned: true, error: 'lrs unreachable' }, 502);
  }

  const response = json(aggregate(statements));
  if (cache) await cache.put(cacheKey, response.clone()).catch(() => {});
  return response;
};
