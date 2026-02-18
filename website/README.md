# ambient-code.ai Website

Static site for [ambient-code.ai](https://ambient-code.ai/), built with [Jekyll](https://jekyllrb.com/) and deployed via GitHub Pages.

## Local Development

```bash
cd website
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/`.

## Deployment

Enable GitHub Pages on the repository (Settings → Pages → Source: branch `main`, folder `/website`). GitHub builds Jekyll automatically — no CI config needed.

## Content

- **Blog posts**: `_posts/` — Markdown files named `YYYY-MM-DD-slug.md`
- **Static pages**: `about.md`, `philosophy.md`
- **Layouts**: `_layouts/` — Minimal custom templates
- **Styles**: `assets/css/style.css`

## Adding a New Post

Create a file in `_posts/` with front matter:

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
summary: "Brief description for the listing page."
---

Your content here...
```
