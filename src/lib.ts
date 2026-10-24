import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'writing'>;

/** Published articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('writing', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Where an article's title links: its own page, or wherever it lives. */
export const articleHref = (a: Article) => a.data.link ?? `/${a.id}/`;
