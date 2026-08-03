# auto_impulse

Astro remake of kivanctatar.com with Markdown-based content, a BibTeX-backed publications page, and a tagged projects archive.

## Development

```bash
npm install
npm run dev
```

## Podman development container

Use the included container files to run the Astro dev server in Podman with live reload.

```bash
podman compose up --build
```

Then open:

```text
http://localhost:4321
```

Stop the stack:

```bash
podman compose down
```

If file watching is unreliable on your system, keep `CHOKIDAR_USEPOLLING=true` enabled in `compose.yml`.

## Build

```bash
npm run build
npm run preview
```

## Content model

- Edit site copy in the Markdown route pages under `src/pages/`.
- Add or update project entries in `src/pages/projects/`.
- Update the publications list in `src/data/publications.bib`.
- The projects page defaults to chronological ordering and lets visitors filter by tag.
- The publications page groups BibTeX entries by their `group` field when present.

## Deployment

The repo includes a GitHub Pages workflow and a `public/CNAME` file for `kivanctatar.com`.
