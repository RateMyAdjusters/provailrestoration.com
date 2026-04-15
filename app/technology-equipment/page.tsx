import type { Metadata } from 'next'
import Link from 'next/link'
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

export const metadata: Metadata = {
  title: 'Restoration Technology & Equipment | Provail Restoration of Bloomfield',
  description:
    'A plain-language field guide to the thermal cameras, moisture meters, LGR and desiccant dehumidifiers, air movers, HEPA scrubbers, negative air machines, hydroxyl generators, and Xactimate software we use on Bloomfield restoration projects.',
  alternates: { canonical: 'https://provailrestoration.com/technology-equipment' },
  openGraph: {
    title: 'Restoration Technology & Equipment | Provail Restoration of Bloomfield',
    description:
      'What each piece of restoration equipment actually does — and why it matters on a water, fire, or mold project in Bloomfield Township.',
    url: 'https://provailrestoration.com/technology-equipment',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Why does the technician carry so many different moisture meters?',
    a: 'Different materials and situations call for different measurement methods. A pinless meter is used for non-destructive scanning across large areas. A pin meter confirms moisture at a specific depth in wood or drywall. A thermo-hygrometer measures temperature and relative humidity in the air rather than in materials. Used together, the three tools produce a complete moisture picture.',
  },
  {
    q: 'What is the difference between LGR and desiccant dehumidifiers?',
    a: 'LGR (low grain refrigerant) dehumidifiers use a refrigerant cycle and are most efficient in warm, wet conditions — the most common residential drying environment. Desiccant dehumidifiers use a silica-based wheel to adsorb moisture and perform better in cold conditions or when extremely low humidity is required. Some projects use both simultaneously.',
  },
  {
    q: 'What does a thermal camera actually see?',
    a: 'A thermal imaging camera does not see moisture directly. It detects surface temperature differences caused by evaporative cooling, so a wet wall cavity typically reads as a cooler shape against the surrounding dry material. Every thermal finding is confirmed with a moisture meter before any decision is made.',
  },
  {
    q: 'Are hydroxyl and ozone generators the same thing?',
    a: 'No. Both are used for odor control, but they work differently and are used at different stages. Hydroxyl generators are generally safe to run in occupied spaces and work more slowly, while ozone generators produce a more aggressive reaction but require the space to be fully unoccupied during treatment and ventilated afterward.',
  },
  {
    q: 'What is Xactimate and why do you use it?',
    a: 'Xactimate is the estimating software most property insurance carriers use to evaluate restoration claims. Writing our estimates in Xactimate means line items, units, and pricing are based on a shared reference that carriers recognize, which generally shortens the approval cycle and reduces scope disputes.',
  },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/technology-equipment#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/technology-equipment',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5597, longitude: -83.3877 },
  priceRange: '$$',
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Restoration Equipment and Technology',
  name: 'Professional Restoration Equipment',
  provider: { '@type': 'LocalBusiness', name: BIZ_NAME, telephone: '+12485318404' },
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'Troy' },
  ],
  url: 'https://provailrestoration.com/technology-equipment',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Technology & Equipment',
      item: 'https://provailrestoration.com/technology-equipment',
    },
  ],
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="bg-white p-8"
      style={{
        borderRadius: '20px',
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
      }}
    >
      <h3 className="text-[#222222] text-lg font-semibold mb-3" style={{ letterSpacing: '-0.44px' }}>
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65] space-y-3">{children}</div>
    </div>
  )
}

