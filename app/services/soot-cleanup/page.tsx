import type { Metadata } from 'next'
import { SiteHeader } from '../../_components/site-chrome'

const BIZ_NAME = 'Provail Restoration of Bloomfield'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const PAGE_URL = 'https://provailrestoration.com/services/soot-cleanup'

export const metadata: Metadata = {
  title:
    'Surface-Specific Soot Cleanup — Electronics, Art, Stone, Textiles & HVAC | (248) 531-8404',
  description:
    'Specialized soot cleanup by surface type: circuit boards and electronics, fine art, marble and natural stone, brass and bronze, clothing and upholstery, HVAC ductwork, photographs and documents, jewelry. Provail Restoration of Bloomfield serves Oakland County.',
  keywords: [
    'electronics soot cleaning',
    'art soot restoration',
    'marble soot cleanup',
    'textile soot cleaning Bloomfield',
    'HVAC duct soot removal',
    'document soot recovery',
    'jewelry soot cleaning',
    'brass bronze soot',
  ],
  openGraph: {
    title: 'Surface-Specific Soot Cleanup | (248) 531-8404',
    description:
      'Electronics, fine art, stone, brass, textiles, HVAC ductwork, photos, and jewelry. Each substrate has its own chemistry.',
    url: PAGE_URL,
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Can electronics really be saved after soot exposure?',
    a: 'Often yes, as long as they are handled before power is re-applied and before the residue attracts moisture. Combustion byproducts on circuit boards are mildly conductive and chemically aggressive, which means two separate failure modes: short circuits the next time the device is energized, and slow corrosion of copper traces and solder joints. An ultrasonic or aqueous cleaning process removes the residue from both sides of the board, and the board is then fully dried before reassembly and bench testing.',
  },
  {
    q: 'Is data recovery from a sooty hard drive still possible?',
    a: 'Usually yes for spinning and solid-state drives that were not submerged or thermally destroyed. The drive itself is disassembled in a clean environment, the PCB is cleaned, and the platters or flash chips are imaged onto new media before any repair is attempted on the original hardware. A drive that looks ruined from the outside is often recoverable from the inside, as long as it is not powered on in its dirty state first.',
  },
  {
    q: 'How is soot removed from oil paintings and fine art?',
    a: 'Fine art is not cleaned with the same chemistry used on drywall. Loose particulate is lifted with a soft HEPA-assisted brush and specialized dry sponges, and then the artwork is evaluated by a conservator for any residue that remains bonded to the varnish or paint layer. For originals of significant value, our role is usually to stabilize the piece, document its condition, and coordinate hand-off to a conservator who can perform solvent or aqueous reduction under controlled conditions.',
  },
  {
    q: 'Will cleaning soot off marble or granite etch the stone?',
    a: 'It can, if the wrong chemistry is used. Marble and other calcareous stones are sensitive to acids and harsh alkalines and will etch visibly if the cleaning product does not match the substrate. The correct approach starts with dry particle lift, followed by a pH-neutral poultice to draw residue out of the pores, and finishes with a stone-safe cleaner and, where appropriate, a polish or refinishing pass for the areas where the surface gloss was affected.',
  },
  {
    q: 'Can brass, bronze, and other metals be restored after soot exposure?',
    a: 'Yes, with different approaches for protected and unprotected finishes. A lacquered brass piece is first stripped of its damaged coating, cleaned, polished, and re-lacquered. An unlacquered antique bronze is usually cleaned more conservatively to preserve the patina that collectors value, with only the soot film removed. We identify which category the piece falls into before any cleaning agent touches it.',
  },
  {
    q: 'Do clothes and upholstery need to be cleaned off-site?',
    a: 'Almost always. Soft goods affected by soot are inventoried, packed out, and processed at a textile cleaning facility where the right combination of dry cleaning, wet cleaning, ozone, and hydroxyl treatment can be applied for each fabric type. Attempting to wash lightly sooted garments in a home washer sets the residue into the fibers permanently and usually makes recovery impossible.',
  },
  {
    q: 'How is HVAC ductwork actually cleaned after soot exposure?',
    a: 'Mechanical cleaning with agitation and negative air collection. The system is isolated at the plenum, a HEPA-filtered negative air machine pulls a vacuum on the duct interior, and rotary brushes or compressed-air whips agitate the duct walls so the loose soot releases into the vacuum stream. The blower housing, coil, and registers are hand-cleaned separately. Fogging or spraying a disinfectant without mechanical cleaning does not remove soot and is not what the work should look like.',
  },
  {
    q: 'Can photographs and paper documents be saved after soot exposure?',
    a: 'Many can, with the right triage. Loose soot is gently lifted with a soft brush and HEPA vacuum, and then the items are stabilized against any moisture that would drive residue deeper. High-value photos, genealogy materials, and legal documents are imaged digitally as a first safety step, then evaluated for hands-on restoration or sent to a paper conservator. Storing sooty items in sealed plastic bins before cleanup makes the residue harder to remove, not easier.',
  },
  {
    q: 'What about jewelry and watches?',
    a: 'Gold and platinum are mostly inert and clean up well with ultrasonic and steam methods. Silver tarnishes rapidly in the presence of combustion sulfur compounds and usually needs a polish step after cleaning. Watches with organic or leather components are disassembled by a watchmaker so the case can be cleaned separately from the movement and strap. Gemstones are evaluated individually because porous stones like opal, turquoise, and pearl cannot tolerate the same chemistry as diamond or sapphire.',
  },
  {
    q: 'Is rug cleaning handled on-site or in a plant?',
    a: 'Area rugs and Oriental rugs almost always go back to a plant. On-site cleaning cannot reach the backing where most of the soot has settled, and dye stability on antique rugs requires controlled water temperatures and pH. The rug is rolled, inventoried with photographs, transported, plant-cleaned, and returned. On-site cleaning is reserved for wall-to-wall carpet that is being cleaned in place as part of a broader restoration scope.',
  },
]

