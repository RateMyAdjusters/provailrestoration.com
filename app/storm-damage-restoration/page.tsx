import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/storm-damage-restoration'

export const metadata: Metadata = {
  title:
    'Storm Damage Restoration Michigan | Wind, Tree Impact & Roof Breach Emergency Response | Provail Restoration of Bloomfield',
  description:
    'Emergency tarping, structural board-up, tree impact triage, partial roof collapse stabilization, and wind claim documentation across Bloomfield Township and Southeast Michigan. Call Provail Restoration of Bloomfield 24/7 at (248) 531-8404.',
  keywords: [
    'wind damage restoration Michigan',
    'emergency roof tarping Bloomfield',
    'tree impact roof repair Oakland County',
    'structural board up Michigan',
    'partial roof collapse triage',
    'derecho damage response Southeast Michigan',
    'wind claim documentation',
    'flying debris damage repair',
    'chimney storm damage Bloomfield',
    'siding wind tear-off restoration',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Storm Damage Restoration Michigan | Wind, Tree & Roof Breach Response',
    description:
      'Wind, tree impact, and roof breach emergency response across Southeast Michigan. Tarping, board-up, structural stabilization, and wind claim documentation.',
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'A tree just fell on the roof. What should we do in the first ten minutes?',
    a: 'Move every occupant to the opposite side of the house from the impact, away from any cracked ceiling, bowed wall, or sagging plaster. Do not step beneath the damaged span. Keep clear of any downed utility line, since a limb resting on service cables can energize a tree trunk and the soil around it. Once everyone is accounted for outside the strike zone, call our dispatch line so a crew can begin rolling with tarp, lumber, and shoring stock on the truck.',
  },
  {
    q: 'What is the difference between a quick tarp and a code-grade emergency tarp?',
    a: 'A bedsheet tarp weighted with cinder blocks flaps in the first breeze and funnels wind-driven rain directly into the breach. Our crews fasten reinforced poly to sound decking using furring strips and ring-shank roofing screws, shingle the seams downslope, and wrap the tarp at least three feet past the visible damage on every side. The anchor pattern is designed to hold through a second weather cell, not just the afternoon.',
  },
  {
    q: 'The fire department said the structure is unsafe. Can you still respond?',
    a: 'When a building has been red-tagged or placarded, we coordinate directly with the municipality and do not enter until a structural engineer or the authority having jurisdiction clears the envelope. What we can do immediately is perimeter board-up from outside, plywood closures on ground-floor openings, and temporary fencing so the property is secured while the engineering path forward is decided.',
  },
  {
    q: 'Our chimney took a hit from a falling limb. Is that an emergency?',
    a: 'A compromised masonry chimney is a life-safety concern. Loose brick can fall on walkways, a shifted crown lets water into the flue liner, and a cracked flue near a gas appliance can back up combustion products into living space. We shroud the chase with heavy poly, install temporary drip diverters inside the firebox to protect the hearth, and recommend you stop using the fireplace or gas appliance attached to that flue until a licensed chimney professional inspects it.',
  },
  {
    q: 'Wind blew a second-story window clean out. Why board it if we can tarp it?',
    a: 'An open window opening is a pressure leak in the building envelope. Wind loads inside a house with one wall open rise dramatically and can push ceilings up off the top plate or blow interior doors off their hinges. A fitted plywood panel, through-bolted or anchored with masonry fasteners depending on the wall type, restores the pressure boundary and keeps rain, animals, and unauthorized entry out until a glazier can measure for replacement sash.',
  },
  {
    q: 'How do you document wind damage for an insurance claim without overstepping?',
    a: 'We photograph the exterior from ground level and from the roof where safe, flag every lifted shingle tab and bent flashing detail with location notes, record moisture readings in any room below a compromised area, and produce a written scope of the emergency services we performed. We do not tell you whether a loss is covered, whether a deductible should apply, or whether a replacement versus repair decision should be made. Those calls belong to you and your carrier.',
  },
  {
    q: 'Great Lakes derecho hit our neighborhood. Will you still answer if every other company is slammed?',
    a: 'After a widespread wind event we expand dispatch hours, pull additional crews from partner networks, and triage calls so exposed interiors, compromised framing, and occupied homes with active intrusion move to the front. Call even if you get a busy tone somewhere else. A live dispatcher will log your address, your damage, and your contact number, and we will reach you in priority order.',
  },
  {
    q: 'Are the technicians you send to an active storm site actually qualified?',
    a: 'Our storm response leads are trained in IICRC water damage restoration standards, emergency board-up and tarping protocols, fall protection for steep-slope roof work, and utility hazard recognition. Crews on a tree-impact scene also carry documented awareness training for downed conductors and confined space entry where basements are involved.',
  },
  {
    q: 'Do you handle commercial wind and debris response, not just homes?',
    a: 'Yes. Retail storefronts with blown glass, office buildings with torn EPDM membrane, warehouses with wind-lifted metal panels, and multifamily buildings with damaged common-area roofs are part of our regular caseload. Commercial scopes typically add large-format tarping, perimeter steel banding on board-up, and coordinated access with property management.',
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://provailrestoration.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Storm Damage Restoration', item: PAGE_URL },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Storm Damage Emergency Response',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS_NAME,
    telephone: '+12485318404',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE1,
      addressLocality: 'Bloomfield Township',
      addressRegion: 'MI',
      postalCode: '48301',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
    { '@type': 'City', name: 'Royal Oak' },
    { '@type': 'City', name: 'Farmington Hills' },
    { '@type': 'City', name: 'Southfield' },
  ],
  description:
    'Wind, tree impact, and roof breach emergency response in Southeast Michigan. Emergency tarping, structural board-up, partial roof collapse triage, and wind claim documentation.',
  url: PAGE_URL,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#business`,
  name: BUSINESS_NAME,
  telephone: '+12485318404',
  url: PAGE_URL,
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
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
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

const sectionPad = { padding: '80px 0' }
const shadow =
  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'

export default function StormDamageRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white"
        style={{
          boxShadow:
            'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
        }}
      >
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center no-underline">
            <img
              src="/logo.png"
              alt={BUSINESS_NAME}
              style={{ height: 60, width: 'auto', objectFit: 'contain' }}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Home</a>
            <a href="/#services" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Services</a>
            <a href="/services/ice-dam-removal" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Ice Dam Removal</a>
            <a href="/bloomfield" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Bloomfield</a>
            <a href="#contact" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c]"
          >
            <span className="font-semibold text-[15px]">{PHONE}</span>
          </a>
        </div>
        <div
          className="lg:hidden flex items-center justify-center gap-3 py-2.5"
          style={{ backgroundColor: '#ff385c' }}
        >
          <a href={PHONE_HREF} className="text-white font-semibold text-sm no-underline">
            Call {PHONE}
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 56 }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: 32,
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Wind, Tree &amp; Roof Breach Response
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>24/7 Southeast Michigan</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Storm Damage Restoration in Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Emergency tarping, structural board-up, tree impact triage, and partial
              roof collapse stabilization across Bloomfield Township, Oakland County,
              and Southeast Michigan. One crew, one call, one secured envelope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline"
                style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}
              >
                Call Now: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Pillar Body */}
        <section className="bg-white" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-5" style={{ fontSize: '2rem', letterSpacing: '-0.44px' }}>
              Wind and tree impact: stabilizing a building envelope that just failed
            </h2>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              This page is about one thing: what happens in the first twelve hours
              after a Michigan wind event punches a hole in your house. Not a slow
              plumbing leak, not a frozen supply line, not a winter ice dam. A
              violent, sudden failure of the envelope caused by gusts, projectiles,
              or a hardwood limb the size of a car. The priorities, the tools, and
              the sequence are different from any other kind of restoration call,
              and getting them right in the first few hours is what decides whether
              you are looking at a short repair or a months-long rebuild.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-10">
              If a storm just hit and you have an active breach, please stop reading
              and call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold">{PHONE}</a>.
              A dispatcher will stay on the line while a crew is rolling. The
              sections below are here for the moments afterward, when you want to
              understand what we are doing, why, and what comes next.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              How wind actually breaks a Michigan house
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              A steady breeze does not concern us. What concerns us is the gust
              front: a sudden wall of moving air that hits one face of the building
              and then releases. The pressure jump on the windward wall and the
              corresponding suction on the leeward side create uplift on the roof,
              racking loads on the walls, and a short but brutal spike in fastener
              withdrawal force at every hold-down in the framing. Asphalt shingles
              that were set on a cold morning and never fully tabbed down are the
              first to go. The adhesive strip fails, the tab lifts, and the wind
              peels it backward along the rake. Once a course opens, every gust
              after that finds the exposed underlayment and starts working the next
              row. You can lose a hundred square feet of shingle face in under a
              minute.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Ridge caps, drip edges, and gable-end rakes are the other weak points.
              Because they sit at the transitions where one plane of the envelope
              meets another, they see the largest pressure differentials during a
              gust. When they lift, water finds the seam immediately. On vinyl
              siding, the wind peels at the lock where one course snaps over the
              next. Once a panel unlocks, its neighbors follow in sequence up the
              wall, exposing house wrap or, on older homes, bare sheathing. These
              are the conditions we walk into on a storm call.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Great Lakes derecho patterns and why Southeast Michigan keeps getting hit
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              The Great Lakes are not a passive backdrop for our weather. They are
              the engine. A derecho is a long-lived, fast-moving complex of
              thunderstorms that produces a broad swath of straight-line wind
              damage, and the corridor running from the Upper Midwest across Lake
              Michigan into Oakland County is one of the most reliable derecho
              tracks in North America. When a bow echo forms over the lake and then
              crosses into our service area, the leading edge can deliver eighty to
              one hundred mile per hour gusts over a band ten to thirty miles wide.
              Entire neighborhoods lose sections of roof and fences within the same
              five-minute window.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We plan our crew staging around those patterns. During derecho season
              we pre-position tarp bundles, cut furring strips to common lengths,
              and top off generator fuel before the alerts even post. When the
              warning boxes go up on the radar, we are not scrambling for
              materials. We are confirming routes and waiting on the first call.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Tree impact assessment: reading the damage before a single cut
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              When a limb or a whole tree comes down on a structure, the first
              question is not how to get it off. The first question is what it is
              still holding up. A tree resting on a cracked ridge beam is, in that
              moment, part of the load path. Cut it wrong and the damaged framing
              finishes failing. Our lead walks the perimeter, photographs the
              impact from every angle, and reads the hold pattern of the tree on
              the roof before calling in a tree removal partner. We look for
              secondary failures: pushed-in ridge lines, bowed rafter tails,
              popped-up soffits at the opposite gable, interior doors that will no
              longer latch because the framing has shifted.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Only after that picture is complete do we authorize the cut. Tree
              removal is staged in small sections so that load is transferred
              gradually off the damaged framing. As sections come off, our crew
              follows immediately with shoring, dimensional lumber braces against
              the undamaged framing on either side of the strike zone, and
              emergency tarp over the opened deck. The whole choreography is
              designed to avoid a secondary collapse while the limb is being
              removed.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Partial roof collapse triage
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              A partial collapse is its own category. The deck has failed in one
              area, the ceiling drywall below has either broken open or is hanging
              in torn sheets, and insulation from the attic has dumped into the
              room underneath. The work begins outside the affected room, not
              inside it. We tape a hard perimeter at the door, post a no-entry
              sign, and set up a temporary dust and debris barrier so the rest of
              the house can still be occupied. Our crew suits up in hard hats and
              fall protection before stepping under any compromised span.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Shoring comes first. We set vertical posts on solid bearing to carry
              whatever load the damaged framing is still trying to handle, with
              load-spreading plates top and bottom so we are not punching through
              finished flooring. Only once the span is stabilized do we begin
              clearing debris, and even then we work outward from the edges rather
              than in the middle, so that no one is ever beneath an unsupported
              piece of ceiling. When the span has been cleared to sound framing,
              we cover the opening from above with a weather-tight cap tarp keyed
              into the surrounding deck.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Emergency tarping done right
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              A tarp is only as good as the way it is attached. We use heavy-duty
              reinforced poly in common sizes, cut oversized by at least three feet
              on every side of the visible damage. The tarp is rolled out across
              the slope, then the upslope edge is captured beneath a line of furring
              strips screwed directly into sound decking with ring-shank roofing
              screws. The seams between tarp sheets overlap in a shingled pattern
              so that any water that gets under the top sheet is immediately
              redirected onto the one below. The downslope edge stops well past the
              eave so meltwater and rain cannot wrap back up and under.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              On steep slopes our crew ties into roof anchors with rope grabs and
              full-body harnesses. On walk-deck or low-slope commercial roofs we
              set crash pads along the edges and use perimeter warning lines. This
              is roof work and we treat it like roof work. A tarp that hurts
              someone to install is not an emergency service; it is a second
              emergency waiting to happen.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Structural board-up for window and door breaches
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Broken windows, blown-in patio doors, punched-out storefront
              glazing, and wind-shattered skylights all share the same core
              problem. They have opened the pressure envelope of the building, and
              the longer they stay open the more the interior behaves like part of
              the storm. We cut three-quarter inch plywood panels to fit each
              opening, overlap the rough opening on all four sides, and anchor
              with through-bolts into the framing, lag screws into nailers, or
              masonry fasteners into block and brick depending on the wall
              assembly. Panels are installed from the outside where possible so
              they bear against the house when the next gust arrives, not pull
              away from it.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              On commercial storefronts we add corner bracing at the mullions and,
              when the opening is wider than eight feet, steel banding across the
              face to distribute load. On patio doors we fabricate a sill bearing
              block so the plywood is not trying to hold itself up on friction
              alone. Board-up is a temporary solution, and we say so on the scope.
              Its only job is to hold the envelope until a glazier or door
              contractor can measure for permanent replacement.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Flying debris, projectile strikes, and wind-driven impact damage
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              In a strong wind event, anything not bolted down becomes airborne.
              Patio furniture, trash carts, grill covers, section-built fence
              panels, and loose landscape stone have all ended up embedded in
              siding, punching through single-pane windows, or denting garage
              doors so badly the springs no longer hold tension. We document every
              projectile strike we can identify, cross-reference it with wind
              direction on our storm log for the event, and flag each one in the
              scope as a distinct damage point. That level of detail matters for
              the claim documentation conversation later.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Some projectile damage is not visible from the ground. Small hail
              combined with high wind produces a diagonal impact pattern on
              shingles and metal trim that is invisible to a casual observer but
              obvious once you are on the roof with a marking crayon. We carry out
              those inspections only when the weather has cleared and the roof is
              safe to walk. Safety first, then documentation, then repair.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Chimney damage from limb strikes and wind-lifted flashing
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Masonry chimneys take a disproportionate share of storm damage
              because they project above the main roof plane and have the least
              lateral support. A limb strike can crack the crown, shift the upper
              courses of brick, pull the cricket flashing loose on the uphill side,
              or snap the flue liner tile inside the chase. Any of those
              conditions can send water into the chase wall, produce a plume of
              efflorescence weeks later, or in the worst case let combustion
              products back up into living space from a gas appliance vented
              through the flue. Our emergency response is to wrap the entire
              upper chase in heavy poly, install a temporary cap above the flue,
              and flag the chimney as out of service until a licensed chimney
              sweep or mason inspects it.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Siding tear-off and envelope resealing
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              When wind unlocks a run of vinyl siding, it typically takes ten or
              twenty courses with it in one direction. The exposed house wrap may
              still be intact, may be torn, or may be missing entirely on older
              homes. We stabilize the exposed wall by stapling weather-resistant
              barrier over any bare sheathing, taping the seams, and installing
              temporary flashing at any opening that has lost its J-channel
              protection. For fiber cement and lap siding, we screw temporary
              closure strips so the wall face can shed water until the permanent
              panels are re-installed. None of this is a permanent repair. It is
              an envelope seal that buys time while the permanent scope is
              scheduled.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Wind-driven rain intrusion through a compromised envelope
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Wind-driven rain is the silent second half of a storm loss. Once the
              envelope is breached, horizontal rainfall at fifty miles per hour
              behaves less like rain and more like a pressure washer. It finds the
              gap under the compromised shingle, the seam where the flashing used
              to be, the window sash that was pulled out of its sealant bead. Our
              role on the stabilization call is to close those entry points, not
              to dry the interior or rebuild finishes. Interior drying is its own
              scope, handled by our water restoration crew, and it begins only
              after the envelope is secured. You can read more about that side of
              the work on our{' '}
              <a href="/bloomfield" className="text-[#ff385c] font-semibold">Bloomfield water damage page</a>.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Documentation for wind claims
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Wind claims move fastest when the adjuster receives a complete,
              organized file from the scene. Our documentation package captures
              the damage before any stabilization work begins: wide shots from
              each compass face, detail shots of every lifted shingle tab, bent
              flashing, torn soffit, and cracked fascia, interior photographs of
              any active intrusion, and the time stamps and wind history for the
              event from local weather service data. We list the emergency
              services performed, itemize the materials used, and attach our
              written scope so the file reads clearly from start to finish. What
              we do not do is interpret your policy, negotiate a settlement, or
              promise a particular outcome. Those decisions stay with you and
              your carrier. Our job is to make sure the technical picture is
              honest and easy to verify.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Our wind response sequence, step by step
            </h3>
            <ol className="text-[#444] text-[17px] leading-[1.75] mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>Live dispatch intake.</strong> A real person takes the
                address, the type of damage, whether occupants are safely out of
                the strike zone, and whether utilities are compromised.
              </li>
              <li>
                <strong>Perimeter safety sweep.</strong> On arrival, the crew lead
                checks for downed conductors, ruptured gas service, and any sign
                of secondary structural instability before anyone approaches the
                house.
              </li>
              <li>
                <strong>Hazard control.</strong> We establish cold and hot zones,
                flag overhead hazards from partially detached siding or hanging
                limbs, and set up fall protection for any roof work.
              </li>
              <li>
                <strong>Structural stabilization.</strong> Shoring is set beneath
                compromised spans. Partial collapse areas are roped off and
                covered from above.
              </li>
              <li>
                <strong>Envelope closure.</strong> Emergency tarp over roof
                breaches. Board-up on window and door openings. Envelope
                resealing on exposed wall assemblies.
              </li>
              <li>
                <strong>Documentation package.</strong> Photos, measurements, and
                written scope compiled into a claim-ready file you can forward to
                your carrier.
              </li>
              <li>
                <strong>Handoff to permanent repair.</strong> Once the envelope
                is secure and documented, we coordinate with roofing, glazing,
                masonry, and framing contractors to schedule the permanent scope.
              </li>
            </ol>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Communities we respond to for wind and tree impact calls
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We stage out of Bloomfield Township and respond throughout Bloomfield
              Hills, Bloomfield Village, Birmingham, West Bloomfield, Troy,
              Beverly Hills, Franklin, Keego Harbor, Orchard Lake, Sylvan Lake,
              Royal Oak, Berkley, Huntington Woods, Pleasant Ridge, Ferndale,
              Farmington Hills, Southfield, Commerce Township, and the broader
              Oakland County region. During widespread Great Lakes wind events we
              also accept priority calls from Macomb County and the northern
              Wayne County suburbs based on crew availability.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              If you are outside that area and calling during an active storm, we
              will still pick up. A dispatcher can help you find a qualified
              responder in your zip code even when our own trucks are committed
              elsewhere.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2
              className="text-[#222222] font-bold mb-10 text-center"
              style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
            >
              Wind, Tree &amp; Roof Breach FAQs
            </h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-white p-6"
                  style={{ borderRadius: 16, boxShadow: shadow }}
                >
                  <h3 className="text-[#222222] text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-white" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}
            >
              Tree on the roof. Window gone. Tarp on the way.
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call {BUSINESS_NAME}. A live dispatcher will answer, get a
              stabilization crew rolling, and stay on the line until the envelope
              is secured.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline"
              style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}
            >
              Call {PHONE}
            </a>
            <p className="text-[#6a6a6a] text-sm mt-6">
              {BUSINESS_NAME} &middot; {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#222222] text-white" style={{ padding: '40px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm">
          <p className="mb-2 font-semibold">{BUSINESS_NAME}</p>
          <p className="m-0 opacity-80">
            {ADDRESS_LINE1}, {ADDRESS_LINE2} &middot;{' '}
            <a href={PHONE_HREF} className="text-white underline">{PHONE}</a>
          </p>
        </div>
      </footer>
    </>
  )
}
