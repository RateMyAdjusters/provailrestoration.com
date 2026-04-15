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
  title: 'Ann Arbor 88 MPH Storm Damage Guide (April 15, 2026)',
  description:
    'Ann Arbor storm damage response guide for the April 15, 2026 88 mph wind event. Washtenaw County tornado warning, roof leak triage, 24/7 dispatch.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/ann-arbor-88mph-wind-storm-damage-guide',
  },
  openGraph: {
    title: 'Ann Arbor 88 MPH Storm Damage Guide (April 15, 2026)',
    description:
      'Ann Arbor storm damage response guide for the April 15, 2026 88 mph wind event. Washtenaw County tornado warning, roof leak triage, 24/7 dispatch.',
    url: 'https://provailrestoration.com/resources/ann-arbor-88mph-wind-storm-damage-guide',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-04-15T08:00:00-04:00',
    modifiedTime: '2026-04-15T08:00:00-04:00',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'A tree limb punched through my rental near Central Campus. Who do I call first — my landlord or a contractor?',
    a: 'Call your landlord or property management company the moment the room is safe and the rain is contained. Most U-M area leases put structural repair on the owner, not the tenant, and the owner has to authorize the restoration contractor. What you can do on your own authority is stop the interior water spread — move electronics off the floor, put down towels, and photograph everything before anything is moved. If your landlord is unreachable and water is actively pouring into a bedroom, document your outreach attempts by text or email so there is a written record.',
  },
  {
    q: 'I live in the Old West Side historic district. Can I start emergency roof repairs without a permit?',
    a: 'Ann Arbor allows temporary emergency stabilization to stop active water intrusion, but permanent repairs to a roof in a locally designated historic district still need Historic District Commission review. A tarp, temporary plywood over a punctured area, or a short-term patch to stop a leak will generally not draw a violation. Full slate replacement, new ridge caps, or any change to the visible roof line does need approval. When in doubt, call the city planning office the next business day and keep your temporary work photographed and dated.',
  },
  {
    q: 'My roof is leaking into the attic but it is still raining. Should I go up there now?',
    a: 'No. A wet roof in 50 mph residual gusts is a fall waiting to happen, and lightning in a post-frontal environment is still a risk for another hour after the main cell passes. Work the problem from the inside. Pull insulation away from the wet spot so it does not hold water against the drywall, put a bucket or a shallow tote under the drip, and if a ceiling is bulging from trapped water, clear the room, shut off the circuit, and call a crew — don\u2019t puncture it yourself unless you have a specific plan for where the water is going (see the full roof leak emergency guide at /resources/roof-leak-after-storm-emergency-guide). The roof gets looked at when the wind drops below 20 mph and the shingles dry.',
  },
  {
    q: 'A pole barn on my Saline property lost half its roof. Does my homeowner policy cover it?',
    a: 'That is a question for your agent, not for a contractor. Outbuilding coverage on a Michigan homeowner policy is usually a percentage of the main-dwelling limit, and the percentage, the exclusions, and the deductible vary by carrier and policy form. Document the barn the same way you would document the house — wide shots, close shots, a walk-through video — and open the conversation with your carrier honestly. This page is not legal or insurance advice.',
  },
  {
    q: 'How long before a wet attic in April turns into a mold problem?',
    a: 'Warm April attic conditions in southeast Michigan can push a wet sheathing surface past the 48 to 72 hour window that most indoor air guidelines use as a practical threshold for visible microbial growth. Sun load on a south-facing roof deck can warm an attic into the seventies within a day even when the outdoor high is in the fifties. The practical takeaway is that a roof leak in April should not sit for a week waiting for a contractor — either the wet material gets dried or it gets removed.',
  },
  {
    q: 'My tenant in Ypsilanti says the ceiling is leaking. What are my obligations as the landlord?',
    a: 'Michigan landlord-tenant law requires the owner to keep the premises fit for habitation, which in practice means responding to an active water intrusion quickly, not next week. That is a general description, not legal advice — the specific duties, timelines, and remedies depend on the lease and on local code. Contact a landlord-tenant attorney or the city housing office for anything beyond the immediate stabilization work.',
  },
  {
    q: 'Does Provail Restoration of Bloomfield work in Washtenaw County?',
    a: 'Yes, on a dispatched basis. We are headquartered in Oakland County and our main crews run out of Bloomfield Township, so for a Washtenaw event we are honest about the drive time and we coordinate with vetted local subcontractors when immediate stabilization cannot wait. Call (248) 531-8404 and the dispatcher will tell you straight whether our own crew, a partner, or a closer option is the right call for your address.',
  },
  {
    q: 'Can I file an insurance claim for a tree that fell from my neighbor\u2019s yard onto my roof?',
    a: 'In most cases a tree that falls from a neighbor\u2019s yard onto your structure is a claim on your own homeowner policy, not the neighbor\u2019s, unless there is documented prior notice that the tree was dead or dangerous. This is a general pattern and not legal advice. Your carrier and, if needed, an attorney are the right people to untangle the specifics.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Ann Arbor 88 MPH Wind Warning: Storm Damage & Roof Leak Response Guide',
  description:
    'Ann Arbor storm damage response guide for the April 15, 2026 88 mph wind event in Washtenaw County. Neighborhood-specific guidance, roof leak triage, and dispatch information.',
  author: { '@type': 'Organization', '@id': '#organization', name: BIZ_NAME },
  publisher: {
    '@type': 'Organization',
    '@id': '#organization',
    name: BIZ_NAME,
    logo: {
      '@type': 'ImageObject',
      url: 'https://provailrestoration.com/logo.png',
    },
  },
  image: 'https://provailrestoration.com/logo.png',
  datePublished: '2026-04-15T08:00:00-04:00',
  dateModified: '2026-04-15T08:00:00-04:00',
  inLanguage: 'en-US',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/ann-arbor-88mph-wind-storm-damage-guide',
  },
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
      name: 'Resources',
      item: 'https://provailrestoration.com/resources',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ann Arbor 88 MPH Wind Guide',
      item: 'https://provailrestoration.com/resources/ann-arbor-88mph-wind-storm-damage-guide',
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

