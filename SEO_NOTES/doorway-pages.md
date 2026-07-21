# Google Doorway Pages Policy — Research Brief (2024–2026)

**Prepared for:** PROVAIL Restoration (Michigan water/fire damage)
**Date:** April 14, 2026
**Scope:** Building ~20 location pages without tripping doorway/scaled-content enforcement.

---

## 1. Current Policy Language (Verbatim)

Google Search Central, Spam Policies (last updated 2026-04-13):

> **Doorway abuse** is when sites or pages are created to rank for specific, similar search queries. They lead users to intermediate pages that are not as useful as the final destination.

Google's listed examples of doorway abuse:

- Multiple websites with slight URL variations targeting specific queries
- Multiple domain names or pages that target specific regions or cities and funnel users to one page
- Pages generated to funnel visitors to the actual usable or relevant portion of a site
- Substantially similar pages closer to search results than a clearly defined, browseable hierarchy

Companion policy — **Scaled content abuse**:

> Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users.

Examples Google calls out: AI-generated pages without added value, scraping with light transforms, stitched content from multiple sources without substantial added value, multiple sites hiding the scaled nature of content, and pages with little sense to readers but loaded with search keywords.

Source: <https://developers.google.com/search/docs/essentials/spam-policies>

---

## 2. Algorithmic (SpamBrain) vs Manual Action

**Algorithmic enforcement is the dominant 2024–2026 reality.** Since the March 2024 Core Update — when Google rolled the Helpful Content System into the core ranking signals and expanded SpamBrain — virtually all doorway-page takedowns happen silently:

- **No GSC notification.** Pages quietly drop out of the index or lose all rankings.
- **SpamBrain** is the AI classifier flagging templated near-duplicates and "thin local pages." It works at the page-cluster level — so 20 pages share fate, not individually evaluated.
- **Manual actions** still exist (Search Console → Security & Manual Actions → "Doorways") but are reserved for egregious networks: hundreds/thousands of doorways, PBNs, or repeat offenders. Small contractor sites almost never get manual actions; they get algorithmically buried instead.
- **Recovery from algorithmic suppression** typically requires consolidation + rewriting + waiting for the next core update (3–6 months minimum). Manual actions are faster to lift once fixed via reconsideration request.

Danny Sullivan (Google), Nov 2022, still operative guidance:
> "We haven't said AI content is bad. We've said, pretty clearly, content written primarily for search engines rather than humans is the issue."

---

## 3. Real Case Studies — Restoration / Home Services / Legal

### Case A: Regional HVAC company, March 2024 Core Update
Documented in industry post-mortems: company had ~120 city pages built from a single template with the city name swapped. **80%+ of doorway pages lost rankings** after the March 2024 Core Update; organic traffic dropped **63% in 30 days**. Recovery began only after they consolidated into a smaller set of comprehensive location-specific pages with unique content and per-area customer reviews. (Source: Manning Search Marketing case write-up; HVAC vertical.)

### Case B: Service-area businesses, Sept–Oct 2022 spam update (still cited as the canonical event)
Multiple SAB sites — landscaping, roof repair, restoration — saw **mass deindexing of location pages "seemingly overnight."** Lower-authority domains were hit hardest. No manual actions were issued; pages simply vanished from the index. Higher-authority sites with genuinely unique location content were spared.
Source: <https://searchengineland.com/location-pages-google-october-spam-update-390016>

### Case C: 1,300-city SEO strategy rejected by John Mueller
An SEO publicly asked Mueller about building 1,300 city-based landing pages to rank for "[service] + [city]." Mueller's response: *"That sounds like doorway pages and isn't something I'd recommend."*
Source: <https://www.seroundtable.com/google-city-landing-pages-doorway-pages-28670.html>

### Case D: RateMyAdjusters / ClaimCheck network (your own portfolio)
Per the internal post-mortem in this workspace (`ratemyadjusters_penalty.md`), the site was penalized in part due to **doorway-style city pages combined with auto-approved review templates**. This is the closest-to-home warning: Google's classifiers do catch templated location pages even on niche directory sites.

---

## 4. How To Build Location Pages At Scale — Legitimately

