import type { Metadata } from 'next'

const BUSINESS_NAME = 'Provail Restoration of Macomb Township'
const PHONE = '(586) 207-9091'

export const metadata: Metadata = {
  title: `BEST Water Damage Restoration Near You in Macomb Township - Emergency Water Removal - Water Damage Restoration Macomb Township - ${BUSINESS_NAME}`,
  description: `${BUSINESS_NAME} provides 24/7 emergency water damage restoration, water removal, flood cleanup, structural drying, basement water extraction, and storm damage restoration in Macomb Township, MI. Call ${PHONE}.`,
  keywords: [
    'water damage restoration Macomb Township',
    'water damage restoration Macomb MI',
    'emergency water removal Macomb Township',
    'flood cleanup Macomb Township MI',
    'basement water extraction Macomb',
    'structural drying Macomb Township',
    'water damage repair Macomb MI',
    'storm damage restoration Macomb Township',
    'pipe burst repair Macomb',
    'sewage cleanup Macomb Township MI',
    'mold remediation Macomb Township',
    '24/7 water damage Macomb',
    'Provail Restoration Macomb Township',
    'water removal Macomb MI',
    'basement flooding Macomb Township',
  ],
  openGraph: {
    title: `${BUSINESS_NAME} | 24/7 Emergency Water Damage Restoration`,
    description: `24/7 emergency water damage restoration, flood cleanup, and structural drying in Macomb Township, MI. Call ${PHONE}.`,
    url: 'https://provailrestoration.com/macomb-township-mi-water-damage-restoration-near-you',
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${BUSINESS_NAME} | Water Damage Restoration`,
    description: `24/7 emergency water damage restoration in Macomb Township, MI. Call ${PHONE}.`,
  },
  alternates: {
    canonical: 'https://provailrestoration.com/macomb-township-mi-water-damage-restoration-near-you',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/macomb-township-mi-water-damage-restoration-near-you',
  name: BUSINESS_NAME,
  description: `${BUSINESS_NAME} provides 24/7 emergency water damage restoration, flood cleanup, structural drying, and mold remediation serving Macomb Township and surrounding communities.`,
  url: 'https://provailrestoration.com/macomb-township-mi-water-damage-restoration-near-you',
  telephone: '+15862079091',
  address: { '@type': 'PostalAddress', streetAddress: '51225 Romeo Plank Rd', addressLocality: 'Macomb', addressRegion: 'MI', postalCode: '48042', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 42.6700, longitude: -82.9133 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  areaServed: [
    { '@type': 'City', name: 'Macomb Township' },{ '@type': 'City', name: 'Clinton Township' },{ '@type': 'City', name: 'Shelby Township' },
    { '@type': 'City', name: 'Sterling Heights' },{ '@type': 'City', name: 'Utica' },{ '@type': 'City', name: 'Romeo' },
    { '@type': 'City', name: 'Washington Township' },{ '@type': 'City', name: 'Chesterfield Township' },{ '@type': 'City', name: 'Ray Township' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Water Damage Restoration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Damage Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Water Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flood Cleanup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Drying' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basement Water Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storm Damage Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewage Cleanup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mold Remediation' } },
    ],
  },
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  currenciesAccepted: 'USD',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5' },
}

export default function MacombLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
