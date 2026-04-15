import type { Metadata } from 'next'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  PHONE,
  PHONE_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from '../_components/site-chrome'

const BIZ_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/water-damage-restoration'

export const metadata: Metadata = {
  title:
    'IICRC S500 Water Damage Drying Process — Equipment, Timelines & Psychrometry',
  description:
    'A working reference on the ANSI/IICRC S500 drying process: Category 1/2/3 classification, psychrometric theory, LGR vs refrigerant vs desiccant dehumidifiers, drying chambers, moisture meter calibration, daily drying logs, and the industry dry standard. Compiled by Provail Restoration of Bloomfield.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      'IICRC S500 Water Damage Drying Process — Equipment, Timelines & Psychrometry',
    description:
      'Technical reference on psychrometry, dehumidifier selection, drying chambers, moisture meters, and S500 dry standards.',
    url: PAGE_URL,
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is the S500 dry standard and how is it set on a job?',
    a: 'The dry standard is a reference moisture reading taken from an unaffected area of the same building, on the same material type, under similar environmental conditions. The standard itself is not a fixed percentage — it is whatever the baseline happens to be for that specific structure on that specific day. A drying project is considered complete when the affected materials return to the same range as the reference readings, verified by instrument measurements rather than a visual or tactile check.',
  },
  {
    q: 'Why choose an LGR dehumidifier over a conventional refrigerant unit?',
    a: 'A low grain refrigerant unit uses a pre-cooling circuit that drops the inlet air temperature before it reaches the primary coil, which lets the machine continue to condense water vapor in conditions where a standard refrigerant dehumidifier would stall. In practical terms, LGRs keep pulling moisture when the chamber is already dry (below roughly 55 grains per pound), when surface temperatures are cool, or when the job has reached the tail end of drying and the remaining bound moisture is stubborn.',
  },
  {
    q: 'When is a desiccant dehumidifier the right call?',
    a: 'Desiccant units move the drying process into a completely different regime: they rely on a silica or lithium chloride wheel that attracts moisture at low vapor pressures, rather than condensing it on a cold coil. That makes them valuable for cold environments, unheated crawl spaces, large-volume commercial losses, drying dense hardwood assemblies, and any situation where grain depression below what an LGR can achieve is required.',
  },
  {
    q: 'How is psychrometry used day to day on a drying job?',
    a: 'A thermo-hygrometer reading gives temperature and relative humidity for a location. Those two numbers are converted to grains of moisture per pound of dry air, which is the actual measurement technicians act on. The difference between grains inside the drying chamber and grains outside it (the grain depression) tells the technician whether the equipment balance is correct. If the chamber is not drier than the surrounding air, the dehumidifier is either undersized, damaged, or being overwhelmed by outside air infiltration.',
  },
  {
    q: 'What goes into a drying log and why does it matter?',
    a: 'A drying log records daily temperature, relative humidity, grains per pound, and moisture content readings for each affected material at each mapped location, along with equipment status and any adjustments the technician made that day. The log is what demonstrates the job was measured rather than guessed, and it is the reference that shows, in writing, when the structure met the dry standard. Without a log the job has no verifiable endpoint.',
  },
  {
    q: 'How are pin and pinless moisture meters calibrated and verified?',
    a: 'Pin meters are referenced to a calibration block of known electrical resistance and are routinely checked against that block. Pinless meters use capacitance and are verified against a calibration standard supplied by the manufacturer. Both instrument types are also sanity-checked at the start of each job by reading a known dry reference area in the same structure — if the meter reads the dry reference as abnormally high, the operator stops and investigates before relying on any other reading.',
  },
  {
    q: 'What defines an unsalvageable porous material under S500?',
    a: 'Porous materials that absorbed grossly contaminated water, that have lost structural integrity, that cannot be cleaned back to a sanitary condition, or that cannot be dried to within acceptable limits in a reasonable timeframe are typically classified as unsalvageable. Common examples include carpet pad that contacted Category 3 water, saturated fiberglass batt insulation, and drywall that wicked contaminated water above the flood cut line.',
  },
  {
    q: 'What is a drying chamber and when should one be built?',
    a: 'A drying chamber is a contained volume created with polyethylene sheeting, zipper doors, and sometimes negative or positive pressure, so dehumidification can concentrate on the wet area rather than conditioning the entire building. Chambers are built when the affected footprint is a fraction of the total conditioned space, when outside air infiltration would otherwise overwhelm the equipment, or when the unaffected portion of the building needs to be isolated from the drying environment.',
  },
  {
    q: 'How are day-by-day milestones tracked through a typical loss?',
    a: 'Day zero is documentation and equipment placement. Day one verifies the chamber is pulling down and confirms directional trends on the wettest materials. Days two through four are where most of the moisture comes out, with readings dropping steadily toward the dry standard. The final day is a verification pass — two consecutive readings at the dry standard before equipment is removed. Any stalled trend triggers an investigation rather than more equipment.',
  },
  {
    q: 'Why is documentation photography part of the drying protocol?',
    a: 'Photographs record the condition of materials, equipment placement, meter readings, and labels at specific times. That visual record supports the written drying log, shows the chamber was configured correctly, and provides an objective reference if any decision is questioned later. Photos are taken at initial inspection, each daily monitoring visit, and at the final verification before demobilization.',
  },
]

