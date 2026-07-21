import type { Metadata } from 'next'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
} from '../../_components/site-chrome'

const MACOMB_BRAND = 'Provail Restoration of Macomb Township'
const MACOMB_PHONE = '(586) 207-9091'
const MACOMB_PHONE_HREF = 'tel:+15862079091'

export const metadata: Metadata = {
  title: 'Macomb County Storm Damage April 15 2026: Response Guide',
  description:
    'Macomb County storm damage response for April 15 2026. 24/7 help for Clinton Township, Sterling Heights, Mt Clemens, Shelby, Utica, New Haven, Macomb Twp.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/macomb-county-april-2026-storm-damage-guide',
  },
  openGraph: {
    title: 'Macomb County Storm Damage April 15 2026: Response Guide',
    description:
      'Step-by-step response guide for the April 15, 2026 Macomb County storm. Roof leaks, wind damage, tree strikes, flooding. 24/7 dispatch.',
    url: 'https://provailrestoration.com/resources/macomb-county-april-2026-storm-damage-guide',
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
    q: 'Who picks up storm debris in Macomb County after the April 15 storm?',
    a: 'Debris pickup in Macomb County is handled at the municipal level, not by the county, so the answer depends on where you live. Clinton Township, Sterling Heights, and Shelby Township typically announce special brush and limb pickups through their public-works departments within a few days of a major wind event. Utica, Mount Clemens, and the smaller cities tend to piggyback on their regular yard-waste route with expanded volume allowances. Check your city or township website for the specific drop-dates before dragging anything to the curb, and keep tree debris separate from construction debris from your own roof or siding — they go in different streams.',
  },
  {
    q: 'My condo or HOA roof is leaking — do I file or does the association?',
    a: 'Most Macomb condo and HOA master policies cover the building envelope (roof, exterior walls, common framing) while your individual unit-owner HO-6 policy covers interior finishes, personal property, and loss-of-use. That means a leaking condo roof is almost always a two-claim situation: the association opens a master-policy claim on the roof itself, and you open an HO-6 claim on the damaged ceiling, flooring, and contents inside your unit. Get in touch with your property manager the same day you discover the leak, and start your own documentation regardless of what the association is doing.',
  },
  {
    q: 'Is Clinton River flooding covered by my homeowners policy or do I need NFIP?',
    a: 'Rising water from the Clinton River, Red Run Drain, or any other surface-water source is not covered by a standard Michigan homeowners policy. That kind of loss falls under the National Flood Insurance Program (NFIP) or a private flood policy, and both have to be purchased separately and in advance — typically with a 30-day waiting period before coverage starts. Wind-driven rain pushed through a damaged roof or a broken window is usually a homeowners peril, not a flood peril. The cause-of-loss distinction matters and your adjuster will ask about it.',
  },
  {
    q: 'My Sterling Heights HOA-managed condo roof is leaking — how long until the association actually coordinates a repair?',
    a: 'Condo and HOA roof repair timelines in Sterling Heights after a major wind event generally run longer than individual homeowner calls, because the association has to route the loss through its property management company, open a master-policy claim, wait on an insurance adjuster assignment, and usually collect at least one contractor bid before authorizing work. Two to four weeks before a permanent repair starts is not unusual on a multi-building complex, and emergency tarping is often the only thing that happens in the first 72 hours. As a unit owner you can help move things along by reporting the leak to the property manager in writing the same day, photographing every affected interior surface for your own HO-6 claim, and keeping any moisture-damaged items in place until your own adjuster has seen them. The master-policy claim on the roof and your unit-owner claim on the interior run on completely separate tracks and separate deductibles.',
  },
  {
    q: 'Was the April 15 storm a tornado or a thunderstorm line, and does it affect my claim?',
    a: 'From a carrier standpoint the coding matters less than homeowners expect. Wind damage from a confirmed tornado, a straight-line downburst, or a severe thunderstorm gust is usually handled under the same wind peril in a Michigan homeowners policy. What you want to avoid is guessing about the cause on your claim call — describe what you saw and heard, let the adjuster and the National Weather Service determine the classification, and let the damage speak for itself in the photos.',
  },
  {
    q: 'Is sewer backup from an overwhelmed combined sewer covered?',
    a: 'Sewer and drain backup is a separate endorsement on most Michigan homeowners policies, not a default coverage. If you added a sewer backup rider when you bought or renewed the policy, you likely have some limit for cleanup and damaged contents — commonly $5,000 to $25,000 depending on what you elected. If you never added the endorsement, the backup itself will generally be excluded even when the underlying storm is a covered event. Check your declarations page for the specific wording.',
  },
  {
    q: 'How quickly can a crew reach my address after the storm?',
    a: `During a widespread event like the April 15, 2026 line, dispatch windows are driven by call volume and by how many crews are already committed to prior losses. The Macomb branch at ${MACOMB_PHONE} handles the Clinton Township, Sterling Heights, Mount Clemens, Shelby, Utica, and Macomb Township service area; the Bloomfield HQ at ${PHONE} covers overflow and the Oakland County side. Both lines are staffed around the clock and the dispatcher will give you a realistic window rather than an optimistic one.`,
  },
  {
    q: 'Can I tarp my own roof before a crew arrives?',
    a: 'Temporary tarping is reasonable for a ground-level or single-story slope in dry conditions if you have a helper, a real ladder, and no active lightning. Anything steeper than a 6/12 pitch, anything two stories up, anything wet, and anything on a commercial flat roof should wait for a crew. A fall from a residential roof is the most common serious injury we see in the 24 hours after a major Macomb County storm, and the tarp itself is almost never worth the risk.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Macomb County Storm Damage April 15, 2026: Roof Leak & Wind Response Guide',
  description:
    'Response guide for the April 15, 2026 Macomb County storm — roof leaks, wind damage, tree strikes, and flooding across Clinton Township, Sterling Heights, Mount Clemens, Shelby, Utica, New Haven, and Macomb Township.',
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
      'https://provailrestoration.com/resources/macomb-county-april-2026-storm-damage-guide',
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
      name: 'Macomb County Storm Guide',
      item: 'https://provailrestoration.com/resources/macomb-county-april-2026-storm-damage-guide',
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

function CityBlock({
  name,
  children,
}: {
  name: string
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
        {name}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.7]">{children}</div>
    </div>
  )
}

