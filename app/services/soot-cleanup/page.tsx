import type { Metadata } from 'next'

const BIZ_NAME = 'PROVAIL Water Damage Restoration Bloomfield'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'

export const metadata: Metadata = {
  title:
    'Soot Cleanup Bloomfield MI | Wet, Dry, Protein & Puffback Residue | (248) 531-8404',
  description:
    'Professional soot cleanup in Bloomfield Township, MI. PROVAIL handles wet smoke, dry smoke, protein residue, and furnace puffback soot on every interior surface. IICRC S700 trained crews. Call (248) 531-8404 for an assessment.',
  keywords: [
    'soot cleanup Bloomfield',
    'soot removal Bloomfield Township',
    'puffback cleanup Michigan',
    'protein fire residue cleanup',
    'wet smoke cleanup Bloomfield',
    'dry smoke removal Oakland County',
    'furnace soot cleanup',
    'kitchen soot cleanup',
  ],
  openGraph: {
    title: 'Soot Cleanup Bloomfield MI | (248) 531-8404',
    description:
      'Wet vs dry soot, protein fires, puffback residue, surface-specific cleaning. PROVAIL serves Bloomfield, MI.',
    url: 'https://provailrestoration.com/services/soot-cleanup',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/services/soot-cleanup',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is the difference between wet smoke and dry smoke residue?',
    a: 'Dry smoke is produced by fast, high-temperature, oxygen-rich fires that burn paper and natural wood. The residue is powdery, non-smeary, and easier to vacuum and dry-sponge. Wet smoke is produced by slow, low-temperature, oxygen-starved fires that burn plastics and synthetics. The residue is sticky, smeary, pungent, and demands solvent cleaning. Identifying the residue type is the first step in choosing the right cleaning chemistry.',
  },
  {
    q: 'Can I just wipe soot off myself with a wet rag?',
    a: 'No. Wiping soot with water on a rag drives the particles deeper into porous surfaces, smears wet residue across painted finishes, and can permanently set the staining. Soot cleanup begins dry: HEPA vacuuming and chemical sponges to lift loose particulate before any liquid is introduced. Skipping the dry phase is the most common DIY mistake.',
  },
  {
    q: 'What is a puffback and why is the residue so hard to clean?',
    a: 'A puffback occurs when a malfunctioning oil burner ignites accumulated fuel inside the combustion chamber and forces a dense cloud of oily soot through the ductwork and out every supply register. The residue is fine, oily, and adhesive, and it reaches every room served by the HVAC system. Puffback cleanup almost always requires HVAC decontamination plus surface cleaning of every room in the home.',
  },
  {
    q: 'What is protein residue from a kitchen fire?',
    a: 'Protein residue comes from burned food and grease, often from a stovetop fire or oven event. It is nearly invisible on most surfaces but extremely odorous and capable of discoloring paint and finishes. It clings to ceilings, cabinets, and upper walls because it travels with hot air. Protein residue requires aggressive degreasing chemistry and almost always needs deodorization to finish the job.',
  },
  {
    q: 'Will soot damage stainless steel, brass, marble, or finished wood?',
    a: 'Yes, and quickly. Soot residues are acidic and begin etching metal, glass, marble, grout, and finished wood within hours. The longer the residue sits, the more permanent the staining becomes. Fast professional cleaning is the difference between saving a finish and replacing it.',
  },
  {
    q: 'Does soot need to be removed from inside walls and ceilings?',
    a: 'If smoke entered the wall or ceiling cavity, yes. Cavity contamination is reached through HVAC decontamination, controlled removal of compromised drywall, sealing of porous substrates, and air-phase deodorization with thermal fog or hydroxyls. Surface cleaning alone leaves cavity residue behind, which is the most common reason odor returns after a cleanup.',
  },
  {
    q: 'How long does soot cleanup take?',
    a: 'A small protein or puffback event can be completed in two to five days. A whole-home soot cleanup after a structural fire generally runs one to three weeks. Heavy losses with reconstruction take longer. Every project is scoped individually before a timeline is committed to.',
  },
  {
    q: 'Do you document soot damage for the insurance file?',
    a: 'Yes. We provide photographs, room-by-room scopes, residue identification, and itemized inventories that document the condition of the property and contents. Final decisions about coverage and claim handling are between the policyholder and the insurance carrier.',
  },
  {
    q: 'Can soot be removed from clothing, books, and electronics?',
    a: 'Often, yes. Textiles are processed through a professional laundry or dry-cleaning protocol matched to the fabric. Books and documents can be cleaned, freeze-dried, or digitized depending on condition. Electronics are inventoried, opened in a controlled environment, and treated by specialists. Items that cannot be safely cleaned are documented and listed as non-salvageable.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Soot Cleanup',
    name: 'Soot Cleanup and Removal',
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
    '@id': 'https://provailrestoration.com/services/soot-cleanup',
    name: BIZ_NAME,
    telephone: '+12485318404',
    url: 'https://provailrestoration.com/services/soot-cleanup',
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

const sootTypes = [
  { name: 'Dry Smoke Residue', body: 'Powdery, non-smeary residue from fast, high-temperature paper and wood fires. Cleans most easily with HEPA vacuuming and dry chemical sponges before any wet cleaning begins.' },
  { name: 'Wet Smoke Residue', body: 'Sticky, smeary, pungent residue from low-temperature plastic and synthetic fires. Requires solvent-based cleaning chemistry and is one of the most difficult residues to remove.' },
  { name: 'Protein Residue', body: 'Nearly invisible film from burned food and kitchen grease fires. Clings to ceilings and upper walls, discolors finishes, and produces a powerful odor that requires aggressive degreasing.' },
  { name: 'Fuel-Oil Puffback Soot', body: 'Fine, oily, adhesive residue blown through the HVAC system by a malfunctioning oil burner. Reaches every room served by the duct system and demands HVAC decontamination as part of cleanup.' },
  { name: 'Fingerprint Residue', body: 'Light deposit left when smoke barely contacts a surface. Small footprint but still requires controlled cleaning to avoid driving residue into the substrate.' },
  { name: 'Char & Ash', body: 'Solid combustion debris from charred building materials. Removed mechanically before any cleaning chemistry is introduced and disposed of as fire debris.' },
]

const surfaceMethods = [
  { surface: 'Painted Drywall', method: 'HEPA vacuum, dry chemical sponge in overlapping passes, then a mild alkaline degreaser worked top to bottom. Heavily contaminated drywall may need to be removed.' },
  { surface: 'Wood Trim & Cabinetry', method: 'Dry sponge to lift loose particulate, then a wood-safe cleaner with a soft applicator, working with the grain. Severe staining may require refinishing.' },
  { surface: 'Hardwood Flooring', method: 'HEPA vacuum the entire surface, dry sponge, then a wood-floor-safe cleaner. Heat-warped or charred boards are removed.' },
  { surface: 'Carpet & Pad', method: 'HEPA vacuum, then determine if the carpet and pad can be saved. Soot-saturated pad is almost always replaced; carpet may be hot-water extracted and treated.' },
  { surface: 'Upholstery & Drapery', method: 'Inspected for fiber type and dye stability, then dry sponged, vacuumed, and either cleaned in place or pack-out cleaned at our facility.' },
  { surface: 'Stainless Steel & Brass', method: 'Cleaned quickly to stop acidic etching, using a metal-appropriate cleaner and non-abrasive applicators.' },
  { surface: 'Marble, Granite & Grout', method: 'Cleaned with stone-safe pH-neutral chemistry. Acidic and aggressive degreasers are avoided to prevent etching.' },
  { surface: 'Glass & Mirrors', method: 'Soot etches glass within hours. Removed early with a glass-safe cleaner and a soft applicator before permanent staining sets.' },
  { surface: 'HVAC Ducts & Coils', method: 'System isolated, filters replaced, ducts vacuumed and brushed, blower compartment and coil cleaned, then sealed where appropriate.' },
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

export default function SootCleanupPage() {
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
            <a href="/services/smoke-odor-removal" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Smoke &amp; Odor</a>
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
                  Soot &amp; Residue Cleanup
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>IICRC S700</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Soot Cleanup in Bloomfield, Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[660px] mx-auto mb-10 leading-relaxed">
              Wet smoke, dry smoke, protein residue, and puffback cleanup. Surface-specific chemistry on every interior material in your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Why Soot Cleanup Is More Than Just Wiping Surfaces
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Soot looks simple. It is dark, it is on the surface, and it seems like it should come off with a damp cloth and some elbow grease. The reality is that soot is one of the most chemically aggressive substances that can land in a home. It is acidic, it begins etching metal, glass, marble, grout, and finished wood within hours of deposition, and the wrong cleaning method will permanently set the staining instead of removing it. Wiping wet soot with a rag drives the residue deeper into porous substrates and smears it across painted finishes that could otherwise have been saved.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Effective soot cleanup begins with identification. Wet smoke from a smoldering plastic fire is treated completely differently from dry smoke from a fast paper fire, and both are different from protein residue from a kitchen grease event or oily puffback soot from a furnace failure. Each residue type calls for different chemistry, different applicators, and a different sequence of dry and wet steps. Getting the residue type right on day one is the single biggest factor in whether the cleanup succeeds.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              At {BIZ_NAME}, our soot cleanup work follows the IICRC S700 standard of care. We identify the residue, isolate the affected areas, decontaminate the HVAC system so it stops spreading the problem, and then clean every interior surface using a method matched to its material. The protocol is the same whether the loss is a small puffback in one room or a whole-house cleanup after a structural fire.
            </p>
          </div>
        </section>

        {/* SOOT TYPES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Soot &amp; Residue Types We Identify
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Identification on day one is the difference between a successful cleanup and a failed one.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sootTypes.map((s) => (
                <div key={s.name} className="bg-[#f7f7f7] p-7" style={{ borderRadius: '20px' }}>
                  <h3 className="text-[#222222] font-bold text-[18px] mb-2" style={{ letterSpacing: '-0.2px' }}>{s.name}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SURFACE METHODS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Surface-by-Surface Cleaning Methods
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Every interior material gets matched to a chemistry and sequence designed for it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {surfaceMethods.map((s) => (
                <div key={s.surface} className="bg-white p-7" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[17px] mb-2" style={{ letterSpacing: '-0.2px' }}>{s.surface}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{s.method}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PUFFBACK DEEP DIVE */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Puffback Cleanup: A Special Case
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              A furnace puffback is one of the most underestimated losses we respond to. There is no fire, no firefighters, no broken windows. The homeowner walks into the basement and notices a fine, oily, dark film on every surface. By the time it is discovered, the same film is in every room of the house, because the soot was forced through the supply ducts and out the registers in every room the system serves.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Puffback residue is uniquely difficult because it is fine, oily, and adhesive. It is not the powdery dry smoke that vacuums and dry sponges remove easily. It clings, it smears, it discolors paint, and it requires solvent-based cleaning chemistry on every affected surface. The HVAC system itself almost always needs to be opened and cleaned by hand, including the supply ducts, return ducts, blower compartment, coil, and filter cabinet, before the rest of the cleanup will hold.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              Our puffback protocol is: shut the system down, isolate the contamination, document the spread, decontaminate the HVAC system end to end, clean each room top to bottom with the appropriate chemistry, deodorize with thermal fog or hydroxyls to neutralize residual odor in wall cavities and porous materials, and finish with sealing where required.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Soot Cleanup FAQ
              </h2>
              <p className="text-[#6a6a6a] text-lg">Direct answers to the questions Bloomfield homeowners ask about soot.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white p-6 group" style={{ borderRadius: '16px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
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
        <section className="bg-white" style={{ padding: '60px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-8 text-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.44px' }}>
              Related Services &amp; Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Bloomfield Service Area', href: '/bloomfield' },
                { label: 'Fire Damage Restoration', href: '/fire-damage-restoration' },
                { label: 'Smoke & Odor Removal', href: '/services/smoke-odor-removal' },
                { label: 'Water Damage Home', href: '/' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="bg-[#f7f7f7] text-center text-[#222222] font-semibold text-[15px] py-5 px-5 no-underline hover:text-[#ff385c]" style={{ borderRadius: '16px' }}>
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
              Get a Soot Cleanup Assessment
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
