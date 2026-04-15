# Google Search Console Monitoring & Ranking Recovery Playbook

**Site:** provailrestoration.com
**Scope:** Fresh domain, ~17 pages rolling out in 2026 (homepage, service pages, location pages incl. `/bloomfield`, `/macomb`)
**Author note:** Bloomfield NAP — (248) 531-8404, 4060 W Maple Rd, Bloomfield Township MI 48301. Macomb NAP — (586) 207-9091, 51225 Romeo Plank Rd, Macomb MI 48042.

This document is the operating manual for GSC from the day the domain is verified through the first 90 days, plus the "what to do when things go wrong" runbook.

---

## 1. Week 1 GSC Setup

A fresh domain has zero crawl history. Every hour you delay setup is an hour Googlebot is guessing. Do all of this on Day 1 of DNS going live.

### 1.1 Property verification — use Domain property, not URL prefix
Create a **Domain property** (`provailrestoration.com`) instead of a URL-prefix property. A Domain property covers `http`, `https`, `www`, non-`www`, and every subdomain in one report. This is the only way to catch accidental duplicate-host indexing (e.g. `www.provailrestoration.com` and apex both serving 200s).

- GSC → Add property → Domain → enter `provailrestoration.com`
- Copy the TXT record, add it to DNS (Cloudflare / Vercel DNS / registrar)
- Verify
- Docs: [Verify your site ownership](https://support.google.com/webmasters/answer/9008080)

Also add the user who will monitor the site as an **Owner** (not Full User) so they can submit reconsideration requests later.

### 1.2 Sitemap submission
Vercel/Next.js should generate `sitemap.xml` at the domain root. Before submitting:

1. Open `https://provailrestoration.com/sitemap.xml` in a browser — confirm it lists all 17 pages, each with `<loc>`, `<lastmod>`, and absolute HTTPS URLs.
2. Confirm `robots.txt` is not blocking anything: `https://provailrestoration.com/robots.txt` should include `Sitemap: https://provailrestoration.com/sitemap.xml`.
3. GSC → Sitemaps → paste `sitemap.xml` → Submit.
4. Expect the "Couldn't fetch" status to resolve within 24–48 hours. Ignore "Couldn't fetch" for two days before panicking.

Docs: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) · [Sitemaps report](https://support.google.com/webmasters/answer/7451001)

### 1.3 URL Inspection for the hero pages
Don't wait for Google to find the site organically. For the 5 pages that matter most (homepage, `/bloomfield`, `/macomb`, water-damage service, fire service), run **URL Inspection → Request Indexing** one by one. This pushes them into the priority crawl queue and typically indexes within hours.

Docs: [URL Inspection tool](https://support.google.com/webmasters/answer/9012289)

### 1.4 Email alerts
GSC → Settings → User preferences → enable **all email notifications**. This is the channel for manual actions, security issues, and severe coverage regressions. Add the on-call email (`info@primerestorationllc.com`) and the owner.

### 1.5 Wire up ancillary tools on Day 1
- **Bing Webmaster Tools** — import the GSC property in one click; free traffic and crawl data.
- **Google Analytics 4** — link to the GSC property (GA4 Admin → Product links → Search Console links). Lets you cross-check landing-page queries.
- **Google Business Profiles** — both Bloomfield and Macomb profiles should already link out to the corresponding location page.

---

## 2. Reports to Watch Daily for the First 60 Days

Fresh domains are volatile. A page can be indexed Tuesday and dropped Thursday. Daily (not weekly) checks catch problems while they're cheap to fix.

### 2.1 Page Indexing (Coverage) — daily
GSC → Indexing → Pages. The two numbers that matter: **"Indexed"** (trending up toward 17) and **"Not indexed"** (trending toward zero). Click into "Not indexed" and read every reason. Docs: [Page indexing report](https://support.google.com/webmasters/answer/7440203).

### 2.2 Performance — daily after Day 14
Before Day 14 this report is empty. After that, watch **Impressions**, **Clicks**, **Average position**, and the **Queries** tab. Filter to Last 7 days vs. Previous 7 days. A flat line after Day 21 on a 17-page restoration site is a warning sign — you should see at least a few brand-query impressions ("provail restoration bloomfield").

### 2.3 Core Web Vitals — weekly (not daily; data is field-data lagged)
GSC → Experience → Core Web Vitals. Data pulls from CrUX and is ~28-day lagged. During the first 30 days you'll often see "No data" because traffic is below the reporting threshold. That's normal. Once data appears, any URL in "Poor" or "Needs improvement" goes on the fix list. Docs: [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520).

### 2.4 Mobile Usability
As of late 2023 Google retired the standalone Mobile Usability report, but mobile problems still surface via URL Inspection and the HTTPS/Page Experience signals. Run URL Inspection → Test Live URL on the homepage monthly.

### 2.5 Manual Actions — daily glance, zero tolerance
GSC → Security & Manual actions → Manual actions. This should say **"No issues detected."** If it ever says anything else, drop everything. Docs: [Manual actions report](https://support.google.com/webmasters/answer/9044175).

### 2.6 Security Issues
Same page, adjacent tab. Fresh restoration sites with unpatched dependencies occasionally get hit with injected-spam warnings. Check daily.

---

## 3. "Ignored" vs "Not Yet Indexed" — Reading GSC States

The Page Indexing report buckets pages into a dozen statuses. For a fresh 17-page site, three states matter:

### 3.1 Discovered – currently not indexed
**What it means:** Google knows the URL exists (from the sitemap or an internal link) but has not yet crawled it. The decision to crawl is a function of site authority, crawl budget, and how valuable Google thinks the URL will be.
**Translation for a fresh domain:** Google doesn't trust you yet. This is expected in week 1–2.
**When it's a problem:** If a URL is stuck in this state past Day 21, Google has looked at your site's link graph and concluded the page isn't worth crawling. That's a quality/signal problem, not a technical one.

### 3.2 Crawled – currently not indexed
**What it means:** Googlebot fetched the page, rendered it, and chose not to include it in the index. This is a **quality judgment**.
**Translation:** The page exists and loaded fine, but Google decided it isn't good enough to index. Common causes on restoration sites: boilerplate location pages (Bloomfield page is 90% identical to Macomb page), thin content (<300 words of unique copy), near-duplicate of a competitor's page.
**When it's a problem:** Immediately. This state should never persist past Day 30 for a page you care about.

### 3.3 Duplicate without user-selected canonical
**What it means:** Google found two or more pages it considers duplicates, you didn't declare a canonical (`<link rel="canonical">`), and Google picked one of them as canonical on its own — and that page is **not** the one it flagged.
**Translation:** You have two pages fighting each other. Common causes: trailing slash vs. no slash, `http` and `https` both serving, `/bloomfield` and `/bloomfield/` both serving 200s, query-string tracking params (`?utm=...`) getting indexed.
Docs: [Fix canonicalization issues](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting) · [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

---

## 4. Remediation Steps by State

### 4.1 Fixing "Discovered – currently not indexed"
1. **Add internal links.** Every page should be reachable in ≤2 clicks from the homepage. For location pages, link from the homepage footer AND from service pages ("Serving Bloomfield · Macomb · …").
2. **Submit to Indexing API alternative:** GSC → URL Inspection → Request Indexing. Limit is ~10–12/day per property.
3. **Earn one external link.** A single backlink from a GBP, Yelp, BBB, or local directory flips the "is this site worth crawling" signal. For restoration, use the Bloomfield and Macomb GBPs pointing at their respective location pages.
4. **Verify `lastmod` in sitemap is recent and accurate** — stale lastmods are ignored.

### 4.2 Fixing "Crawled – currently not indexed"
This is the hardest state because it's a quality verdict. Technical fixes won't work.
1. **Rewrite the page body** to include unique, location-specific content: call times, drive times to neighborhoods, local landmarks (Cranbrook, Telegraph Rd, etc.), real phone numbers, real team names, at least one real photo with EXIF intact.
2. **Kill boilerplate.** If your Bloomfield page and Macomb page share >60% of their text, Google will treat both as duplicates. Aim for <30% overlap.
3. **Add proof elements** — schema.org `LocalBusiness`, real Google reviews embedded, licensing/insurance numbers.
4. After edits, change `lastmod` in the sitemap and Request Indexing. Recrawl typically happens within 2–7 days.

### 4.3 Fixing "Duplicate without user-selected canonical"
1. **Pick ONE canonical URL** per page (decide slash vs. no-slash, `www` vs. apex). Commit in `next.config.js` with 301 redirects from the losers.
2. **Add self-referential `<link rel="canonical">`** to every page's `<head>`.
3. **Make the sitemap list only canonical URLs.**
4. **Use URL Inspection → check "User-declared canonical" vs "Google-selected canonical"** — if they still disagree after a week, Google is seeing a signal you're not: look for hreflang errors, conflicting OpenGraph URLs, or `og:url` mismatch.
5. Docs: [Canonicalization troubleshooting](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting).

---

## 5. Partial Manual Action Recovery (Thin Content / Doorway / Unhelpful)

A **partial** manual action affects only certain URLs or sections. For a 17-page restoration site the most likely manual actions are:
- **Thin content with little or no added value**
- **Doorway pages** (cookie-cutter location pages)
- Algorithmic "unhelpful content" hits (not a manual action but treated like one operationally)

### 5.1 The recovery sequence
1. **Day 0 — read the action.** GSC → Security & Manual actions → expand the issue. Google names the URL pattern and the violation. Screenshot it.
2. **Day 1–3 — triage.** List every affected URL. For each, answer: "Does this page offer something a visitor can't get from a Google SERP answer or a competitor?" If no, rewrite or delete.
3. **Day 3–10 — remediation.**
   - **Rewrite, don't patch.** Add first-hand content: real job photos, real addresses of jobs completed (with permission), timestamps, actual equipment used (dehumidifier models, air mover count), insurance carrier experience.
   - **Delete the pages you can't justify.** Return 410 (not 404) for deleted pages so Google de-indexes them fast.
   - **Merge near-duplicate location pages** into one strong page if the service areas overlap.
   - **Remove any page that exists only to rank** (e.g. 15 near-identical "water damage [neighborhood]" pages). This is the definition of a doorway. See Google's [doorway pages policy](https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages).
4. **Day 10 — recrawl.** Run URL Inspection on each fixed URL, Request Indexing. Update sitemap `lastmod`.
5. **Day 10–14 — file the reconsideration request.** GSC → Manual actions → Request review. Write a detailed, honest document: (a) what the violation was, (b) exactly what you changed, with URLs, (c) how you'll prevent it, (d) explicit acknowledgment. Generic "please review" requests get rejected.
6. **Day 14–45 — wait.** Most reviews return in 1–3 weeks. Link-related reviews can take 4–6 weeks. A rejection resets the clock and typically adds weeks.
7. **If rejected**, Google will give more detail on which URLs still fail. Fix those specifically, then resubmit. Never resubmit without new work.

Docs: [Manual actions report](https://support.google.com/webmasters/answer/9044175) · [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

### 5.2 Realistic timelines
- Thin content, clean fix, first request accepted: **5–15 days**
- Doorway pages, required page deletions: **2–4 weeks**
- Rejected first request, fix + resubmit: **4–8 weeks total**
- Site recovers traffic to pre-penalty levels: **30–90 days after action is lifted** (Google re-ranks gradually)

---

## 6. Rank Tracking Tools for a Single-Domain Operator

You don't need an enterprise stack. You need one free tool, one cheap tool, and GSC itself.

**Free**
- **GSC Performance report** — authoritative for *your* clicks/impressions/position. Average position is noisy but directionally correct.
- **Bing Webmaster Tools** — free second opinion.
- **Google Business Profile Insights** — for local pack impressions (restoration is local-pack-first).
- **Google Trends** — for query volume sanity-checking.

**Cheap paid (pick one)**
- **Local Falcon** (~$25/mo) — **best for restoration**. Grid-based local pack rank tracking from geo-coordinates. Shows the 7×7 grid rankings around the Bloomfield and Macomb addresses. This is the single most useful paid tool for a local restoration site because most conversions come from the map pack, not the blue links.
- **SerpRobot** or **Nightwatch** (~$20–30/mo) — national/regional blue-link tracking.
- **Ahrefs Webmaster Tools** — free tier for verified domain owners; gives backlink data GSC won't.

**Skip for now:** Semrush, Ahrefs paid plans, Moz Pro. Too expensive for 17 pages.

---

## 7. Healthy First-90-Day Curve (Fresh Domain, 17 Pages)

Benchmarks for a fresh, local, commercial-intent restoration domain. These are approximate — the shape matters more than the exact numbers.

| Metric | Day 7 | Day 30 | Day 60 | Day 90 |
|---|---|---|---|---|
| Pages indexed | 1–3 | 8–14 | 14–17 | 17 |
| Impressions/day (GSC) | 0–5 | 20–100 | 100–400 | 300–1,500 |
| Clicks/day | 0 | 1–5 | 5–20 | 15–60 |
| Unique queries/week | 0–2 | 15–40 | 50–150 | 150–400 |
| Avg position | — | 40–60 | 25–45 | 15–35 |
| Brand queries indexed | 1 ("provail restoration") | 3–5 | 8–15 | 15–30 |

**Shape notes:**
- Impressions start with brand queries, then expand to long-tail geo queries ("water damage bloomfield hills emergency") around Day 30–45.
- The curve is usually a hockey stick, not a line. Weeks 1–4 are flat; Week 5–6 often shows a 3–5x jump as the domain earns crawl priority.
- Expect a **drop around Day 45–60** — the "honeymoon" effect. Google initially tests new pages at higher positions, then recalibrates down once click-through data comes in. This is not a penalty.

Docs on interpreting Performance data: [Performance report](https://support.google.com/webmasters/answer/7576553).

---

## 8. Red Flags — Drop Everything and Act

1. **Any entry in Manual Actions.** Zero tolerance. Start Section 5 immediately.
2. **Any entry in Security Issues.** Usually means injected content or compromised dependency. Rotate deploy keys, audit last 30 days of commits.
3. **Indexed page count drops by >20% week-over-week.** Something's wrong — a bad deploy noindexed pages, or the sitemap now returns 500.
4. **Impressions flatline for 21+ consecutive days after Day 30.** Algorithmic down-weighting. Audit content quality, check Crawled-not-indexed list.
5. **"Crawled – currently not indexed" contains pages that *were* indexed last week.** This is a pure quality signal — the page was deemed no longer worth keeping. Rewrite.
6. **`site:provailrestoration.com` in Google shows 0 results** after Day 14. Critical. Check robots.txt, `<meta name="robots" content="noindex">`, Vercel password protection, and the `x-robots-tag` header.
7. **Core Web Vitals "Poor" count jumps after a deploy.** Revert or fix within 48 hours — CWV is a confirmed ranking signal.
8. **Google-selected canonical ≠ user-declared canonical** on any money page. Indicates Google doesn't trust your canonical declarations; fix per Section 4.3.
9. **Bloomfield or Macomb page duplicated against each other** in GSC's duplicate report. Most common failure mode for multi-location restoration sites. Rewrite to <30% overlap.
10. **Homepage "Last crawl"** in URL Inspection older than 10 days. Googlebot has lost interest; investigate links and server performance.

---

## Actionable Checklist

**Day 1**
- [ ] Verify Domain property in GSC
- [ ] Confirm `robots.txt` and `sitemap.xml` are live
- [ ] Submit `sitemap.xml` in GSC
- [ ] Run URL Inspection → Request Indexing on homepage, `/bloomfield`, `/macomb`, and top 2 service pages
- [ ] Enable all email notifications in GSC Settings
- [ ] Add GSC property to Bing Webmaster Tools
- [ ] Link GSC ↔ GA4

**Week 1**
- [ ] Confirm sitemap "Success" status (past 48h "Couldn't fetch")
- [ ] Confirm self-referential canonical tags exist on every page
- [ ] Confirm one canonical URL per page (no trailing-slash dupes, no `www` dupes)
- [ ] Add internal links so every page is ≤2 clicks from homepage
- [ ] Set up Local Falcon grids around Bloomfield + Macomb addresses

**Daily (Days 1–60)**
- [ ] Page Indexing report — check Indexed and Not-indexed counts
- [ ] Manual Actions — confirm "No issues"
- [ ] Security Issues — confirm "No issues"
- [ ] Performance (after Day 14) — watch for flatlines

**Weekly (Days 1–90)**
- [ ] Core Web Vitals review
- [ ] URL Inspection on homepage (last crawl date)
- [ ] Query list review — are branded + geo terms appearing?
- [ ] Local Falcon grid snapshot (rank trend for "water damage bloomfield" etc.)

**Monthly**
- [ ] Full content audit of any page in "Crawled – not indexed"
- [ ] Compare Bloomfield vs. Macomb page text overlap (target <30%)
- [ ] Backlink check in Ahrefs Webmaster Tools
- [ ] Review GBP insights vs. location-page GSC clicks

**If a manual action fires:** jump directly to Section 5.1 and work the sequence.

---

## Key Google Search Central References

- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Sitemaps report](https://support.google.com/webmasters/answer/7451001)
- [Page indexing report](https://support.google.com/webmasters/answer/7440203)
- [URL Inspection tool](https://support.google.com/webmasters/answer/9012289)
- [Performance report](https://support.google.com/webmasters/answer/7576553)
- [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520)
- [Manual actions report](https://support.google.com/webmasters/answer/9044175)
- [Fix canonicalization issues](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)
- [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Spam policies (incl. doorway, thin content)](https://developers.google.com/search/docs/essentials/spam-policies)
