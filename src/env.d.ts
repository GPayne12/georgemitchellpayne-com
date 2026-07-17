/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Record<string, string>>;

declare namespace App {
  interface Locals extends Runtime {
    // Worker secrets surfaced by scripts/patch-cloudflare-entry.mjs
    cfEnv?: {
      LRS_ENDPOINT?: string;
      LRS_KEY?: string;
      LRS_SECRET?: string;
    };
  }
}
