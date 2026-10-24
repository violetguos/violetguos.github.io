// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your GitHub Pages address now, and to your own domain once you buy one.
export default defineConfig({
  site: 'https://violetguos.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
  // About is the home page now; old /about/ links land there.
  redirects: { '/about': '/' },
});
