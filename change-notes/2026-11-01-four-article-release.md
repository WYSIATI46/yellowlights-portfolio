# Four-article Journal release

Date: November 1, 2026  
Assistant: Codex  
Repository: WYSIATI46/yellowlights-portfolio  
Branch: codex/journal-four-article-release  
Base: aaa09ce (main)  
Commit/PR: release commit containing this note; PR to main follows preview validation.

## Change

Append four November 2026 cards in positions 21–24 and article IDs 22–25. Preserve all original cards in order, all 21 existing routes including the archived designing-second-thought route, and every existing audio mapping. Use exact approved titles and subtitles. Article bodies match the revised archive verbatim except removal of title/subtitle blocks and the Too Good To Go research-cutoff line. The editorial change log is not published.

Add remark-gfm 4 for footnotes. Preserve IDs, labels, back-reference attributes, and same-tab fragment navigation. Keep the generated footnote heading visually hidden and the manuscript References heading visible. Allow long reference links to wrap. Retain the existing audio player and Journal design.

Read times use narrative word counts excluding references at 225 words/minute, rounded up: 10, 11, 9, and 12 minutes.

## Audio provenance and uploads

Original sources remain in Downloads; optimized files and technical manifests remain outside Git at /private/tmp/yellowlights-four-release-media. Exactly four new files were uploaded through the existing Blob CLI using preview OIDC credentials. No existing files were overwritten. Originals: AAC-LC, stereo, 256000 bits/s. Optimized: AAC-LC, stereo, target 96000 bits/s, moov before mdat. All durations are unchanged and all optimized streams decode completely.

| Article | Approved source | Duration seconds | Original bytes | Optimized bytes | Optimized stream bitrate |
| --- | --- | ---: | ---: | ---: | ---: |
| human-judgment-algorithm | When_to_Override_Algorithmic_Decisions.m4a | 1473.956281 | 47438451 | 17874579 | 95630 |
| booking-experimentation | How_Booking (1).m4a | 1252.205714 | 40301681 | 15180895 | 95599 |
| german-bakery | Why_One_Bakery_Scrapped_Smile_Checklists.m4a | 322.850249 | 10391422 | 3919739 | 95721 |
| too-good-to-go | Too_Good_To_Go_Sells_Uncertainty.m4a | 1309.094603 | 42132622 | 15890915 | 95724 |

- human-judgment-algorithm: [When to Override Algorithmic Decisions](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/When_to_Override_Algorithmic_Decisions_96k-SLl8pcyAqiceD0KuTZi7SqjyxMvLrP.m4a); [download](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/When_to_Override_Algorithmic_Decisions_96k-SLl8pcyAqiceD0KuTZi7SqjyxMvLrP.m4a?download=1).

- booking-experimentation: [How Booking.com Experiments](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Booking_96k-gxrGFvj1niED1qkCDGI87oCYxzuMKz.m4a); [download](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Booking_96k-gxrGFvj1niED1qkCDGI87oCYxzuMKz.m4a?download=1).

- german-bakery: [Why One Bakery Scrapped Smile Checklists](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_One_Bakery_Scrapped_Smile_Checklists_96k-BeDfTmHIXrrQ47YSLuM9l2QOxrAnq7.m4a); [download](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_One_Bakery_Scrapped_Smile_Checklists_96k-BeDfTmHIXrrQ47YSLuM9l2QOxrAnq7.m4a?download=1).

- too-good-to-go: [Too Good To Go Sells Uncertainty](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Too_Good_To_Go_Sells_Uncertainty_96k-QKybzcDGgQtuun2gs5I1HAxQHkIL8d.m4a); [download](https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Too_Good_To_Go_Sells_Uncertainty_96k-QKybzcDGgQtuun2gs5I1HAxQHkIL8d.m4a?download=1).

## Verification

- npm ci and npm run build pass. Registry regression verifies 24 cards, 25 routes, unique IDs/slugs, consistent metadata, archived route, and unchanged biography.
- Verbatim comparison against the supplied revised archive and source comparison of both existing registries pass.
- Local browser: all four card clicks, headings, citation definitions/links/returns, correct audio URLs and actual durations, play progression, pause, seek to 60 seconds, 1.5× speed, and actual downloads pass.
- Desktop 1440×1000: cards 21–24 occupy a complete fifth row. Mobile 390×844: one column; all four article pages have no horizontal overflow. Screenshots retained outside the commit in output/playwright.
- Preview deployment and regression checks: pending before PR creation.

## Open issues and stale documentation

Production approval required before merging or promotion. Existing missing index.css, local favicon.ico, Tailwind CDN warning, and bundle-size warning are outside scope. No new browser runtime exceptions observed in local validation. The source editorial report retains research-access limitations; approved prose and citations were preserved, and this release makes no new independent research-verification claim.

The historical handoff still describes Journal audio as undecided and predates the current registry/order. Current code and this release note supersede that status.
