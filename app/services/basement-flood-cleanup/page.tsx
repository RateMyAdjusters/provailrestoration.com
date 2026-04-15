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
    'Basement Flood Cleanup in Bloomfield, MI | Sump Pump & Storm Water | (248) 531-8404',
  description:
    'Basement flood cleanup in Bloomfield Township and Oakland County. We handle sump pump failures, heavy-rain backups, and foundation seepage with extraction, drying, and sanitization. 24/7 response: (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/basement-flood-cleanup',
  },
  openGraph: {
    title: 'Basement Flood Cleanup in Bloomfield, MI | Provail Restoration of Bloomfield',
    description:
      '24/7 basement water extraction, drying, and sanitization in Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/basement-flood-cleanup',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'My basement flooded after heavy rain — what should I do first?',
    a: 'Stay out of standing water until the electricity to the basement is shut off at the breaker. Once the area is electrically safe, photograph the water level and the source if you can identify it, then call a restoration company. Avoid running basement appliances or HVAC equipment that may have been submerged until they are inspected.',
  },
  {
    q: 'Why do Michigan basements flood so often?',
    a: 'Southeast Michigan combines a high water table in many neighborhoods, aging combined storm-and-sanitary sewers in older communities, freeze-thaw cycles that stress foundations, and intense spring and summer rainfall. Any one of those factors can overwhelm a basement; together they explain why basement flooding is one of the most common water losses we respond to in Oakland County.',
  },
  {
    q: 'Is the water in my flooded basement considered contaminated?',
    a: 'It depends on the source. Water from a clean supply line is initially Category 1, but rising groundwater, storm sewer backups, and any water that contacts contaminated surfaces is treated as Category 2 or Category 3 under the IICRC S500 standard. We make that determination on-site and document the reasoning.',
  },
  {
    q: 'Can I dry the basement myself with fans?',
    a: 'Box fans move air but they do not remove moisture from the air. Without dehumidification, evaporated water simply re-condenses on cool basement walls and floors and the materials never reach a true dry standard. Professional drying combines high-velocity air movers with dehumidifiers sized to the cubic footage of the affected space.',
  },
  {
    q: 'Do you remove ruined drywall, carpet, and pad?',
    a: 'When materials cannot be saved or have absorbed contaminated water, yes. We remove the affected materials, bag them for disposal, and document the removal with photos. Salvageable materials are dried in place whenever the category and condition allow.',
  },
  {
    q: 'How long does basement flood cleanup take?',
    a: 'Extraction is usually completed in the first day. Structural drying typically runs three to five days, depending on how saturated the materials are and how much of the basement was affected. Daily monitoring readings determine when drying equipment can be removed.',
  },
  {
    q: 'Will my homeowners insurance cover a flooded basement?',
    a: 'Coverage depends on your individual policy and the cause of loss. Sudden and accidental events from inside the home (such as a burst pipe or failed appliance) are commonly covered; surface flooding from outside the home is usually excluded unless you carry separate flood insurance. We provide complete documentation either way so you can have an informed conversation with your carrier.',
  },
  {
    q: 'What about my belongings stored in the basement?',
    a: 'Cardboard, particle board, mattresses, and upholstered furniture that absorbed contaminated water are normally a loss. Hard goods, sealed plastic totes, and many wood items can be cleaned and salvaged. We inventory contents during the cleanup so you have a complete record for any insurance claim you choose to file.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Basement Flood Cleanup',
  name: 'Basement Flood Cleanup',
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
    '24/7 basement flood cleanup including water extraction, structural drying, antimicrobial treatment, and content handling for sump pump failures, heavy-rain backups, and foundation seepage in Bloomfield Township, MI.',
  url: 'https://provailrestoration.com/services/basement-flood-cleanup',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/services/basement-flood-cleanup#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/basement-flood-cleanup',
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

export default function BasementFloodCleanupPage() {
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
                  Emergency Response
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
              Basement Flood Cleanup in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Sump pump quit during a thunderstorm? Foundation wall finally
              gave up after the spring thaw? We extract, dry, and sanitize
              flooded basements across Oakland County around the clock.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Basement flooding is the single most common water loss we
              respond to in Bloomfield Township, and it is rarely a surprise
              to the people who live here. Many of the homes in Oakland
              County were built on clay-heavy soils that hold water against
              the foundation, and our combination of intense Great Lakes
              storms, lake-effect snowmelt, and aging municipal sewer
              capacity creates the perfect conditions for water to find its
              way in below grade.
            </p>
            <p>
              The good news is that basement flood cleanup is a well-defined
              process. Bulk water comes out, materials are dried to a measured
              standard, contaminated items are removed and replaced, and the
              space is sanitized before reuse. The longer you wait, the more
              expensive each step becomes — so our job is to get to your
              property quickly and start working before the damage spreads.
            </p>
          </div>
        </section>

        {/* CAUSES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Common Causes"
              title="Three Reasons Bloomfield Basements Flood"
              intro="Most of the basement losses we respond to fall into one of these three buckets."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Sump Pump Failure">
                Power outages, dead backup batteries, jammed float switches,
                stuck check valves, and discharge lines that froze or clogged.
                When the pump quits during heavy rain, the pit fills, then the
                drain tile fills, and within hours water is on the basement
                floor. Read more on our{' '}
                <a
                  href="/services/sump-pump-failure"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  sump pump failure page
                </a>
                .
              </Card>
              <Card title="Heavy Rain & Sewer Backup">
                Severe Michigan storms can drop more rainfall in an hour than
                older combined sewer systems were designed to handle. When
                the city main backs up, water can push back through floor
                drains, washer standpipes, and basement bathroom fixtures —
                usually as Category 3 contaminated water that has to be
                handled accordingly.
              </Card>
              <Card title="Foundation Seepage">
                Hairline cracks in poured walls, mortar joints in block
                foundations, and tie-rod holes that were never properly
                sealed all become water entry points when the soil outside
                the foundation is saturated. Seepage often shows up at the
                cove joint where the floor meets the wall.
              </Card>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Our Process"
              title="What Happens When We Arrive"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Safety first.</strong> Before anything else we confirm
                that power to the basement is off and that the water source
                has been stopped or is no longer adding to the problem. If
                the water came from a sewer backup or contained sewage, the
                crew suits up in appropriate protective equipment before
                entering.
              </p>
              <p>
                <strong>Bulk extraction.</strong> Submersible pumps and
                truck-mounted extractors remove standing water as quickly as
                possible. We measure the water level, photograph it, and
                document the volume removed.
              </p>
              <p>
                <strong>Material decisions.</strong> Wet drywall is checked
                for how high the water wicked up. Carpet and pad are
                evaluated for whether the category and condition allow
                in-place drying. Insulation in finished basement walls is
                almost always removed because it holds water against the
                framing. Each decision is documented with photos and
                explained to the homeowner.
              </p>
              <p>
                <strong>Drying & dehumidification.</strong> We set air movers
                and commercial dehumidifiers sized to the cubic footage of
                the affected space, monitored daily until the structure
                reaches the same dry standard as an unaffected reference area
                of the home.
              </p>
              <p>
                <strong>Cleaning & sanitization.</strong> Surfaces that
                contacted contaminated water are cleaned and treated with an
                EPA-registered antimicrobial. We do not make medical claims
                about what an antimicrobial does or does not prevent — we
                simply apply the products as labeled.
              </p>
              <p>
                <strong>Documentation.</strong> Photos, moisture maps, daily
                logs, and a written scope of work are compiled into a single
                file so you have everything you need if you choose to file an
                insurance claim. We document; we do not adjust the claim or
                negotiate the settlement on your behalf.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Sump Pump Failure">
                Why pumps quit, what backup options actually work in a
                Michigan power outage, and what to do when yours fails.{' '}
                <a
                  href="/services/sump-pump-failure"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Read more
                </a>
                .
              </Card>
              <Card title="Frozen Pipe Repair">
                Burst pipes are the other major source of basement water in
                winter. See our{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe page
                </a>
                .
              </Card>
              <Card title="Full Water Damage Process">
                The complete{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process, including IICRC S500 background and how we work
                with insurance carriers. Local info on our{' '}
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
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Basement Flood Cleanup FAQ"
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
              Water on the basement floor right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a> and a crew will be dispatched. We
              answer the phone in person, every hour of every day.
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
