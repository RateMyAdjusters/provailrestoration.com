import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Lake Orion MI | Provail',
  description:
    'Lake Orion water damage restoration — lakefront cottages, converted lake homes, village of Lake Orion, Orion Township. 24/7 response via M-24. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Lake Orion MI',
    'lakefront water damage Lake Orion',
    'Lake Orion cottage water damage',
    'Orion Township basement flooding',
    'frozen pipe repair Lake Orion Michigan',
    'seawall leak basement Lake Orion',
    'GM Orion Assembly water damage',
    'Keatington water damage',
    'village of Lake Orion water restoration',
    'Paint Creek headwaters flooding',
  ],
  openGraph: {
    title: 'Water Damage Restoration Lake Orion MI | Provail',
    description:
      'Lakefront and inland water damage response for Lake Orion and Orion Township. Cottages, seawall leaks, frozen pipes, sump failures. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/lake-orion-mi-water-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/lake-orion-mi-water-damage-restoration',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/lake-orion-mi-water-damage-restoration#lake-orion-service',
  name: 'Provail Restoration of Bloomfield — Lake Orion Service Area',
  parentOrganization: {
    '@id': 'https://provailrestoration.com/#organization',
  },
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/lake-orion-mi-water-damage-restoration',
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
    latitude: 42.4895,
    longitude: -83.1446,
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
    { '@type': 'City', name: 'Village of Lake Orion' },
    { '@type': 'AdministrativeArea', name: 'Orion Township' },
    { '@type': 'Place', name: 'Lake Orion (lake)' },
    { '@type': 'Place', name: 'Keatington' },
    { '@type': 'Place', name: 'GM Orion Assembly Plant area' },
    { '@type': 'Place', name: 'Bald Mountain Recreation Area' },
    { '@type': 'Place', name: 'Eagle Pointe' },
    { '@type': 'Place', name: 'Orion Oaks' },
    { '@type': 'City', name: 'Oakland Township' },
    { '@type': 'City', name: 'Rochester Hills' },
    { '@type': 'City', name: 'Clarkston' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Lake Orion Water Damage Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Lakefront Water Damage Restoration' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Cottage Conversion Water Mitigation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Seawall Infiltration Basement Drying' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Frozen Pipe Repair & Burst Line Mitigation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Sump Pump Failure Cleanup' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Commercial Water Mitigation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Mold Remediation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Reconstruction Services' },
      },
    ],
  },
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
}

export default function LakeOrionLayout({
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
