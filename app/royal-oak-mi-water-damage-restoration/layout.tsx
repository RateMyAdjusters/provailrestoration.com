import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Royal Oak MI | Provail Restoration of Bloomfield',
  description:
    'Royal Oak water damage restoration from Provail Restoration of Bloomfield. 24/7 response for sewer backups, Red Run flooding, frozen pipes. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Royal Oak MI',
    'Royal Oak basement flooding',
    'sewage cleanup Royal Oak',
    'frozen pipe repair Royal Oak Michigan',
    'mold remediation Royal Oak',
    'Vinsetta Park water damage',
    'Red Run Drain flooding',
    'Provail Restoration of Bloomfield Royal Oak',
  ],
  openGraph: {
    title: 'Water Damage Restoration Royal Oak MI | Provail Restoration of Bloomfield',
    description:
      'Royal Oak water damage, sewer backup, and flood cleanup. 24/7 dispatch from our Bloomfield Township office. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/royal-oak-mi-water-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/royal-oak-mi-water-damage-restoration',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/royal-oak-mi-water-damage-restoration#royal-oak-service-area',
  name: 'Provail Restoration of Bloomfield — Royal Oak Service Area',
  parentOrganization: {
    '@id': 'https://provailrestoration.com/#organization',
  },
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/royal-oak-mi-water-damage-restoration',
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
    { '@type': 'City', name: 'Royal Oak' },
    { '@type': 'City', name: 'Pleasant Ridge' },
    { '@type': 'City', name: 'Huntington Woods' },
    { '@type': 'City', name: 'Berkley' },
    { '@type': 'City', name: 'Clawson' },
    { '@type': 'City', name: 'Ferndale' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Royal Oak Restoration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Water Damage Restoration' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Fire Damage Restoration' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Storm Damage Restoration' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Mold Remediation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Sewage Cleanup' },
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

export default function RoyalOakLayout({
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