const providerNode = {
  '@type': 'HomeAndConstructionBusiness',
  name: BIZ_NAME,
  telephone: '+12485318404',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  url: 'https://provailrestoration.com',
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Surface-Specific Soot Cleanup',
    name: 'Specialty Soot Cleaning by Substrate',
    provider: providerNode,
    areaServed: [
      { '@type': 'City', name: 'Bloomfield Township' },
      { '@type': 'City', name: 'Bloomfield Hills' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'West Bloomfield' },
      { '@type': 'City', name: 'Troy' },
    ],
    description:
      'Substrate-specific soot cleanup: electronics and data recovery, fine art, marble and natural stone, brass and bronze, textiles, HVAC ductwork, photographs and documents, and jewelry. Matched chemistry and handling for each material class.',
    url: PAGE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': PAGE_URL + '#business',
    name: BIZ_NAME,
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://provailrestoration.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Surface-Specific Soot Cleanup', item: PAGE_URL },
    ],
  },
]

const surfaces = [
  {
    title: 'Electronics and Circuit Boards',
    body: 'Computers, audio gear, home automation hubs, game consoles, and any device with a populated printed circuit board is handled before power is re-applied. Combustion residue is conductive enough to cause shorts and acidic enough to corrode traces. The board is removed, washed in an aqueous or ultrasonic bath designed for electronics, fully dried, reassembled, and bench-tested. Devices that pass testing are returned with a condition report.',
  },
  {
    title: 'Data Recovery and Media',
    body: 'Spinning hard drives, solid-state drives, optical discs, memory cards, and backup tapes are treated as recovery targets rather than cleaning targets. Drives are opened in a controlled environment, the PCB is cleaned, and the data is imaged to new media before any attempt is made to restore the original hardware. The priority is getting the contents off the device safely.',
  },
  {
    title: 'Fine Art: Oils, Acrylics, Works on Paper',
    body: 'Original paintings, drawings, prints, and framed works are stabilized first: loose particulate is lifted with soft HEPA-assisted brushes and conservator-grade dry sponges, glazing is cleaned externally, and condition is documented photographically. Pieces with bonded residue on the varnish or paint layer are routed to a fine art conservator for reduction, because solvent selection and working technique on originals is not a general-trades job.',
  },
  {
    title: 'Marble, Granite, and Natural Stone',
    body: 'Calcareous stones are acid sensitive and will etch under the wrong chemistry. We start with dry particle removal, apply a pH-neutral poultice to draw residue out of the porous surface, rinse with a stone-safe cleaner, and hand off to a stone restoration specialist for any honing or polishing where the gloss was affected. Countertops, vanity tops, fireplace surrounds, and floor tile all fall into this category.',
  },
  {
    title: 'Brass, Bronze, Copper, and Silver',
    body: 'Protected finishes (lacquered brass, plated silver) are cleaned differently from unprotected ones (antique bronze with patina, raw copper). Lacquered pieces with residue trapped under damaged coating are stripped, cleaned, polished, and re-lacquered. Collectible pieces with original patina are cleaned conservatively to preserve the age value that buyers and appraisers pay for.',
  },
  {
    title: 'Clothing, Upholstery, and Area Rugs',
    body: 'Textiles are inventoried on-site, packed into labeled bins, and transported to a plant where each piece is sorted by fiber and construction before any cleaning begins. Options include dry cleaning for delicate fabrics, wet cleaning for washables, ozone and hydroxyl treatment for residual odor, and specialty wool-safe chemistry for Oriental rugs. Items are returned hung, folded, or rolled according to their construction.',
  },
  {
    title: 'HVAC Ductwork (Standalone Vertical)',
    body: 'Ductwork is a self-contained specialty: mechanical cleaning with rotary brushes or compressed-air whips, a HEPA-filtered negative air machine pulling a vacuum on the duct interior, hand cleaning of the blower housing and coil, register and grille removal and cleaning, and post-cleaning verification. We treat duct cleanup as its own project rather than a checkbox on a larger scope, because doing it correctly takes time and equipment that does not overlap with surface work elsewhere.',
  },
  {
    title: 'Photographs, Documents, and Books',
    body: 'Photos and paper are the most time-sensitive soot category. Loose particulate is brushed off, items are stabilized against humidity, irreplaceable pieces are imaged digitally, and then cleaning or conservation work is performed by hand. Heavy leather-bound volumes, family bibles, and historical documents are often routed to a paper conservator after triage and stabilization.',
  },
  {
    title: 'Jewelry, Watches, and Precious Metals',
    body: 'Gold, platinum, and most diamonds tolerate ultrasonic and steam cleaning well. Silver needs a polish step because combustion sulfur compounds tarnish it rapidly. Porous and soft stones — opal, turquoise, pearl, emerald — are cleaned conservatively. Mechanical watches with leather straps or wood cases are disassembled so each component is processed separately.',
  },
  {
    title: 'Musical Instruments',
    body: 'Pianos, brass, woodwinds, strings, and acoustic guitars each have their own tolerances. Lacquered finishes on brass are cleaned like lacquered metals, felted piano actions are treated like delicate textiles, and lacquered or varnished wood bodies are cleaned with finish-safe products. High-value instruments are referred to a luthier or technician for any work beyond surface decontamination.',
  },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}
