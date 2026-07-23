# Two apartment sites — Bar, Montenegro

One codebase, two static sites:

| Site | Domain | Build |
|---|---|---|
| Mare e Monti | https://mareemonti.me | `APT_SITE=mare npx astro build` |
| Dolce dimora | https://dolcedimora.me | `APT_SITE=dolce npx astro build` |

No CMS, no database, no server — just static HTML/CSS/images on a CDN.

## Editing the sites

Almost everything a normal update touches lives in **one file**: [`src/data/sites.ts`](src/data/sites.ts).
It has a `mare` and a `dolce` object with the text, amenities, gallery captions,
area info, house rules and contact details. Change a value, commit, done —
the site rebuilds and is live in about a minute.

Photos live in `src/assets/photos/mare/` and `src/assets/photos/dolce/`.
To swap one: drop the new `.jpg` in the folder and reference its filename in
the `gallery` / `heroFile` / `aptPhotos` fields of `sites.ts`.

You can edit `sites.ts` straight from github.com (open the file → pencil icon →
edit → "Commit changes"). No tools to install.

## Running it locally

```bash
npm install
APT_SITE=mare npm run dev     # or APT_SITE=dolce
```

## Deployment

Each site is a **Cloudflare Pages** project connected to this repo:

- Build command: `npx astro build`
- Output directory: `dist`
- Environment variable: `APT_SITE` = `mare` or `dolce`
- Node: pinned to 22 via `.nvmrc`

Pushing to `main` redeploys both. Domains are registered at Cloudflare, so DNS
is attached automatically.
