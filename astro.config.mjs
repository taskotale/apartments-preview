// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// One codebase, two sites. APT_SITE picks which one this build produces:
//   APT_SITE=mare  -> https://mareemonti.me
//   APT_SITE=dolce -> https://dolcedimora.me
// Cloudflare Pages runs one project per site, each with its own build command.
const SITE_URLS = {
  mare: 'https://mareemonti.me',
  dolce: 'https://dolcedimora.me',
};
const which = process.env.APT_SITE === 'dolce' ? 'dolce' : 'mare';

export default defineConfig({
  site: SITE_URLS[which],
  // BASE_PATH is only set by the temporary GitHub Pages preview build.
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
});