Mueller has repeatedly clarified there's nothing inherently wrong with location pages. The policy targets **pages that exist only to rank**, not pages that exist to serve a real local audience. The legitimate path:

1. **Start from real service area, not a keyword list.** If PROVAIL doesn't actually dispatch trucks to a city within 30 minutes, don't build a page for it.
2. **One page per city you genuinely serve** — not per keyword variation. "Water damage Bloomfield" and "flood cleanup Bloomfield" share one page, not two.
3. **Hub-and-spoke structure.** Main `/services/water-damage-restoration` is the authoritative hub; `/locations/bloomfield-township` is the spoke with local proof, linking back to the hub for technical depth.
4. **Genuine-Local-Relevance Test (apply to every page before publishing):** *Would a human in this city find something here they couldn't find on the homepage?* If no, don't ship it.
5. **Differentiation must be substantive**, not cosmetic. Swapping the H1 city name and a stock photo is exactly the pattern SpamBrain is trained to detect.

---

## 5. Per-Location Differentiation Requirements

Every location page should have **at minimum** the following unique elements — not boilerplate:

- **Unique neighborhood/landmark mentions** (3–5 per page): subdivisions, school districts, ZIP codes, major roads, common housing stock (e.g., "Bloomfield's mid-century split-levels are prone to basement seepage at the rim joist").
- **Real local project case studies**: at least 1–2 anonymized jobs done in that exact city. Address-level isn't required; "1950s ranch off Telegraph" is fine.
- **Geotagged imagery**: original photos from real PROVAIL jobsites in that area, with EXIF GPS preserved or schema `contentLocation` set. Stock photography is a doorway-page tell.
- **Custom FAQs** answering questions specific to that municipality: local building codes, IICRC + city permit interactions, average insurance carriers in the area, drying-time differences for local construction (lath-and-plaster vs drywall, fieldstone vs poured basements).
- **Genuine service-area differences**: response time from nearest crew, which subcontractors/inspectors are local, which insurance adjusters PROVAIL has working relationships with in that county.
- **Local proof signals**: 2–3 reviews mentioning that city by name, embedded GBP map for that service area, local phone if you have one (else a clear "dispatched from [hub]" disclosure).
- **Internal links to nearby pages** (the hub-and-spoke web), not just up to the homepage.

---

## 6. The "One Page Per City" Myth

The myth: "You need one landing page per city to rank in local search."

The reality (per Mueller, multiple statements 2015–2024):
- **Google Business Profile** is what ranks you in the map pack — not the website page.
- A single well-built service-area page on a strong domain often outranks 50 thin city pages.
- Mueller: *"You can't simply swap out the city name or a few pictures and call it good."*
- Mueller: Google calls anything a doorway page if *"many different keywords guide users to exactly the same content at the end of that journey."* — i.e., if all 20 city pages funnel to the same `/contact` form with no local handoff, that's the doorway pattern.

The myth persists because city pages **do** sometimes work — when they're not actually doorway pages. The thing that worked was the unique local content, not the URL count.

---

## 7. Safe Patterns

- **Hub-and-spoke**: one deep service hub + a small set of fully differentiated location spokes.
- **Service × Region matrices only when both axes are real**: don't generate 5 services × 20 cities = 100 pages. Build the 5 service hubs deeply, then 8–12 city spokes that each cover all 5 services in local context.
- **Location pages that double as landing pages for paid traffic**: forces you to write conversion copy, which inherently differentiates.
- **Real review aggregation per page**: pulling distinct GBP reviews mentioning that city.
- **Editorial cadence**: blog posts about real local storms/flood events in those cities, internally linked to the matching location page. This creates "freshness + local relevance" signals SpamBrain can't fake-detect.

---

## 8. Unsafe Patterns (Avoid)

