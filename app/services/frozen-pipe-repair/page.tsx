import type { Metadata } from 'next'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from '../../_components/site-chrome'

export const metadata: Metadata = {
  title:
    'Frozen Pipe Repair & Burst Pipe Cleanup in Bloomfield, MI | (248) 531-8404',
  description:
    'Frozen and burst pipe water damage cleanup in Bloomfield Township and Oakland County. Safe thaw guidance, water extraction, structural drying, and ceiling/wall damage repair after a Michigan winter pipe burst. Call (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/frozen-pipe-repair',
  },
  openGraph: {
    title: 'Frozen Pipe Repair in Bloomfield, MI | PROVAIL',
    description:
      'Burst pipe cleanup, structural drying, and ceiling/wall damage restoration in Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/frozen-pipe-repair',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'I think a pipe is frozen but it has not burst yet — what should I do?',
    a: 'Open the affected faucet so water can flow as soon as the ice melts, and locate your main water shut-off in case the pipe gives way. Apply gentle warmth to the suspected frozen section using a hair dryer, a heat lamp, or warm towels. Never use an open flame, propane torch, or kerosene heater on a pipe — they are a fire hazard and can damage the pipe.',
  },
  {
    q: 'How much water comes out of a burst pipe?',
    a: 'A typical residential supply line under normal pressure can release several gallons per minute. A burst that runs for an hour while no one is home can release hundreds of gallons, which is why shutting off the main water supply is the single most important thing you can do before help arrives.',
  },
  {
    q: 'Why do pipes burst when they thaw?',
    a: 'When water freezes inside a pipe, the expanding ice creates pressure between the ice plug and any closed valve or fixture downstream. The pipe wall fails at its weakest point under that pressure. The actual leak often does not appear until the ice begins to melt and water can flow through the rupture.',
  },
  {
    q: 'My ceiling is sagging from a burst pipe upstairs — is it safe?',
    a: 'A bulging or sagging ceiling means trapped water is pooling on top of the drywall. Stay out from underneath it. Place a bucket under the lowest point and, if you have one, use a screwdriver to puncture a small drain hole at the lowest sag so the water releases in a controlled way rather than collapsing the ceiling. Then call us.',
  },
  {
    q: 'What temperature do pipes start to freeze?',
    a: 'Water itself freezes at 32 degrees Fahrenheit, but pipes inside a heated structure typically do not begin freezing until ambient temperatures around the pipe drop below about 20 degrees for an extended period. Pipes in exterior walls, unheated crawlspaces, or attics are the most vulnerable, especially during multi-day cold snaps.',
  },
  {
    q: 'Will my insurance cover burst pipe damage?',
    a: 'Most homeowners policies treat sudden and accidental discharge from a plumbing system — including a frozen pipe burst — as a covered loss, with limits and deductibles per your individual policy. Coverage may be reduced or denied if the home was unoccupied and the heat was off. We document the loss thoroughly so you can have an informed conversation with your carrier.',
  },
  {
    q: 'How long will the drying take after a burst pipe?',
    a: 'Most residential burst-pipe losses dry in three to five days once equipment is set. Cabinet interiors, wall cavities, and subfloor under hardwood often take the longest because they are slow to release moisture. Daily moisture readings determine when drying is complete.',
  },
  {
    q: 'Do I need to remove drywall after a burst pipe?',
    a: 'Sometimes. We make small inspection openings at the bottom of affected walls to check insulation and framing. If the cavity insulation is wet, the lower portion of drywall is usually removed (often called a flood cut) so the cavity can dry. If the cavity is dry and the drywall itself is salvageable, we leave it in place.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Frozen Pipe Repair and Burst Pipe Water Damage Cleanup',
  name: 'Frozen Pipe Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: BIZ_NAME,
    telephone: '+12485318404',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE1,
      addressLocality: 'Bloomfield Township',
      addressRegion: 'MI',
      postalCode: '48301',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
  ],
  description:
    'Frozen and burst pipe water damage cleanup, structural drying, and ceiling and wall damage restoration in Bloomfield Township, MI and surrounding Oakland County communities.',
  url: 'https://provailrestoration.com/services/frozen-pipe-repair',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/services/frozen-pipe-repair#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/frozen-pipe-repair',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5597, longitude: -83.3877 },
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
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="bg-white p-8"
      style={{
        borderRadius: '20px',
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65]">{children}</div>
    </div>
  )
}

