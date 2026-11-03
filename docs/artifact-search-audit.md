# Artifact search-discoverability audit — November 3, 2026

Assistant: Codex. Repository: `WYSIATI46/yellowlights-portfolio`.
Branch: `codex/journal-technical-seo`; review: [PR #13](https://github.com/WYSIATI46/yellowlights-portfolio/pull/13).
Audit baseline: PR commit `34da28f`, production main `05ab1b4`.

## Decision

Include all 18 public artifact entry routes at their preferred
`https://www.yellowlights.ai/[slug]/` URLs in the sitemap. These are public,
working, linked tools intended for visitors; neither HTTP headers nor raw or
rendered robots metadata prohibits indexing. Sitemap inclusion is a safe
registry-only change and does not require moving or rendering the applications
inside the portfolio. It signals preferred URLs; it does not establish that
Google has selected those URLs as canonical or guarantee indexing.

A locally prepared change derives the 18 paths from `PROJECTS`, producing a
44-URL sitemap (homepage + 25 Journal pages + 18 artifacts). Only the existing
26 portfolio pages are prerendered. No artifact HTML is generated, and no
proxy, component, editorial content, application repository, design, or
production setting is changed. The accompanying test distinguishes proxied
artifacts from prerendered portfolio pages.

**Deployment constraint:** this follow-up is prepared and tested locally, not
pushed. A push to the PR branch automatically creates a Vercel preview, so it
is held pending approval under the latest instruction not to deploy. The
existing PR preview still contains the original 26-URL sitemap.

## Verified findings

Read-only HTTP requests inspected all 18 routes on the public www hostname,
all 18 variants without a trailing slash, and all 18 existing Vercel origins.
An isolated Playwright browser also loaded all 18 public entry screens without
submitting forms or invoking AI backends.

- All 18 preferred URLs return HTTP 200 and `text/html`; none redirects away
  from its public Yellowlights URL. Both slash variants return 200.
- All 18 initial documents contain an empty React root, no app body text or
  headings, a distinct nonempty title, and no meta description, canonical,
  Open Graph title/description/URL, robots meta tag, or X-Robots-Tag.
- All 18 render visible app text after JavaScript (306–1,067 root text
  characters at initial entry). None adds a description, canonical, or robots
  tag during that rendering. No pageerror exceptions were observed. This is
  **JavaScript-dependent, potentially indexable content**, not proof that Google
  has indexed or will index it.
- Titles generally name each tool. `PTCE Laboratory` is abbreviated, and
  `PTCE Laboratory - Reference Point Architect` does not match the visible
  `Prospect Theory Lab` heading well. Descriptive titles can be reviewed in the
  app follow-up; this PR does not rewrite them.
- Each separate Vercel origin also returns 200 with the same title and no
  description or canonical. This leaves duplicate URL candidates across
  public paths, slash variants, and origin hosts. The sitemap provides a
  preference but does not replace canonical metadata in those documents.
- A non-www sample redirects to www. Existing homepage artifact links remain
  unchanged, including their non-www host and trailing-slash paths.
- Production `/robots.txt` currently returns the portfolio HTML, without
  robots directives. PR #13's proper root robots file fixes that on an approved
  production release. No crawl prohibition was observed; production still
  needs Search Console verification after release.
- The Periodic Table emits an existing stylesheet MIME error for `/index.css`
  (the request receives HTML). It still renders its entry screen. This was
  observed without changing the application and is outside this sitemap edit.

All rows below have HTTP 200, an empty initial React root, and missing
meta description/canonical in both initial and rendered HTML.

| Preferred sitemap URL | Current document title |
| --- | --- |
| [/heuristics-playground/](https://www.yellowlights.ai/heuristics-playground/) | Heuristics Playground |
| [/periodic-table/](https://www.yellowlights.ai/periodic-table/) | PTCE Laboratory |
| [/intuition-duel/](https://www.yellowlights.ai/intuition-duel/) | AI vs. Human Intuition Duel |
| [/bias-scenario-lab/](https://www.yellowlights.ai/bias-scenario-lab/) | Bias Scenario Lab |
| [/judgment-calibrator/](https://www.yellowlights.ai/judgment-calibrator/) | Judgment Calibration Trainer |
| [/reasoning-coach/](https://www.yellowlights.ai/reasoning-coach/) | Guided Reasoning Coach |
| [/second-opinion/](https://www.yellowlights.ai/second-opinion/) | Second Opinion Simulator |
| [/tradeoff-visualizer/](https://www.yellowlights.ai/tradeoff-visualizer/) | Tradeoff Visualizer |
| [/decision-speed/](https://www.yellowlights.ai/decision-speed/) | Decision Speed Calibrator |
| [/base-rate-finder/](https://www.yellowlights.ai/base-rate-finder/) | Base Rate Finder |
| [/centaur-composer/](https://www.yellowlights.ai/centaur-composer/) | Centaur Decision Composer |
| [/values-compass/](https://www.yellowlights.ai/values-compass/) | Values Clarification Compass |
| [/sunk-cost/](https://www.yellowlights.ai/sunk-cost/) | Sunk Cost Escape Hatch |
| [/prospect-theory/](https://www.yellowlights.ai/prospect-theory/) | PTCE Laboratory - Reference Point Architect |
| [/signal-noise/](https://www.yellowlights.ai/signal-noise/) | Signal vs. Noise Filter |
| [/experiencing-remembering/](https://www.yellowlights.ai/experiencing-remembering/) | Experiencing vs Remembering Self |
| [/premortem-studio/](https://www.yellowlights.ai/premortem-studio/) | Pre-Mortem & Red-Team Studio |
| [/bayesian-translator/](https://www.yellowlights.ai/bayesian-translator/) | The Bayesian Translator |

## Validation and limits

- `npm run build`, `npx tsc --noEmit`, `python3 scripts/check-seo.py`, and
  `git diff --check` passed with the local 44-URL sitemap.
- Tests verify unique www sitemap URLs, registry coverage, the existing
  Journal/home metadata, and the absence of generated portfolio HTML at
  artifact paths. HTTP-mode tests also verify artifact HTML is returned rather
  than the portfolio shell, without imposing metadata the apps do not have.
- The update changes no `vercel.json` rules, application components, registry
  entries, or dependencies. The client bundle filename/hash remains
  `index-BBbu2GtQ.js`, matching the previous PR build.
- The existing deployed PR preview was validated with 26 URLs previously;
  **the 44-URL update has not been deployed**. After approval to push, rerun
  HTTP-mode checks against its new exact preview deployment.
- Read-only app rendering does not validate every exercise, API operation,
  internal route, or Googlebot rendering. Confirm Google-selected canonicals
  and crawl/indexing results with Search Console after an approved release.

## Separate follow-up

Keep artifact SEO implementation out of this portfolio PR. It requires changes
and previews in the individual application repositories, with their production
branches and Vercel linkage verified first (including Bayesian Translator).

1. Add app-specific descriptions and self-canonical links to the public www
   paths in each app's initial HTML, so the proxied URL and direct Vercel origin
   agree on the preferred public URL. Add suitable sharing metadata and refine
   ambiguous titles.
2. Evaluate minimal prerendering of each app's existing introductory content.
   Preserve interactive state, API behavior, navigation, and appearance; do not
   prerender user inputs or call AI APIs at build time.
3. Check slash variants, asset paths, canonical metadata, no-JavaScript content,
   and representative interaction on each app preview. Fix the observed
   Periodic Table stylesheet path separately if confirmed in its source.
4. After approved production releases, inspect representative artifact URLs in
   Search Console, request indexing, and monitor selected canonicals. With the
   sitemap addition deployed, the expected sitemap total becomes **44 URLs**.

References: [Google sitemap URL guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
recommends listing preferred canonical URLs. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
explains that JavaScript apps can be rendered for indexing, while prerendering
and unique titles/descriptions improve discoverability.

Stale documentation: `docs/technical-seo.md` records the original 26-URL preview
validation. Its original counts remain historical until the 44-URL follow-up
is approved and deployed to a preview; use this audit for the proposed scope.
