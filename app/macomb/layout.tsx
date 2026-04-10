import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Provail Restoration of Macomb | Water Damage Restoration | (586) 207-9091',
  description:
    'Provail Restoration of Macomb provides 24/7 emergency water damage restoration, water removal, flood cleanup, structural drying, basement water extraction, and storm damage restoration in Macomb, MI. Call (586) 207-9091.',
  keywords: [
    'Provail Restoration of Macomb',
    'water damage restoration Macomb MI',
    'emergency water damage restoration Macomb',
    'flood cleanup Macomb MI',
    'water removal Macomb',
    'basement water extraction Macomb',
    'structural drying Macomb MI',
    'storm damage restoration Macomb',
    '48816 Romeo Plank Rd Macomb MI 48044',
    'water damage restoration near me Macomb',
  ],
  openGraph: {
    title:
      'Provail Restoration of Macomb | Water Damage Restoration | (586) 207-9091',
    description:
      '24/7 emergency water damage restoration, flood cleanup, water removal, and drying in Macomb, MI.',
    url: 'https://provailrestoration.com/macomb',
    siteName: 'Provail Restoration of Macomb',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/macomb',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/macomb',
  name: 'Provail Restoration of Macomb',
  description:
    '24/7 emergency water damage restoration, flood cleanup, water removal, structural drying, and restoration serving Macomb and nearby communities.',
  url: 'https://provailrestoration.com/macomb',
  telephone: '+15862079091',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '48816 Romeo Plank Rd',
    addressLocality: 'Macomb',
    addressRegion: 'MI',
    postalCode: '48044',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Macomb', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Macomb Township', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Clinton Township', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Shelby Township', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Sterling Heights', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Utica', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Romeo', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Washington Township', containedInPlace: { '@type': 'State', name: 'Michigan' } },
  ],
  serviceType: [
    'Water Damage Restoration',
    'Emergency Water Removal',
    'Flood Cleanup',
    'Structural Drying',
    'Basement Water Extraction',
    'Storm Damage Restoration',
    'Sewage Cleanup',
    'Mold Remediation',
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  currenciesAccepted: 'USD',
  sameAs: [],
}

export default function MacombLayout({
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
