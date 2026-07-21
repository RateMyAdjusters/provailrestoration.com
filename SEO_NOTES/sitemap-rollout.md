# Sitemap Rollout Strategy — provailrestoration.com

**Context:** Fresh domain, Michigan water-damage / restoration niche, ~20 planned URLs. Goal: get pages crawled and indexed without tripping new-domain quality gates.

---

## 1. Phased publication — how many pages on day 1, week 1, month 1

There is no published Google rule about page-count velocity, but multiple practitioner sources warn that dumping a large set of pages on a brand-new domain "looks suspicious" and that natural growth patterns avoid algorithmic skepticism ([Breakline](https://www.breaklineagency.com/what-is-googles-sandbox-which-affects-new-websites/), [link-assistant](https://www.link-assistant.com/seo-wiki/google-sandbox-effect/)). Google denies a formal "sandbox," but acknowledges new sites go through an undefined trust-building period during which spam signals are weighted more heavily.

For a 20-page restoration site, the practical interpretation:

- **Day 1 (launch):** 5–7 pages. Homepage, primary service hub (water damage restoration), 1–2 anchor city pages (Bloomfield, Macomb), About, Contact. These must be the strongest, most complete pages on the site — they set Google's first-impression quality baseline.
- **Week 1:** add 4–6 more pages (secondary services: mold, fire, sewage; plus 1–2 additional location pages).
- **Month 1:** reach ~20 pages. Add remaining city pages, FAQ/resource articles, and any case studies.
- **Cadence rule of thumb:** 2–4 high-quality pages per week beats 20 mediocre pages dumped in a single push ([Breakline](https://www.breaklineagency.com/what-is-googles-sandbox-which-affects-new-websites/)).

The point is not that Google counts pages-per-day. The point is that early crawls form a quality prior; if Googlebot's first 20 fetches all return thin or templated city pages, the whole domain inherits that prior and you end up in "Discovered – currently not indexed" hell.

## 2. robots.txt staging tactics

Two failure modes to avoid:

1. **Indexing the staging URL** (Vercel preview deployments, `*.vercel.app`) — duplicate-content footprint that competes with the real domain.
2. **Carrying `Disallow: /` from staging into production** — the single most common launch disaster. If the rule isn't removed at cutover, the entire site de-indexes ([Cronyx Digital](https://www.cronyxdigital.com/blog/seo-checklist-website-launch), [Conductor](https://www.conductor.com/academy/protect-staging-environment/)).

Recommended approach:

- Block Vercel preview domains via `next.config.js` headers: send `X-Robots-Tag: noindex` for any host matching `*.vercel.app`. This is host-conditional and cannot leak to production.
- Do **not** rely on `robots.txt Disallow: /` on staging — Google itself recommends HTTP basic auth as the only complete protection because canonicals, noindex, and robots.txt all have escape hatches ([Search Engine Journal](https://www.searchenginejournal.com/google-on-staging-sites-preventing-accidental-indexing/484257/), [Conductor](https://www.conductor.com/academy/protect-staging-environment/)).
- Production `robots.txt` should be minimal: `User-agent: *` / `Allow: /` / `Sitemap: https://provailrestoration.com/sitemap.xml`. Nothing else on day 1.
- Triple-check at cutover: `curl https://provailrestoration.com/robots.txt` and confirm no `Disallow: /`.

## 3. Sitemap XML structure — priority/changefreq in 2026

Google has confirmed repeatedly that `<priority>` and `<changefreq>` are **ignored**. Both are self-reported and site owners are unreliable raters of their own content, so Google determines crawl frequency from its own signals (links, engagement, history) ([SEO Component](https://www.seocomponent.com/blog/ignore-priority-changefreq-fields-sitemap/), [Slickplan](https://slickplan.com/blog/xml-sitemap-priority-changefreq), [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).

The **only** sitemap metadata Google actually uses is `<lastmod>` — and only when it is consistently and verifiably accurate. A `<lastmod>` that updates on every deploy regardless of actual content change trains Google to ignore it.

Practical 2026 sitemap shape for a 20-page site:

- One file: `/sitemap.xml`. No need for an index file under 50K URLs / 50 MB.
- `<loc>` + `<lastmod>` only. Skip `<priority>` and `<changefreq>`.
- `<lastmod>` should reflect the actual last meaningful edit (Next.js can derive this from git or filesystem mtime, not from build time).
- Reference it from `robots.txt` and submit it in GSC.

For Bing/IndexNow, the same sitemap works — Bing does honor `<priority>` and `<changefreq>` to a degree, but the cost of including them is essentially zero, so leave them out for simplicity unless you specifically want to tune Bing.

## 4. Google Search Console submission workflow

1. Verify the property — prefer **Domain property** (DNS TXT record) over URL-prefix; it covers `http`, `https`, `www`, and subdomains in one shot.
2. Submit `https://provailrestoration.com/sitemap.xml` under Sitemaps.
3. For each of the day-1 pages, run **URL Inspection → Request Indexing**. This is rate-limited (~10/day) and is the fastest way to seed crawl on a new domain.
4. Watch the **Page indexing** report daily for the first 2 weeks. The states to track: Submitted-and-indexed, Discovered-not-indexed, Crawled-not-indexed, Duplicate-without-canonical.
5. Watch **Crawl stats** under Settings — for a fresh domain you want to see crawl requests trending up, average response time under 500 ms ([crawlwp](https://crawlwp.com/crawl-budget-for-seo/)).

## 5. IndexNow and Google Indexing API — eligibility and caveats

**IndexNow:** supported by Bing, Yandex, Naver, Seznam, and Yep. **Google has not adopted IndexNow** as of early 2026 despite testing it since 2021 ([Pressonify](https://pressonify.ai/blog/indexnow-instant-indexing-press-releases-2026), [CrawlWP](https://crawlwp.com/indexnow-vs-google-indexing-api-vs-sitemaps/)). For a Michigan local-service site, Bing share is small but non-zero and IndexNow is a one-time setup — worth doing.

**Google Indexing API:** officially restricted to `JobPosting` and `BroadcastEvent` (livestream) schema. Practitioners do use it for general pages and it sometimes works, but it is against ToS and Google can revoke quota. **Do not rely on it** for restoration service pages. The legitimate Google path is sitemap + Request Indexing in GSC ([CrawlWP](https://crawlwp.com/indexnow-vs-google-indexing-api-vs-sitemaps/)).

## 6. Crawl budget for small sites

Google's own crawl-budget guide explicitly says: *if your site doesn't have a large number of pages that change rapidly, or if your pages seem to be crawled the same day they are published, you don't need to read this guide* ([Google Search Central](https://developers.google.com/crawling/docs/crawl-budget)). Crawl budget is not a meaningful constraint under a few hundred URLs.

That said, the things that *do* affect a small fresh domain's crawl rate:

- Server response time (target < 500 ms TTFB) ([crawlwp](https://crawlwp.com/crawl-budget-for-seo/)).
- 5xx errors and soft-404s — every one tells Googlebot to back off.
- Sitemap hygiene — only canonical, indexable URLs in the sitemap.
- No infinite faceted/filter URL spaces (irrelevant here, but worth a sanity check on any blog tag pages).

## 7. Monitoring "Discovered – not indexed" and "Crawled – not indexed"

Both states are **quality verdicts**, not technical bugs.

- **Discovered – currently not indexed:** Google knows about the URL but chose not to crawl it. Usually means low perceived priority for a new/low-authority site, or Google estimated that crawling would overload the host ([Onely](https://www.onely.com/blog/how-to-fix-discovered-currently-not-indexed-in-google-search-console/), [Conductor](https://www.conductor.com/academy/index-coverage/faq/discovered-not-indexed/)).
- **Crawled – currently not indexed:** Google fetched the page and decided it isn't worth indexing. Almost always a content-quality or duplication signal ([SEOTesting](https://seotesting.com/google-search-console/crawled-not-currently-indexed/)).

Fix playbook (run in this order):

1. URL-inspect first. GSC reports lag; the URL may already be indexed.
2. Add **internal links from already-indexed pages** to the affected URL. This is the single highest-leverage fix ([Onely](https://www.onely.com/blog/how-to-fix-discovered-currently-not-indexed-in-google-search-console/)).
3. Improve the page itself: more unique copy, real photos (not stock), schema, NAP consistency, embedded map, reviews. Templated city pages with only the city name swapped are the canonical "Crawled – not indexed" trigger.
4. Confirm the page isn't a near-duplicate of another city page. Run a diff — if the unique character count between two city pages is under ~20%, Google will collapse them.
5. Request indexing from URL Inspection.
6. If 2–4 weeks pass with no movement, the diagnosis is almost certainly thin/duplicative content, not a crawl issue.

## 8. Red flags that get a fresh domain sandboxed

Synthesized from the practitioner consensus ([Breakline](https://www.breaklineagency.com/what-is-googles-sandbox-which-affects-new-websites/), [link-assistant](https://www.link-assistant.com/seo-wiki/google-sandbox-effect/), [SEO.co](https://seo.co/google-sandbox/)):

- **Launching 100+ pages day one**, especially programmatic city/service combos with low unique-content ratio.
- **Thin content** — under ~500 words of actually-unique copy per page on a service site.
- **Templated doorway pages** — the `[Service] in [City]` pattern with only the city name varying. This is exactly the pattern that got the RateMyAdjusters network penalized (per session memory).
- **Rapid link velocity** — buying or building dozens of backlinks in week one. One quality link/week from a relevant local source beats ten directory submissions.
- **Duplicate NAP variants** — listing slightly different business names or phone numbers across the site or GBP. Especially dangerous for restoration, which is a GBP-spam-heavy vertical.
- **Auto-generated reviews / fake testimonials** — another RateMyAdjusters root cause.
- **Missing or broken GSC verification** — not a ranking signal directly, but it removes your only feedback loop.

## 9. Recommended week-by-week rollout calendar (~20 pages)

Assume the domain is registered, Vercel project created, repo ready, GSC domain property verified before day 1.

### Pre-launch (T-7 to T-1)
- DNS configured, HTTPS live, Vercel preview blocked via `X-Robots-Tag: noindex` on `*.vercel.app`.
- GSC domain property verified via TXT record.
- Bing Webmaster Tools verified, IndexNow key file deployed.
- `robots.txt` final review — confirm no `Disallow: /`.
- Google Business Profile claimed/verified for at least the primary location (Bloomfield).
- Day-1 pages written, edited, reviewed for unique copy and local detail.

### Week 1 — 5–7 pages live
- **Day 1:** Homepage, `/water-damage-restoration` (service hub), `/bloomfield` (anchor city), `/about`, `/contact`. Submit sitemap to GSC and Bing. Request indexing for all 5 in GSC. Ping IndexNow.
- **Day 3–4:** Add `/macomb` (second city) and `/services/mold-removal`.
- Watch GSC daily. Expected state: 2–4 of 5 indexed within 72 hours if quality is solid.

### Week 2 — add 4–5 pages
- Two more service pages: `/services/fire-damage`, `/services/sewage-cleanup`.
- Two more city pages: pick the two highest-value Michigan markets after Bloomfield/Macomb (e.g., Royal Oak, Troy).
- Internal-link the new pages from the homepage and the service hub.
- Request indexing for each new page.

### Week 3 — add 4–5 pages
- Remaining city pages (3–4).
- One FAQ or resource article (`/water-damage-insurance-claims-michigan` — useful, not thin).
- Begin earning 1–2 real local citations (BBB, local chamber, Yelp). No paid link blasts.

### Week 4 — fill to ~20 and stabilize
- Final city pages and any remaining service variants.
- Audit the Page indexing report. Any URL stuck in Discovered/Crawled-not-indexed gets the §7 playbook.
- Add structured data: `LocalBusiness`, `Service`, `FAQPage` where appropriate.
- Confirm `<lastmod>` values are accurate (not just build timestamps).

### Month 2+ — maintenance, not expansion
- Add one resource article every 1–2 weeks to keep crawl signals fresh.
- Review GSC weekly.
- Build local backlinks at the rate of 1–2 per week, not per day.
- Do not re-launch a wave of programmatic pages. If you need more city coverage, add them at 2–3 per week with genuinely unique content per city.

---

## Sources

- [Google Search Central — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central — Crawl budget management](https://developers.google.com/crawling/docs/crawl-budget)
- [Google ignores priority and changefreq fields — SEO Component](https://www.seocomponent.com/blog/ignore-priority-changefreq-fields-sitemap/)
- [XML Sitemap Priority & Changefreq — Slickplan](https://slickplan.com/blog/xml-sitemap-priority-changefreq)
- [How to fix Discovered – currently not indexed — Onely](https://www.onely.com/blog/how-to-fix-discovered-currently-not-indexed-in-google-search-console/)
- [Discovered – currently not indexed — Conductor](https://www.conductor.com/academy/index-coverage/faq/discovered-not-indexed/)
- [Crawled – currently not indexed — SEOTesting](https://seotesting.com/google-search-console/crawled-not-currently-indexed/)
- [IndexNow vs Google Indexing API vs Sitemaps — CrawlWP](https://crawlwp.com/indexnow-vs-google-indexing-api-vs-sitemaps/)
- [Does Google support IndexNow in 2026 — Pressonify](https://pressonify.ai/blog/indexnow-instant-indexing-press-releases-2026)
- [Google sandbox effect — Link-Assistant](https://www.link-assistant.com/seo-wiki/google-sandbox-effect/)
- [What is Google's Sandbox — Breakline](https://www.breaklineagency.com/what-is-googles-sandbox-which-affects-new-websites/)
- [Google Sandbox — SEO.co](https://seo.co/google-sandbox/)
- [Google on staging sites & accidental indexing — Search Engine Journal](https://www.searchenginejournal.com/google-on-staging-sites-preventing-accidental-indexing/484257/)
- [Protecting staging environments — Conductor](https://www.conductor.com/academy/protect-staging-environment/)
- [SEO site launch checklist — Cronyx Digital](https://www.cronyxdigital.com/blog/seo-checklist-website-launch)
- [Crawl budget for SEO — CrawlWP](https://crawlwp.com/crawl-budget-for-seo/)