export default function FrozenPipeRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: '32px',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Winter Emergency Service
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Frozen & Burst Pipe Repair in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Michigan winters find every weak point in your plumbing. When a
              pipe lets go, we extract the water, dry the structure, and
              document the damage so you can move forward with confidence.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Frozen pipes are a uniquely Michigan problem. Subzero overnight
              lows in January and February push exterior wall cavities,
              unheated garages, vacation homes left at minimum heat, and the
              uninsulated rim joists of older Bloomfield-area homes well
              below the threshold where standing water inside a copper or
              PEX line will start to freeze. The freeze itself rarely causes
              the leak. The leak comes from the pressure that ice creates
              between itself and the next closed valve downstream — a
              pressure that the pipe wall eventually cannot hold.
            </p>
            <p>
              When the pipe finally bursts (often hours or even a day after
              the freeze, as the ice begins to thaw), the water can run for
              a long time before anyone notices. We have responded to homes
              where a single half-inch supply line in an upstairs bathroom
              flooded three floors of living space before the homeowner came
              home from work. That kind of loss is not unusual, and it is
              the reason we treat burst-pipe calls with the same urgency as
              any other major water emergency.
            </p>
          </div>
        </section>

        {/* WHAT TO DO NOW */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="If It Just Happened"
              title="What To Do In The First Five Minutes"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="1. Shut Off The Water">
                Find your main water shut-off valve and close it. In most
                Bloomfield homes the main is near the front foundation wall,
                near the water meter. Closing it stops the bleed at the
                source even if the burst location is on a different floor.
              </Card>
              <Card title="2. Cut The Power">
                If water is dripping near outlets, light fixtures, ceiling
                cans, or any electrical equipment, shut off the affected
                circuits at the breaker panel before going near the area.
                If the entire affected level needs to be de-energized, do
                that.
              </Card>
              <Card title="3. Call For Help">
                Call us at{' '}
                <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                  {PHONE}
                </a>
                . While you wait, move dry contents out of the area, lift
                long curtains and bedding off the floor, and place foil or
                plastic squares under furniture legs to prevent staining.
              </Card>
            </div>
          </div>
        </section>

        {/* THAW PROCESS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="The Thaw"
              title="Safely Thawing A Frozen Pipe"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                If you have identified a frozen pipe before it has burst,
                the goal is to warm it slowly and from the faucet end back
                toward the frozen section, with the faucet open so meltwater
                has somewhere to go. Use safe heat sources only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A hair dryer on a low or medium setting</li>
                <li>An incandescent or heat-lamp bulb in a clamp light</li>
                <li>Warm wet towels wrapped around the pipe</li>
                <li>An electric space heater placed nearby (never directly against combustibles)</li>
              </ul>
              <p>
                Never use a propane torch, kerosene heater, charcoal stove,
                or any open flame on a pipe — these are fire hazards and can
                damage the pipe enough to create a leak you did not have
                before. If you cannot reach the frozen section, or if you
                are not sure where the freeze is, leave the main water valve
                closed and call a plumber.
              </p>
            </div>
          </div>
        </section>

        {/* DAMAGE & DRYING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Wall & Ceiling Damage"
              title="What A Burst Pipe Actually Does"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Water from a burst supply line follows gravity through every
                opening it can find. From a second-floor bathroom it travels
                down through subfloor seams, along plumbing chases, into
                ceiling cavities below, and out across the first-floor
                ceiling drywall. Light fixtures and ceiling cans become
                drain points. Drywall sags and eventually fails.
              </p>
              <p>
                When we arrive, we map the path the water took with an
                infrared camera and moisture meters. Wet insulation in
                ceilings is removed because it holds water against the
                drywall and joists. Sagging drywall is opened in controlled
                cuts to release trapped water and allow the cavity above to
                dry. Hardwood floors are extracted from the seams and
                monitored daily — many can be saved if drying starts
                quickly, though some will need replacement once full
                moisture content data is collected.
              </p>
              <p>
                The drying process itself follows the same standards-aligned
                approach we use for every water loss: air movers and
                dehumidifiers sized to the affected area, daily moisture
                readings, and a documented dry standard pulled from an
                unaffected reference area of the home. See our{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  full water damage restoration page
                </a>{' '}
                for a deeper explanation of the structural drying process.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Pages" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Water Damage Restoration">
                Our complete{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage process
                </a>{' '}
                from response through final documentation.
              </Card>
              <Card title="Basement Flood Cleanup">
                When the pipe burst happens above the basement, the water
                often ends up there.{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Basement flood cleanup
                </a>
                .
              </Card>
              <Card title="Bloomfield Service Area">
                Local information for the communities we serve on our{' '}
                <a
                  href="/bloomfield"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Bloomfield page
                </a>
                .
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Frozen & Burst Pipe FAQ"
            />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white p-6 group"
                  style={{
                    borderRadius: '16px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                  }}
                >
                  <summary
                    className="cursor-pointer text-[#222222] font-semibold text-[17px] list-none flex justify-between items-center gap-4"
                    style={{ letterSpacing: '-0.18px' }}
                  >
                    <span>{f.q}</span>
                    <span className="text-[#ff385c] text-2xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-4 mb-0">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{
                fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Pipe burst? We are on the way.
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Shut the water off, then call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>. A live person answers, every hour of the
              winter.
            </p>
            <HeroCTA />
            <p className="text-[#6a6a6a] text-sm mt-8">
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
