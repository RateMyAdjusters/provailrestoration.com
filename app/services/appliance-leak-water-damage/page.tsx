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
    'Appliance Leak Water Damage in Bloomfield, MI | Dishwasher, Washer, Fridge, Water Heater | (248) 531-8404',
  description:
    'Dishwasher, washing machine, refrigerator, and water heater leak cleanup in Bloomfield Township. We dry cabinets and subfloors and document the loss for your carrier. 24/7: (248) 531-8404.',
  alternates: {
    canonical:
      'https://provailrestoration.com/services/appliance-leak-water-damage',
  },
  openGraph: {
    title:
      'Appliance Leak Water Damage in Bloomfield, MI | Provail Restoration of Bloomfield',
    description:
      'Dishwasher, washer, fridge, or water heater failure? We dry the kitchen or laundry, save what we can, and document everything. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/appliance-leak-water-damage',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'My dishwasher is leaking right now — what do I shut off first?',
    a: 'If you can identify the angle stop under the sink that feeds the dishwasher, close it by hand. If there is no accessible valve or it is stuck, shut off the main water supply to the house — usually in the basement or a utility closet, on the line where water enters the home. Then unplug the dishwasher or flip its breaker. After the flow is stopped, pull the bottom toe kick and look for standing water in the cavity beneath the unit. That is where the damage usually hides.',
  },
  {
    q: 'Where is the water heater shutoff?',
    a: 'A gas or electric tank-style water heater has a cold-water shutoff valve on the pipe entering the top of the tank — usually a lever or a gate handle within arm&rsquo;s reach. Turn that valve to off. For gas heaters, also shut off the gas at the dedicated valve on the supply line; for electric, flip the heater&rsquo;s breaker. If the tank itself has failed and is actively spilling, you may need to drain it through the bottom fitting into a floor drain. A plumber should confirm whether the tank can be drained safely before restoration work begins.',
  },
  {
    q: 'My fridge ice maker line burst behind the wall. Is that covered by insurance?',
    a: 'Sudden and accidental failures of in-home plumbing and appliance supply lines are commonly covered under homeowners policies, but every policy is different and the final determination belongs to your insurance carrier. A slow drip that has been hidden behind the fridge for months may be classified as gradual damage and excluded. We are not insurance agents or adjusters, so we cannot tell you what will be covered — we will, however, document the loss thoroughly so you and your carrier have a clean record to work from. Call your agent directly for coverage questions.',
  },
  {
    q: 'How long does it take for a slow appliance leak to rot the subfloor?',
    a: 'Faster than most people expect. Particleboard or OSB subfloor under a kitchen cabinet can start to swell within a day or two of consistent wetting, and fungal activity can begin within a week if the moisture is not removed. Plywood holds up longer but will still delaminate over a few weeks of saturation. By the time a homeowner smells a musty odor in the kitchen, the subfloor under the affected appliance has usually been wet for far longer than the visible signs suggest.',
  },
  {
    q: 'Can you dry the cabinet without tearing it out?',
    a: 'Sometimes yes, sometimes no. Solid wood or plywood cabinet boxes with edge banding in good condition often dry in place with careful airflow and dehumidification. Particleboard cabinets that have swelled at the edges or delaminated at the toe kick are usually beyond in-place recovery because the panels have physically come apart. We make that call after inspecting the cabinet and explain the reasoning before anything is removed.',
  },
  {
    q: 'Should I call my appliance manufacturer or my insurance company first?',
    a: 'If the appliance is still under warranty — especially for recent dishwasher and refrigerator models with documented recall histories — it is worth calling the manufacturer to see whether the cause of failure qualifies for any reimbursement of the appliance itself. Your homeowners insurance usually handles the resulting water damage to the house separately. The two conversations do not conflict. We cannot advise you on which to call in what order; that is a conversation with your own agent.',
  },
  {
    q: 'What is the difference between a sudden failure and gradual damage in my policy?',
    a: 'Most homeowners policies cover a sudden and accidental discharge of water, meaning something broke unexpectedly. A gradual leak — a weep that has been slowly dampening the cabinet for months — is commonly excluded because it is treated as a maintenance issue. The distinction matters because documentation is what establishes the timeline in the eyes of the carrier. We photograph and meter aggressively to capture the condition as we found it, and the rest is a conversation between you and your adjuster. Call your insurance agent for the specific policy language.',
  },
  {
    q: 'Why do braided stainless supply lines fail?',
    a: 'Braided stainless lines are marketed as burst-resistant, but the underlying rubber core has a finite life and the braid can hide corrosion on the coupling nut at each end. Many manufacturers recommend replacement every five to ten years, and lines installed with the plastic end fittings are especially prone to failure at the nut. During any washing machine or dishwasher water loss we recommend replacing both supply lines on the affected appliance as basic preventative maintenance, regardless of whether they appear to be the immediate cause.',
  },
  {
    q: 'How do you dry under a dishwasher or a fridge without moving the appliance?',
    a: 'We pull the toe kick, position small-profile air movers aimed into the cavity, and use a dehumidifier sized to the room to capture the evaporated water. In some cases we drill small inspection holes in inconspicuous locations in the cabinet floor or the kick to verify that the subfloor itself is drying, and those holes are sealed during the rebuild. Appliances are only pulled if there is reason to suspect damage behind them or the cavity is not drying adequately with access from the front.',
  },
  {
    q: 'Do you handle the appliance repair itself, or just the water damage?',
    a: 'We handle the water damage to the home — extraction, drying, cabinet evaluation, subfloor assessment, and reconstruction. We do not repair the failed appliance itself. If the appliance is still under warranty, the manufacturer&rsquo;s authorized service network handles that. If it is out of warranty and needs replacement, we can coordinate our work around the new appliance install so the floor and cabinet are ready before it arrives.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Appliance Leak Water Damage Cleanup',
  name: 'Appliance Leak Water Damage',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
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
    'Appliance leak water damage cleanup for dishwashers, washing machines, refrigerators, and water heaters including cabinet drying, subfloor evaluation, and insurance documentation in Bloomfield Township, MI.',
  url: 'https://provailrestoration.com/services/appliance-leak-water-damage',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/services/appliance-leak-water-damage#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/appliance-leak-water-damage',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://provailrestoration.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://provailrestoration.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Appliance Leak Water Damage',
      item: 'https://provailrestoration.com/services/appliance-leak-water-damage',
    },
  ],
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

export default function ApplianceLeakWaterDamagePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
                  24/7 Kitchen & Laundry Response
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
              Appliance Leak Water Damage in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Dishwasher supply line burst? Washer hose let go? Fridge ice
              maker line failed behind the wall? Water heater corroded
              through the tank? We handle all four and document the loss
              for your insurance carrier.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Appliance failures are the single largest category of
              non-weather water losses in Michigan homes. A dishwasher
              supply line fails and the kitchen cabinets are soaked by
              morning. A washing machine hose lets go and gallons per minute
              pour into a laundry room until someone hears the noise. A
              refrigerator ice maker line weeps into the back wall for
              months before a homeowner notices warped baseboard. A water
              heater corrodes through the bottom of the tank and fills the
              utility room. Each of these is common, and each is handled a
              little differently.
            </p>
            <p>
              This page is organized around the four appliances we see
              fail most often, with the shutoff steps, the common failure
              modes, and the damage patterns each one leaves behind. If
              you have an active leak right now, stop water at the closest
              valve you can reach and call us; the rest of the information
              here is meant to help you understand what we are going to do
              when we arrive and to prevent the next failure after we
              leave.
            </p>
          </div>
        </section>

        {/* BY APPLIANCE */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Common Failures"
              title="Four Appliances, Four Distinct Failure Patterns"
              intro="Each appliance fails in a predictable set of ways, and knowing the pattern speeds up diagnosis."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Dishwashers">
                The top failure points are the supply line connection under
                the sink, the drain hose, the door gasket, and the pump
                seal. Most of the water damage ends up in the cabinet
                cavity beneath and behind the unit and in the toe kick.
                Water heads for the cabinet base, wicks into the
                particleboard, and travels along the subfloor toward the
                adjacent cabinets.{' '}
                <strong>Shutoff:</strong> the dedicated angle stop beneath
                the kitchen sink, usually labeled or clearly branched off
                the hot supply.
              </Card>
              <Card title="Washing Machines">
                Braided stainless supply hoses and the pump seals are the
                usual suspects. Supply hose failures are dramatic — gallons
                per minute into the laundry room until the wall valves are
                shut. Drain pump leaks are slower and tend to rot the
                subfloor under the unit before a homeowner notices.{' '}
                <strong>Shutoff:</strong> the dedicated hot and cold valves
                behind the washer, or the laundry box lever if installed.
              </Card>
              <Card title="Refrigerators">
                Ice maker supply lines are the main risk, and a slow weep
                behind the fridge can damage the back of a cabinet run,
                the flooring underneath, and — in an upstairs kitchen — the
                ceiling of the room below. Replacing the old plastic line
                with braided stainless during installation is a common
                prevention step.{' '}
                <strong>Shutoff:</strong> usually a saddle valve or an
                inline valve in the basement below or under the sink,
                depending on how the line was run.
              </Card>
              <Card title="Water Heaters">
                Tank corrosion is the leading cause of water heater
                failure, and it usually happens gradually until the bottom
                of the tank gives way. Most modern installations include a
                drain pan with a dedicated line to a floor drain or
                outside the house; when the pan line is plugged or absent,
                the tank dumps its full capacity into the room.{' '}
                <strong>Shutoff:</strong> the cold inlet valve on top of
                the tank and the gas or breaker for the heater itself.
              </Card>
            </div>
          </div>
        </section>

        {/* SHUTOFFS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Stop the Water"
              title="Know Your Shutoffs Before You Need Them"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The single most valuable minute during an appliance failure
                is the one where the homeowner knows exactly which valve
                closes the water. If you have never walked your home and
                identified these shutoffs, do it this weekend. Label each
                valve with a bright tag so anyone in the house — including
                a guest or a child home alone — can find it fast.
              </p>
              <p>
                <strong>Whole-house main.</strong> Usually where water
                enters the home from the street or the well pressure tank.
                In most Bloomfield basements it is on the wall near the
                water meter. Turning this one valve shuts off every
                appliance in the house.
              </p>
              <p>
                <strong>Individual appliance valves.</strong> Dishwasher,
                washing machine, refrigerator ice maker, and toilet angle
                stops each have their own local valves that are usually
                faster to reach than the main.
              </p>
              <p>
                <strong>Water heater inlet.</strong> A single valve on top
                of the tank stops cold supply to the heater. This does not
                stop water already in the tank from draining if the tank
                itself has failed; for that, you need to drain the tank
                through the bottom fitting.
              </p>
            </div>
          </div>
        </section>

        {/* DAMAGE PATTERNS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Damage Patterns"
              title="Where the Water Actually Goes"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Cabinet Cavities">
                Water from a kitchen leak almost always pools in the
                cabinet cavity and the toe kick before it appears on the
                visible floor. Particleboard boxes swell and delaminate;
                solid wood boxes dry in place more often. We pull the toe
                kick on every kitchen appliance loss to inspect what is
                underneath.
              </Card>
              <Card title="Subfloor Rot">
                Sustained wetting of a plywood or OSB subfloor softens
                the panel from below, and fungal activity starts if the
                moisture is not removed quickly. Hardwood or tile above a
                soft subfloor will not be stable long-term even if it
                looks fine on the surface. See our{' '}
                <a
                  href="/services/hardwood-floor-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  hardwood floor page
                </a>{' '}
                for more on how we handle this.
              </Card>
              <Card title="Ceilings Below">
                Upstairs laundry rooms and second-floor kitchenettes leak
                through the floor assembly and stain the ceiling below,
                often several feet from the actual source. Our{' '}
                <a
                  href="/services/ceiling-water-damage-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  ceiling water damage page
                </a>{' '}
                covers the diagnosis process when the stain is not
                directly under the appliance.
              </Card>
            </div>
          </div>
        </section>

        {/* INSURANCE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Insurance Considerations"
              title="Sudden vs. Gradual — and Why It Matters"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most homeowners policies make a distinction between a
                sudden and accidental discharge of water — a supply line
                that burst last night — and gradual damage that has been
                developing over weeks or months. The first is commonly
                covered; the second is commonly excluded. We do not tell
                homeowners what their policy does or does not cover
                because that determination belongs to your carrier and
                your agent.
              </p>
              <p>
                What we do is document the loss aggressively and
                objectively. Photos of the source, moisture readings on
                the affected materials, a written scope of work, daily
                drying logs, and a final completion report are all
                compiled into a file the homeowner can hand to their
                adjuster. For a deeper walk-through of what that file
                looks like and how the claims process usually runs, see
                our{' '}
                <a
                  href="/resources/water-damage-insurance-claim-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage insurance claim guide
                </a>
                . None of that guide is legal or insurance advice — it is
                a homeowner-friendly explanation of the process so you
                can have a better-informed conversation with your own
                agent.
              </p>
            </div>
          </div>
        </section>

        {/* PREVENTION */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Prevention"
              title="Replace the Supply Lines"
              intro="The cheapest way to avoid a second appliance loss is a fifteen-dollar part."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                During any washing machine or dishwasher water loss we
                recommend replacing both supply lines on the affected
                appliance as a matter of course, regardless of whether
                they look like the immediate cause of failure. Braided
                stainless lines with metal end fittings cost very little,
                are rated for higher burst pressures than old rubber
                hoses, and should be considered consumables that wear out
                every five to ten years.
              </p>
              <p>
                For refrigerators, the plastic tube that ships with many
                units is not something we would leave in service for
                long. Swapping it for a braided stainless ice maker line
                during install is one of the simplest kitchen upgrades a
                homeowner can make. None of this is a guarantee against
                another failure — it is just good maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Water Damage Restoration">
                The full{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process and the IICRC S500 standard we follow on every
                job.
              </Card>
              <Card title="Ceiling Water Damage">
                Upstairs appliance leaks usually show up first on the
                ceiling below. See our{' '}
                <a
                  href="/services/ceiling-water-damage-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  ceiling repair page
                </a>
                .
              </Card>
              <Card title="Insurance Claim Guide">
                Our homeowner-friendly{' '}
                <a
                  href="/resources/water-damage-insurance-claim-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage insurance claim guide
                </a>{' '}
                for what to expect and what to document.
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Appliance Leak FAQ"
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
              Appliance leak turning into a flood?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Shut the water at the nearest valve and call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>
              . A live person answers, day or night.
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
