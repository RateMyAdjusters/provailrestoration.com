# E-E-A-T & YMYL for Property Restoration Sites (2025-2026)

Research notes for PROVAIL Water Damage Restoration Bloomfield. Sources at end.

---

## 1. Is Property Restoration YMYL?

**Yes — and more squarely than most contractors realize.** Google's Search Quality Rater Guidelines (last updated September 11, 2025) define YMYL ("Your Money or Your Life") as topics that can affect a user's health, financial stability, safety, or well-being. Property restoration sits at the intersection of **three** YMYL categories simultaneously:

1. **Financial** — restoration jobs are typically $3K-$50K+ and involve insurance claims, deductibles, and depreciation. A bad contractor recommendation has direct monetary harm.
2. **Health & Safety** — Category 2 (gray) and Category 3 (black) water per IICRC S500, mold remediation per IICRC S520, sewage backups, and Cat 3 contaminants (bacteria, viruses, biohazards) all carry documented health risks. The September 2025 QRG update reaffirmed that "safety topics are almost always YMYL" and "product safety related to repair and maintenance" is in scope.
3. **Housing** — Google explicitly lists housing-related legal and maintenance disputes as YMYL.

**Implication:** Google's raters apply *stricter* E-E-A-T scrutiny to restoration pages than to a typical local-services site (e.g., landscaping or window cleaning). Thin, generic "we do water damage" pages with stock photos and no author/credentials will be rated Low or Lowest under the QRG, which feeds Google's algorithmic models. PROVAIL must treat its content the way a medical or legal site would.

---

## 2. Experience Signals (the first "E" — added in 2022, weighted heavily for YMYL)

Experience means *first-hand, on-the-ground* evidence the business has actually done the work. For a restoration company this is the highest-leverage signal because it's hard to fake and most competitors skip it.

**Tactics that demonstrably move the needle:**

- **Real project photos with EXIF intact.** Don't strip metadata. A photo with a Bloomfield Township GPS tag from a recent date is a strong authenticity signal. Avoid the temptation to over-compress.
- **Before / during / after sequences** for actual jobs. A single before/after pair is weak; a 4-photo sequence (initial damage → containment + air movers placed → demo → restored) tells a story only a real crew can produce.
- **Case studies with specifics:** ZIP code (or neighborhood), loss type, IICRC water category, equipment count ("8 air movers, 2 LGR dehus, 72-hour drying log"), insurance carrier (only with permission), and total drying time.
- **Technician bios** with face photos, years on crews, and certifications — but **only real ones**. List the IICRC certification number where possible; IICRC has a public verification tool, and Google's helpful content systems increasingly cross-reference verifiable claims.
- **Job-site videos** under 60 seconds, vertical, with ambient audio (air movers running). These also feed YouTube → Google universal results.
- **Moisture readings, psychrometric charts, daily drying logs** redacted and embedded as PDFs or images. No competitor in Bloomfield is doing this.

---

## 3. Expertise Signals

Expertise is *credentialed knowledge*. For YMYL restoration content, Google wants to see who wrote/reviewed the content and why they're qualified.

- **Author bylines on every substantive page** (services, blog, FAQs). Not "admin" or "PROVAIL Team." A real human with a /team/[name] bio page.
- **Credential display in the byline** — IICRC WRT (Water Restoration Technician), ASD (Applied Structural Drying), AMRT (Applied Microbial Remediation Technician), CDS (Commercial Drying Specialist). Link each to its IICRC definition page.
- **"Reviewed by" line** — even better than authored. "Written by [marketing/owner], reviewed by [Lead Tech, IICRC #XXXXXXX] on [date]."
- **Process documentation** that references the relevant standard by name: "Per IICRC S500-2021, Category 2 water requires removal of porous materials within 48 hours of exposure." Specific, sourced statements rank dramatically better in AI Overviews than generic copy.
- **Insurance-claim expertise** — Xactimate familiarity, working knowledge of ACV vs RCV, supplements. This is hard-won knowledge competitors fake.

---

## 4. Authoritativeness

