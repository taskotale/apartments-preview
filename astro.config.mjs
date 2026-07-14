// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH is set only by the GitHub Pages preview deploy (e.g. "/apartments-preview").
// Local dev and the final Cloudflare Pages hosting serve from "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
});
