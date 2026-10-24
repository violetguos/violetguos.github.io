# Editing the site

You can change everything people read without touching any code. Pick whichever way suits the moment.

## 1. In the browser with Pages CMS (easiest, works on a phone)

1. Go to https://pagescms.org and sign in with GitHub.
2. Open this repository.
3. Choose **Writing** to add or edit an article, or **About (home page)**, **Recommendations** or **Links** to edit a page.
4. Press **Save**. That saves to GitHub, and the live site updates a minute or two later.

## 2. On github.com (good for a one-word fix)

Open the file on github.com, press the pencil icon, edit, then **Commit changes**.

## 3. On your laptop (for bigger changes)

Open the folder in VS Code or Obsidian, run `npm run dev` to preview at http://localhost:4321, then commit and push.

## Where things live

| To change | Edit |
| --- | --- |
| An article | `src/content/writing/<name>.md` |
| A new article | Add a new `.md` file in `src/content/writing/` |
| The home page (your bio and CV) | `src/content/about.md` |
| Recommendations | `src/content/recommendations.md` |
| Your Linktree page | `src/content/links.md` |
| Your name, tagline, nav or footer links | `src/settings.yaml` |

## Article basics

Every article starts with a few lines between `---` marks, then plain Markdown:

```markdown
---
title: Folate, choline and the first trimester
date: 2026-11-02
updated: 2027-01-15
evergreen: true
---

Your text starts here.
```

- `title` and `date` are required. If one is missing, the site will not publish and the build log says which file.
- The file name becomes the address: `folate-first-trimester.md` is published at `/folate-first-trimester/`. Choose it once and do not rename it, so links keep working.
- Optional: `updated` (date you revised it), `evergreen: true`, `series: Name`, `draft: true` (hidden), and `link:` with a URL when the piece is published somewhere else.

## Other pages

About, Recommendations and Links are each one free-form Markdown file. Use `##` headings for sections and write as much as you like.

## If something goes wrong

Open the repository's **Actions** tab. A red run shows which file broke the build and why. The previous version of the site stays live until you fix it.
