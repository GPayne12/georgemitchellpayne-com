/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Record<string, string>>;

declare namespace App {
  interface Locals extends Runtime {}
}
