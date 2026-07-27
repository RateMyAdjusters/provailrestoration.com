import firmsRaw from './firms.json'
import editorialRaw from './editorial.json'

export type Firm = {
  id: string; name: string; slug: string; phone: string | null; website: string | null
  address: string | null; city: string | null; state: string | null; zip: string | null
  certifications: string[]; iicrc_verified: boolean
}
export type RankedFirm = Firm & { vetting: number; editorial: string }
export type Featured = { name: string; address: string; city: string; phone: string; website: string; blurb: string; certs: string[]; google?: { rating: number; count: number } }

export const FIRMS: Firm[] = firmsRaw as unknown as Firm[]
export const EDITORIAL: Record<string, string> = Object.fromEntries(
  Object.entries(editorialRaw as Record<string, string>).filter(([k]) => !k.startsWith('_'))
)

// Prime's real, owner-attested credentials — IICRC technician certs + MI license (not the scraped Certified-Firm registry).
export const PRIME_FEATURED: Featured = {
  name: 'Prime Restoration',
  address: '13854 Lakeside Circle, Suite 558, Sterling Heights, MI 48313',
  city: 'Sterling Heights, MI',
  phone: '(586) 277-1069',
  website: 'https://primerestorationllc.com',
  certs: ['IICRC Water Damage Restoration Technician', 'IICRC Fire & Smoke Damage Restoration Technician', 'Licensed Michigan Contractor'],
  blurb: '24/7 water, fire, and storm damage restoration serving Macomb County, Sterling Heights, and Southeast Michigan. IICRC-certified technicians and a licensed contractor — free inspection and direct insurance billing.',
  google: { rating: 5.0, count: 111 }, // owner-provided; live auto-pull will replace once the GBP is indexed
}

const WATER_CERT = (c: string) => /water damage|structural drying|microbial/i.test(c)
export const vetting = (f: Firm): number =>
  +((f.certifications.filter(WATER_CERT).length) * 3 + f.certifications.length * 0.5 + (f.iicrc_verified ? 2 : 0)).toFixed(1)

