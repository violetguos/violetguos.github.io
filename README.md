# Personal site

A minimal, static personal site built with [Astro](https://astro.build). Four pages: Home (your About text, plus a writing list once you publish articles), Projects (one tile per project), Recommendations and Links. Every word lives in Markdown; the look lives in `src/styles/tokens.css`.

To edit content, read [EDITING.md](EDITING.md). This file is for setup and upkeep.

## Layout

| Folder or file | What it holds | Who touches it |
| --- | --- | --- |
| `src/content/writing/` | One `.md` file per article | You, often |
| `src/content/*.md` | About (shown as the home page), Projects, Recommendations, Links | You |
| `src/settings.yaml` | Name, tagline, nav, footer links, email username | You, rarely |
| `public/art/` | Margin art SVGs | You, rarely |
| `src/styles/tokens.css` | Colors, fonts, spacing (light and dark) | Only to change the look |
| `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/site.css` | The templates | Almost never |
| `.pages.yml` | Pages CMS setup | Only when adding a field |

## Run it on your laptop

You need Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

The site opens at http://localhost:4321 and reloads as you save. Search works only after a full build:

```bash
npm run build && npm run preview
```

## Publish on GitHub Pages (once)

1. Create a public repository named exactly `yourname.github.io` (your GitHub username) and push this folder to it.
2. In `astro.config.mjs` and `public/robots.txt`, replace `yourname.github.io` with your address.
3. In the repository, open Settings, then Pages, and set Source to **GitHub Actions**.
4. Push to `master`. The site is live a minute or two later. Every later push republishes it.

## Add a domain later

1. Buy the domain from any registrar and point its DNS at GitHub Pages (GitHub's Pages docs list the records).
2. Add `public/CNAME` containing only the domain, for example `example.com`.
3. Change `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the domain.

## Turn on the email form

Create a free Buttondown account, then put your Buttondown username in `src/settings.yaml` under `buttondownUsername`. The form appears in the footer and at the end of each article.

## Upkeep

- Dependencies are pinned to exact versions (no `^`) and the lockfile is committed, so a build years from now installs the same code.
- `astro` is pinned to 7.3.8 on purpose: it was the newest release that had been out for two weeks when the site was set up.
- Once a year: update the four packages and the GitHub Action versions, run `npm run build`, click through every page, and fix anything the monthly link check reported.

## Fonts

Source Serif 4 and Dancing Script are self-hosted in `public/fonts/` under the SIL Open Font License (license files alongside).
