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
    'Sump Pump Backup & Failure Prevention — Bloomfield, MI | (248) 531-8404',
  description:
    'Sump pump hardware, backup battery sizing, check valve failure modes, horsepower selection, discharge freeze-back, float switch service, and annual maintenance for Bloomfield Township, MI homes. Provail Restoration of Bloomfield: (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/sump-pump-failure',
  },
  openGraph: {
    title:
      'Sump Pump Backup & Failure Prevention | Provail Restoration of Bloomfield',
    description:
      'Battery backup sizing, check valves, pedestal vs submersible, horsepower calc, discharge freeze-back, float switch service, and maintenance for Bloomfield, MI.',
    url: 'https://provailrestoration.com/services/sump-pump-failure',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'How do I size a battery backup pump for a Michigan home?',
    a: 'Start with the worst real-world event you want the system to survive — typically a multi-hour power outage during a heavy rain. Measure how often your primary pump cycles during normal pumping (count cycles in a ten-minute window), then multiply by the pump&rsquo;s per-cycle volume to get gallons per hour. A Michigan home on a high water table during heavy rain often needs to move 1,500 to 3,000 gallons per hour. Choose a backup DC pump rated for roughly that output at your discharge head, then pick a deep-cycle battery sized so that the amp-hour capacity will run the backup through the outage window you care about — commonly a Group 27 or Group 31 AGM battery in the 90 to 125 amp-hour range. Always confirm numbers with the manufacturer&rsquo;s published performance curves.',
  },
  {
    q: 'Why do check valves fail and what are the symptoms?',
    a: 'A check valve sits on the discharge pipe and prevents water that has just been lifted from falling back into the pit when the pump shuts off. Failure modes include a cracked flapper, a worn rubber seat, mineral scale that keeps the flap from seating, and debris wedged in the body. The classic symptom is short-cycling: the pump runs, stops, and immediately runs again on the same water that just fell back down the pipe. Short-cycling burns out motors fast because the inrush current on every start is the hardest moment in a pump&rsquo;s life. A silent check valve failure — where the flap stays stuck open — also prevents the pump from building head and keeping up during heavy inflow.',
  },
  {
    q: 'Pedestal or submersible — which is right for my basin?',
    a: 'Submersible pumps live down in the water inside the basin. They are quieter, they handle debris better, they have higher horsepower options, and they generally last longer when properly sized. They cost more up front. Pedestal pumps keep the motor above the water with an intake leg into the pit; they are cheaper, easier to service, and easier to diagnose visually, but they are louder and are generally limited to smaller horsepower ranges. For most Bloomfield homes with a covered, modern basin on a high water table, a submersible is the right answer. Pedestal pumps still make sense in older shallow pits and in retrofit situations where access is constrained.',
  },
  {
    q: 'What horsepower do I need for a Michigan water table?',
    a: 'Horsepower by itself is not the full answer — what matters is gallons-per-hour at your actual total dynamic head (vertical lift plus friction losses through the pipe run). A one-third horsepower submersible is adequate for many suburban basements with a normal water table and a short discharge run. A one-half horsepower unit is the common choice for homes on a higher water table or with longer discharge runs, and is what we most often see specified in Oakland County. Three-quarter and one horsepower units are appropriate for homes with severe groundwater issues, long horizontal runs, or high lift heights. Always match the pump curve to your actual head, not the marketing number on the box.',
  },
  {
    q: 'My discharge line freezes every winter. What can I do?',
    a: 'A frozen discharge line is one of the most predictable failure modes in a Michigan winter, because the water leaving the pump is warmer than the outside air and a long horizontal run in the cold is where it will give up its heat. Fixes include burying the line below the frost line, pitching it so it drains fully after each pump cycle so there is no standing water to freeze, adding a freeze-relief fitting (sometimes called an ice guard or freeze guard) that opens a secondary discharge path if the main line blocks, insulating the above-grade portion of the run, and routing the line away from shaded north-side foundations where snow accumulates. We do not install discharge plumbing ourselves — these fixes are a plumber&rsquo;s scope — but we see the consequences often enough to know what works.',
  },
  {
    q: 'What goes wrong with float switches?',
    a: 'Tethered floats get pinned against the basin wall or tangled in the discharge pipe, which is the single most common failure mode. Vertical floats can stick on a corroded rod. Diaphragm switches can fail internally with no visible symptom. Electronic capacitance-style switches eliminate mechanical failure but can be thrown off by oil films and debris in the pit. A covered, properly sized basin with a vertical float or an electronic switch is the configuration we see fail least often in Bloomfield homes. Any float switch should be tested by filling the pit with a garden hose and verifying both turn-on and turn-off points at the start of every rainy season.',
  },
  {
    q: 'How does a power-outage failover actually work?',
    a: 'There are three layers commonly deployed in combination. First, a deep-cycle battery powering a DC backup pump is the standard baseline — the charger keeps the battery topped up, and on grid loss an inverter or native DC motor takes over automatically. Second, a water-powered backup pump uses municipal supply pressure to drive a venturi-style ejector that moves water out of the pit with no electricity at all; it works as long as city water pressure is available and is particularly useful in long outages. Third, a whole-house standby generator on an automatic transfer switch restores grid-equivalent power to the primary pump and eliminates the failover question entirely at the cost of a much larger install. Many Bloomfield homes combine a battery backup for short outages with a generator for long ones.',
  },
  {
    q: 'What should an annual sump pump maintenance check actually include?',
    a: 'At a minimum: visual inspection of the basin for sediment and debris, removal of anything that could foul the intake, verification of the inlet weep hole or priming port, a fill test that confirms the float turns the pump on at the correct level and off at the correct level, verification that the check valve holds (the pipe above the valve should not drain back down immediately after the pump stops), measurement of pump amp draw under load compared to the nameplate rating, inspection of the discharge line termination for blockage, a load test of the backup battery with a proper tester (not just a surface voltage reading), inspection of the alarm float and any high-water alarm wiring, and verification that the GFCI or dedicated receptacle powering the primary pump is tripping correctly. Document every step with dates so you have a history to reference.',
  },
  {
    q: 'Do backup water alarms actually help?',
    a: 'Yes — and they are the cheapest insurance in the entire system. A standalone high-water alarm float sits a couple of inches above the normal pump activation level and triggers a local siren and, in smart units, a phone notification as soon as the water is higher than it should be. On a properly working pump, the alarm never sounds. When the pump has failed and the pit is rising, the alarm gives you minutes-to-hours of warning before water reaches the basement floor. We recommend a battery-backed alarm so it is not defeated by the same power outage that is defeating the pump.',
  },
  {
    q: 'When should I replace my sump pump even if it still works?',
    a: 'The practical lifecycle for a primary residential submersible is roughly seven to ten years. High-cycle homes on aggressive water tables may see the bottom of that range; lightly-cycled homes may stretch past it. The honest operational rule is that a pump older than its published expected life, running hard during every storm, is on borrowed time. Replacing before failure costs a few hundred dollars and one afternoon; replacing after failure costs whatever the finished basement cleanup costs. Backup batteries should be replaced every three to five years regardless of apparent condition, because lead-acid and AGM batteries lose capacity silently.',
  },
  {
    q: 'How deep and how big should my sump basin be?',
    a: 'For most residential installs, a basin eighteen inches in diameter and twenty-two to thirty inches deep is the practical range. A deeper, wider basin gives you more reserve volume, which means fewer pump starts per hour, which translates directly into longer motor life. A shallow basin or an undersized tile pipe forces the pump to short-cycle during heavy inflow. When we see basins that short-cycle more than roughly ten to twelve times per hour during a rain event, we recommend having a plumber evaluate either a deeper basin or a higher-capacity pump that moves each cycle of water in fewer, longer pulls.',
  },
  {
    q: 'Does Provail Restoration of Bloomfield install or service sump pumps?',
    a: 'No — we are a restoration contractor, not a licensed plumber. We clean up after pump failures, and we can share what we have seen work and fail in thousands of Bloomfield basements, but installation and service of the actual pump, battery, check valve, and discharge plumbing is a licensed plumber&rsquo;s scope of work. If a failed pump sent water across your basement floor, call us for the cleanup and call a plumber for the replacement — we work alongside several reputable ones in Oakland County and can make an introduction if you do not already have one.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sump Pump Backup & Failure Prevention Consulting',
  name: 'Sump Pump Backup & Failure Prevention',
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
    'Guidance and cleanup response related to sump pump hardware: battery backup sizing, check valve failure modes, pedestal vs submersible selection, pump horsepower calculation for Michigan water tables, discharge freeze-back, float switch service, backup water alarms, and annual maintenance.',
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
      name: 'Sump Pump Backup & Failure Prevention',
      item: 'https://provailrestoration.com/services/sump-pump-failure',
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
                  Hardware & Prevention
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
              Sump Pump Backup & Failure Prevention — Bloomfield
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Battery backup sizing, check valve failure modes, pedestal vs
              submersible selection, horsepower for Michigan water tables,
              discharge freeze-back, float switch service, alarms, and the
              annual maintenance routine that keeps your basement dry.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              A sump pump is a mechanical assembly you rarely see, rarely
              hear, and rarely think about — right up until the moment it
              matters more than almost any other piece of equipment in your
              home. Provail Restoration of Bloomfield has cleaned up after
              every imaginable sump failure mode in Oakland County, which
              means we have also developed strong opinions about the
              hardware decisions that would have prevented each one.
            </p>
            <p>
              This page is not about cleaning up a flooded basement. That
              belongs on our{' '}
              <a
                href="/services/basement-flood-cleanup"
                className="text-[#ff385c] font-semibold no-underline"
              >
                finished basement flood cleanup page
              </a>
              . This page is about the pump, the battery, the check valve,
              the float, the discharge line, the alarm, and the maintenance
              routine — the specific hardware and prevention decisions that
              determine whether your basement ever needs cleaning in the
              first place. We are a restoration contractor, not a plumber,
              so none of this is an installation quote. It is what we have
              learned from the other end of the problem.
            </p>
          </div>
        </section>

        {/* BATTERY BACKUP */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Layer One"
              title="Battery Backup Systems — Sizing And Selection"
              intro="The number one prevention upgrade for a Michigan home."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A battery backup system is a secondary DC pump powered by a
                deep-cycle battery kept charged by a trickle charger on
                grid power. When the grid drops, the system switches to
                battery and the DC pump keeps pulling water out of the
                basin. The question is never &ldquo;should I have one&rdquo;
                — on a Michigan high water table, the answer is always yes.
                The real questions are how big the pump should be and how
                long the battery needs to last.
              </p>
              <p>
                <strong>Sizing the pump.</strong> Start by measuring the
                gallons-per-hour your primary pump moves during normal
                pumping in a rain event. Count the cycles in a ten-minute
                window, multiply by the pump&rsquo;s per-cycle displacement
                (roughly the basin cross-section times the draw-down
                depth), and scale to an hour. A typical Bloomfield home on
                a high water table moves 1,500 to 3,000 gallons per hour
                during active pumping. The backup pump should be rated to
                move at least the worst-case figure at your total dynamic
                head, not at zero head.
              </p>
              <p>
                <strong>Sizing the battery.</strong> Amp-hours multiplied
                by the pump&rsquo;s current draw give you a run-time
                estimate. A 100 Ah AGM battery running a 20-amp DC pump
                intermittently (not continuously) during active pumping
                gives you several hours of service. The honest answer is
                that long Michigan outages during heavy rain can outlast
                any single battery, which is why a second battery in
                parallel, a larger Group 31 unit, or a generator backup
                behind the primary pump is worth considering for homes in
                flood-prone micro-areas.
              </p>
              <p>
                <strong>Charger and alarm.</strong> The built-in charger
                has to keep the battery topped up without overcharging it.
                A good backup system also sounds an audible alarm when the
                battery is low, the pump has been running (meaning the
                primary has probably failed), or the charger has lost
                grid power — each of those is a different warning the
                homeowner needs to hear separately.
              </p>
            </div>
          </div>
        </section>

        {/* CHECK VALVE + FLOAT + DISCHARGE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Hardware Failure Modes"
              title="Check Valves, Floats, And Discharge Lines"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Check Valve Failure">
                A sticking, cracked, or fouled check valve causes
                short-cycling as water falls back down the pipe and
                re-triggers the pump. Short-cycling is the single fastest
                way to burn out a pump motor because every start pulls
                inrush current through the windings. A silent-failure
                check valve — where the flap is stuck open — prevents the
                pump from building head and causes the pit to overflow
                during heavy inflow even though the pump is running. Both
                are fixable with a ten-dollar part and a plumber&rsquo;s
                half-hour.
              </Card>
              <Card title="Float Switch Failure">
                Tethered floats get pinned against the basin wall or
                caught on the discharge pipe. Vertical floats corrode or
                bind on their guide rod. Diaphragm and electronic switches
                can fail internally with no visible sign. A properly sized
                covered basin with a vertical or electronic switch is the
                configuration we see fail least often. Any float should be
                tested with a fill test — hose water into the pit until
                the pump starts and confirm the turn-off point — at the
                beginning of every rainy season.
              </Card>
              <Card title="Discharge Line Freeze-Back">
                Water leaving the pump in winter is warmer than the
                outside air, and a long above-grade run is where it gives
                up its heat. Fixes include burying below frost line,
                pitching for full drain-down, adding a freeze-relief
                fitting, insulating exposed runs, and routing away from
                shaded north-facing walls where snow piles against the
                discharge. We see the consequences on January calls every
                year.
              </Card>
              <Card title="Pedestal Vs Submersible">
                Submersibles sit in the water, run quieter, handle debris
                better, accept higher horsepower, and last longer in hard
                service. Pedestals live above the basin, cost less, are
                easier to diagnose, and suit shallow pits and retrofits.
                For most modern Bloomfield basements on a real water
                table, a submersible is the correct answer. Pedestals
                still make sense in specific legacy installations.
              </Card>
            </div>
          </div>
        </section>

        {/* HORSEPOWER + BASIN */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Specification"
              title="Horsepower, Total Dynamic Head, And Basin Sizing"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The sticker horsepower on a sump pump is the least useful
                number on the box. What matters is the gallons-per-hour
                the pump will actually move at your total dynamic head —
                the vertical lift from the basin water level to the point
                of discharge, plus the friction losses through the
                discharge pipe. A one-third horsepower pump rated for 40
                gallons per minute at zero head may only move 20 gallons
                per minute at a real ten-foot lift with a long horizontal
                run. The manufacturer&rsquo;s pump curve, not the
                horsepower rating, is the spec to read.
              </p>
              <p>
                <strong>Typical Bloomfield sizing.</strong> One-half
                horsepower submersibles are the common specification for
                most Oakland County homes on a meaningful water table.
                One-third horsepower is adequate for lighter duty
                applications. Three-quarter and one horsepower pumps
                belong in homes with severe groundwater intrusion, long
                runs, or high lifts — and should be paired with larger
                basins so they do not short-cycle themselves to death.
              </p>
              <p>
                <strong>Basin depth and diameter.</strong> A basin at
                least eighteen inches across and twenty-two to thirty
                inches deep is the practical range. A deeper, wider basin
                stores more reserve volume, which lowers the cycles per
                hour, which extends motor life. Basins that cycle more
                than ten to twelve times per hour during a rain event are
                undersized for the incoming flow and should be evaluated
                by a plumber for either a larger basin or a higher-flow
                pump.
              </p>
            </div>
          </div>
        </section>

        {/* ANNUAL MAINTENANCE + ALARMS + LIFECYCLE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Prevention"
              title="Annual Maintenance, Alarms, And Replacement Lifecycle"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Annual Checklist">
                Clean the basin of sediment. Verify the intake weep hole.
                Fill-test the float for both turn-on and turn-off. Confirm
                the check valve holds. Measure amp draw against the
                nameplate. Inspect the discharge termination. Load-test
                the backup battery. Verify the GFCI receptacle. Document
                every step with dates.
              </Card>
              <Card title="High-Water Alarms">
                A standalone battery-backed alarm float sits a few inches
                above the normal activation level and triggers a local
                siren plus, on smart units, a phone notification the
                moment the water is higher than it should be. It is the
                cheapest insurance in the entire system and gives you
                minutes-to-hours of warning before water reaches the
                floor.
              </Card>
              <Card title="Replacement Lifecycle">
                Expect seven to ten years on a primary residential
                submersible. Replace proactively rather than waiting for
                the failure. Backup batteries lose capacity silently and
                should be replaced every three to five years even if they
                appear to hold a charge on a voltmeter. A proper load
                test with a carbon pile tester is the only reliable way
                to know the real capacity.
              </Card>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Pages" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Finished Basement Flood Cleanup">
                If a pump already failed and your basement is wet, see our{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  finished basement flood cleanup page
                </a>{' '}
                for category classification and contents triage.
              </Card>
              <Card title="Frozen Pipe Repair">
                Winter pipe bursts and discharge line freeze-back share a
                season — see{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe repair and thaw protocol
                </a>
                .
              </Card>
              <Card title="Bloomfield Service Area">
                More about our local response on the{' '}
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
              title="Sump Pump Hardware FAQ"
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
              Already failed and water on the floor?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>. Provail Restoration of Bloomfield
              answers in person every hour of every day and will dispatch a
              cleanup crew while you call your plumber for the hardware
              replacement.
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
