import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PROVAIL Water Damage Restoration (Bloomfield) | 24/7 Emergency Service | (248) 531-8404',
  description:
    'PROVAIL Water Damage Restoration provides 24/7 emergency water damage restoration, flood cleanup, and mold remediation in Bloomfield Hills, Bloomfield Township, and surrounding areas. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Bloomfield',
    'PROVAIL restoration',
    'PROVAIL water damage restoration',
    'water damage restoration Bloomfield Hills',
    'water damage restoration Bloomfield Township',
    'flood cleanup Bloomfield MI',
    'mold remediation Bloomfield Hills',
    'emergency water removal Bloomfield',
    'water damage repair Bloomfield Township MI',
    'basement flooding Bloomfield Hills',
  ],
  openGraph: {
    title: 'PROVAIL Water Damage Restoration (Bloomfield) | 24/7 Emergency Service',
    description:
      '24/7 emergency water damage restoration, flood cleanup, and mold remediation in Bloomfield Hills & Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com',
    siteName: 'PROVAIL Water Damage Restoration (Bloomfield)',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com',
  name: 'PROVAIL Water Damage Restoration (Bloomfield)',
  description:
    '24/7 emergency water damage restoration, flood cleanup, and mold remediation serving Bloomfield Hills, Bloomfield Township, and surrounding areas.',
  url: 'https://provailrestoration.com',
  telephone: '+12485318404',
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
    latitude: 42.5597,
    longitude: -83.3877,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Hills', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Bloomfield Township', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Birmingham', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'West Bloomfield', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Troy', containedInPlace: { '@type': 'State', name: 'Michigan' } },
    { '@type': 'City', name: 'Farmington Hills', containedInPlace: { '@type': 'State', name: 'Michigan' } },
  ],
  serviceType: [
    'Water Damage Restoration',
    'Flood Cleanup',
    'Mold Remediation',
    'Emergency Water Removal',
    'Basement Water Extraction',
    'Sewage Cleanup',
    'Storm Damage Repair',
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  currenciesAccepted: 'USD',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
