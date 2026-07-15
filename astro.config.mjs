// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// Only attach the Cloudflare adapter during production builds.
// In dev, workerd (the Cloudflare Workers runtime emulator) lacks `process`
// and breaks Astro's logger, causing 500s on every route.
const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.georgemitchellpayne.com',
  output: 'static',
  adapter: isProd ? cloudflare() : undefined,
  integrations: [react(), mdx()],
});
