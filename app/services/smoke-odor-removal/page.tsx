import type { Metadata } from 'next'

const BIZ_NAME = 'Provail Restoration of Bloomfield'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'

export const metadata: Metadata = {
  title:
    'Smoke & Odor Removal Bloomfield MI | Hydroxyl, Ozone, Thermal Fogging | (248) 531-8404',
  description:
    'Professional smoke odor removal in Bloomfield Township, MI. Hydroxyl generators, ozone treatment, thermal fogging, HVAC decontamination, and sealed-in deodorization. Provail Restoration of Bloomfield handles fire, puffback, and protein smoke odor. Call (248) 531-8404.',
  keywords: [
    'smoke odor removal Bloomfield',
    'smoke smell removal Michigan',
    'hydroxyl generator service Bloomfield',
    'ozone treatment Bloomfield Township',
    'thermal fogging Oakland County',
    'HVAC smoke decontamination',
    'puffback odor removal',
    'protein smoke smell',
    'cigarette smoke removal Bloomfield',
  ],
  openGraph: {
    title: 'Smoke & Odor Removal Bloomfield MI | (248) 531-8404',
    description:
      'Hydroxyl generators, ozone, thermal fogging, and HVAC decontamination for smoke odor in Bloomfield, MI. IICRC S700 trained technicians.',
    url: 'https://provailrestoration.com/services/smoke-odor-removal',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/services/smoke-odor-removal',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Can smoke odor be permanently removed from a home?',
    a: 'Yes, when the work is done correctly. Permanent smoke odor removal requires source removal, surface cleaning of every affected substrate, HVAC decontamination, an air-phase treatment such as hydroxyls, ozone, or thermal fog, and sealing of any porous structural materials that cannot be cleaned to the substrate. Skipping any of these steps is the most common reason odor returns weeks later.',
  },
  {
    q: 'How long does professional smoke odor removal take?',
    a: 'A small protein or puffback odor job can be completed in two to four days. A whole-home smoke odor project after a structural fire generally runs one to three weeks for cleaning and deodorization. Air-phase treatment cycles range from 24 hours for hydroxyls to 12 to 48 hours for ozone, depending on severity.',
  },
  {
    q: 'Are hydroxyl generators safe to run while we are home?',
    a: 'Yes. Hydroxyl generators are designed for use in occupied spaces. They produce hydroxyl radicals at concentrations that neutralize airborne odor molecules without the aggressive oxidation profile of ozone. Pets, plants, and people can remain in the home during treatment.',
  },
  {
    q: 'Why is ozone treatment more aggressive than hydroxyls?',
    a: 'Ozone, or O3, is an unstable form of oxygen that reacts with almost any organic molecule it encounters. That makes it extremely effective on stubborn odor but also requires the area to be unoccupied during treatment, with people, pets, and live plants removed. After the cycle ends the space is aerated until ozone returns to safe ambient levels.',
  },
  {
    q: 'What is thermal fogging and how is it different from ozone?',
    a: 'Thermal fogging heats a deodorizing solvent into a dense fog of sub-micron droplets that travel into the same wall cavities and porous materials smoke originally penetrated. It chemically pairs with odor molecules. Ozone, by contrast, is a gas that oxidizes molecules. The two methods are complementary and are often used in sequence on heavy losses.',
  },
  {
    q: 'Does the HVAC system have to be cleaned for odor removal to work?',
    a: 'Almost always, yes. During a smoke event the HVAC system pulls combustion particles into supply ducts, return ducts, the blower, the coil, and the filter cabinet. If it is not cleaned, the system redistributes smoke residue every time it cycles on and reseeds the home with odor.',
  },
  {
    q: 'Can you remove cigarette and cigar odor from a home?',
    a: 'Yes. Long-term tobacco smoke is one of the harder odor projects because residue accumulates on every surface over years. The protocol includes washing all surfaces with appropriate degreasers, deep cleaning carpets and upholstery, replacing severely saturated porous materials, treating the HVAC system, applying air-phase deodorization, and sealing surfaces such as ceilings and trim that cannot be fully washed.',
  },
  {
    q: 'Will deodorizing sprays or candles fix smoke odor?',
    a: 'No. Consumer fragrances mask odor temporarily by overpowering the nose, but the underlying combustion molecules remain in the building materials and continue to off-gas. Professional deodorization neutralizes those molecules through chemical reaction or oxidation rather than masking them.',
  },
  {
    q: 'Can you treat smoke odor without removing belongings?',
    a: 'Light to moderate odor can sometimes be treated with contents in place. Heavier losses usually require contents to be cleaned separately so the structural surfaces underneath them can be reached and treated. We assess the loss and recommend the approach that protects the contents and produces a complete result.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Smoke & Odor Removal',
    name: 'Smoke and Odor Removal',
    provider: {
      '@type': 'LocalBusiness',
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
    },
    areaServed: [
      { '@type': 'City', name: 'Bloomfield Township' },
      { '@type': 'City', name: 'Bloomfield Hills' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'West Bloomfield' },
      { '@type': 'City', name: 'Troy' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://provailrestoration.com/services/smoke-odor-removal',
    name: BIZ_NAME,
    telephone: '+12485318404',
    url: 'https://provailrestoration.com/services/smoke-odor-removal',
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
]

const methods = [
  {
    title: 'Hydroxyl Generators',
    body: 'Hydroxyl generators use UV-C light to react with humidity in the air and produce hydroxyl radicals, the same oxidizing molecules that nature uses to clean the atmosphere. Hydroxyls neutralize odor molecules in the air and on exposed surfaces, run continuously for days at a time, and are safe to operate in occupied spaces. They are our default air-phase tool when residents need to remain in the home during treatment.',
  },
  {
    title: 'Ozone Generators',
    body: 'Ozone treatment uses high concentrations of O3 to oxidize odor compounds throughout an unoccupied space. It is faster and more aggressive than hydroxyl treatment and reaches into surfaces and crevices that surface cleaning alone cannot. Because ozone is reactive enough to be hazardous to people, pets, and plants, the area is sealed and evacuated during treatment and aerated to safe ambient levels before reoccupation.',
  },
  {
    title: 'Thermal Fogging',
    body: 'Thermal fogging heats a petroleum-based deodorizer into a dense, dry fog of sub-micron droplets. Because the droplets are roughly the same size as smoke particles, they follow the same diffusion paths the smoke originally took, penetrating wall cavities, attic spaces, fabrics, joist bays, and crevices. The deodorizer chemically pairs with combustion molecules to neutralize them at the source rather than masking them.',
  },
  {
    title: 'HVAC Decontamination',
    body: 'The HVAC system is the single largest reservoir of smoke residue in most homes. We isolate the system, replace filters, vacuum and brush the supply and return ducting, clean the air handler interior and the coil, treat the blower compartment, and apply an antimicrobial or sealant where appropriate. Until this step is done, deodorizing the rest of the home is a temporary fix.',
  },
  {
    title: 'Surface Cleaning & Source Removal',
    body: 'No air-phase treatment can compensate for residue left on surfaces. We HEPA vacuum, dry sponge, wet clean with the right chemistry for the residue, and remove any materials that cannot be cleaned to the substrate. Source removal is always the first step; deodorization is the finish.',
  },
  {
    title: 'Sealing Porous Substrates',
    body: 'After cleaning, exposed framing, subfloor, and other porous structural materials are sealed with a shellac- or water-based primer rated for fire restoration. Sealing locks any residual odor molecules into the substrate so they cannot off-gas after reconstruction. Sealing is the final lock, not a substitute for cleaning.',
  },
]

const odorSources = [
  { title: 'Structure Fires', body: 'Wall, room, or whole-house fires with heavy smoke spread.' },
  { title: 'Furnace Puffbacks', body: 'Oily soot blown through ductwork from a malfunctioning oil burner.' },
  { title: 'Kitchen & Protein Fires', body: 'Burned food and grease that leave a nearly invisible but powerful odor on every surface.' },
  { title: 'Cigarette & Cigar Smoke', body: 'Long-term tobacco residue accumulated over months or years of indoor smoking.' },
  { title: 'Wildfire Smoke Intrusion', body: 'Outdoor smoke pulled into the building through HVAC intakes, soffits, and gaps.' },
  { title: 'Electrical & Plastic Burns', body: 'Smoldering wiring or melted plastics that produce sticky, acrid wet-smoke residue.' },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}
function SmsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
      <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
    </svg>
  )
}

export default function SmokeOdorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center no-underline">
            <img src="/logo.png" alt={BIZ_NAME} style={{ height: 60, width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Home</a>
            <a href="/bloomfield" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Bloomfield</a>
            <a href="/fire-damage-restoration" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Fire Damage</a>
            <a href="/services/soot-cleanup" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Soot Cleanup</a>
            <a href="#contact" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c]">
            <PhoneIcon />
            <span className="font-semibold text-[15px]">{PHONE}</span>
          </a>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-3 py-2.5" style={{ backgroundColor: '#ff385c' }}>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm flex items-center gap-1.5 no-underline">
            <PhoneIcon className="text-white" />
            Call {PHONE}
          </a>
          <span className="text-white/40">|</span>
          <a href={SMS_HREF} className="text-white font-semibold text-sm no-underline flex items-center gap-1.5">
            <SmsIcon />
            Text Us
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium" style={{ borderRadius: '32px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px', backgroundColor: '#ffffff' }}>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Smoke Odor Specialists
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Hydroxyl &middot; Ozone &middot; Thermal Fog</span>
              </div>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Smoke &amp; Odor Removal in Bloomfield, Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto mb-10 leading-relaxed">
              Hydroxyl generators, ozone treatment, thermal fogging, and HVAC decontamination. Real source removal, not fragrance masking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black" style={{ backgroundColor: '#222222', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
                <PhoneIcon className="text-white" />
                Call Now: {PHONE}
              </a>
              <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 text-[#222222] font-semibold text-base no-underline" style={{ borderRadius: '8px', padding: '0 28px', height: '52px', border: '2px solid #222222' }}>
                <SmsIcon />
                Text Us
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Why Smoke Odor Comes Back After a DIY Cleanup
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Smoke is not a smell on the surface of a building. It is a cloud of microscopic combustion particles and volatile compounds that lodges itself into anything porous: drywall paper, insulation, wood framing, carpet pad, fabric, leather, paper, and the inside of every duct in the home. Wiping the visible surfaces removes maybe a third of the residue, the part the eye can see. The rest is still in the building, off-gassing every time the temperature or humidity changes.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              That is why effective smoke odor removal is never a single step. It is a sequence. Source removal first, then surface cleaning with the right chemistry for the residue, then HVAC decontamination so the system stops reseeding the home, then air-phase treatment with hydroxyls or ozone to neutralize what surface cleaning could not reach, then sealing of porous substrates that cannot be cleaned to the substrate. Skip a step and the odor returns within weeks.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              {BIZ_NAME} runs this protocol on every smoke odor project in Bloomfield Township, Bloomfield Hills, Birmingham, and the surrounding Oakland County communities. We work to the IICRC S700 standard of care and use the same equipment and chemistry that large-loss commercial restoration projects rely on.
            </p>
          </div>
        </section>

        {/* METHODS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Our Smoke &amp; Odor Removal Methods
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Six tools, used in the right order for the right residue type.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methods.map((m) => (
                <div key={m.title} className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>{m.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Smoke Odor Sources We Treat
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Each source produces a different residue chemistry and needs a different protocol.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {odorSources.map((s) => (
                <div key={s.title} className="bg-white p-7" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[18px] mb-2" style={{ letterSpacing: '-0.2px' }}>{s.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Smoke Odor Removal FAQ
              </h2>
              <p className="text-[#6a6a6a] text-lg">Direct answers about hydroxyls, ozone, thermal fogging, and HVAC cleanup.</p>
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
                { label: 'Soot Cleanup', href: '/services/soot-cleanup' },
                { label: 'Water Damage Home', href: '/' },
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
              Get a Smoke Odor Assessment
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
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2">Text / SMS</h3>
                  <a href={SMS_HREF} className="text-[#ff385c] hover:text-white text-lg font-semibold no-underline">{PHONE}</a>
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
                <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline" style={{ borderRadius: '8px', padding: '0 28px', height: '56px', border: '2px solid white' }}>
                  <SmsIcon />
                  Text Us
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
