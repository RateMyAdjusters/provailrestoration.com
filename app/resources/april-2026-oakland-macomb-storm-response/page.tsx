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
  title: 'April 15, 2026 Oakland County Storm Damage Guide (Macomb Companion)',
  description:
    'Oakland storm damage April 2026: call now for 24/7 roof leak and wind damage response across Bloomfield, Birmingham, Royal Oak, Troy, Rochester.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/april-2026-oakland-macomb-storm-response',
  },
  openGraph: {
    title: 'April 15, 2026 Oakland County Storm Damage Guide',
    description:
      'Active April 15, 2026 severe storm in Oakland County. Roof leak and wind damage response; see companion Macomb County guide for east-side cities.',
    url: 'https://provailrestoration.com/resources/april-2026-oakland-macomb-storm-response',
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
    q: 'A tree fell on my car and clipped the house — which insurance policy pays for what?',
    a: 'Vehicle damage generally falls under the comprehensive portion of your auto policy, while damage to the house and anything bolted to it (gutters, siding, roof) falls under the dwelling portion of your homeowners policy. Each carrier opens its own claim with its own adjuster and its own deductible, so the same tree can produce two separate files. Photograph the tree in place, across both the car and the structure, before anything is moved or cut. This is general information only and is not legal or insurance advice.',
  },
  {
    q: 'The power has been out for eight hours and my fridge is warm. Is food spoilage covered?',
    a: 'Many Michigan homeowners policies include a small sub-limit for refrigerated food spoilage after an extended outage, typically somewhere in the few-hundred-dollar range, and the trigger is usually an outage tied to a covered peril rather than a planned shutoff. The specifics live in your policy language and endorsements. Call your agent with your policy number in hand and ask them directly. Not legal or insurance advice.',
  },
  {
    q: 'How long until an adjuster actually shows up after a regional storm like this?',
    a: 'After a widespread wind event, field adjuster schedules in Oakland County can stretch from a few days to two weeks depending on claim volume. Catastrophe teams are often brought in from out of state. You do not have to wait for the adjuster to begin mitigation — most policies actually require you to prevent further damage, which is why same-day tarping and water extraction are expected and normal.',
  },
  {
    q: 'Can I tarp the roof myself tonight before the next rain band hits?',
    a: 'A small tarp over a single penetration is sometimes a reasonable temporary measure if the roof pitch is gentle, the tarp can be secured to sound decking, and you are not working in the wind or rain. A steep roof, a night tarp, or a wet roof is a different story and puts people in the hospital every storm season. When in doubt, stay off the roof, catch interior drips in buckets, and call a crew with fall protection.',
  },
  {
    q: 'My basement took on water during the storm. Is that wind damage or flood?',
    a: 'Groundwater entering a basement through the walls or floor is typically treated as flood, which is a separate peril from wind and usually needs a separate flood policy. Water that entered through a wind-opened roof or a broken window, then ran down into the basement, is usually a wind loss. The cause of entry is what the adjuster will focus on. Document the full water path — where it came in, where it ended up. Not legal or insurance advice.',
  },
  {
    q: 'My roof has missing shingles but the ceiling inside looks fine. Do I still need a contractor?',
    a: 'Yes, sooner rather than later. Shingles do not have to leak immediately to have failed. Wind-lifted shingles break the water shedding layer and the next rain event is usually when the ceiling stain shows up. A restoration contractor can dry what is already wet in the deck and attic, and a roofer can handle the exterior repair. Acting inside a few days almost always beats waiting for the leak to show.',
  },
  {
    q: 'Do I call a roofer or a restoration contractor first?',
    a: 'If water is coming into the home right now, call a restoration contractor first. They stabilize the interior, extract water, tarp the opening, and start drying equipment before secondary damage sets in. The roofer handles the permanent exterior repair once the weather window opens and the scope is understood. Both trades end up on the job — the order matters.',
  },
  {
    q: 'How fast can Provail Restoration of Bloomfield get a crew to my house tonight?',
    a: `We are dispatching across Oakland County around the clock during this storm event (see our companion Macomb County guide for east-side addresses). Call ${PHONE} and a dispatcher will collect the address, the nature of the damage, and an arrival window. Rapid-response crews are staged for roof tarping, water extraction, and drying equipment set.`,
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'April 15, 2026 Severe Storm Hits Oakland County: Roof Leak and Wind Damage Response',
  description:
    'Oakland storm damage April 2026 response guide covering roof leak, wind damage, and basement flooding across Oakland County cities. Macomb companion guide linked.',
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
  about: { '@type': 'Thing', name: 'Wind damage' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/april-2026-oakland-macomb-storm-response',
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
      name: 'April 15 2026 Storm',
      item:
        'https://provailrestoration.com/resources/april-2026-oakland-macomb-storm-response',
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

function CityCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="bg-white p-7"
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

export default function AprilStormResponsePage() {
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
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '48px' }}
        >
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
                <span>Active Storm Response</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Oakland County, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[920px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              April 15, 2026 Severe Storm Hits Oakland County: Roof Leak and Wind Damage Response (Macomb Companion Guide)
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[760px] mx-auto mb-6 leading-relaxed">
              Oakland storm damage April 2026 response from Provail Restoration of Bloomfield. Rapid roof tarping, water extraction, and drying across Oakland County, 24/7. Macomb County residents: see our companion guide linked below.
            </p>
            <p className="text-[#6a6a6a] text-sm italic max-w-[680px] mx-auto mb-10">
              Educational only. Not legal or insurance advice — call your licensed agent or carrier for questions about coverage.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* FRESHNESS CALLOUT */}
        <section className="bg-white" style={{ paddingBottom: '48px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-6"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(255,56,92,0.08)',
                border: '1px solid rgba(255,56,92,0.25)',
              }}
            >
              <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
                <strong>UPDATED APRIL 15, 2026 — active storm event.</strong>{' '}
                Severe thunderstorm warnings are active across Oakland
                County with expected peak wind gusts of 50 to 70 mph and
                isolated cells producing 80+ mph bursts. A separate
                tornado warning has been issued for Washtenaw County
                with 88 mph peak gusts — see our{' '}
                <a
                  href="/resources/ann-arbor-88mph-wind-storm-damage-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Ann Arbor 88 MPH Wind Guide
                </a>{' '}
                for that response. This page is being updated through
                the event.
              </p>
            </div>
          </div>
        </section>

        {/* LEAD */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              If you are dealing with Oakland storm damage April 2026,
              the short version is this: stop the water coming in, photograph
              the scene, and call a 24/7 restoration crew before the next
              rain band arrives. The storm front rolling through SE Michigan
              this afternoon is the largest wind event the region has seen
              this spring, and the first 12 hours set the size of the
              eventual loss.
            </p>
            <p>
              Winds at Detroit Metro have already clocked sustained 45 mph
              with gusts into the mid-60s. A radar-indicated tornado is on
              the ground in Washtenaw County, and the line is tracking
              northeast across Oakland into Macomb. Power outages are
              climbing fast. Tree calls are coming in from Birmingham down
              through New Haven.
            </p>
            <p>
              This page exists to give homeowners a plain-English
              walk-through of what to do tonight, which city-specific
              failure patterns we are watching, and when to call a{' '}
              <a
                href="/storm-damage-restoration"
                className="text-[#ff385c] font-semibold no-underline"
              >
                storm damage restoration crew
              </a>{' '}
              versus a roofer. If you want the phone call version right
              now, dial{' '}
              <a
                href={PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {PHONE}
              </a>
              .
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{
                borderRadius: '20px',
                backgroundColor: '#f7f7f7',
              }}
            >
              <h2
                className="text-[#222222] text-xl font-semibold mb-4"
                style={{ letterSpacing: '-0.44px' }}
              >
                Key takeaways
              </h2>
              <ul className="text-[#3c3c3c] text-[16px] leading-[1.75] list-disc pl-5 space-y-2 m-0">
                <li>
                  Peak wind gusts of 50 to 70 mph are forecast across
                  Oakland County, with isolated 80+ mph cells and a
                  separate tornado warning in Washtenaw.
                </li>
                <li>
                  The first two hours after the wind stops are the highest
                  leverage — stop water entry, catch interior drips, and
                  document before you touch anything.
                </li>
                <li>
                  Wind damage and flood damage are two separate perils on
                  most homeowners policies and usually carry separate
                  deductibles.
                </li>
                <li>
                  Restoration contractors stabilize the interior first;
                  roofers handle the permanent exterior repair second.
                </li>
                <li>
                  Provail Restoration of Bloomfield is dispatching 24/7 across
                  Oakland County. Call {PHONE}.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FIRST 2 HOURS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Right Now"
              title="The First 2 Hours After the Wind Stops"
              intro="What to do before the next rain band hits. People first, property second."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Step outside only after the line has cleared your area.
                Check for downed power lines before anything else. A line
                touching wet grass energizes a wide radius, and the wire is
                often invisible in a pile of branches. If you see one, stay
                back 35 feet and call DTE or Consumers from inside.
              </p>
              <p>
                Walk the perimeter. Look up at the roof from the ground —
                missing shingles show up as dark patches against the
                surrounding field. Look at the soffits, the fascia, the
                gutters, and the ridge. Then look down. Fence panels,
                siding sheets, and tree limbs on the lawn tell you how hard
                the wind hit.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Tarping rules
              </h3>
              <p>
                Do not climb a wet roof at night in a windstorm. That is
                the rule that keeps homeowners out of the ER. If water is
                actively coming into the house from above, the right move
                is to catch the drip in a bucket, cut a small relief hole
                in the ceiling below a bulging drywall pocket, and wait
                for a crew with fall protection and a proper tarp kit.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Interior water mitigation
              </h3>
              <p>
                Move furniture, rugs, electronics, and photos out from
                under active drip points. Lay down towels or a wet-vac if
                you have one. Pull up any small area rugs that are getting
                soaked — wet carpet pad is the single biggest source of
                secondary mold growth we see after wind-driven roof leaks.
                Photograph everything in place before you move it.
              </p>
              <p>
                If a ceiling is bulging from trapped water, clear the
                room, shut off the circuit, and call a crew — don&rsquo;t
                puncture it yourself unless you have a specific plan for
                where the water is going. Full walkthrough on our{' '}
                <a
                  href="/resources/roof-leak-after-storm-emergency-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  roof leak emergency guide
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* WHY ROOF LEAKS ARE WORSE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="What You Cannot See"
              title="Why Wind-Driven Roof Leaks Are Worse Than They Look"
              intro="A wet ceiling stain is the tip of an iceberg that runs along the rafters."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Wind-driven rain does not behave like a dripping faucet.
                It is pushed sideways under shingles, across the roof
                deck, and into the attic through nail holes you never
                knew existed. Once it is inside the deck, it runs along
                the top of the rafters until it finds a drywall seam, a
                recessed light, or a return-air register.
              </p>
              <p>
                The stain in the bedroom ceiling is often three or four
                feet away from the actual point of water entry. A{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                crew uses moisture meters and a thermal camera to trace
                the wet trail back to the source. Without that mapping,
                a cosmetic patch on the stain just buys you a bigger
                problem in six weeks.
              </p>
              <p>
                The other hidden cost is insulation. Blown-in fiberglass
                and cellulose lose most of their R-value the moment they
                get wet, and they do not recover. If the attic above a
                wet ceiling is not inspected and the wet insulation is
                not removed, the homeowner eats the heat bill all winter
                and the mold bill the following spring.
              </p>
            </div>
          </div>
        </section>

        {/* CITY SECTIONS — OAKLAND */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Oakland County"
              title="What We Are Watching City by City"
              intro="Each community has its own failure pattern. Here is what dispatch is tracking tonight."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <CityCard title="Bloomfield Township">
                Tudor and colonial century homes along Long Lake and
                Lahser sit in mature tree canopy that has been there
                since before most of the roofs. Limb strikes on slate
                and cedar roofs are the concern tonight, along with
                basement seepage into homes draining toward the Rouge
                River watershed. Our{' '}
                <a
                  href="/bloomfield"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Bloomfield water damage crew
                </a>{' '}
                is staged at the Maple Road office.
              </CityCard>
              <CityCard title="Birmingham">
                The homes ringing Quarton Lake sit in a bowl that
                historically takes on basement water any time a storm
                delivers an inch in under an hour. Walkout basements on
                Oak and Chesterfield are particularly exposed. Power
                loss mid-storm can take a sump pump offline at exactly
                the wrong moment. Battery backups and secondary pumps
                earn their keep tonight. See our{' '}
                <a
                  href="/birmingham-mi-water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Birmingham water damage page
                </a>
                .
              </CityCard>
              <CityCard title="Royal Oak">
                The Red Run Drain is a combined sewer, which means a
                heavy enough downpour can push sewer water back up
                through basement floor drains. Homes on the older grid
                south of 13 Mile are the usual suspects. If the drain
                gurgles during the storm, get anything on the basement
                floor up on blocks immediately and call us through the{' '}
                <a
                  href="/royal-oak-mi-water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Royal Oak water damage line
                </a>
                .
              </CityCard>
              <CityCard title="Troy">
                The Big Beaver office corridor carries the bulk of the
                commercial loss risk. Flat roofs with ponding, large
                single-pane storefront glazing, and server rooms that
                will not tolerate a wet drop ceiling are the three
                calls we see after every line like this. Property
                managers should check our{' '}
                <a
                  href="/troy-mi-water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Troy water damage response
                </a>{' '}
                before the morning walkthrough.
              </CityCard>
              <CityCard title="Rochester">
                The historic downtown district along Main has masonry
                buildings with parapet walls that leak at the cap
                joints when wind drives rain sideways. Residential
                losses cluster along Paint Creek where mature trees
                and older cedar shake roofs sit in the floodplain.
                Limb damage to upper-story windows is the risk tonight.
              </CityCard>
              <CityCard title="Rochester Hills">
                The treed subdivisions between Adams and Rochester Road
                are where we stage for limb-strike roof penetrations.
                A 50-foot oak limb through a ranch roof is a single
                phone call that ties up a crew for a week. If your
                attic is dripping, put buckets down and call before
                the next cell arrives.
              </CityCard>
              <CityCard title="Shelby Township (newer luxury west)">
                The newer luxury subdivisions west of Van Dyke have
                the best construction in the county but the biggest
                exposed elevations. Two-story great room windows and
                tall covered entries catch wind at full force. Soffit
                blow-out is the damage pattern we see first, and the
                water follows the soffit gap into the wall cavity
                before the homeowner knows the soffit is gone.
              </CityCard>
              <CityCard title="Shelby Township (rural east)">
                East of Van Dyke, the rural parcels run toward
                pole barns, detached garages, and horse outbuildings.
                These structures get flattened by straight-line winds
                above 60 mph, and the losses are rarely covered the
                way the main dwelling is. Document the outbuilding
                scene before any cleanup begins.
              </CityCard>
            </div>
          </div>
        </section>

        {/* MACOMB COMPANION CALLOUT */}
        <section className="bg-white" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{
                borderRadius: '20px',
                backgroundColor: '#f7f7f7',
              }}
            >
              <p className="text-[#3c3c3c] text-[16px] leading-[1.75] m-0">
                For Macomb County-specific impacts (Sterling Heights,
                Clinton Township, Mount Clemens, Shelby, Utica, Macomb
                Township, and New Haven), see our companion post:{' '}
                <a
                  href="/resources/macomb-county-april-2026-storm-damage-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Macomb County Storm Damage April 15, 2026 Guide
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* INSURANCE KICKOFF */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Claim Basics"
              title="Insurance Kickoff for Storm Losses"
              intro="A plain-English walk-through of the first phone call. Not legal or insurance advice — call your agent with specifics."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Wind and flood are two different perils on almost every
                Michigan homeowners policy. Wind damage from a severe
                thunderstorm — roof shingles lifted, siding blown off,
                windows broken by debris, limb strikes — is generally
                covered under the dwelling portion of a standard policy.
                Flood, which is typically defined as surface water rising
                from the outside, is not covered under most standard
                homeowners policies and usually requires a separate
                flood insurance policy.
              </p>
              <p>
                The distinction matters tonight because a lot of losses
                on this storm are going to be a mix of both. Water that
                came through a wind-opened roof is wind damage. Water
                that came up through the basement floor drain is not.
                When you describe the loss to the first-notice agent,
                describe what you actually saw — where the water came
                in, where it went, what time. Let the carrier sort out
                the peril classification.
              </p>
              <p>
                Many Michigan policies also carry a separate wind
                deductible that is different from and usually higher than
                the all-perils deductible. Ask about it during the first
                call. If you see language about a percentage-of-dwelling
                deductible on the declarations page, that is the wind
                deductible and it can be substantial.
              </p>
              <p>
                Open the claim through your agent or the 24-hour claims
                line on your insurance card. Document the scene. Begin
                mitigation — most policies actually require you to take
                reasonable steps to prevent further damage, which is
                exactly what a{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  basement flood cleanup
                </a>{' '}
                crew is doing when they extract water and set drying
                equipment. None of this is legal or insurance advice;
                call your agent for questions specific to your policy.
              </p>
            </div>
          </div>
        </section>

        {/* RESTORATION VS ROOFER */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Who Handles What"
              title="Restoration Contractor vs. Roofer"
              intro="Both trades are on most wind-damage jobs. The order is what matters."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A restoration contractor stabilizes the interior. That
                means water extraction, controlled demolition of
                non-salvageable wet materials, moisture mapping, air
                movers and dehumidifiers, content manipulation, and a
                drying log that documents the job for the carrier. Most
                restoration companies also do emergency tarping as a
                board-up service to stop additional water entry until
                the roof can be permanently repaired.
              </p>
              <p>
                A roofer handles the permanent exterior repair — shingle
                replacement, underlayment, flashing, vent boots,
                decking. Good roofers work a storm call list for weeks
                after an event like tonight, and the best ones do not
                start exterior work until the weather window holds.
                That is why the restoration contractor usually gets
                there first and why tarping exists.
              </p>
              <p>
                The wrong order — hiring a roofer first, then a
                restoration contractor two weeks later — is how
                homeowners end up with mold in the attic insulation and
                a drywall scope that is three times what it should
                have been. Stabilize the inside first. Rebuild the
                outside second. Both trades work together.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="April 15 Storm FAQ"
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
        <section className="bg-white" style={{ padding: '64px 0' }}>
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
                <strong>Not legal or insurance advice.</strong> This page
                is general educational information written during an
                active storm event. For questions about your specific
                policy, coverage, deductibles, or any claim-related
                decision, contact a licensed professional — your
                insurance agent, your carrier, or an attorney who handles
                insurance matters. Provail Restoration of Bloomfield is
                a restoration contractor. We do not provide legal,
                insurance, or medical advice, and we do not handle your
                claim on your behalf.
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
              Roof leaking right now? Basement taking on water?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a
                href={PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {PHONE}
              </a>{' '}
              for 24/7 dispatch across Oakland County during the April 15, 2026 storm event. Provail Restoration of Bloomfield has crews staged for roof tarping, water extraction, and emergency drying tonight.
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
