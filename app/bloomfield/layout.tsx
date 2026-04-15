import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Provail Restoration of Bloomfield | 24/7 Emergency | (248) 531-8404',
  description:
    'Provail Restoration of Bloomfield provides 24/7 emergency water damage restoration, flood cleanup, mold remediation, basement water extraction, sewage cleanup, storm damage repair, and structural drying in Bloomfield Township, MI. Call (248) 531-8404 for immediate service.',
  keywords: [
    'Provail Restoration of Bloomfield',
    'water damage restoration Bloomfield Township',
    'emergency water removal Bloomfield MI',
    'flood cleanup Bloomfield',
    'mold remediation Bloomfield Township',
    'basement water extraction Bloomfield',
    'sewage cleanup Bloomfield MI',
    'storm damage repair Bloomfield',
    'structural drying Bloomfield Township',
    'water damage Bloomfield Hills',
    '24/7 water damage restoration Bloomfield',
    'Provail Restoration of Bloomfield Township MI',
  ],
  openGraph: {
    title:
      'Provail Restoration of Bloomfield | 24/7 Emergency | (248) 531-8404',
    description:
      'Provail Restoration of Bloomfield provides 24/7 emergency water damage restoration, flood cleanup, mold remediation, and more in Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/bloomfield',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/bloomfield',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/bloomfield',
  name: 'Provail Restoration of Bloomfield',
  legalName: 'Provail Restoration of Bloomfield',
  alternateName: 'Provail Restoration of Bloomfield',
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/bloomfield',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4060 W Maple Rd',
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.5597,
    longitude: -83.3877,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Village' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
    { '@type': 'City', name: 'Farmington Hills' },
    { '@type': 'City', name: 'Southfield' },
    { '@type': 'City', name: 'Royal Oak' },
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Franklin' },
    { '@type': 'City', name: 'Keego Harbor' },
  ],
  serviceType: [
    'Water Damage Restoration',
    'Flood Cleanup',
    'Mold Remediation',
    'Emergency Water Removal',
    'Basement Water Extraction',
    'Sewage Cleanup',
    'Storm Damage Repair',
    'Structural Drying',
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  image: [],
  sameAs: [],
}

export default function BloomfieldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
