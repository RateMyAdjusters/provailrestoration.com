import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const BIZ = 'Provail Restoration of Bloomfield'
const URL = 'https://provailrestoration.com/mold-remediation'

export const metadata: Metadata = {
  title: 'Mold Remediation Bloomfield, MI | IICRC S520 Certified | (248) 531-8404',
  description:
    'IICRC S520 mold remediation in Bloomfield Township, Bloomfield Hills & Birmingham, MI. Certified containment, HEPA air filtration, source removal, and post-remediation verification. Call Provail Restoration of Bloomfield at (248) 531-8404.',
  keywords: [
    'mold remediation Bloomfield',
    'IICRC S520 mold remediation',
    'mold removal Bloomfield Township MI',
    'microbial growth removal Bloomfield Hills',
    'HEPA filtration mold cleanup',
    'attic mold remediation Birmingham MI',
    'basement mold remediation West Bloomfield',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Mold Remediation Bloomfield, MI | IICRC S520 Certified',
    description:
      'Certified IICRC S520 mold remediation, containment, HEPA filtration, and moisture control across Bloomfield, MI.',
    url: URL,
    siteName: BIZ,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is mold remediation?',
    a: 'Mold remediation is the structured process of identifying microbial growth indoors, isolating the affected area, removing contaminated materials, cleaning surrounding surfaces, and restoring normal moisture conditions so the growth does not return. Provail Restoration of Bloomfield follows the IICRC S520 Standard for Professional Mold Remediation on every project in Bloomfield, Michigan.',
  },
  {
    q: 'What is the IICRC S520 standard?',
    a: 'The ANSI/IICRC S520 is the consensus-based industry standard that defines acceptable practices for mold inspection and remediation. It covers worker protection, containment design, engineering controls such as HEPA filtration and negative air pressure, source removal, post-remediation cleaning, and verification. Following S520 helps ensure work is performed safely, thoroughly, and consistently.',
  },
  {
    q: 'How long does mold remediation take?',
    a: 'Most residential remediation projects in Bloomfield take between two and seven days. Small isolated areas under ten square feet may finish in a single day, while larger Condition 3 contamination involving multiple rooms can take longer. The schedule depends on the size of the affected area, the materials involved, drying time, and whether reconstruction is required afterward.',
  },
  {
    q: 'Do you set up containment?',
    a: 'Yes. For any project beyond a small isolated patch, our technicians build a containment barrier using six-mil polyethylene sheeting, zipper doors, and a decontamination chamber. We then place a HEPA-filtered air scrubber inside the containment to create negative air pressure so airborne particulates do not migrate into clean parts of the building.',
  },
  {
    q: 'What does HEPA filtration do?',
    a: 'A HEPA (High Efficiency Particulate Air) filter captures at least 99.97 percent of particles 0.3 microns in diameter, which is the size range that includes most mold spores and fragments. We use HEPA-filtered air scrubbers during remediation and HEPA vacuums during cleanup so that fine particulates released during removal are captured rather than redistributed.',
  },
  {
    q: 'Will mold come back after remediation?',
    a: 'Microbial growth returns when moisture returns. That is why our process always begins with locating and correcting the water source, whether it is a roof leak, plumbing failure, condensation, or a humidity problem. Once the materials are dried to documented benchmarks and the moisture source is corrected, recurrence in the same area is uncommon.',
  },
  {
    q: 'Do you handle insurance claims?',
    a: 'Yes. We document the loss with moisture mapping, photographs, scope notes, and itemized estimates that align with carrier expectations. We can communicate directly with your adjuster, share daily progress reports, and provide post-remediation documentation for the claim file.',
  },
  {
    q: 'How much does mold remediation cost in Bloomfield?',
    a: 'Costs vary with the size of the affected area, the materials involved, accessibility, and whether reconstruction is needed. Small isolated remediation projects often range from a few hundred dollars to roughly fifteen hundred dollars, while larger multi-room projects can be several thousand. Provail Restoration of Bloomfield provides a written, itemized estimate before any work begins.',
  },
  {
    q: 'Can I stay in my home during remediation?',
    a: 'In most cases, yes. Containment, negative air pressure, and HEPA filtration are designed to keep work areas isolated from the rest of the home. Your technician will discuss whether any rooms should be temporarily avoided based on the location and size of the work area.',
  },
  {
    q: 'What is post-remediation verification?',
    a: 'Post-remediation verification is the final inspection that confirms the work area is visibly clean, dry, and free of debris. An independent indoor environmental professional can also collect air or surface samples for laboratory analysis if your situation calls for third-party clearance, which we recommend for larger Condition 3 projects.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': URL + '#service',
    name: 'Mold Remediation',
    serviceType: 'Mold Remediation',
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
      'IICRC S520 compliant mold remediation including containment, HEPA filtration, source removal, and moisture control for homes and businesses in Bloomfield, Michigan.',
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

export default function MoldRemediationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white"
        style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
      >
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
                IICRC S520 Compliant
              </span>
              <span className="text-[#c1c1c1]">|</span>
              <span>HEPA Filtration</span>
              <span className="text-[#c1c1c1]">|</span>
              <span>Bloomfield, MI</span>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Mold Remediation in Bloomfield, Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto mb-10 leading-relaxed">
              Certified mold remediation following the ANSI/IICRC S520 standard. Provail Restoration of Bloomfield contains the work area,
              filters the air, removes the source, and corrects the moisture condition that allowed microbial growth to begin.
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
              A Standards-Based Approach to Indoor Microbial Growth
            </h2>
            <p className="text-[#444] mb-5">
              When property owners in Bloomfield Township, Bloomfield Hills, Birmingham, and West Bloomfield notice a musty
              smell, dark staining behind a baseboard, or visible growth on drywall after a leak, the response should be
              measured rather than alarmed. Indoor microbial growth is common in Michigan homes after any moisture event,
              and the path back to a normal indoor environment is well defined. Provail Restoration of Bloomfield follows the
              ANSI/IICRC S520 Standard for Professional Mold Remediation on every project, and our technicians are trained
              to apply that standard the same way every time, on every job, in every neighborhood we serve.
            </p>
            <p className="text-[#444] mb-5">
              The S520 framework is straightforward in concept. First, identify the affected materials and the moisture
              source that allowed microbial growth to develop. Second, isolate the work area with engineered containment so
              that fine particulates released during removal cannot migrate into clean parts of the building. Third, remove
              the contaminated materials and clean the remaining surfaces with HEPA-filtered equipment. Fourth, dry the
              structure to documented benchmarks and correct the moisture problem so the conditions that created the growth
              no longer exist. Fifth, verify the result. Each phase has its own documentation, and that documentation is
              what allows insurance carriers, building owners, and occupants to trust the outcome.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              An Important Note About Health Claims
            </h2>
            <p className="text-[#444] mb-5">
              Provail Restoration of Bloomfield is a restoration contractor, not a medical provider. We are not in a position to make claims about
              how exposure to indoor microbial growth may or may not affect any specific person, and we do not. Reactions
              to indoor air quality vary widely from one individual to the next. Some people exposed to elevated levels of
              spores or fragments may experience discomfort, while others in the same environment may notice nothing at
              all. If you have questions about how an indoor environment may be affecting your health, those questions
              should be directed to a licensed physician or a qualified indoor environmental professional. Our role is to
              return the building itself to a clean, dry, structurally sound condition using the methods described in this
              article.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step One: Inspection and Moisture Mapping
            </h2>
            <p className="text-[#444] mb-5">
              Every remediation project begins with a careful walkthrough. Our technician documents visible growth,
              staining, warped trim, soft drywall, and any musty odor. We use a combination of pin and pinless moisture
              meters to measure the wetness of building materials, and we use thermal imaging to identify temperature
              anomalies that often correspond to hidden moisture inside wall cavities, behind cabinets, and under flooring.
              Moisture mapping is the foundation of an honest scope. Without it, a remediation contractor is essentially
              guessing at the boundary of the affected area, and a guess almost always leads to either over-removal or
              under-removal. Both are bad outcomes for the property owner.
            </p>
            <p className="text-[#444] mb-5">
              The inspection also documents the moisture source. This is the question that matters more than any other,
              because microbial growth is a symptom rather than the underlying problem. A roof leak, a slow supply-line
              drip beneath a sink, a failed wax ring at a toilet, condensation on uninsulated ductwork, a cracked
              foundation wall in a basement, a window that was caulked over rather than properly flashed, an HVAC system
              running too cold against humid summer air — any of these can create the sustained moisture that allows
              colonization. If the source is not identified and corrected, no amount of removal will produce a durable
              result.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Two: Containment and Engineering Controls
            </h2>
            <p className="text-[#444] mb-5">
              Once the scope is documented, the next step is containment. The purpose of containment is simple: keep the
              dust, debris, and airborne particulates generated during removal inside a defined work area so they cannot
              spread to the rest of the building. For most residential projects in Bloomfield, that means floor-to-ceiling
              barriers built from six-mil polyethylene sheeting, supported by spring poles or framing, with a zippered
              entry. Larger projects also include a small decontamination chamber where workers can bag waste and remove
              personal protective equipment before exiting the work area.
            </p>
            <p className="text-[#444] mb-5">
              Inside the containment, we place a HEPA-filtered negative air machine, also called an air scrubber. The
              machine pulls air out of the contained zone, filters it through a HEPA media that captures at least
              99.97 percent of particles 0.3 microns in diameter, and exhausts the filtered air to the outside or to a
              clean part of the building. The result is a slightly lower air pressure inside the containment than outside
              of it, which means that air flows into the work area through any small gap rather than out of it. That
              pressure differential is the engineering control that prevents cross-contamination during the removal phase.
              S520 calls these tools engineering controls because they are designed and sized to do a specific job, and
              their performance can be verified.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Three: Personal Protective Equipment
            </h2>
            <p className="text-[#444] mb-5">
              Workers performing remediation wear personal protective equipment chosen for the size of the project and the
              level of contamination. For a small isolated area, that may be an N95 respirator, nitrile gloves, and eye
              protection. For larger Condition 3 projects involving heavy growth or extensive removal, technicians wear
              full-face powered air-purifying respirators, disposable Tyvek suits with hoods and booties, and additional
              gloves. PPE is not optional and not interchangeable. Protecting the worker is part of protecting the
              homeowner, because a worker who is uncomfortable or improperly equipped is a worker who cuts corners, and
              cut corners are how cross-contamination happens.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Four: Source Removal
            </h2>
            <p className="text-[#444] mb-5">
              S520 makes a clear distinction that property owners deserve to understand. Microbial growth on porous and
              semi-porous building materials is removed, not treated. Drywall, insulation, carpet pad, and most cellulose
              ceiling tile that show actual growth are cut out and bagged for disposal because the hyphae of the
              colonization extend below the visible surface and cannot be reliably cleaned out of porous material.
              Anything you read or hear that suggests porous building materials with visible growth can simply be
              sprayed, fogged, or painted over does not reflect the standard of care.
            </p>
            <p className="text-[#444] mb-5">
              Non-porous surfaces are a different conversation. Studs, subflooring, joists, structural concrete, ceramic
              tile, glass, and metal can almost always be cleaned in place using a combination of HEPA vacuuming, damp
              wiping with a detergent solution, and additional HEPA vacuuming. The goal is physical removal of the
              particulate, not chemical neutralization. Antimicrobial products do have a role in some situations, but
              they are not a substitute for physical cleaning. Provail Restoration of Bloomfield uses EPA-registered products only when the
              manufacturer label and the project conditions support their use, and we never rely on a chemical to
              compensate for incomplete removal.
            </p>
            <p className="text-[#444] mb-5">
              Removed material is bagged inside the containment, the outside of each bag is HEPA-vacuumed and wiped down
              before it leaves the work area, and the bagged waste is then carried out through the cleanest path
              available. For larger projects, we use a double-bagging protocol and a sealed dumpster staged near the
              exit. Small details like these are what separate a clean remediation from a messy one.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Five: Detailed Cleaning
            </h2>
            <p className="text-[#444] mb-5">
              Once removal is complete, every surface inside the containment is cleaned. Horizontal surfaces are HEPA
              vacuumed first, then wiped, then HEPA vacuumed again. Vertical surfaces and ceilings receive the same
              treatment. Air scrubbers continue running throughout the cleaning phase to capture any particulate that
              becomes airborne during agitation. For larger projects, we run the air scrubbers for an additional period
              after cleaning is finished so that the air inside the containment has time to clear before the barrier
              comes down.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Six: Drying and Moisture Control
            </h2>
            <p className="text-[#444] mb-5">
              If the project began with a water loss, drying overlaps with cleaning. We use commercial dehumidifiers and
              high-velocity air movers to bring moisture content of structural materials back to the documented dry
              standard for the building, and we monitor that progress daily with moisture meters. Drying logs become
              part of the project file. If the project began without a recent water loss but found growth caused by an
              ongoing humidity problem, we work with the property owner to address the underlying condition. That may
              mean adding insulation to a cold ductwork run, installing a properly sized dehumidifier in a basement,
              correcting bathroom ventilation, or repairing a roof. Without that step, growth will return.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Step Seven: Post-Remediation Verification
            </h2>
            <p className="text-[#444] mb-5">
              The final step is verification that the work area meets the conditions described in S520. At a minimum,
              that means visual inspection: the area should be visibly free of growth, free of dust and debris, and
              dry to the documented benchmark. For larger Condition 3 projects, an independent indoor environmental
              professional may also collect air or surface samples for laboratory analysis to provide third-party
              clearance. Provail Restoration of Bloomfield recommends third-party clearance whenever the project size or sensitivity of the
              occupants warrants it, and we coordinate with the IEP of your choice. We do not perform our own clearance
              testing because the property owner deserves an independent check.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Reconstruction After Remediation
            </h2>
            <p className="text-[#444] mb-5">
              Once verification is complete, the affected materials that were removed need to be replaced. Drywall,
              insulation, baseboard, paint, and flooring all return as part of the rebuild phase. Provail Restoration of Bloomfield handles
              reconstruction directly so that the same team that documented the loss is the team that closes it out.
              You can read more about that process on our{' '}
              <a href="/reconstruction-services" className="text-[#ff385c] font-semibold no-underline hover:underline">
                reconstruction services page
              </a>.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Common Causes of Microbial Growth in Bloomfield Homes
            </h2>
            <p className="text-[#444] mb-5">
              Bloomfield Township and the surrounding communities have a mix of older brick colonials, newer subdivisions,
              and large lakefront properties around Wing Lake, Lower Long Lake, and Upper Long Lake. Different building
              types have different vulnerabilities. Older homes with finished basements often see growth at the base of
              exterior walls where hydrostatic pressure pushes moisture through the foundation in spring. Newer homes
              with tighter envelopes can develop attic growth when bath fans vent into the attic instead of through the
              roof. Lakefront properties commonly see crawlspace humidity issues during humid summer months. The pattern
              of growth tells a trained inspector where to look for the moisture source, and that is the conversation
              Provail Restoration of Bloomfield has with every property owner before any removal begins.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Working With Your Insurance Carrier
            </h2>
            <p className="text-[#444] mb-5">
              Coverage for remediation depends on the underlying cause of the moisture and the language of your specific
              policy. Sudden and accidental water losses, such as a burst supply line, are commonly covered. Long-term
              seepage, gradual leaks, and humidity problems are commonly excluded or sublimited. Provail Restoration of Bloomfield documents the
              loss thoroughly so that your adjuster has what they need to make a coverage determination, and we provide
              an itemized estimate that aligns with industry standard pricing platforms. We do not advise property owners
              on coverage interpretation, because that is between the policyholder and the carrier, but we make sure the
              documentation is complete enough to support whatever the policy provides.
            </p>

            <h2 className="font-bold mt-10 mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
              Why Provail Restoration of Bloomfield
            </h2>
            <p className="text-[#444] mb-5">
              We are a local Bloomfield restoration company with IICRC-trained technicians, professional containment
              equipment, calibrated moisture meters, commercial-grade air scrubbers and dehumidifiers, and a documentation
              workflow built around the S520 standard. We arrive on time, explain the scope clearly, perform the work the
              same way we would perform it in our own homes, and stand behind the result. If you have noticed growth, a
              musty smell, or a recent water loss anywhere in your Bloomfield property, call {PHONE} and we will walk you
              through the options.
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
              Concerned about microbial growth in your home?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call Provail Restoration of Bloomfield for an IICRC S520 inspection and written scope. We serve Bloomfield Township, Bloomfield Hills,
              Birmingham, West Bloomfield, Troy, and Farmington Hills.
            </p>
            <a href={PHONE_HREF}
               className="inline-flex items-center justify-center text-white font-semibold text-base no-underline hover:bg-black"
               style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 32px', height: 56 }}>
              Call {PHONE}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
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