Authoritativeness is *what others say about you* — citations, mentions, links, associations.

- **Cite the standards bodies by name and link them:**
  - IICRC S500-2021 (water damage)
  - IICRC S520-2024 (mold remediation, fourth edition)
  - IICRC S700 (fire and smoke)
  - EPA mold guidance (epa.gov/mold)
  - CDC flood cleanup guidance
  - OSHA bloodborne pathogen standards (for biohazard work)
  - Michigan LARA contractor licensing
- **Industry association memberships** — RIA (Restoration Industry Association), local BNI, Bloomfield Chamber of Commerce, Better Business Bureau (with live A+ badge linked to the BBB profile, not a PNG).
- **Press mentions and earned media** — local newspapers (Oakland Press, Hometown Life), insurance trade pubs (Cleanfax, R&R Magazine, Restoration & Remediation). One real link from each is worth dozens of directory listings.
- **Manufacturer partner pages** — Phoenix, Dri-Eaz/Legend Brands, Drieaz.com sometimes lists certified dealers. Get listed.
- **Carrier/TPA networks** — Contractor Connection, Alacrity, Code Blue. Being on these networks is itself an authority signal even if the listing isn't crawlable, because reviewers verify.

---

## 5. Trust Signals (the most important "T" — Google has stated T is the centerpiece of E-E-A-T)

Trust is the foundation. Without it, the other three don't matter.

**Baseline (table stakes — failing any of these = Low rating):**
- HTTPS sitewide, valid cert, no mixed content
- Privacy Policy, Terms of Service, and Accessibility Statement (ADA — separate legal exposure)
- Physical street address visible in footer on every page (4060 W Maple Rd, Bloomfield Township, MI 48301)
- Local phone number, click-to-call, *consistent everywhere* — (248) 531-8404
- Hours of operation, including 24/7 emergency line clarification
- Direct link to verified Google Business Profile
- Michigan contractor license number visible in footer
- General liability + workers' comp insurance certificate available on request (state it)

**Higher-tier trust:**
- **Real reviews embedded** — Google reviews via API or a verified widget that pulls live, not screenshots. NEVER fabricated. Google's spam systems and rater guidelines explicitly target fake review patterns.
- **Review responses** visible on the page or linked to the GBP — shows engagement.
- **Photos of the actual building** (4060 W Maple Rd) with the truck/signage, ideally taken at different times of year.
- **Crew uniforms in photos** matching the brand.
- **Warranty / guarantee language** with specific terms, not vague "satisfaction guaranteed."
- **Insurance billing transparency** — explain you bill insurance directly, what the homeowner pays, and when.

---

## 6. Schema Markup (JSON-LD)

Google's 2025-2026 guidance favors *layered* schema. Pages with 3-4 complementary types are cited 2x more often in AI Overviews than single-schema pages.

**For PROVAIL specifically, implement:**

1. **Organization** (sitewide, in root layout) — legal name, logo, sameAs links to GBP, Facebook, BBB profile, Yelp.
2. **LocalBusiness → HomeAndConstructionBusiness** (more specific subtype than generic LocalBusiness; Google rewards specificity). Include `@id` so it can be referenced. Fields: name, address, geo, telephone, openingHoursSpecification (24/7 for emergency), areaServed (array of cities/ZIPs), priceRange.
3. **Service** — one per service offering (water damage, mold remediation, fire damage, sewage cleanup). Each linked to the parent provider via `provider: { @id }`.
4. **Person** for each technician/author. `jobTitle`, `hasCredential` (use `EducationalOccupationalCredential` with credential category "certification" and the IICRC cert name).
5. **FAQPage** on every service and location page. **Highest-value addition for AI Overview citation.** Use real customer questions from sales calls, not made-up ones.
6. **BreadcrumbList** on every nested page.
7. **AggregateRating** — only if the review count is real and embedded with the actual reviews. Bare aggregateRating without visible review markup is a guidelines violation in 2025.
8. **WebSite** with `potentialAction` for sitelinks search.

