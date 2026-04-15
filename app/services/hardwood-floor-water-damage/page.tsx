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
    'Hardwood Floor Water Damage in Bloomfield, MI | Cupping & Drying | (248) 531-8404',
  description:
    'Hardwood floor water damage specialists in Bloomfield Township. In-place drying with mats and hoods, cupping and crowning recovery, refinish-vs-replace evaluation. 24/7: (248) 531-8404.',
  alternates: {
    canonical:
      'https://provailrestoration.com/services/hardwood-floor-water-damage',
  },
  openGraph: {
    title:
      'Hardwood Floor Water Damage in Bloomfield, MI | Provail Restoration of Bloomfield',
    description:
      'Cupped or buckling hardwood? We dry in-place with specialty mats and hoods, then evaluate refinish vs replace. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/hardwood-floor-water-damage',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'My oak floor cupped overnight after a dishwasher leak — is it ruined?',
    a: 'Cupping that appears within the first day or two is a response to the underside of the board absorbing water faster than the finished surface above. It is not automatically a total loss. If we can start in-place drying before the moisture has fully penetrated the board and before the subfloor has been saturated for more than a couple of days, we have a strong chance of pulling the cup back down to flat. Whether the floor can then be sanded and refinished depends on remaining wear-layer thickness and whether any boards developed splits or face-checking during the drying process.',
  },
  {
    q: 'What is the difference between cupping and crowning?',
    a: 'Cupping is when the edges of each board rise higher than the center, creating a dished profile. It happens when the bottom of the board has more moisture than the top. Crowning is the opposite — the center of each board rises above the edges — and it usually happens when a cupped floor is sanded flat before the subfloor has fully equalized, or when the top surface dries faster than the bottom. Crowning is harder to correct and is one of the main reasons we do not sand a cupped floor prematurely.',
  },
  {
    q: 'How does in-place drying for hardwood actually work?',
    a: 'We seal a drying mat or a hood assembly over the affected floor area and connect it to a high-pressure drying unit such as a Drymatic, Injectidry, or similar class of equipment. The system pulls dry air through the floor assembly — through the gaps between boards or through small holes drilled in inconspicuous locations — which accelerates evaporation from both the top and bottom of the boards and from the subfloor beneath. It is slower than tearing the floor out, but it preserves the original hardwood and almost always costs less when it works.',
  },
  {
    q: 'How long does in-place hardwood drying take?',
    a: 'A typical hardwood drying job runs five to ten days of active equipment, compared with three to five days for carpet or drywall. Hardwood is denser than those materials and water trapped in the subfloor below must be pulled up through the board stack, so patience matters. We monitor moisture daily and only remove the equipment once the floor reaches an acceptable moisture content relative to an unaffected reference board elsewhere in the home.',
  },
  {
    q: 'Does the species of wood matter for drying?',
    a: 'Yes, quite a bit. Red and white oak are the most forgiving and respond well to in-place drying because their open grain allows airflow through the board. Hard maple is denser and slower to release moisture. Brazilian cherry, hickory, and exotics behave unpredictably and sometimes check or split even with careful drying. Engineered hardwood is a separate category entirely — the top veneer is often too thin to resand, and the plywood core can delaminate once water reaches it, which usually means replacement.',
  },
  {
    q: 'Is the water coming from the surface or from below the floor?',
    a: 'This is one of the most important questions on any hardwood loss, because it changes the drying approach completely. A surface spill that sat on the finish for a few hours is very different from a leak that saturated the subfloor from a crawl space or a ceiling cavity below. We pull a register or a floor vent to inspect the subfloor when possible, and we meter both the board surface and the subfloor directly to understand where the moisture actually is.',
  },
  {
    q: 'What is the goal moisture content for a dried hardwood floor?',
    a: 'Target moisture content is set relative to the equilibrium moisture of unaffected hardwood in the same home — usually somewhere between six and nine percent in a conditioned Michigan house, depending on the season. We document the readings daily. The floor is not considered dry just because the surface looks flat; it is dry when the numbers across every test location match the reference.',
  },
  {
    q: 'How do you decide whether to refinish or replace the floor?',
    a: 'Refinish is on the table when the boards have pulled back down close to flat, when there is enough wear-layer left above the tongue to allow sanding, and when there are no splits or face-checks that cannot be color-matched. Replacement is the better path when the subfloor itself has to be removed, when engineered boards have delaminated, when board-to-board height differences exceed what a sander can flatten without going through the wear layer, or when the homeowner wants a different species altogether. We document the reasoning and present the options before anything is demoed.',
  },
  {
    q: 'Will the old finish and the new finish match after a partial repair?',
    a: 'Sand-and-refinish of an entire connected floor area usually produces a seamless result. Patch-and-blend of just a few boards inside a larger floor rarely does, because the original finish has aged and darkened over time and freshly sanded boards look visibly newer even after staining. When feasible we recommend refinishing the whole connected floor area rather than a small patch, and we discuss that tradeoff with the homeowner before starting.',
  },
  {
    q: 'Does the finish type on my floor affect how fast it dries?',
    a: 'Yes. Modern polyurethane finishes, both oil-based and waterborne, form a surface film that slows water vapor from escaping through the top of the board, so most of the drying has to happen from below. Penetrating oil finishes and waxed floors are more permeable, which helps during drying but means the finish itself has less resistance to the original water event. Neither type survives standing water indefinitely, and both need the subfloor evaluated as seriously as the surface.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hardwood Floor Water Damage Restoration',
  name: 'Hardwood Floor Water Damage',
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
    'Hardwood floor water damage restoration including in-place drying with specialty mats and hoods, moisture mapping, subfloor evaluation, and refinish-vs-replace assessment in Bloomfield Township, MI.',
  url: 'https://provailrestoration.com/services/hardwood-floor-water-damage',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/services/hardwood-floor-water-damage#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/hardwood-floor-water-damage',
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
      name: 'Hardwood Floor Water Damage',
      item: 'https://provailrestoration.com/services/hardwood-floor-water-damage',
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

export default function HardwoodFloorWaterDamagePage() {
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
                  Specialty In-Place Drying
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
              Hardwood Floor Water Damage in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Cupped oak after a dishwasher leak? Buckled boards from an
              upstairs failure? We use specialty drying mats and hoods to
              pull hardwood back to flat whenever the floor can still be
              saved — and explain the refinish-vs-replace decision honestly
              when it cannot.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Hardwood flooring is one of the most expensive building
              materials to replace in a home, and it is also one of the most
              forgiving if it is handled correctly within the first few days
              of a water event. The key variable is whether the subfloor has
              been saturated and how long the wood has been sitting at
              elevated moisture. A fast, structured drying response can save
              a floor that looks unsalvageable on the first morning after a
              leak, while a slow response turns a recoverable floor into a
              full tear-out.
            </p>
            <p>
              Our approach on hardwood losses in Bloomfield Township is
              board-by-board. We map moisture across every suspect area,
              inspect the subfloor wherever we can access it, start
              specialty in-place drying as soon as the scene is safe and
              stable, and only discuss removal when the numbers or the
              visible condition tell us drying is no longer realistic. This
              page walks through how the whole process works and what
              homeowners should know before signing anything.
            </p>
          </div>
        </section>

        {/* SPECIES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Species Behavior"
              title="Not All Hardwood Dries the Same"
              intro="How we plan drying depends heavily on what is actually on the floor."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Oak (Red & White)">
                The most common species in Bloomfield-area homes and the
                most forgiving. Oak has an open grain that allows airflow
                through the board, which accelerates in-place drying and
                improves the odds of recovering a cupped floor. Red oak
                tolerates sanding well if refinishing is ultimately needed.
              </Card>
              <Card title="Hard Maple">
                Denser than oak and slower to release moisture. Drying times
                run longer, and maple is more prone to showing small surface
                checks if the drying gradient is pushed too hard. We slow
                the equipment settings down on maple and accept the
                additional days on site.
              </Card>
              <Card title="Engineered Hardwood">
                A thin hardwood wear layer glued over a plywood or HDF
                core. Engineered floors can sometimes be dried in place if
                caught immediately, but once water reaches the core the
                layers often delaminate and the only option is replacement.
                Thin-wear engineered products also usually cannot be
                resanded after cupping even if they dry flat.
              </Card>
              <Card title="Exotics & Thick Solid Plank">
                Brazilian cherry, hickory, and other dense exotics behave
                unpredictably and sometimes face-check during drying.
                Thick-wear solid plank in older homes usually has the most
                room for sanding and is the best candidate for full
                recovery. We tune the drying approach to the specific
                species and the thickness of the wear layer.
              </Card>
            </div>
          </div>
        </section>

        {/* MOISTURE MAPPING */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Before Any Equipment"
              title="Board-by-Board Moisture Mapping"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Before a single drying mat is placed, we establish where the
                moisture actually is. A pinless moisture meter reads a grid
                across the suspect area, and a pin meter confirms readings
                at the cupped boards themselves. We pull a floor register or
                remove a short section of baseboard to take direct readings
                on the subfloor, because a cupped surface above a dry
                subfloor is a completely different problem than cupping
                above a soaked subfloor. The two cases are dried
                differently.
              </p>
              <p>
                We also set a reference reading from an unaffected area of
                the same floor. The goal is to return every location on the
                affected floor to the same moisture content as that
                reference — not to an arbitrary number from a textbook. That
                reference, the equilibrium moisture content of the specific
                home, is what tells us when drying is truly complete.
              </p>
              <p>
                Every reading, every location, and every date is logged in
                the file so there is a clear record of the drying curve
                over time. This is the same documentation standard we apply
                to every water loss, and it becomes critical if the floor
                is ultimately claimed on insurance.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Specialty Equipment"
              title="Mats, Hoods, and Drying Units"
              intro="Hardwood drying is a different category of equipment than carpet and drywall work."
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Drying Mats">
                A plastic mat is sealed over the affected floor area and
                connected to a negative-pressure drying unit. Air is pulled
                through the small gaps between boards, which evaporates
                moisture from the subfloor and the underside of the
                hardwood and carries it out through the mat hoses. This is
                the workhorse approach for most salvageable hardwood losses.
              </Card>
              <Card title="Hood Assemblies">
                For larger or irregular areas we use a hood built over the
                affected zone, often with containment to isolate the drying
                air from the rest of the home. Hoods can handle custom
                patterns — around islands, inside hallways, through
                transitions — that would be awkward with flat mats.
              </Card>
              <Card title="Injectidry / Drymatic Class Units">
                The actual drying units that power the mats and hoods are
                purpose-built for the job — high-pressure airflow at low
                flow volumes, with the ability to push or pull depending on
                the assembly. This is not the same equipment as a standard
                air mover on carpet, and a job run with the wrong equipment
                class simply will not recover a cupped floor.
              </Card>
            </div>
          </div>
        </section>

        {/* REFINISH VS REPLACE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="The Big Decision"
              title="Refinish, or Replace?"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Once the floor is dried back to its reference moisture
                content, the next question is whether the cosmetic
                condition justifies refinishing or whether replacement is
                the better use of the homeowner&rsquo;s budget. We look at
                three things.
              </p>
              <p>
                <strong>First, board-to-board height after drying.</strong>{' '}
                A floor that has returned to within a hair of flat can be
                sanded smooth. A floor with persistent cupping or crowning
                that exceeds what a sander can level without blowing through
                the wear layer needs replacement in those sections.
              </p>
              <p>
                <strong>Second, remaining wear layer.</strong> Solid
                three-quarter-inch plank usually has enough meat above the
                tongue for multiple refinishes. Thin-wear engineered product
                sometimes has only a millimeter or two, and a single sand
                pass is out of the question.
              </p>
              <p>
                <strong>Third, visible damage.</strong> Face-checks, splits,
                raised grain, and black tannin staining at board edges can
                sometimes be color-matched, and sometimes cannot. We walk
                the floor with the homeowner, mark problem boards, and make
                the call together before any sanding starts.
              </p>
              <p>
                Crowning risk deserves a specific note. A floor that is
                sanded flat before the subfloor has fully released its
                moisture will re-cup in reverse as the lower fibers
                equalize, producing a crowned surface that is extremely
                difficult to correct. This is the main reason we wait on
                the moisture readings before sanding — even when the visual
                recovery looks complete after a few days.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Full Water Damage Process">
                Our complete{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process based on the IICRC S500 standard.
              </Card>
              <Card title="Appliance Leak Damage">
                Dishwashers and refrigerators are the leading cause of
                first-floor hardwood losses.{' '}
                <a
                  href="/services/appliance-leak-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Read more
                </a>
                .
              </Card>
              <Card title="Frozen Pipe Repair">
                A burst supply line above a hardwood floor is a specific
                kind of emergency. See our{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe page
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
              title="Hardwood Water Damage FAQ"
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
              Cupped boards? Do not wait.
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              The first 48 hours decide whether your floor can be saved.
              Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>{' '}
              and a crew will roll toward you with mats and drying units
              loaded.
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
