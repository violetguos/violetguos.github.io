import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles: the only content with required fields, because the home page sorts them by date.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    evergreen: z.boolean().default(false),
    link: z.string().url().optional(), // set when the piece lives elsewhere
    series: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// About (shown on the home page), Recommendations and Links: one free-form Markdown file each.
const pages = defineCollection({
  loader: glob({ pattern: '{about,recommendations,links}.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updated: z.coerce.date().optional(),
  }),
});

// Site-wide facts in one place.
const settings = defineCollection({
  loader: file('./src/settings.yaml'),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    nav: z.array(z.object({ label: z.string(), href: z.string() })),
    social: z.array(z.object({ label: z.string(), href: z.string(), icon: z.enum(['rss', 'mail', 'link']) })).default([]),
    footerLinks: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    buttondownUsername: z.string().optional(),
  }),
});

export const collections = { writing, pages, settings };