**Critical:** Schema must match visible page content exactly. Google's spam team specifically targets schema/content mismatches as of the October 2025 spam update.

---

## 7. Red Flags to Avoid (any one of these can sink a YMYL site)

- **Fake or expired IICRC certifications.** IICRC numbers are verifiable. Listing a credential the company doesn't hold is fraud and a manual-action risk.
- **Stock photos only.** Reverse-image search will catch them; raters are trained to spot it. A stock photo on a "before/after" claim is dishonest and hits Lowest rating.
- **Unsourced health claims about mold.** "Black mold causes cancer" / "toxic mold syndrome" — unless you cite CDC, EPA, or peer-reviewed sources, don't say it. Misinformation on YMYL health topics is the QRG's #1 example of Lowest-quality content.
- **NAP inconsistency** — even small variations ("Suite 200" vs no suite, "Rd" vs "Road") fragment local trust signals across GBP, BBB, Yelp, Apple Maps, Bing Places.
- **Doorway pages** — generated city pages that are 90% identical with city name swapped. Google's helpful content systems demolished this pattern in 2024-2025. Each location page must have unique on-the-ground content.
- **AI-generated content with no human review** on YMYL topics. The September 2025 QRG update added explicit examples here.
- **Hidden ownership** — no "About" page, no owner name, no team. Anonymous restoration sites are treated as low-trust by default.
- **Auto-approved or paid reviews.** Both manual-action triggers; this is exactly what the RateMyAdjusters penalty hit.

---

## 8. AEO / AI-Mode Optimization (2026)

Google AI Overviews, ChatGPT Search, Perplexity, and Gemini all extract from the same surface signals: clean semantic HTML, clear question-answer structure, and citable factual blocks.

**Tactical patterns that get cited:**

- **Direct-answer paragraphs** at the top of each section. The first 40-60 words after an H2 should answer the H2 as a complete sentence. AI extractors lift this verbatim.
- **Question-format H2s and H3s** mirroring how customers actually ask ("How long does water damage take to dry?" — not "Drying Times").
- **Definition lists** (`<dl><dt><dd>`) for terminology. AI parsers love these.
- **Tables** for comparative info (Cat 1 vs Cat 2 vs Cat 3 water, drying classes 1-4).
- **Proper semantic HTML** — `<article>`, `<section>`, `<address>`, `<time datetime="...">`. No div soup.
- **Numbered process steps** (`<ol>`) for "how it works" content. Cited in AI Overviews ~3x more than bulleted prose.
- **Local entity reinforcement** — every page should mention "Bloomfield Township," "Oakland County," and at least one neighborhood (Bloomfield Hills, Birmingham, West Bloomfield) naturally in the content. AI mode personalizes by region; entity proximity matters.
- **llms.txt** at the site root (emerging 2025-2026 convention) listing key pages and a one-line description of the business for LLM crawlers.
- **Citation magnetism** — publish one truly original asset (a Bloomfield-specific drying-time table by ZIP based on actual jobs, or a flood-risk map of Oakland County). Original data gets cited; opinion pieces don't.

Categories with low local AEO competition (most Michigan restoration markets in 2026 qualify) can establish citation dominance in 90-120 days, vs 6-12 months for traditional ranking.

---

## 9. Actionable PROVAIL Checklist

### Site-wide foundations
- [ ] Footer on every page: "PROVAIL Water Damage Restoration Bloomfield, 4060 W Maple Rd, Bloomfield Township, MI 48301 · (248) 531-8404"
- [ ] Michigan contractor license # added to footer
- [ ] HTTPS verified, no mixed content warnings
- [ ] Privacy Policy, Terms, Accessibility Statement pages live
- [ ] Live link to Google Business Profile
- [ ] BBB A+ badge linking to live BBB profile (not an image)
- [ ] llms.txt at root

### Trust & credentials
- [ ] Owner/founder bio page with real photo, story, years in industry
- [ ] At least 3 technician bios with IICRC cert numbers (only if real and verifiable)
- [ ] "Reviewed by [Lead Tech, IICRC WRT/ASD #XXXX]" on every service page
- [ ] Live Google reviews widget pulling real reviews (not screenshots)
- [ ] Insurance + bonded statement with carrier name available on request

