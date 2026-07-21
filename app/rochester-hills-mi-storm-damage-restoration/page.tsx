import React from 'react'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
} from '../_components/site-chrome'

export default function RochesterHillsStormDamagePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-white" style={{ padding: '72px 0 56px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ff385c',
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            24/7 Storm Response — Rochester Hills, MI
          </div>
          <h1
            className="text-[#222222] font-bold mb-5 leading-[1.1]"
            style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}
          >
            The squall line is gone. The damage isn&rsquo;t.
            <br />
            Rochester Hills storm crews, dispatching now.
          </h1>
          <p
            className="text-[#484848] max-w-[780px] mx-auto mb-8"
            style={{ fontSize: '18px', lineHeight: 1.55 }}
          >
            When the April 15, 2026 line of severe thunderstorms tore through
            Oakland County with 75-88 mph gusts and confirmed tornado warnings,
            Rochester Hills took one of the hardest hits in the metro. We were
            rolling tarp trucks before the radar cleared Stoney Creek HS and
            we&rsquo;re still working the backlog. If your roof is open, a tree
            is through your ceiling, or your attic is soaked, call {BIZ_NAME} at{' '}
            <a
              href={PHONE_HREF}
              className="text-[#ff385c] font-semibold no-underline hover:underline"
            >
              {PHONE}
            </a>{' '}
            — a live dispatcher answers, and a crew heads to 48306, 48307, or
            48309 the same hour.
          </p>
          <HeroCTA />
          <p
            className="text-[#6a6a6a] mt-5"
            style={{ fontSize: '14px' }}
          >
            Office 14 miles from Rochester Hills via Opdyke and M-59 · Licensed
            & insured · Direct insurance billing
          </p>
        </div>
      </section>

      {/* AFTER APRIL 15 STORM */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The Storm That Rewrote Spring"
            title="After the April 15, 2026 storm"
            intro="What actually happened, what we saw in Rochester Hills, and what&rsquo;s still being cleaned up the week of April 16."
          />
          <div className="max-w-[820px] mx-auto space-y-5 text-[#484848]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
            <p>
              The storm system that rolled across southeast Michigan on the
              evening of April 15, 2026 was not a garden-variety spring
              thunderstorm. The National Weather Service out of White Lake
              logged sustained wind gusts between 75 and 88 mph across Oakland
              and Macomb counties, issued multiple tornado warnings, and ended
              the night with tens of thousands of DTE customers in the dark.
              Rochester Hills sat squarely under the worst of it for about
              forty minutes, from roughly 9:40 pm as the leading edge crossed
              Opdyke to 10:20 pm when the last cell pushed east of Dequindre.
            </p>
            <p>
              We got our first Rochester Hills call at 9:52 pm — a penetrative
              limb strike on an Avon Estates ranch off Tienken. By midnight we
              were logging calls out of Meadowbrook, Rochester Heights, Stony
              Creek Ridge, and the Adams Rd corridor north of Walton. The
              pattern was painfully consistent: ripped ridge caps, lifted
              architectural shingles on windward slopes, soffit vents blown in,
              gutters peeled off fascia, and in the older east-side ranches,
              full sheet loss on three-tab roofs that were already at end of
              life. Wind-driven rain found every compromised flashing in town.
            </p>
            <p>
              The tree story is its own chapter. The Clinton River corridor,
              Bloomer Park, and the long-established subdivisions between Adams
              and Livernois are heavy with 60- to 70-year-old oaks and maples
              that were planted in the post-war subdivision wave. Trees that
              age reach a predictable failure window, and a 75 mph shear event
              will find every weak union. We counted 21 Rochester Hills
              addresses with tree-on-structure damage in the first 36 hours
              alone — not counting simple yard falls.
            </p>
            <p>
              As of the morning of April 16, we are still running tarping
              routes, prioritizing homes with active water intrusion over
              cosmetic damage. DTE has most of Rochester Hills back on power,
              but pockets around Christian Hills and Butler Ridge were still
              out overnight. If you&rsquo;re reading this with a leaking
              ceiling and a tarp that a neighbor threw up in the dark, call us
              — a compliant tarp survives the next front; a blue-tarp-from-a-
              neighbor does not. See our full event recap at{' '}
              <a
                href="/resources/april-2026-oakland-macomb-storm-response"
                className="text-[#ff385c] font-semibold no-underline hover:underline"
              >
                /resources/april-2026-oakland-macomb-storm-response
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* STORM DAMAGE TYPES */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Oakland County Storm Patterns"
            title="Storm damage types we handle"
            intro="Every storm season in Rochester Hills has its own signature. These six categories cover 95% of the work we do here."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Straight-line wind damage',
                body: 'Squall lines are the real villain of April and May in Oakland County. 60-80 mph sustained winds lift shingles on windward slopes, tear off ridge caps, punch out soffit vents, and rip gutters off fascia. We see it most on ranches north of Auburn Rd and in the post-2000 subdivisions along Adams where architectural shingles aged into their second decade.',
              },
              {
                title: 'Tree impact — Clinton River corridor oaks',
                body: 'The mature oak and silver maple canopy from Bloomer Park down through the Clinton River greenway is majestic until a 75 mph gust finds a compromised union. We handle everything from limb strikes (through a single roof slope) to full crush events where a trunk has opened the envelope — including the structural engineering coordination those jobs always need.',
              },
              {
                title: 'Hail damage on asphalt shingles',
                body: 'Oakland County summer hail events are usually pea to quarter size, and the damage reads as granule loss and impact bruising on asphalt shingles, dents on aluminum gutters and downspouts, and pocked soft metals around roof penetrations. We document impact density per hundred square feet for the adjuster — the way a public adjuster would want to see it.',
              },
              {
                title: 'Wind-driven rain intrusion',
                body: 'This is the sneaky one. Wind didn&rsquo;t open a hole you can see from the driveway — it opened a flashing seam, a vent boot, or a missing siding lap, and now your attic insulation is a sponge and your Hardie wall cavity is holding water against sheathing. We do moisture mapping from attic ridge to rim joist to find every path the storm took.',
              },
              {
                title: 'Power surge and lightning damage',
                body: 'Direct lightning strikes in Rochester Hills are rare; induced surge from a nearby strike or a DTE line slap during a squall is common. We work with electrical contractors on surge damage assessment and coordinate with your carrier on the scope — most policies split this from the dwelling claim, and missing that distinction costs homeowners thousands.',
              },
              {
                title: 'Flooded basement from storm runoff',
                body: 'When 1.5 inches of rain falls in forty minutes, Rochester Hills&rsquo; older east-side subdivisions see storm sewer backup and surface runoff push into basements through window wells, grading failures, and overworked sump pits. This is water-damage work that starts with a storm trigger — extraction, moisture mapping, and structural drying, same as any Category 2 loss.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ebebeb',
                  boxShadow: 'rgba(0,0,0,0.04) 0px 2px 12px',
                }}
              >
                <h3 className="text-[#222222] font-semibold mb-3" style={{ fontSize: '18px' }}>
                  {card.title}
                </h3>
                <p className="text-[#484848] m-0" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY TARP AND BOARD-UP */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Stabilize First"
            title="Emergency tarp & board-up response"
            intro="The first twelve hours set the whole restoration trajectory. Here is what we actually do when a Rochester Hills crew arrives."
          />
          <div className="max-w-[820px] mx-auto space-y-5 text-[#484848]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
            <p>
              We aim to be on site in Rochester Hills within 60 to 90 minutes
              of a dispatch call during an active event, and under 45 minutes
              once the storm has passed and the crews are staged. The first
              task is never cosmetic — it is stopping the building from taking
              more damage. That means a structural walkaround, a power and gas
              check if a tree is involved, and then either a tarp, a board-up,
              or both.
            </p>
            <p>
              Our tarp spec is not the blue poly rectangle your neighbor
              stapled up at midnight. We install heavy-duty reinforced tarps
              with a three-foot minimum overlap up-slope of the damage, 2x4
              batten strapping on both edges, and 15 lb roofing felt
              underneath for short-term jobs (anything under two weeks). If the
              structural repair timeline is longer than that — which, after an
              event like April 15, it will be for a lot of Rochester Hills
              homes — we upgrade to a Roof Armor-grade membrane that is rated
              for 30 to 90 days of weather exposure without degrading.
            </p>
            <p>
              Board-up is its own craft. We use half-inch plywood minimum,
              sized to lap the opening by at least four inches on every edge,
              and we screw rather than nail on historic homes along Tienken Rd
              and in the older Rochester Heights streets where original trim is
              part of the home&rsquo;s value. A nail pattern every six inches
              around a window on a 1958 ranch can do more damage than the
              storm did — we take the slower route and screw into the rough
              opening.
            </p>
            <p>
              Every stabilization visit is documented: timestamped photos from
              multiple angles, a written scope of the emergency work, and a
              reading of any ambient moisture we found under the damage. That
              packet goes to your insurance carrier with the first mitigation
              invoice. We also coordinate with the Rochester Hills Building
              Department on any post-storm emergency permits that a larger
              board-up or temporary weather wall might require — we&rsquo;ve
              worked with their inspectors long enough to know which jobs need
              a same-day permit pull and which can be reconciled after repair
              begins.
            </p>
          </div>
        </div>
      </section>

      {/* TREE IMPACT */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="When A Tree Comes Through The Roof"
            title="Tree impact & structural damage"
            intro="There is a real engineering difference between &lsquo;a limb dented our gutter&rsquo; and &lsquo;an oak opened our second floor.&rsquo;"
          />
          <div className="max-w-[820px] mx-auto space-y-5 text-[#484848]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
            <p>
              Tree-on-structure damage sorts cleanly into three categories:
              limb strike (branches have hit the envelope but stayed
              superficial), penetration (a limb or trunk has pierced sheathing
              and is now sitting inside the home), and crush (the dead load of
              the tree has deformed the roof or wall framing). Each of these
              has its own restoration path and its own documentation
              requirement for the carrier.
            </p>
            <p>
              The moment a tree has penetrated or crushed framing in a
              Rochester Hills home, a licensed structural engineer gets
              involved. This is non-negotiable — not because we are
              cautious, but because the carrier will require a stamped report
              before they sign off on the structural scope, and because moving
              a tree off a compromised truss without an engineering plan can
              turn a repairable frame into a rebuild. We have a short list of
              PE-stamped engineers who know the post-war and 1990s framing
              methods typical of Avon Estates, Butler Ridge, and Meadowbrook,
              and we coordinate their site visit within 24 to 48 hours of
              stabilization.
            </p>
            <p>
              The subdivision-level reality: on a 1960s ranch with 2x6 stick
              framing, a silver maple trunk rarely does catastrophic damage —
              the framing holds and the envelope is the repair. On a late-90s
              truss-roof colonial, a similar-diameter trunk can take out a
              primary load path, and now you&rsquo;re looking at engineered
              lumber replacement and temporary shoring before any interior
              reconstruction starts. We don&rsquo;t self-perform tree removal
              — we partner with two licensed Rochester-area arborists who
              handle the rigging and disposal — but we own the stabilization,
              the drying, the structural coordination, and the reconstruction
              from first call through final sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* INSURANCE & DOCUMENTATION */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The Claim Is Half The Job"
            title="Insurance & documentation"
            intro="Storm claims live or die on documentation. Here&rsquo;s how we build the packet so your adjuster can approve it."
          />
          <div className="max-w-[820px] mx-auto space-y-5 text-[#484848]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
            <p>
              Storm claims differ from a routine water loss in one critical
              way: the carrier will want to correlate your damage to a specific
              weather event. That means we pull official NOAA storm reports
              and, where available, the National Weather Service Local Storm
              Report log for the date and time, plus the nearest Oakland County
              ASOS station wind gust record. For the April 15, 2026 event, the
              Pontiac (KPTK) station recorded peak gusts in the mid-80s, and
              that reading ends up in the exhibit list of every claim we write
              for this storm.
            </p>
            <p>
              Scope estimates are written in Xactimate, which is the platform
              every Michigan carrier&rsquo;s adjuster uses. Storm estimates
              have their own nuances — we separate the dwelling scope from any
              detached-structure scope (fence, shed, gazebo), itemize
              emergency mitigation under the Emergency Services price list
              instead of rolling it into the rebuild, and attach a discrete
              O&amp;P (overhead and profit) line when the scope involves three
              or more trades, which almost every tree-impact job does.
            </p>
            <p>
              The piece homeowners miss most often: many Oakland County
              policies now carry a separate wind and hail deductible — often
              expressed as a percentage of Coverage A (the dwelling amount)
              rather than a flat dollar figure. A 2% wind/hail deductible on a
              $450,000 Rochester Hills home is $9,000 out-of-pocket before the
              carrier pays anything. We read your declarations page before we
              finalize the estimate so there are no surprises at settlement,
              and we structure the scope to reflect what&rsquo;s actually
              recoverable under your specific endorsement.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RH CALLS US */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The Rochester Hills File"
            title="Why Rochester Hills calls us after storms"
            intro="Three things that matter when the phone tree is jammed and every restoration shop in the metro is oversubscribed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'We answer the phone at 2 am on a Tuesday',
                body: 'During the April 15 event our dispatch line never rolled to voicemail. When a squall line is moving and your attic is filling with water, the restoration company that answers is the restoration company that saves the floor joists. We are that company in Rochester Hills.',
              },
              {
                title: 'Our tarps are actually rated for the next front',
                body: 'A blue tarp held down with a tire tells the carrier you had damage. A spec-compliant tarp with battens and underlayment tells the carrier you mitigated. That difference shows up in the check. We install mitigation-grade weather protection every single time, even on a 3 am call.',
              },
              {
                title: 'We know who to call when a tree punched through',
                body: 'Tree-impact jobs live or die on the coordination — arborist, structural engineer, carrier, permit office, reconstruction crew. We own that playbook for Rochester Hills specifically. You make one call and we sequence the rest so your household isn&rsquo;t juggling six contractors in week one.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ebebeb',
                  boxShadow: 'rgba(0,0,0,0.04) 0px 2px 12px',
                }}
              >
                <h3 className="text-[#222222] font-semibold mb-3" style={{ fontSize: '18px' }}>
                  {card.title}
                </h3>
                <p className="text-[#484848] m-0" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Storm FAQs For Rochester Hills"
            title="Questions we&rsquo;re hearing this week"
            intro="Answers for the calls that have come in since the April 15, 2026 storm cleared."
          />
          <div className="max-w-[820px] mx-auto space-y-5">
            {[
              {
                q: 'The April 15 storm took shingles off half our roof — can you tarp tonight?',
                a: 'Yes, if you call before crews cap out for the evening. We run staggered tarp crews through the night after a major event; during the April 15 response we tarped in Rochester Hills from about 10:30 pm until sunrise on the 16th. Our tarp spec is a reinforced poly membrane with 2x4 batten anchoring and a three-foot overlap above the damage line, 15 lb felt underlayment for short-term cover. That configuration survives a second front — which, in Michigan April, is never theoretical.',
              },
              {
                q: 'A maple fell on our Avon Estates ranch — do we need a structural engineer?',
                a: 'If the trunk or a primary limb penetrated the envelope or is resting on a load-bearing wall or truss chord, yes. Every carrier we work with will require a stamped engineer report before they authorize the structural scope, and we would require it before allowing reconstruction crews to touch the frame. We schedule the engineer within 24 to 48 hours of stabilization. If the tree only glanced the roof slope or stayed outside the structure, an engineer usually isn&rsquo;t required and the repair is a roofing scope.',
              },
              {
                q: 'Our sump pump ran nonstop during the storm and then failed — is that covered?',
                a: 'It depends on the failure mode and your policy endorsements. A sudden mechanical failure during a covered storm event is often covered under a water backup or sump overflow endorsement — but not under the base policy. Gradual wear-and-out failure is not covered anywhere. We&rsquo;ll read the declarations page with you before you file, because filing the claim on the wrong coverage line is a common way to get denied.',
              },
              {
                q: 'Do you coordinate tree removal or just the structural side?',
                a: 'We partner, we don&rsquo;t self-perform. Tree rigging, cutting, and disposal is specialized work and we stay in our lane. We have two licensed Rochester-area arborists we call directly and sequence into the job — typically within 6 to 12 hours of our arrival. They handle the tree; we handle stabilization, drying, engineering coordination, and reconstruction. One invoice from us, one invoice from the arborist, both documented into the claim.',
              },
              {
                q: 'How fast can you be in Meadowbrook when the next squall hits?',
                a: 'From our Bloomfield Township office, Meadowbrook is about 14 miles via Opdyke and M-59 to Adams Rd. Under calm conditions that is a 20-minute drive. During an active storm response — when multiple crews are already deployed and the freeways are slowed — we commit to a 60 to 90 minute arrival window and usually beat it. If you are in 48306, 48307, or 48309 and calling during the event, you are getting a crew.',
              },
              {
                q: 'Our Oakland University rental got hit — how do we handle multi-tenant storm damage?',
                a: 'Student rentals and small multi-family buildings near OU are their own category. We sequence the work so the least-damaged units can be re-occupied first, coordinate with the landlord&rsquo;s carrier on the dwelling scope, and work directly with tenants on contents mitigation where appropriate. We&rsquo;ll also coordinate with Rochester Community Schools calendars and OU housing if the timing involves student move-outs — that came up a few times in the last event.',
              },
              {
                q: 'Is wind-driven rain in our attic covered by homeowners or flood?',
                a: 'Wind-driven rain is almost always a homeowners claim, not a flood claim — but with one important qualifier. The standard homeowners policy covers interior water damage when wind first created an opening (missing shingles, blown-in vent, opened flashing) and then rain entered through that opening. If the water came in without a wind-created opening — say, ice-dam ponding or a pre-existing roof defect — that is a coverage argument. Flood insurance specifically covers rising ground water, which is a different peril entirely.',
              },
              {
                q: 'What documentation do you provide for the insurance claim?',
                a: 'The full packet: timestamped exterior and interior photos from every damaged elevation, a narrative emergency-services scope, moisture readings logged at intake and at every drying checkpoint, equipment logs showing daily LGR and air-mover runtime, an NOAA storm report pull for your specific date and zip code, an Xactimate estimate with separated emergency, dwelling, and contents scopes, and a final drying completion certificate. Your adjuster gets everything in one PDF packet — we have built it enough times that most Oakland County adjusters will approve on first review.',
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl p-5"
                style={{
                  border: '1px solid #ebebeb',
                  boxShadow: 'rgba(0,0,0,0.03) 0px 1px 6px',
                }}
              >
                <summary
                  className="cursor-pointer text-[#222222] font-semibold list-none"
                  style={{ fontSize: '17px' }}
                >
                  {item.q}
                </summary>
                <p
                  className="mt-3 text-[#484848]"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section style={{ backgroundColor: '#222222', padding: '72px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.15 }}
          >
            Storm damage at your Rochester Hills home? We&rsquo;re dispatching now.
          </h2>
          <p
            className="text-[#d6d6d6] max-w-[640px] mx-auto mb-7"
            style={{ fontSize: '17px', lineHeight: 1.55 }}
          >
            Tarp trucks staged, structural crews on call, and a live dispatcher
            on the line. Serving 48306, 48307, 48309 and every Rochester Hills
            subdivision from Meadowbrook to Avon Estates.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 font-semibold no-underline"
            style={{
              backgroundColor: '#ff385c',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '0 32px',
              height: '56px',
              fontSize: '17px',
            }}
          >
            Call Now: {PHONE}
          </a>
        </div>
      </section>

      {/* NEARBY LINKS */}
      <section className="bg-white" style={{ padding: '56px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2
            className="text-[#222222] font-semibold mb-5"
            style={{ fontSize: '20px' }}
          >
            Also serving Rochester Hills &amp; nearby
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-[15px]">
            {[
              { label: 'Rochester Hills Water Damage', href: '/rochester-hills-mi-water-damage-restoration' },
              { label: 'Rochester Hills Fire Damage', href: '/rochester-hills-mi-fire-damage-restoration' },
              { label: 'Rochester Hills Mold Remediation', href: '/rochester-hills-mi-mold-remediation' },
              { label: 'Auburn Hills Water Damage', href: '/auburn-hills-mi-water-damage-restoration' },
              { label: 'April 2026 Storm Response', href: '/resources/april-2026-oakland-macomb-storm-response' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 rounded-full no-underline text-[#484848] hover:text-[#ff385c]"
                style={{ border: '1px solid #ebebeb', background: '#fafafa' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
