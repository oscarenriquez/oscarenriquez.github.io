# Oscar Enriquez Portfolio

Static-first portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui patterns, Framer Motion, and MDX content.

## Architecture

- `app/`: Route tree for `Home`, `About`, `Projects`, `Blog`, and `Contact`
- `components/`: Reusable UI, site shell, and MDX render helpers
- `content/`: Versioned MDX for blog posts and project case studies
- `lib/`: Site config, content loaders, and shared utilities
- `public/`: Static assets

## Local setup

```bash
npm install
npm run dev
```

## Static export constraints

- `next.config.ts` uses `output: "export"`
- `images.unoptimized = true`
- `trailingSlash = true` for GitHub Pages-friendly paths
- `NEXT_PUBLIC_BASE_PATH` can be set for project-site deployments

Example:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

For the current repository name `oscarenriquez.github.io`, the root user site usually does **not** need a base path, so leave it empty unless you deploy under a subpath.

## Content workflow

- Add blog posts under `content/blog/*.mdx`
- Add project case studies under `content/projects/*.mdx`
- Each dynamic page is pre-rendered through `generateStaticParams`, so the export stays fully static

## Deployment to GitHub Pages

1. Run `npm run build`
2. Publish the generated `out/` directory to GitHub Pages
3. If you later move to a project page instead of the root user page, set `NEXT_PUBLIC_BASE_PATH`

## Scaling later

This structure is intentionally static-first but future-safe:

- contact can migrate from Formspree to an API route or external backend
- MDX content can move to a CMS without changing page composition
- AI demos can be introduced as client-side experiences first, then backed by secured APIs later
