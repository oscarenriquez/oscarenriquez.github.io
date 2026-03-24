# Oscar Enriquez Portfolio

A personal website for Oscar Enriquez featuring background information, selected projects, and writing.

## Architecture

- `app/`: Route tree for `Home`, `About`, `Projects`, `Blog`, and `Contact`
- `components/`: Reusable UI and site shell
- `content/`: Blog posts and project case studies
- `lib/`: Site config, content loaders, and shared utilities
- `public/`: Static assets

## Local setup

```bash
npm install
npm run dev
```

## Content workflow

- Add blog posts under `content/blog/*.mdx`
- Add project case studies under `content/projects/*.mdx`

## Deployment to GitHub Pages

1. Run `npm run build`
2. Publish the generated `out/` directory to GitHub Pages
