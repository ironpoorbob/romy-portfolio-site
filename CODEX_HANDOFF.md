# Codex Handoff

This file is for future Codex sessions working on the Romy Jervis portfolio site. Read this first, then check `README.md`, `CONTENT_EDITING.md`, and `DEPLOYMENT.md`.

## Project Summary

This is an Astro static site for artist Romy Jervis. It presents portfolio work, bio content, contact details, and image-heavy work pages.

The site is content-driven:

- Main page content: `src/content/pages/`
- Work pages: `src/content/work/`
- Images: `public/img/`
- Templates: `src/templates/`
- Shared components: `src/components/`
- Global/content CSS: `src/styles/`

## Currently Unused

These folders/routes still exist from the original theme but are not currently part of Romy's active site content:

- News entries: `src/content/news/`
- Sold/exhibition entries: `src/content/sold/`

## Current Deployment Reality

There is no CI/CD pipeline.

The site is built locally and uploaded manually through DreamHost File Manager. The correct build command is:

```bash
npm run build
```

The static output is written to:

```text
dist/
```

For DreamHost, upload the contents of `dist/`, not the `dist` folder itself. See `DEPLOYMENT.md` for the exact manual upload steps.

## Content Editing Decision

We considered JSON and CMS-style editing, but decided to keep Markdown as the source of truth.

Reasoning:

- Astro reads Markdown and JSON at build time, so either one still requires a rebuild before manual DreamHost upload.
- Runtime JSON would avoid rebuilds, but would require client-side rendering and make SEO/content behavior more fragile.
- Raw JSON is easier for a non-technical owner to break than Markdown.
- Decap/Netlify CMS exists in `public/admin/`, but it is disabled and would require auth/backend/deployment setup.
- Romy is not expected to update the site often. Semi-regular manual updates, roughly every 6 to 12 months, are acceptable.

Use `CONTENT_EDITING.md` as the practical guide for editing Markdown content.

## Important Content Conventions

Markdown files use frontmatter between `---` lines. The frontmatter is metadata; the body below it is visible page content.

The `description` field is metadata only on work pages. It should be used for page metadata/search previews, not visible page copy.

For work pages, the top image comes from:

```yaml
thumbnail: /img/file-name.jpg
```

The top image caption is optional and comes from:

```yaml
thumbnailDescription: "Title; dimensions, medium"
```

Body image captions should be written as a paragraph immediately after the image, with a blank line between the image and caption:

```md
![Short image description](/img/file-name.jpg)

Title; dimensions, medium
```

The work template styles that caption pattern.

## Recent Design Decisions

Images should have square corners. Rounded image corners were removed from content images and image cards.

Work page descriptions should not render at the top of the page. They are passed to `Layout` for metadata only.

Work image captions use a subdued centered style under images. The top image caption and body image captions should feel visually related.

The contact page includes:

- Email: `romy@romyjervis.com`
- Instagram: `https://www.instagram.com/romyjervisart/`
- Inline Instagram handle and copy button styling should use theme-aware link colors.

## Admin/CMS Notes

There is an old CMS scaffold:

- `public/admin/index.html`
- `public/admin/config.yml.disabled`

It is intentionally disabled. Do not re-enable it unless the user explicitly decides to add a real browser-based CMS workflow.

## Build And Verification

Use this for verification after code/content changes:

```bash
npm run build
```

Known non-blocking warnings may include stale Browserslist data. If duplicate content id warnings appear, inspect content filenames/slugs before assuming they are harmless.

## Working Style For Future Changes

Prefer small, direct changes that preserve the current Markdown-based workflow. Avoid introducing a CMS, runtime JSON rendering, or deployment automation unless the user explicitly asks for it.

When adding owner-facing behavior, update `CONTENT_EDITING.md` or `DEPLOYMENT.md` so the project remains understandable after the session ends.
