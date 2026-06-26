// Post-build patch: expose the Cloudflare Worker's `env` (which contains secrets)
// to Astro route handlers via `locals.cfEnv`.
//
// Root cause: @astrojs/cloudflare v14 passes `env` to handle(request, env, context)
// but never forwards it into createLocals() or app.render(). The `cloudflare:workers`
// module-level env does NOT include secrets set via `wrangler secret put`.
//
// Fix: after `astro build`, find the one line where createLocals(context) is called
// and immediately follow it with `locals.cfEnv = env;`.

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const entryPath = resolve('dist/server/entry.mjs');
let src = readFileSync(entryPath, 'utf8');

const NEEDLE = 'const locals = createLocals(context);';
const PATCH  = 'const locals = createLocals(context);\n\tlocals.cfEnv = env;';

if (src.includes(PATCH)) {
  console.log('patch-cloudflare-entry: already patched, skipping.');
  process.exit(0);
}

if (!src.includes(NEEDLE)) {
  console.error('patch-cloudflare-entry: could not find patch target in entry.mjs');
  process.exit(1);
}

writeFileSync(entryPath, src.replace(NEEDLE, PATCH), 'utf8');
console.log('patch-cloudflare-entry: injected locals.cfEnv = env into entry.mjs');
