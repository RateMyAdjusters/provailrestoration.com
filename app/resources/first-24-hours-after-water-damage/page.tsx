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
    'First 24 Hours After Water Damage: Michigan Homeowner Checklist | Provail Restoration of Bloomfield',
  description:
    'A step-by-step Michigan homeowner checklist for the first 24 hours after water damage — safety, shutoffs, documentation, and restoration timeline. Not legal or insurance advice.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/first-24-hours-after-water-damage',
  },
  openGraph: {
    title:
      'First 24 Hours After Water Damage: Michigan Homeowner Checklist | Provail Restoration of Bloomfield',
    description:
      'What to do in the first 24 hours after water damage in a Michigan home — safety, shutoffs, documentation, and what to expect from a restoration start. Not legal or insurance advice.',
    url: 'https://provailrestoration.com/resources/first-24-hours-after-water-damage',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Should I turn off the power in a flooded basement?',
    a: 'If water has reached outlets, extension cords, wired appliances, or the electrical panel itself, the affected circuits should be shut off before anyone steps into standing water. If the breaker panel is in the wet area and you cannot reach it safely and dryly, the correct call is to stay out of the room and contact DTE or Consumers Energy to cut power at the meter. Standing water and energized circuits are a combination that has killed homeowners, and no amount of saved property is worth the risk of walking into a live pool.',
  },
  {
    q: 'How fast does water actually spread through a house?',
    a: 'Faster than most homeowners expect. Water follows gravity and capillary action through drywall, baseboards, subfloor seams, and the gaps between framing members. A supply line that fails on a second floor can reach the basement within an hour through wall cavities you cannot see. This is why stopping the source quickly and calling a contractor early matters so much — the size of the eventual loss is usually set in the first few hours, not the first few days.',
  },
  {
    q: 'Do I need to move furniture out of the wet area myself?',
    a: 'Light items like dining chairs, lamps, rugs, and boxes can be carefully relocated to a dry room if it is safe to do so and if you photograph them in place first. Heavy furniture, saturated mattresses, and anything in contact with live electrical cords should be left alone until a crew arrives with proper equipment and PPE. Overexerting yourself trying to drag a soaked sectional up a stairwell is a common way homeowners get hurt in the hour after a loss.',
  },
  {
    q: 'What if the water damage happened while I was out of town?',
    a: 'This is a common Michigan scenario, especially with frozen-pipe bursts during winter travel. Document the scene the moment you arrive, shut off the water main, and bring in a contractor as quickly as possible. The time the water was running unattended will come up in the conversation with your carrier — that is expected and normal. Provide an honest timeline and let the documentation speak for itself.',
  },
  {
    q: 'Can I start cleanup myself before anyone arrives?',
    a: 'You can extract standing water with a wet-vac, move dry belongings to a safe area, and set up household fans if it is electrically safe to do so. What you should avoid is removing materials (cutting drywall, pulling up flooring, tearing out baseboard) before either an adjuster or a contractor has seen the loss, because a photograph of wet material in place is more valuable to the claim than a pile of bagged debris.',
  },
  {
    q: 'How soon can Provail Restoration of Bloomfield get on site?',
    a: 'For water losses in Bloomfield Township and the surrounding Oakland County communities, we aim for rapid dispatch any hour of the day. Call our main line at (248) 531-8404 and a dispatcher will collect a few details about the loss, confirm an arrival window, and walk you through what to do until the crew arrives.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'First 24 Hours After Water Damage: A Michigan Homeowner Checklist',
  description:
    'A step-by-step Michigan homeowner checklist for the first 24 hours after water damage — safety, shutoffs, documentation, and the realistic timeline of a restoration start.',
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
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  inLanguage: 'en-US',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/first-24-hours-after-water-damage',
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
      name: 'First 24 Hours After Water Damage',
      item: 'https://provailrestoration.com/resources/first-24-hours-after-water-damage',
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

export default function First24HoursAfterWaterDamagePage() {
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
                <span>Homeowner Checklist</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              First 24 Hours After Water Damage: A Michigan Homeowner Checklist
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[720px] mx-auto mb-6 leading-relaxed">
              A step-by-step walk-through of what to do — and what not
              to do — in the first day after a water event in a
              Michigan home. Safety, shutoffs, documentation, and what a
              realistic restoration start actually looks like.
            </p>
            <p className="text-[#6a6a6a] text-sm italic max-w-[680px] mx-auto mb-10">
              This page is educational. Not legal or insurance advice —
              contact a licensed professional for questions specific to
              your policy or your situation.
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
                <li>Stop the water at the nearest valve or at the main.</li>
                <li>Make the area electrically safe before you walk into it.</li>
                <li>Photograph and video everything — source, damage, contents.</li>
                <li>Do not tear anything out yet; document first.</li>
                <li>Call a restoration contractor to begin mitigation.</li>
                <li>Open the claim when the scene is stable.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2
              className="text-[#222222] text-lg font-semibold mb-4"
              style={{ letterSpacing: '-0.44px' }}
            >
              What this guide covers
            </h2>
            <ul className="text-[#3c3c3c] text-[15px] leading-[1.8] list-disc pl-5 m-0">
              <li>Immediate safety — power, gas, and structural awareness</li>
              <li>Stopping the source — finding the main and common failure points</li>
              <li>Documentation basics — photos, video, and a starter inventory</li>
              <li>What not to touch or move before help arrives</li>
              <li>Calling your insurance carrier — what to expect</li>
              <li>Calling a restoration contractor — what a dispatcher will ask</li>
              <li>Michigan-specific scenarios — sump failure, frozen pipes, ice dams</li>
              <li>A realistic timeline of the first restoration days</li>
              <li>Frequently asked questions</li>
            </ul>
          </div>
        </section>

        {/* SECTION 1 — SAFETY */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step One"
              title="Immediate Safety Comes Before Everything Else"
              intro="A wet house is a temporarily dangerous house. The first five minutes are about people, not property."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Before you take a single photo or start moving boxes, take
                a breath and look at the room the way a firefighter would.
                Where is the water coming from? Where is it pooling? Are
                there outlets, power strips, or appliances sitting in it?
                Is there any sagging in a ceiling above you, any creaking
                underfoot, any smell of gas? The answers shape what you
                do next.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Electrical shutoff decisions
              </h3>
              <p>
                If water has reached outlets, hardwired appliances, or
                the electrical panel itself, treat the affected circuits
                as energized until proven otherwise. If you can reach
                the breaker panel without stepping into standing water,
                trip the breakers feeding the wet area. If you cannot
                reach it dryly and safely, the correct answer is to
                stay out of that part of the house and call the utility
                to cut power at the meter. DTE and Consumers both handle
                emergency shutoffs and the call is free.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Gas and combustion equipment
              </h3>
              <p>
                A basement flood can submerge a gas water heater or a
                furnace. If you smell gas at any point, leave the
                building and call your gas utility from outside. Do not
                flip switches on your way out. Even without an obvious
                gas smell, a water heater or furnace that has been
                submerged should be looked at by a licensed plumber or
                HVAC tech before it is put back into service — the
                controls and safety sensors on modern combustion
                appliances are not designed to be dunked.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Structural awareness
              </h3>
              <p>
                Ceilings that have held standing water for hours can
                collapse without much warning. If there is a visible
                bulge or a dark, heavy sag in a drywall ceiling, stay
                out of the room directly below and keep children and
                pets clear. A controlled relief puncture — a small hole
                in the lowest point of the sag, with a bucket underneath
                — can drain the pocket safely, but if you are not
                comfortable doing it, leave it for the crew.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — STOP THE SOURCE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Two"
              title="Stop the Source"
              intro="Every gallon of water you stop in the first ten minutes is a gallon the drying crew does not have to chase for three days."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The first goal is to stop the water at the closest valve
                you can reach. For a failed dishwasher supply line, the
                valve is usually under the sink. For a toilet supply
                failure, it is at the base of the toilet. For a washing
                machine hose burst, it is at the wall behind the machine.
                A water heater usually has a dedicated cold-inlet valve
                directly above the tank.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Where the whole-house main lives
              </h3>
              <p>
                If you cannot find an appliance-level valve, or if the
                valve itself is corroded shut, head for the main. In
                most Bloomfield-area homes the main shutoff is on an
                interior wall of the basement, close to where the city
                service enters through the foundation. It is usually a
                quarter-turn ball valve or an older round wheel valve.
                If you have never touched it and you have a spare
                minute on a non-emergency day, walk down and find it
                now — hunting for it in the dark with water rising is
                not where you want that first introduction.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Common Michigan entry points
              </h3>
              <p>
                The losses we see most often in Oakland County tend to
                cluster around a predictable handful of sources. Failed
                braided supply lines to toilets, ice makers, and washing
                machines are the single most common indoor cause and
                they rarely give warning. Water heaters in their eighth
                to twelfth year of service are a close second. Sump
                pumps that have been sitting idle through a dry summer
                and finally get their first heavy rain of the season
                are the classic fall-storm scenario. And frozen pipes
                in unheated spaces — garages, crawlspaces, three-season
                rooms, vacation homes up north — dominate the January
                and February call logs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — DOCUMENT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Three"
              title="Document Before You Clean"
              intro="Photos are free. Take more than you think you need."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Once the water is stopped and the room is safe to
                enter, your phone camera becomes the most valuable
                piece of equipment you own. An adjuster cannot see what
                has already been thrown away, and a contractor cannot
                estimate what has already been ripped out. The scene
                needs to be recorded while it is still the scene.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Photo and video basics
              </h3>
              <p>
                Start wide — a shot of each affected room from the
                doorway so a viewer can orient themselves. Then walk in
                closer. Capture the source of the leak, the highest
                waterline on the walls, the floor at its wettest point,
                the ceiling below if the water came from above, and any
                staining or discoloration. Shoot video as well as
                stills; a slow 360-degree pan of each room takes
                thirty seconds and captures context that still images
                miss.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Starter inventory of contents
              </h3>
              <p>
                Personal property — furniture, electronics, rugs,
                clothing, bedding, stored boxes — is easy to forget
                until a homeowner is sitting down three weeks later
                trying to list everything that was in the room.
                Do the rough list early. A walk-through video that
                names items out loud as you point the camera at them
                takes about ten minutes and captures far more than a
                written list would.
              </p>
              <p>
                Make a short note of the timeline while it is fresh:
                when you first noticed water, what you heard or smelled,
                who was home, and what steps you took. A text message to
                yourself is fine. The timeline matters later.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT NOT TO TOUCH */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Four"
              title="What Not to Touch, Move, or Throw Away"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                There is a strong instinct after a water loss to start
                ripping out wet materials, bagging ruined belongings,
                and hauling everything to the curb. Resist it for a few
                hours. Undocumented debris is harder to account for in
                the eventual scope of work, and materials that looked
                ruined sometimes turn out to be salvageable once a
                crew has actual drying equipment running.
              </p>
              <p>
                Leave drywall, flooring, baseboard, and cabinetry in
                place until a contractor has seen the loss. Leave
                saturated carpet where it is — pulling it yourself can
                damage tack strip and underlayment that would otherwise
                have been reusable. Leave soaked insulation visible
                rather than pre-bagging it. If you must move something
                to free up a walking path, set it aside in a dry area
                rather than discarding it, and photograph it in place
                first.
              </p>
              <p>
                The exceptions are items in immediate electrical
                contact, items creating a fall hazard, and high-value
                personal property that benefits from being moved to a
                dry room quickly — laptops, important paperwork,
                photographs, a wet bedding pile on a mattress you want
                to save. Use judgment.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — INSURANCE */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Five"
              title="Calling Your Insurance Company"
              intro="What to expect from the first phone call. Not legal or insurance advice — contact your agent or carrier for specifics."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most carriers have a 24-hour claims line printed on the
                back of the insurance card or on the declarations page
                of the policy. When you call, expect a few basic
                questions: the policy number, the date and approximate
                time of the loss, a plain-language description of what
                happened, whether anyone was injured, and whether the
                home is currently safe and occupied. A claim number
                will be assigned at the end of the call and a field
                adjuster will usually be scheduled to come look at the
                loss within a few days.
              </p>
              <p>
                Speak factually. Describe what you saw, when you saw
                it, and what you did about it. Avoid speculating about
                causes you are not sure of — if you do not know why a
                pipe failed, the honest answer is that you do not know
                why a pipe failed. The adjuster and the contractor
                will sort out the cause of loss on site.
              </p>
              <p>
                Any questions about what your policy covers, what
                limits apply, how your deductible works, or whether a
                specific loss qualifies are questions for your licensed
                insurance agent or your carrier — not for a restoration
                contractor. We stay out of that conversation on
                purpose. This page is not legal or insurance advice.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CALLING A CONTRACTOR */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Six"
              title="Calling a Restoration Contractor"
              intro="What a dispatcher will ask and what a first visit looks like."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                When you call Provail Restoration of Bloomfield at{' '}
                <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                  {PHONE}
                </a>
                , the dispatcher will walk through a short triage — what
                kind of water, how much, which floors are affected,
                whether the source is still actively running, and
                whether anyone in the house needs to be relocated. They
                will give you an arrival window and a short list of
                things to do in the meantime.
              </p>
              <p>
                The first on-site visit is an inspection and
                stabilization visit. The crew lead will walk the loss
                with moisture meters and a thermal camera, map out
                which materials are wet, extract any remaining standing
                water, and set air movers and dehumidifiers to begin
                the drying cycle. Nothing is demolished on the first
                visit that does not need to be demolished to stop
                further damage. Everything is photographed and
                documented as part of a drying log that becomes part
                of the eventual file for your carrier.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — MICHIGAN SCENARIOS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Seven"
              title="Three Common Michigan Scenarios"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Sump failure during a storm">
                A heavy fall or spring storm rolls through Oakland
                County, the sump pit fills faster than an aging pump
                can move it, and the basement floor starts to
                disappear. The fix in the moment: kill power to the
                basement circuit before you step in, call a plumber
                or restoration contractor for emergency extraction,
                and start the contents photography from the top of the
                stairs.
              </Card>
              <Card title="Frozen pipe burst">
                January in Michigan, a cold snap, an unheated garage
                or crawlspace, and a copper or PEX line that expands
                until it splits. Close the main, open a lower faucet
                to drain the system, and do not thaw the pipe with an
                open flame. The burst itself is usually only found
                after the house has warmed up and the ice plug melts.
              </Card>
              <Card title="Ice dam roof leak">
                Snow sits on a roof, melts against a warm attic,
                refreezes at the eave, and backs up under shingles
                until water finds its way into the ceiling below.
                The leak is often discovered as a stained ring on a
                bedroom ceiling. Catch any active drips in a bucket,
                photograph the staining, and avoid climbing the roof
                yourself to chip the dam — that is how people get
                hurt.
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 8 — TIMELINE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Eight"
              title="A Realistic Restoration Timeline"
              intro="What the first week of a typical water damage project actually looks like."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Hour 0 to 2 — triage.</strong> Water stopped,
                power made safe, documentation captured, contractor
                dispatched. If you are home, most of the first two
                hours is phone calls and photos.
              </p>
              <p>
                <strong>Hour 2 to 6 — first crew on site.</strong>{' '}
                Inspection, moisture mapping, standing water
                extraction, initial equipment set. Air movers and
                dehumidifiers start running. A preliminary scope is
                drafted.
              </p>
              <p>
                <strong>Day 1 to 3 — structural drying.</strong> Daily
                readings are taken at pre-marked points and logged.
                Equipment is adjusted as materials give up moisture.
                Non-salvageable materials that are holding water back
                from the drying cycle may be controlled-demolition
                removed.
              </p>
              <p>
                <strong>Day 3 to 7 — dry standard reached.</strong>{' '}
                Most residential water losses dry in three to seven
                days. When readings match the unaffected-reference
                readings for the same materials, the drying phase
                ends and equipment comes out. A final drying log is
                compiled.
              </p>
              <p>
                <strong>Week 2 onward — reconstruction.</strong>{' '}
                Drywall, flooring, paint, trim, cabinetry, and
                anything else that was removed gets rebuilt. Larger
                losses can run several weeks; a small appliance leak
                might be fully rebuilt inside a week.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="First 24 Hours FAQ"
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

        {/* CLOSING DISCLAIMER */}
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
                <strong>Not legal or insurance advice.</strong> This
                checklist is educational and general. For questions
                about your specific policy, coverage, or the legal or
                contractual relationship between you and your carrier,
                contact a licensed professional — your insurance agent,
                your carrier, or an attorney who handles insurance
                matters. Provail Restoration of Bloomfield is a
                restoration contractor; we do not provide legal,
                insurance, or medical advice.
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
              Active water loss right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>{' '}
              and a dispatcher at Provail Restoration of Bloomfield
              will walk you through the next steps and get a crew on
              the way.
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
