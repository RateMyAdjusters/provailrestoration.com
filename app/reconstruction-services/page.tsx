import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BIZ = 'Provail Restoration of Bloomfield'
const URL = 'https://provailrestoration.com/reconstruction-services'

export const metadata: Metadata = {
  title: 'Reconstruction Services Bloomfield, MI | Post-Mitigation Rebuild | (248) 531-8404',
  description:
    'Post-mitigation reconstruction in Bloomfield Township and Bloomfield Hills, MI. Drywall, flooring, cabinetry, paint, and trim. Provail Restoration of Bloomfield handles the rebuild after water, mold, or sewage losses. Call (248) 531-8404.',
  keywords: [
    'reconstruction services Bloomfield',
    'water damage rebuild Bloomfield Township',
    'post-mitigation reconstruction Birmingham MI',
    'drywall replacement Bloomfield Hills',
    'flooring installation after water damage',
    'cabinet replacement Bloomfield MI',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Reconstruction Services Bloomfield, MI | Post-Mitigation Rebuild',
    description:
      'Drywall, flooring, cabinetry, paint, and trim reconstruction following water, mold, and sewage losses in Bloomfield, MI.',
    url: URL,
    siteName: BIZ,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is post-mitigation reconstruction?',
    a: 'Post-mitigation reconstruction is the rebuild phase that follows water extraction, structural drying, mold remediation, or sewage cleanup. It restores the materials that were removed during mitigation — typically drywall, insulation, baseboard, paint, flooring, cabinetry, and trim — so the property looks and functions the way it did before the loss.',
  },
  {
    q: 'Do I need a separate contractor for the rebuild?',
    a: 'Not with Provail Restoration of Bloomfield. We are licensed to perform both mitigation and reconstruction, which means the same project manager who documented the loss is the one who closes it out. Single-source accountability simplifies scheduling, communication, and the insurance claim file.',
  },
  {
    q: 'How long does reconstruction take?',
    a: 'Most residential rebuilds in Bloomfield take between one and four weeks once mitigation is complete. Smaller scopes such as a single bathroom or a section of basement drywall can finish in a few days. Larger scopes involving cabinetry, custom flooring, or multiple rooms take longer because of material lead times.',
  },
  {
    q: 'Will the new finishes match my existing finishes?',
    a: 'We make every effort to match. For paint, we color-match existing walls and feather into the surrounding plane when feasible. For flooring, we source the same product whenever it is still in production, and we discuss transition options when it is not. For trim and cabinetry, we match profile and finish or document why an exact match is not possible.',
  },
  {
    q: 'Do you handle insurance for the rebuild?',
    a: 'Yes. We write reconstruction estimates that align with the same industry standard pricing platforms used by carriers, and we communicate with your adjuster on supplemental items as scope is uncovered during the rebuild. You sign off on the scope before work begins and on any supplements before they are added.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Provail Restoration of Bloomfield is licensed and insured to perform restoration and reconstruction work in Michigan. Certificates of insurance are available on request, and we pull permits where required by local building departments.',
  },
  {
    q: 'Can you coordinate with subcontractors I already have?',
    a: 'In most cases, yes. If you have a preferred plumber, electrician, painter, or flooring installer, we can coordinate scheduling and scope so the project moves forward without duplicate work. We will be straightforward about any quality or warranty considerations.',
  },
  {
    q: 'Do you warranty your reconstruction work?',
    a: 'Yes. We provide a written workmanship warranty on reconstruction labor. Material warranties are passed through from the manufacturer. Specific warranty terms are included with the project documentation at closeout.',
  },
  {
    q: 'Will the work area be cleaned up daily?',
    a: 'Yes. Our crews protect floors and adjacent surfaces, contain dust where practical, and clean the work area at the end of each day. A final cleaning is performed before walkthrough so the space is ready to use when we hand it back.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': URL + '#service',
    name: 'Reconstruction Services',
    serviceType: 'Reconstruction Services',
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
      'Post-mitigation reconstruction including drywall, insulation, flooring, cabinetry, paint, and trim for homes and businesses in Bloomfield, Michigan.',
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

export default function ReconstructionServicesPage() {
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
                Licensed &amp; Insured
              </span>
              <span className="text-[#c1c1c1]">|</span>
              <span>Single-Source Rebuild</span>
              <span className="text-[#c1c1c1]">|</span>
              <span>Bloomfield, MI</span>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Reconstruction Services in Bloomfield, Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto mb-10 leading-relaxed">
              Drywall, insulation, flooring, cabinetry, paint, and trim. Provail Restoration of Bloomfield handles the rebuild after every water,
              mold, or sewage loss so a single team takes the project from emergency response to final walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={PHONE_HREF}
                 className="inline-flex items-center justify-center text-white font-semibold text-base no-underline hover:bg-black"
                 style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}>
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <article className="max-w-[800px] mx-auto px-6 text-[#222222]" style={{ fontSize: 17, lineHeight: 1.75 }}>

            <h2 className="font-bold mt-4 mb-4" style={{ fontSize: '1.875rem', letterSpacing: '-0.44px' }}>
              One Team From Emergency Response to Final Walkthrough
            </h2>
            <p className="text-[#444] mb-5">
              Mitigation is the half of a restoration project that gets the urgent attention. Reconstruction is the half
              that determines whether the property actually feels finished when the work is done. Provail Restoration of Bloomfield is licensed in
              Michigan to handle both, and we strongly recommend keeping the same team on the project from start to
              finish. The mitigation crew already knows the moisture history, the affected materials, the documentation
              the carrier has on file, and the homeowner. Handing the job to a separate general contractor at the
              halfway point is how scope gets lost in translation, supplements get missed, and timelines slip.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Drywall and Insulation
            </h2>
            <p className="text-[#444] mb-5">
              Most water and sewage losses in Bloomfield homes involve removing the lower portion of drywall along
              affected walls so the stud cavity can be dried and verified clean. Reconstruction begins by reinstalling
              insulation behind those walls — typically R-13 fiberglass batts in a standard 2x4 stud bay, R-21 in a
              2x6 wall, or closed-cell spray foam where the assembly calls for it — then hanging new drywall, taping,
              applying three coats of joint compound, sanding to a smooth finish, and priming. Texture is matched to
              the existing surface, whether that is smooth, light orange peel, or knockdown. Done well, the seam between
              new and existing drywall disappears under paint.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Flooring
            </h2>
            <p className="text-[#444] mb-5">
              Flooring is often the largest single line item in a residential rebuild. We install the full range
              of finished flooring options used in Bloomfield homes: engineered hardwood, solid hardwood, luxury vinyl
              plank, ceramic and porcelain tile, natural stone, laminate, and carpet with new pad. We source the same
              product whenever it is still in production, and we are direct with homeowners when it is not. In those
              cases, we discuss transition options that preserve a clean look — for example, transitioning at a
              doorway, extending a flooring run into an adjacent space, or changing direction at a logical break.
              Subfloor is inspected and replaced where moisture damage warrants it before any new flooring goes down.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Cabinetry and Built-Ins
            </h2>
            <p className="text-[#444] mb-5">
              Kitchens and bathrooms take the largest share of cabinet damage in water losses. Particleboard cabinet
              boxes that have wicked water rarely recover, even after drying, because the swelling and delamination
              are permanent. Solid wood doors and face frames are sometimes salvageable. We evaluate each cabinet
              individually and recommends repair, partial replacement, or full replacement based on the condition of
              the box, the door, the finish, and the hardware. For full replacements, we work with semi-custom and
              custom cabinet shops to source a match in style and finish, and we coordinate countertop replacement
              with stone fabricators and laminate suppliers as needed.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Paint
            </h2>
            <p className="text-[#444] mb-5">
              Paint is where the entire reconstruction either looks finished or looks like a patch job, so we treat it
              accordingly. New drywall is primed with a quality drywall primer, then painted with two coats of the
              homeowner's chosen finish. We color-match existing wall paint at a local supplier and feather new paint
              into the existing plane wherever the surrounding paint is still in good condition. When a wall has both
              new and existing paint, we generally recommend repainting the entire wall corner-to-corner so the sheen
              and color are uniform across the visible surface. Trim and ceilings are handled the same way.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Trim, Doors, and Millwork
            </h2>
            <p className="text-[#444] mb-5">
              Baseboard, casing, crown, chair rail, and door trim are typically removed during mitigation when
              affected by water and reinstalled new during reconstruction. We match the existing profile from local
              millwork suppliers, and where an exact profile is no longer available we discuss substitutions that
              read the same from a normal viewing distance. Interior doors that swelled or warped are replaced with
              matching slabs and rehung on existing or new hinges. Hardware is reused when serviceable and replaced
              when it is not.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Coordination With Trades
            </h2>
            <p className="text-[#444] mb-5">
              Some reconstruction projects require licensed trades for plumbing, electrical, or HVAC work. We
              maintains relationships with licensed Michigan trades who are familiar with our project workflow, and
              we coordinate their work into the schedule so the project moves forward without unnecessary downtime.
              If you have an existing relationship with a plumber or electrician you trust, we are happy to schedule
              around them and coordinate scope.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Permits and Inspections
            </h2>
            <p className="text-[#444] mb-5">
              Most cosmetic rebuild work — drywall replacement, paint, flooring, baseboard — does not require a
              building permit in Bloomfield Township or surrounding communities. Structural work, electrical work,
              plumbing modifications, and certain HVAC changes do. We pull the appropriate permits for any
              scope that requires them and schedules inspections through the local building department. We do not
              perform permitted work without the permit, regardless of how minor the change may seem.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Working With Your Insurance Carrier
            </h2>
            <p className="text-[#444] mb-5">
              Reconstruction estimates are written in the same industry standard pricing platforms that insurance
              carriers use to evaluate scope. That alignment matters, because it lets the adjuster compare line by
              line rather than reconciling between two different formats. As reconstruction progresses, items
              sometimes come to light that were not visible during mitigation — a hidden subfloor failure, a section
              of damaged sheathing behind a cabinet, a tile pattern that no longer exists. We document those items,
              issue a supplement to the carrier, and proceed with the additional work only after you have approved
              the change.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Communication and Closeout
            </h2>
            <p className="text-[#444] mb-5">
              You receive a single project manager from the start of the rebuild through the final walkthrough.
              That person is your point of contact for scheduling, scope questions, supplements, and any concerns
              that come up. We aim for daily communication during active work and weekly milestone updates during
              material lead times. At closeout, we walk the property with you, document any punch list items,
              complete them, and provide warranty documentation along with any manufacturer registrations you need
              for the materials installed. The goal is a project that closes cleanly with no loose ends.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Related Services
            </h2>
            <p className="text-[#444] mb-5">
              Reconstruction usually follows mitigation. If you have not yet completed mitigation, see our{' '}
              <a href="/" className="text-[#ff385c] font-semibold no-underline hover:underline">water damage restoration</a>,{' '}
              <a href="/mold-remediation" className="text-[#ff385c] font-semibold no-underline hover:underline">mold remediation</a>, and{' '}
              <a href="/sewage-cleanup" className="text-[#ff385c] font-semibold no-underline hover:underline">sewage cleanup</a>{' '}
              pages for the steps that come before the rebuild. Provail Restoration of Bloomfield is one call for both halves of the project.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Why Provail Restoration of Bloomfield
            </h2>
            <p className="text-[#444] mb-5">
              Provail Restoration of Bloomfield is a local restoration and reconstruction company. We are licensed and insured in
              Michigan, we carry a single project manager through the life of every job, and we close out cleanly.
              If your home or business is ready for the rebuild phase, call {PHONE} and we will schedule a scope
              walkthrough at your convenience.
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
              Ready for the rebuild phase?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Provail Restoration of Bloomfield provides reconstruction across Bloomfield Township, Bloomfield Hills, Birmingham, West Bloomfield,
              Troy, and Farmington Hills.
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
