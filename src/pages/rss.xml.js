import rss from '@astrojs/rss';
import { getEntry } from 'astro:content';
import { getArticles, articleHref } from '../lib';

export async function GET(context) {
  const settings = (await getEntry('settings', 'site')).data;
  const articles = await getArticles();
  return rss({
    title: settings.name,
    description: settings.tagline,
    site: context.site,
    items: articles.map((a) => ({ title: a.data.title, pubDate: a.data.date, link: articleHref(a) })),
  });
}