export default function SootCleanupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium" style={{ borderRadius: '32px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px', backgroundColor: '#ffffff' }}>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Surface-Specific
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Electronics &middot; Art &middot; Stone &middot; HVAC</span>
              </div>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Surface-Specific Soot Cleanup
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[680px] mx-auto mb-10 leading-relaxed">
              Circuit boards, fine art, marble, brass, textiles, ductwork,
              photographs, and jewelry. Each substrate gets its own chemistry
              and its own handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black" style={{ backgroundColor: '#222222', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
                <PhoneIcon className="text-white" />
                Call Now: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Why the Substrate Matters More Than the Soot
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Soot is soot — mostly amorphous carbon, a fraction of
              sulfur and nitrogen oxides, trace metals, and whatever plastics
              and synthetics were in the burning fuel. What changes from one
              item to the next is the surface the residue has landed on. A
              chemistry that works on painted drywall will ruin a marble
              vanity top. A cleaning technique appropriate for a lacquered
              brass lamp will strip the patina from an antique bronze
              sculpture. A water bath that saves a phone&apos;s logic board
              will destroy a leather watch strap.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              The page you are on exists because most of what shows up in a
              home after a fire is not drywall. It is the accumulated
              contents of a life — electronics, artwork, stone, metal,
              fabric, paper, memory cards, heirlooms, instruments, and the
              ductwork that tied all of it together. Each of those categories
              has its own decision tree: what can be cleaned on-site, what
              has to go to a plant or a specialist, what is recoverable at
              all, and what order the work has to happen in.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              {BIZ_NAME} handles surface-specific soot work as its own line
              of work. On large losses it runs in parallel with structural
              cleanup handled by our fire restoration team. On smaller
              incidents — a furnace puffback that only affected contents,
              an electrical event in a single room, a kitchen fire that
              touched cabinets and personal items but left the walls
              largely alone — surface-specific work is often the whole
              project.
            </p>
          </div>
        </section>

        {/* SURFACES GRID */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Substrates We Specialize In
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Ten categories, each with its own protocol.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {surfaces.map((s) => (
                <div key={s.title} className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>{s.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRIAGE NARRATIVE */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              How Surface-Specific Triage Works
            </h2>
            <div className="text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The first step on any surface-specific job is an inventory
                walk. A lead moves through the affected area and sorts items
                into categories that match the substrate groups on this
                page: electronics here, textiles there, art and
                irreplaceables pulled for priority handling, stone and hard
                surfaces marked in place, metals tagged by whether they
                carry a protective finish, and anything that is a complete
                loss flagged for documentation and disposal.
              </p>
              <p>
                Priority handling comes next. Electronics are unplugged
                before anyone considers powering them on to &ldquo;see if
                they still work,&rdquo; because that single action is what
                turns a recoverable device into a dead one. Photographs and
                paper are moved out of humid environments before the
                residue has a chance to bond to the surface. High-value art
                and instruments are stabilized against any further
                particulate exposure, usually by relocating them to a
                clean staging area of the home or a secure off-site
                facility.
              </p>
              <p>
                Pack-out follows priority handling. Items that will be
                cleaned at a plant are inventoried with photographs,
                labeled, packed into containers matched to the item type,
                and transported. The homeowner receives a copy of the
                inventory, and so does the insurance carrier with the
                homeowner&apos;s permission. For electronics, textiles,
                rugs, and fine art, the plant or specialist is matched to
                the substrate — we do not send a lacquered bronze
                sculpture to a textile cleaner any more than we send a
                silk rug to an electronics lab.
              </p>
              <p>
                On-site work covers everything that cannot or should not
                move. Stone countertops and tile are cleaned in place.
                HVAC ductwork is cleaned in place. Built-in cabinetry
                finishes are cleaned in place. Large pieces of furniture
                that would be damaged by transport are cleaned in place.
                The on-site portion of the job often runs in parallel with
                the plant-processing portion so that total timeline does
                not stack sequentially.
              </p>
              <p>
                Documentation runs through every step. Condition photos at
                intake, cleaning-in-progress shots on technically
                demanding items, before-and-after comparisons on pieces
                being returned to the homeowner, and a final written
                disposition for anything that could not be saved. The
                record is what allows a homeowner and an adjuster to
                agree on what happened to each item without having to
                remember it from scratch weeks later.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Surface-Specific Soot FAQ
              </h2>
              <p className="text-[#6a6a6a] text-lg">Answers about electronics, art, stone, metal, textiles, HVAC, paper, and jewelry.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="bg-[#f7f7f7] p-6 group" style={{ borderRadius: '16px' }}>
                  <summary className="text-[#222222] font-semibold text-[17px] cursor-pointer list-none flex justify-between items-center">
                    {f.q}
                    <span className="text-[#ff385c] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-4 mb-0">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '60px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-8 text-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.44px' }}>
              Related Services &amp; Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Bloomfield Service Area', href: '/bloomfield' },
                { label: 'Fire Damage Restoration', href: '/fire-damage-restoration' },
                { label: 'Non-Fire Odor Removal', href: '/services/smoke-odor-removal' },
                { label: 'S500 Drying Process', href: '/water-damage-restoration' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="bg-white text-center text-[#222222] font-semibold text-[15px] py-5 px-5 no-underline hover:text-[#ff385c]" style={{ borderRadius: '16px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ backgroundColor: '#222222', padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-white font-bold text-center mb-12" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
              Request a Contents Assessment
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2">Address</h3>
                  <address className="not-italic text-white/70 text-base leading-relaxed">
                    {BIZ_NAME}<br />
                    {ADDRESS_LINE1}<br />
                    {ADDRESS_LINE2}
                  </address>
                </div>
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                  <a href={PHONE_HREF} className="text-[#ff385c] hover:text-white text-lg font-semibold no-underline">{PHONE}</a>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Hours</h3>
                  <p className="text-white/70 text-base m-0">24 Hours a Day, 7 Days a Week</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline mb-4" style={{ backgroundColor: '#ff385c', borderRadius: '8px', padding: '0 28px', height: '56px' }}>
                  <PhoneIcon className="text-white" />
                  Call Now: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white" style={{ padding: '48px 0 40px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt={BIZ_NAME} style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
          </div>
          <nav className="mb-6">
            <ul className="flex flex-wrap items-center justify-center gap-2 text-[14px] list-none p-0 m-0">
              {[
                { label: 'Home', href: '/' },
                { label: 'Bloomfield', href: '/bloomfield' },
                { label: 'Fire Damage', href: '/fire-damage-restoration' },
                { label: 'Smoke & Odor', href: '/services/smoke-odor-removal' },
                { label: 'Soot Cleanup', href: '/services/soot-cleanup' },
              ].map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#c1c1c1]">&middot;</span>}
                  <a href={link.href} className="text-[#222222] hover:text-[#ff385c] no-underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic text-[#6a6a6a] text-[14px] mb-4">
            {ADDRESS_LINE1}, {ADDRESS_LINE2} &bull;{' '}
            <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>
          </address>
          <p className="text-[#6a6a6a] text-[13px] m-0">
            &copy; {new Date().getFullYear()} {BIZ_NAME}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
