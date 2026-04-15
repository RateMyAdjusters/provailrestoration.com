import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'

export const metadata: Metadata = {
  title:
    'Water Damage Insurance Documentation in Michigan | PROVAIL Bloomfield | (248) 531-8404',
  description:
    'PROVAIL documents water damage for your insurance company, works directly with your adjuster, and direct-bills most major Michigan carriers. IICRC-certified, Bloomfield Township based, serving Oakland County 24/7.',
  keywords: [
    'water damage insurance documentation Michigan',
    'work with my insurance adjuster Bloomfield',
    'direct bill water damage Michigan',
    'restoration company that bills insurance Bloomfield',
    'Xactimate water damage estimate Michigan',
    'water damage claim documentation Oakland County',
    'IICRC certified restoration Michigan',
    'PROVAIL insurance Bloomfield',
  ],
  openGraph: {
    title: 'Water Damage Insurance Documentation in Michigan | PROVAIL Bloomfield',
    description:
      'We document the damage for your insurance company, work directly with your adjuster, and direct-bill most major Michigan carriers.',
    url: 'https://provailrestoration.com/insurance-claims-help',
    siteName: 'PROVAIL Water Damage Restoration Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/insurance-claims-help',
  },
  robots: { index: true, follow: true },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Damage Documentation and Direct-Bill Restoration',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PROVAIL Water Damage Restoration Bloomfield',
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
  areaServed: { '@type': 'State', name: 'Michigan' },
  description:
    'PROVAIL documents water damage for your insurance company, works directly with your assigned adjuster, and direct-bills most major Michigan carriers. We are a restoration contractor, not a public adjuster.',
  url: 'https://provailrestoration.com/insurance-claims-help',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you handle my insurance claim for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We are a licensed restoration contractor, not a public adjuster. We document the damage for your insurance company, work directly with your assigned adjuster, and direct-bill most major Michigan carriers. The claim itself is between you and your insurer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you negotiate with my insurance company on my behalf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Negotiating a claim is the legal job of a licensed public adjuster or attorney. PROVAIL provides accurate IICRC-standard scoping and Xactimate documentation that supports your file, and we discuss our scope of work directly with your adjuster, but we do not negotiate your settlement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you direct-bill my insurance company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most major Michigan carriers. With a signed work authorization and Direction of Payment, we can bill the covered portion of your loss directly to your carrier so you only pay your deductible and any non-covered items up front.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documentation will I receive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive a complete loss file: photographs of every affected area, daily moisture readings, equipment logs, an itemized Xactimate scope of work, technician sign-in sheets, and a final close-out package suitable for your carrier and your records.',
      },
    },
  ],
}

