import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Rochester MI | Provail',
  description:
    'Water damage restoration in Rochester, MI — historic downtown, Paint Creek corridor, 1900s Victorians and craftsman bungalows. 24/7 response from our Bloomfield crew, ~22 minutes away. Call (248) 531-8404.',
  keywords: [
    'water damage restoration Rochester MI',
    'Rochester MI water damage',
    'downtown Rochester flood cleanup',
    'Paint Creek flooding Rochester',
    'historic home water damage Rochester',
    'Victorian home flood repair Rochester MI',
    'Main Street Rochester commercial water damage',
    'Rochester MI basement flooding',
    'stone foundation drying Rochester',
    'plaster wall drying Rochester MI',
  ],
  alternates: {
    canonical:
      'https://provailrestoration.com/rochester-mi-water-damage-restoration',
  },
  openGraph: {
    title: 'Water Damage Restoration Rochester MI | Provail',
    description:
      'Historic downtown Rochester water damage specialists — Paint Creek flood response, plaster-safe drying, period-matched reconstruction. 24/7 from Bloomfield Township.',
    url: 'https://provailrestoration.com/rochester-mi-water-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RochesterMiWaterDamageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id':
      'https://provailrestoration.com/rochester-mi-water-damage-restoration#rochester-mi-service',
    name: 'Provail Restoration of Bloomfield — Rochester, MI Water Damage Service',
    image: 'https://provailrestoration.com/logo.png',
    url: 'https://provailrestoration.com/rochester-mi-water-damage-restoration',
    telephone: '+1-248-531-8404',
    priceRange: '$$',
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
      latitude: 42.5506,
      longitude: -83.2752,
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
      {
        '@type': 'City',
        name: 'Rochester',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rochester',
          addressRegion: 'MI',
          postalCode: '48306',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        name: 'Downtown Rochester, MI',
      },
      {
        '@type': 'Place',
        name: 'Paint Creek Corridor',
      },
      {
        '@type': 'Place',
        name: 'Rochester Mills District',
      },
      {
        '@type': 'City',
        name: 'Rochester Hills, MI',
      },
      {
        '@type': 'City',
        name: 'Oakland Township, MI',
      },
      {
        '@type': 'City',
        name: 'Auburn Hills, MI',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rochester, MI Water Damage Restoration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Water Extraction — Rochester Historic Homes & Downtown Commercial',
            description:
              'Truck-mounted extraction for Paint Creek overflow, sprinkler discharges in Main Street retail, and basement flooding in stone-foundation homes near downtown Rochester.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plaster-Safe Structural Drying — Rochester Victorians & Craftsman Bungalows',
            description:
              'Injection drying and cavity systems designed for plaster-and-lath walls, original hardwoods, and period trim in 1890s–1940s Rochester homes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mold Prevention After Flooding — Paint Creek Corridor',
            description:
              'Antimicrobial treatment, moisture mapping, and containment for homes along Water Street, Paint Creek Trail, and other low-lying Rochester locations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sewage and Category 3 Cleanup — Rochester',
            description:
              'Clay-lateral backups, cast-iron stack failures, and Paint Creek overflow carrying contaminants. IICRC S500 protocols for historic basements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Period-Matched Reconstruction — Rochester Historic District Adjacent',
            description:
              'Plaster repair, salvage and refinish of original hardwoods, sourcing of period-matched trim and millwork for Pine, Walnut, and Wilcox street homes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Tarping and Board-Up — Downtown Rochester Commercial',
            description:
              'Same-day stabilization for Main Street storefronts, Rochester Mills-area mixed-use buildings, and condos above retail.',
          },
        },
      ],
    },
  }

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