export type Roundup = {
  slug: string; cityName: string; county: string; area: string[]
  exclude?: string[]; include?: string[]; featured?: Featured
  hideCerts?: Record<string, string[]> // firm slug -> cert chips to hide from display
  hideGoogle?: string[] // firm slugs whose Google rating is left blank
  limit?: number // cap the number of ranked firms shown
  only?: string[] // exact firm slugs to show (overrides area matching — prevents cross-page leakage)
  localContext: string // unique, real per-city water-risk detail (anti-scaled-content)
}
export const ROUNDUPS: Roundup[] = [
  { slug: 'best-water-damage-restoration-companies-macomb-mi', cityName: 'Macomb', county: 'Macomb County',
    area: ['Macomb'], exclude: ['action-extraction-inc', 'broadco-property-restoration'],
    include: ['elite-flood-and-fire-inc-dba-servpro-of-st-clair-shores-mt-clemens-new-baltimore-ne-macomb-twp-s-washington-sw-macomb-twp', 'puroclean-restoration-services-dba-marceau-enterprises-inc'],
    hideCerts: {
      'elite-flood-and-fire-inc-dba-servpro-of-st-clair-shores-mt-clemens-new-baltimore-ne-macomb-twp-s-washington-sw-macomb-twp': ['Commercial Drying Specialist', 'Fire and Smoke Damage Restoration Technician', 'Odor Control Technician'],
    },
    localContext: 'Water losses across Macomb County are shaped by the Clinton River and its flood plain, Lake St. Clair storm surge and spring ice-out, and the region’s aging combined-sewer lines, which back up into finished basements during heavy spring rain. Fast extraction and correctly-monitored structural drying matter most on the clay-heavy soil common through Macomb Township and Clinton Township.',
    featured: PRIME_FEATURED },
  { slug: 'best-water-damage-restoration-companies-sterling-heights-mi', cityName: 'Sterling Heights', county: 'Macomb County',
    area: ['Sterling Heights'], limit: 4,
    only: ['the-flood-doctor-llc-dba-the-restoration-doctor', 'advance-restoration-llc', 'myers-restoration-llc', 'broadco-property-restoration'],
    localContext: 'Sterling Heights sits on heavy clay soil in the Clinton River watershed, where saturated ground and sump-pump failures during spring thaw and summer thunderstorms drive basement flooding across its dense residential subdivisions. Combined-sewer backups and finished-basement water losses are among the most common calls in the area.',
    featured: PRIME_FEATURED },
  { slug: 'best-water-damage-restoration-companies-troy-mi', cityName: 'Troy', county: 'Oakland County',
    area: ['Troy'], limit: 4,
    localContext: 'Troy’s water losses cluster around the Rouge River tributaries and the fast storm runoff of its commercial corridors, while frozen-pipe breaks are a common winter cause across its large-home subdivisions. Appliance and supply-line failures in finished lower levels round out the area’s most frequent water-damage calls.',
    featured: PRIME_FEATURED },
  { slug: 'best-water-damage-restoration-companies-bloomfield-birmingham-mi', cityName: 'Bloomfield & Birmingham', county: 'Oakland County',
    area: ['Bloomfield', 'Birmingham', 'West Bloomfield'], limit: 4,
    exclude: ['bloomfield-restoration', 'drymedic-restoration-services'], include: ['dryshield-restoration', '360-fire-and-flood'],
    localContext: 'Bloomfield and Birmingham share the older, larger housing stock and finished lower levels of central Oakland County, where a high water table, lake-adjacent lots, and aging service lines make basement seepage, sump-pump failure, and frozen-pipe breaks the most common water-damage calls. Heavy spring storms across the Rouge River headwaters add stormwater intrusion through Bloomfield Hills, Bloomfield Township, and downtown Birmingham.',
    featured: PRIME_FEATURED },
  { slug: 'best-water-damage-restoration-companies-rochester-hills-auburn-hills-mi', cityName: 'Rochester Hills & Auburn Hills', county: 'Oakland County',
    area: ['Rochester Hills', 'Auburn Hills'], limit: 4,
    localContext: 'Rochester Hills and Auburn Hills sit along the upper Clinton River and Paint Creek, where spring snowmelt and heavy Oakland County storms drive basement flooding and sump-pump failures across their newer, large-lot subdivisions. Frozen-pipe breaks are a common winter cause, and finished lower levels make fast structural drying the priority on most losses.',
    featured: PRIME_FEATURED },
  { slug: 'best-water-damage-restoration-companies-shelby-clinton-township-mi', cityName: 'Shelby & Clinton Township', county: 'Macomb County',
    area: ['Shelby Township'], limit: 4,
    only: ['speed-clean-services', 'puroclean-restoration-services-dba-marceau-enterprises-inc', 'advance-restoration-llc', 'myers-restoration-llc'],
    localContext: 'Shelby Township and Clinton Township straddle the Clinton River corridor in western Macomb County, where clay-heavy soil, aging combined-sewer lines, and spring ice-out drive basement backups and sump-pump failures across their dense subdivisions. Category-3 sewage losses and finished-basement flooding are among the most frequent calls in the area.',
    featured: PRIME_FEATURED },
]

export function roundupFirms(cfg: Roundup): RankedFirm[] {
  const exclude = new Set(cfg.exclude || [])
  const included = new Set(cfg.include || [])
  const only = cfg.only ? new Set(cfg.only) : null
  const areaMatch = (f: Firm) => cfg.area.some(c => (f.city || '').toLowerCase().includes(c.toLowerCase()))
  const ranked = FIRMS
    .filter(f => EDITORIAL[f.slug] && !exclude.has(f.slug) &&
      (only ? only.has(f.slug) : (areaMatch(f) || included.has(f.slug))))
    .map(f => ({ ...f, vetting: vetting(f), editorial: EDITORIAL[f.slug] }))
    .sort((a, b) => b.vetting - a.vetting)
  return cfg.limit ? ranked.slice(0, cfg.limit) : ranked
}
export const roundupBySlug = (slug: string) => ROUNDUPS.find(r => r.slug === slug)