export default function AnnArbor88mphWindStormGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
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
                <span>Storm Response Guide</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Washtenaw County, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[900px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Ann Arbor 88 MPH Wind Warning: Storm Damage & Roof Leak Response Guide
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[760px] mx-auto mb-6 leading-relaxed">
              Ann Arbor storm damage is the primary concern across
              Washtenaw County today as 88 mph gusts tear through
              neighborhoods from Barton Hills to Ypsilanti Township.
              This guide walks residents through the first hour after
              the tornado warning ends, what 88 mph winds actually do
              to a roof, and how to triage a leak without making it
              worse.
            </p>
            <p className="text-[#6a6a6a] text-sm italic max-w-[680px] mx-auto mb-10">
              Educational content only. Not legal, medical, or
              insurance advice. For policy specifics contact a licensed
              professional.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* ACTIVE ALERT CALLOUT */}
        <section className="bg-white" style={{ paddingBottom: '48px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-6"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(255,56,92,0.08)',
                border: '2px solid rgba(255,56,92,0.35)',
              }}
            >
              <p className="text-[#222222] text-[15px] leading-[1.65] m-0 font-semibold">
                UPDATED APRIL 15, 2026 — active tornado warning for
                Washtenaw County. The National Weather Service
                forecast office in White Lake has issued a tornado
                warning covering Ann Arbor, Ypsilanti, Saline, and
                surrounding townships with gusts forecast up to
                88 mph. Shelter on the lowest interior floor away
                from windows until the warning expires. This page
                covers what to do once the storm passes.
              </p>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{ borderRadius: '20px', backgroundColor: '#f7f7f7' }}
            >
              <h2
                className="text-[#222222] text-xl font-semibold mb-4"
                style={{ letterSpacing: '-0.44px' }}
              >
                Key takeaways for today
              </h2>
              <ul className="text-[#3c3c3c] text-[16px] leading-[1.75] list-disc pl-5 space-y-2 m-0">
                <li>88 mph gusts exceed the design threshold of most aged asphalt shingles in Washtenaw County.</li>
                <li>Do not climb a wet roof after the warning ends. Triage interior damage first.</li>
                <li>Document water intrusion before moving any contents or pulling wet insulation.</li>
                <li>A wrong tarp creates worse leaks than the original puncture.</li>
                <li>Campus-area renters call the landlord first; owners authorize the contractor.</li>
                <li>Old West Side and Burns Park historic roofs need stabilization now, permitted repairs later.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 1 — WHAT 88 MPH DOES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="The Physics"
              title="What 88 MPH Winds Actually Do to a Roof"
              intro="Uplift is the word that matters. Wind does not push a shingle off a roof — it pulls it."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                When an 88 mph gust sweeps across a pitched roof, the
                air accelerating over the ridge creates a low-pressure
                zone on the downwind side. That pressure differential
                pulls upward on every shingle, every piece of ridge
                cap, and every flashing seam at the same time. The
                bond holding a shingle down is the factory-applied
                sealant strip plus four or six nails.
              </p>
              <p>
                A new three-tab shingle with an intact sealant strip
                can usually ride out gusts in the 70 to 90 mph range.
                An eighteen-year-old shingle with a dried-out sealant
                strip fails at closer to 55 mph. That is the quiet
                reason older roofs across Ann Arbor and Ypsilanti will
                take disproportionate damage today even though the
                gust numbers look survivable on paper.
              </p>
              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Ridge caps and flashing go first
              </h3>
              <p>
                Ridge caps sit at the highest wind-exposure point on
                the entire structure. They fail before the field
                shingles in most storms. Step flashing around chimneys
                and sidewalls is the second failure zone because the
                sealant joint between the flashing and the masonry or
                siding ages faster than the roof itself. Expect to
                find leaks tomorrow morning under the chimney, along
                the ridge, and at the valleys before anywhere else.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — NEIGHBORHOODS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Local Context"
              title="Washtenaw County Neighborhood Risk Map"
              intro="The 88 mph forecast does not hit every roof the same way. Housing stock, tree cover, and ownership patterns change what fails."
            />
            <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-6">
              <Card title="Central Campus rentals">
                The blocks between Packard and Geddes are dense with
                century-old houses cut into four, six, or eight
                student units. Absentee ownership means deferred roof
                maintenance is common, and a 40-year-old shingle is
                not unusual. Tenant response tonight is interior
                triage only — landlord authorization controls
                everything else.
              </Card>
              <Card title="Old West Side and Burns Park">
                These historic districts have a concentration of slate
                and wood-shingle roofs on houses built between 1895
                and 1925. Slate is durable in wind but unforgiving
                when limb strikes punch individual tiles. Wood
                shingles on 1920s bungalows are lighter and more
                exposed to uplift failure.
              </Card>
              <Card title="Ann Arbor Hills and Barton Hills">
                Heavily treed lots with mature oak, maple, and ash
                canopies mean the dominant failure mode here is not
                shingle uplift but limb strike. A 400-pound branch
                landing on a ridge line punches through decking and
                into the attic. Check ceilings below any tree within
                reach of the house.
              </Card>
              <Card title="Ypsilanti and Ypsilanti Township">
                Pre-war bungalows along Cross Street and Michigan
                Avenue, plus large inventories of aged asphalt on
                post-war ranch homes near EMU, sit right in the
                forecast bullseye. Expect widespread shingle loss,
                especially on south and west facing slopes that
                catch the leading edge of the squall line.
              </Card>
              <Card title="Saline and Dexter">
                Outside the city grid the dominant concern shifts to
                outbuildings — pole barns, detached garages, and
                older timber-frame barns. A barn loses its roof as a
                single unit much more often than a house does,
                because the rafter-to-wall connection is typically
                weaker than a residential truss tie-down.
              </Card>
              <Card title="Chelsea and Manchester">
                Tree-dense rural subdivisions see driveway blockage
                and power lines tangled with limbs before they see
                structural damage. If a tree has taken out your
                service drop, DTE owns the line from the pole to the
                weatherhead. Anything on the house side is a
                licensed electrician call.
              </Card>
              <Card title="Pittsfield and Scio Township">
                Newer construction here means tighter building code
                and better tie-downs, so field shingles usually hold.
                The failure mode on newer homes is the aluminum
                soffit and fascia wrap — a 70 mph gust catches the
                drip edge and peels it like a banana. That exposes
                the roof deck to wind-driven rain even though the
                shingles themselves look intact from the ground.
              </Card>
              <Card title="Dexter Township lake properties">
                Portage and Base Line Lake homes face direct fetch
                with no windbreak to the west. Lakefront roofs take
                the full gust without any tree cover to slow it, and
                docks tear loose. Document the dock damage the same
                way you document the house.
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 3 — FIRST HOUR */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Immediate Response"
              title="The First Hour After the Warning Ends"
              intro="Work from the inside out. The roof waits until the wind drops."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                When the tornado warning expires, the temptation is
                to step outside and assess the roof. Do the opposite.
                The first hour is about people, pets, and interior
                water entry. Outside work can wait until gusts drop
                under 25 mph and the shingles are no longer a skating
                rink.
              </p>
              <p>
                Walk the top floor of the house with a flashlight and
                look at ceilings. A fresh roof leak shows up first as
                a darker spot on the drywall or as a faint water ring
                spreading from a light fixture. If you find one, pull
                the power to that circuit at the panel before you
                touch anything near the fixture. Water tracks along
                wire runs and a wet ceiling box is an energized
                ceiling box.
              </p>
              <p>
                Pull attic insulation away from any wet sheathing
                spot. Saturated fiberglass holds water against the
                drywall below for hours, and every hour of contact is
                a new square foot of ruined ceiling. Set buckets under
                drips, move furniture and electronics out of splash
                zones, and start photographing. Every photo you take
                in the first hour is evidence you cannot recreate.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — TARPING */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Temporary Stabilization"
              title="Temporary Tarping: DIY vs Contractor"
              intro="A badly installed tarp is a funnel, not a seal."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The right moment to tarp a roof is after the gusts
                drop below 20 mph, after the shingles are dry enough
                to walk without slipping, and after the forecast says
                no lightning for the next two hours. Those three
                conditions rule out most of today for most Washtenaw
                County addresses.
              </p>
              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                When a homeowner can do it safely
              </h3>
              <p>
                A one-story ranch, a punctured area under fifty
                square feet, a dry shingle surface, and a working
                ladder with a spotter. A heavy-mil blue tarp runs up
                over the ridge by at least three feet, secured with
                1x3 furring strips screwed through the tarp edge
                into sound decking — not into shingles, which will
                tear. The ridge overlap is what prevents water
                tracking under the tarp from the high side.
              </p>
              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                When it needs to be a contractor
              </h3>
              <p>
                Two stories or more, steep pitch, slate or wood
                shingle, any structural damage to the decking, a
                limb-strike hole with splintered rafters, or any
                condition that puts a homeowner within arm\u2019s reach
                of a wet roof edge. The math is simple. A fall from a
                second-story eave ends a weekend faster than any
                water loss ever will.
              </p>
              <p>
                A common mistake is tarping the wet spot instead of
                tarping the source. Water enters at the high point of
                damage and runs downhill under the shingles before
                emerging into the attic. A tarp stretched over the
                stain you can see from inside does nothing if the
                actual puncture is six feet uphill. This is why the
                wrong tarp creates a new leak path.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — ANN ARBOR CONSIDERATIONS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Local Rules"
              title="Ann Arbor-Specific Considerations"
              intro="U-M leases, historic districts, and city debris pickup all affect what you do next."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <h3 className="text-[#222222] text-xl font-semibold mb-2">
                U-M area rental lease responsibilities
              </h3>
              <p>
                Standard leases from the major campus-area property
                management companies put structural repair and roof
                work on the owner, not the tenant. That means a
                student renter cannot legally authorize a contractor
                to do anything beyond immediate emergency
                stabilization. Call the landlord first. Text the
                landlord second. Email the landlord third. Build the
                paper trail so that response time is documented.
              </p>
              <h3 className="text-[#222222] text-xl font-semibold mt-6 mb-2">
                Historic district emergency repair rules
              </h3>
              <p>
                Ann Arbor has five locally designated historic
                districts including Old West Side, Division Street,
                and parts of Burns Park. Emergency stabilization
                work to stop active water intrusion is permitted
                without prior Historic District Commission review.
                Permanent repairs to any visible roof surface are
                not. Photograph the temporary work, keep the receipts,
                and call the city planning office the next business
                day.
              </p>
              <h3 className="text-[#222222] text-xl font-semibold mt-6 mb-2">
                City debris pickup and brush
              </h3>
              <p>
                Ann Arbor runs a storm-debris brush pickup program
                that activates after declared wind events. Brush is
                stacked at the curb with cut ends facing the street,
                not bagged. Larger limbs and whole trees are a
                separate haul-away call. Ypsilanti, Saline, and the
                townships have their own programs with different
                rules — check the municipal website for your
                address before you drag anything to the curb.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — TIMELINE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Why Speed Matters"
              title="Roof Leak to Water Damage Timeline"
              intro="The clock starts the moment water enters the attic."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Hour 0 to 6.</strong> Water enters through the
                damaged area and soaks the insulation and the top
                side of the ceiling drywall below. Staining is not yet
                visible from the living space.
              </p>
              <p>
                <strong>Hour 6 to 24.</strong> Staining appears on
                ceilings. Wet insulation begins compressing under its
                own weight and loses most of its thermal value.
                Drywall seams near the wet area begin to sag.
              </p>
              <p>
                <strong>Hour 24 to 48.</strong> Sheathing moisture
                content climbs toward the fiber saturation point.
                Nail plates on trusses begin to corrode at the
                contact surface. A bulging ceiling becomes possible.
              </p>
              <p>
                <strong>Hour 48 to 72.</strong> The commonly cited
                mold window opens. In a warm April attic with sun
                load on the roof deck, visible microbial growth can
                appear on wet wood within three days. This is why a
                roof leak in April should not wait a week for a
                contractor. Our
                {' '}<a
                  href="/resources/first-24-hours-after-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  first 24 hours after water damage checklist
                </a>
                {' '}covers the parallel interior steps in detail.
              </p>
              <p>
                The longer a leak sits untriaged, the more of the
                eventual scope shifts from a drying project into a
                demolition and reconstruction project. Catching it
                at hour twelve costs a fraction of catching it at
                hour seventy-two.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — DISPATCH NOTE */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Honest Note on Dispatch"
              title="Where Provail Actually Comes From"
            />
            <div className="text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Provail Restoration of Bloomfield is headquartered in
                Oakland County, not Washtenaw. Our main office is at
                4060 W Maple Rd in Bloomfield Township, which is
                roughly forty-five minutes from downtown Ann Arbor
                on a normal day and longer when a storm has trees
                down on M-14 and US-23. We think it matters to say
                that plainly rather than pretend we have a storefront
                on Main Street that we do not have.
              </p>
              <p>
                For Washtenaw County events we dispatch directly from
                Bloomfield when drive time works, and we coordinate
                with vetted local subcontractors for immediate
                stabilization when it does not. The dispatcher on the
                phone will tell you straight which option fits your
                address and your timeline. Read our approach to{' '}
                <a
                  href="/storm-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  storm damage restoration
                </a>
                {' '}and{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>
                {' '}for the service scope, and our{' '}
                <a
                  href="/resources/document-water-damage-for-insurance"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  insurance documentation guide
                </a>
                {' '}for what to capture before anyone arrives.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Washtenaw Wind Damage FAQ"
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

        {/* DISCLAIMER */}
        <section className="bg-white" style={{ padding: '32px 0 64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{
                borderRadius: '20px',
                backgroundColor: 'rgba(255,56,92,0.06)',
                border: '1px solid rgba(255,56,92,0.2)',
              }}
            >
              <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
                <strong>Not legal, medical, or insurance advice.</strong>{' '}
                This page is educational and describes general
                practices for responding to storm and wind damage in
                Washtenaw County. For questions about your specific
                policy, the legal relationship between you and your
                carrier, or any health concern related to a damaged
                structure, contact a licensed professional. Provail
                Restoration of Bloomfield is a restoration contractor
                and does not provide legal, insurance, public
                adjusting, or medical services.
              </p>
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
              Washtenaw County roof leak or wind damage right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>
              . Provail Restoration of Bloomfield is headquartered in
              Oakland County and is dispatching into Washtenaw for the
              April 15 event, coordinating with vetted local partners
              for immediate stabilization when drive time won&rsquo;t work.
              The dispatcher will tell you straight whether our own
              crew or a closer partner is the right call for your
              address.
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
