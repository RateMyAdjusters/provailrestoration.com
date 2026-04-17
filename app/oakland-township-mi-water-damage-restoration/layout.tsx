import type { Metadata } from 'next'

const PAGE_URL = 'https://provailrestoration.com/oakland-township-mi-water-damage-restoration'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Oakland Township MI | Provail',
  description:
    'Estate and horse-farm water damage response in Oakland Township, MI. Well pump floods, septic backups, Paint Creek corridor losses. 24/7. (248) 531-8404.',
  keywords: [
    'water damage restoration Oakland Township MI',
    'estate water damage Oakland Township',
    'horse farm water damage Michigan',
    'well pump flood Oakland Township',
    'septic backup cleanup Oakland Twp',
    'Paint Creek flood restoration',
    'Chubb water damage contractor Michigan',
    'large home drying Oakland County',
    'Gunn Rd water damage',
    'Oakland Township basement flood',
    'Provail Restoration of Bloomfield Oakland Township',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Water Damage Restoration Oakland Township MI | Provail',
    description:
      'Estate-home and horse-farm water damage response for Oakland Township, Michigan — well pump floods, septic backups, Paint Creek corridor losses. Call (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const oaklandTwpServiceAreaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#oakland-twp-service`,
  name: 'Provail Restoration of Bloomfield — Oakland Township Service Area',
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
    { '@type': 'AdministrativeArea', name: 'Oakland Township, MI' },
    { '@type': 'Place', name: 'Paint Creek Corridor' },
    { '@type': 'Place', name: 'Bald Mountain Recreation Area' },
    { '@type': 'Place', name: 'Addison Oaks County Park area' },
    { '@type': 'Place', name: 'Stony Creek Metropark (west side)' },
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Rochester' },
    { '@type': 'AdministrativeArea', name: 'Orion Township, MI' },
    { '@type': 'AdministrativeArea', name: 'Addison Township, MI' },
    { '@type': 'AdministrativeArea', name: 'Washington Township, MI' },
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
  priceRange: '$$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Restoration Services for Oakland Township, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Estate-Home Water Damage Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Well Pump & Utility Room Flood Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic Backup Cleanup & Category 3 Decontamination',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Horse Barn & Equestrian Facility Water Damage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paint Creek Corridor Flood Response',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Large-Home Structural Drying (5,000+ sqft)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Radiant Slab & Concrete Floor Water Intrusion',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation for Estate Properties',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'High-Net-Worth Insurance Carrier Documentation',
        },
      },
    ],
  },
}

export default function OaklandTownshipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(oaklandTwpServiceAreaJsonLd),
        }}
      />
      {children}
    </>
  )
}
