import type { Metadata } from 'next'

const PAGE_URL =
  'https://provailrestoration.com/auburn-hills-mi-water-damage-restoration'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Auburn Hills MI | Provail',
  description:
    'Water damage restoration in Auburn Hills, MI 48326. 24/7 response for Stellantis-area office sprinklers, Oakland University student housing, and commercial losses. (248) 531-8404.',
  keywords: [
    'water damage restoration Auburn Hills MI',
    'Auburn Hills commercial water damage',
    'Auburn Hills MI flood cleanup',
    'Oakland University water damage',
    'Stellantis area water damage',
    'Great Lakes Crossing water damage',
    'emergency water removal Auburn Hills',
    'Auburn Hills burst pipe repair',
    'Auburn Hills basement flood',
    'Auburn Hills sprinkler discharge cleanup',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Water Damage Restoration Auburn Hills MI | Provail',
    description:
      'Commercial and residential water damage response for Auburn Hills — Stellantis HQ corridor, Oakland University, Great Lakes Crossing. (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const auburnHillsServiceAreaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#auburn-hills-service`,
  name: 'Provail Restoration of Bloomfield — Auburn Hills Service Area',
  url: PAGE_URL,
  telephone: '+12485318404',
  parentOrganization: {
    '@id': 'https://provailrestoration.com/#organization',
  },
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
    latitude: 42.5467,
    longitude: -83.2113,
  },
  areaServed: [
    { '@type': 'City', name: 'Auburn Hills' },
    { '@type': 'Place', name: 'Oakland University' },
    { '@type': 'Place', name: 'Great Lakes Crossing Outlets' },
    { '@type': 'Place', name: 'Stellantis Headquarters Corridor' },
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Pontiac' },
    { '@type': 'City', name: 'Rochester' },
    { '@type': 'City', name: 'Lake Orion' },
    { '@type': 'City', name: 'Bloomfield Township' },
  ],
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
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Water Damage and Restoration Services for Auburn Hills, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Water Damage Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Water Damage Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Sprinkler Discharge Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Basement Flood Extraction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burst Pipe and Frozen Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Tenant and Condo Water Migration Mitigation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hotel and Hospitality Guest-Room Water Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Cleanup and Decontamination',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structural Drying and Dehumidification',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconstruction and Build-Back',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Repair',
        },
      },
    ],
  },
}

export default function AuburnHillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(auburnHillsServiceAreaJsonLd),
        }}
      />
      {children}
    </>
  )
}
