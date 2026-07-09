import { getCollection } from 'astro:content';

export type NewsEntry = {
  slug: string;
  data: {
    title: string;
    date: Date;
    link?: string;
  };
  summary: string;
};

function stripMarkdown(value: string) {
  return value
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[>*_`#~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function sortNews(entries: NewsEntry[]) {
  return [...entries].sort((left, right) => {
    const delta = right.data.date.getTime() - left.data.date.getTime();
    if (delta !== 0) {
      return delta;
    }

    return left.data.title.localeCompare(right.data.title);
  });
}

export async function loadNews() {
  const entries = await getCollection('news');
  return sortNews(
    entries.map((entry) => ({
      slug: entry.slug,
      data: {
        title: entry.data.title,
        date: entry.data.date,
        link: entry.data.link
      },
      summary: stripMarkdown(entry.body)
    }))
  );
}

export async function loadLatestNews(limit = 4) {
  return (await loadNews()).slice(0, limit);
}
