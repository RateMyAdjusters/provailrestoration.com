import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Fire Damage Restoration Rochester Hills MI | Provail',
  description:
    'Fire & smoke damage restoration in Rochester Hills, MI near Oakland University. 24/7 board-up, soot cleanup, odor removal. Call (248) 531-8404.',
  keywords: [
    'fire damage restoration Rochester Hills MI',
    'smoke damage cleanup Rochester Hills',
    'soot cleanup 48306',
    'kitchen fire restoration Rochester Hills',
    'puffback cleanup Rochester Hills MI',
    'EV charging fire cleanup Adams corridor',
    'Oakland University dorm fire cleanup',
    'chimney fire restoration Rochester Hills',
    'board up services Rochester Hills MI',
    'odor removal after fire Rochester Hills',
  ],
  alternates: {
    canonical:
      'https://provailrestoration.com/rochester-hills-mi-fire-damage-restoration',
  },
  openGraph: {
    title: 'Fire & Smoke Damage Restoration — Rochester Hills, MI',
    description:
      'Rochester Hills fire and smoke restoration specialists. 24/7 emergency response from Oakland University to the Adams corridor.',
    url: 'https://provailrestoration.com/rochester-hills-mi-fire-damage-restoration',
    siteName: 'Provail Restoration of Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id':
    'https://provailrestoration.com/rochester-hills-mi-fire-damage-restoration#rochester-hills-fire-service',
  name: 'Provail Restoration of Bloomfield — Rochester Hills Fire Damage',
  parentOrganization: { '@id': 'https://provailrestoration.com/#organization' },
  url: 'https://provailrestoration.com/rochester-hills-mi-fire-damage-restoration',
  telephone: '+1-248-531-8404',
  image: 'https://provailrestoration.com/logo.png',
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Insurance',
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
  openingHoursSpecification: {
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
  serviceType: [
    'Fire Damage Restoration',
    'Smoke Damage Cleanup',
    'Soot Removal',
    'Kitchen Fire Restoration',
    'Chimney Fire Cleanup',
    'Puffback Cleanup',
    'Board-Up and Tarping',
    'Odor Neutralization',
    'Contents Pack-Out',
    'Fire Reconstruction',
    'HEPA Air Scrubbing',
    'Thermal Fogging',
  ],
  areaServed: [
    { '@type': 'City', name: 'Rochester Hills, MI' },
    { '@type': 'PostalCode', name: '48306' },
    { '@type': 'PostalCode', name: '48307' },
    { '@type': 'PostalCode', name: '48309' },
    { '@type': 'Place', name: 'Oakland University' },
    { '@type': 'Place', name: 'Meadowbrook' },
    { '@type': 'Place', name: 'Rochester Heights' },
    { '@type': 'Place', name: 'Stony Creek Ridge' },
    { '@type': 'Place', name: 'Christian Hills' },
    { '@type': 'Place', name: 'The Hills of Oakland' },
    { '@type': 'Place', name: 'Butler Ridge' },
    { '@type': 'Place', name: 'Avon Estates' },
    { '@type': 'City', name: 'Rochester, MI' },
    { '@type': 'City', name: 'Auburn Hills, MI' },
    { '@type': 'City', name: 'Troy, MI' },
    { '@type': 'City', name: 'Oakland Township, MI' },
    { '@type': 'City', name: 'Shelby Township, MI' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fire & Smoke Restoration Services in Rochester Hills, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Damage Restoration',
          description:
            'Full-scope fire damage recovery for Rochester Hills homes, from emergency stabilization to finished rebuild.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smoke & Soot Cleanup',
          description:
            'Category-specific soot removal (protein, wet, dry, fuel-oil) throughout Rochester Hills structures and finishes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Odor Neutralization',
          description:
            'Hydroxyl, ozone, and thermal fogging treatments to pull smoke odor out of Rochester Hills homes and contents.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Board-Up & Tarping',
          description:
            'Emergency structural securing and roof tarping after fires in Rochester Hills, including student rentals near Oakland University.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contents Pack-Out',
          description:
            'Chain-of-custody pack-out, off-site ultrasonic and ozone cleaning for personal belongings from Rochester Hills fire sites.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconstruction After Fire',
          description:
            'Drywall, trim, paint, flooring, and full rebuild services permitted through Rochester Hills Building Department.',
        },
      },
    ],
  },
}

export default function RochesterHillsFireLayout({
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
