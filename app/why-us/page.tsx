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
  title: 'Why Choose Provail Restoration of Bloomfield | IICRC Certified | (248) 531-8404',
  description:
    'Why Bloomfield homeowners call Provail Restoration of Bloomfield first: IICRC-certified technicians, 60-minute response target, single project manager, documentation-first process, direct insurance billing, and a written workmanship warranty.',
  alternates: { canonical: 'https://provailrestoration.com/why-us' },
  openGraph: {
    title: 'Why Choose Provail Restoration of Bloomfield',
    description:
      'Certified technicians, rapid response, and a documentation-first process across Oakland, Macomb, and Wayne counties.',
    url: 'https://provailrestoration.com/why-us',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What IICRC certifications does your team actually hold?',
    a: 'Our field technicians train to the ANSI/IICRC S500 Standard for Professional Water Damage Restoration, the S520 Standard for Professional Mold Remediation, and the S700 Standard for Professional Fire and Smoke Damage Restoration. Certification is tied to individuals, not companies, so crews working in your home carry current credentials rather than relying on a company badge.',
  },
  {
    q: 'How quickly can a crew actually be on-site?',
    a: 'Our dispatch target is a 60-minute arrival for emergency losses inside our primary service radius. Traffic, weather, and the number of simultaneous calls affect real-world times, so we quote an honest ETA when you call rather than a marketing number.',
  },
  {
    q: 'Do you really handle the insurance paperwork?',
    a: 'We document the loss, provide your carrier with photos, moisture maps, daily readings, and an itemized scope written in Xactimate. That documentation is what carriers need to evaluate a claim. We do not negotiate settlements or act as a public adjuster — that is a licensed role we intentionally stay out of.',
  },
  {
    q: 'Will the same project manager be with me the whole time?',
    a: 'Yes. One project manager owns the file from mitigation through reconstruction. You have a single phone number to call and a single person who knows the history of your loss, rather than being handed from department to department.',
  },
  {
    q: 'What does your written warranty cover?',
    a: 'Our workmanship warranty covers the mitigation and reconstruction work we performed — drying that met documented dry standard, installations performed by our crews, and materials we supplied. It does not cover pre-existing conditions, future unrelated losses, or work performed by other contractors.',
  },
  {
    q: 'Are you local or part of a national franchise?',
    a: 'We are locally owned and based in Bloomfield Township. Decisions about how a job runs are made by the same people who will be standing in your living room, not by a regional corporate office.',
  },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/why-us#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/why-us',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'Why Us', item: 'https://provailrestoration.com/why-us' },
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

