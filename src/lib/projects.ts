import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import matter from 'gray-matter';

export type ProjectEntry = {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
    status: 'current' | 'archive';
    tags: string[];
  };
};

function parseProject(fileName: string) {
  const projectsDir = join(process.cwd(), 'src', 'pages', 'projects');
  const source = readFileSync(join(projectsDir, fileName), 'utf-8');
  const { data } = matter(source);
  const slug = fileName.replace(/\.md$/i, '');

  return {
    slug,
    data: {
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      date: String(data.date ?? '1970-01-01'),
      status: data.status === 'archive' ? 'archive' : 'current',
      tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : []
    }
  } satisfies ProjectEntry;
}

export function loadProjects() {
  const projectsDir = join(process.cwd(), 'src', 'pages', 'projects');
  return readdirSync(projectsDir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(parseProject);
}

export function sortProjects(entries: ProjectEntry[]) {
  return [...entries].sort((left, right) => {
    const timeDifference = new Date(right.data.date).getTime() - new Date(left.data.date).getTime();
    if (timeDifference !== 0) {
      return timeDifference;
    }

    return left.data.title.localeCompare(right.data.title);
  });
}

export function splitProjects(entries: ProjectEntry[]) {
  return {
    current: sortProjects(entries.filter((entry) => entry.data.status === 'current')),
    archive: sortProjects(entries.filter((entry) => entry.data.status === 'archive'))
  };
}

export function collectProjectTags(entries: ProjectEntry[]) {
  return Array.from(new Set(entries.flatMap((entry) => entry.data.tags))).sort((left, right) =>
    left.localeCompare(right)
  );
}
