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
    'Sump Pump Failure Cleanup in Bloomfield, MI | Power Outage & Backup | (248) 531-8404',
  description:
    'Sump pump failure cleanup in Bloomfield Township and Oakland County. Power outages, dead backup batteries, and check valve failures all cause the same problem — water on your basement floor. We respond 24/7. Call (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/sump-pump-failure',
  },
  openGraph: {
    title: 'Sump Pump Failure Cleanup in Bloomfield, MI | Provail Restoration of Bloomfield',
    description:
      '24/7 cleanup after sump pump failure in Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/sump-pump-failure',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'My sump pump just failed and water is rising — what do I do?',
    a: 'If the area around the pit is electrically safe, unplug the failed pump and use a wet/dry vacuum or a portable utility pump to keep the pit drawn down while you call for help. Move valuables off the floor, shut off power to any submerged outlets, and avoid stepping into water that may be in contact with electrical equipment.',
  },
  {
    q: 'Why do sump pumps fail during power outages?',
    a: 'A standard primary sump pump is a plug-in 120-volt motor. When the power goes out — which often happens during the same severe storms that send water into your drain tile — the pump cannot run, and the pit fills until water spills onto the basement floor. A battery backup pump or a water-powered backup is the standard defense.',
  },
  {
    q: 'How long does a sump pump battery backup last?',
    a: 'Typical deep-cycle backup batteries can run a small DC backup pump intermittently for somewhere between four and twelve hours during active pumping, depending on battery size, age, and how hard the pump is working. In a long Michigan power outage during heavy rain, that may not be enough — which is why many Bloomfield homeowners pair a battery backup with a generator or a water-powered secondary pump.',
  },
  {
    q: 'What is a check valve and why does it matter?',
    a: 'A check valve sits on the discharge pipe above the pump and prevents water that has just been pumped up the line from falling back into the pit when the pump shuts off. When a check valve fails, the pump short-cycles (running again immediately on the same water), which burns out the motor faster and can cause the pit to overflow during heavy inflow because the pump cannot keep up.',
  },
  {
    q: 'How long do sump pumps usually last?',
    a: 'A typical residential primary pump has a service life of roughly seven to ten years under normal use. Pumps in homes with high water tables that run frequently may wear out sooner. Backup batteries should be tested annually and replaced every three to five years even if they appear to hold a charge.',
  },
  {
    q: 'Is sump pump failure water contaminated?',
    a: 'Drain tile water is generally treated as Category 2 (gray water) under the IICRC S500 standard because it has been in contact with soil and may contain some contamination. If the water in the pit was exposed to a sewer cross-connection or sewage backup, it is treated as Category 3. We make the determination on-site and document it.',
  },
  {
    q: 'Will my insurance cover sump pump failure?',
    a: 'A standard homeowners policy usually does not automatically cover water damage from sump pump failure or sewer backup. Many carriers offer an optional endorsement (sometimes called water backup or sump overflow coverage) that adds this protection. Whether your specific situation is covered is a conversation to have with your carrier — we provide complete documentation of the loss either way.',
  },
  {
    q: 'Can I prevent this from happening again?',
    a: 'You can dramatically reduce the risk by adding a battery or water-powered backup pump, replacing aging primary pumps before they fail, testing the system at the start of each rainy season, and ensuring the discharge line is clear of ice and debris. These are all straightforward upgrades a qualified plumber can install.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sump Pump Failure Water Damage Cleanup',
  name: 'Sump Pump Failure Cleanup',
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
    'Water extraction, structural drying, and sanitization after sump pump failure in Bloomfield Township, MI and surrounding Oakland County communities. Available 24/7.',
  url: 'https://provailrestoration.com/services/sump-pump-failure',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/services/sump-pump-failure#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/sump-pump-failure',
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

export default function SumpPumpFailurePage() {
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
                  24/7 Emergency Response
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
              Sump Pump Failure Cleanup in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              When the pump quits, the basement does not wait. We extract,
              dry, and sanitize after every kind of sump failure — power
              outage, dead backup battery, stuck float, and failed check
              valve.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              A sump pump is one of the only pieces of equipment in a home
              whose entire job is to prevent a disaster you would otherwise
              never see. When it works, the drain tile around your foundation
              quietly fills with groundwater after every storm and the pump
              quietly empties it back outside. When it fails, the same drain
              tile fills, the pit overflows, and water spreads across your
              basement floor in a matter of hours.
            </p>
            <p>
              The cruel irony of sump pump failures is that they tend to
              happen during the exact storms that demand the most from the
              pump. A summer thunderstorm knocks out power across half of
              Oakland County. A spring downpour overwhelms a marginal pump
              that has been quietly failing for months. A winter freeze
              blocks the discharge line so water that the pump moves has
              nowhere to go. The result is the same in every case: a
              flooded basement and a phone call to us.
            </p>
          </div>
        </section>

        {/* FAILURE MODES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Why Pumps Fail"
              title="The Four Most Common Failure Modes"
              intro="Almost every sump pump call we run comes back to one of these."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="1. Power Outage With No Backup">
                A standard primary pump runs on 120-volt household power.
                When a Michigan thunderstorm takes out the grid, the pump
                cannot run. Without a battery backup, water-powered backup,
                or generator, the pit fills in proportion to how hard the
                rain is hitting your drain tile. This is by far the most
                common cause of basement flooding we see.
              </Card>
              <Card title="2. Dead Or Undersized Battery Backup">
                Many homes do have a battery backup pump installed, but the
                battery has not been tested or replaced in years. Lead-acid
                deep-cycle batteries lose capacity over time and can fail
                silently. We frequently arrive at homes where the backup
                system technically existed but did not last long enough to
                bridge the outage.
              </Card>
              <Card title="3. Stuck Float Switch">
                The float switch tells the pump when to turn on. When the
                float gets pinned against the side of the pit, tangled in
                the discharge line, or jammed by debris, the pump never
                receives the signal to start — even though the pit is full
                and the power is on. This failure mode is especially common
                in pits without lids.
              </Card>
              <Card title="4. Failed Check Valve Or Frozen Discharge">
                A failed check valve causes the pump to short-cycle, which
                burns out the motor and prevents the pump from keeping up
                during heavy inflow. A frozen discharge line in winter
                blocks the water from leaving the house at all, even though
                the pump is running. Both situations look similar from
                inside the basement: standing water rising despite a pump
                that seems to be working.
              </Card>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Our Response"
              title="What We Do When We Arrive"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Stabilize the pit.</strong> If the failed pump is
                still in place and water is still rising, our first move is
                to put a portable extractor or temporary pump on the pit so
                it stops overflowing. We are not a plumber and we do not
                replace the failed pump, but we can keep the situation from
                getting worse while you call one.
              </p>
              <p>
                <strong>Extract standing water.</strong> Truck-mounted and
                portable extractors remove water from the basement floor.
                Volume is measured and documented.
              </p>
              <p>
                <strong>Determine the water category.</strong> Drain tile
                water is normally treated as Category 2 unless there is
                evidence of sewer cross-contamination, in which case it
                becomes Category 3 and the cleaning protocol changes
                accordingly.
              </p>
              <p>
                <strong>Remove unsalvageable materials.</strong> Wet carpet
                and pad, soaked drywall along the bottom of finished walls,
                and saturated insulation are removed and bagged. Stored
                contents are triaged into salvageable, needs-cleaning, and
                loss categories with photo documentation.
              </p>
              <p>
                <strong>Dry the structure.</strong> Air movers and
                dehumidifiers are sized to the affected area and monitored
                daily until the basement reaches the same dry standard as
                an unaffected reference area of the home.
              </p>
              <p>
                <strong>Sanitize and document.</strong> Affected hard
                surfaces are cleaned and treated with an EPA-registered
                antimicrobial. Photos, moisture maps, daily logs, and a
                written scope of work are compiled into a complete file you
                can share with your insurance carrier if you choose to file
                a claim. We document; we do not adjust the claim.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Pages" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Basement Flood Cleanup">
                Broader information about basement flooding from any source.{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Read more
                </a>
                .
              </Card>
              <Card title="Frozen Pipe Repair">
                Winter freeze-related water damage on our{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe page
                </a>
                .
              </Card>
              <Card title="Water Damage Restoration">
                The full{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process and the{' '}
                <a
                  href="/bloomfield"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Bloomfield service area
                </a>
                .
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Sump Pump Failure FAQ"
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
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{
                fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Pump quit and water rising?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>. We answer in person and we are on
              the road within minutes.
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
