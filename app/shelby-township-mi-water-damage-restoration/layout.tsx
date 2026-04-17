import type { Metadata } from 'next'

const PAGE_URL =
  'https://provailrestoration.com/shelby-township-mi-water-damage-restoration'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Shelby Township MI | Provail',
  description:
    'Water damage restoration in Shelby Township, MI — Clinton River floodplain, Stony Creek area, Macomb County sump failures. 24/7 at (248) 531-8404.',
  keywords: [
    'water damage restoration Shelby Township MI',
    'Shelby Township flood cleanup',
    'Macomb County water damage',
    'Clinton River flood restoration',
    'Stony Creek Metropark water damage',
    'Cherry Creek basement flooding',
    'Shelby Forest sump pump failure',
    'Plumcrest subdivision water damage',
    'Shelby Township sewer backup',
    'Utica Community Schools area restoration',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Water Damage Restoration Shelby Township MI | Provail',
    description:
      'Macomb County water damage response for Shelby Township — Clinton River floodplain, Cherry Creek sump failures, Stony Creek area luxury builds. Call (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const shelbyServiceAreaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#shelby-twp-service`,
  name: 'Provail Restoration of Bloomfield — Shelby Township Service Area',
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
    { '@type': 'City', name: 'Shelby Township' },
    { '@type': 'Place', name: 'Stony Creek Metropark' },
    { '@type': 'Place', name: 'Clinton River Corridor' },
    { '@type': 'Place', name: 'Cherry Creek' },
    { '@type': 'Place', name: 'Shelby Forest' },
    { '@type': 'Place', name: 'Plumcrest' },
    { '@type': 'Place', name: 'River Bends Park' },
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Macomb Township' },
    { '@type': 'City', name: 'Utica' },
    { '@type': 'City', name: 'Washington Township' },
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
    name: 'Water-Focused Restoration Services for Shelby Township, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Water Damage Restoration',
          description:
            'Rapid water extraction and structural drying for Shelby Township homes across Cherry Creek, Shelby Forest, and the Clinton River corridor.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Finished Basement Flood Cleanup',
          description:
            'Full-service cleanup for Shelby Township finished basements after sump pump failure — carpet, pad, drywall, and millwork extraction and drying.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sump Pump Failure Response',
          description:
            'Same-day emergency response for the 1990s subdivision density of single-sump homes across Shelby Township — Plumcrest, Brookshire, Villas of Cherry Creek.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Backup Cleanup',
          description:
            'Category 3 sewer backup cleanup and sanitization for the older Macomb County combined-sewer corridors along 23 Mile and Van Dyke in Shelby Township.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Clinton River Flood Intrusion',
          description:
            'Silt-laden groundwater and surface flooding response for Shelby Township homes near River Bends Park, Holland Ponds, and the 25 Mile Clinton River floodplain.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frozen Pipe & Burst Pipe Response',
          description:
            'Winter pipe burst extraction and wall-cavity drying for Shelby Township colonials and ranches across Shelby Forest, Cheyenne Trails, and Andersonville.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation',
          description:
            'IICRC-protocol mold remediation for Shelby Township finished basements and crawl spaces impacted by prolonged moisture.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Restoration',
          description:
            'Storm response across Shelby Township — wind-driven rain intrusion, roof leaks, and tree-impact water damage following Macomb County severe weather events.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconstruction Services',
          description:
            'Post-mitigation rebuild for Shelby Township homes — drywall, flooring, trim, and finish carpentry matched to 1990s subdivision construction standards.',
        },
      },
    ],
  },
}

export default function ShelbyTownshipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(shelbyServiceAreaJsonLd),
        }}
      />
      {children}
    </>
  )
}
