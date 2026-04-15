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
    'Frozen Pipe Thaw Protocol & Plumbing Repair in Bloomfield, MI | (248) 531-8404',
  description:
    'Safe frozen pipe thaw methods, copper vs PEX vs PVC burst behavior, section replacement, shutoff valve location, freeze prevention, heat cable, and recirculation lines. Provail Restoration of Bloomfield: (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/frozen-pipe-repair',
  },
  openGraph: {
    title:
      'Frozen Pipe Thaw Protocol & Plumbing Repair | Provail Restoration of Bloomfield',
    description:
      'Safe thaw methods, pipe material behavior, burst patterns, PEX retrofit, and freeze prevention for Bloomfield, MI homes.',
    url: 'https://provailrestoration.com/services/frozen-pipe-repair',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is the safest way to thaw a frozen pipe?',
    a: 'The safest method is slow, even heat applied along the length of the frozen section with the nearest faucet opened so that melting water has somewhere to go. In practice that means a hair dryer on a low setting moving along the pipe, warm (not boiling) towels wrapped around the section and refreshed as they cool, or an electric heat-tape wrap designed for the purpose. Work from the faucet end of the pipe toward the ice, never from the middle outward — otherwise melted water gets trapped between two ice plugs and the expanding section fails. Most importantly: find the shutoff valve before you start, so you can kill the supply instantly if the thaw reveals a split.',
  },
  {
    q: 'Why is an open flame absolutely off the table?',
    a: 'A propane torch or any open-flame device is categorically forbidden for thawing a domestic water line. It is the single most common cause of house fires attributable to frozen pipe response. Wood framing, dust, pipe wrap, cellulose insulation, and the kraft paper facing on fiberglass batts all ignite at temperatures well below what a torch puts on a copper pipe. Propane torches also superheat the copper unevenly, which can cause a steam flash inside the pipe and a violent local rupture. There is no situation in which an open flame is acceptable. Use a hair dryer, heat tape, or warm towels — never fire.',
  },
  {
    q: 'Can I use a steamer or a space heater?',
    a: 'A properly grounded electric space heater placed several feet away from the pipe to warm the surrounding cabinet or crawl space air is acceptable and often effective, especially on long runs that you cannot easily reach directly. A commercial pipe steamer is a legitimate tool in the hands of a plumber but is not something most homeowners should be operating on a residential water line — the temperature and pressure are both real hazards. The general rule: ambient warming is safe, direct high-temperature contact is risky, and anything with a flame is off-limits.',
  },
  {
    q: 'Do copper, PEX, PVC, and galvanized pipes burst differently?',
    a: 'Yes — and understanding the differences helps predict where the leak will be. Rigid copper splits along a longitudinal seam, typically at or very near the coldest spot along a straight run, and the split usually opens as a clean slit an inch or two long. PEX is flexible and resilient, so it often survives a freeze that would rupture copper; when PEX does fail, the failure is most often at a fitting rather than in the middle of a run. Standard Schedule 40 PVC becomes brittle in deep cold and can crack at a joint or a tee when the ice plug forces expansion against a rigid fitting. Galvanized steel, which is still in plenty of older Bloomfield homes, tends to fail at the threaded connections where the wall is thinnest.',
  },
  {
    q: 'Where do bursts usually happen?',
    a: 'The highest-probability burst point is not where the ice forms — it is between the ice plug and a closed faucet or fixture, because that is where the pressure has nowhere to go as water expands into ice. In practice, that means bursts cluster at elbows and tees immediately downstream of the frozen section, at the last fitting before a shutoff, and at the coldest exposed point in an unheated wall or crawl space. On copper, look for a split along the outside of the bend at an elbow. On PEX, look at fitting crimps. On galvanized, look at threaded joints.',
  },
  {
    q: 'Can a plumber just replace the burst section or does the whole run have to come out?',
    a: 'Most of the time a section replacement is all that is needed. A plumber cuts the damaged pipe out a few inches to either side of the failure, preps the ends, and solders, crimps, or solvent-welds a new section of the same (or compatible) material into place. When the whole run has been subjected to repeated freeze-thaw cycles or the existing material is failing in multiple spots, a partial re-pipe with PEX is often the practical answer because PEX routes through existing wall cavities with fewer fittings than copper.',
  },
  {
    q: 'What is a PEX retrofit and when is it worth doing?',
    a: 'A PEX retrofit is a partial or whole-house repipe that pulls out legacy copper or galvanized supply lines and replaces them with cross-linked polyethylene tubing and brass or poly fittings. PEX is far more freeze-tolerant than copper because it can expand slightly without rupturing, it has fewer joints, it is cheaper to install, and it does not corrode. It is worth doing when you have a history of freeze bursts on the same run, when existing galvanized is pitting or leaking, or when a remodel opens the walls anyway. It is not a DIY project — the crimp and expansion tooling is specific and the connections are life-safety critical.',
  },
  {
    q: 'Where is my main water shutoff valve and why does it matter right now?',
    a: 'Your main shutoff is almost always on the wall where the water service enters the home from the street. In Bloomfield homes that usually means a basement wall facing the street, often inside a utility area or near the water meter. There is a second shutoff, frequently a ball valve with a lever handle, immediately after the meter. Learn both locations before you ever need them. In a frozen pipe event, the moment a thaw reveals a leak, you want to be able to close the main in under thirty seconds — every minute of continued flow is another room being soaked. If your main shutoff is seized or you cannot find it, call a plumber to service it today, not during the emergency.',
  },
  {
    q: 'What is the drip technique and does it actually work?',
    a: 'Leaving a faucet dripping during a hard freeze keeps a continuous trickle of water moving through the supply line, which does two useful things: it prevents a static column of water from building the ice plug that causes a burst, and it relieves pressure if ice does begin to form upstream. It is a well-established and effective frozen-prevention technique, especially for faucets on exterior walls or at the far end of a long unheated run. The drip does not need to be heavy — a steady drip every few seconds is enough. The downside is a marginal increase on your water bill during the cold snap, which is trivial compared to a pipe repair.',
  },
  {
    q: 'Should I insulate my pipes or install heat cable?',
    a: 'Both have a place. Closed-cell foam pipe insulation (the split tube sleeves that snap over the pipe) slows heat loss and is the right baseline treatment for any exposed pipe in an unheated basement, crawl space, or exterior wall cavity. Self-regulating heat cable — the UL-listed kind that varies its output with the ambient temperature — is added on top of insulation for sections that still freeze with insulation alone. The cable is wrapped along the pipe per manufacturer spacing, secured with listed tape, and plugged into a dedicated GFCI receptacle. Never use generic extension cords, never use cloth electrical tape, and always follow the manufacturer spacing — heat cable that overlaps itself can overheat.',
  },
  {
    q: 'What about cabinet doors and outdoor hose bibs?',
    a: 'On a hard-freeze night, open the kitchen and bathroom cabinet doors under sinks that sit against exterior walls. The cabinet interior is often several degrees colder than the room, and opening the doors lets the warmer household air circulate around the supply lines. For outdoor hose bibs, disconnect every hose before the first freeze (a hose left attached traps water in the bib), close the interior shutoff serving the bib if your home has one, and bleed the residual line by opening the exterior valve. Frost-free sillcocks handle this automatically if they are installed on a correct downslope, but a hose left attached will defeat a frost-free sillcock and cause an interior wall burst — this is one of the most common winter losses we see.',
  },
  {
    q: 'What is a recirculation line and can it help prevent freezing?',
    a: 'A hot-water recirculation system uses a small pump and a return line to keep warm water continuously moving through the hot-water supply loop, so that hot water is available at every fixture without waiting and, as a side effect, the constant motion reduces the risk of the hot side freezing during a cold snap. It is primarily a convenience and efficiency upgrade rather than a freeze-prevention strategy, but it does help on hot-side runs that are vulnerable to cold exposure. Cold-side pipes do not benefit from a recirculation loop, so insulation, heat cable, the drip technique, and cabinet doors remain the primary defenses.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Frozen Pipe Thaw Protocol & Plumbing Repair Guidance',
  name: 'Frozen Pipe Repair',
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
    'Safe frozen pipe thaw protocol, pipe material behavior across copper, PEX, PVC, and galvanized, burst pattern identification at elbows and fittings, PEX retrofit guidance, shutoff valve location, and winter freeze prevention through heat cable, insulation, drip technique, cabinet circulation, and outdoor hose bib bleed.',
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
      name: 'Frozen Pipe Repair',
      item: 'https://provailrestoration.com/services/frozen-pipe-repair',
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
                  Thaw Protocol & Repair
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
              Frozen Pipe Thaw Protocol & Plumbing Repair — Bloomfield
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Safe thaw methods, pipe material behavior, burst patterns at
              elbows, section replacement, PEX retrofit, shutoff valve
              location, and the winter-prevention routine that keeps your
              Bloomfield home ahead of the freeze.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              A frozen pipe is a physics problem dressed up as a plumbing
              emergency. Water expands approximately nine percent as it
              freezes, and when that expansion happens inside a closed
              section of rigid pipe, something has to give — the pipe
              wall, a solder joint, a fitting, or the weakest point along
              the run. Provail Restoration of Bloomfield has responded to
              freeze bursts in every corner of Bloomfield Township, and
              the winter patterns are consistent enough that the right
              decisions during the thaw usually separate a twenty-dollar
              parts list from a finished-ceiling replacement.
            </p>
            <p>
              This page is about the plumbing side of the problem — how
              to thaw safely, how different pipe materials fail, where
              the bursts cluster, and how to prevent the next one. We are
              a restoration contractor, not a licensed plumber, so the
              actual solder joint or crimp connection is someone
              else&rsquo;s scope. What we can do is walk you through the
              thaw protocol that will not start a house fire and the
              prevention routine that stops the problem from coming back
              next January.
            </p>
          </div>
        </section>

        {/* THAW PROTOCOL */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Thaw Protocol"
              title="How To Thaw A Frozen Pipe Without Starting A Fire"
              intro="Before the first warm anything touches the pipe, find the main water shutoff."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Step one: locate the shutoff.</strong> Your main
                water shutoff is almost always on the wall where the water
                service enters the home from the street — in Bloomfield,
                that usually means a basement wall facing the road near
                the meter. There is typically a second valve immediately
                after the meter. Walk to both right now, before touching
                anything. The moment the ice plug releases, a split in
                the pipe will start flowing at full line pressure, and
                the difference between a dry floor and a ruined ceiling
                is measured in the seconds it takes you to close the
                valve.
              </p>
              <p>
                <strong>Step two: open the nearest faucet.</strong> Open
                the fixture downstream of the frozen section so that
                melting water has somewhere to go and so you get audible
                confirmation when the thaw is progressing. If nothing is
                trickling out, the ice is still blocking the line. When a
                trickle begins and gradually builds, the ice is giving
                way.
              </p>
              <p>
                <strong>Step three: apply slow, even heat.</strong> Warm
                the pipe from the faucet end toward the ice, never from
                the middle outward. A hair dryer on low, warm (not
                boiling) towels wrapped and refreshed, or a listed heat
                tape are all acceptable. An electric space heater placed
                several feet away to warm the ambient air in the cabinet
                or crawl space is also effective, especially when you
                cannot reach the pipe directly. Work patiently — a
                gentle ten-minute thaw is safer than a five-minute rapid
                thaw that shocks a fitting.
              </p>
              <p>
                <strong>Never use an open flame.</strong> A propane
                torch, a MAPP torch, a candle, or any other flame-based
                device is absolutely forbidden on a domestic water line.
                Open flames are the single most common cause of fires
                attributable to frozen-pipe response. Wood framing,
                cellulose insulation, and dust all ignite well below the
                temperature a torch puts on copper. There is no scenario
                in which this is a good idea. Use a hair dryer or warm
                towels — never fire.
              </p>
              <p>
                <strong>Commercial steamers</strong> exist and are
                legitimate tools for professional plumbers, but they are
                not something a homeowner should operate on a residential
                line — the temperature and pressure are both real
                hazards. When a run is deeply inaccessible, the right
                move is to call a plumber and let them bring the right
                equipment.
              </p>
            </div>
          </div>
        </section>

        {/* PIPE MATERIAL BEHAVIOR */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Material Behavior"
              title="How Copper, PEX, PVC, And Galvanized Fail Differently"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Rigid Copper">
                Copper is strong in tension but has a limited ability to
                yield before it tears. Freeze failures appear as a
                longitudinal split along the outside wall, usually at or
                very near the coldest point along a straight run. The
                split is often an inch or two long and clean-edged. The
                repair is a simple section replacement with sweated
                joints or a press fitting.
              </Card>
              <Card title="PEX (Cross-Linked Polyethylene)">
                PEX is flexible and can expand slightly with the ice
                without rupturing, so it survives many freeze events
                that would destroy copper. When PEX does fail, the
                failure is usually at a crimp or expansion fitting
                rather than in the middle of the tubing. Inspect every
                fitting in the frozen section before assuming the line
                is intact.
              </Card>
              <Card title="Schedule 40 PVC">
                PVC becomes brittle in deep cold. Freeze failures
                typically appear at joints and tees where rigid fittings
                cannot flex at all — the ice plug pushes the expanding
                water against the fitting and the plastic cracks at the
                shoulder. Repair is a solvent-welded section replacement.
              </Card>
              <Card title="Galvanized Steel">
                Still present in plenty of older Bloomfield homes.
                Galvanized pipe is strong, but the threaded connections
                are the thinnest part of the assembly and are where
                corrosion accumulates. Freeze failures in galvanized
                almost always show up at threaded joints rather than in
                the middle of a run.
              </Card>
            </div>
          </div>
        </section>

        {/* BURST PATTERNS & REPAIR */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Burst Patterns"
              title="Where The Failure Actually Happens — And How It Gets Repaired"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Contrary to intuition, the pipe does not usually burst
                at the ice plug itself. The plug blocks the line; the
                failure happens downstream of the plug, between the ice
                and the closed faucet or fixture, because that is where
                the trapped water has nowhere to go as it continues to
                expand against the rigid boundary. In practice, bursts
                cluster at elbows and tees a short distance downstream
                of the frozen section — the elbow is a concentration of
                stress because the expanding water has to change
                direction, and the outside of the bend sees the highest
                hoop stress.
              </p>
              <p>
                <strong>Section replacement</strong> is almost always the
                right repair. A plumber isolates the line at the
                nearest shutoff, cuts the damaged pipe out a few inches
                to either side of the failure, preps the ends, and
                installs a new section of the same or compatible
                material. On copper the new section is soldered or
                pressed in place. On PEX the connection is crimped or
                expansion-fit. On PVC it is solvent welded. On
                galvanized, the failed threaded connection is typically
                replaced rather than re-sealed — trying to re-tape a
                corroded male thread almost never holds.
              </p>
              <p>
                <strong>PEX retrofit</strong> is the right answer when
                you have repeatedly frozen the same run, when legacy
                galvanized is failing in multiple spots, or when a
                remodel has the walls open anyway. PEX routes through
                existing cavities with fewer joints than copper, it is
                far more freeze-tolerant, and it is cheaper to install.
                A partial retrofit — pulling just the run that keeps
                freezing and leaving the rest in place — is often the
                most cost-effective upgrade. A full whole-house repipe
                is a bigger project that makes sense when multiple runs
                are failing on the same timeline.
              </p>
            </div>
          </div>
        </section>

        {/* FREEZE PREVENTION */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Prevention"
              title="The Winter Routine That Actually Works"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Pipe Insulation">
                Closed-cell foam split tubes snap over any exposed
                supply line in a basement, crawl space, or exterior wall
                cavity. Insulation slows heat loss but does not add
                heat, so on the coldest nights insulation alone is
                sometimes not enough. It is the right baseline
                treatment.
              </Card>
              <Card title="Self-Regulating Heat Cable">
                UL-listed heat cable wrapped along the pipe per
                manufacturer spacing, secured with listed tape, and
                plugged into a dedicated GFCI. The cable varies output
                with temperature so it does not overheat in warm
                conditions. Never use extension cords, never allow the
                cable to overlap itself, and always follow the spacing
                chart — cable piled on itself can run hot enough to
                damage the pipe or the framing it touches.
              </Card>
              <Card title="The Drip Technique">
                On a hard-freeze night, leave the faucet at the far end
                of a vulnerable run dripping steadily. A drip every few
                seconds prevents the static column that forms an ice
                plug and relieves pressure if ice does begin upstream.
                The extra water on your bill is trivial compared to a
                burst repair.
              </Card>
              <Card title="Cabinet Doors Open">
                Open the cabinets under kitchen and bathroom sinks on
                exterior walls during a cold snap. The cabinet interior
                is colder than the room; open doors let household air
                circulate around the supply lines and raise the
                cabinet temperature several degrees.
              </Card>
              <Card title="Outdoor Hose Bib Bleed">
                Disconnect every hose before the first hard freeze. A
                hose left attached traps water at the bib and defeats
                even a frost-free sillcock, causing an interior wall
                burst that is one of the most common winter losses we
                see. If your home has an interior shutoff for the
                exterior bib, close it and open the outside valve to
                drain residual water.
              </Card>
              <Card title="Recirculation Lines">
                A hot-water recirculation loop keeps warm water moving
                through the hot-side supply and reduces freeze risk on
                vulnerable hot-side runs as a side effect of its main
                convenience function. It does not help the cold side —
                for cold runs, the baseline prevention measures above
                remain the defense.
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
                When a frozen pipe bursts above a finished basement, see
                our{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  finished basement flood cleanup page
                </a>{' '}
                for water classification and contents triage.
              </Card>
              <Card title="Sump Pump Hardware & Prevention">
                Discharge line freeze-back is a winter failure mode on
                its own — see{' '}
                <a
                  href="/services/sump-pump-failure"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  sump pump backup and failure prevention
                </a>
                .
              </Card>
              <Card title="Insurance Claims Help">
                For coverage questions on a burst pipe loss, see our{' '}
                <a
                  href="/insurance-claims-help"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  insurance claims help page
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
              title="Frozen Pipe Thaw & Repair FAQ"
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
              Pipe already burst and water coming through the ceiling?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Shut the main, then call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>. Provail
              Restoration of Bloomfield answers in person around the clock
              and will dispatch a cleanup crew while you call a plumber for
              the repair.
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
