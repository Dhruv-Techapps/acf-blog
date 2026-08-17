# acf-blog

Hugo blog at **blog.getautoclicker.com**. Its one job is **release notes** — not marketing,
not SEO content.

## The rule

**Every release gets a post — minor or major, no exceptions.** The post carries the
detailed description of what changed. If a release introduces anything with a "how do I
use this" element, the instructions go in the post too, not just a one-line changelog
entry.

There is nothing else to maintain here. If you are in this repo, you are almost certainly
writing a release post.

## Adding a release post

Create `src/content/posts/<year>/Auto-Click-Auto-Fill-<major>-<minor>-<patch>.md`.

Note the filename says **`Auto-Click-`**, not `Auto-Clicker-`. Match the existing files —
`permalinks` is `/:year/:month/:day/:contentbasename/`, so the filename is part of the URL.

Front matter (YAML, matching every existing post):

```yaml
---
author: Dharmesh-Hemaram
date: '2026-05-05'
title: Auto Clicker Auto Fill v5.0.12
slug: 5.0.12
keywords:
  - automation
  - publish
  - sharing
---
```

- `author` — must resolve in `src/data/authors.yml`.
- `date` — quoted `YYYY-MM-DD`.
- `title` — `Auto Clicker Auto Fill v<version>`; milestone releases may add a subtitle
  (e.g. `v5.0.0 — A New Chapter`).
- `slug` — the bare version, no `v`.
- `keywords` — feature terms, used for the related-posts index (weighted 100, above tags).

## Post shape

Routine release, as in `Auto-Click-Auto-Fill-5-0-12.md`:

```markdown
## New in This Update      — one-paragraph summary
## Highlights
### 1) <Feature>           — numbered, one section per feature, with usage detail
### 2) <Feature>
## Why This Matters        — user-facing rationale
```

Milestone releases (5.0.0) break this shape deliberately and run long and narrative. That's
fine — the structure above is for ordinary releases.

## Never link to PRs, branches, or GitHub repos

**Don't reference pull requests, branches, commits, or any `github.com/Dhruv-Techapps/...`
URL in a post.** The extension, `acf-firebase`, `acf-bot`, and `acf-i18n` repos are
private — those links are dead or inaccessible for readers. This applies even when a
feature's implementation spans several of those repos; the post still stays user-facing
only, it doesn't enumerate the repos or PRs behind it.

Older posts have a `## PR Reference` section (e.g. `Auto-Click-Auto-Fill-5-0-12.md` links
to PR #822) — that's a pattern to stop repeating, not to copy. Describe the change in
user-facing terms instead, and link to the docs page for the feature if a reference is
wanted (`https://getautoclicker.com/docs/5.x/...` is public and fine to link).

**Before treating a post as done, grep it for `github.com/Dhruv-Techapps`** — any match
means a PR/branch/repo link snuck in and needs to be replaced with a docs link or removed.

The same rule applies in `acf-docs`.

Body starts at `##`; the `title` front matter supplies the `<h1>`. The table of contents is
generated from levels 2–6.

## Traps

- **There is no draft workflow.** Posts are written and published in one go — no
  `draft: true`, no future-dating. This matches the config: `buildDrafts: true` and
  `buildFuture: true` in `hugo.yml` mean drafts and post-dated entries get built and
  published anyway. Don't reach for either as a way to stage a post; it won't hide it.
- `disableKinds: ['404', 'taxonomy', 'term']` — tag/category pages don't exist. `keywords`
  feed related-posts only.

## Local preview

```bash
npm start
```

Hugo serve on **port 4000**, rendered to memory. `npm run serve-only` serves a built
`_site/` instead.

## Checks

`npm test` builds and then runs, in parallel: `eslint`, `fusv` (unused SCSS vars),
`stylelint`, **`markdownlint`** (applies to your post), **`linkinator`** (crawls `_site`
and validates links — a broken link in a post fails the build), `vnu` (HTML validation,
needs Java), and `lockfile-lint`.

This is a PR gate (`test.yml`), so a malformed post or dead link blocks the merge.

## Deploy

Push a tag `v*` → `gh-pages.yml` runs `npm test`, builds, and publishes. Nothing deploys
on merge to main — writing the post is not the same as shipping it.
