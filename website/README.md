# ambient-code.ai Website

Combined static site for [ambient-code.ai](https://ambient-code.ai/), built with [Jekyll](https://jekyllrb.com/) (landing page + blog) and [MkDocs](https://www.mkdocs.org/) (documentation).

## Site Structure

| Path | Content | Source |
|------|---------|--------|
| `/` | Landing page | `website/index.html` |
| `/blog/` | Blog index | `website/blog.html` |
| `/blog/posts/<slug>/` | Blog posts | `website/_posts/` |
| `/about/` | About page | `website/about.md` |
| `/philosophy/` | Philosophy page | `website/philosophy.md` |
| `/docs/` | Documentation | `docs/` (MkDocs) |

## Local Development

```bash
# Blog / landing page (Jekyll)
cd website
bundle install
bundle exec jekyll serve
# -> http://localhost:4000/

# Documentation (MkDocs)
pip install -r requirements-docs.txt
mkdocs serve
# -> http://localhost:8000/
```

## Deployment

GitHub Actions (`.github/workflows/pages.yml`) builds both Jekyll and MkDocs, merges the output, and deploys to GitHub Pages on push to `main`.

## Adding a New Post

Create a file in `_posts/` named `YYYY-MM-DD-slug.md`:

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
summary: "Brief description for the listing page."
---

Your content here...
```
