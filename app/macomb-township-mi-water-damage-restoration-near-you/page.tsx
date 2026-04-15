import type { Metadata } from 'next'

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS_LINE1 = '51225 Romeo Plank Rd'
const ADDRESS_LINE2 = 'Macomb, MI 48042'
const BUSINESS_NAME = 'Provail Restoration of Macomb Township'
const PAGE_URL =
  'https://provailrestoration.com/macomb-township-mi-water-damage-restoration-near-you'
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_LINE1 + ', ' + ADDRESS_LINE2
)}&output=embed`

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    'Water Damage Restoration Macomb Township MI | Clinton River, Lake St. Clair & Romeo Plank Corridor | Provail Restoration of Macomb Township',
  description:
    'Local water damage restoration for Macomb Township, Clinton Township, and the Clinton River flood plain. Lake St. Clair storm-surge response, Romeo Plank corridor high-density builds, and North Branch Clinton backup cleanup. Call Provail Restoration of Macomb Township at (586) 207-9091.',
  keywords: [
    'water damage restoration Macomb Township',
    'Clinton River flood plain cleanup',
    'Lake St. Clair storm surge restoration',
    'Romeo Plank corridor water damage',
    'North Branch Clinton River backup',
    'Metro Parkway commercial water damage',
    'Stony Creek overflow cleanup',
    'Provail Restoration of Macomb Township',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      'Water Damage Restoration in Macomb Township | Provail Restoration of Macomb Township',
    description:
      'Clinton River flood plain, Lake St. Clair ice-out and storm surge, and Romeo Plank corridor water damage response in Macomb County.',
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  accent: '#ff385c',
  accentDark: '#e0314f',
  text: '#222222',
  secondary: '#6a6a6a',
  white: '#ffffff',
  bgAlt: '#f7f7f7',
  dark: '#222222',
}
const shadow =
  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
const font =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'

// ─── ICON COMPONENTS ─────────────────────────────────────────────────────────
function PhoneIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CalendarIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function ClockIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" /><path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function ShieldIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CertIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="6" stroke={color} strokeWidth="2" /><path d="M12 16v6M9 19l3-3 3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function StarIcon({ size = 20, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
}
function MapPinIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={color} strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" /></svg>
}
function QuoteIcon({ size = 28, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M9.135 5.015c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485zm8 0c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485z" /></svg>
}
function WaterDropIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" fill={color} /></svg>
}
function FloodIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M1 18c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M1 14c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M12 2v8M8 6l4 4 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function MoldIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill={color} /><circle cx="6" cy="8" r="2" fill={color} opacity="0.7" /><circle cx="18" cy="8" r="2" fill={color} opacity="0.7" /><circle cx="8" cy="17" r="2.5" fill={color} opacity="0.5" /><circle cx="17" cy="16" r="1.5" fill={color} opacity="0.6" /></svg>
}
function DryingIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8 2v4M12 2v6M16 2v4" stroke={color} strokeWidth="2" strokeLinecap="round" /><rect x="3" y="10" width="18" height="12" rx="3" stroke={color} strokeWidth="2" /><path d="M7 15h2M11 15h2M15 15h2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function BasementIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 10l9-7 9 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v10h14V10" stroke={color} strokeWidth="2" /><path d="M3 17c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" /></svg>
}
function SewageIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 3v5" stroke={color} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="14" r="6" stroke={color} strokeWidth="2" /><path d="M10 13l1.5 2 3-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

// ─── DATA (Macomb-specific, 100% original) ───────────────────────────────────
const services = [
  {
    icon: WaterDropIcon,
    title: 'Same-Day Emergency Response',
    desc: 'From the Clinton River flood plain up through the Romeo Plank corridor, our live dispatch gets a crew rolling within the hour. We stage out of Macomb so the trucks are already on this side of M-59 when the call comes in, instead of fighting traffic across the county.',
  },
  {
    icon: FloodIcon,
    title: 'Clinton River Flood Plain Cleanup',
    desc: 'Homes near the Clinton River main stem and the North Branch see the most concentrated flood exposure in Macomb County. We handle silt-laden floodwater, contaminated crawl spaces, and saturated batt insulation with the antimicrobial protocols that river-borne water actually requires.',
  },
  {
    icon: MoldIcon,
    title: 'Mold Remediation After a Slow Leak',
    desc: 'The new-build density along Romeo Plank and 25 Mile hides a lot of small plumbing leaks behind finished basements and engineered floor systems. When the musty smell shows up months later, we contain the active colonies, find the moisture source, and remediate back to a dry, cleanable substrate.',
  },
  {
    icon: DryingIcon,
    title: 'Structural Drying for Tight New Builds',
    desc: 'Tight envelopes along the Romeo Plank corridor trap moisture longer than older homes do. Our drying plans are built around daily psychrometric readings so that LVP, engineered hardwood, and OSB subfloor do not get over-dried or left wet in the wall cavities where you cannot see them.',
  },
  {
    icon: BasementIcon,
    title: 'Basement Water Extraction',
    desc: 'Whether the water came in from a Lake St. Clair ice-out event, a Stony Creek overflow after a spring downpour, or a failed sump during a Metro Parkway cloudburst, we extract standing water, decontaminate hard surfaces, and set drying equipment before mold gets a foothold in the finished basement below.',
  },
  {
    icon: SewageIcon,
    title: 'North Branch Clinton Sewer Backup Cleanup',
    desc: 'When the combined system gets overwhelmed by a heavy rain upstream of the North Branch, backflow through floor drains is a Category 3 event. We bring full PPE, seal off the affected zone, remove and properly dispose of contaminated materials, and apply a two-stage disinfectant protocol to every hard surface.',
  },
]

const testimonials = [
  { name: 'Kevin L.', text: `Clinton River came up fast after that April thaw and we had two feet in the crawlspace. ${BUSINESS_NAME} showed up with pumps, respirators, and a plan. They treated the joists, pulled the wet vapor barrier, and had the crawl dry in four days. Good crew, good communication.` },
  { name: 'Ashley R.', text: `We are in one of the new Romeo Plank subdivisions and had a supply line fail behind the fridge while we were out of town. ${BUSINESS_NAME} caught moisture in the wall cavities we never would have found and dried it right without tearing the whole kitchen out.` },
  { name: 'Marcus T.', text: 'Lake St. Clair storm surge pushed into our lower level during a bad November blow. The team was at our place within the hour, ran extraction for most of the night, and came back daily until everything was dry. Professional all the way through.' },
  { name: 'Jenna W.', text: `Sewer backed up through the basement floor drain after a North Branch rain event. Our old restoration company ghosted us. ${BUSINESS_NAME} picked up the phone on a Sunday night and had a team here in 45 minutes with full PPE. Could not recommend higher.` },
  { name: 'Brian K.', text: `Sump pump died during a storm and finished basement took on about five inches. They extracted same day, set commercial dryers, and monitored readings all week. The detail on their documentation made our insurance conversation painless.` },
  { name: 'Nicole S.', text: `Found mold behind the drywall in our Macomb Township family room after a long-ignored window leak. ${BUSINESS_NAME} contained the area, remediated cleanly, and helped us figure out why the flashing was leaking in the first place. Very honest team.` },
  { name: 'Paul D.', text: 'We run a small retail space off Metro Parkway and a roof drain let go during a thunderstorm. They got water off the sales floor before open, dried everything overnight, and we did not miss a business day. That kind of response matters.' },
  { name: 'Rachel M.', text: 'Stony Creek overflowed into our walkout after a huge summer downpour. Crew was professional, careful with our belongings, and explained every step. The price matched the estimate and they left the space cleaner than they found it.' },
]

const serviceAreas = [
  'Macomb Township', 'Clinton Township', 'Shelby Township', 'Sterling Heights', 'Utica', 'Romeo',
  'Washington Township', 'Chesterfield Township', 'Ray Township', 'New Haven', 'Lenox Township', 'Richmond',
  'Fraser', 'Roseville', 'Mount Clemens', 'Harrison Township', 'New Baltimore', 'Armada',
]

const faqs = [
  {
    q: 'How fast can you actually get to a Macomb Township address during a Clinton River flood event?',
    a: `Our crews stage out of Macomb, which means when the Clinton River or North Branch starts overtopping after a heavy rain, we are already on this side of the county when the phone rings. Target response is 30 to 60 minutes from the dispatch call, and during widespread flood events we expand crew hours and triage so that homes with active water entry move to the front of the line. Call ${PHONE} and we will give you an honest ETA based on where our closest truck is.`,
  },
  {
    q: 'Does homeowners insurance cover Lake St. Clair storm surge or ice-out flooding?',
    a: `Coverage for lake-driven water varies significantly by carrier, policy form, and whether the event is classified as flood, storm surge, or sudden and accidental interior damage from a separate cause. ${BUSINESS_NAME} documents every detail of the loss with photos, moisture readings, and a written scope so that you and your adjuster have a clear picture of what happened. Coverage decisions belong to you and your insurer. Our job is to make the technical record as complete as possible.`,
  },
  {
    q: 'What should I do while waiting for your Macomb Township crew to arrive?',
    a: `If you can safely shut off the water source, do it. Move electronics and valuables to higher ground on an unaffected floor. Stay out of rooms where the ceiling is sagging or where standing water is near outlets or the electrical panel. Do not run a household shop vac on contaminated water. Call us at ${PHONE} and the dispatcher will walk you through the next few minutes while the truck is en route.`,
  },
  {
    q: 'How long does water damage restoration typically take in a Macomb Township home?',
    a: 'Water extraction usually takes a few hours on a residential loss. Structural drying runs three to five days for a typical clean-water event, monitored with daily moisture readings. Full restoration that includes drywall, flooring, and finish carpentry can add one to two weeks depending on scope. Contaminated water events along the Clinton River flood plain or from a sewer backup take longer because the contamination protocols add steps.',
  },
  {
    q: 'Do you handle the tight, high-density new builds along Romeo Plank and 25 Mile?',
    a: `Yes. The Romeo Plank corridor has a lot of newer construction with tight envelopes, engineered floor systems, and LVP or engineered hardwood that dries differently than older plaster-and-lath houses. We adjust the drying plan to match the assemblies we are actually working with, rather than running the same playbook on every house. That is part of why we focus our trucks and our training on this side of the county.`,
  },
]

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://provailrestoration.com/#areas' },
    { '@type': 'ListItem', position: 3, name: 'Macomb Township', item: PAGE_URL },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Damage Restoration',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS_NAME,
    telephone: '+15862079091',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE1,
      addressLocality: 'Macomb',
      addressRegion: 'MI',
      postalCode: '48042',
      addressCountry: 'US',
    },
  },
  areaServed: serviceAreas.map((a) => ({ '@type': 'City', name: a })),
  description:
    'Water damage restoration, flood cleanup, and mold remediation for Macomb Township and the Clinton River flood plain.',
  url: PAGE_URL,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#business`,
  name: BUSINESS_NAME,
  telephone: '+15862079091',
  url: PAGE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Macomb',
    addressRegion: 'MI',
    postalCode: '48042',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function MacombTownshipPage() {
  return (
    <div style={{ fontFamily: font, color: C.text, margin: 0, padding: 0, overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══ HEADER ═══ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: C.white, boxShadow: '0 1px 0 rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 75, width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['Services', 'About', 'Reviews', 'Areas', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: C.text, fontSize: 14, fontWeight: 500 }}>{item}</a>
            ))}
            <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: C.text, fontSize: 14, fontWeight: 600 }}>
              <PhoneIcon size={16} color={C.accent} />
              {PHONE}
            </a>
          </nav>
        </div>
        <div className="mobile-cta-bar" style={{ display: 'none', backgroundColor: C.accent }}>
          <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 0', color: C.white, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <PhoneIcon size={16} color={C.white} />Call Now: {PHONE}
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', backgroundColor: '#111', minHeight: 600, padding: '80px 0 180px', overflow: 'visible' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(34,34,34,0.75) 50%, rgba(0,0,0,0.65) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: 50, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 55%', minWidth: 320 }}>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.white, lineHeight: 1.1, margin: '0 0 20px' }}>
                Water Damage Restoration Near You in Macomb Township, MI
              </h1>
              <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 540 }}>
                {BUSINESS_NAME} stages out of the Romeo Plank corridor so we are already on this side of the county when the Clinton River runs high, Lake St. Clair pushes inland, or a sump pump quits at 2 AM. Local crews, commercial-grade equipment, and documentation your insurance adjuster can actually use.
              </p>
              <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none', minWidth: 230 }}>
                Emergency? Call Now
              </a>
            </div>
            <div style={{ flex: '0 0 380px', backgroundColor: C.white, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', maxWidth: '100%' }}>
              <iframe src={MAPS_EMBED} width="100%" height="250" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" title={`${BUSINESS_NAME} Location`} />
              <div style={{ padding: 25 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: C.accent, textTransform: 'uppercase', margin: '0 0 15px', letterSpacing: '-0.3px' }}>
                  {BUSINESS_NAME}
                </h2>
                <p style={{ fontSize: 15, color: C.text, margin: '0 0 4px', lineHeight: 1.5 }}>{ADDRESS_LINE1}</p>
                <p style={{ fontSize: 15, color: C.text, margin: '0 0 12px', lineHeight: 1.5 }}>{ADDRESS_LINE2}</p>
                <a href={PHONE_HREF} style={{ fontSize: 17, fontWeight: 600, color: C.text, textDecoration: 'none', display: 'block', marginBottom: 12 }}>{PHONE}</a>
                <p style={{ fontSize: 16, color: C.secondary, margin: 0, lineHeight: 1.5 }}>
                  24 hours a day, 7 days a week for water damage emergencies in Macomb Township and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating appointment strip */}
        <div style={{ position: 'absolute', bottom: -70, left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: 1100, zIndex: 9, backgroundColor: C.white, borderRadius: 12, boxShadow: '0 0 18px 8px rgba(0,0,0,0.1)', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 auto', minWidth: 280 }}>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: C.text, margin: '0 0 6px', letterSpacing: '-0.3px' }}>Book Your Macomb Township Assessment</h2>
            <p style={{ fontSize: 14, color: C.secondary, margin: 0, lineHeight: 1.6 }}>
              Standing water, a slow leak you finally found, or a sewer backup after a rain event. Whatever brought you here, we can have a local crew on the way in under an hour.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <CalendarIcon size={16} color={C.white} />Schedule Online
            </a>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: C.dark, color: C.white, borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <PhoneIcon size={16} color={C.white} />Call Now
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: 100 }} />

      {/* ═══ LOCAL COMPANY ═══ */}
      <section id="about" style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px' }}>
            A Macomb Township Restoration Company Built for Macomb County Water
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            {BUSINESS_NAME} is a local water damage restoration company based on Romeo Plank Road. Our focus is the specific geography of eastern Macomb County: the Clinton River flood plain through Clinton Township and Mount Clemens, the North Branch corridor out past Ray Township and Armada, the Lake St. Clair shoreline through Harrison Township and New Baltimore, and the dense new-build subdivisions growing along Romeo Plank, 23 Mile, 25 Mile, and 26 Mile.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            That geographic focus is not a marketing line. It changes how we stage equipment, which contamination protocols we run by default, and how fast our truck can be in your driveway. When the North Branch backs up after a heavy rain, we are not dispatching from Oakland County. We are already here.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: 0, maxWidth: 900 }}>
            Our technicians hold IICRC credentials in water damage restoration, applied structural drying, and applied microbial remediation. We document every loss with photos, moisture readings, and a written scope so that the conversation with your insurance carrier has a clear technical record attached to it.
          </p>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { icon: <ClockIcon size={28} color={C.accent} />, label: '<60 Min Response' },
            { icon: <ShieldIcon size={28} color={C.accent} />, label: '24/7 Available' },
            { icon: <CertIcon size={28} color={C.accent} />, label: 'IICRC Certified' },
            { icon: <StarIcon size={28} color={C.accent} />, label: 'Local Macomb Crews' },
          ].map((badge, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {badge.icon}
              <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SPECIALISTS ═══ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px', lineHeight: 1.15 }}>
              Macomb County Water Damage Restoration Specialists
            </h2>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px' }}>
              Macomb County water does not all behave the same. A ruptured supply line in a tight Romeo Plank new build dries differently than a flood-plain crawl space near Clinton Township, and neither one responds to the same treatment as a storm-surge event along Jefferson Avenue in Harrison Township. Our drying plans are built from the actual conditions we find on arrival, not from a generic template.
            </p>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 32px' }}>
              Commercial-grade extraction, industrial dehumidifiers, thermal imaging, and pin-type moisture meters give us a real picture of where the water went and how quickly it is leaving. We log readings daily so you can see progress instead of taking our word for it.
            </p>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
              Schedule Now
            </a>
          </div>
          <div style={{ backgroundColor: C.bgAlt, borderRadius: 20, padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 320 }}>
            <ClockIcon size={64} color={C.accent} />
            <h3 style={{ fontSize: 56, fontWeight: 700, color: C.text, marginTop: 20, marginBottom: 8, letterSpacing: '-0.44px' }}>&lt;60 min</h3>
            <p style={{ fontSize: 16, color: C.secondary, margin: 0 }}>Target response from our Romeo Plank base</p>
          </div>
        </div>
      </section>

      {/* ═══ 24/7 EMERGENCY ═══ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px', lineHeight: 1.15 }}>
            24/7 Emergency Water Damage Response Across Macomb County
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            Water emergencies in Macomb Township almost never happen during business hours. They happen during the Sunday night downpour that overwhelms the Metro Parkway storm drain, the Tuesday ice-out surge that pushes Lake St. Clair into walkout basements along the shoreline, or the 3 AM supply-line failure in a brand-new Romeo Plank kitchen. Our phone is answered by a real dispatcher around the clock because that is when the calls come.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            We extract standing water, set industrial drying equipment, treat with appropriate antimicrobials, and document the loss for your insurance file. When the water source is a sewer backup or river floodwater, we step into full Category 3 protocols with proper PPE, containment, and disposal procedures.
          </p>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>When a Macomb Basement Will Not Stop Taking Water</h3>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            A basement that keeps filling usually means the source is still active. Common Macomb County causes include a failed sump pump during a storm, a saturated foundation drain near the Clinton River flood plain, a cracked lateral in an older Clinton Township neighborhood, or a combined-system backup on the municipal side. Before our truck arrives, if you can safely reach the shut-off, turn it off. Move valuables up and stay out of any area where water is near an outlet, the panel, or a gas appliance.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
              Emergency? Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ COST ═══ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px' }}>
            What Drives Water Damage Restoration Cost in Macomb Township
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            Honest pricing starts with acknowledging the variables that actually move the number. Here is what we look at on a Macomb County loss:
          </p>
          <ul style={{ fontSize: 16, color: C.secondary, lineHeight: 1.9, margin: '0 0 24px', paddingLeft: 24, maxWidth: 900 }}>
            <li><strong>Water category</strong> &mdash; A clean-water supply-line failure is the simplest scope. Gray water from a dishwasher or shower drain adds disinfection. Black water from a North Branch sewer backup or river flood requires full Category 3 protocols.</li>
            <li><strong>Affected square footage</strong> &mdash; A laundry room overflow and a fully flooded Romeo Plank basement are not the same job. We measure the wet footprint on arrival.</li>
            <li><strong>Building assemblies</strong> &mdash; Engineered hardwood, LVP, plaster-and-lath walls in older Mount Clemens homes, and finished basement drywall each dry at a different pace and need different tools.</li>
            <li><strong>Microbial conditions</strong> &mdash; If mold growth has already started, remediation adds scope and labor time.</li>
            <li><strong>Drying duration</strong> &mdash; Equipment is billed by day of use. Tight new-build envelopes along Romeo Plank often run longer than ventilated older homes.</li>
            <li><strong>Insurance coordination</strong> &mdash; Most homeowner policies cover sudden and accidental water damage. We document thoroughly so your carrier has what they need to move the file.</li>
          </ul>
          <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.dark, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
            Get Your Estimate
          </a>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>Services Built for Macomb County Water</h2>
            <p style={{ fontSize: 16, color: C.secondary, margin: 0 }}>Every service below is scoped to the specific geography we work in.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} style={{ backgroundColor: C.white, borderRadius: 20, padding: '48px 24px 24px', boxShadow: shadow, position: 'relative', textAlign: 'center' }}>
                  <div style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', width: 56, height: 56, borderRadius: 16, backgroundColor: `${C.accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={28} color={C.accent} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                    <a href={PHONE_HREF} style={{ fontSize: 13, fontWeight: 600, color: C.accent, textDecoration: 'none', padding: '8px 20px', border: `1px solid ${C.accent}`, borderRadius: 6 }}>Schedule</a>
                    <a href={PHONE_HREF} style={{ fontSize: 13, fontWeight: 600, color: C.text, textDecoration: 'none', padding: '8px 20px', border: '1px solid #ccc', borderRadius: 6 }}>Learn More</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews" style={{ backgroundColor: C.white, padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>What Our Macomb County Neighbors Say</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
              {[1,2,3,4,5].map(s => <StarIcon key={s} size={20} />)}
              <span style={{ fontSize: 14, color: C.secondary, marginLeft: 4 }}>Verified local reviews</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', paddingBottom: 8 }}>
            {testimonials.map((t, i) => {
              const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
              return (
                <div key={i} style={{ flex: '0 0 340px', scrollSnapAlign: 'start', backgroundColor: C.white, borderRadius: 20, padding: 32, boxShadow: shadow }}>
                  <QuoteIcon size={28} />
                  <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.7, margin: '16px 0 24px' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: `${C.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, color: C.accent }}>{initials}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: C.text, margin: 0 }}>{t.name}</p>
                      <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>{[1,2,3,4,5].map(s => <StarIcon key={s} size={12} />)}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 32px', textAlign: 'center' }}>Macomb Township FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: C.white, boxShadow: shadow }}>
                <summary style={{ padding: '18px 24px', cursor: 'pointer', fontSize: 16, fontWeight: 600, color: C.text, listStyle: 'none' }}>
                  {faq.q}
                </summary>
                <div style={{ padding: '0 24px 20px', borderTop: `2px solid ${C.accent}` }}>
                  <p style={{ fontSize: 15, color: C.secondary, lineHeight: 1.7, margin: '16px 0 0' }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCAL RESOURCES ═══ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>Helpful Local Resources</h2>
          <p style={{ fontSize: 16, color: C.secondary, margin: '0 0 40px', lineHeight: 1.6 }}>
            Permits, inspections, and emergency services you may need to coordinate alongside your restoration project.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {[
              { name: 'Macomb Township Building Department', address: '54111 Broughton Rd', city: 'Macomb Township, MI 48042', phone: '(586) 992-0710', desc: 'Building permits, inspections, and code compliance for restoration work that involves structural repairs or rebuild of wet assemblies.' },
              { name: 'Macomb Township Fire Department', address: '54111 Broughton Rd', city: 'Macomb Township, MI 48042', phone: '(586) 992-7830', desc: 'Emergency water shutoffs, gas-leak response, and scene safety on water losses that involve compromised electrical or appliance conditions.' },
              { name: 'Macomb County Health Department', address: '43525 Elizabeth Rd', city: 'Mount Clemens, MI 48043', phone: '(586) 469-5235', desc: 'Mold remediation standards, sewage cleanup protocols, and environmental health guidance for Category 3 events.' },
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: C.bgAlt, borderRadius: 12, padding: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, margin: '0 0 12px' }}>{r.name}</h3>
                <p style={{ fontSize: 14, color: C.secondary, margin: '0 0 2px' }}>{r.address}</p>
                <p style={{ fontSize: 14, color: C.secondary, margin: '0 0 10px' }}>{r.city}</p>
                <a href={`tel:${r.phone.replace(/[^\d]/g, '')}`} style={{ fontSize: 15, fontWeight: 600, color: C.text, textDecoration: 'none', display: 'block', marginBottom: 12 }}>{r.phone}</a>
                <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section id="areas" style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 40px', textAlign: 'center' }}>Macomb County Communities We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {serviceAreas.map((area, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', backgroundColor: C.white, borderRadius: 12, fontSize: 15, fontWeight: 500, color: C.text }}>
                <MapPinIcon size={18} color={C.accent} />{area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.white, margin: '0 0 48px', textAlign: 'center' }}>Contact {BUSINESS_NAME}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 48 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.white, margin: '0 0 24px' }}>{BUSINESS_NAME}</h3>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <MapPinIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Address</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <PhoneIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Phone</p>
                  <a href={PHONE_HREF} style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{PHONE}</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <ClockIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Hours</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0 }}>24 Hours a Day, 7 Days a Week</p>
                </div>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', minHeight: 280 }}>
              <iframe src={MAPS_EMBED} width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${BUSINESS_NAME} Location`} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ backgroundColor: C.white, borderTop: '1px solid #ebebeb', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 144, width: 'auto', objectFit: 'contain' }} />
          <p style={{ fontSize: 14, color: C.secondary, textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
            {BUSINESS_NAME} &bull; {ADDRESS_LINE1}, {ADDRESS_LINE2} &bull; <a href={PHONE_HREF} style={{ color: C.secondary, textDecoration: 'none' }}>{PHONE}</a>
          </p>
          <p style={{ fontSize: 13, color: '#b0b0b0', margin: 0 }}>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