- **Templated city-name swap.** Same H1, same H2s, same paragraphs, only the city name changes. This is the textbook doorway pattern and SpamBrain is explicitly tuned for it.
- **Programmatic auto-generation** from a CSV of cities + a Mustache template. Even if the writing is good, the structural sameness across pages is the signal.
- **AI-generated location pages** at scale without human editing and real local facts. Falls under both Doorway Abuse and Scaled Content Abuse.
- **Minimum-viable differentiation** (changing 5% of the words). The classifier looks at semantic similarity, not Levenshtein distance.
- **Multiple domains for nearby cities** (`bloomfieldwaterdamage.com`, `troywaterdamage.com`, `birminghamwaterdamage.com`) all funneling to the same brand. This is explicitly listed in Google's doorway examples.
- **Pages targeting cities you don't actually serve.** If lead handoff just punts to the same hub crew, it's a doorway by Mueller's "same funnel afterward" definition.
- **Footer link farms** linking to all 20 city pages from every page. Makes the doorway network visible to crawlers.

---

## 9. Actionable Checklist — PROVAIL Restoration (~20 Michigan Pages)

**Pre-build (before writing a single page):**
- [ ] List the 20 candidate cities. Strike any where PROVAIL can't dispatch a real crew in <60 minutes. If that leaves <20, **don't backfill** — ship fewer pages.
- [ ] For each surviving city, list: 3 neighborhoods/landmarks, 1 real recent job, 2 local building-stock notes, 1 local insurance/adjuster note, 1 weather/flood pattern note. If you can't fill this card, kill the page.
- [ ] Confirm GBP service area covers each city. Local SEO actually flows through GBP, not the page.

**Page structure (per location):**
- [ ] Unique H1 referencing city + service + a local hook (not just "Water Damage Restoration in [City], MI")
- [ ] 600+ words of locally-specific copy (not boilerplate). Mention neighborhoods, ZIPs, building stock, weather.
- [ ] 1–2 anonymized real local project case studies with photos
- [ ] 3+ original geotagged jobsite photos (no stock)
- [ ] 4–6 FAQs unique to that city (codes, carriers, response time, drying considerations)
- [ ] Embedded GBP map for the service area
- [ ] 2–3 reviews mentioning that city by name
- [ ] Local response-time commitment + which crew base serves it
- [ ] LocalBusiness schema with `areaServed` set to that city, not the whole state
- [ ] Internal links to 2–3 nearby city pages + the service hub (not a full footer dump)

**Anti-doorway sanity checks (run before publish):**
- [ ] Strip the city name from two pages and diff them. If the remaining content is >70% identical, **rewrite**.
- [ ] Read the page aloud as if you live in that city. Does anything actually apply specifically to you? If no, rewrite.
- [ ] Confirm the conversion path isn't identical across pages — different testimonial, different local CTA, different dispatch language.
- [ ] Don't ship all 20 in one push. Ship 5, wait 2 weeks, monitor GSC indexing + impressions, then ship the next batch. Bulk launches trip scaled-content classifiers.

**Ongoing (post-launch):**
- [ ] Add 1 new local project / review / blog post per city per quarter. Stale doorways get re-flagged at the next core update; living pages don't.
- [ ] Monitor GSC Pages report for any city pages dropping out of "Indexed." Drop = early SpamBrain warning. Consolidate or rewrite within 30 days.
- [ ] Never replicate this pattern across multiple PROVAIL domains. One brand, one site, one set of location pages.

---

## Sources

- Google Search Central — Spam Policies: <https://developers.google.com/search/docs/essentials/spam-policies>
- Search Engine Land — Location pages in Google's crosshairs: <https://searchengineland.com/location-pages-google-october-spam-update-390016>
- Search Engine Roundtable — Google warns city landing pages can be doorway pages: <https://www.seroundtable.com/google-city-landing-pages-doorway-pages-28670.html>
- Manning Search Marketing — What are doorway/gateway pages (HVAC case study): <https://www.manningmarketing.com/articles/what-are-doorwaygateway-pages/>
- I Love SEO — "Same funnel afterward" Mueller quote: <https://iloveseo.com/seo/google-we-call-pages-doorway-pages-if-they-lead-to-the-same-funnel-afterwards/>
- Local Search Forum — Creating local SEO content (avoiding doorway pages): <https://localsearchforum.com/threads/creating-local-seo-content-avoiding-doorway-pages.51828/>
- Internal: `memory/ratemyadjusters_penalty.md` — RateMyAdjusters doorway-page post-mortem
