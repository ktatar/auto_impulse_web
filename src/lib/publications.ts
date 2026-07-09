import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import bibtexParse from 'bibtex-parse-js';

export type Publication = {
  key: string;
  group: string;
  type: string;
  title: string;
  authors: string[];
  year: number | null;
  venue: string;
  url: string;
  note: string;
};

const groupLabels: Record<string, string> = {
  journal: 'Journal Publications',
  conference: 'Conference Publications',
  manuscript: 'Manuscript Publications',
  book: 'Book Chapters',
  thesis: 'Thesis',
  misc: 'Other Publications'
};

function stripBraces(value: string) {
  return value.replace(/[{}]/g, '').trim();
}

function firstDefined(values: Array<string | undefined>) {
  return values.find((value) => Boolean(value && value.trim()))?.trim() ?? '';
}

function parseAuthors(value: string) {
  if (!value) {
    return [];
  }

  return value
    .split(/\s+and\s+/i)
    .map((author) => stripBraces(author))
    .filter(Boolean);
}

function formatVenue(tags: Record<string, string>) {
  return firstDefined([tags.journal, tags.booktitle, tags.publisher, tags.school, tags.organization, tags.note]);
}

function normalizeGroup(tags: Record<string, string>, type: string) {
  const rawGroup = firstDefined([tags.group, tags.category, tags.section]).toLowerCase();
  if (rawGroup) {
    return rawGroup;
  }

  if (type === 'article') {
    return 'journal';
  }

  if (type === 'inproceedings' || type === 'conference') {
    return 'conference';
  }

  if (type === 'phdthesis' || type === 'mastersthesis') {
    return 'thesis';
  }

  return 'misc';
}

export function loadPublications() {
  const bibPath = join(process.cwd(), 'src', 'data', 'publications.bib');
  const source = readFileSync(bibPath, 'utf-8');
  const entries = bibtexParse.toJSON(source) as Array<{
    citationKey: string;
    entryType: string;
    entryTags: Record<string, string>;
  }>;

  const publications = entries.map((entry) => {
    const tags = Object.fromEntries(
      Object.entries(entry.entryTags).map(([key, value]) => [key.toLowerCase(), value])
    );
    const year = Number.parseInt(firstDefined([tags.year]), 10);

    return {
      key: entry.citationKey,
      group: normalizeGroup(tags, entry.entryType.toLowerCase()),
      type: entry.entryType.toLowerCase(),
      title: stripBraces(firstDefined([tags.title])),
      authors: parseAuthors(firstDefined([tags.author, tags.editor])),
      year: Number.isFinite(year) ? year : null,
      venue: formatVenue(tags),
      url: firstDefined([tags.url, tags.doi ? `https://doi.org/${stripBraces(tags.doi)}` : '']),
      note: firstDefined([tags.note])
    } satisfies Publication;
  });

  return publications.sort((left, right) => {
    const leftYear = left.year ?? 0;
    const rightYear = right.year ?? 0;
    if (rightYear !== leftYear) {
      return rightYear - leftYear;
    }

    return left.title.localeCompare(right.title);
  });
}

export function groupPublications(publications: Publication[]) {
  const grouped = new Map<string, Publication[]>();

  for (const publication of publications) {
    const items = grouped.get(publication.group) ?? [];
    items.push(publication);
    grouped.set(publication.group, items);
  }

  return Array.from(grouped.entries())
    .map(([group, items]) => ({
      group,
      label: groupLabels[group] ?? `${group.charAt(0).toUpperCase()}${group.slice(1)} Publications`,
      items
    }))
    .sort((left, right) => {
      const order = ['journal', 'conference', 'manuscript', 'book', 'thesis', 'misc'];
      return order.indexOf(left.group) - order.indexOf(right.group);
    });
}

export function formatPublicationCitation(publication: Publication) {
  const authorText = publication.authors.join(', ');
  const yearText = publication.year ? `(${publication.year})` : '';
  const venueText = publication.venue ? ` ${publication.venue}.` : '';
  const noteText = publication.note ? ` ${publication.note}.` : '';
  return `${authorText} ${yearText}. ${publication.title}.${venueText}${noteText}`.replace(/\s+/g, ' ').trim();
}
