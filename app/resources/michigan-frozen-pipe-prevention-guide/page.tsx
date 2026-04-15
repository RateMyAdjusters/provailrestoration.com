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
    'Michigan Frozen Pipe Prevention Guide | Provail Restoration of Bloomfield',
  description:
    'A homeowner winter playbook for Michigan: why pipes burst in Oakland County cold snaps, pre-winter checklist, warning signs, and what to do before a freeze turns into a flood.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/michigan-frozen-pipe-prevention-guide',
  },
  openGraph: {
    title:
      'Michigan Frozen Pipe Prevention Guide | Provail Restoration of Bloomfield',
    description:
      'A homeowner winter playbook for Michigan: why pipes burst, pre-winter checklist, warning signs, and what to do before a freeze turns into a flood.',
    url: 'https://provailrestoration.com/resources/michigan-frozen-pipe-prevention-guide',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'At what outdoor temperature do pipes actually start to freeze?',
    a: 'There is no single magic number, because what matters is the temperature at the pipe, not the temperature on the weather app. A well-insulated interior pipe in a heated home can survive a night in the single digits without trouble. An exposed pipe in an unheated crawlspace or an uninsulated exterior wall cavity can freeze at outdoor temperatures in the teens if the wind is right. A commonly cited rule of thumb in the industry is that vulnerable pipes start getting dangerous around 20°F and become seriously at risk below 10°F, but any Michigan homeowner who has lived through a polar vortex event knows the real variable is exposure and wind chill, not a thermostat number.',
  },
  {
    q: 'Does letting the faucet drip really work?',
    a: 'It helps, and the reason is not that the moving water is warm. Running a trickle of water through a pipe relieves the pressure that builds between a forming ice plug and a closed fixture — and it is that pressure, not the ice itself, that actually ruptures pipes. An open faucet gives trapped water somewhere to go. A drip or pencil-thin stream on the coldest nights, from the faucet farthest from where the water enters the house, is a reasonable precaution on exposed runs. It is not a substitute for insulation and sealing gaps, and it does not guarantee a pipe will not freeze — it just reduces the odds of a burst if one starts to.',
  },
  {
    q: 'Where is my main water shutoff and why does it matter?',
    a: 'The main shutoff is typically where the water line enters the house — often in a basement or utility room on the wall facing the street, sometimes near the water meter. Every adult in the household should know where it is and how to operate it before a cold snap, because the fastest way to reduce damage from a burst pipe is to shut the main off within seconds of discovering the leak. If your shutoff is a gate valve that has not been turned in years, it may be seized or leak when you close it. Testing it once at the start of winter is not a bad idea.',
  },
  {
    q: 'Are PEX pipes freeze-proof?',
    a: 'No. PEX is more forgiving than copper because it can flex and expand somewhat under internal pressure, which means it sometimes survives a freeze that would split a copper line. That is different from being freeze-proof. PEX can still rupture, and the fittings, valves, and appliances downstream of a PEX run are not flexible at all. Many newer Michigan builds use PEX, many older Bloomfield homes still use copper, and both kinds of homes need the same prevention basics — insulation, heat where it needs to be, and no gaps to the outside.',
  },
  {
    q: 'We are leaving town for two weeks in January. What should we do?',
    a: 'For short trips, set the thermostat no lower than about 55°F, open interior doors and under-sink cabinet doors so warm air reaches pipe runs, and ask a neighbor or family member to physically walk through the house every day or two. For longer absences, many homeowners go further: shutting off the main, draining the system from a low faucet, and in some cases fully winterizing. Whole-home leak detection and automatic shutoff devices are also worth looking into if you travel often. Setting the thermostat to 50°F or lower and leaving for two weeks in Michigan is how a lot of claims start.',
  },
  {
    q: 'I think a pipe might be frozen but nothing has burst yet. What now?',
    a: 'Open the nearest faucet served by the suspected pipe, so that when the ice plug begins to melt the water has an immediate exit and does not build pressure. Do not use an open flame to thaw pipes — no torches, no propane heaters pointed at walls. A hair dryer, a space heater at a safe distance, or warm towels applied along an exposed section are safer. If the frozen section is inside a wall or otherwise inaccessible, and especially if you cannot confirm whether it has already cracked, shutting off the main and calling a licensed plumber is the conservative move. Do not cut open walls on a guess.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Michigan Frozen Pipe Prevention Guide: A Winter Playbook for Homeowners',
  description:
    'A homeowner winter playbook for Michigan: why pipes burst in Oakland County cold snaps, pre-winter checklist, warning signs, and what to do before a freeze turns into a flood.',
  author: { '@type': 'Organization', name: BIZ_NAME },
  publisher: {
    '@type': 'Organization',
    name: BIZ_NAME,
    logo: {
      '@type': 'ImageObject',
      url: 'https://provailrestoration.com/logo.png',
    },
  },
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/michigan-frozen-pipe-prevention-guide',
  },
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
      name: 'Resources',
      item: 'https://provailrestoration.com/resources',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Michigan Frozen Pipe Prevention Guide',
      item: 'https://provailrestoration.com/resources/michigan-frozen-pipe-prevention-guide',
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