export default function MacombCountyAprilStormPage() {
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
                <span>Storm Response Guide</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Macomb County, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[920px] mx-auto"
              style={{
                fontSize: 'clamp(2rem, 4.6vw, 3.25rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Macomb County Storm Damage April 15, 2026: Roof Leak &amp; Wind
              Response for Clinton Township, Sterling Heights, Mt Clemens,
              Shelby, Utica, New Haven
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[760px] mx-auto mb-6 leading-relaxed">
              A severe thunderstorm line crossed Macomb County early on
              April 15, 2026, dropping trees, peeling shingles, and pushing
              water into homes from Utica to New Haven. This guide walks
              through the Macomb County storm damage patterns we are seeing
              right now and what homeowners should do in the next few hours.
            </p>
            <p className="text-[#6a6a6a] text-sm italic max-w-[680px] mx-auto mb-10">
              Educational information only. Not legal, insurance, or medical
              advice. For questions about your specific policy, contact a
              licensed insurance professional.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* TL;DR */}
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
                TL;DR — the short version
              </h2>
              <ol className="text-[#3c3c3c] text-[16px] leading-[1.75] list-decimal pl-5 space-y-2 m-0">
                <li>People first. Stay clear of downed lines and sagging ceilings.</li>
                <li>Photograph every affected room and every exterior slope.</li>
                <li>Slow active leaks with buckets and plastic sheeting from the interior.</li>
                <li>Call a licensed restoration contractor before tearing anything out.</li>
                <li>Open your homeowners claim once the scene is stable.</li>
                <li>
                  Macomb calls:{' '}
                  <a
                    href={MACOMB_PHONE_HREF}
                    className="text-[#ff385c] font-semibold no-underline"
                  >
                    {MACOMB_PHONE}
                  </a>
                  . Oakland overflow:{' '}
                  <a
                    href={PHONE_HREF}
                    className="text-[#ff385c] font-semibold no-underline"
                  >
                    {PHONE}
                  </a>
                  .
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* WHAT WE'RE SEEING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="On the ground"
              title="What Macomb County homeowners are seeing right now"
              intro="Patterns from the first hours after the April 15, 2026 storm line crossed the county."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                An April thunderstorm line in southeast Michigan tends to do
                its damage in a narrow corridor rather than a broad sweep.
                The radar signatures this morning showed a bowed segment
                racing east-northeast across central Macomb County, with the
                highest measured gusts running from the Shelby and Utica
                area through Clinton Township and into the Mount Clemens
                basin before pushing on toward Lake St. Clair. Early call
                volume tracks that corridor closely.
              </p>
              <p>
                The damage profile is typical for a spring line — torn
                shingle tabs, lifted ridge caps, tree limbs through soffit
                and gutter, vinyl siding peeled off gable ends, privacy
                fence sections down, and water intrusion in the upper floor
                of two-story homes where the roof envelope was breached. In
                the lower-lying neighborhoods we are also seeing basement
                water from overwhelmed storm sewers, which is a separate
                peril from the wind damage and is worth documenting
                separately from the first minute.
              </p>
            </div>
          </div>
        </section>

        {/* STEP BY STEP */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="First response"
              title="Step-by-step first response after the storm"
              intro="What to do in order, from the moment it is safe to move through the house."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <h3 className="text-[#222222] text-xl font-semibold mt-4 mb-2">
                1. Confirm the house is safe to walk
              </h3>
              <p>
                Before anything else, check for downed lines across the
                driveway or yard, the smell of gas near a furnace or water
                heater, and visible ceiling sag in the rooms below any roof
                breach. A bulging drywall ceiling with trapped water above
                it can fail without much warning, and the first hour after
                a storm is when most homeowner injuries happen.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-6 mb-2">
                2. Stabilize active water intrusion from the inside
              </h3>
              <p>
                Slow the leak from inside rather than climbing on a wet
                roof. Move furniture and rugs out of the drip zone, set
                buckets or bins under active drips, and drape plastic
                sheet over electronics and bedding you want to save. If
                a ceiling is bulging from trapped water, clear the
                room, shut off the circuit, and call a crew &mdash; don&rsquo;t
                puncture it yourself unless you have a specific plan
                for where the water is going (full walkthrough on our{' '}
                <a
                  href="/resources/roof-leak-after-storm-emergency-guide"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  roof leak emergency guide
                </a>
                ).
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-6 mb-2">
                3. Document before you touch anything
              </h3>
              <p>
                Walk every affected room with your phone in video mode.
                Narrate as you go — what happened, when you first noticed
                it, which rooms are wet. Shoot each exterior slope from
                the ground, each affected soffit, each fallen limb, and
                each piece of downed fence. You want far more frames than
                you think you need. Photographs cost nothing and they
                carry the claim.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-6 mb-2">
                4. Open the homeowners claim and call a restoration crew
              </h3>
              <p>
                Once the scene is stable, call your carrier to open the
                claim and call a licensed restoration contractor to begin
                mitigation. The two calls are independent — you do not
                need the claim number to begin mitigation, and you should
                not wait days for an adjuster while water continues to do
                damage. Ask us about{' '}
                <a
                  href="/storm-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  storm damage restoration
                </a>{' '}
                and how mitigation runs in parallel with the claim.
              </p>
            </div>
          </div>
        </section>

        {/* CITY BLOCKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="By the city"
              title="What we are seeing in each Macomb community"
              intro="Damage profiles for the April 15 storm differ by neighborhood age, tree cover, and proximity to the Clinton River."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <CityBlock name="Clinton Township — clinton township roof leak calls concentrated north of 16 Mile">
                The old ranches north of 16 Mile — the ones built between
                roughly 1955 and 1968 with shallow roof pitches and
                original fascia board under the gutter run — took the
                brunt of the wind uplift on the west side of the township.
                We are seeing water stains appearing in hallway ceilings
                this morning in homes where the attic space was already
                marginal on ventilation. The newer subdivisions south of
                Metro Parkway are holding up better structurally, but the
                flat commercial roofs along the Gratiot corridor have
                membrane tears where ballast migrated in the gust front.
                Senior housing complexes along Garfield get priority
                response windows from our Macomb branch because relocation
                timelines for elderly residents are a different problem
                than a working-family roof call.
              </CityBlock>

              <CityBlock name="Sterling Heights — sterling heights wind damage across aging 1970s subdivisions">
                As the largest city in the county, Sterling Heights also
                carries the longest queue this morning. The 1970s and
                1980s subdivisions wrapped around Shelby Road, Dequindre,
                and Hayes have asphalt shingles in the third or fourth
                decade of service, and a 55 mph plus gust is exactly what
                finishes them. Three-tab shingle lift from a single gust
                line is the dominant call, and several Sterling Heights
                condo HOAs have already opened master-policy conversations
                with their property managers about full roof replacements
                rather than spot repairs. Unit owners should still open
                their own HO-6 claims for any interior ceiling staining
                regardless of what the association does next.
              </CityBlock>

              <CityBlock name="Mount Clemens — mount clemens storm calls centered on the Clinton River corridor">
                Mount Clemens sits in the belly of the Clinton River
                watershed and the oldest housing stock in the county
                clusters in the downtown blocks east of Gratiot. Century
                brick homes on Cass and Broadway handle wind better than
                any vinyl-clad ranch but they suffer more when rain blows
                sideways into aging wood window frames. The flood-prone
                streets near the river are a separate issue entirely — any
                standing water that rose from the ground rather than fell
                from the sky is an NFIP conversation, not a homeowners
                conversation. Document the water line on the wall before
                you pump anything out.
              </CityBlock>

              <CityBlock name="Shelby Township — shelby township storm damage heaviest on treed lots east of Van Dyke">
                Shelby splits into two almost-different towns on storm
                days. The newer luxury construction west of Van Dyke is
                holding up fine on the roof envelope side, but those
                deeply treed lots from 24 Mile out toward Stoney Creek
                Metropark took real tree strikes overnight. A mature oak
                through a master bedroom roof is a very different scope
                than a shingle lift, and the first call for those
                homeowners is often to a tree service for removal before
                we can even get tarp on the opening. Out in the eastern,
                more rural stretches, we are hearing about barn and
                outbuilding losses that are not always covered the same
                way the main house is.
              </CityBlock>

              <CityBlock name="Utica — historic downtown and Auburn Road corridor">
                Utica is small but distinctive. The older homes along
                Auburn Road and the blocks feeding into the historic
                downtown have the kind of steep gable roofs that shed
                wind well, so we are not seeing a lot of catastrophic
                roof loss inside the city limits. Where Utica is showing
                up in the call volume is on the commercial plaza roofs
                along Van Dyke — low-slope membranes with edge flashing
                that lifts in a sustained gust and leaves water tracking
                down the interior walls of storefronts by morning. Those
                are commercial claims with a different rhythm from
                residential.
              </CityBlock>

              <CityBlock name="New Haven — rural northeast Macomb, barns and long outages">
                New Haven sits out past the suburban ring, and the storm
                treated it more like a rural county than a Detroit suburb.
                The calls we are getting from out there are less about
                subdivision roofs and more about pole barns, machine
                sheds, and grain storage structures. Power restoration is
                also a slower conversation this far out, so anyone with a
                freezer full of food should start a loss list now and not
                wait until the lights come back to figure out what
                spoiled. DTE crews prioritize density, and rural feeders
                come back last.
              </CityBlock>

              <CityBlock name="Macomb Township — new construction along 23 to 26 Mile, vinyl peel at 60 mph">
                Macomb Township construction is young — most of it sits
                between the 23 Mile and 26 Mile corridor and most of it
                went up in the last fifteen years. Young siding and young
                shingles resist wind better than aged material, but the
                wide-open, newly-subdivided lots with young trees and few
                windbreaks see straight-line gusts at full strength. We
                are seeing vinyl siding peel off gable ends on two-story
                colonials where the gust pulled the nail hem, and tree
                strikes on the larger lots where mature trees were left
                standing from the original farmland. For Macomb Township
                homeowners specifically, the{' '}
                <a
                  href="/macomb-township-mi-water-damage-restoration-near-you"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Macomb Township water damage page
                </a>{' '}
                has a closer look at local response timelines.
              </CityBlock>

              <CityBlock name="Harrison Township — Lake St. Clair fetch and waterfront exposure">
                Harrison Township takes wind differently than the inland
                cities because Lake St. Clair gives it a long open fetch
                with nothing to slow the gust down. Waterfront homes along
                Jefferson and the Clinton River delta are seeing the kind
                of sideways-rain water intrusion that finds every gap in a
                sliding door frame. Boat damage at private docks is a
                separate watercraft policy question, not a homeowners
                question.
              </CityBlock>

              <CityBlock name="Chesterfield Township — new subdivisions meet older lakeshore">
                Chesterfield is a split profile. The newer subdivisions
                going up around 23 Mile and I-94 are brand-new construction
                and handled the wind well. The older lakeshore neighborhoods
                near Anchor Bay took more damage because the homes are
                older and the waterfront exposure is real. Anyone on the
                shore side should double-check whether any rising-water
                component was involved in their loss, because it changes
                which policy answers.
              </CityBlock>

              <CityBlock name="Richmond — edge of the county, barns and ag structures">
                Richmond sits at the very northeast corner of the county
                where Macomb blends into St. Clair. The calls out here are
                rural-ag in character — barn roofs, equipment sheds, and
                older farmhouses with century-old attic framing. Scope on
                these losses runs longer because materials and labor for
                barn-style structures do not move as fast as residential
                subdivision work. Patience with the timeline is the
                honest answer for Richmond homeowners this week.
              </CityBlock>
            </div>
          </div>
        </section>

        {/* FLOOD VS WIND */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="The cause-of-loss question"
              title="Clinton River flood versus wind peril — why the difference matters"
              intro="Two losses can look identical from the living room and be handled by completely different policies."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A Michigan homeowners policy generally covers wind as a
                named peril, which means wind-driven rain that entered
                through a storm-damaged roof or a broken window is part
                of the conversation. What a homeowners policy does not
                cover, almost without exception, is rising surface water
                — the Clinton River climbing over its banks, the Red Run
                Drain backing up into a neighborhood, or standing water
                from the storm sewer overwhelming a low point on a
                street. That is a flood peril and it is only covered if
                the homeowner purchased a separate NFIP policy or a
                private flood policy in advance.
              </p>
              <p>
                The practical implication for the April 15 storm is
                straightforward. Document the source of the water with
                photographs and with a written note to yourself about
                when and how you first saw it. Water staining that
                started at the ceiling and worked down tells a roof
                story. Water that came in under a door or up through a
                floor drain tells a different story. Adjusters read
                photographs better than they read arguments, and the
                cause-of-loss question is usually settled by evidence,
                not by opinion.
              </p>
              <p>
                If you are unsure which policy applies to your loss,
                contact your licensed insurance agent directly. We stay
                out of that conversation on purpose — a restoration
                contractor is not in a position to give legal or
                insurance advice, and we will not pretend otherwise.
              </p>
            </div>
          </div>
        </section>

        {/* TARP VS WAIT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Homeowner limits"
              title="When to tarp and when to wait"
              intro="Temporary tarping is a job with a narrow safe window."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The honest answer for most homeowners is: wait. A wet roof
                after a storm is one of the most dangerous surfaces on a
                residential property, and the injury rate for DIY tarping
                in the first 24 hours after a major wind event is the
                kind of statistic that keeps us conservative. If the slope
                is steeper than a gentle walk, if the roof is two stories
                up, if the deck is wet, or if there is any residual
                lightning in the area, the right call is to slow the leak
                from inside with buckets and plastic and let a crew handle
                the roof surface.
              </p>
              <p>
                The exception is a single-story low-pitch section in dry
                conditions with a helper and a real extension ladder.
                Even then, a tarp that is incorrectly anchored can do
                more damage than it prevents by giving the next gust a
                sail to lift. When in doubt, call{' '}
                <a
                  href={MACOMB_PHONE_HREF}
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  {MACOMB_PHONE}
                </a>{' '}
                and let a crew handle it.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON DAMAGE TYPES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="What we fix"
              title="Common damage types after a Macomb County storm"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Roof leaks from shingle uplift.</strong> The most
                common single call after a spring line. A single missing
                ridge cap over a finished bedroom can drop gallons of
                water into drywall within an hour of the rain starting,
                and the ceiling stain shows up long after the shingle
                itself is already gone.
              </p>
              <p>
                <strong>Siding blowouts on gable ends.</strong> Vinyl
                nail hems lose grip in sustained 55 mph plus gusts,
                especially on the exposed gable-end of a two-story home
                facing the wind direction. The panels peel in sheets
                rather than pieces.
              </p>
              <p>
                <strong>Tree and limb strikes.</strong> The dramatic
                calls. A mature oak or ash through a roof is a major
                structural event, and the scope usually involves a tree
                service, a framing carpenter, and a restoration crew
                working in sequence over several days.
              </p>
              <p>
                <strong>Downed power lines.</strong> Not a restoration
                contractor call, but worth naming. Stay clear, keep
                children and pets clear, and report the line to DTE
                immediately. A line on the ground is energized until a
                utility crew says otherwise.
              </p>
              <p>
                <strong>Sewer backup from storm overwhelm.</strong> The
                combined sewers in the older parts of the county cannot
                always keep up with a fast-moving line. Backup through a
                floor drain in a finished basement is handled under the
                sewer backup endorsement if the homeowner carries it,
                and mitigation starts with extraction and sanitization
                rather than drying. More detail on that specific scope
                lives on our{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  basement flood cleanup
                </a>{' '}
                page.
              </p>
              <p>
                <strong>Sump pump failure.</strong> When the power blinks
                and a sump pump loses its feed at the wrong moment, the
                pit fills faster than gravity can handle. The fix is a
                battery backup or a water-powered backup, and the
                scenario is covered in depth on our{' '}
                <a
                  href="/services/sump-pump-failure"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  sump pump failure
                </a>{' '}
                resource.
              </p>
            </div>
          </div>
        </section>

        {/* RELATED READING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2
              className="text-[#222222] text-xl font-semibold mb-4"
              style={{ letterSpacing: '-0.44px' }}
            >
              Related reading
            </h2>
            <ul className="text-[#3c3c3c] text-[16px] leading-[1.85] list-disc pl-5 m-0">
              <li>
                <a
                  href="/resources/first-24-hours-after-water-damage"
                  className="text-[#ff385c] no-underline"
                >
                  First 24 Hours After Water Damage — Michigan homeowner checklist
                </a>
              </li>
              <li>
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] no-underline"
                >
                  Water damage restoration services
                </a>
              </li>
              <li>
                <a
                  href="/storm-damage-restoration"
                  className="text-[#ff385c] no-underline"
                >
                  Storm damage restoration services
                </a>
              </li>
              <li>
                <a
                  href="/macomb-township-mi-water-damage-restoration-near-you"
                  className="text-[#ff385c] no-underline"
                >
                  Macomb Township water damage response page
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="April 15 Macomb storm FAQ"
            />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-[#f7f7f7] p-6 group"
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

        {/* DISCLAIMERS */}
        <section className="bg-white" style={{ padding: '48px 0 64px' }}>
          <div className="max-w-[820px] mx-auto px-6 space-y-4">
            <div
              className="p-6"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(255,56,92,0.06)',
                border: '1px solid rgba(255,56,92,0.2)',
              }}
            >
              <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
                <strong>Not legal or insurance advice.</strong> The content on
                this page is educational and general. Questions about your
                specific policy, deductibles, limits, or coverage should go
                to your licensed insurance agent or carrier. {BIZ_NAME} and{' '}
                {MACOMB_BRAND} are restoration contractors, not public
                adjusters, not attorneys, and not insurance professionals.
              </p>
            </div>
            <div
              className="p-6"
              style={{
                borderRadius: '16px',
                backgroundColor: '#f7f7f7',
              }}
            >
              <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
                <strong>Safety disclaimer.</strong> Downed power lines, gas
                leaks, structural collapse, and wet electrical contact are
                life-safety hazards. If you see any of those, leave the
                area and call 911 or your utility before anything else. Do
                not climb a wet or storm-damaged roof.
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
              Storm damage in your home right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-6">
              For Macomb County addresses — Clinton Township, Sterling
              Heights, Mount Clemens, Shelby, Utica, New Haven, Macomb
              Township, Harrison Township, Chesterfield, Richmond —{' '}
              {MACOMB_BRAND} dispatches 24/7 at{' '}
              <a
                href={MACOMB_PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {MACOMB_PHONE}
              </a>
              .
            </p>
            <p className="text-[#6a6a6a] text-lg mb-8">
              For Oakland County overflow and the Bloomfield side, call{' '}
              {BIZ_NAME} at{' '}
              <a
                href={PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {PHONE}
              </a>
              .
            </p>
            <HeroCTA />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