const providerNode = {
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
  url: 'https://provailrestoration.com',
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Structural Drying and Water Damage Restoration',
  name: 'IICRC S500 Structural Drying Program',
  provider: providerNode,
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Franklin' },
  ],
  description:
    'Reference explanation of the ANSI/IICRC S500 drying process: water classification, psychrometric control, dehumidifier selection, moisture metering, drying logs, dry standard verification, and documentation.',
  url: PAGE_URL,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/water-damage-restoration#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: PAGE_URL,
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
      name: 'IICRC S500 Drying Process',
      item: PAGE_URL,
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

export default function WaterDamageRestorationPage() {
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
                  Technical Reference
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>ANSI/IICRC S500</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Psychrometry</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              The IICRC S500 Drying Process, Explained From the Field
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              A plain-English walkthrough of how professional structural drying
              actually works — water classification, psychrometric control,
              dehumidifier selection, moisture metering, and the dry standard.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Most homeowners learn about structural drying only after
              something has gone wrong. A pinhole leak behind a refrigerator,
              a cracked washing machine hose, a toilet supply line that let go
              while no one was home — the discovery moment is always the same,
              and so is the next question: what happens now, and how do we
              know when the building is actually dry again? This page is a
              reference guide to that question. It explains how the modern
              water damage restoration industry answers it, using the same
              framework the technicians on our trucks follow every day.
            </p>
            <p>
              The reference document for that framework is ANSI/IICRC S500,
              the Standard for Professional Water Damage Restoration. S500 is
              a consensus document written and reviewed by the Institute of
              Inspection, Cleaning and Restoration Certification, together
              with adjusters, laboratory scientists, and contractor
              organizations. It is not a law, but it is the closest thing the
              industry has to a shared standard of care. When a contractor
              and an adjuster disagree about whether enough drying was done,
              S500 is the document they both reach for.
            </p>
            <p>
              What follows is how the people at <strong>{BIZ_NAME}</strong>{' '}
              put S500 into practice. None of this is proprietary — any
              well-trained restorer should be able to describe roughly the
              same process. If a contractor cannot explain these concepts in
              plain language, that is its own red flag, regardless of the
              logo on the van.
            </p>
          </div>
        </section>

        {/* WATER CATEGORIES */}
        <section id="categories" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 1"
              title="Classifying the Water: Categories 1, 2 and 3"
              intro="Before any drying equipment touches the building, the water itself has to be classified. Every downstream decision rests on this."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Category 1 — Sanitary">
                Originates from a source that, at the moment of release, did
                not carry substantial harm to humans. Copper or PEX supply
                line failures, melted ice maker lines, and overflowing sinks
                fed by clean potable water are the textbook examples. Category
                1 water can deteriorate into Category 2 or 3 once it picks up
                contamination from the materials it contacts or sits long
                enough to support microbial growth.
              </Card>
              <Card title="Category 2 — Significantly Contaminated">
                Contains enough chemical, biological or physical contamination
                that human contact could cause discomfort or sickness.
                Appliance discharges, toilet overflows without solids, and
                aquarium leaks usually land here. Porous materials that
                absorbed Category 2 water are normally removed rather than
                dried in place, because in-situ disinfection cannot reliably
                reach every cellulose fiber.
              </Card>
              <Card title="Category 3 — Grossly Contaminated">
                Water containing pathogenic, toxic or other harmful agents —
                sewage backups, rising groundwater, any water that has passed
                through a toilet trap, or Category 1 or 2 water that has been
                left stagnant long enough to degrade. Category 3 losses
                require containment barriers, respiratory and skin
                protection, antimicrobial treatment, and aggressive removal
                of porous building assemblies.
              </Card>
            </div>
            <div className="max-w-[780px] mx-auto mt-10 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The category is documented at the initial inspection and
                revisited if conditions change. Time is one of the variables
                that changes category: water that was sanitary when it
                escaped a sink will not remain sanitary forever if it sits
                under a cabinet for three days. S500 is explicit that a
                clean-water loss can mature into a contaminated one, and the
                field technician is expected to revise the classification
                rather than stick with the initial label for convenience.
              </p>
              <p>
                The category also drives the damage class — a separate
                concept that describes how much of the materials in a space
                absorbed water and how fast those materials will give that
                water back. A Class 1 loss affects a small portion of the
                space with low-porosity materials; a Class 4 loss involves
                deeply bound moisture in plaster, hardwood, concrete, or
                masonry. Category and class together determine how much
                equipment the job needs and how long it is likely to run.
              </p>
            </div>
          </div>
        </section>

        {/* PSYCHROMETRY */}
        <section id="psychrometry" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 2"
              title="Psychrometry: The Physics That Drives the Job"
              intro="The relationship between air, temperature, and water vapor is what determines whether a drying setup will work. Nothing else on the job is as important to understand."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Psychrometry is the study of moist air. For a restorer it
                comes down to three interrelated numbers: dry-bulb
                temperature, relative humidity, and specific humidity. Dry
                bulb is the plain thermometer reading. Relative humidity is
                the percentage of water vapor the air is currently holding
                compared to the maximum it could hold at that temperature.
                Specific humidity, expressed in grains of moisture per pound
                of dry air (GPP), is the absolute number the industry works
                from, because unlike relative humidity it does not change
                when the temperature moves.
              </p>
              <p>
                Grains per pound is the currency of drying. The goal during
                structural drying is to keep the air inside the drying
                chamber lower in grains than the wet materials, which creates
                a vapor pressure gradient that draws moisture out of those
                materials and into the air. The dehumidifier then captures
                that water vapor on its coil or desiccant wheel, condenses
                or adsorbs it, and dumps it to drain. If the chamber air is
                not drier than the materials, evaporation stalls no matter
                how many air movers are blowing.
              </p>
              <p>
                Air movers play a supporting role. They do not remove water
                by themselves. What they do is replace the thin, saturated
                boundary layer of air that forms against any wet surface
                with drier air drawn from the dehumidifier discharge. That
                keeps the local grain count near the surface low, which
                keeps the vapor pressure gradient steep, which keeps
                evaporation moving. Picture a laundry line on a still day
                versus a breezy one — the breeze is not drying the clothes,
                it is constantly giving the water somewhere to go.
              </p>
              <p>
                Three temperature readings matter on every job:
                outside-the-chamber, inside-the-chamber, and at the
                dehumidifier discharge. The dehumidifier discharge will
                almost always be the warmest point in the room, because the
                machine rejects the latent heat of condensation back into
                the air it processes. That warmer, drier discharge air is
                an asset when directed across wet materials and a liability
                when allowed to dead-end into an isolated corner.
              </p>
              <p>
                A drying chamber that is holding the right grain depression
                is one of the most satisfying things to see on a monitor.
                Outside-chamber readings might be 70 degrees and 55 percent
                relative humidity, or about 66 GPP. Inside, the same air is
                78 degrees and 30 percent, or about 41 GPP. That 25 GPP
                depression tells the technician the equipment is balanced,
                the envelope is holding, and evaporation has somewhere to
                go. Lose that depression and drying stops.
              </p>
            </div>
          </div>
        </section>

        {/* DEHUMIDIFIER SELECTION */}
        <section id="dehumidifiers" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 3"
              title="Dehumidifier Selection: LGR, Refrigerant, and Desiccant"
              intro="Three families of machines, each with a window of conditions where it is the right tool."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Conventional Refrigerant">
                A standard refrigerant dehumidifier pulls air across a cold
                coil, condenses water vapor, and returns warmer drier air to
                the room. It works well when the incoming air is warm and
                humid — an early-stage loss in a summer basement is a
                textbook use case. Efficiency falls off sharply once the
                chamber pulls below about 55 grains per pound or once
                ambient temperatures drop into the sixties and below.
              </Card>
              <Card title="Low Grain Refrigerant (LGR)">
                An LGR adds a pre-cooling circuit that drops inlet air
                temperature before the primary coil, which lets the machine
                keep pulling water out of air that a standard refrigerant
                unit would treat as already dry. LGRs are the workhorses of
                modern structural drying because they remain productive
                deep into the tail of the drying curve, where the remaining
                moisture is bound inside dense materials and the chamber
                grain count is already low.
              </Card>
              <Card title="Desiccant">
                A desiccant dehumidifier uses a silica gel or lithium
                chloride rotor that attracts moisture at very low vapor
                pressures, bypassing the refrigerant cycle entirely. That
                lets it perform in cold environments and drive grain counts
                lower than any refrigerant machine. The trade-off is high
                electrical draw and significant waste heat exhausted during
                regeneration, which is why desiccants are most common on
                large commercial losses, cold-weather jobs, and dense
                materials like hardwood and masonry.
              </Card>
            </div>
            <div className="max-w-[780px] mx-auto mt-10 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Sizing the dehumidification for a job is based on the
                affected cubic footage, the class of loss, and the target
                grain depression. A lightly affected Class 1 living room
                might be adequately served by a single portable LGR. A
                Class 3 basement with saturated wall cavities and
                carpet-over-pad typically needs multiple LGRs or a
                combination of LGR and desiccant. Undersizing the
                dehumidification is the single most common reason a drying
                job runs long.
              </p>
              <p>
                A useful heuristic: if the chamber grain count is not
                trending downward on the second day, the problem is almost
                always either undersized dehumidification or outside air
                infiltration, not air mover placement. Adding more air
                movers to an unbalanced chamber just stirs the air around.
                Fixing the envelope or adding another dehumidifier is the
                move.
              </p>
            </div>
          </div>
        </section>

        {/* DRYING CHAMBERS */}
        <section id="chambers" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 4"
              title="Building a Drying Chamber"
              intro="Why containment almost always produces a faster, cheaper, more measurable drying job."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A drying chamber is a volume of the building that has been
                isolated from the rest of the conditioned space, usually
                with six-mil polyethylene sheeting, zipper doors, and some
                form of pressure control. The reason to build one is
                straightforward: dehumidification is finite, and conditioning
                an entire house so that one closet dries out is a waste of
                that finite capacity. Contain the wet area, concentrate the
                equipment, and the grain count in that pocket of air falls
                much faster.
              </p>
              <p>
                Containment also answers the air infiltration problem.
                Outside air is usually wetter than the air a dehumidifier
                has just processed. Every leak in the building envelope, and
                every open interior door, is a pathway for high-grain
                outside air to wander into the chamber and partially undo
                the work. A sealed chamber with a controlled pressure
                relationship to the surrounding structure stays dry in a
                way an open room never will.
              </p>
              <p>
                Pressure relationships are themselves a tool. Pulling the
                chamber slightly negative to the rest of the home prevents
                odors, dust, and any potential contaminants from drifting
                into clean areas — useful on Category 2 and 3 losses.
                Pushing the chamber slightly positive can help drive dry,
                dehumidified air into wall cavities when used with a mat
                system, which is how hardwood floors are usually dried in
                place without tearing them out.
              </p>
              <p>
                The last component of a good chamber is a thermo-hygrometer
                logging inside the chamber and a second one logging just
                outside it. The difference between those two readings, in
                grains, is the chamber&apos;s report card. If the inside
                reading is not meaningfully lower than the outside reading,
                the chamber is not doing its job and something has to
                change before any more hours are billed.
              </p>
            </div>
          </div>
        </section>

        {/* MOISTURE METERING */}
        <section id="meters" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 5"
              title="Moisture Meters, Calibration, and the Dry Standard"
              intro="The numbers that decide when the job is done."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A moisture meter is the only thing on the truck that can
                answer the question &ldquo;is it dry?&rdquo; Two families of
                meters are in routine use. Pin meters push two electrodes a
                short distance into a material and measure the electrical
                resistance between them; wet wood conducts, dry wood does
                not, and the meter converts that resistance curve into a
                moisture content percentage. Pinless meters use a
                capacitance plate pressed against the surface and infer
                moisture from how the electromagnetic field is disturbed.
                They leave no holes, which makes them the preferred tool on
                finished surfaces, but they read to a shallower depth than a
                pin meter.
              </p>
              <p>
                Meters are calibrated and verified in two places. First, at
                the factory and on a manufacturer-supplied calibration
                block or reference standard, at intervals set by the
                manufacturer&apos;s instructions. Second, and more important
                day to day, against a known dry reference area on the job
                itself. The technician takes a reading from an unaffected
                closet wall, an interior partition, or a piece of trim in
                an undamaged room, and that reading becomes the dry standard
                for the rest of the loss. If the meter reads the reference
                area as surprisingly wet, the instrument is retested before
                any data from the affected areas is trusted.
              </p>
              <p>
                The dry standard itself is usually expressed as a moisture
                content percentage for each material class on the job —
                subfloor, framing, drywall, trim — along with the grain per
                pound count that the surrounding air needs to reach. S500
                defines drying as complete when affected materials have
                returned to the dry standard and the chamber air is in
                equilibrium with it. In practice that means two consecutive
                daily readings at the dry standard, with equipment still
                running, before demobilization is authorized.
              </p>
              <p>
                Moisture readings are recorded at mapped points, not at
                random. On the first day the technician sketches a floor
                plan and numbers the reading points so that every
                subsequent reading is taken from the same place. Reading
                point 4 on day one and reading point 4 on day three are
                reading the same piece of subfloor, three inches from the
                same landmark. That is how trends become meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* DRYING LOG & DAILY MILESTONES */}
        <section id="log" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 6"
              title="The Drying Log and Day-by-Day Milestones"
              intro="A running journal of the job, captured at every monitoring visit."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Every monitoring visit adds a row to the drying log. The
                entries are mostly numeric: dry-bulb temperature inside and
                outside the chamber, relative humidity inside and outside,
                grains per pound inside and outside, and the moisture
                content reading at each mapped reference point. Alongside
                the numbers, a short narrative records what was added,
                removed, or repositioned, and any owner communications that
                affected the scope.
              </p>
              <p>
                A typical Class 2 residential loss runs through predictable
                milestones. Day zero is the initial inspection and setup:
                category determination, moisture map, dry standard
                baseline, containment, and equipment placement. Day one is
                the first monitoring visit, usually twenty-four hours after
                setup, and the main goal is to confirm that the chamber is
                pulling down — grain counts inside the chamber should be
                noticeably lower than outside, and surface readings on the
                wettest materials should be trending in the right direction.
              </p>
              <p>
                Days two and three are where most of the moisture comes
                out. Materials are giving up water into the chamber air,
                the dehumidifier is condensing or adsorbing it, and the
                drying curve is at its steepest. Day four often shows a
                smaller daily improvement — the fast-drying portions of the
                loss have arrived at dry, and the remaining readings belong
                to denser or more deeply saturated assemblies. This is the
                point where LGR performance matters most, because the
                remaining bound moisture is harder to pull.
              </p>
              <p>
                Day five is often the verification pass. Readings at the
                mapped points meet the dry standard, and the chamber is
                held for another twenty-four hours with equipment still
                running. If the following day&apos;s readings are still at
                the dry standard, the job is demobilized. If readings drift
                up, the chamber is opened back up and the investigation
                starts — usually a previously unnoticed cavity, a hidden
                insulation pocket, or a framing member that was never in
                the original moisture map.
              </p>
              <p>
                Every log entry is accompanied by photographs. At minimum
                the technician captures a wide shot of each affected room,
                the equipment in place, the meter display for each mapped
                reading point, and any new observations from that visit.
                The photo record, combined with the log and the moisture
                map, forms the documentation package that accompanies the
                final invoice.
              </p>
            </div>
          </div>
        </section>

        {/* UNSALVAGEABLE MATERIALS & DISPOSAL */}
        <section id="materials" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 7"
              title="Unsalvageable Porous Materials and Disposal"
              intro="What gets removed, why, and how it gets handled after it leaves the building."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A portion of the wet materials on most losses cannot be
                dried in place. S500 recognizes four practical reasons a
                porous material is classified as unsalvageable: it absorbed
                grossly contaminated water, it lost structural integrity,
                it cannot be cleaned back to a sanitary condition, or it
                cannot be returned to the dry standard within a reasonable
                timeframe even with proper equipment. The contractor is
                expected to document which of those criteria applies rather
                than remove materials because removal is convenient.
              </p>
              <p>
                Carpet pad is the most frequent example. Modern hot-melt,
                rebond, and prime urethane pads behave like a sponge: they
                hold a great deal of water and release it slowly. On
                Category 2 and 3 losses the pad is always replaced because
                in-place decontamination of the cellulose and polyurethane
                matrix is not reliable. On Category 1 losses with fast
                response the pad is sometimes saved, but the decision is
                based on measurement, not hope.
              </p>
              <p>
                Fiberglass and cellulose batt insulation is usually removed
                wherever it contacted water. Fiberglass loses R-value when
                compressed by the weight of absorbed water and retains
                enough moisture in its matrix to extend the drying
                timeline significantly. Cellulose holds even more water and
                supports microbial growth readily. Removal is almost always
                the right call, and the insulation is bagged at the
                opening to avoid spreading particulate through the rest of
                the house.
              </p>
              <p>
                Drywall is evaluated based on how high the water wicked up
                the sheet, whether the paper face is intact, whether the
                core has sagged or delaminated, and what category of water
                was involved. The conventional flood cut removes drywall a
                fixed distance above the visible water line, giving the
                wall cavity an open path for drying equipment. On Category
                3 losses the cut is taller and every trace of contaminated
                gypsum leaves the building.
              </p>
              <p>
                Removed materials are handled as construction debris unless
                the job involves contaminated water, sewage, or a
                biohazard situation. In those cases materials are double
                bagged, labeled, and disposed of through the regional
                waste stream the contractor is authorized to use. The
                disposal pathway and any manifests are kept in the job file
                as part of the final documentation.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION PHOTOGRAPHY */}
        <section id="photography" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Part 8"
              title="Documentation Photography"
              intro="A written drying log is only half of a defensible record. The other half is pictures."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Photographs on a drying job serve three audiences. They
                give the homeowner a visual record of what their property
                looked like at every step. They give the insurance carrier
                an evidentiary basis for the scope of work and the
                materials removed. And they give the contractor a
                contemporaneous record that supports the drying log if any
                decision is questioned later. All three are served by the
                same photo set.
              </p>
              <p>
                A complete initial-visit photo set begins with wide
                establishing shots of each affected room from at least two
                corners. Close-ups follow: the source of water intrusion,
                any pre-existing damage that predates the loss, visible
                water lines on drywall or trim, and tight shots of any
                materials that will be removed. The moisture meter display
                is photographed at each mapped reading point, with the
                probe still on the material, so that the numbers in the
                drying log line up with images someone else could
                independently verify.
              </p>
              <p>
                Daily monitoring photos are leaner but consistent. Wide
                shots of the equipment still in place, any changes to the
                setup, and a fresh meter-on-material shot at each reference
                point. If the crew added a dehumidifier, repositioned air
                movers, or opened a cavity, those decisions are
                photographed from an angle that makes the change obvious to
                anyone reviewing the file later.
              </p>
              <p>
                The final verification visit closes the loop. A clean set
                of meter-on-material photos at the dry standard, wide
                shots of each room before equipment is pulled, and a final
                chamber breakdown photo set. Combined with the drying log,
                the moisture map, and any material disposal records, these
                images are what turn a drying job into a defensible,
                evidence-based file.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Reference"
              title="Process & Standards FAQ"
              intro="Common questions about the S500 drying framework, answered from the field."
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
              Need a standards-aligned drying job started today?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              The crew follows this process on every loss. Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>{' '}
              and a lead technician will walk you through the first steps.
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