export default function TechnologyEquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <SiteHeader />

      <main>
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
                <span>Calibrated Tools</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>IICRC-Aligned</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Documented Readings</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Restoration Technology and Equipment
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              A field guide to the cameras, meters, dehumidifiers, and air-handling tools we bring
              to every water, fire, and mold project — and what each one actually contributes to a
              successful outcome.
            </p>
            <HeroCTA />
          </div>
        </section>

        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Equipment does not restore a property on its own. A moisture meter in the wrong hands
              produces readings nobody believes. A dehumidifier sized for the wrong cubic footage
              runs all week without making progress. The value of good equipment only shows up when
              it is used by trained technicians who understand why each tool exists and how to read
              what it is telling them. This page is written from that perspective: not as a gear
              catalog, but as an explanation of how the right tool, used correctly, produces
              evidence that a loss was handled to a measurable standard.
            </p>
            <p>
              We keep response vehicles stocked so the first truck on your property is a complete
              mitigation kit — not a sales visit followed by a return trip the next day. The
              categories below walk through what is on those trucks, why it matters, and how we
              decide which tools come into your home for your specific loss.
            </p>
            <p>
              Every tool on this page is calibrated or maintained on a schedule. Meters that drift
              out of calibration get pulled from service. Equipment that cannot produce its rated
              performance gets repaired or replaced. The point of a written standard of care is that
              the numbers on a report mean what the report says they mean.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Detection"
              title="Thermal Imaging and Moisture Measurement"
              intro="How we find water you cannot see and prove it is gone when we leave."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Thermal Imaging Cameras (FLIR-Class)">
                <p>
                  A thermal camera visualizes surface temperature. Because evaporating water cools
                  the material underneath it, wet drywall and wet framing typically appear as
                  cooler shapes against surrounding dry material. Thermal imagery is used to
                  prioritize where we measure, not to replace direct measurement. Every finding is
                  confirmed with a calibrated moisture meter before any decision is made to remove
                  material.
                </p>
                <p>
                  Thermal cameras are particularly useful on flat ceilings, behind baseboards, and
                  along the bottom plate of walls where water tends to migrate but where a visual
                  inspection alone would miss it. The captured imagery becomes part of the job
                  file, which gives adjusters and homeowners a clear picture of what drove each
                  scope decision.
                </p>
              </Card>
              <Card title="Pin Moisture Meters">
                <p>
                  Pin meters use two probes that measure electrical resistance between them in
                  hygroscopic materials like wood, drywall, and particleboard. Because the reading
                  comes from a specific depth at a specific point, pin meters are the tool of
                  choice for confirming that a suspect location is actually wet — and later for
                  confirming that it is actually dry.
                </p>
              </Card>
              <Card title="Pinless Moisture Meters">
                <p>
                  Pinless meters use a sensor plate that reads roughly the first three-quarters of
                  an inch of material underneath it without puncturing the surface. They are the
                  fastest way to scan a large area — a full basement, a flooring field, or a long
                  wall — to map moisture before deciding where to drill pin readings.
                </p>
              </Card>
              <Card title="Thermo-Hygrometers">
                <p>
                  A thermo-hygrometer measures ambient temperature and relative humidity and
                  calculates grains per pound (GPP) of moisture in the air. Tracking GPP inside the
                  drying chamber, in the rest of the unaffected house, and outside the structure
                  tells us whether the drying system is actually producing progress — or whether
                  we are circulating the same wet air.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Drying"
              title="Dehumidifiers and Air Movers"
              intro="How moisture is removed from materials and then removed from the air."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="LGR (Low Grain Refrigerant) Dehumidifiers">
                <p>
                  LGR units are the workhorses of residential structural drying. A refrigerant
                  cycle cools the incoming air below its dew point, condenses moisture out, and
                  returns drier air to the space. Low-grain models are engineered to keep producing
                  useful water removal even as the air in the drying chamber gets drier, which is
                  exactly when a conventional refrigerant dehumidifier starts to stall.
                </p>
                <p>
                  Proper sizing comes from the cubic footage of the affected area, the class of
                  water damage, and the materials involved. Undersized drying chambers fail slowly;
                  oversized ones waste energy and, in cold conditions, can over-dry wood framing.
                  We size the drying system to the loss rather than to a rule of thumb.
                </p>
              </Card>
              <Card title="Desiccant Dehumidifiers">
                <p>
                  Desiccant dehumidifiers pass humid air through a silica-based wheel that
                  adsorbs water vapor. They continue to perform when LGR units start to lose
                  efficiency — in cold garages and crawlspaces, on hardwood floor drying projects
                  that require very low humidity, and on large commercial losses. Many projects
                  benefit from combining LGR and desiccant in the same drying chamber.
                </p>
              </Card>
              <Card title="Axial Air Movers">
                <p>
                  Axial air movers use a fan blade similar to a box fan but housed for restoration
                  use. They deliver high volumes of air across large surfaces, which makes them the
                  right choice for drying open floor areas, ceilings, and long wall runs. Axials
                  are used when total airflow, not directed airflow, is the priority.
                </p>
              </Card>
              <Card title="Centrifugal Air Movers">
                <p>
                  Centrifugal air movers use a squirrel-cage impeller to produce a higher-velocity,
                  more directed stream of air. They are the tool for pushing air into wall
                  cavities, under cabinetry, and across complex corners. Combining centrifugal and
                  axial air movers lets a drying technician match airflow to the geometry of a
                  particular room rather than carpeting the house with identical fans.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Air Quality"
              title="HEPA Scrubbers, Negative Air, and Containment"
              intro="Protecting the unaffected portion of the home during demolition and drying."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="HEPA Air Scrubbers">
                <p>
                  A HEPA air scrubber pulls room air through a sequence of pre-filters and a true
                  HEPA filter that captures 99.97% of particles at 0.3 microns. Scrubbers run
                  continuously inside containment during mold, fire, and sewage projects to reduce
                  airborne particulates during demolition and cleaning. Filter stages are replaced
                  on schedule rather than when they look dirty.
                </p>
              </Card>
              <Card title="Negative Air Machines">
                <p>
                  A negative air machine is a HEPA-filtered blower ducted from the contained area
                  to the exterior. It produces a pressure differential that keeps air flowing
                  into the containment rather than out of it, so demolition debris cannot drift
                  into clean parts of the home. Negative air is a core element of the S520
                  remediation framework and is used on most mold projects.
                </p>
              </Card>
              <Card title="Containment Plastic and Zip Poles">
                <p>
                  Physical containment — six-mil polyethylene sheeting, telescoping zip poles, and
                  zippered entry doors — seals off the affected area from the rest of the home.
                  Done properly, containment keeps dust and odor confined to the work area and
                  makes daily life bearable for homeowners who are living on-site during the
                  project.
                </p>
              </Card>
              <Card title="Air Scrubber Placement">
                <p>
                  Where a scrubber sits matters. We position units to create a cross-flow through
                  the containment so the air inside the chamber turns over several times per hour.
                  A scrubber parked in a dead corner cleans its own corner and not much else.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Odor Control"
              title="Hydroxyl and Ozone Generators"
              intro="Two different tools for different stages of the odor-removal process."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Hydroxyl Generators">
                <p>
                  Hydroxyl generators use ultraviolet light and a catalyst to create hydroxyl
                  radicals that break down odor-causing molecules. They work more slowly than ozone
                  but are generally considered safe to run in occupied spaces, which makes them the
                  tool of choice when a family is living at home during a fire or odor project.
                </p>
              </Card>
              <Card title="Ozone Generators">
                <p>
                  Ozone generators produce O3, an unstable three-oxygen molecule that reacts
                  aggressively with organic compounds. Ozone can neutralize odors that hydroxyl
                  treatment cannot, but it requires the space to be unoccupied during treatment
                  and properly ventilated afterward. We use ozone as a final step in unoccupied
                  structures, never as a shortcut around source removal.
                </p>
              </Card>
              <Card title="Source Removal First">
                <p>
                  Neither hydroxyl nor ozone can overcome odor sources that are still present.
                  Soot-laden insulation, contaminated carpet pad, and charred framing must be
                  removed before any air treatment produces a lasting result. Odor machines are a
                  finishing step, not a substitute for demolition.
                </p>
              </Card>
              <Card title="Documentation of Treatment">
                <p>
                  Both hydroxyl and ozone treatments are logged with start and end times, equipment
                  model, and the condition of the space before and after. That record is what
                  allows the project to close out with confidence rather than with a nose test on
                  the last day.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Documentation"
              title="Xactimate Estimating Software"
              intro="Why we write every estimate in the same platform your carrier uses."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Xactimate is the estimating platform most property insurance carriers in North
                America rely on to evaluate restoration claims. Writing our scope of work in
                Xactimate means every line item, unit of measure, and price point is grounded in a
                shared reference that both sides of the claim recognize. It shortens approval
                cycles, reduces scope disputes, and gives homeowners a document they can actually
                compare against their adjuster's worksheet.
              </p>
              <p>
                For self-pay customers who are not filing a claim, a Xactimate-based estimate is
                still useful because it breaks a project into concrete, line-level components.
                Instead of a single "reconstruction" number, you see the demolition, the
                material, the labor, and the finish work individually. That transparency is how we
                avoid the surprise change orders that give the restoration industry a bad
                reputation.
              </p>
              <p>
                Field technicians also use Xactimate's mobile tools to sketch rooms, attach
                photos, and record meter readings in the same file as the scope. The final job file
                your carrier receives is produced directly from the field data, not re-typed from
                handwritten notes days later.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading eyebrow="FAQ" title="Common Equipment Questions" />
            <div className="max-w-[820px] mx-auto space-y-4">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-white p-6"
                  style={{
                    borderRadius: '20px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                  }}
                >
                  <h3 className="text-[#222222] font-semibold text-[17px] mb-2">{f.q}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              See the Equipment in Action
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8 leading-relaxed">
              Every loss is different, but the tools that make a difference are the same. Call to
              talk through your situation with a technician who understands what each piece of gear
              is for.
            </p>
            <HeroCTA />
            <div className="mt-8 text-[#6a6a6a] text-[15px]">
              Related:{' '}
              <Link href="/water-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Water Damage
              </Link>
              {' · '}
              <Link href="/mold-remediation" className="text-[#ff385c] no-underline font-medium">
                Mold Remediation
              </Link>
              {' · '}
              <Link href="/fire-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Fire Damage
              </Link>
              {' · '}
              <Link href="/why-us" className="text-[#ff385c] no-underline font-medium">
                Why Us
              </Link>
              {' · '}
              <Link href="/faq" className="text-[#ff385c] no-underline font-medium">
                FAQ
              </Link>
              {' · '}
              <Link href="/" className="text-[#ff385c] no-underline font-medium">
                Home
              </Link>
            </div>
            <div className="mt-6 text-[#6a6a6a] text-[13px]">
              {ADDRESS_LINE1} &middot; {ADDRESS_LINE2} &middot;{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] no-underline">
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
