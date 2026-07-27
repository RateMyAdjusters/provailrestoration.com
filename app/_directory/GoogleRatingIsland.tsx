'use client'
import { useEffect, useState } from 'react'
// Live Google rating — fetched per render, never stored (Places ToS).
export function GoogleRatingIsland({ query }: { query?: string | null }) {
  const [s, setS] = useState<{ rating: number; count: number } | null>(null)
  const [loading, setLoading] = useState(!!query)
  useEffect(() => {
    if (!query) return
    let alive = true
    fetch(`/api/google-rating?q=${encodeURIComponent(query)}`)
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (alive && d && typeof d.rating === 'number') setS(d) })
      .catch(() => {}).finally(() => alive && setLoading(false))
    return () => { alive = false }
  }, [query])
  if (!query || loading) return <span style={{ fontSize: 13, color: '#6a6a6a' }}>Google: —</span>
  if (!s) return <span style={{ fontSize: 13, color: '#6a6a6a' }}>Google: —</span>
  return (
    <span style={{ fontSize: 13, color: '#222', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#ff385c"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      <b>{s.rating.toFixed(1)}</b> · {s.count} Google reviews
    </span>
  )
}
