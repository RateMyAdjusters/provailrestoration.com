# Duplicate & Near-Duplicate Detection: Field Guide for Fresh Restoration Domains (2025–2026)

Audience: Provail / Bloomfield / Macomb water-damage sites and similar service-area businesses. Focus is operational: what to ship, what to avoid, what gets a fresh domain stuck in "Crawled - currently not indexed" or flagged as doorway spam.

---

## 1. How Google's duplicate detection actually works

Google runs a multi-stage pipeline. At a conceptual level (drawn from Gary Illyes' 2020 podcast on dupe detection, the Google "How Search Works" docs, and the Google API leak of May 2024):

1. **Tokenization & boilerplate stripping.** Google parses the rendered DOM, classifies blocks as header/nav/footer/sidebar/main, and strips boilerplate before fingerprinting. The "centerpiece annotation" identifies the dominant topical block on the page; everything else is weighted down. (Source: Search Engine Journal on centerpiece annotation; Martin Splitt, Search Off the Record.)
2. **Shingling.** The remaining main content is broken into overlapping n-gram "shingles" (typically 5–9 word windows). Two pages with overlapping shingle sets are flagged as candidates.
3. **SimHash-style fingerprinting.** Google has used SimHash (Charikar 2002, deployed at Google ~2007 per Manku/Jain/Sarma WWW2007 paper) to reduce each page's shingle set to a compact ~64-bit fingerprint. Hamming distance between fingerprints estimates similarity in O(1). Pages within a small Hamming distance are clustered as near-duplicates.
4. **Cluster → canonical selection.** Within each near-duplicate cluster, Google picks ONE canonical using ~40 signals: rel=canonical hint, HTTPS, internal link weight, sitemap inclusion, redirect chains, hreflang, content length, PageRank-like signals, user-declared canonical, and historical canonical stability. (Source: Illyes, Google Search Off the Record episode "How Google handles duplicate content," 2020; reiterated by Mueller multiple SEO office hours 2022–2024.)
5. **Serving.** Only the canonical is normally served. Non-canonicals get reported in GSC as "Duplicate, Google chose different canonical" or "Duplicate without user-selected canonical."

Two implications you must internalize:
- **Duplicate content is not a penalty** (Mueller, repeatedly). It is a *consolidation* event — your near-duplicate page silently disappears from results.
- **Doorway pages ARE a manual/algorithmic action.** That is a separate spam classifier (SpamBrain), not the dupe pipeline. Confusing the two is the #1 reason restoration sites with 30 city pages get nuked.

---

## 2. Near-duplicate thresholds — how much unique content is actually needed

There is no published threshold, but practitioner reverse-engineering and the SimHash math converge on a workable rule:

- **<20% unique main-content tokens between two pages → near-certain dedup.** They will collapse into one canonical.
- **20–40% unique → coin flip.** Depends on how strong the unique block is and where it sits (early on the page > late).
- **>50% unique main content → almost always treated as distinct.** This is the safe target.

"Main content" excludes header, footer, nav, sidebars, repeated CTAs, and repeated trust bars. If your "Bloomfield" and "Birmingham" pages share a 1,200-word service description and only swap a 200-word intro, your unique-main-content ratio is ~14% — guaranteed dedup.

**Practical floor for a service × city page:** 400+ words of *genuinely* unique main content per page, ideally 600–900. Less than 300 unique words and SimHash collapses you. (Aligned with Mueller's Aug 2022 SEO office hours: "If the only thing different is the city name in the H1 and a couple of sentences, that's effectively the same page to us.")

---

## 3. Boilerplate vs main-content weighting

Google's centerpiece annotation explicitly downweights repeated cross-page blocks. What this means operationally:

- **Header, footer, nav, NAP block, trust bar, schema, cookie banner = ~zero ranking weight.** They can be 100% identical across the site. This is fine. Don't try to "spin" your footer.
- **Repeated service grid / "Why choose us" / repeated FAQ block = downweighted but still counted in fingerprinting if it dominates the page.** Risk zone: if your boilerplate is 80% of the rendered text and your unique block is a 150-word intro, the page reads as boilerplate-dominant and SimHash will collapse it with siblings.
- **Safe ratio: main-content block should be ≥50% of total visible text on the page**, and that main-content block should be ≥50% unique vs sibling pages.

A useful test: paste the page into a diff tool against a sibling city page. If the diff is shorter than 400 words of meaningful prose, you have a problem.

---

## 4. Template location pages — what triggers "doorway page" classification

Google's doorway page guideline (Search Central, updated 2015 and reaffirmed in 2023 spam policy doc) flags pages that are:
- "Multiple domain names or pages targeted at specific regions or cities that funnel users to one page"
- "Substantially similar pages that are closer to search results than a clearly defined, browsable hierarchy"
- "Created to rank for similar queries with content that does not provide additional unique value"

Doorway page red flags SpamBrain looks for (inferred from John Mueller responses + Lily Ray's case-study writeups + the Sept 2023 Helpful Content Update fallout):

1. **Programmatic generation at scale** — 50+ city pages spun up in one push with the same template.
2. **Thin unique content** — same 1,500-word service description with city name swapped via mail-merge.
3. **No browsable hierarchy** — pages exist only to be landed on from search; not linked from a real "Service Areas" hub with editorial logic.
4. **Identical internal linking patterns** — every city page links to the same 5 service pages with the same anchor text.
5. **No unique local proof** — no real photos taken in that city, no real reviews from that city, no real case studies, no neighborhood-specific info.
6. **No actual physical presence or service distinction** — the page exists purely to capture the geo modifier.

What does NOT trigger doorway classification (per Mueller, Aug 2022 + March 2024):
- Genuine multi-location businesses with one page per real location.
- Service-area pages that include unique local content even if the core service description repeats.
- Reusing your "About us" and core service copy across city pages — Mueller has explicitly said this is fine.

**The line:** Doorway = "page exists for the search engine." Legitimate location page = "page exists because we genuinely serve this city and have something specific to say about it."

---

## 5. Canonical strategy for service × city pages

Recommended pattern for a fresh restoration domain:

- **Self-canonical every service-city page.** `<link rel="canonical" href="https://example.com/water-damage/bloomfield" />` pointing to itself. Do NOT canonical city pages back to a parent service hub — you lose the geo-relevance signal entirely and the page won't rank for "water damage Bloomfield."
- **Absolute URLs, HTTPS, trailing-slash consistency.** Pick one and never mix.
- **One canonical per page, in `<head>` only, before any client-side hydration that could rewrite it.** Next.js App Router: set in metadata export, not in client components.
- **Submit all canonicals in sitemap.xml.** Sitemap inclusion is one of the ~40 canonical signals.
- **Do NOT use rel=canonical to "consolidate" thin city pages.** If they're thin enough that you're tempted to canonical them away, delete them or merge them. Canonicaling a thin page to a stronger page tells Google the thin page existed and was admittedly redundant — that's a doorway confession.
- **hreflang not relevant** for single-country US restoration sites.
- **Avoid noindex on city pages** unless you're killing them. noindex still costs crawl budget and signals low quality at the directory level.

(Sources: Search Engine Land "Canonicalization and SEO: A guide for 2026"; Google Search Central canonicalization docs; Mueller SEO office hours Feb 2024.)

---

## 6. Concrete differentiation tactics (in priority order)

These are the tactics that actually move the unique-content ratio above the SimHash threshold AND signal "real local business" to SpamBrain. Do them in order; the first three matter more than the last four combined.

**1. Original photography from the actual city.** Geotagged EXIF, original filenames (`bloomfield-mi-basement-flood-2026-03.jpg`, not `service-1.jpg`), descriptive alt text mentioning the neighborhood. 4–8 unique photos per location page. This is the single highest-ROI differentiator because (a) SpamBrain checks image originality via perceptual hashing, (b) image search becomes a second discovery channel, and (c) it's almost impossible to fake at scale. Restoration is visual — use it.

**2. Real, named case studies with addresses redacted to street level.** "March 2026: 2,400 sq ft basement flood on Lone Pine Rd after the Rouge River backup. Extracted 18 inches standing water, deployed 14 LGR dehus and 22 air movers, dry standard hit in 4 days. Homeowner's State Farm adjuster approved Xactimate line items X, Y, Z." Two of these per page = 300+ unique words that cannot exist on any sibling page.

**3. Neighborhood-level content, not city-level.** Bloomfield Township has Birmingham, Bloomfield Hills, Franklin, Beverly Hills, West Bloomfield as adjacent. Name the subdivisions you serve (Wing Lake, Echo Park, Charing Cross). Name the school districts. Name the ZIP codes (48301, 48302, 48304). This is data Google can verify against Maps and SpamBrain rewards because spam doorways never have it.

**4. Local hazard data.** Flood plain maps, historical storm dates, the 2014 Metro Detroit flood, sewer-backup hotspots, frozen-pipe incidence in February. Pull from FEMA, NOAA, local news. 150–250 words per page of actual local technical content.

**5. Custom FAQs per city.** Not spun. Each city gets 4–6 FAQs that reflect actual local questions: "Does Bloomfield Township require a permit for water mitigation work?" "Which Bloomfield insurance carriers do you bill directly?" "How fast can you get to West Bloomfield from your Maple Rd office?" Answers must be specific and accurate.

**6. Embedded local proof.** Google Maps embed centered on the city (not your office). Real Google Business Profile reviews filtered to that city if possible. Local schema (LocalBusiness + Service + areaServed with the specific city as a Place).

**7. Unique meta + H1 + intro paragraph per page** is table stakes, not a tactic. It's necessary but nowhere near sufficient.

What does NOT work: synonyms-spinning the service description, AI-paraphrasing the same paragraph 12 ways, reordering the same bullet points, rewriting "we offer water damage restoration" into 15 variants. SimHash sees through all of it.

---

## 7. Fresh-domain behavior: indexing patience and crawl budget

Google's official position (Mueller, repeatedly): there is no "sandbox." Practical reality: new domains experience 2–6 months of slow crawling, slow indexing, and unstable rankings. Call it whatever you want; budget for it.

What to expect on a brand-new restoration domain:

- **Weeks 1–2:** Homepage indexed within days if submitted to GSC and linked from anywhere. Inner pages may sit in "Discovered – currently not indexed" or "Crawled – currently not indexed."
- **Weeks 2–8:** Crawl budget is tiny (a few dozen URLs/day). Google will pick a handful of pages to actually index and ignore the rest until trust accumulates.
- **Months 2–6:** Gradual expansion of indexed set if pages prove unique and useful. This is when the dedup pipeline does most of its work on your site — pages that were borderline get collapsed.
- **Months 4–9:** Local pack visibility starts if GBP is verified, NAP is consistent everywhere, and there are real reviews.

Crawl budget rules for fresh small sites (Search Central crawl budget docs):
- Crawl budget is determined by **crawl capacity** (your server's response time/health) and **crawl demand** (how interesting Google thinks your URLs are).
- For a small site (<10K URLs), crawl budget is essentially unlimited *if demand exists*. The bottleneck on a fresh restoration site is demand, not capacity.
- Demand is driven by: external links, internal link depth, sitemap freshness, content uniqueness, and click-throughs from existing impressions.

Tactics to compress the timeline:
1. **Don't launch with 50 city pages.** Launch with 1 homepage + 1 flagship city page + 3–5 service pages. Get them indexed and ranking. Then add the next city. Programmatic dumps of 50 thin pages on day 1 is the single biggest doorway-flag trigger.
2. **Submit sitemap to GSC immediately.** Use the URL Inspection tool to manually request indexing for the 3–5 most important pages.
3. **Get one real backlink fast.** A local chamber, a supplier, a partner restoration contractor, a press mention. One DR-30+ link compresses the trust timeline meaningfully.
4. **Verify GBP and link it from the homepage and the matching city page.** GBP verification is one of the strongest fresh-domain trust signals for local service businesses.
5. **Don't mass-build internal links to thin pages.** If a page isn't ready, don't link to it from the nav. Internal links are crawl invitations; wasted invitations burn budget.
6. **Server speed matters more than people think on fresh domains.** Slow TTFB throttles crawl capacity directly. Vercel edge or equivalent, not shared hosting.
7. **Watch GSC's "Pages" report weekly.** "Crawled - currently not indexed" on a city page after 4+ weeks = that page failed the quality bar. Either improve it substantially or remove it. Leaving it up drags the site's overall quality classification down (Helpful Content System operates at the site level, not the page level).

---

## TL;DR for the Provail/Bloomfield context

- One real city page per real city. Not 30. Not 12. Start with 1–2 and earn the right to add more.
- 600+ words of unique main content per page, ≥50% different from siblings.
- Original photos, real case studies, neighborhood/ZIP/subdivision detail, custom FAQs.
- Self-canonical, absolute URL, in `<head>` via Next.js metadata export.
- Boilerplate (header/footer/nav/NAP/trust bar) can be 100% identical — don't waste effort spinning it.
- Expect 2–6 months before the second and third city pages get traction. Don't panic-add more pages to fix slow indexing — that's how doorway penalties happen.

---

## Sources

- Google Search Off the Record podcast, "How Google handles duplicate content" (Gary Illyes, 2020) — https://developers.google.com/search/podcasts
- Google Search Central, "An update on doorway pages" (2015, still canonical) — https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages
- Google Search Central spam policies (doorways) — https://developers.google.com/search/docs/essentials/spam-policies
- Google Search Central, "Large site owner's guide to managing your crawl budget" — https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget
- Search Engine Journal, "When Is Duplicate Content Acceptable For Local SEO? Google Explains" (Mueller quotes) — https://www.searchenginejournal.com/when-is-duplicate-content-acceptable-for-local-seo-google-explains/519562/
- Search Engine Journal, "Google's Centerpiece Annotation" — https://www.searchenginejournal.com/centerpiece-annotation/424152/
- Search Engine Land, "Canonicalization and SEO: A guide for 2026" — https://searchengineland.com/canonicalization-seo-448161
- Manku, Jain, Sarma, "Detecting Near-Duplicates for Web Crawling," WWW 2007 (Google's SimHash deployment paper) — https://research.google/pubs/detecting-near-duplicates-for-web-crawling/
- BrightLocal, "How to Craft Unique and Helpful Location Pages" — https://www.brightlocal.com/learn/location-pages/
- RicketyRoo, "Location Pages: What Crosses the Line to Doorway Abuse" — https://ricketyroo.com/blog/location-page-spam/
- Orbit Media, "How to Avoid Google's Doorway Page Spam Penalty" — https://www.orbitmedia.com/blog/doorway-pages-seo/
- Google API leak analysis (May 2024), Mike King / iPullRank — context on canonical signals and site-quality scoring.
