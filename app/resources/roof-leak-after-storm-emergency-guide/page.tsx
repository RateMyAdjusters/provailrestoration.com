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
  title: 'Roof Leak After a Storm: Emergency Response Guide',
  description:
    'Stop a roof leak after storm damage in Michigan fast. Emergency steps for water intrusion, safe tarping, documentation, and claim prep. Call Provail 24/7.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/roof-leak-after-storm-emergency-guide',
  },
  openGraph: {
    title: 'Roof Leak After a Storm: Emergency Response Guide',
    description:
      'The first 60 minutes after a storm roof leak decide the cost of the repair. A Michigan homeowner emergency guide from Provail Restoration of Bloomfield.',
    url: 'https://provailrestoration.com/resources/roof-leak-after-storm-emergency-guide',
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
    q: 'How long will it take for an adjuster to come out after a storm roof leak?',
    a: 'After a named storm event in Metro Detroit, carriers are usually running on a 3 to 10 day queue for field adjusters. Your claim is opened within a day, but the in-person inspection can trail that by a week or more when the region is saturated with losses. That is exactly why mitigation, documentation, and temporary tarping need to happen before the adjuster arrives. A wet ceiling that sits for nine days untouched is a secondary damage problem, and carriers expect the homeowner to take reasonable steps to prevent further loss in the interim.',
  },
  {
    q: 'I rent the house. Whose responsibility is the roof leak?',
    a: 'As a renter, the structure itself is your landlord\'s responsibility. Notify the landlord or property manager the moment you discover the leak, in writing if possible, and take photos for your own records. Your personal belongings are your responsibility and are typically covered under a renters insurance policy if you have one. Do not pay for roof repair out of pocket on a property you do not own, and do not authorize any structural work without the owner\'s go-ahead.',
  },
  {
    q: 'What about a condo or HOA situation?',
    a: 'Condominium roofs are almost always governed by the master association policy, not your individual unit policy. Report the leak to the HOA or management company immediately and follow their claims process for the structure. Your HO-6 unit-owner policy usually covers the interior finishes, drywall, flooring, and contents damaged by the intrusion, but the roof itself gets repaired through the master. Document both angles and keep the two claims separate in your notes.',
  },
  {
    q: 'How worried should I be about mold after a roof leak?',
    a: 'Visible mold growth can begin on wet porous materials within 48 to 72 hours under the right conditions. A roof leak that soaks insulation, drywall, and framing is squarely inside that window if nothing is done. The answer is not panic, it is fast drying. Get air movers and dehumidifiers running, get wet insulation removed, and get a moisture reading log started. Handled quickly, most storm leaks never become a mold job.',
  },
  {
    q: 'My ceiling is sagging and full of water. Is that an emergency?',
    a: 'Yes. A visibly bulging drywall ceiling that is holding pooled water can let go without warning and can drop a significant weight on anyone standing underneath. Clear the room, keep children and pets out, and if you are comfortable doing it, puncture a small relief hole at the lowest point of the sag with a bucket underneath to drain the pocket in a controlled way. If you are not comfortable, call a contractor and stay out of the room until a crew arrives.',
  },
  {
    q: 'How does the wind or hail deductible work on my homeowners policy?',
    a: 'Many Michigan homeowners policies carry a separate wind or hail deductible that is calculated as a percentage of the dwelling coverage, not a flat dollar figure. On a $400,000 dwelling, a 1% wind deductible is $4,000. That is a policy question, not a contractor question. Pull the declarations page of your policy or call your agent to confirm how your specific deductible applies before you assume a number. We do not give coverage advice.',
  },
  {
    q: 'It is 2 a.m. and water is pouring in. Should I really call now?',
    a: 'Yes. Active water intrusion during the overnight hours is exactly what 24 hour dispatch lines are built for. Every hour the leak runs unchecked is additional drywall, insulation, flooring, and framing saturation. A phone call at 2 a.m. does not cost anything, and the crew can walk you through containment steps over the phone while they are on the way.',
  },
  {
    q: 'Can I just wait until morning if the drip is small?',
    a: 'A small drip in the middle of the night is almost always bigger than it looks. What you see on the ceiling is the final exit point of water that has already tracked through attic insulation, across rafter tops, and down framing members. Catch the drip in a bucket, move anything valuable out from under it, shoot photos, and start making calls at first light. If the drip accelerates or the ceiling starts to bulge, do not wait.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Roof Leak After a Storm: Emergency Response Guide for Michigan Homeowners',
  description:
    'A Michigan homeowner emergency guide for a roof leak after storm damage — safety, containment, documentation, tarping, and claim preparation.',
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
      'https://provailrestoration.com/resources/roof-leak-after-storm-emergency-guide',
  },
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Temporarily Tarp a Storm-Damaged Roof Leak',
  description:
    'A six-step method for safely installing an emergency tarp over a roof leak after a storm, written for Michigan homeowners.',
  totalTime: 'PT45M',
  tool: [
    { '@type': 'HowToTool', name: 'Heavy-duty poly tarp (at least 6 mil)' },
    { '@type': 'HowToTool', name: 'Five or six 1x3 furring strips' },
    { '@type': 'HowToTool', name: 'Roofing nails or exterior screws' },
    { '@type': 'HowToTool', name: 'Utility knife' },
    { '@type': 'HowToTool', name: 'Roofing sealant or butyl tape' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Confirm conditions are safe',
      text: 'Do not climb a wet sloped roof, do not go up with sustained winds over 15 mph, and do not work near overhead power lines. If any of those are true, wait or call a professional.',
    },
    {
      '@type': 'HowToStep',
      name: 'Measure and cut the tarp',
      text: 'Size the tarp to cover the damaged area plus at least three feet of overlap in every direction, and ideally wrap up and over the ridge so water cannot drive underneath.',
    },
    {
      '@type': 'HowToStep',
      name: 'Roll the top edge around a furring strip',
      text: 'Lay a 1x3 along the upslope edge of the tarp and roll the tarp material tightly around it two or three turns. This creates a sealed anchor bar.',
    },
    {
      '@type': 'HowToStep',
      name: 'Fasten the anchor bar above the damage',
      text: 'Screw or nail the wrapped anchor bar into the roof deck above the leak, through the shingles. The wrap keeps water from reaching the fastener holes.',
    },
    {
      '@type': 'HowToStep',
      name: 'Secure the sides and bottom',
      text: 'Repeat the roll-and-anchor method on the remaining edges of the tarp, pulling the field tight. Stagger fasteners so wind cannot peel a single edge.',
    },
    {
      '@type': 'HowToStep',
      name: 'Seal the fasteners and photograph the work',
      text: 'Dab roofing sealant or butyl tape over every exposed fastener head, then photograph the finished tarp from the ground for your claim file.',
    },
  ],
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
      name: 'Roof Leak After Storm',
      item: 'https://provailrestoration.com/resources/roof-leak-after-storm-emergency-guide',
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

export default function RoofLeakAfterStormEmergencyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
                <span>Emergency Guide</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Metro Detroit, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[880px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Roof Leak After a Storm: Emergency Response Guide for Michigan Homeowners
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[760px] mx-auto mb-6 leading-relaxed">
              When a storm leaves a roof leak, the next 60 minutes decide
              how much damage you will pay to fix. A step by step
              playbook for containing an emergency roof leak, documenting
              it properly, and keeping a storm roof leak water damage
              claim clean.
            </p>
            <p className="text-[#6a6a6a] text-sm italic max-w-[680px] mx-auto mb-10">
              This page is educational. Not legal or insurance advice —
              contact a licensed professional for questions specific to
              your policy or your situation.
            </p>

            <HeroCTA />
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
              <li>Whether it is actually safe to move around the house</li>
              <li>Stopping the water at the interior, not the roof</li>
              <li>Documenting the loss before cleanup begins</li>
              <li>Temporary tarping — when it is safe and when it is not</li>
              <li>How a roof leak becomes a water damage claim</li>
              <li>Who to call first — roofer, restoration contractor, or insurance</li>
              <li>What Michigan policies typically cover for wind and storm roof losses</li>
              <li>Common mistakes that reduce a claim</li>
              <li>Frequently asked questions</li>
            </ul>
          </div>
        </section>

        {/* SECTION 1 — SAFETY */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step One"
              title="Is It Actually Safe to Move Around the House?"
              intro="A storm-damaged house is a temporarily unpredictable one. Before anything else, check the hazards that kill people after roof leaks — electricity, structure, and the attic."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A roof leak after storm damage is rarely a single clean
                drip in the middle of a ceiling. Wind driven rain rides
                shingle uplift and flashing failure, tracks down rafters,
                saturates attic insulation, and reappears as an interior
                ceiling stain fifteen feet from the actual breach. By the
                time you are looking at the stain, water has already
                been inside the assembly for a while.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Electrical hazards in wet ceilings
              </h3>
              <p>
                Every ceiling in a Michigan home has wiring running
                through the joist bays above it. Recessed cans, ceiling
                fans, smoke detectors, and junction boxes all become
                conductive when they are wet. If water is dripping from
                a light fixture or near one, kill the breaker feeding
                that circuit at the panel before you touch anything. If
                you cannot identify the right circuit and the leak is
                near fixtures, cut the whole lighting branch for that
                floor.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Structural sag signs
              </h3>
              <p>
                A drywall ceiling that has held standing water for a few
                hours can look deceptively intact until the exact moment
                it lets go. Dark rings that keep widening, a visible
                bulge, paint that is starting to peel in sheets, or
                creaking overhead are all signals to clear the room.
                Keep kids and pets out, move furniture away from the
                drop zone, and treat the space as off limits until a
                controlled relief puncture or a contractor can address
                it.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Attic access considerations
              </h3>
              <p>
                Do not climb into a dark wet attic to chase a roof leak.
                The combination of saturated blown-in insulation, an
                unfamiliar walking surface limited to joist tops, and
                energized junction boxes is exactly the situation
                homeowners fall through ceilings in. If you need to see
                the attic, peek from the hatch with a flashlight, note
                where the water is tracking, and leave the rest for the
                crew.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — STOP THE WATER */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Two"
              title="Stop the Water at the Interior — Not the Roof"
              intro="The goal in the first hour is not to fix the roof. It is to contain what the roof is letting in and keep the damage from spreading to a second floor or a third room."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Grab buckets, a wet vac if you have one, plastic
                sheeting, and old towels. Set the buckets directly under
                active drips and swap them before they overflow. Lay
                plastic over anything that cannot be moved — upholstered
                furniture, a bed, an area rug — and slide smaller items
                out of the room entirely.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Draining a bulging ceiling on purpose
              </h3>
              <p>
                If a section of drywall ceiling is visibly sagging with
                trapped water, a controlled relief puncture is safer
                than letting it collapse. Put a five gallon bucket
                directly under the lowest point of the bulge, and poke a
                small hole straight up with the tip of a screwdriver or
                a drywall knife. The pocket drains into the bucket
                instead of onto the floor. If you are not comfortable
                doing it, stay out of the room and call a contractor.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Cut power to the affected area
              </h3>
              <p>
                Before you put buckets under a fixture or walk under a
                wet ceiling, shut off the attic and room electrical
                circuits at the panel. Label the breakers with a piece
                of tape as you go so the crew that arrives later can
                see what has already been made safe. A dry area beats a
                lit one every time in a water emergency.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — DOCUMENT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Three"
              title="Document Before You Clean Up"
              intro="Photos are free. Take more than you think you need, and take them in the right order."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Work wide to tight. Start from the doorway of each
                affected room so a viewer can orient themselves, then
                walk in closer to the stain, then closer still to the
                dripping point itself. Shoot the ceiling, the walls, the
                floor, and anything on the floor that is getting wet. If
                you can safely see it from the attic hatch, shoot the
                attic side as well.
              </p>
              <p>
                Use video in addition to stills. A slow thirty second
                pan of each room captures context that individual photos
                miss, and narrate out loud — the timestamp and voice
                track become a contemporaneous record that is hard to
                argue with later. Back everything up to the cloud before
                you put the phone down, not after. Phones drop, get
                wet, and die, and a lost camera roll is a lost claim
                file.
              </p>
              <p>
                Then do the exterior. From the ground, shoot the roof
                line, the gutters, the downspouts, anything in the yard
                that clearly came from the storm, and any visible shingle
                uplift or missing shingles. Do not climb on the roof for
                photos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — TARPING */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Four"
              title="Temporary Tarping — When It Is Safe and When It Is Not"
              intro="A correctly installed tarp can buy a homeowner days of breathing room before permanent roof repair. A badly installed tarp usually makes the leak worse."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most homeowners should not be on their own roof after a
                storm, period. Wet sloped roofs are a leading cause of
                fall injuries in the hours after severe weather, and a
                slip on an asphalt shingle surface in the rain does not
                forgive beginners. Before you even pull a ladder out,
                check three things.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The roof surface is dry enough to walk.</li>
                <li>Sustained winds are under 15 mph.</li>
                <li>No overhead service or utility lines run across your work path.</li>
              </ul>
              <p>
                If any of those are no, this is a call for a{' '}
                <a
                  href="/storm-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  storm damage restoration
                </a>{' '}
                crew, not a ladder. When conditions do permit a
                temporary tarp, the method below is the standard we use
                on our own emergency calls.
              </p>

              <h3 className="text-[#222222] text-xl font-semibold mt-8 mb-2">
                Six step tarping method
              </h3>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>Confirm conditions are safe.</strong> Dry
                  surface, winds under 15 mph, no power lines.
                </li>
                <li>
                  <strong>Measure and cut the tarp.</strong> Size the
                  tarp to cover the damaged area plus at least three
                  feet of overlap on every side. Wrap up and over the
                  ridge when you can — water drives underneath edges
                  that stop short.
                </li>
                <li>
                  <strong>Roll the top edge around a 1x3.</strong> Lay a
                  furring strip along the upslope edge and roll the
                  tarp material tightly around it two or three turns.
                  You are building a sealed anchor bar.
                </li>
                <li>
                  <strong>Fasten the anchor bar above the damage.</strong>{' '}
                  Screw or nail the wrapped bar into the roof deck,
                  through the shingles. The wrap protects the fastener
                  holes from taking on water.
                </li>
                <li>
                  <strong>Secure the sides and bottom.</strong> Repeat
                  the roll and anchor method on the remaining edges,
                  pulling the field tight. Stagger the fasteners so
                  wind cannot peel a single edge.
                </li>
                <li>
                  <strong>Seal fasteners and photograph.</strong> Dab
                  roofing sealant or butyl tape over every fastener
                  head, then shoot photos of the finished tarp from the
                  ground for the file.
                </li>
              </ol>
              <p>
                A common DIY mistake is to nail the tarp flat to the
                roof through its field. Those nail holes become brand
                new leaks the moment the next rain arrives. If your
                tarp is not rolled around a bar, it is not sealed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — HOW IT BECOMES A CLAIM */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Five"
              title="How a Roof Leak Becomes a Water Damage Claim"
              intro="The visible stain on the ceiling is the end of the water's journey, not the beginning. A proper scope of work traces it back to the point of entry."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Wind driven rain is sneaky. A single pinhole at a
                flashing joint, a lifted shingle tab, or a failed pipe
                boot can ride fifteen or more feet down a rafter before
                finding an escape point through a nail pop or a light
                fixture hole. That rafter tracking is why a bedroom
                ceiling stain on the second floor can turn out to
                originate near the ridge on the opposite side of the
                house.
              </p>
              <p>
                Attic insulation makes the problem harder to see. Wet
                fiberglass or blown cellulose hides the true footprint
                of the saturation, and insulation that holds water for
                several days will rot the sheathing and framing
                underneath it long before anything becomes visible from
                below. A proper inspection pulls the insulation back in
                the suspected area and checks moisture readings against
                a dry reference point elsewhere in the attic.
              </p>
              <p>
                The 48 to 72 hour mold window matters here. Under IICRC
                S500, the standard the restoration industry references,
                clean rainwater starts life as Category 1 water. Left to
                sit in building materials through its second and third
                day, it can degrade to Category 2 as it picks up
                contaminants and supports microbial growth. The same
                leak handled on day one and handled on day five can
                look like very different scopes of work on paper. Speed
                is the cheapest tool in a{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                job.
              </p>
              <p>
                If the leak has already been sitting, or if you are
                seeing dark staining, musty odor, or visible growth on
                wet materials, that is a conversation for a{' '}
                <a
                  href="/mold-remediation"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  mold remediation
                </a>{' '}
                plan, not just a drying plan.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHO TO CALL FIRST */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Six"
              title="Who to Call First — Roofer, Restoration Contractor, or Insurance?"
              intro="Order matters. Making the calls in the wrong sequence is one of the most common reasons homeowners end up paying twice."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>First call: a restoration contractor.</strong>{' '}
                The priority is to stop the water from causing more
                interior damage, which is a mitigation problem, not a
                roofing problem. A restoration crew will extract
                standing water, set air movers and dehumidifiers,
                document the loss, and coordinate with the carrier once
                the scene is stable. Most reputable restoration
                companies also handle or subcontract emergency tarping
                on the same visit.
              </p>
              <p>
                <strong>Second call: your insurance carrier.</strong>{' '}
                Once the scene is safe and contained, open the claim
                through the 24 hour claims line on your policy card.
                You will get a claim number, and a field adjuster will
                be scheduled. The contractor's documentation from the
                first visit becomes part of what the adjuster reviews.
              </p>
              <p>
                <strong>Third call: a licensed roofer.</strong> The
                roof itself gets permanently repaired after the
                interior has been stabilized and the claim is open. In
                a heavy storm week in Oakland or Macomb counties, the
                reputable roofing companies are booked out a week or
                two, and the tarp buys that time.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — COVERAGE BACKGROUND */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Seven"
              title="What Michigan Homeowners Policies Typically Cover for Wind and Storm Roof Losses"
              intro="Educational background only. Not legal or insurance advice — confirm everything on this page with your licensed agent and your own policy."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A typical Michigan HO-3 homeowners policy is written on
                a named peril or open peril basis, with wind and hail
                among the standard covered perils for the dwelling
                itself. That is the coverage most commonly triggered by
                a roof leak after storm damage — the wind lifts
                shingles or drives rain past flashing, and the resulting
                interior water damage follows from a covered peril.
              </p>
              <p>
                Wind and flood are not the same thing. Rising surface
                water, river flooding, and backed up municipal sewers
                are not wind losses and are generally excluded from
                standard homeowners policies. Those are separate flood
                or sewer backup products. A roof leak caused by wind
                driven rain entering through a storm damaged roof is a
                wind loss, not a flood loss, and the distinction is
                worth understanding going in.
              </p>
              <p>
                Many Michigan policies carry a separate wind or hail
                deductible calculated as a percentage of the dwelling
                limit rather than a flat dollar amount. On a larger
                home that can change the math significantly. Read your
                declarations page, or better yet, call your agent and
                ask them to explain exactly how your wind deductible
                applies before you assume a number.
              </p>
              <p>
                For additional background on how the documentation side
                of a storm claim fits together, our guide on{' '}
                <a
                  href="/resources/document-water-damage-for-insurance"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  how to document water damage for insurance
                </a>{' '}
                walks through the photo, video, and inventory process in
                more detail.
              </p>
              <p className="italic">
                Nothing on this page is a coverage opinion. We are a
                restoration contractor, not a public adjuster, not an
                attorney, and not an insurance agent. We do not negotiate
                claims for homeowners and we do not make coverage
                predictions. For questions about your policy, call your
                agent or your carrier.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8 — MISTAKES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Eight"
              title="Common Mistakes That Reduce a Claim"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The most common way a storm roof leak water damage claim
                gets smaller than it should be is not fraud or bad
                faith. It is well intentioned cleanup that happens
                before the documentation has caught up.
              </p>
              <p>
                <strong>Throwing away materials too early.</strong> Wet
                drywall, soaked insulation, and ruined carpet all look
                like trash. Bagging them and hauling them to the curb
                before an adjuster or a restoration contractor has seen
                them in place erases the strongest piece of evidence
                you had. Leave the debris where it is until someone has
                documented it.
              </p>
              <p>
                <strong>Patching the roof before photographing
                  damage.</strong> A homeowner who climbs up, smears a
                tube of sealant across a lifted shingle, and comes back
                down has just removed the before photo from the file.
                Document first, patch second.
              </p>
              <p>
                <strong>DIY tarping that adds nail holes.</strong> A
                flat nailed tarp, as covered above, is a collection of
                new leaks waiting for the next storm. If you are going
                to tarp, do it the right way, and photograph the
                finished job from the ground.
              </p>
              <p>
                <strong>Delaying the call overnight.</strong> Every hour
                water sits in insulation and drywall is another hour of
                materials that might have been salvageable becoming
                materials that are not. Overnight delay is the single
                most expensive decision on this list. If the leak is
                active, call.
              </p>
              <p>
                If the water has reached a basement — either from the
                leak traveling down through wall cavities or from a
                related sump or storm event — our{' '}
                <a
                  href="/services/basement-flood-cleanup"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  basement flood cleanup
                </a>{' '}
                page covers the next layer of the response. And for a
                broader walkthrough of the first day after any water
                event, the{' '}
                <a
                  href="/resources/first-24-hours-after-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  first 24 hours after water damage checklist
                </a>{' '}
                is the companion to this guide.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Roof Leak After Storm FAQ"
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

        {/* SERVICE AREA */}
        <section className="bg-white" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <p className="text-[#6a6a6a] text-[15px] leading-[1.7]">
              Provail Restoration of Bloomfield handles roof leak
              restoration Michigan homeowners across Oakland and Macomb
              counties — including{' '}
              <a
                href="/bloomfield"
                className="text-[#ff385c] font-semibold no-underline"
              >
                Bloomfield Township
              </a>{' '}
              and{' '}
              <a
                href="/macomb-township-mi-water-damage-restoration-near-you"
                className="text-[#ff385c] font-semibold no-underline"
              >
                Macomb Township
              </a>
              .
            </p>
          </div>
        </section>

        {/* CLOSING DISCLAIMER */}
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
                <strong>Not legal or insurance advice.</strong> This
                guide is educational and general. For questions about
                your specific policy, coverage, or the legal or
                contractual relationship between you and your carrier,
                contact a licensed professional — your insurance agent,
                your carrier, or an attorney who handles insurance
                matters. Provail Restoration of Bloomfield is a
                restoration contractor; we do not handle your claim,
                we do not provide legal, insurance, or medical advice,
                and nothing on this page guarantees a coverage outcome.
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
              Active roof leak right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a
                href={PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {PHONE}
              </a>{' '}
              for 24/7 emergency dispatch. Provail Restoration of Bloomfield will walk you through containment over the phone and put a crew on the way.
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
