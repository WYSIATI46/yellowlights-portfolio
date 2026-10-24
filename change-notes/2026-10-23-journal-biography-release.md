# Journal biography release — preview checkpoint

- Date: October 23, 2026 (America/Los_Angeles).
- Assistant: Codex.
- Repository: WYSIATI46/yellowlights-portfolio.
- Branch: codex/journal-biography-release, based on main 72b38bbc2d5f13905ea1134075da8481cb426950.
- Commit: the commit containing this note; resolve with `git log -1 --format=%H -- change-notes/2026-10-23-journal-biography-release.md`.
- Release boundary: feature branch and Vercel preview only. No merge, production deployment, settings changes, or production aliases authorized.

## Changes

Imported the approved Relevance_v2.5.md byte for byte as articles/relevance-an-unfinished-education.md. SHA-256: 01552f57b7a6465c6ba97ea456fc50a4dea77c2149acef827d36a76e20795d5b. Its title is rendered by the existing ArticlePage header; the existing Markdown H1 suppression prevents a second title. The byline and substantive introduction remain intact. Reading times are manually stored in the current site; the new 4,765-word manuscript uses a documented 200-word/minute estimate, rounded up to 24 minutes.

BLOG_POSTS remains the single source of visible card order. It now contains exactly the approved 20 cards, biography first. ARTICLES retains all 20 existing records unchanged and adds the biography. Designing for the Second Thought is excluded from the grid and retains its route and audio.

Removed only the introductory subtitle blocks in yellow-light.md, systemic-heuristics.md, designing-second-thought.md, and mind-behind-mirror.md. Two were italic paragraphs and two were H3 headings. Some paraphrased the corresponding header subtitle. No rendering heuristics or CSS suppression were added. All remaining manuscript bytes are preserved.

## Audio

- Original: AAC-LC stereo, 44.1 kHz, 256 kbps, 45,189,801 bytes.
- Optimized: AAC-LC stereo, 44.1 kHz, approximately 96 kbps, fast-start M4A, 17,019,326 bytes.
- Exact original and output duration: 1404.087438 seconds (23:24.087438).
- URL: https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Trace_Hancock_Built_Yellowlights_AI_96k.m4a
- Upload: existing linked project's preview OIDC workflow and existing public Vercel Blob store.
- Source/ZIP, binary output, credentials, downloads, and browser artifacts excluded from Git.

## Verification

- `npm run build`: passes; existing missing index.css and large-bundle warnings remain.
- `node scripts/check-journal.mjs`: passes (20 ordered cards, 21 routes, unique IDs/slugs, matching title/date/readTime, subtitle regressions, audio metadata, exact biography SHA-256).
- Baseline comparison: all 20 existing ARTICLES records unchanged, including every audio URL and duration; all existing manuscript content unchanged except the four specified subtitle blocks.
- Full output audio decoded with ffmpeg without errors; ffprobe confirms exact duration and encoding.
- Local isolated Chromium: all 21 routes render one H1, one metadata subtitle, and an audio player below the header, with no subtitle repeated in the body and no page exceptions.
- All 20 card clicks verified against the approved slug order and visible numbering 01–20.
- Desktop 1440×1000 and mobile 390×844 visual checks; no biography horizontal overflow.
- Biography: playback progression, pause, seek to 60 seconds, 1.5× speed, exact browser duration, actual download, simulated failure and successful retry verified.
- Representative existing playback: yellow-light, rabble-rouser-thaler, and archived designing-second-thought pass.
- Download response: HTTP 200, audio/mp4, byte ranges, attachment filename, correct content length.
- Home page Laboratory and Interactive Artifacts still render. No application, component, global design, routing, or dependency files changed.

## Open issues and stale documentation

Production already requests a nonexistent index.css, producing stylesheet MIME errors; local favicon.ico is also absent. Tailwind CDN emits its existing production warning. These are outside this Journal release. The simulated audio failure intentionally produces a network error. No new runtime exceptions were observed.

The historical yellowlights-handoff.md still describes audio overviews as undecided; current main already includes 20 players. This note supersedes that historical audio status without rewriting the handoff.

Deployment URL, final commit SHA, and deployed-preview verification are reported in the chat after the Git integration creates the preview. Production remains subject to separate review and approval.
