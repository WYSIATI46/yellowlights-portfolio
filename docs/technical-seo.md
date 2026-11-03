# Technical SEO change note — November 3, 2026

- Assistant: Codex.
- Repository: `WYSIATI46/yellowlights-portfolio`.
- Branch: `codex/journal-technical-seo`, based on production `main` at `05ab1b4`.
- Review: [PR #13](https://github.com/WYSIATI46/yellowlights-portfolio/pull/13).
- Status: preview only; no merge, production deployment, or production setting changes.

## Change

`npm run build` runs Vite, then `scripts/prerender.mjs`. The build uses the
existing React components, React Router, React Markdown, and Vite TSX/raw-import
support to write the homepage and every `ARTICLES` route as static HTML. The
browser hydrates the same components for normal navigation, audio, and tools.
No dependencies or runtime rendering service were added.

There are 25 public registry pages and 24 featured cards. The biography is
already featured; `designing-second-thought` is registered but not featured.
All 25 pages are included in the sitemap. The featured selection is unchanged.

`seo.ts` supplies build-time and client-navigation metadata from existing
article titles and subtitles: titles, descriptions, canonical URLs under
`https://www.yellowlights.ai`, Open Graph, Twitter summary metadata, and
BlogPosting JSON-LD. No editorial text was changed. Exact dates, modification
dates, image URLs, and sitemap lastmod values are omitted because the registry
does not provide verified values. Month-level dates remain visible as before.

The build generates `dist/sitemap.xml` (26 URLs) and `dist/robots.txt`.
Vercel explicitly serves them as XML and plain text and resolves registered
Journal routes to their generated HTML before the SPA fallback. Unknown Journal
URLs receive a real 404 and noindex metadata. Journal cards are real same-tab
links, preserving their existing appearance.

## Validation

- Production build, `npx tsc --noEmit`, and `git diff --check` pass.
- `python3 scripts/check-seo.py` checks all generated URLs, sitemap XML,
  unique metadata, canonicals, JSON-LD, article bodies, audio sources, and
  homepage links. Set `SEO_BASE_URL` to an exact deployment URL to also check
  HTTP statuses, MIME types, and unknown-article 404 behavior. Protected previews
  can use a temporary Vercel share URL; it is never saved in source.
- Vercel preview HTTP checks passed for all 26 pages, XML and text content
  types, and unknown-article 404. Sitemap and robots return their actual files,
  not the application shell.
- All 18 artifact routes returned their app HTML. All 36 external proxy rules
  are identical to main. This verifies routing preservation, not every app's
  internal workflow or third-party AI backend.
- All 25 existing audio sources returned 200, an audio MIME type, and byte-range
  support. Browser testing confirmed German Bakery playback, seeking to 60
  seconds, 1.25x playback, pause, and its existing download link.
- Browser checks confirmed direct homepage/article hydration, same-tab Journal
  navigation, metadata reset when returning home, and no console errors.
  The Journal layout was visually checked in the built-in browser.
- Existing article registry, editorial Markdown, audio player, ArticlePage,
  analytics integration, and styling are unchanged.

Initial review deployment: `ae8384d` at
[Vercel preview](https://yellowlights-portfolio-29jw4eohc-traces-projects-217c48ee.vercel.app).
Subsequent commits only refine checks/template handling and this note; use the
latest deployment attached to the PR for final review.

## Limitations and stale documentation

- Indexing and rich-result eligibility must be assessed after an approved
  production release; prerendering and a sitemap do not guarantee indexing.
- Vercel preview authentication and its automatic `X-Robots-Tag: noindex` are
  expected. Confirm production responses are indexable after release.
- Existing build warnings about the large JS bundle and missing `index.css`
  remain outside this change. Styles still come from the existing inline CSS
  and Tailwind CDN.
- `yellowlights-handoff.md` is historical: its undecided audio status and other
  old counts are stale. This note records the current inspected state without
  rewriting that history.
- Vite's local preview server may use its homepage fallback for extensionless
  article URLs; use a trailing slash locally. Vercel's explicit Journal route
  was separately verified at the extensionless canonical URLs.

## Search Console steps after deployment approval

1. Verify the production sitemap and robots endpoints return 200 with their
   correct MIME types. Check representative article HTML for full content,
   canonical URLs, metadata, and no accidental noindex header/tag.
2. Remove the failed April 4 homepage sitemap submission and submit
   `https://www.yellowlights.ai/sitemap.xml` in the matching Search Console
   property. Confirm successful processing and 26 discovered URLs.
3. Use URL Inspection live tests on representative articles, including a recent
   one and `designing-second-thought`; request indexing. Check the rendered HTML
   and selected canonical. Validate BlogPosting markup with Google's Rich
   Results Test; optional missing dates/images should not be fabricated to
   eliminate recommendations.
4. Monitor sitemap processing, Page indexing, selected canonicals, and Search
   performance as Google recrawls. Search Console reporting may lag.

Reference: [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
and [Article structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/article).
