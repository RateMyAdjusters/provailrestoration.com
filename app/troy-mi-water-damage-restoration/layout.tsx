import type { Metadata } from 'next'

const PAGE_URL = 'https://provailrestoration.com/troy-mi-water-damage-restoration'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Troy MI | Provail Restoration of Bloomfield',
  description:
    'Water damage restoration in Troy, MI. Same-day response to Somerset-area basement floods, Big Beaver office-park losses, and 1970s colonial sump pump failures. (248) 531-8404.',
  keywords: [
    'water damage restoration Troy MI',
    'Troy Michigan flood cleanup',
    'basement water extraction Troy',
    'Big Beaver commercial water damage',
    'Somerset area water damage',
    'Raintree Village sump pump',
    'Sylvan Glen water damage',
    'Northfield Hills flood cleanup',
    'Troy Corners water damage',
    'frost heave pipe burst Troy',
    'Provail Restoration of Bloomfield Troy',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Water Damage Restoration Troy MI | Provail Restoration of Bloomfield',
    description:
      'Local water damage, flood, and mold response for Troy, Michigan — from Somerset luxury basements to Big Beaver office corridors. Call (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const troyServiceAreaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#troy-service-area`,
  name: 'Provail Restoration of Bloomfield — Troy Service Area',
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
    latitude: 42.6064,
    longitude: -83.1498,
  },
  areaServed: [
    { '@type': 'City', name: 'Troy' },
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Clawson' },
    { '@type': 'City', name: 'Madison Heights' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'Royal Oak' },
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
    name: 'Restoration Services for Troy, MI',
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
          name: 'Basement Flood Cleanup & Extraction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frozen Pipe & Burst Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Cleanup & Decontamination',
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
          name: 'Structural Drying & Dehumidification',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Restoration for Offices & Retail',
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

export default function TroyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(troyServiceAreaJsonLd),
        }}
      />
      {children}
    </>
  )
}
