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
} from '../_components/site-chrome'

export const metadata: Metadata = {
  title:
    'Water Damage Restoration in Bloomfield, MI | 24/7 Response | (248) 531-8404',
  description:
    'Comprehensive water damage restoration in Bloomfield Township and surrounding Oakland County communities. IICRC S500-aligned extraction, structural drying, dehumidification, moisture mapping, and insurance documentation. Call (248) 531-8404 for 24/7 emergency response.',
  alternates: {
    canonical: 'https://provailrestoration.com/water-damage-restoration',
  },
  openGraph: {
    title: 'Water Damage Restoration in Bloomfield, MI | PROVAIL',
    description:
      '24/7 water damage extraction, structural drying, and restoration in Bloomfield Township, MI. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/water-damage-restoration',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'How quickly should water damage be addressed?',
    a: 'Drying should begin as soon as it is safe to enter the structure. Most secondary damage — swelling of wood, delamination of laminate flooring, and microbial growth — accelerates after the first 24 to 48 hours of continuous moisture exposure. Earlier intervention generally means fewer materials need to be removed and replaced.',
  },
  {
    q: 'What does IICRC S500 mean and why does it matter?',
    a: 'ANSI/IICRC S500 is the industry standard of care for professional water damage restoration. It defines how losses are inspected, classified by water category and damage class, dried, and documented. Working to S500 means decisions are based on measured moisture readings rather than guesswork, which protects both the property and the homeowner.',
  },
  {
    q: 'What is the difference between Category 1, 2, and 3 water?',
    a: 'Category 1 is clean water from a sanitary source such as a supply line. Category 2 (often called gray water) contains some contamination and may cause discomfort if contacted. Category 3 (black water) is grossly contaminated — for example sewage backups, rising surface water, or long-standing water that has degraded. Each category requires a different cleaning, decontamination, and material-removal approach.',
  },
  {
    q: 'Will my drywall and flooring need to be removed?',
    a: 'Not always. Many materials can be dried in place with high-capacity air movers and dehumidifiers when caught early and when the water is Category 1. Materials that absorbed contaminated water, materials with structural damage, and porous items that cannot be effectively decontaminated are typically removed.',
  },
  {
    q: 'How long does professional structural drying take?',
    a: 'Most residential drying projects take three to five days, though the actual time depends on how much water was absorbed, the materials involved, ambient conditions, and how quickly drying began. Daily moisture readings determine when equipment can be removed.',
  },
  {
    q: 'Do you work with insurance companies?',
    a: 'Yes. We document the loss with photos, moisture maps, daily readings, and a detailed scope so your insurance carrier has the information needed to evaluate the claim. We do not adjust claims, negotiate settlements, or provide public-adjusting services — that work belongs to you and your carrier.',
  },
  {
    q: 'What equipment is used to dry a structure?',
    a: 'A typical drying setup combines submersible pumps and truck-mounted extractors for bulk water removal, low-profile and axial air movers for evaporation, refrigerant or LGR (low grain refrigerant) dehumidifiers to remove moisture from the air, and infrared cameras and pin/pinless meters to verify progress.',
  },
  {
    q: 'Can water damage cause mold?',
    a: 'Wet cellulose materials such as drywall, wood, and insulation can support microbial growth when they remain damp. Prompt and complete drying is the primary way to reduce that risk. If visible growth is already present when we arrive, we follow containment and remediation procedures appropriate to the situation.',
  },
  {
    q: 'Are you available after hours?',
    a: 'Yes. Our phones are answered around the clock and a response crew can be dispatched at any hour, every day of the year.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Bloomfield Township and routinely respond throughout Bloomfield Hills, Birmingham, West Bloomfield, Beverly Hills, Franklin, Troy, Royal Oak, Southfield, Farmington Hills, and the broader Oakland County area.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Damage Restoration',
  name: 'Water Damage Restoration',
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
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Franklin' },
  ],
  description:
    '24/7 emergency water damage restoration including water extraction, structural drying, dehumidification, moisture mapping, content pack-out, and insurance documentation in Bloomfield Township, MI and surrounding communities.',
  url: 'https://provailrestoration.com/water-damage-restoration',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/water-damage-restoration#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/water-damage-restoration',
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
                  Emergency Service
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>24/7</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>IICRC-Aligned</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Water Damage Restoration in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              From the first phone call to the final moisture reading, our team
              follows a documented, standards-aligned process so your home gets
              dried right the first time.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO COPY */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Water damage rarely waits for a convenient moment. A failed supply
              line at 2 a.m., an overflowing washing machine on a Saturday
              afternoon, or a backed-up storm sewer during a Michigan
              thunderstorm can all create the same problem: water moving where
              it does not belong, soaking into materials that were never meant
              to get wet. The longer that water remains, the more it spreads,
              and the more aggressive the eventual restoration becomes.
            </p>
            <p>
              <strong>{BIZ_NAME}</strong> exists to compress that timeline. We
              are a Bloomfield Township-based restoration company that responds
              to residential and light-commercial water losses around the clock.
              Our crews extract standing water, set structural drying systems
              that pull moisture out of building materials, and document
              everything so your insurance carrier has a complete picture of the
              loss. The pages that follow walk through how the work is actually
              done — not as a sales pitch, but as a plain-language explanation
              of what to expect when you call us.
            </p>
            <p>
              The information below is grounded in the ANSI/IICRC S500 Standard
              for Professional Water Damage Restoration, which is the document
              the broader restoration industry uses to define a reasonable
              standard of care. It is not a substitute for an on-site
              inspection, and every loss is unique, but it should give you a
              framework for evaluating any restoration contractor — including
              us.
            </p>
          </div>
        </section>

        {/* 24/7 RESPONSE */}
        <section id="response" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 1"
              title="24/7 Emergency Response"
              intro="The first hour of a water loss is the most valuable hour you have. Here is what happens when you call."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Phone Triage">
                When you call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>, a live person walks
                through a short triage script: where is the water coming from,
                is the source still active, is the power on, and is anyone in
                the home at risk. We ask these questions because your safety
                comes before the structure, and because the answers determine
                what the responding crew brings to the job.
              </Card>
              <Card title="Source Stop & Stabilization">
                If the water source is still flowing, we coach you through
                shutting off the main valve, the appliance valve, or the
                affected fixture while the crew is en route. Once we arrive, our
                first priority on-site is making sure the source has actually
                stopped — you cannot dry a structure that is still getting wet.
              </Card>
              <Card title="On-Site Assessment">
                Within the first thirty minutes on the property, a lead
                technician walks the affected areas with moisture meters and an
                infrared camera. The goal is to map the actual extent of the
                water migration, which is almost always larger than what is
                visible on the surface.
              </Card>
            </div>

            <div className="max-w-[780px] mx-auto mt-12 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Response speed matters because of what restorers call secondary
                damage. Primary damage is whatever the water did the moment it
                escaped — soaked drywall, a flooded basement floor, ruined
                cardboard boxes. Secondary damage is what happens after that:
                wood swells and cups, finish flooring delaminates, paint
                bubbles, drywall paper softens, and microbial growth becomes a
                real risk on damp cellulose. Most secondary damage develops
                between 24 and 72 hours of continuous wetting. Showing up
                quickly is the cheapest mitigation tool we have.
              </p>
            </div>
          </div>
        </section>

        {/* WATER CATEGORIES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 2"
              title="Categorizing the Water"
              intro="Not all water is equal. Cleaning, drying, and removal decisions hinge on which category we are dealing with."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Category 1 — Clean Water">
                Water that originated from a sanitary source and that, at the
                moment of release, did not pose a substantial risk to human
                occupants. Examples include a broken copper supply line, an
                overflowing sink with the tap left running, or a melting
                icemaker line. Category 1 water can deteriorate to Category 2
                or 3 quickly if it sits, contacts contaminated materials, or
                soaks through soiled building assemblies.
              </Card>
              <Card title="Category 2 — Gray Water">
                Water that contains significant contamination — chemical,
                biological, or physical — and could cause discomfort or illness
                if contacted. Common sources include discharge from
                dishwashers, washing machines, toilet overflows that contain
                only urine, and aquariums. Porous materials like carpet pad
                that have absorbed Category 2 water are normally removed.
              </Card>
              <Card title="Category 3 — Black Water">
                Grossly contaminated water that may contain pathogenic, toxic,
                or other harmful agents. This includes sewage backups, rising
                groundwater entering a structure, and any water originating
                beyond the toilet trap. Category 3 jobs require containment,
                personal protective equipment, antimicrobial treatment, and
                more aggressive removal of porous materials.
              </Card>
            </div>
            <div className="max-w-[780px] mx-auto mt-10 text-[#3c3c3c] text-[17px] leading-[1.75]">
              <p>
                We make the category determination on-site, document it in our
                file, and revisit it if conditions change. The category
                directly affects what materials can be salvaged, what cleaning
                agents are appropriate, and what protective measures the crew
                needs to wear.
              </p>
            </div>
          </div>
        </section>

        {/* EXTRACTION */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 3"
              title="Water Extraction"
              intro="Removing as much liquid water as possible before drying equipment is set."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Extraction is the single most efficient step in the entire
                restoration process. Pulling a gallon of water out as a liquid
                takes a fraction of the energy and time it would take to
                evaporate that same gallon with air movers and dehumidifiers.
                For that reason our crews are aggressive about extraction
                before any drying equipment is staged.
              </p>
              <p>
                On a typical residential loss we use a combination of
                truck-mounted or portable extraction units, weighted extraction
                tools that compress carpet pad to release entrained water, and
                submersible pumps for situations involving more than an inch
                or two of standing water. We extract from carpet, hardwood
                seams, hard surface floors, and — wherever access permits —
                from wall cavities through small drilled or removed sections
                of base trim.
              </p>
              <p>
                When a structure has carpet over pad and the water category
                allows it, we evaluate whether the pad can be salvaged.
                Modern hot-melt and rebond pads often hold so much water that
                replacement is more economical than attempting in-place
                drying. That decision is made openly with the homeowner, with
                the reasoning documented in writing.
              </p>
            </div>
          </div>
        </section>

        {/* STRUCTURAL DRYING & PSYCHROMETRY */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 4"
              title="Structural Drying & Dehumidification"
              intro="The science of moving moisture out of building materials and out of your home."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                After extraction, the remaining moisture is bound up inside
                building materials — drywall, wood framing, subfloor, trim,
                cabinets, and insulation. Getting that water out is the part
                of the job that takes the longest and where most homeowners
                have the least visibility into what is actually happening. The
                short version: we use air movement to evaporate moisture from
                surfaces, and we use dehumidification to remove the resulting
                water vapor from the air before it can re-condense on cool
                surfaces.
              </p>
              <p>
                This relationship between air, moisture, and temperature is
                called psychrometry. A drying chamber works because the
                dehumidifier keeps the surrounding air drier than the wet
                materials, which creates a vapor pressure gradient that pulls
                moisture out of the materials and into the air, where the
                dehumidifier can capture it and dump it down a drain or into a
                condensate container. Air movers do not dry materials by
                themselves — they accelerate evaporation by replacing the
                saturated boundary layer of air immediately above a wet
                surface with drier air from the dehumidifier&apos;s discharge.
              </p>
              <p>
                We typically deploy refrigerant dehumidifiers for general
                drying and switch to LGR (low grain refrigerant) units when
                the cavity moisture is stubborn or the ambient temperature is
                cool. Air movers are positioned at shallow angles along walls
                so the airflow runs in long sweeping arcs rather than dead-end
                jets. We map out where each piece of equipment goes and why,
                and we keep that map updated as the job progresses.
              </p>
            </div>
          </div>
        </section>

        {/* MOISTURE MAPPING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 5"
              title="Moisture Mapping & Daily Monitoring"
              intro="What gets measured gets dried. Every drying job we run is monitored daily until proven complete."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                On the first visit, the lead technician records moisture
                content readings throughout the affected area and an
                established dry standard from an unaffected area of the same
                building. The dry standard is the target: drying is considered
                complete when affected materials reach the same range as the
                undamaged reference, not when they simply &quot;feel&quot; dry to the
                touch.
              </p>
              <p>
                We use pin-type meters for invasive readings on framing and
                subfloor, pinless meters that scan through finish surfaces
                without leaving holes, infrared imaging to locate cool spots
                that suggest hidden moisture, and thermo-hygrometers to track
                grains of moisture per pound of air inside the drying chamber
                versus outside. Every reading is logged with date, time,
                location, and instrument used.
              </p>
              <p>
                A technician returns daily to repeat the readings, adjust
                equipment, and confirm that the structure is trending in the
                right direction. If readings stall or move backwards, we
                investigate why — usually it is a cavity that needs to be
                opened, an air mover that needs to be repositioned, or a
                dehumidifier that needs additional support. The job is not
                done until the numbers say it is.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT PACK-OUT */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 6"
              title="Contents & Pack-Out"
              intro="Furniture, electronics, clothing, and the irreplaceable items that fill your home."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Drying a structure is only half of the work on most losses.
                The other half is dealing with everything inside the
                structure. Our contents process starts with on-site
                triage: items that are wet but salvageable, items that need
                immediate attention to prevent further damage, items that are
                already a total loss, and items that are dry but in the way of
                the drying equipment.
              </p>
              <p>
                For larger losses we offer a pack-out, where contents are
                inventoried with photos, packed into labeled boxes or
                container vaults, and either moved to a clean staging area in
                the home or transported off-site for cleaning and storage.
                The inventory list becomes part of the documentation provided
                to the homeowner and, with the homeowner&apos;s permission, the
                insurance carrier.
              </p>
              <p>
                Sentimental items — photographs, documents, heirlooms — are
                handled separately. We will tell you honestly when an item is
                outside the scope of what general restoration cleaning can
                save, and we can refer you to specialists for things like
                document drying or fine art conservation when appropriate.
              </p>
            </div>
          </div>
        </section>

        {/* INSURANCE DOCUMENTATION */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step 7"
              title="Insurance Documentation"
              intro="A complete, evidence-based file your carrier can actually work with."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most homeowners we meet are filing their first water damage
                claim. The carrier asks for things like photos of the loss,
                the cause of loss, a scope of mitigation work, daily moisture
                logs, and an itemized invoice. We prepare those items as a
                normal part of every job and provide them to you in a single
                organized package.
              </p>
              <p>
                To be very clear about what we do and do not do: we document
                the damage, we document our work, and we provide that
                documentation to you. We do not adjust your claim, we do not
                negotiate the settlement on your behalf, and we are not public
                adjusters. The conversation about coverage and payment is
                yours to have with your carrier. Our role is to make sure you
                walk into that conversation with accurate, professional
                information about what happened to your home and what it took
                to put it back.
              </p>
              <p>
                If your carrier has questions about a moisture reading, a
                drying decision, or a line item on our invoice, we are happy
                to talk to them directly with your authorization. That kind
                of contractor-to-adjuster conversation usually moves a claim
                forward faster than any other single thing we can do.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE AREA & INTERNAL LINKS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              title="Local & Specialty Pages"
              intro="More information about specific water damage situations we handle."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card title="Bloomfield Township">
                Our home base and primary service area. Visit our{' '}
                <a href="/bloomfield" className="text-[#ff385c] font-semibold no-underline">
                  Bloomfield page
                </a>{' '}
                for community-specific information and service areas.
              </Card>
              <Card title="Basement Flood Cleanup">
                Sump pump failures, foundation seepage, and heavy-rain
                flooding.{' '}
                <a href="/services/basement-flood-cleanup" className="text-[#ff385c] font-semibold no-underline">
                  Read more
                </a>
                .
              </Card>
              <Card title="Frozen Pipe Repair">
                Winter pipe bursts, thaw procedures, and the wall and ceiling
                damage that often follows.{' '}
                <a href="/services/frozen-pipe-repair" className="text-[#ff385c] font-semibold no-underline">
                  Read more
                </a>
                .
              </Card>
              <Card title="Sump Pump Failure">
                Power outages, dead batteries, stuck float switches, and
                check-valve issues.{' '}
                <a href="/services/sump-pump-failure" className="text-[#ff385c] font-semibold no-underline">
                  Read more
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
              title="Water Damage Restoration FAQ"
              intro="Direct answers to the questions Bloomfield homeowners ask us most often."
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
              Standing water in your home right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call us. The crew is on duty 24 hours a day, every day of the
              year, and the meter does not start until we are on site.
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
