#!/usr/bin/env node
// Submit all sitemap URLs to IndexNow (Bing, Yandex, Seznam, etc).
// Usage: node scripts/submit-indexnow.mjs
// Run after a deploy when content has changed.

const HOST = 'provailrestoration.com'
const KEY = '487fe7ff60f393368f50aa624667ba4a'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP_URL = `https://${HOST}/sitemap.xml`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  return { status: res.status, text: await res.text().catch(() => '') }
}

;(async () => {
  const urls = await fetchSitemapUrls()
  console.log(`Submitting ${urls.length} URLs to IndexNow…`)
  const result = await submit(urls)
  console.log(`IndexNow responded ${result.status}`)
  if (result.text) console.log(result.text)
  // 200 OK, 202 Accepted are both success
  if (result.status >= 400) process.exit(1)
})()