function Disclaimer() {
  return (
    <div
      className="p-8"
      style={{
        borderRadius: '20px',
        backgroundColor: 'rgba(255,56,92,0.06)',
        border: '1px solid rgba(255,56,92,0.2)',
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        Educational Only — Not a Guarantee Against Freezing
      </h3>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] mb-3">
        This guide is written to help homeowners in Bloomfield Township and
        the surrounding Oakland County communities reduce the risk of
        frozen-pipe damage during a Michigan winter. It is educational.
        Following every step in this article will not prevent one hundred
        percent of freezes, because no homeowner checklist can account for
        every extreme weather event, every construction defect, every
        mechanical failure, and every hidden pipe run that a previous
        owner installed in a place it never should have been.
      </p>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] mb-3">
        Nothing in this article is electrical, plumbing, or construction
        advice for a specific home. Heat tape, electric heat cables, and
        any other powered freeze-prevention product should be installed
        and operated strictly according to the manufacturer&rsquo;s
        instructions — improperly installed heat tape is itself a fire
        hazard, and that is a conversation for the product label and a
        licensed professional, not a web page.
      </p>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
        Provail Restoration of Bloomfield is a restoration contractor. We
        respond after water damage has happened. We are not a plumbing
        company and we do not install freeze prevention systems. If you
        need work done on pipes, valves, or electrical freeze protection,
        please call a licensed plumber or electrician.
      </p>
    </div>
  )
}

export default function MichiganFrozenPipePreventionGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
                <span>Winter Resource</span>
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
              Michigan Frozen Pipe Prevention Guide: A Winter Playbook for Homeowners
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[720px] mx-auto mb-10 leading-relaxed">
              <strong>TL;DR:</strong> In a Michigan winter, the pipes most
              likely to burst are exposed runs on exterior walls, in
              unheated basements and crawlspaces, in garage-adjacent
              cavities, and in attics. Insulate them, seal the gaps that
              let cold air reach them, know where your main shutoff is,
              drip the faucets on the worst nights, and never set the
              thermostat below about 55°F when you are away. The single
              biggest favor you can do yourself is knowing — before the
              cold snap arrives — where every vulnerable pipe in your
              home actually is.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <Disclaimer />
          </div>
        </section>

        {/* TOC */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading eyebrow="Contents" title="What This Guide Covers" />
            <div
              className="bg-white p-8"
              style={{
                borderRadius: '20px',
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
              }}
            >
              <ol className="text-[#3c3c3c] text-[16px] leading-[1.9] list-decimal pl-6 space-y-1 m-0">
                <li>Why Michigan winters are especially hard on plumbing</li>
                <li>Which pipes in your house are actually at risk</li>
                <li>The physics of a burst: it is not the ice, it is the pressure</li>
                <li>The pre-winter checklist</li>
                <li>Cold snap protocol: what to do the night of a polar vortex</li>
                <li>Warning signs a pipe is freezing right now</li>
                <li>What to do if a pipe is frozen but has not burst yet</li>
                <li>What to do if a pipe has already burst</li>
                <li>Michigan-specific notes: Oakland County, lakefront, Tudors, PEX</li>
                <li>Frequently asked questions</li>
              </ol>
            </div>
          </div>
        </section>

        {/* WHY MICHIGAN */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section One"
              title="Why Michigan Winters Are Especially Hard on Plumbing"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Michigan winters do a specific kind of damage to plumbing
                that milder climates do not. The reason is not just that
                it gets cold — it is that it gets cold, then warm, then
                cold again, repeatedly, for months on end. That
                freeze-thaw cycle is the worst possible condition for
                any building material that holds water, because each
                cycle works ice deeper into small gaps, expands hairline
                cracks in slabs and foundations, and repeatedly loads
                and unloads pipes with the pressure of nearly-forming
                ice. A pipe that survived last winter is not necessarily
                going to survive this one, because the failure points
                are cumulative.
              </p>
              <p>
                Add in the polar vortex events that have become a
                regular feature of Great Lakes winters — multi-day
                stretches in the single digits or below zero with
                serious wind — and you get conditions where even
                well-built homes can lose pipes in places their owners
                never thought to worry about. The wind is the
                under-discussed variable here. An exposed pipe behind
                an exterior wall that would be fine at 15°F with still
                air can freeze in a couple of hours at 15°F with a
                25 mph wind driving cold through every unsealed gap in
                the siding.
              </p>
              <p>
                The other Michigan-specific factor is housing age. A
                large share of homes in Bloomfield Township, Birmingham,
                Royal Oak, and Ferndale were built between the 1920s and
                the 1960s, and those homes were built with assumptions
                about insulation and pipe routing that look questionable
                today. Copper supply lines running through uninsulated
                exterior walls, hot-and-cold pairs feeding a second-floor
                bathroom through an attic soffit, laundry hookups on a
                garage wall — these are normal in older Oakland County
                housing stock, and every one of them is a freeze risk a
                newer build would not have. See our main{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                page for what happens on the cleanup side when one of
                those runs lets go.
              </p>
            </div>
          </div>
        </section>

        {/* WHICH PIPES AT RISK */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Two"
              title="Which Pipes Are Actually at Risk"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Not every pipe in your home is a freeze candidate. The
                ones that matter share a simple characteristic: they
                run through a space where the air temperature can drop
                below freezing. Walking the house once in daylight and
                mentally mapping out where those spaces are is the
                single most useful thing a homeowner can do before
                winter starts.
              </p>
              <p>
                <strong>Exterior wall runs.</strong> Pipes inside the
                wall cavity of an outside-facing wall — especially
                kitchen and bathroom supply lines — sit on the wrong
                side of the insulation. If the insulation is thin,
                settled, or missing entirely, the pipe is effectively
                outside. This is the single most common burst location
                we see in older Bloomfield homes.
              </p>
              <p>
                <strong>Unheated basements and crawlspaces.</strong> A
                crawlspace with open foundation vents, a basement whose
                heat was never run at all, or a root cellar converted
                into storage — all of these can hold sub-freezing air
                for days during a cold snap while the rest of the
                house is comfortable.
              </p>
              <p>
                <strong>Garage-adjacent walls and lines.</strong> An
                unheated garage is an outdoor space with a roof. Pipes
                running through the wall shared between a garage and
                the heated part of the house are at serious risk,
                particularly if the garage door is drafty or left open
                occasionally.
              </p>
              <p>
                <strong>Attic runs.</strong> Plumbers sometimes route
                pipes through attic soffits to reach a second-floor
                bathroom. Attics are vented by design, so during a cold
                snap they match outdoor temperature within a few
                hours. A pipe up there is as exposed as one on the
                roof.
              </p>
              <p>
                <strong>Hose bibs and exterior spigots.</strong> Any
                outdoor faucet whose supply line is not a
                self-draining frost-free design is at risk, and so is
                the interior pipe feeding it. Frost-free bibs are only
                frost-free if the hose is actually disconnected, which
                is the point of the seasonal checklist below.
              </p>
            </div>
          </div>
        </section>

        {/* THE PHYSICS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Three"
              title="The Physics: It Is Not the Ice, It Is the Pressure"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                One of the most widely repeated ideas about frozen
                pipes is also slightly wrong, and understanding why
                matters for prevention. The common version is that ice
                expands inside the pipe and cracks it open from the
                inside out. That is close, but it is not quite what
                happens.
              </p>
              <p>
                What actually happens is this. As water in a section
                of pipe freezes, an ice plug forms and begins to grow.
                The plug blocks flow. Upstream of the plug — between
                the ice and the closed faucet or valve at the other
                end of the run — there is still liquid water, and
                that liquid water is getting squeezed by the expanding
                ice. Pressure in the trapped column rises rapidly, and
                because water is effectively incompressible, all of
                that pressure has to go somewhere. It goes into the
                weakest point in the pipe wall, the weakest fitting,
                or the weakest valve. That is where the split or the
                blown connection happens, and it is often several feet
                away from the ice plug itself.
              </p>
              <p>
                This is also why dripping a faucet works. A faucet
                that is cracked open gives the trapped water a place
                to go. The pressure never has a chance to build,
                because the column is not actually sealed. The ice
                plug can still form, but a frozen pipe without a
                pressure rupture is a manageable problem. A frozen
                pipe that has split open while you were sleeping is a
                flooded first floor.
              </p>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Four"
              title="The Pre-Winter Checklist"
              intro="Do this once, in October or early November, before the first hard freeze. It takes an afternoon."
            />
            <div
              className="max-w-[820px] mx-auto bg-white p-8"
              style={{
                borderRadius: '20px',
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
              }}
            >
              <ul className="text-[#3c3c3c] text-[16px] leading-[1.85] space-y-3 m-0 list-none pl-0">
                <li>
                  <strong>Disconnect every garden hose.</strong> A
                  connected hose traps water behind the bib and
                  defeats the frost-free design of newer spigots.
                  Drain the hose, coil it, store it in the garage.
                </li>
                <li>
                  <strong>Shut off exterior spigot supply lines if
                  you have a dedicated interior valve</strong>, and
                  open the exterior bib to drain the remaining water.
                </li>
                <li>
                  <strong>Insulate every exposed pipe you can reach.</strong>{' '}
                  Foam pipe sleeves from the hardware store, cut to
                  length, wrapped around supply lines in the
                  basement, crawlspace, and garage. This is the
                  highest-leverage dollar you can spend on freeze
                  prevention.
                </li>
                <li>
                  <strong>Seal exterior gaps with foam or caulk.</strong>{' '}
                  Look for daylight around dryer vents, cable
                  penetrations, hose bib collars, and rim joists in
                  the basement. Every one of those is a cold-air
                  pathway to an interior pipe.
                </li>
                <li>
                  <strong>Know where the main shutoff valve is,</strong>{' '}
                  and test that it turns. If it is a gate valve that
                  has not been touched in a decade, have a plumber
                  replace it with a ball valve before you need it.
                </li>
                <li>
                  <strong>Consider heat tape on the highest-risk
                  runs</strong> — but only products rated for
                  potable water pipes, only installed per
                  manufacturer instructions, and ideally by someone
                  who has done it before. Heat tape is a fire source
                  if misused.
                </li>
                <li>
                  <strong>Close crawlspace foundation vents</strong>{' '}
                  if your crawlspace has them and local building
                  practice supports it.
                </li>
                <li>
                  <strong>Walk the attic</strong> with a flashlight
                  and note whether any plumbing is routed up there.
                  If it is, make sure insulation is pulled over it,
                  not under it.
                </li>
                <li>
                  <strong>Set a thermostat floor for travel.</strong>{' '}
                  Decide now what the minimum setting will be any
                  time the house is empty. Fifty-five degrees is a
                  common baseline.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* COLD SNAP PROTOCOL */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Five"
              title="Cold Snap Protocol"
              intro="When the forecast shows a multi-day stretch below 15°F."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Open the cabinet doors.</strong> Under-sink
                cabinets on exterior walls — kitchen sinks and
                bathroom vanities especially — trap cold air against
                the pipes inside. Leaving the doors open lets warm
                room air circulate through the cabinet and keeps the
                supply lines several critical degrees warmer.
              </p>
              <p>
                <strong>Drip the faucets farthest from the main.</strong>{' '}
                A pencil-thin stream of cold water from the fixture
                at the end of the longest run, overnight, on the
                worst nights. If you have a known-vulnerable
                bathroom — second floor, exterior wall, has frozen
                before — drip that one instead or in addition.
              </p>
              <p>
                <strong>Do not let the thermostat drop overnight.</strong>{' '}
                Programmable setbacks that save money in normal
                weather are not your friend during a polar vortex.
                Hold the daytime setting through the night.
              </p>
              <p>
                <strong>Check the garage door.</strong> Close it,
                keep it closed, and check for obvious drafts at the
                weatherstripping.
              </p>
              <p>
                <strong>Have the main shutoff ready.</strong> If the
                house has adults who are not confident about finding
                and operating it, take thirty seconds at the start of
                the cold snap to show everyone where it is.
              </p>
            </div>
          </div>
        </section>

        {/* WARNING SIGNS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Six"
              title="Warning Signs a Pipe Is Freezing Right Now"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The earliest sign is almost always a faucet that will
                not produce water, or produces only a thin trickle
                when it should be running full stream. If one sink
                stops working and the others are fine, the supply
                line feeding that fixture is where the trouble is.
                If the hot side works and the cold does not — or
                vice versa — the problem is on the corresponding
                supply run.
              </p>
              <p>
                Other signs worth paying attention to during a cold
                snap: unusual banging or knocking in the walls as
                water pressure fluctuates against a forming ice
                plug, frost visible on an exposed copper pipe,
                unexplained drops in water pressure throughout the
                house, and the smell of sewer gas from a floor drain
                whose trap has evaporated because nothing has run
                through it in days.
              </p>
              <p>
                Any of these on a night when the outside
                temperature is well below freezing is a signal to
                act, not to wait and see in the morning. The window
                between a freezing pipe and a burst pipe can be
                under an hour.
              </p>
            </div>
          </div>
        </section>

        {/* FROZEN NOT BURST */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Seven"
              title="Frozen, But Not Burst Yet"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The first move is to open the faucet served by the
                frozen section, both hot and cold, so that when the
                ice plug starts to melt the water has somewhere to
                go. This is the single most important thing you
                can do in the first minute, because it converts a
                pressure bomb into a slow drip.
              </p>
              <p>
                The second move is to apply gentle, indirect heat
                to the exposed section of pipe, working from the
                faucet end back toward the frozen section rather
                than the other way around. A hair dryer moved
                slowly along the pipe, a small space heater
                positioned a safe distance away, or warm damp
                towels wrapped around the pipe are all reasonable
                methods. Never use an open flame — a propane torch
                pointed at a wall is how house fires start.
              </p>
              <p>
                If the frozen section is inside a wall, behind
                finished drywall, or otherwise not visible, do
                not start cutting. Shut off the main, turn the
                heat in the affected room up as high as the
                thermostat allows, and call a licensed plumber.
                A plumber with a thermal camera can locate the
                frozen section without guessing, and that is
                cheaper than the drywall and flooring repairs
                that follow an exploratory hole in the wrong
                place.
              </p>
            </div>
          </div>
        </section>

        {/* BURST */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Eight"
              title="If the Pipe Has Already Burst"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Shut the water main off first. Everything else is
                secondary to stopping flow, and until the main is
                closed the damage is still getting worse every
                second. Open a low faucet after the main is shut
                to drain residual pressure out of the system.
              </p>
              <p>
                Make the area electrically safe. If water has
                reached outlets, light fixtures, extension cords,
                or electronics, shut off the affected circuits at
                the breaker before walking into the room. This is
                not a step to skip because you are in a hurry.
              </p>
              <p>
                Start photographing everything — the source, the
                water level, every affected room, every piece of
                wet personal property. Documentation started in
                the first fifteen minutes is worth more than
                documentation started two days later.
              </p>
              <p>
                Then call for help. Our{' '}
                <a
                  href="/services/frozen-pipe-repair"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  frozen pipe repair and water mitigation
                </a>{' '}
                page describes what actually happens when a crew
                arrives — stabilization, extraction, moisture
                mapping, drying, and the coordination with your
                insurance carrier if you are filing a claim. The
                sooner a mitigation crew is on site, the smaller
                the final scope of work almost always turns out
                to be.
              </p>
            </div>
          </div>
        </section>

        {/* MICHIGAN-SPECIFIC */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Section Nine"
              title="Michigan-Specific Notes"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Older Bloomfield & Birmingham Tudors">
                Homes built between roughly 1920 and 1950 in the
                Bloomfield and Birmingham areas often have copper
                supply lines routed through exterior wall cavities
                with minimal insulation by modern standards. These
                houses are beautiful and they are also the most
                common address we see on a burst-pipe call. If you
                own one, walking the basement and mapping where
                every exposed run goes up into the walls is an
                afternoon well spent.
              </Card>
              <Card title="Newer Builds With PEX">
                Homes built in the last twenty years in Oakland
                County — and especially in newer subdivisions in
                places like Macomb Township and parts of Rochester
                Hills — often use PEX tubing instead of copper. PEX
                is more forgiving, but fittings and valves are not,
                and a PEX home still needs the same exterior
                sealing, thermostat discipline, and attention to
                garage-adjacent runs that a copper home does.
              </Card>
              <Card title="Lakefront Homes">
                Waterfront properties on Cass Lake, Orchard Lake,
                Upper Long Lake, and the rest of the Oakland County
                lakes have their own freeze dynamics. Wind off the
                lake, unheated boathouses, and seasonal utility
                connections all create freeze points that inland
                homes do not have to think about. Seasonal shutoff
                and drain-down is often the right answer for any
                plumbing serving a dock, an outbuilding, or a
                rarely-used guest space.
              </Card>
              <Card title="Vacant and Rental Properties">
                A vacant home in January is a freeze waiting to
                happen. If a home is between tenants, in probate,
                or owned by someone who has moved out of state,
                full winterization — draining the system and
                blowing out the lines — is almost always cheaper
                than a month&rsquo;s worth of heating a building
                nobody lives in, and far cheaper than the damage
                from a burst that runs for three days before
                anyone notices.
              </Card>
            </div>
          </div>
        </section>

        {/* DISCLAIMER REPEAT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <Disclaimer />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading eyebrow="Answers" title="Frozen Pipe FAQ" />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white p-6 group"
                  style={{
                    borderRadius: '16px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                    border: '1px solid #eeeeee',
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
              Frozen pipe right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Shut the main off and call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>
              . We will dispatch a mitigation crew and begin
              documentation from the moment we arrive — drying,
              reconstruction, and a claim-ready file under one roof.
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
