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
  title: 'Restoration FAQ | Water, Fire, Mold & Insurance Questions | (248) 531-8404',
  description:
    'Direct answers to the questions Bloomfield homeowners ask most: emergency response times, water categories, mold remediation steps, fire cleanup, insurance claims, pricing, process, and IICRC certifications. Updated by Provail Restoration of Bloomfield.',
  alternates: { canonical: 'https://provailrestoration.com/faq' },
  openGraph: {
    title: 'Restoration FAQ | Provail Restoration of Bloomfield',
    description:
      'Answers to 30+ common questions about water damage, mold, fire, insurance claims, pricing, timelines, and IICRC certifications.',
    url: 'https://provailrestoration.com/faq',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

type QA = { q: string; a: string }
type Category = { key: string; title: string; intro: string; qas: QA[] }

const categories: Category[] = [
  {
    key: 'emergency',
    title: 'Emergency Response',
    intro: 'What to expect in the first hours after a loss.',
    qas: [
      {
        q: 'How fast can a crew be at my home after I call?',
        a: 'Our dispatch target for emergency calls inside our primary Oakland County service area is 60 minutes from the time we hang up with you. Traffic, weather, and the number of simultaneous calls can affect that number, so the person who answers the phone will give you an honest estimated arrival time for your specific address rather than a generic promise.',
      },
      {
        q: 'Is your phone actually answered overnight and on holidays?',
        a: 'Yes. Our dispatch line routes to a live person around the clock, every day of the year. Restoration emergencies do not respect business hours, and the middle of the night is often when the worst losses happen.',
      },
      {
        q: 'What should I do in the first five minutes after discovering water?',
        a: 'If it is safe to do so, shut off the water source — the main valve if you cannot isolate a specific fixture — and kill electrical power to any affected room at the breaker panel. Move valuables off the floor, but do not start ripping out materials before the loss is documented. Then call us so drying can start as quickly as possible.',
      },
      {
        q: 'Should I try to dry things out myself with fans and a shop vac?',
        a: 'A shop vac can help with surface water and is generally fine for small, clean spills. Household box fans are not designed to move the volume of air needed to dry saturated building materials, and they can spread moisture into wall cavities that would otherwise stay dry. For anything more than a minor spill, call before you start.',
      },
    ],
  },
  {
    key: 'water',
    title: 'Water Damage',
    intro: 'Extraction, drying, and what the categories and classes mean.',
    qas: [
      {
        q: 'What are the three water damage categories?',
        a: 'Category 1 is clean water from a sanitary source such as a broken supply line. Category 2 (gray water) contains contaminants that could cause discomfort. Category 3 (black water) is grossly contaminated — sewage backups, rising surface water, or long-standing water that has degraded. Each category calls for a different cleaning and material-removal approach under the IICRC S500 standard.',
      },
      {
        q: 'What are water damage classes?',
        a: 'Classes describe how much of a room is wet and how much evaporation load the drying system will need to handle. They run from Class 1 (minimal wet materials) to Class 4 (deeply saturated, low-porosity materials like hardwood and masonry). Classifying a loss properly is how the right amount of equipment gets installed.',
      },
      {
        q: 'How long does professional drying usually take?',
        a: 'Most residential water losses dry in three to five days. Losses with hardwood flooring, deep saturation, or cold ambient conditions can take longer. Daily moisture meter readings — not calendar dates — determine when equipment can be removed.',
      },
      {
        q: 'Will my drywall and flooring have to come out?',
        a: 'Not always. Category 1 losses caught early can often be dried in place with air movers and dehumidifiers. Materials that absorbed Category 2 or 3 water, materials with structural failure, and porous items that cannot be effectively decontaminated are typically removed.',
      },
      {
        q: 'What is a dry standard and how do you know when drying is done?',
        a: 'A dry standard is a moisture content number — specific to each material — that represents normal conditions for similar unaffected areas of the home. We establish the dry standard at the start of the project, measure affected materials daily, and stop when readings match.',
      },
    ],
  },
  {
    key: 'mold',
    title: 'Mold Remediation',
    intro: 'How mold gets assessed, contained, and removed under S520.',
    qas: [
      {
        q: 'Do I need a mold inspection before remediation?',
        a: 'For small, clearly defined growth tied to a recent water event, remediation can often begin without a separate inspection. For larger projects, unclear sources, or situations involving sensitive occupants, an independent indoor environmental professional may be appropriate. We can help you decide which path fits your situation.',
      },
      {
        q: 'Can I remove mold myself with bleach?',
        a: 'Surface-level mold on a non-porous surface can sometimes be wiped down with an appropriate cleaner. Bleach is not the right tool for porous materials like drywall and wood framing because it does not penetrate. Projects that cross the small-area threshold in the IICRC S520 framework should be addressed with professional containment, negative air, and source removal.',
      },
      {
        q: 'What is containment and why is it important?',
        a: 'Containment uses plastic sheeting, zip poles, and a HEPA-filtered negative air machine to seal off the work area from the rest of the home. It keeps spores and demolition dust from migrating during cleanup. Without containment, a mold project can make the rest of the house worse than it started.',
      },
      {
        q: 'Will you do post-remediation verification?',
        a: 'For significant projects, we coordinate with an independent indoor environmental professional to perform post-remediation verification before rebuild. Using an independent third party for clearance keeps the verification honest and protects the homeowner.',
      },
    ],
  },
  {
    key: 'fire',
    title: 'Fire & Smoke',
    intro: 'Soot, odor, and what can and cannot be cleaned.',
    qas: [
      {
        q: 'What happens in the first visit after a fire?',
        a: 'We stabilize the property — board-up, tarping, and utility coordination — and begin a walkthrough to inventory affected contents and assess structural damage. Decisions about what can be cleaned in place and what must be removed come next, guided by the IICRC S700 standard.',
      },
      {
        q: 'Why does a fire smell linger for weeks?',
        a: 'Smoke residues deposit on porous materials — insulation, upholstery, drywall paper — and continue to off-gas as temperature and humidity change. Until those sources are removed or sealed, air treatment alone only masks the odor. A complete fire job removes or treats the sources before applying hydroxyl or ozone.',
      },
      {
        q: 'Are all fires the same to clean up?',
        a: 'No. Protein fires from kitchen grease, synthetic fires from polymer-heavy furnishings, and natural material fires from wood produce different residues that respond to different cleaning methods. Misreading the residue type is one of the most common reasons a fire project fails.',
      },
      {
        q: 'Can smoke-damaged contents be saved?',
        a: 'Many can. Hard goods often respond well to ultrasonic cleaning, textiles to dedicated garment cleaning methods, and electronics to specialized decontamination protocols. Pack-out to an off-site facility keeps the work clean and lets the structure dry in parallel.',
      },
    ],
  },
  {
    key: 'insurance',
    title: 'Insurance & Claims',
    intro: 'How billing, documentation, and coverage questions actually work.',
    qas: [
      {
        q: 'Do you bill my insurance directly?',
        a: 'Yes. On approved work, we bill your carrier directly and collect your deductible from you at close-out. We document the loss thoroughly so the adjuster has what they need to evaluate the claim.',
      },
      {
        q: 'Are you a public adjuster or claim negotiator?',
        a: 'No. Public adjusting is a licensed profession in Michigan and we intentionally stay out of it. We document the loss, write the scope, and let the licensed professionals on both sides handle settlement questions.',
      },
      {
        q: 'Should I file a claim before calling you?',
        a: 'You can do it in either order. If water is actively flowing or a fire is out but unsafe, call us first so mitigation can start. Most policies require prompt mitigation and will cover the cost of reasonable emergency work even while the larger claim is still being set up.',
      },
      {
        q: 'What if my claim gets denied?',
        a: 'A denial on the mitigation portion is rare but possible. If it happens, we give you the full documentation file so you can appeal or discuss options with your adjuster. Our agreement with you explains what you owe under that scenario before work begins, so there are no surprises.',
      },
      {
        q: 'Will filing a claim raise my rates?',
        a: 'Whether a single claim affects premiums depends on your carrier, your claims history, and the type of loss. That question belongs to your insurance agent, not a restoration contractor, and we will not guess at it for you.',
      },
    ],
  },
  {
    key: 'pricing',
    title: 'Pricing',
    intro: 'How restoration estimates are actually built.',
    qas: [
      {
        q: 'How is a restoration estimate priced?',
        a: 'We write mitigation and reconstruction estimates in Xactimate, the same platform most carriers use. Every line item has a unit of measure and a regional price point that both we and the adjuster can reference. That shared framework keeps pricing conversations concrete.',
      },
      {
        q: 'Do you offer free estimates?',
        a: 'For most routine residential losses, the initial on-site assessment is provided without charge. Complex commercial projects, forensic moisture investigations, and expert opinion work are quoted separately because they are a different service.',
      },
      {
        q: 'What is a typical out-of-pocket cost with insurance?',
        a: 'On an insured loss, the homeowner is generally responsible for the deductible and any items the policy excludes. We walk through those details with you before work begins, in plain language, so you understand the financial picture.',
      },
      {
        q: 'Do you charge by the hour or by the scope?',
        a: 'Mitigation and reconstruction are priced by the documented scope of work — materials, labor, and equipment line items — not by an hourly rate. Hourly billing is generally reserved for specialty services outside the normal restoration flow.',
      },
    ],
  },
  {
    key: 'process',
    title: 'Process & Timeline',
    intro: 'What the phases look like from day one to final walkthrough.',
    qas: [
      {
        q: 'What are the phases of a restoration project?',
        a: 'A typical project moves through mitigation (extraction, drying, and initial cleaning), content handling (pack-out, cleaning, and storage as needed), and reconstruction (rebuild and finish work). Large losses add a formal pre-rebuild meeting and a written rebuild scope before that phase begins.',
      },
      {
        q: 'Who is my point of contact during the project?',
        a: 'One project manager owns your file from start to finish. You have a single phone number and a single person who knows the history of the loss, rather than being handed between mitigation, contents, and rebuild departments.',
      },
      {
        q: 'Can I stay in my house during the work?',
        a: 'Often yes, especially on smaller losses that are contained to a single room. Larger projects that affect the kitchen, all bathrooms, or the primary sleeping areas sometimes require temporary relocation. Your project manager will walk through the realistic options with you on day one.',
      },
      {
        q: 'How do you protect the parts of my home that are not affected?',
        a: 'Containment plastic, floor protection, dust management with HEPA air scrubbers, and clear traffic paths keep demolition and drying work confined. The parts of your home that did not get hit by the loss should not end up worse when we leave.',
      },
      {
        q: 'Do you clean up at the end of each day?',
        a: 'Yes. Daily cleanup is part of standard operating procedure — tools off the floor, debris bagged, containment closed, and equipment checked before the crew leaves. A clean job site is the cheapest quality-control tool there is.',
      },
    ],
  },
  {
    key: 'certifications',
    title: 'Certifications & Standards',
    intro: 'The credentials the industry actually recognizes.',
    qas: [
      {
        q: 'What is the IICRC and why does it matter?',
        a: 'The IICRC (Institute of Inspection, Cleaning and Restoration Certification) is the standards body that writes the consensus documents the restoration industry uses. Its standards — S500, S520, S700 — are ANSI-accredited and define a reasonable standard of care. Training technicians to these standards is the baseline, not an upgrade.',
      },
      {
        q: 'Is certification held by the company or the technician?',
        a: 'Individual technicians hold IICRC certifications. A company can be a certified firm, but the training that actually matters on your property lives with the people standing in your living room. Ask who on the crew holds current credentials.',
      },
      {
        q: 'Does Michigan require a license to do restoration work?',
        a: 'Michigan requires a residential builder license for reconstruction work above certain thresholds. Mitigation and cleaning are not separately licensed at the state level, but insurers and homeowners generally expect IICRC-trained technicians on the job.',
      },
      {
        q: 'Are you bonded and insured?',
        a: 'Yes. We carry general liability, workers compensation, and auto coverage. Certificates of insurance are available on request for homeowners, property managers, and commercial clients who need to keep them on file.',
      },
    ],
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap((c) =>
    c.qas.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  ),
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/faq#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/faq',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://provailrestoration.com/faq' },
  ],
}

export default function FAQPage() {
  const totalQAs = categories.reduce((n, c) => n + c.qas.length, 0)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
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
                <span>{totalQAs}+ Questions</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Plain Answers</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>No Sales Pitch</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Restoration Frequently Asked Questions
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              The questions Bloomfield homeowners actually ask us, grouped by topic. Every answer
              is two to four sentences of direct information — no filler, no hidden sales
              language, no medical or legal claims outside our expertise.
            </p>
            <HeroCTA />
          </div>
        </section>

        <section className="bg-white" style={{ paddingBottom: '48px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              This page is the consolidated answer hub for {BIZ_NAME}. It exists because the same
              handful of questions come up on almost every initial phone call, and because the
              answers do not change based on whether a homeowner ends up hiring us. If a specific
              answer below helps you solve your problem without calling us, that is a win for
              everyone. If the answer raises more questions, our dispatch line is{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>
              , and a technician can walk through your situation in more depth.
            </p>
            <p>
              The content below is organized by category. Inside each category, questions are
              ordered roughly from the most common to the most specialized. A long-form discussion
              of any individual topic lives on its dedicated service page, and we link back to
              those pages throughout. If you are trying to choose a restoration contractor for the
              first time, the{' '}
              <Link href="/why-us" className="text-[#ff385c] no-underline font-medium">
                Why Us
              </Link>{' '}
              page is probably the right starting point, and the{' '}
              <Link href="/technology-equipment" className="text-[#ff385c] no-underline font-medium">
                Technology and Equipment
              </Link>{' '}
              page explains the tools the industry uses to measure and document a project.
            </p>
            <p>
              One intentional note about tone: nothing on this page is written to diagnose medical
              conditions, interpret an insurance policy, or tell you how a claim will be decided.
              Those questions belong to licensed professionals — physicians, insurance agents,
              licensed adjusters, and attorneys — and we will direct you to the right kind of
              professional whenever a question crosses that line. Our job is to restore property
              to a pre-loss condition, document the work honestly, and stay out of professions we
              are not licensed to practice.
            </p>
          </div>
        </section>

        {categories.map((cat, idx) => (
          <section
            key={cat.key}
            className={idx % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}
            style={{ padding: '64px 0' }}
          >
            <div className="max-w-[1120px] mx-auto px-6">
              <PillarSectionHeading eyebrow={`Section ${idx + 1}`} title={cat.title} intro={cat.intro} />
              <div className="max-w-[820px] mx-auto space-y-4">
                {cat.qas.map((f) => (
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
        ))}

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <h2
              className="text-[#222222] font-bold mb-4 text-center"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Still Not Sure Where Your Question Fits?
            </h2>
            <p>
              The categories above cover the recurring patterns, but every loss has its own
              wrinkles. A brick veneer home behaves differently during drying than a vinyl-sided
              ranch. A slab foundation creates different moisture paths than a full basement. A
              kitchen fire with melted plastic cabinetry creates different odor chemistry than a
              chimney flue fire. Your specific situation deserves a specific answer, not a
              template, and the fastest way to get one is to talk with a technician who can ask
              you the right follow-up questions.
            </p>
            <p>
              If the question you have is about insurance coverage, the most direct answer is
              usually from your own agent or adjuster. If it is about a pre-existing health
              condition interacting with indoor air quality, the right person to ask is a
              physician — ideally one familiar with environmental exposures. We will not guess at
              those answers because guessing is where homeowners get hurt. What we can tell you is
              whether a particular finding on a property is unusual, whether it fits a pattern we
              have seen before, and what the standard of care says about the response to it.
            </p>
            <p>
              Finally, a reminder that this page is a working document. As questions come in on
              intake calls and repeat often enough to earn a slot, we add them. If something
              important to you is missing, leave a message with the dispatcher and we will either
              answer it for you directly or add it to the list for future readers.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Ready to Talk to a Technician?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8 leading-relaxed">
              Dispatch is staffed around the clock for emergencies, and daytime calls for
              non-emergency questions are welcome too.
            </p>
            <HeroCTA />
            <div className="mt-8 text-[#6a6a6a] text-[15px]">
              More pages:{' '}
              <Link href="/" className="text-[#ff385c] no-underline font-medium">
                Home
              </Link>
              {' · '}
              <Link href="/why-us" className="text-[#ff385c] no-underline font-medium">
                Why Us
              </Link>
              {' · '}
              <Link href="/technology-equipment" className="text-[#ff385c] no-underline font-medium">
                Technology &amp; Equipment
              </Link>
              {' · '}
              <Link href="/water-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Water Damage
              </Link>
              {' · '}
              <Link href="/mold-remediation" className="text-[#ff385c] no-underline font-medium">
                Mold
              </Link>
              {' · '}
              <Link href="/fire-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Fire
              </Link>
              {' · '}
              <Link href="/services/contents-pack-out-storage" className="text-[#ff385c] no-underline font-medium">
                Pack-Out &amp; Storage
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
