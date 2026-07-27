import { NextRequest, NextResponse } from 'next/server'
// Live Google rating: resolve name→place, read rating LIVE per request. Never cached/stored (Places ToS).
export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!q || !key) return NextResponse.json({ rating: null }, { status: 400 })
  const url =
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json' +
    `?input=${encodeURIComponent(q)}&inputtype=textquery&fields=rating,user_ratings_total&key=${key}`
  try {
    const r = await fetch(url, { cache: 'no-store' })
    const j = await r.json()
    const c = j.candidates?.[0]
    if (!c || typeof c.rating !== 'number') return NextResponse.json({ rating: null })
    return NextResponse.json({ rating: c.rating, count: c.user_ratings_total ?? 0 }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return NextResponse.json({ rating: null })
  }
}
