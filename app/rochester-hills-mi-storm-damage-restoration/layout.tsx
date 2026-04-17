import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storm Damage Restoration Rochester Hills MI | Provail',
  description:
    'Rochester Hills storm damage restoration after the April 15, 2026 squall line. 24/7 emergency tarp, board-up, wind & tree impact repair. Call (248) 531-8404.',
  keywords: [
    'storm damage restoration Rochester Hills MI',
    'wind damage repair Rochester Hills',
    'tree damage cleanup Rochester Hills MI',
    'emergency tarp Rochester Hills',
    'board up service Rochester Hills MI',
    'hail damage roof Rochester Hills',
    'April 2026 storm Oakland County',
    'straight line wind damage 48306',
    'storm roof damage 48307',
    'emergency storm response 48309',
  ],
  alternates: {
    canonical:
      'https://provailrestoration.com/rochester-hills-mi-storm-damage-restoration',
  },
  openGraph: {
    title: 'Storm Damage Restoration Rochester Hills MI | Provail',
    description:
      'Rochester Hills storm response after the April 15, 2026 squall line. Tarp, board-up, tree impact, wind-driven rain. Dispatching now — (248) 531-8404.',
    url: 'https://provailrestoration.com/rochester-hills-mi-storm-damage-restoration',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id':
    'https://provailrestoration.com/rochester-hills-mi-storm-damage-restoration#rochester-hills-storm-service',
  name: 'Provail Restoration of Bloomfield — Rochester Hills Storm Damage Response',
  description:
    'Emergency storm damage restoration in Rochester Hills, MI. Emergency tarping, board-up, wind damage, tree impact structural repair, hail damage assessment, and wind-driven rain mitigation after the April 15, 2026 Oakland County storm event and every storm that follows.',
  url: 'https://provailrestoration.com/rochester-hills-mi-storm-damage-restoration',
  telephone: '+1-248-531-8404',
  priceRange: '$$',
  paymentAccepted: 'Cash, Check, Credit Card, Insurance Direct Billing',
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
    latitude: 42.5503,
    longitude: -83.2755,
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
  areaServed: [
    { '@type': 'City', name: 'Rochester Hills, MI' },
    { '@type': 'PostalCode', name: '48306' },
    { '@type': 'PostalCode', name: '48307' },
    { '@type': 'PostalCode', name: '48309' },
    { '@type': 'Place', name: 'Meadowbrook, Rochester Hills' },
    { '@type': 'Place', name: 'Rochester Heights, Rochester Hills' },
    { '@type': 'Place', name: 'Stony Creek Ridge, Rochester Hills' },
    { '@type': 'Place', name: 'Christian Hills, Rochester Hills' },
    { '@type': 'Place', name: 'The Hills of Oakland, Rochester Hills' },
    { '@type': 'Place', name: 'Butler Ridge, Rochester Hills' },
    { '@type': 'Place', name: 'Avon Estates, Rochester Hills' },
    { '@type': 'City', name: 'Rochester, MI' },
    { '@type': 'City', name: 'Auburn Hills, MI' },
    { '@type': 'City', name: 'Troy, MI' },
    { '@type': 'City', name: 'Oakland Township, MI' },
    { '@type': 'City', name: 'Shelby Township, MI' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Storm Damage Restoration Services in Rochester Hills, MI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Storm Damage Restoration',
          description:
            'Full-service storm damage restoration for Rochester Hills homes and businesses — stabilization, water mitigation, structural repair, and insurance-ready documentation after wind, hail, and tree impact events in 48306, 48307, and 48309.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Tarping',
          description:
            '24/7 emergency roof tarping in Rochester Hills, MI. Heavy-duty poly tarps with 3-foot minimum overlap, 2x4 batten system, and 15lb felt underlayment for short-term protection after wind and tree-impact shingle loss.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Board-Up Services',
          description:
            'Emergency window and opening board-up in Rochester Hills with 1/2-inch plywood minimum, screwed (not nailed) on historic Adams Rd and Tienken corridor homes to protect original trim during storm aftermath.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wind Damage Repair',
          description:
            'Straight-line wind damage repair in Rochester Hills — shingle replacement, soffit and fascia reset, ridge vent repair, and siding re-attachment for Hardie, LP SmartSide, and aluminum claddings common to Meadowbrook and Stony Creek Ridge.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tree Impact Structural Repair',
          description:
            'Tree impact structural assessment and repair in Rochester Hills, MI. Coordination with licensed structural engineers for penetrative and crush damage from the mature oaks and maples along the Clinton River corridor and Avon Estates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hail Damage Restoration',
          description:
            'Hail damage inspection and restoration for Rochester Hills roofs, gutters, and exterior systems. Granule-loss analysis on asphalt shingles, impact mapping for insurance, and coordination with adjusters after Oakland County hail events.',
        },
      },
    ],
  },
}

export default function RochesterHillsStormLayout({
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