export default function WhyUsPage() {
  return (
    <>
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
                <span>IICRC-Certified</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Locally Owned</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Written Warranty</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Why Homeowners Choose {BIZ_NAME}
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              A straightforward look at what we actually do differently — the certifications, the
              response commitment, the paperwork, and the warranty — so you can make an informed
              decision before anyone sets foot in your home.
            </p>
            <HeroCTA />
          </div>
        </section>

        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Choosing a restoration contractor is not like choosing a painter or a plumber. When
              you call us, something unexpected has already gone wrong — a supply line has let go,
              a storm has pushed water through a basement wall, or a small kitchen fire has left
              smoke in places you did not know existed. You are making a decision under pressure,
              often for the first time, and the person you trust will influence how your home
              looks, smells, and feels for years after the loss is technically closed.
            </p>
            <p>
              This page is intentionally written as a plain-language walkthrough of our operating
              philosophy. It avoids slogans, does not invent statistics, and tries to explain every
              claim in concrete terms. If something on this page matters to you and is unclear, the
              fastest way to get a direct answer is to call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>{' '}
              and ask.
            </p>
            <p>
              Restoration is not a commodity. Two contractors can arrive at the same loss, run
              equipment for the same number of days, and produce very different outcomes. The
              difference lives in certification, in documentation, in how decisions get made when
              the obvious answer is not available, and in what happens when something unexpected
              shows up behind a wall on day three. The sections below explain how we try to get
              those invisible details right.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Certifications"
              title="IICRC S500, S520, and S700 Training"
              intro="Certification by individual technician — not a company logo hanging in a lobby."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="S500 — Water Damage">
                <p>
                  The ANSI/IICRC S500 Standard defines how water losses are inspected, classified
                  by water category and damage class, dried to a measurable standard, and
                  documented. Our water damage technicians train to this standard so drying
                  decisions are based on meter readings rather than guesswork.
                </p>
              </Card>
              <Card title="S520 — Mold Remediation">
                <p>
                  The S520 Standard describes how microbial contamination is assessed, contained,
                  and removed. It emphasizes source control, containment, negative pressure, and
                  verification — the exact framework we use when mold is part of a water loss or a
                  standalone mold project.
                </p>
              </Card>
              <Card title="S700 — Fire and Smoke">
                <p>
                  The S700 Standard covers the inspection and restoration of fire- and
                  smoke-damaged structures. It guides decisions about what can be cleaned in place,
                  what must be removed, and how to address the different residues produced by
                  different fuel types.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Response"
              title="Our 60-Minute Arrival Commitment"
              intro="An honest look at how we staff and dispatch for emergency calls."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A 60-minute arrival target is only meaningful if the company behind it has the
                staffing to support it. We dispatch from within Oakland County and keep loaded
                response vehicles stocked with extraction gear, air movers, dehumidifiers, moisture
                meters, containment supplies, and PPE so the first truck on your property is the
                truck that can actually start mitigation.
              </p>
              <p>
                In real life, a 60-minute target is affected by weather, road closures, simultaneous
                calls during regional events, and the physical distance from our dispatch point to
                your address. When you call, the person answering the phone will give you an honest
                estimated arrival time for your specific loss rather than repeating a tagline.
                If a faster response is critical — for example, if water is still actively flowing
                — we will tell you what to do in the meantime and stay on the line until you have
                the bleed stopped.
              </p>
              <p>
                After-hours calls route to a live dispatcher, not a voicemail or a chatbot. Holidays,
                weekends, and the middle of the night are the times losses most often happen, and
                those are the times a homeowner is least likely to be able to shop around. We treat
                the phone line as a core operational commitment rather than a convenience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Ownership"
              title="Locally Owned, Locally Operated"
              intro="Every decision is made by someone who lives in the communities we serve."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                We are not a franchise of a national brand, and we are not a storefront for an
                out-of-state roll-up. The company is owned and operated locally. The practical
                result is that when you call, you reach people who know which townships the sewer
                backups cluster in, which neighborhoods have slab foundations that complicate
                drying, and which insurance adjusters actually return voicemails.
              </p>
              <p>
                Local ownership also changes how complaints get resolved. There is no regional vice
                president to escalate past and no corporate office to hide behind. If something is
                not right on your project, the person who signs the checks is the same person you
                can reach directly. That accountability is not a marketing line; it is how a small,
                reputation-dependent business stays in business in a market the size of Bloomfield.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Insurance"
              title="Direct Insurance Billing, Without Overreach"
              intro="We handle the paperwork your carrier needs — without pretending to be your adjuster."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="What We Do">
                <p>
                  We prepare the documentation your carrier needs to evaluate the claim: itemized
                  Xactimate scope of work, photo documentation of affected areas, moisture maps,
                  daily drying logs with meter readings, and category-and-class designations based
                  on the IICRC S500 framework. We bill your carrier directly on approved work and
                  coordinate depreciation and supplements when scope expands during the project.
                </p>
              </Card>
              <Card title="What We Do Not Do">
                <p>
                  We do not negotiate claim settlements, argue coverage, interpret your policy, or
                  act as a public adjuster. Public adjusting is a licensed profession in Michigan
                  and we are intentionally not in that business. If your claim hits a coverage
                  dispute, we will continue to document the work honestly and let the licensed
                  professionals on both sides resolve it.
                </p>
              </Card>
              <Card title="Carrier Familiarity">
                <p>
                  Our office staff works daily with the major national carrier families that write
                  homeowner policies in southeast Michigan, as well as the regional mutual
                  insurers and many smaller specialty carriers. We do not publish carrier logos,
                  because familiarity with a carrier's workflow is not the same as an endorsement.
                </p>
              </Card>
              <Card title="Out-of-Pocket Clarity">
                <p>
                  Before work starts we explain the likely deductible, the emergency mitigation
                  authorization you are signing, and what happens if the carrier ultimately denies
                  coverage. You will not discover a surprise balance at the end of the project
                  because we walked you through the financial path at the beginning.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Service Area"
              title="A Focused Three-County Radius"
              intro="Oakland, Macomb, and northern Wayne — close enough to actually show up."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                We deliberately limit our routine service area to a three-county footprint:
                Oakland County in full, Macomb County west of I-94, and the northern edge of Wayne
                County. A realistic radius keeps arrival times short, keeps our crews on familiar
                ground, and keeps the company from taking on projects we cannot properly supervise.
              </p>
              <p>
                Bloomfield Township, Bloomfield Hills, Birmingham, West Bloomfield, Beverly Hills,
                Franklin, Troy, Royal Oak, Southfield, Farmington Hills, Novi, Northville, and the
                surrounding Oakland County neighborhoods see us most often. We also respond
                routinely into Sterling Heights, Warren, Clinton Township, and Shelby Township.
                For a loss outside that radius, we will tell you honestly whether we are the right
                company or whether another local contractor is a better fit.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Documentation"
              title="A Documentation-First Philosophy"
              intro="If it is not recorded, it did not happen — a principle that protects you and us."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A well-run restoration project generates a quiet mountain of paperwork. Initial
                inspection photos, thermal imagery showing moisture behind walls, sketch diagrams
                with meter readings at each wall cavity, equipment placement diagrams, daily
                drying logs, signed authorizations, change orders, and final clearance readings are
                all part of a complete file. We create that file regardless of whether we think the
                claim will be disputed, because the habits that protect a disputed project are the
                same habits that produce a clean outcome on a simple one.
              </p>
              <p>
                For you, documentation means transparency. You can see which rooms we measured,
                which readings prompted which decisions, and why we removed a particular section of
                drywall. For the carrier, documentation means a scope that does not require phone
                calls and guesswork to evaluate. For us, documentation is how we keep quality
                consistent across crews and shifts.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Single PM"
              title="One Project Manager, Start to Finish"
              intro="You do not get bounced between departments as the project changes phase."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most restoration projects move through three phases: emergency mitigation
                (extraction and drying), content handling, and structural reconstruction. On many
                larger companies, each phase is owned by a different department, and the homeowner
                has to re-explain the loss every time the handoff happens. On our projects, one
                project manager owns your file from the day we arrive until the final punch list is
                signed. If you have a question on week four about a decision we made in week one,
                the same person answers it.
              </p>
              <p>
                A single point of contact is not only convenient; it is also how quality survives
                the messy middle of a project. Reconstruction is only as good as the mitigation it
                is built on, and the best way to make sure those two phases match is to have one
                person carry the knowledge across the boundary.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Warranty and Pricing"
              title="Written Warranty and Transparent Pricing"
              intro="Commitments you can read before the work starts, not after."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Written Workmanship Warranty">
                <p>
                  Every mitigation project closes with a written workmanship warranty on the drying
                  and remediation work we performed. Reconstruction work — drywall, flooring,
                  cabinetry, painting — carries its own written warranty on labor and on the
                  materials we supplied. You receive both documents on paper before final payment.
                </p>
              </Card>
              <Card title="Xactimate-Based Pricing">
                <p>
                  Mitigation and reconstruction estimates are written in Xactimate, the same
                  estimating platform most insurance carriers use. That keeps pricing conversations
                  grounded in a shared reference rather than a back-of-napkin number. For
                  self-pay customers who are not filing a claim, we explain the same line items in
                  plain language.
                </p>
              </Card>
              <Card title="No Surprise Change Orders">
                <p>
                  When the scope of a project changes — for example, if we find unexpected
                  secondary damage behind a wall — we stop, document the new finding, and present a
                  change order before continuing. Unauthorized scope expansion is not a surprise
                  you should discover on the final invoice.
                </p>
              </Card>
              <Card title="Plain-Language Explanations">
                <p>
                  Every line of every estimate can be explained to you in plain language. If a
                  piece of the scope does not make sense, ask. A good restoration contractor should
                  be able to justify every dollar of the estimate in terms a homeowner can
                  understand.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading eyebrow="FAQ" title="Questions Homeowners Actually Ask" />
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

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Ready to Talk With a Real Technician?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8 leading-relaxed">
              Dispatch is staffed around the clock. Call for an honest ETA, an honest scope, and
              documentation you can actually read.
            </p>
            <HeroCTA />
            <div className="mt-8 text-[#6a6a6a] text-[15px]">
              Explore related pages:{' '}
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
              <Link href="/technology-equipment" className="text-[#ff385c] no-underline font-medium">
                Technology &amp; Equipment
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
              {ADDRESS_LINE1} &middot; {ADDRESS_LINE2}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
