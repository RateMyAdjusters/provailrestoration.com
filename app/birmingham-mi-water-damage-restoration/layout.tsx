import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Birmingham MI | Provail Restoration of Bloomfield',
  description:
    'Water damage restoration in Birmingham, MI. Provail Restoration of Bloomfield dispatches 24/7 to Quarton Lake, Poppleton Park & Downtown Birmingham. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Birmingham MI',
    'flood cleanup Birmingham Michigan',
    'basement flood Birmingham',
    'mold remediation Birmingham MI',
    'emergency water removal Birmingham',
    'Quarton Lake water damage',
    'Poppleton Park basement flood',
    'Provail Restoration of Bloomfield',
  ],
  openGraph: {
    title: 'Water Damage Restoration Birmingham MI | Provail Restoration of Bloomfield',
    description:
      '24/7 emergency water, fire, storm, mold and sewage restoration servicing Birmingham, Michigan from our Bloomfield Township office. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/birmingham-mi-water-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/birmingham-mi-water-damage-restoration',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/birmingham-mi-water-damage-restoration#birmingham-service-area',
  name: 'Provail Restoration of Bloomfield — Birmingham Service Area',
  parentOrganization: {
    '@id': 'https://provailrestoration.com/#organization',
  },
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/birmingham-mi-water-damage-restoration',
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
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'Place', name: 'Quarton Lake' },
    { '@type': 'Place', name: 'Poppleton Park' },
    { '@type': 'Place', name: 'Downtown Birmingham' },
    { '@type': 'Place', name: 'Pembroke Manor' },
    { '@type': 'Place', name: 'Holy Name' },
    { '@type': 'Place', name: 'Rouge River Corridor' },
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Franklin' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Birmingham Restoration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Damage Restoration',
          description:
            'Emergency water extraction, structural drying and moisture mapping for Birmingham homes and businesses.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire & Smoke Damage Restoration',
          description:
            'Soot removal, odor neutralization and content cleaning following residential or commercial fires in Birmingham.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Restoration',
          description:
            'Board-up, tarp-over and water mitigation for wind, hail and fallen-tree damage across Birmingham neighborhoods.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation',
          description:
            'Containment, HEPA filtration and affected-material removal performed to IICRC S520 standards.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Cleanup',
          description:
            'Category 3 black-water extraction, disinfection and disposal for sewer backups in Birmingham basements.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconstruction Services',
          description:
            'Drywall, flooring, cabinetry and finish carpentry rebuild after the mitigation phase is complete.',
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

export default function BirminghamLayout({
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
