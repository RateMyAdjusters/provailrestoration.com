import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Rochester Hills MI | Provail',
  description:
    'Rochester Hills water damage restoration, 24/7. From Oakland University to the Clinton River corridor, crews dispatch from Bloomfield Township. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Rochester Hills MI',
    'emergency water removal Rochester Hills',
    '24 hour flood cleanup Rochester Hills Michigan',
    'flooded basement Rochester Hills 48306',
    'burst pipe repair Rochester Hills 48307',
    'sump pump failure Rochester Hills 48309',
    'Clinton River flood cleanup',
    'Oakland University water damage',
    'Meadowbrook basement flood',
    'Tienken corridor water restoration',
  ],
  openGraph: {
    title: 'Water Damage Restoration Rochester Hills MI | Provail',
    description:
      '24/7 water, fire, storm, mold and sewage restoration for Rochester Hills — Oakland University, Clinton River, Meadowbrook, Adams corridor. (248) 531-8404.',
    url: 'https://provailrestoration.com/rochester-hills-mi-water-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/rochester-hills-mi-water-damage-restoration',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/rochester-hills-mi-water-damage-restoration#rochester-hills-service-area',
  name: 'Provail Restoration of Bloomfield — Rochester Hills Service Area',
  parentOrganization: {
    '@id': 'https://provailrestoration.com/#organization',
  },
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/rochester-hills-mi-water-damage-restoration',
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
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'Place', name: 'Meadowbrook' },
    { '@type': 'Place', name: 'Rochester Heights' },
    { '@type': 'Place', name: 'Stony Creek Ridge' },
    { '@type': 'Place', name: 'Christian Hills' },
    { '@type': 'Place', name: 'Avon Estates' },
    { '@type': 'Place', name: 'Hickory Hills' },
    { '@type': 'Place', name: 'Oakland University' },
    { '@type': 'Place', name: 'Clinton River Corridor' },
    { '@type': 'Place', name: 'Tienken Corridor' },
    { '@type': 'City', name: 'Rochester' },
    { '@type': 'City', name: 'Auburn Hills' },
    { '@type': 'City', name: 'Oakland Township' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rochester Hills Restoration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Damage Restoration',
          description:
            'Water extraction, structural drying and moisture mapping for Rochester Hills homes from older Rochester Heights ranches to new Tienken-corridor colonials.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire & Smoke Damage Restoration',
          description:
            'Soot removal, thermal fogging and contents cleaning for Rochester Hills households across the 48306, 48307 and 48309 ZIP codes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Restoration',
          description:
            'Board-up, tarp-over and water mitigation after wind and hail events like the April 2026 Oakland County storm impacting Rochester Hills neighborhoods.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation',
          description:
            'Containment and HEPA filtration for slow-leak mold in Rochester Hills finished basements, built out in the Meadowbrook and Avon Estates subdivisions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Cleanup',
          description:
            'Category 3 black-water extraction and disinfection for sewer backups along Rochester Hills lines near the Clinton River lowlands.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconstruction Services',
          description:
            'Drywall, flooring, cabinetry and finish carpentry rebuild for Rochester Hills homes, from 1950s plaster walls to radiant-slab Adams Road new-builds.',
        },
      },
    ],
  },
  serviceType: [
    'Water Damage Restoration',
    'Fire Damage Restoration',
    'Storm Damage Restoration',
    'Mold Remediation',
    'Sewage Cleanup',
    'Reconstruction',
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
}

export default function RochesterHillsLayout({
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
