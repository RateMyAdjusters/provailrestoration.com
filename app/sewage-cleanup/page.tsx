import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const BIZ = 'Provail Restoration of Bloomfield'
const URL = 'https://provailrestoration.com/sewage-cleanup'

export const metadata: Metadata = {
  title: 'Sewage Cleanup Bloomfield, MI | Cat 3 Black Water | (248) 531-8404',
  description:
    'Category 3 black water sewage cleanup in Bloomfield Township and Bloomfield Hills, MI. Biohazard removal, EPA-registered disinfection, full PPE, and structural drying. Call Provail Restoration of Bloomfield 24/7 at (248) 531-8404.',
  keywords: [
    'sewage cleanup Bloomfield',
    'Cat 3 black water cleanup',
    'sewer backup Bloomfield Township MI',
    'biohazard cleanup Bloomfield Hills',
    'sewage backup cleanup Birmingham MI',
    'basement sewer backup West Bloomfield',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Sewage Cleanup Bloomfield, MI | Category 3 Black Water Specialists',
    description:
      '24/7 sewage backup cleanup, biohazard removal, and disinfection following IICRC S500 protocols across Bloomfield, MI.',
    url: URL,
    siteName: BIZ,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is Category 3 black water?',
    a: 'Category 3 water, often called black water, is grossly contaminated and may contain pathogenic, toxigenic, or other harmful agents. It includes sewage backups from a toilet beyond the trap, rising floodwater from rivers or storm sewers, and water that has been standing long enough to support microbial growth. The IICRC S500 standard requires that Category 3 water and any porous materials it has contacted be handled with full personal protective equipment and removed rather than cleaned.',
  },
  {
    q: 'How fast can you respond to a sewage backup in Bloomfield?',
    a: 'Our team provides 24/7 emergency dispatch across Bloomfield Township, Bloomfield Hills, Birmingham, West Bloomfield, and surrounding communities. In most cases, a technician is on site within an hour of your call so we can stop further migration, begin extraction, and protect unaffected areas of your home.',
  },
  {
    q: 'What PPE do your technicians wear?',
    a: 'For Category 3 work, our crews wear disposable Tyvek suits with hoods and booties, nitrile or neoprene gloves over inner gloves, full-face respirators with appropriate filter cartridges, and dedicated boots. PPE is changed when moving between contaminated and clean zones, and used PPE is bagged as biohazard waste.',
  },
  {
    q: 'Will porous materials need to be removed?',
    a: 'Usually yes. Carpet, carpet pad, drywall that has wicked sewage, insulation, particleboard, and unsealed wood that has come into contact with Category 3 water are removed because they cannot be reliably decontaminated. Hard, non-porous surfaces such as ceramic tile, sealed concrete, glass, and finished wood are typically cleaned and disinfected in place.',
  },
  {
    q: 'How do you disinfect the affected area?',
    a: 'After bulk waste is removed and surfaces are cleaned with a detergent solution, we apply an EPA-registered disinfectant labeled for the relevant pathogens. Disinfectants are used according to manufacturer label instructions, including required dwell time. Disinfection follows physical cleaning, never replaces it.',
  },
  {
    q: 'How is sewage waste disposed of?',
    a: 'Contaminated material is double-bagged inside the work area, the outside of each bag is wiped down before it leaves containment, and the waste is transported and disposed of in accordance with local regulations for biohazard and contaminated construction debris.',
  },
  {
    q: 'Will my homeowners insurance cover sewer backup?',
    a: 'Standard homeowners policies often exclude sewer backup unless you carry a specific water backup endorsement. Coverage varies widely from carrier to carrier, so the best step is to call your agent and ask about your specific policy. We provide documentation that supports whatever claim you choose to file.',
  },
  {
    q: 'How long does sewage cleanup take?',
    a: 'Most residential sewage cleanups in Bloomfield are completed in three to five days from extraction through structural drying. Larger losses or those requiring extensive material removal may take longer. Reconstruction afterward is a separate phase.',
  },
  {
    q: 'Can I clean up sewage myself?',
    a: 'We strongly discourage it. Category 3 water requires PPE, containment, EPA-registered disinfectants, and proper waste handling. Attempting cleanup with household supplies risks personal exposure and almost always fails to address contamination that has wicked into porous materials.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': URL + '#service',
    name: 'Sewage Cleanup',
    serviceType: 'Sewage Cleanup',
    provider: {
      '@type': 'LocalBusiness',
      name: BIZ,
      telephone: '+12485318404',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4060 W Maple Rd',
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
      { '@type': 'City', name: 'Farmington Hills' },
    ],
    description:
      'Category 3 black water sewage cleanup, biohazard removal, EPA-registered disinfection, and structural drying for homes and businesses in Bloomfield, Michigan.',
    url: URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': URL + '#business',
    name: BIZ,
    telephone: '+12485318404',
    url: 'https://provailrestoration.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4060 W Maple Rd',
      addressLocality: 'Bloomfield Township',
      addressRegion: 'MI',
      postalCode: '48301',
      addressCountry: 'US',
    },
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

const shadow =
  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'

export default function SewageCleanupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 bg-white"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center no-underline">
            <img src="/logo.png" alt={BIZ} style={{ height: 60, width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Home</a>
            <a href="/mold-remediation" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Mold Remediation</a>
            <a href="/sewage-cleanup" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Sewage Cleanup</a>
            <a href="/reconstruction-services" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Reconstruction</a>
            <a href="/bloomfield" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Bloomfield</a>
          </nav>
          <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c] font-semibold text-[15px]">
            {PHONE}
          </a>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-3 py-2.5" style={{ backgroundColor: '#ff385c' }}>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm no-underline">Call {PHONE}</a>
          <span className="text-white/40">|</span>
          <a href={SMS_HREF} className="text-white font-semibold text-sm no-underline">Text Us</a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 56 }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 text-[#222222] text-[14px] font-medium"
                 style={{ borderRadius: 32, boxShadow: shadow, backgroundColor: '#ffffff' }}>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                24/7 Emergency
              </span>
              <span className="text-[#c1c1c1]">|</span>
              <span>IICRC S500 Cat 3</span>
              <span className="text-[#c1c1c1]">|</span>
              <span>Bloomfield, MI</span>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Sewage Cleanup in Bloomfield, Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto mb-10 leading-relaxed">
              Category 3 black water is a biohazard. Provail Restoration of Bloomfield responds 24/7 with full PPE, professional extraction equipment,
              EPA-registered disinfectants, and structural drying so your property is returned to a safe, sanitary condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={PHONE_HREF}
                 className="inline-flex items-center justify-center text-white font-semibold text-base no-underline hover:bg-black"
                 style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}>
                Call {PHONE}
              </a>
              <a href={SMS_HREF}
                 className="inline-flex items-center justify-center text-[#222222] font-semibold text-base no-underline"
                 style={{ borderRadius: 8, padding: '0 28px', height: 52, border: '2px solid #222222' }}>
                Text Us
              </a>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <article className="max-w-[800px] mx-auto px-6 text-[#222222]" style={{ fontSize: 17, lineHeight: 1.75 }}>

            <h2 className="font-bold mt-4 mb-4" style={{ fontSize: '1.875rem', letterSpacing: '-0.44px' }}>
              Black Water Is Not a DIY Project
            </h2>
            <p className="text-[#444] mb-5">
              A toilet that overflows past the trap, a basement floor drain that backs up after a heavy Bloomfield rain,
              a finished basement that takes on water from a backed-up municipal sewer line — these are all examples of
              what the restoration industry calls Category 3, or black water. The IICRC S500 Standard for Professional
              Water Damage Restoration is the consensus document that defines how this work should be performed, and the
              standard is unambiguous: Category 3 losses require trained technicians, full personal protective equipment,
              engineered containment, removal of contaminated porous materials, EPA-registered disinfection, and
              structural drying with documented benchmarks. None of that is a homeowner project, and trying to make it
              one usually creates more damage and more cost.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step One: Stop the Source and Contain the Spread
            </h2>
            <p className="text-[#444] mb-5">
              When our crew arrives, the first task is stopping additional water from entering the structure. That may
              mean a temporary plug at a backed-up floor drain, isolating a toilet supply, or coordinating with a plumber
              if the cause is a clogged main line. Once the source is controlled, we set containment barriers around the
              affected area to prevent foot traffic from tracking contamination into clean parts of the home. Walk-off
              mats, plastic sheeting, and a clearly defined work zone are simple but essential.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Two: Personal Protective Equipment
            </h2>
            <p className="text-[#444] mb-5">
              Before any extraction begins, technicians put on full PPE appropriate for Category 3 work. That includes
              disposable Tyvek coveralls with hoods and integrated booties, nitrile or neoprene gloves worn over an inner
              glove, full-face respirators with cartridges rated for biological hazards, and dedicated boots that stay
              inside the work zone. PPE is replaced when moving between zones, and used PPE is bagged as biohazard waste
              alongside the extracted material. Worker protection is not optional, and it is not separable from
              homeowner protection. A worker who is properly suited up does not need to take shortcuts.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Three: Bulk Waste and Water Extraction
            </h2>
            <p className="text-[#444] mb-5">
              With containment up and PPE in place, the bulk extraction phase begins. Heavy solids and debris are removed
              by hand into sealed biohazard bags. Standing water is extracted with truck-mount or portable extractors
              equipped for contaminated water. We use dedicated wands and hoses for Category 3 work that are decontaminated
              after the project rather than reused on clean-water losses. The goal of this phase is to remove as much
              material and water as possible before any cleaning or drying begins, because every gallon and every pound
              removed now is one that does not have to be cleaned around later.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Four: Removal of Affected Porous Materials
            </h2>
            <p className="text-[#444] mb-5">
              S500 is direct on this point. Porous materials that have been in contact with Category 3 water are removed,
              not cleaned. Carpet and carpet pad come up. Drywall that has wicked black water is cut out at least two feet
              above the visible water line so we can verify the cavity is dry. Insulation behind that drywall is bagged
              and removed. Particleboard cabinet bases that absorbed sewage come out. Unsealed wood subflooring is
              evaluated case by case based on how long the contact lasted and how deeply the contamination penetrated.
              The intent is not to over-remove, but to eliminate any porous material that cannot be reliably decontaminated.
            </p>
            <p className="text-[#444] mb-5">
              Hard, non-porous surfaces — ceramic tile, sealed concrete, glass, finished metal, finished hardwood with
              brief contact — are typically cleaned and disinfected in place. The decision between cleaning and removal
              is made surface by surface and documented in the project file so there is no ambiguity later.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Five: Cleaning and Disinfection
            </h2>
            <p className="text-[#444] mb-5">
              Cleaning and disinfection are two distinct steps, and they happen in that order. Cleaning is the physical
              removal of soil and biological residue using a detergent solution and mechanical agitation. Disinfection
              is the application of an EPA-registered antimicrobial product, used according to label instructions
              including the required dwell time. Disinfection cannot work on a dirty surface, which is why cleaning
              always comes first. We select disinfectants whose labels list the relevant pathogens for the
              specific loss, and we follow the label without improvisation.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Six: Structural Drying
            </h2>
            <p className="text-[#444] mb-5">
              Once cleaning and disinfection are complete, the structure has to be dried back to documented benchmarks.
              We use commercial dehumidifiers and high-velocity air movers to bring moisture content of remaining
              materials back to the dry standard for the building, and we monitor that progress daily with calibrated
              moisture meters. Drying logs become part of the project file. Skipping or shortening the drying phase is
              one of the most common mistakes in sewage cleanup, because residual moisture is what allows microbial
              growth to develop in the days and weeks after the visible contamination is gone.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Seven: Biohazard Waste Disposal
            </h2>
            <p className="text-[#444] mb-5">
              Removed materials are double-bagged inside the contained work area. The outside of each bag is wiped down
              before it leaves containment. Bagged waste is then transported and disposed of in accordance with local
              and state regulations for contaminated construction debris. We maintain the chain of custody
              documentation for each project so there is a clear record of what was removed and where it went.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Common Sewage Cleanup Scenarios in Bloomfield
            </h2>
            <p className="text-[#444] mb-5">
              Older finished basements throughout Bloomfield Township and Bloomfield Hills are particularly vulnerable
              to municipal sewer backups during heavy spring rain events, when stormwater overwhelms combined sewer
              capacity in nearby communities. Lakefront properties around Wing Lake and Long Lake sometimes experience
              septic-related backups during high water table conditions. Newer homes with finished basement bathrooms
              can see toilet overflows that escape the room and migrate into adjacent carpeted areas. Each scenario
              follows the same S500 framework, but the scope of removal varies with how far the contamination spread
              and how long it sat before extraction began.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Working With Your Insurance Carrier
            </h2>
            <p className="text-[#444] mb-5">
              Sewer and drain backup coverage is typically an optional endorsement on a homeowners policy, not part of
              the base coverage. If you have that endorsement, your policy will usually have a sublimit specific to
              backup losses. Provail Restoration of Bloomfield documents the loss thoroughly and provides an itemized estimate that aligns with
              standard pricing platforms used by insurance carriers, so your adjuster has what they need to process
              the claim. We coordinate directly with your adjuster when you authorize us to do so.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              After Cleanup: Reconstruction
            </h2>
            <p className="text-[#444] mb-5">
              Once cleaning, disinfection, and drying are verified complete, the materials that were removed need to be
              replaced. Drywall, baseboard, paint, flooring, and cabinetry all return as part of the rebuild phase.
              Provail Restoration of Bloomfield handles reconstruction directly so the same team that documented the loss is the team that closes
              it out. See our{' '}
              <a href="/reconstruction-services" className="text-[#ff385c] font-semibold no-underline hover:underline">
                reconstruction services page
              </a>{' '}for details. If the loss also produced visible microbial growth, our{' '}
              <a href="/mold-remediation" className="text-[#ff385c] font-semibold no-underline hover:underline">
                mold remediation team
              </a>{' '}
              follows the same project through to clearance.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Why Provail Restoration of Bloomfield
            </h2>
            <p className="text-[#444] mb-5">
              Provail Restoration of Bloomfield is a local restoration company with IICRC-trained technicians, dedicated Category 3
              equipment, full biohazard PPE, EPA-registered disinfectants, and a documentation workflow built around
              the S500 standard. We answer the phone 24/7, dispatch immediately, and treat your property the way we
              would want our own treated. Call {PHONE} and we will be on the way.
            </p>
          </article>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '72px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-center text-[#222222] font-bold mb-10"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white p-6" style={{ borderRadius: 16, boxShadow: shadow }}>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">{f.q}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white" style={{ padding: '72px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-4"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Sewage backup? Call now.
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Provail Restoration of Bloomfield is on call 24/7 across Bloomfield Township, Bloomfield Hills, Birmingham, West Bloomfield, Troy,
              and Farmington Hills.
            </p>
            <a href={PHONE_HREF}
               className="inline-flex items-center justify-center text-white font-semibold text-base no-underline hover:bg-black"
               style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 32px', height: 56 }}>
              Call {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#222222] text-white" style={{ padding: '48px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <img src="/logo.png" alt={BIZ} style={{ height: 48, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', margin: '0 auto 16px' }} />
          <p className="text-white/70 text-sm m-0 mb-2">{BIZ}</p>
          <p className="text-white/70 text-sm m-0 mb-2">4060 W Maple Rd, Bloomfield Township, MI 48301</p>
          <p className="text-white/70 text-sm m-0 mb-4">{PHONE}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-white/80 hover:text-white no-underline">Home</a>
            <a href="/bloomfield" className="text-white/80 hover:text-white no-underline">Bloomfield</a>
            <a href="/mold-remediation" className="text-white/80 hover:text-white no-underline">Mold Remediation</a>
            <a href="/sewage-cleanup" className="text-white/80 hover:text-white no-underline">Sewage Cleanup</a>
            <a href="/reconstruction-services" className="text-white/80 hover:text-white no-underline">Reconstruction</a>
          </div>
        </div>
      </footer>
    </>
  )
}
