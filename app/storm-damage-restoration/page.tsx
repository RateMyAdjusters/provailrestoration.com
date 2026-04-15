import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const BUSINESS_NAME = 'PROVAIL Water Damage Restoration Bloomfield'

export const metadata: Metadata = {
  title:
    'Storm Damage Restoration in Michigan | Wind, Tree & Roof Damage | PROVAIL',
  description:
    'Storm damage restoration across Bloomfield Township and Southeast Michigan. Emergency tarping, board-up, wind and tree impact repair, roof leaks, and storm-driven water intrusion. Call PROVAIL 24/7 at (248) 531-8404.',
  keywords: [
    'storm damage restoration Michigan',
    'wind damage repair Bloomfield',
    'tree impact damage Michigan',
    'emergency roof tarping Bloomfield Township',
    'board up service Oakland County',
    'storm water intrusion repair Michigan',
    'Great Lakes storm damage',
    'PROVAIL storm damage Bloomfield',
  ],
  alternates: {
    canonical: 'https://provailrestoration.com/storm-damage-restoration',
  },
  openGraph: {
    title:
      'Storm Damage Restoration in Michigan | PROVAIL Bloomfield',
    description:
      'Wind, tree, roof, and water-intrusion storm damage restoration in Bloomfield Township and Southeast Michigan. 24/7 emergency response.',
    url: 'https://provailrestoration.com/storm-damage-restoration',
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'How quickly can a crew respond after a severe storm in Bloomfield Township?',
    a: 'Our 24/7 dispatch is built around a 60-minute target response window across Bloomfield Hills, Bloomfield Township, Birmingham, West Bloomfield, Troy, and surrounding Oakland County communities. After a widespread Great Lakes storm event, calls are triaged so that homes with active water intrusion, exposed interiors, or unsafe structural conditions are reached first.',
  },
  {
    q: 'What is the difference between emergency tarping and a roof repair?',
    a: 'Emergency tarping is a temporary protective measure. We secure heavy-duty reinforced tarps over compromised roof sections to keep wind-driven rain, snow, and debris out of the structure while permanent roofing work is scheduled. A full roof repair restores decking, underlayment, flashing, and shingles to a finished, weather-tight condition.',
  },
  {
    q: 'Do I need a board-up if my windows or doors were broken in the storm?',
    a: 'Yes. Open window and door openings invite rain, animals, and unauthorized entry, all of which can multiply your loss. Our board-up crews install fitted plywood panels and secure fasteners so the building envelope is closed off until glass, framing, and trim can be properly replaced.',
  },
  {
    q: 'A tree fell on my house. What should I do first?',
    a: 'Move everyone to a safe area away from the impact zone, avoid touching downed power lines, and call us so we can mobilize a crew. We coordinate with qualified tree removal partners, then immediately tarp and board the impact area to stop further water entry while documentation is gathered for your records.',
  },
  {
    q: 'Why does so much storm damage in Michigan involve hidden water intrusion?',
    a: 'Wind-driven rain finds the smallest gaps in flashing, soffits, attic vents, and window seals. Water can travel along framing for several feet before showing as a stain on a ceiling or wall, which is why thermal imaging and moisture mapping are an essential part of our storm damage assessment.',
  },
  {
    q: 'Will you work directly with my insurance company?',
    a: 'We document conditions, generate detailed scopes, and share photos and moisture readings with your carrier so the adjuster has what they need. Coverage decisions remain between you and your insurer, but we make the technical side of the file as clear as possible.',
  },
  {
    q: 'Are your storm response technicians certified?',
    a: 'Yes. Our technicians follow IICRC standards for water damage restoration, structural drying, and applied microbial remediation, and our project leads carry credentials in safe board-up and emergency stabilization work.',
  },
  {
    q: 'What kinds of storms cause the most damage in Southeast Michigan?',
    a: 'Summer derechos and straight-line wind events, lake-effect snowstorms, freezing rain in late fall, and intense spring thunderstorms with hail and microbursts are the most common loss drivers. Each one creates a different mix of roof, siding, window, and water-intrusion damage.',
  },
  {
    q: 'Do you handle commercial storm damage too?',
    a: 'Yes. We respond to retail, office, multi-family, and light industrial properties. Commercial work typically includes large-format tarping, perimeter board-up, water extraction, and drying of carpet, drywall, and insulation under accelerated timelines.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Storm Damage Restoration',
  provider: {
    '@type': 'LocalBusiness',
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
    'Emergency storm damage restoration in Southeast Michigan including wind damage, tree impact, roof tarping, board-up, and storm-driven water intrusion repair.',
  url: 'https://provailrestoration.com/storm-damage-restoration',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/storm-damage-restoration#business',
  name: BUSINESS_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/storm-damage-restoration',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          <span className="text-white/40">|</span>
          <a href={SMS_HREF} className="text-white font-semibold text-sm no-underline">
            Text Us
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
                  Emergency Storm Response
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>24/7 in Michigan</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Storm Damage Restoration in Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Wind, tree impact, roof breaches, and storm-driven water intrusion across
              Bloomfield Township, Oakland County, and Southeast Michigan. Tarping,
              board-up, and full restoration from one local team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline"
                style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}
              >
                Call Now: {PHONE}
              </a>
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 text-[#222222] font-semibold text-base no-underline"
                style={{
                  borderRadius: 8,
                  padding: '0 28px',
                  height: 52,
                  border: '2px solid #222222',
                  backgroundColor: 'transparent',
                }}
              >
                Text Our Crew
              </a>
            </div>
          </div>
        </section>

        {/* Pillar Body */}
        <section className="bg-white" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-5" style={{ fontSize: '2rem', letterSpacing: '-0.44px' }}>
              When a Michigan storm hits your home, every minute matters
            </h2>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Storms in Southeast Michigan rarely come in one shape. A single
              system can drop two inches of rain, push gusts past sixty miles per
              hour, and leave a trail of torn shingles, snapped limbs, dented
              gutters, and saturated drywall behind it. By the time the wind
              calms down, the real work of protecting the inside of your home
              has only just begun. Our storm response crews are organized for
              that exact moment, with trucks staged, tarps rolled, lumber cut to
              common sizes, and extraction equipment fueled and ready before the
              forecast even hits the ground.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-10">
              On this page we walk through the kinds of storm damage we see
              most often in the Bloomfield area, the order in which we address
              them, and what you can expect when you call us at{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold">{PHONE}</a>.
              If you are already dealing with active water entry or a tree on
              the structure, please skip the reading and call now. We can
              continue the conversation while a crew is rolling.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Wind damage: more than missing shingles
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Wind is the single most common driver of property loss in
              Michigan. A gust does not have to reach hurricane strength to
              lift the leading edge of a shingle, peel back ridge caps, or
              flex a section of vinyl siding off its J-channel. Once that
              outer layer is compromised, the underlayment and sheathing
              underneath are exposed to direct rain, and the path into your
              attic and ceilings is open. Damaged ridge vents, bent gutter
              aprons, missing drip edge, and torn fascia are all things our
              technicians look for on the first walkaround. We document each
              finding with photos and notes so the conditions are recorded
              before we begin temporary repairs.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Wind also does damage that is harder to see. Pressure
              differentials around a building can pop attic hatches, blow
              insulation off the top of ceiling joists, and force water sideways
              through soffit screens that are normally protected. We carry
              moisture meters and thermal imaging cameras into the attic on
              every storm response so we can find the wet pockets before they
              show up as a stain on the bedroom ceiling a week later.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Tree impact and falling limbs
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Mature oaks, maples, and ash trees are part of what makes
              Bloomfield Hills, Birmingham, and the surrounding neighborhoods
              feel like home. They are also some of the heaviest objects on
              your property. When a limb the size of a refrigerator comes down
              on a roof, the damage extends well past the visible hole. Roof
              decking flexes, trusses can shift on their bearing points,
              ceiling drywall cracks, and water finds every new gap on its way
              down. We stage tree-impact responses in two stages: first we
              work with qualified tree removal partners to safely lift the
              limb off the structure, then our crew tarps the breach, supports
              compromised framing if needed, and starts drying anything below
              the damaged area.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Roof damage and emergency tarping
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Emergency tarping is one of the most useful tools in storm
              response and one of the most commonly done wrong. A tarp tossed
              over a hole and weighted down with a few bricks does almost
              nothing. The wind lifts it, water runs underneath it, and the
              homeowner is no better off than before. Our crews install
              reinforced poly tarps using furring strips fastened directly into
              sound decking, with overlapping seams oriented to shed water
              down-slope. The tarp covers an area larger than the visible
              damage so that wind-driven rain cannot wrap around the edges. On
              steeper roofs we use roof harnesses and anchor points so our
              technicians can work safely while you stay inside.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We treat tarping as a bridge, not a destination. The goal is to
              hold the line while the permanent roofing scope is developed and
              scheduled. We can connect you with reputable local roofing
              contractors when you are ready to plan the long-term repair.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Board-up service: securing the building envelope
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Broken windows, blown-in patio doors, and storm-shattered
              skylights leave more than just a draft. They leave an open
              opening that animals, weather, and uninvited visitors can all
              walk through. Our board-up service uses three-quarter-inch
              plywood cut to fit each opening, anchored with through-bolts or
              screw anchors depending on the wall type, and trimmed so the
              edges seal against weather stripping where possible. For
              commercial storefronts we add corner bracing and, when needed,
              steel banding. The board-up stays in place until you have a
              glazier or door contractor scheduled for permanent repair.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Storm-driven water intrusion
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Most of the long-term damage from a Michigan storm is not from
              the storm itself. It is from the water that finds its way into
              wall cavities, ceiling assemblies, attic insulation, and basement
              corners after the wind passes. Drywall absorbs water like a
              sponge, fiberglass insulation holds it against framing, and
              hardwood flooring will cup and crown within a day or two if it
              is not dried out properly. We extract standing water, set
              commercial-grade dehumidifiers and air movers on a documented
              psychrometric plan, and monitor moisture readings daily until the
              affected materials return to dry standard. When materials are
              past saving, we coordinate controlled removal so the rebuild
              starts on a clean, dry substrate.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Basements are a special case after a storm. Saturated soil pushes
              groundwater against foundation walls, sump pumps run continuously,
              and a single power blip can leave a basement filling fast. If
              your sump system has been overwhelmed, our{' '}
              <a href="/services/basement-flood-cleanup" className="text-[#ff385c] font-semibold">basement flood cleanup</a>{' '}
              crew can extract, sanitize, and dry the space, then talk through
              what to do about the contents.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Great Lakes weather patterns and why Michigan is different
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              The Great Lakes do not just sit there. They actively shape the
              weather that hits your roof. In summer, the lake breeze
              boundaries that form along Lake Michigan and Lake Huron focus
              thunderstorms, sometimes intensifying them as they sweep east
              into Oakland County. The same lake influence drives lake-effect
              snow bands in late fall and winter, which can deposit a foot of
              snow on one neighborhood while leaving another a few miles away
              almost untouched. Heavy wet snow is a structural load problem,
              and once it sits on a warm attic deck it begins the cycle that
              produces ice dams on the eaves.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Spring brings rapid temperature swings and powerful low-pressure
              systems that can produce damaging straight-line winds, hail, and
              isolated tornadoes. Fall is the season for leaf-clogged gutters
              that overflow in the first hard rain and dump water against
              foundations. We design our response plan around those Michigan
              realities. Our trucks are stocked for water, snow, ice, and wind
              year round, not just for the season the calendar says we are in.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Documentation and the insurance conversation
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              When a major storm rolls through, insurance carriers receive
              thousands of claims in a short window. The files that move
              fastest are the ones that arrive with clear, organized
              documentation. We photograph conditions before any work begins,
              note moisture readings room by room, list the equipment we set
              and where, and produce a written scope your adjuster can read
              without needing a translator. We do not negotiate coverage on
              your behalf, and we are careful never to promise an outcome that
              belongs to your insurer. What we do is make sure the technical
              picture of the loss is complete and easy to verify.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Our storm response process
            </h3>
            <ol className="text-[#444] text-[17px] leading-[1.75] mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>Phone triage.</strong> A real person answers, gathers
                the address, the nature of the damage, and any safety concerns,
                then dispatches the closest crew.
              </li>
              <li>
                <strong>On-site safety check.</strong> The lead technician
                verifies that there are no downed power lines, gas leaks, or
                unstable structural conditions before anyone steps inside.
              </li>
              <li>
                <strong>Stabilize the building envelope.</strong> Tarp the roof,
                board the openings, and stop active water entry first.
              </li>
              <li>
                <strong>Extract and assess.</strong> Standing water is removed,
                affected areas are mapped with moisture meters, and a written
                scope is built.
              </li>
              <li>
                <strong>Dry and monitor.</strong> Air movers and dehumidifiers
                are placed and checked daily until materials reach dry standard.
              </li>
              <li>
                <strong>Hand off to rebuild.</strong> Once the affected areas
                are dry and clean, we coordinate the path to permanent repair.
              </li>
            </ol>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Communities we serve for storm response
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We respond throughout Bloomfield Township, Bloomfield Hills,
              Bloomfield Village, Birmingham, West Bloomfield, Troy, Royal Oak,
              Beverly Hills, Franklin, Keego Harbor, Farmington Hills,
              Southfield, and the broader Oakland County area. For homeowners
              outside our usual service zone, call us anyway. We will help you
              find a qualified responder if we cannot reach you ourselves.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Need a related service? See our{' '}
              <a href="/bloomfield" className="text-[#ff385c] font-semibold">Bloomfield water damage page</a>,{' '}
              <a href="/services/ice-dam-removal" className="text-[#ff385c] font-semibold">ice dam removal</a>, and{' '}
              <a href="/services/sump-pump-failure" className="text-[#ff385c] font-semibold">sump pump failure response</a>.
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
              Storm Damage FAQs
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
              Storm damage at your property right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call PROVAIL Water Damage Restoration Bloomfield. A live dispatcher
              will answer, get a crew rolling, and stay with you until the
              building is secure.
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
