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
    'Finished Basement Flood Cleanup & Cat 2/3 Water Triage in Bloomfield, MI | (248) 531-8404',
  description:
    'Finished basement flooded? Provail Restoration of Bloomfield classifies Category 1, 2, and 3 water under IICRC S500, triages drywall, carpet pad, MDF cabinetry, upholstery, and electronics, and contains moisture migration into the sill plate and rim joist. 24/7: (248) 531-8404.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/basement-flood-cleanup',
  },
  openGraph: {
    title:
      'Finished Basement Flood Cleanup & Contents Triage | Provail Restoration of Bloomfield',
    description:
      'Category 2 and 3 water classification, contents triage, and containment for finished basements in Bloomfield Township, MI.',
    url: 'https://provailrestoration.com/services/basement-flood-cleanup',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'How do I know if the water in my basement is Category 1, 2, or 3?',
    a: 'Category 1 is water that started sanitary — a supply line, a dishwasher hose, an ice maker tube. Once that water has been sitting for more than roughly 24 to 48 hours, or once it has traveled through a wall cavity that contained dust, insulation, and microbial residue, it degrades to Category 2. Category 3 is grossly contaminated water from outside the home, from a sewer backflow, or from anywhere a toilet trap seal has been breached. Our technician makes the classification on site and records the reasoning with time-stamped photos and a written rationale.',
  },
  {
    q: 'My basement has been wet since yesterday morning — is it still Category 1?',
    a: 'Probably not. The IICRC S500 standard treats elapsed time and ambient temperature as degradation factors. A clean-water loss that sits for more than 24 hours in a warm finished basement is normally elevated to Category 2 because microbial amplification has almost certainly begun. We will not assume the classification sight unseen, but in practice, any finished basement that has been wet overnight is handled with Category 2 protocols until proven otherwise.',
  },
  {
    q: 'What makes a basement water loss jump to Category 3?',
    a: 'The most common triggers are a sewer backflow through a floor drain, a toilet overflow that carried solids, storm water that entered below grade after passing through saturated soil, and any situation where the failed water was mixed with contents that themselves represented a biohazard. Category 3 triggers full personal protective equipment, aggressive porous material removal, and much more stringent cleaning verification before we will release the space.',
  },
  {
    q: 'Why does my drywall have to come out if the outside looks dry?',
    a: 'Standard paper-faced gypsum acts like a wick. When the bottom edge of the drywall sat in water, capillary action pulls moisture upward inside the panel — often several inches higher than any visible tide line. The paper facing is also cellulose, which is a food source for mold once it stays damp. When the water was Category 2 or 3, the cleaning standard cannot be met by simply drying the panel in place, so the affected section is cut out and documented. We try to contain cuts to a defensible flood line whenever possible.',
  },
  {
    q: 'Can you save carpet pad, or does it always have to go?',
    a: 'Carpet pad is one of the first materials we write off in a finished basement flood. Pad is designed to compress and rebound under foot traffic, which means it is essentially a sponge matrix that absorbs water instantly and releases it very slowly. On Category 1 losses that are caught in the first hours, pad can occasionally be floated and dried, but the more honest answer is that pad almost always leaves the basement bagged as debris. The carpet face fiber is sometimes salvageable on Category 1 and 2 losses when it has not delaminated.',
  },
  {
    q: 'What about insulation inside the finished walls?',
    a: 'Fiberglass batt insulation behind basement drywall holds water against the framing for weeks. Even when it looks dry to the touch, the R-value has collapsed and the paper backing has likely begun to break down. We remove wet batt insulation as a rule on any Category 2 or 3 event, bag it, and let the stud bays breathe while we dry the framing and sill plate. Closed-cell spray foam behaves very differently and sometimes survives — we inspect it case by case.',
  },
  {
    q: 'My finished basement has MDF cabinetry and a built-in bar. Is any of it coming back?',
    a: 'Honest answer: MDF, particleboard, and most engineered laminates do not come back from a Category 2 or 3 basement flood. The resins that hold the wood fibers together break down once the material swells, and the laminate skin separates from the core. We document every piece with photographs so it can be included in any insurance inventory you decide to file, but we set the expectation early rather than let a homeowner hope for a recovery that is not coming. Solid hardwood pieces and finished plywood carcasses sometimes survive.',
  },
  {
    q: 'What happens to upholstered furniture and mattresses that were in the basement?',
    a: 'Upholstered furniture, mattresses, box springs, and pillow-top cushions that contacted Category 2 or 3 water are treated as a total loss under S500 guidance. The foam and fiber cores absorb water and cannot be reliably cleaned to a sanitary standard in the field. Leather furniture, hardwood-frame pieces with removable cushions, and items that were elevated above the water line are evaluated individually. We photograph each item and note the disposition so the record is complete.',
  },
  {
    q: 'Can my electronics and AV equipment be saved?',
    a: 'Electronics that were not powered on when they got wet and were not fully submerged sometimes survive if they are stabilized and professionally cleaned quickly. Equipment that was running when the water arrived, or that sat in standing water, is almost always a loss — corrosion begins on the circuit traces within hours. We do not open or attempt to restore electronics ourselves; we document them, move them to a dry staging area, and recommend a specialized electronics restoration vendor when the value justifies it.',
  },
  {
    q: 'Why do you keep talking about the sill plate and rim joist?',
    a: 'Because that is where unseen moisture migration usually hides. In a finished basement, the framed wall often sits on a pressure-treated sill plate that rests on the concrete slab or on top of the foundation wall. When the basement floods, water wicks into that sill plate and into the rim joist above it. Drying only the visible drywall while ignoring the sill plate is how homeowners end up with a musty smell six months later. We drill small inspection holes when needed and document moisture content in the framing before we call the structure dry.',
  },
  {
    q: 'What is containment and why are you hanging plastic in my basement?',
    a: 'Containment is a temporary poly barrier — usually six-mil sheeting on a zip-pole frame — that isolates the affected zone from the rest of the home while demolition and drying are underway. On a Category 2 or 3 event, containment keeps aerosolized debris and moisture from migrating up the stairs into living space, and it lets us run negative air with a HEPA scrubber inside the work zone. On cleaner Category 1 losses we may skip full containment, but we almost always seal the stairwell.',
  },
  {
    q: 'Do you handle the contents inventory for my insurance claim?',
    a: 'We inventory and photograph every affected item as we move through the basement, and we provide that list as part of our documentation package so you have a clean record to share with your adjuster. We are a restoration contractor, not a public adjuster — we do not negotiate coverage, set values, or advocate on the claim. The documentation we provide is factual and objective so that whoever handles the settlement is working from a complete picture.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Finished Basement Flood Cleanup & Category 2/3 Water Triage',
  name: 'Finished Basement Flood Cleanup',
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
    'Finished basement flood response with IICRC S500 Category 1, 2, and 3 water classification, porous material triage, contents handling for drywall, carpet pad, insulation, MDF cabinetry, upholstered furniture, and electronics, and containment of moisture migration into sill plate and rim joist.',
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
      name: 'Basement Flood Cleanup',
      item: 'https://provailrestoration.com/services/basement-flood-cleanup',
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
              Finished Basement Flood Cleanup in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Category 2 and 3 water classification, contents triage, and
              containment for finished basements — drywall, carpet pad, MDF
              cabinetry, upholstered furniture, and the hidden moisture in
              your sill plate.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO — PANIC HOOK */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              You walked downstairs and your feet went cold. The rug in front
              of the sectional is dark and heavy. There is a brown line along
              the bottom of the drywall where the water found its level, and
              the basement has that specific smell — the one that is not
              quite mildew yet but is already on the way. Everything you put
              in this room — the theater seating, the custom bar, the photos
              from your son&rsquo;s wedding — is either wet or sitting in the
              damp air above the waterline.
            </p>
            <p>
              The first thing we want you to understand is that a finished
              basement flood is not one problem. It is three. There is the
              water itself, which has a category and a rising contamination
              clock. There is the contents triage — every item in the room
              has to be classified as salvageable, needs-cleaning, or loss.
              And there is the structure behind the finished walls, which is
              where moisture migrates and where the decision about mold
              prevention is actually made. This page walks through how
              Provail Restoration of Bloomfield approaches all three, and why
              the finished-basement playbook is fundamentally different from
              an unfinished utility space.
            </p>
          </div>
        </section>

        {/* WATER CATEGORY */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="IICRC S500 Classification"
              title="The Three Categories of Basement Water"
              intro="Every basement flood gets a category. The category drives every decision that follows."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Category 1 — Clean">
                Water that began sanitary and has not had time to degrade. A
                freshly burst supply line, a split dishwasher hose caught
                within the first hour, a water softener that just let go.
                Category 1 water can sometimes be handled with in-place
                drying if the event is caught early and the affected
                materials are limited. The window closes fast: a Category 1
                loss that sits overnight in a warm basement almost always
                advances to Category 2 by the next morning.
              </Card>
              <Card title="Category 2 — Gray">
                Water with significant contamination that has the potential
                to cause discomfort or illness if contacted or ingested.
                This is where the majority of finished-basement floods land.
                The source may have been clean, but the water traveled
                through wall cavities, across dusty slabs, around pet areas,
                or simply sat long enough for microbial growth to begin. PPE
                is upgraded, porous materials in direct contact are
                typically removed rather than dried in place, and
                antimicrobial treatment is applied to cleanable surfaces.
              </Card>
              <Card title="Category 3 — Black">
                Grossly contaminated water containing pathogenic,
                toxigenic, or otherwise harmful agents. Sewage backflow
                through a floor drain, toilet overflow carrying solids, and
                groundwater that entered through saturated soil below a
                compromised cove joint all qualify. Category 3 events
                require full-face respirators or PAPRs, Tyvek suits,
                aggressive demolition of porous materials, and verification
                cleaning before structural drying begins. Contents triage
                is far more conservative — much less comes back.
              </Card>
            </div>
            <div className="max-w-[820px] mx-auto mt-10 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-4">
              <p>
                <strong>The 24-hour rule.</strong> Time is a classification
                factor, not just a scheduling problem. A sanitary supply
                line break that stays wet and warm for more than roughly a
                day is no longer a Category 1 loss under S500 guidance
                because the microbial population in the water has climbed
                past the sanitary threshold. This is why the honest answer
                to &ldquo;is this still clean water?&rdquo; on a basement
                that flooded yesterday is almost always no.
              </p>
              <p>
                <strong>Sewage backflow is Category 3, period.</strong> When
                the source is a sewer main — either because the municipal
                combined sewer surcharged during a heavy rain, or because a
                lateral line was blocked downstream of the home — we treat
                every drop as Category 3. This is not a judgment call. PPE
                comes out of the truck, the work zone is contained before
                demolition begins, and the removal scope is written with
                the assumption that every porous material in contact with
                that water is a loss.
              </p>
            </div>
          </div>
        </section>

        {/* PPE AND CONTAINMENT */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="PPE & Containment"
              title="Why the Crew Looks Different On Category 3"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Category 1 PPE.</strong> Nitrile gloves, safety
                glasses, and waterproof boots. The technician can generally
                work in ordinary uniform clothing and the risk model is
                about slip hazard and minor contact exposure.
              </p>
              <p>
                <strong>Category 2 PPE.</strong> The crew adds a disposable
                coverall and an N95 or half-mask respirator. Any cuts or
                abrasions on hands and forearms have to be covered before
                entering the affected zone. Tools get a decon rinse between
                the contaminated and clean areas so we do not chase
                microbial load through the rest of the home.
              </p>
              <p>
                <strong>Category 3 PPE.</strong> Full-body Tyvek or
                equivalent, boot covers, double nitrile gloves, and either
                a full-face respirator or a PAPR depending on the debris
                load and expected demolition intensity. A decon station is
                set up at the edge of the containment zone and used every
                time a technician exits.
              </p>
              <p>
                <strong>Containment</strong> is a six-mil polyethylene
                barrier erected on a zip-pole frame to isolate the wet zone
                from the unaffected portion of the home. On finished
                basements with an open stairwell into living space, that
                containment is non-negotiable during demolition — it keeps
                airborne debris and moisture from migrating upstairs. A
                negative-air HEPA scrubber inside the containment lowers
                the pressure differential across the barrier so the net
                flow is always into the work zone.
              </p>
            </div>
          </div>
        </section>

        {/* POROUS MATERIAL DISPOSAL */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Material Triage"
              title="What Comes Out, What Stays, And Why"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Drywall">
                Paper-faced gypsum wicks water upward by capillary action.
                On Category 2 and 3 losses, the affected drywall is cut
                out to a defensible line — usually a clean horizontal cut
                two feet above the visible tide line, which gives a
                predictable replacement seam. On Category 1 losses we
                sometimes drill relief holes and dry in place when the
                insulation behind the panel is closed-cell or absent.
              </Card>
              <Card title="Carpet & Pad">
                Carpet pad is effectively disposable in a finished basement
                flood. It is engineered to compress and rebound, which
                makes it a sponge that cannot be cleaned to a sanitary
                standard in the field. The pad comes out and is bagged.
                Carpet face fiber is evaluated individually: Category 1
                loops and cut pile sometimes survive a wet-clean, Category
                2 is a case-by-case decision, Category 3 is a loss.
              </Card>
              <Card title="Insulation">
                Fiberglass batt insulation behind finished basement walls
                holds water against the framing and hides moisture from
                surface readings. It comes out on any Category 2 or 3
                event as standard practice. Mineral wool behaves similarly
                and is handled the same way. Rigid foam and closed-cell
                spray foam shed water and are evaluated individually.
              </Card>
              <Card title="MDF, Particleboard, Engineered Wood">
                These materials do not come back. The resins that bind the
                wood fibers break down on contact with water, the panels
                swell, and the laminate skins delaminate. We photograph
                the affected cabinetry and engineered paneling for your
                records, then remove them during demolition.
              </Card>
              <Card title="Upholstered Furniture & Mattresses">
                Treated as a loss on Category 2 and 3 events. Foam and
                batting cores absorb water and cannot be reliably cleaned
                to a sanitary standard in the field. Hardwood frames with
                removable cushions are evaluated on their own merits.
              </Card>
              <Card title="Hard Goods & Electronics">
                Glass, glazed ceramics, sealed plastics, and finished
                hardwoods are usually salvageable with cleaning.
                Electronics that were powered on or fully submerged are
                typically a loss — corrosion sets in on the circuit traces
                within hours. We document each category and the reasoning.
              </Card>
            </div>
          </div>
        </section>

        {/* HIDDEN MOISTURE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Hidden Moisture"
              title="Sill Plate, Rim Joist, And The Call-Back Six Months Later"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The single most common reason a homeowner calls us back
                about a &ldquo;musty smell&rdquo; months after a basement
                flood is that the sill plate and rim joist were never
                verified dry at the time of the original loss. The
                finished wall came out, the visible drywall was replaced,
                and the project was closed — but the bottom course of
                framing absorbed water that nobody measured, and the
                structural wood stayed damp inside the new wall assembly
                long enough for mold to colonize.
              </p>
              <p>
                The fix is simple when it is part of the original scope:
                we measure moisture content in the sill plate, bottom
                plate, studs, and rim joist with a pin meter and a
                non-penetrating meter, record the readings in a moisture
                map, and do not allow reconstruction to begin until those
                readings drop to the same baseline as an unaffected
                reference area of the home. When framing will not dry in a
                reasonable timeframe, we drill cavity vents or pull the
                bottom plate for access rather than seal wet wood behind
                new drywall.
              </p>
              <p>
                <strong>Moisture migration upward</strong> through the
                framing is also why finished basements sometimes show
                damage at outlet boxes and trim lines on the first floor
                after a significant below-grade flood. We inspect the
                underside of the subfloor at the perimeter and call out
                any elevated readings so nothing gets missed.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Sump Pump Hardware & Prevention">
                If a pump failure is what sent water across your basement
                floor, see our hardware-focused page on{' '}
                <a
                  href="/services/sump-pump-failure"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  sump pump backup and failure prevention
                </a>
                .
              </Card>
              <Card title="Frozen Pipe Repair">
                Winter pipe bursts behind basement ceilings are a common
                source of Category 1 losses that degrade fast — see{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe repair and thaw protocol
                </a>
                .
              </Card>
              <Card title="Insurance Documentation">
                We provide the photo, moisture, and scope record; for
                coverage questions see{' '}
                <a
                  href="/insurance-claims-help"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  insurance claims help
                </a>{' '}
                and our{' '}
                <a
                  href="/bloomfield"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Bloomfield service page
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
              title="Finished Basement Flood FAQ"
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
              Water on the finished basement floor right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a> and a Provail Restoration of
              Bloomfield crew will be dispatched. We answer the phone in
              person, every hour of every day.
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
