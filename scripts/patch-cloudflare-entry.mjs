// Post-build patch: expose the Cloudflare Worker's `env` (which contains secrets)
// to Astro route handlers via `locals.cfEnv`.
//
// Root cause: @astrojs/cloudflare v14 passes `env` to handle(request, env, context)
// but never forwards it into createLocals() or app.render(). The `cloudflare:workers`
// module-level env does NOT include secrets set via `wrangler secret put`.
//
// Fix: after `astro build`, find the one line where createLocals(context) is called
// and immediately follow it with `locals.cfEnv = env;`.

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const entryPath = resolve('dist/server/entry.mjs');

if (!existsSync(entryPath)) {
  console.log('patch-cloudflare-entry: no dist/server/entry.mjs (static-only build), skipping.');
  process.exit(0);
}

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

// Second patch: pin the SESSION KV binding to the account's existing namespace.
// The adapter emits {"binding":"SESSION"} with no id, which makes wrangler try
// to auto-provision "georgemitchellpayne-com-session" — and fail with code
// 10014 because that namespace already exists (created in the ask-widget era).
// Binding the known id skips provisioning entirely. Sessions are unused by the
// site; the binding just has to resolve.
const SESSION_KV_ID = '1f5cecf95ce143c2aa9c5e2ee2111f33';
const wranglerPath = resolve('dist/server/wrangler.json');

if (existsSync(wranglerPath)) {
  const config = JSON.parse(readFileSync(wranglerPath, 'utf8'));
  const session = (config.kv_namespaces ?? []).find((ns) => ns.binding === 'SESSION');
  let touched = false;
  if (session && !session.id) {
    session.id = SESSION_KV_ID;
    touched = true;
  }
  const preview = (config.previews?.kv_namespaces ?? []).find((ns) => ns.binding === 'SESSION');
  if (preview && !preview.id) {
    preview.id = SESSION_KV_ID;
    touched = true;
  }
  if (touched) {
    writeFileSync(wranglerPath, JSON.stringify(config), 'utf8');
    console.log('patch-cloudflare-entry: pinned SESSION KV binding to existing namespace');
  }
}