export default function InsuranceClaimsHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center no-underline">
            <img src="/logo.png" alt="PROVAIL Water Damage Restoration Bloomfield" style={{ height: 60, width: 'auto', objectFit: 'contain' }} />
          </a>
          <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-[#222222]">
            <span className="font-semibold text-[15px]">{PHONE}</span>
          </a>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-3 py-2.5" style={{ backgroundColor: '#ff385c' }}>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm no-underline">Call {PHONE}</a>
          <span className="text-white/40">|</span>
          <a href={SMS_HREF} className="text-white font-semibold text-sm no-underline">Text Us</a>
        </div>
      </header>

      <main>
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <p className="text-[#ff385c] font-semibold text-sm uppercase tracking-wide mb-3">Insurance Documentation</p>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.44px' }}>
              We document your water damage. We work with your adjuster. We direct-bill your carrier.
            </h1>
            <p className="text-[#6a6a6a] text-lg leading-relaxed mb-8">
              PROVAIL is a licensed restoration contractor, not a public adjuster. Here is exactly what that means for Michigan homeowners and business owners after a water loss — and how our IICRC-standard documentation makes the insurance side of your claim as painless as possible.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center text-white font-semibold no-underline" style={{ backgroundColor: '#222222', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
              Talk to a real person: {PHONE}
            </a>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '20px 0 72px' }}>
          <div className="max-w-[820px] mx-auto px-6 text-[#6a6a6a] text-base leading-relaxed space-y-5">
            <h2 className="text-[#222222] font-bold mt-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', letterSpacing: '-0.44px' }}>
              First, the important part: what we are and what we are not
            </h2>
            <p>
              In Michigan, only a licensed public adjuster or a licensed attorney is legally allowed to negotiate an insurance claim on a policyholder&apos;s behalf. PROVAIL is neither of those things. We are a licensed restoration contractor, headquartered at 4060 W Maple Rd in Bloomfield Township, with IICRC certifications across our crew and a Michigan residential builder license on the rebuild side. Our role in your insurance claim is narrow and well-defined: we document the damage for your insurance company, we work directly with the adjuster they assign to your file, and — for most major Michigan carriers — we direct-bill the covered portion of our work so you do not have to write a five-figure check up front.
            </p>
            <p>
              We do not handle your claim. We do not negotiate with your insurance company. We do not get you more money. Anyone who promises those things on a restoration contract is either operating outside their lane or making promises a contractor cannot legally keep in this state. What we do, we do well: accurate, defensible, IICRC-standard documentation that gives your adjuster the information they need to make a fair coverage decision, and a clean direct-bill workflow that keeps cash out of your pocket while the work gets done.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              How the documentation actually works
            </h2>
            <p>
              The moment our crew arrives at your Bloomfield, Birmingham, or Troy property, we start building the file. Our first walkthrough captures the source of the loss (where the water came from), the affected rooms and assemblies, the water category under IICRC S500 (Cat 1 clean, Cat 2 grey, Cat 3 black), and a baseline set of moisture readings on every wet wall, floor, and ceiling. Photos of the source, the standing water, the damaged contents, and the affected building materials all go into a date- and time-stamped report that your adjuster receives.
            </p>
            <p>
              From there, every piece of equipment we set is logged: dehumidifier model and serial, air mover count, containment perimeter, HEPA scrubber CFM. Every day a technician returns to the job, fresh moisture readings are recorded on the same assemblies, so we can prove the structure is drying on schedule. When materials are removed — wet drywall, soaked carpet pad, ruined cabinetry — we photograph them in place, photograph them out, and itemize them on the loss inventory. None of this is for show. Adjusters at every major Michigan carrier review files like this every day, and the cleaner the file, the faster the coverage decision.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Working directly with your adjuster
            </h2>
            <p>
              Once an adjuster is assigned, we make contact within the first business day. We share our scope, walk them through the affected areas (in person or virtually, depending on the carrier&apos;s workflow), and answer their questions about category, drying timeline, demolition needs, and rebuild scope. We use Xactimate — the same scoping and pricing software used by every major insurance carrier — with the regionally calibrated price list for the Bloomfield zip code, so the numbers we submit match the numbers the carrier sees on their side of the screen.
            </p>
            <p>
              When the adjuster has questions or wants supporting photos, we provide them. When they want a different approach to a specific room, we discuss it like professionals and adjust the scope where it makes sense. When they make a coverage decision, we communicate that decision to you clearly and finish the work that is covered. The adjuster makes the coverage call. We make sure they have the right information to make it accurately.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Direct-billing your insurance company
            </h2>
            <p>
              Most major Michigan carriers accept direct-bill assignment from a licensed restoration contractor. With a signed work authorization and a Direction of Payment from you, we bill the covered portion of the loss directly to your insurance company. You pay your policy deductible and any non-covered items (upgrades, code-required items not covered by ordinance-and-law endorsements, contents not on your policy, etc.), and the rest is handled between us and the carrier.
            </p>
            <p>
              Carriers we routinely direct-bill in Michigan include State Farm, Allstate, Auto-Owners, Hanover, Citizens, Liberty Mutual, Progressive, Travelers, USAA, Farmers, Nationwide, Chubb, Cincinnati, Hartford, AAA Auto Club Group, MetLife, Frankenmuth Insurance, Pioneer State Mutual, Wolverine Mutual, and Michigan Millers, among many others. If your carrier is not on this list, ask us — we have probably worked with them already.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              What you need to do as the policyholder
            </h2>
            <p>
              Three things. First, report the loss to your insurance company as soon as you can — most policies require &ldquo;prompt notice,&rdquo; and the sooner the carrier knows, the sooner an adjuster is assigned. Second, take a few photos of the damage on your phone before mitigation begins, just for your own records. Third, sign the work authorization and Direction of Payment we put in front of you, which gives us the legal right to start mitigation and to communicate with your adjuster on the scope of our work. That is it. From there, you focus on your family or your tenants, and we focus on the building.
            </p>
            <p>
              You stay in control of the claim itself the whole time. If you ever want to bring in a public adjuster or an attorney to negotiate the coverage decision, that is your right and we will continue to provide the same documentation to support whatever path you choose. We do not lock you into anything.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              What your insurance probably covers (and what it probably does not)
            </h2>
            <p>
              We are not your insurance agent and we are not licensed to interpret your specific policy, but in our experience handling thousands of Michigan losses, the patterns are pretty consistent. Sudden and accidental water losses from inside the building — burst supply lines, failed appliance hoses, ruptured water heaters, ice dams, wind-driven rain through a damaged roof — are typically covered under standard Michigan homeowners (HO-3) and commercial property policies. Sewer and drain backups are sometimes covered, but only if you carry a specific sewer/sump backup endorsement; many policies exclude them by default. Surface flooding and groundwater intrusion are almost always excluded from standard policies and require a separate NFIP flood policy. Long-term seepage from a leak that &ldquo;has been there for a while&rdquo; is generally excluded as a maintenance issue.
            </p>
            <p>
              Your adjuster makes the final call on every one of those questions, and the only person who can authoritatively interpret your policy is your insurance agent or your carrier. What we can do is document the loss accurately enough that the coverage decision is based on facts, not guesses.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              What you will receive when the job closes
            </h2>
            <p>
              At the end of the project, you get a complete close-out file: every photograph, every moisture log, the equipment inventory, the technician sign-in sheets, the final Xactimate scope, and the signed completion certificate. It goes to you, it goes to your adjuster, and it stays in our system in case anyone needs it years from now (mortgage lender, future buyer, follow-up claim, you name it). Your home or business looks like the loss never happened, and the paperwork backing it up is bulletproof.
            </p>

            <div className="bg-[#fff8e6] border-l-4 border-[#ff385c] p-6 mt-10" style={{ borderRadius: '8px' }}>
              <h3 className="text-[#222222] font-bold mb-2">A note on contractors who promise the world</h3>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                If a restoration company tells you they will &ldquo;handle your insurance claim,&rdquo; &ldquo;negotiate with the insurance company,&rdquo; or &ldquo;get you more money than your adjuster wants to pay,&rdquo; politely walk away. Those activities require a Michigan public adjuster license that contractors do not hold. PROVAIL stays in our lane: we document, we communicate with your adjuster on the scope of our work, we direct-bill, and we do excellent restoration. That is how we keep our license, our reputation, and your trust.
              </p>
            </div>

            <div className="bg-[#222222] text-white p-8 mt-10" style={{ borderRadius: '20px' }}>
              <h2 className="font-bold mb-3 text-white" style={{ fontSize: '1.5rem' }}>Ready to start the documentation?</h2>
              <p className="text-white/80 mb-5">Call 24/7. We dispatch a crew and start the file in the same conversation.</p>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center text-[#222222] bg-white font-semibold no-underline" style={{ borderRadius: '8px', padding: '0 28px', height: '52px' }}>
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white" style={{ padding: '48px 0 40px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <address className="not-italic text-[#6a6a6a] text-[14px] mb-4">
            4060 W Maple Rd, Bloomfield Township, MI 48301 &bull;{' '}
            <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>
          </address>
          <p className="text-[#6a6a6a] text-[13px] m-0">
            &copy; {new Date().getFullYear()} PROVAIL Water Damage Restoration Bloomfield. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
