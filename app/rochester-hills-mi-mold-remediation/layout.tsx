import type { Metadata } from 'next'

const PAGE_URL = 'https://provailrestoration.com/rochester-hills-mi-mold-remediation'

export const metadata: Metadata = {
  title: 'Mold Remediation Rochester Hills MI | IICRC S520 | Provail',
  description:
    'Rochester Hills, MI mold remediation to the IICRC S520 standard — basement wall-cavity mold, crawlspace joist mold, attic mold, and post-water mold. (248) 531-8404.',
  keywords: [
    'mold remediation Rochester Hills MI',
    'mold removal Rochester Hills Michigan',
    'black mold remediation Rochester Hills',
    'basement mold Rochester Hills',
    'crawlspace mold Rochester Hills MI',
    'attic mold removal Rochester Hills',
    'mold testing Rochester Hills MI',
    'mold inspection Rochester Hills',
    'IICRC S520 mold remediation Oakland County',
    'Meadowbrook basement mold',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Mold Remediation Rochester Hills MI | IICRC S520 | Provail',
    description:
      'IICRC S520 mold remediation in Rochester Hills, MI — basements, crawlspaces, attics, and post-water mold. Containment, HEPA air scrubbing, source control. (248) 531-8404.',
    url: PAGE_URL,
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const rochesterHillsMoldJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#rochester-hills-mold-service`,
  name: 'Provail Restoration of Bloomfield — Rochester Hills Mold Remediation',
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
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Rochester' },
    { '@type': 'City', name: 'Auburn Hills' },
    { '@type': 'City', name: 'Troy' },
    { '@type': 'City', name: 'Oakland Township' },
    { '@type': 'City', name: 'Shelby Township' },
    { '@type': 'PostalCodeSpecification', postalCode: '48306', addressCountry: 'US' },
    { '@type': 'PostalCodeSpecification', postalCode: '48307', addressCountry: 'US' },
    { '@type': 'PostalCodeSpecification', postalCode: '48309', addressCountry: 'US' },
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
    name: 'Mold Remediation Services for Rochester Hills, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Remediation',
          description:
            'IICRC S520 mold remediation for Rochester Hills, MI homes — containment, HEPA air scrubbing, porous material removal, and post-remediation verification.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mold Inspection',
          description:
            'Visual and moisture-meter mold inspection for Rochester Hills basements, crawlspaces, and attics — including wall-cavity probing where hidden growth is suspected.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Crawlspace Mold Remediation',
          description:
            'Crawlspace joist and subfloor mold cleaning for Rochester Hills east-side ranches, with encapsulation and dehumidification guidance as source control.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Attic Mold Remediation',
          description:
            'Attic sheathing mold remediation in Rochester Hills, MI — addressing ridge/soffit ventilation gaps and bathroom exhaust termination errors that drive winter condensation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Post-Remediation Verification',
          description:
            'Third-party air and surface sampling after remediation to confirm Condition 1 fungal ecology in Rochester Hills, MI homes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Moisture Source Control',
          description:
            'Identification and referral for the underlying moisture source in Rochester Hills mold cases — waterproofing, dehumidification, HVAC balancing, vapor barriers.',
        },
      },
    ],
  },
}

export default function RochesterHillsMoldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rochesterHillsMoldJsonLd),
        }}
      />
      {children}
    </>
  )
}
