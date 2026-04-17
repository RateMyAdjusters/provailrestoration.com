import type { Metadata } from 'next'

const PAGE_URL = 'https://provailrestoration.com/pontiac-mi-water-damage-restoration'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Pontiac MI | Provail',
  description:
    'Water damage restoration in Pontiac, MI — 7 miles from our office, the closest city we serve. 15-minute typical response, older-home expertise. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Pontiac MI',
    'Pontiac MI water damage',
    'Pontiac flooded basement',
    'Pontiac apartment water damage',
    'Seminole Hills water damage',
    'Downtown Pontiac loft water damage',
    'Pontiac sewer backup cleanup',
    'galvanized pipe leak Pontiac',
    'West Pontiac basement flood',
    'Pontiac landlord water damage',
    'Provail Restoration Pontiac',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Water Damage Restoration Pontiac MI | Provail Restoration of Bloomfield',
    description:
      'Closest response of any city we serve — 7 miles and 15 minutes from our Bloomfield office. Older-home plumbing, apartment water migration, tenant-landlord coordination. (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const pontiacServiceAreaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#pontiac-service`,
  name: 'Provail Restoration of Bloomfield — Pontiac Service Area',
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
    { '@type': 'City', name: 'Pontiac' },
    { '@type': 'Place', name: 'Seminole Hills' },
    { '@type': 'Place', name: 'Downtown Pontiac' },
    { '@type': 'Place', name: 'West Pontiac' },
    { '@type': 'Place', name: 'Pontiac Lake' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Auburn Hills' },
    { '@type': 'City', name: 'Waterford' },
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
    name: 'Water Damage Restoration Services for Pontiac, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Water Damage Restoration for Older Pontiac Homes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Combined Sewer Backup Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Galvanized Supply Line & Cast-Iron Stack Leak Drying',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Unit Apartment Water Migration Response',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plaster Wall Injection Drying for Historic Homes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sump Pump Failure & Spring Melt Basement Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Boiler Room & Radiator Leak Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Absentee-Landlord & Tenant Coordination Restoration',
        },
      },
    ],
  },
}

export default function PontiacLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pontiacServiceAreaJsonLd),
        }}
      />
      {children}
    </>
  )
}