### Experience evidence
- [ ] 10+ real project photo sets (before / during / after) from actual Bloomfield jobs, EXIF intact
- [ ] 3-5 written case studies: loss type, neighborhood, IICRC water category, equipment, drying time, outcome
- [ ] 2-3 short vertical job-site videos with crew on camera
- [ ] Photos of 4060 W Maple Rd building exterior + branded truck

### Content per service page (water, mold, fire, sewage)
- [ ] Author byline + reviewer line with credential
- [ ] Direct-answer opening paragraph (40-60 words)
- [ ] Reference the relevant IICRC standard by name (S500 / S520 / S700) and link iicrc.org
- [ ] One CDC or EPA citation where health is discussed
- [ ] FAQ section (6-10 real customer questions) with FAQPage schema
- [ ] Local entity mentions: Bloomfield Township + Oakland County + 2 neighborhoods
- [ ] Numbered process steps in `<ol>`

### Schema (JSON-LD)
- [ ] Organization (root layout)
- [ ] HomeAndConstructionBusiness LocalBusiness on homepage + /bloomfield
- [ ] Service schema for each offering
- [ ] Person schema for each technician bio
- [ ] FAQPage on every service + location page
- [ ] BreadcrumbList sitewide
- [ ] AggregateRating only with visible matching reviews

### Authority outreach (90-day plan)
- [ ] Get listed on Contractor Connection / Alacrity / Code Blue networks
- [ ] Join RIA + Bloomfield Chamber + BNI chapter
- [ ] One press pitch to The Oakland Press (storm season angle)
- [ ] One guest article on Cleanfax or R&R Magazine
- [ ] Manufacturer partner listings (Phoenix, Legend Brands)

### Red-flag audit (do this first)
- [ ] No fake or unverifiable IICRC numbers anywhere on site
- [ ] No stock photos labeled as project work
- [ ] No "toxic mold syndrome" or unsourced health scare language
- [ ] NAP byte-for-byte identical across site, GBP, BBB, Yelp, Apple Maps, Bing Places
- [ ] No AI-generated city doorway pages
- [ ] No fake or auto-approved reviews

---

## Sources

- [Google Search Quality Rater Guidelines (Sept 11, 2025)](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf)
- [Search Engine Land — YMYL guide](https://searchengineland.com/guide/ymyl)
- [Search Engine Land — Sept 2025 QRG update on AI Overviews & YMYL](https://searchengineland.com/google-updates-search-quality-raters-guidelines-adding-ai-overview-examples-ymyl-definitions-461908)
- [IICRC S500 — Water Damage Restoration Standard](https://iicrc.org/s500/)
- [IICRC S520 — Mold Remediation Standard](https://iicrc.org/s520/)
- [Storm Restoration Authority — IICRC standards overview](https://stormrestorationauthority.com/iicrc-standards-storm-restoration)
- [The RMG — Local SEO for Restoration Companies 2025](https://the-rmg.com/local-seo-strategies-for-restoration-companies/)
- [Restoration Digital Marketing — AI Search & GEO for Restoration](https://restorationdigitalmarketing.com/ai-search-water-damage/)
- [Clicks Geek — SEO for Water Damage Restoration](https://clicksgeek.com/seo-for-water-damage-restoration/)
- [Hashmeta — LocalBusiness schema implementation guide](https://hashmeta.com/blog/local-business-schema-complete-implementation-guide-for-maximum-visibility/)
- [eseospace — Schema markup for contractor websites](https://eseospace.com/blog/schema-markup-for-contractor-websites/)
- [ALM Corp — AEO vs SEO 2026 Strategy Guide](https://almcorp.com/blog/aeo-vs-seo-2026-complete-strategy-guide/)
- [HubSpot — Answer Engine Optimization trends 2026](https://blog.hubspot.com/marketing/answer-engine-optimization-trends)
