// =============================================================================
// Cause landing page data shape, Provail Restoration of Bloomfield.
// One file per cause in app/lib/causes/<slug>.ts, rendered by the shared
// component at app/_components/cause-landing.tsx.
//
// Provail's job on these pages (set by the 2026-10-18 build brief): Oakland
// County homes with high-value finishes. Every page explains how the cause
// damages hardwood, stone and tile, custom cabinetry, finished basements, and
// plaster ceilings in older Birmingham homes, and how drying is planned to
// save those finishes rather than replace them.
//
// Rules:
//   - No response-time promise, no certification claims, no "direct bill",
//     no prices, no job counts, never "#1".
//   - Insurance line: "A homeowners policy commonly covers sudden and
//     accidental water damage. The carrier decides."
//   - Never mention Prime, WaterOut, or AI.
//   - No em dashes, no exclamation marks, no "not X, but Y".
// =============================================================================

export interface CausePhoto {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export interface CauseTable {
  caption: string
  columns: string[]
  rows: string[][]
}

export interface CauseSection {
  eyebrow: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
  table?: CauseTable
  photoIndex?: number
  callout?: string
}

export interface CauseFaq {
  q: string
  a: string
}

export interface CauseStep {
  title: string
  text: string
}

export interface CausePageData {
  slug: string
  title: string
  description: string
  eyebrow: string
  h1: string
  lede: string
  steps: CauseStep[]
  quickAnswer: { question: string; answer: string }
  sections: CauseSection[]
  finishSaving: { heading: string; intro: string; items: { title: string; text: string }[] }
  gallery: CausePhoto[]
  faqs: CauseFaq[]
  related: { href: string; label: string }[]
  sources: { label: string; href: string }[]
  serviceName: string
}
