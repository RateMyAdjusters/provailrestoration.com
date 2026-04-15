import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'

export const metadata: Metadata = {
  title:
    'Commercial Water Damage Restoration in Michigan | PROVAIL Bloomfield | (248) 531-8404',
  description:
    'PROVAIL provides 24/7 commercial water damage restoration for offices, retail, multifamily, and industrial properties across Bloomfield Township, Oakland County, and Southeast Michigan. Large-loss response, IICRC-certified crews, direct insurance billing.',
  keywords: [
    'commercial water damage restoration Michigan',
    'commercial restoration Bloomfield',
    'office water damage Oakland County',
    'retail flood cleanup Michigan',
    'multifamily water damage Bloomfield Township',
    'industrial water damage restoration Michigan',
    'large loss restoration Michigan',
    'commercial mold remediation Bloomfield',
    'apartment water damage Michigan',
    '24/7 commercial restoration Oakland County',
  ],
  openGraph: {
    title: 'Commercial Water Damage Restoration in Michigan | PROVAIL Bloomfield',
    description:
      '24/7 commercial water damage and large-loss response for offices, retail, multifamily, and industrial buildings across Michigan. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/commercial-restoration',
    siteName: 'PROVAIL Water Damage Restoration Bloomfield',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/commercial-restoration',
  },
  robots: { index: true, follow: true },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Commercial Water Damage Restoration',
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
    'IICRC-certified 24/7 commercial water damage restoration, large-loss response, dehumidification, and reconstruction for offices, retail, multifamily, and industrial properties across Michigan.',
  url: 'https://provailrestoration.com/commercial-restoration',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can you respond to a commercial water loss in Michigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our goal is on-site within 60 minutes of your call, 24/7, anywhere in Oakland County. For large-loss events we can scale crews and equipment from partner branches across Southeast Michigan within hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you keep tenants and employees in the building during work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whenever it is safe, yes. We build containments, schedule loud work after hours, and coordinate with your facilities manager so business operations continue during mitigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you handle multifamily apartment buildings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We routinely respond to multi-unit losses across Oakland County, coordinating tenant notifications, unit-by-unit moisture mapping, and reconstruction with property managers and HOAs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you direct-bill commercial insurance carriers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We document the loss for your insurance company, work directly with your assigned adjuster, and direct-bill most major Michigan commercial carriers using Xactimate scoping.',
      },
    },
  ],
}

export default function CommercialRestorationPage() {
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
          <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c]">
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
            <p className="text-[#ff385c] font-semibold text-sm uppercase tracking-wide mb-3">Commercial Restoration</p>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.44px' }}>
              Commercial Water Damage Restoration Across Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg leading-relaxed mb-8">
              When a sprinkler line bursts in a Birmingham office tower, an aging supply line floods a Troy retail center overnight, or an Oakland County apartment building loses its roof in a summer storm, PROVAIL deploys IICRC-certified large-loss crews from our Bloomfield Township base to stabilize the building, dry the structure, and document every dollar of damage for your carrier — usually within 60 minutes of your call.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center text-white font-semibold no-underline" style={{ backgroundColor: '#222222', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
              Emergency Commercial Line: {PHONE}
            </a>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '40px 0 72px' }}>
          <div className="max-w-[820px] mx-auto px-6 text-[#6a6a6a] text-base leading-relaxed space-y-5">
            <h2 className="text-[#222222] font-bold mt-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', letterSpacing: '-0.44px' }}>
              Why commercial losses are different
            </h2>
            <p>
              A water loss in a commercial building is not a bigger version of a residential loss — it is a fundamentally different problem. Square footages run into the tens of thousands. Mechanical systems, server rooms, and product inventory create life-safety and continuity risks that simply do not exist in a single-family home. Tenants, employees, customers, and patients are all watching what you do next, and every hour the building sits wet is an hour of lost rent, lost sales, and accumulating secondary damage. Insurance carriers know it, which is why commercial policies are written with strict mitigation language: failure to act promptly can shift loss back onto the policyholder. PROVAIL exists to close that window fast.
            </p>
            <p>
              Our commercial division operates 24/7/365 from 4060 W Maple Rd in Bloomfield Township, with truck-mounted desiccants and LGR dehumidifiers staged for immediate dispatch across Oakland County, northern Wayne County, western Macomb County, Livingston County, and beyond. We hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), Commercial Drying Specialist (CDS), and Applied Microbial Remediation (AMRT), and we follow the IICRC S500 and S520 industry standards on every job — the same standards your carrier&apos;s adjuster uses to review our scope.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Office buildings &amp; professional space
            </h2>
            <p>
              Class A office towers in Birmingham, Bloomfield Hills, Troy, Southfield, and Farmington Hills present a specific set of restoration challenges: raised access flooring with networking and power below it, full-height curtain walls that trap moisture in interstitial spaces, demising walls between leased suites that have to be respected during containment, and after-hours building access through property management. PROVAIL handles every one of those constraints as a matter of course. We coordinate with your property manager or building engineer for after-hours access, lay protective floor covering in lobbies and elevator vestibules, and build poly-and-zipper containments that let your tenants keep working in unaffected suites while we dry the affected ones. Our sub-floor and wall-cavity drying systems pull moisture out of plenum spaces without tearing the building apart.
            </p>
            <p>
              For dental offices, medical clinics, urgent cares, and small surgical suites — of which there are many in the Bloomfield-Birmingham-Troy corridor — we add HEPA air scrubbing, antimicrobial treatment to OSHA bloodborne-pathogen standards, and dedicated coordination with infection-control protocols. Law firms, accounting firms, and family offices in older Bloomfield Hills properties get the same care for irreplaceable paper files: emergency document drying via vacuum freeze sublimation through our partner network when files cannot be re-printed.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Retail, restaurant &amp; hospitality
            </h2>
            <p>
              Every hour a Michigan retail store is closed, the meter is running on rent, payroll, and lost sales. Restaurants are even more time-sensitive — a flooded kitchen can put perishable inventory and your liquor license at risk inside a single shift. PROVAIL prioritizes commercial retail and food-service losses for after-hours and overnight work whenever possible, so your doors can open the next morning. We pump out walk-in coolers, dry hardwood and tile sales floors, save fixtures and millwork where we can, and coordinate the rebuild around your operating schedule. For franchise locations and national tenants, we work directly with your corporate facilities team and your assigned regional adjuster, so the file your home office sees is the same file we are working from.
            </p>
            <p>
              Hotels and short-term rental properties in the Birmingham, Royal Oak, and Auburn Hills corridors get the same treatment: we isolate affected rooms, keep adjacent units rentable when feasible, and provide daily moisture logs your revenue manager can use to release rooms back to inventory the moment they are dry.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Multifamily, apartments &amp; condominium associations
            </h2>
            <p>
              Multifamily losses are coordination problems before they are restoration problems. A stack-leak from an upstairs supply line can hit four units. A roof failure during a summer derecho can hit forty. PROVAIL has run this play across Oakland County more times than we can count: we deploy a single project manager as the point of contact for the property manager or HOA board, walk every affected unit with calibrated moisture meters within hours, generate a unit-by-unit scope, and stage equipment so the entire building dries on the same timeline. We coordinate tenant notifications, key access, pet-and-child safety messaging, and reasonable accommodation for residents who need to relocate temporarily.
            </p>
            <p>
              Condominium associations get a clean line between association responsibility (common elements, drywall to the studs, structural assemblies) and unit-owner responsibility (finishes, flooring, contents). We document each side of that line for the master policy carrier and for individual HO-6 carriers, so the right carrier pays for the right scope and the board does not get pulled into a coverage dispute.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Industrial, manufacturing &amp; warehouse
            </h2>
            <p>
              Manufacturing and warehouse losses in the Auburn Hills, Pontiac, and Wixom industrial corridors come with their own complications: high-bay ceilings that defeat conventional air movers, concrete floors that hold moisture longer than wood, racked product inventory that has to be moved or protected in place, and production equipment that cannot tolerate humidity. PROVAIL deploys desiccant dehumidification for high-bay environments, plastic-sheet containments around sensitive machinery, and dedicated equipment monitoring so production lines come back online safely. We work with your safety officer on lockout/tagout, hot-work permits, and confined-space entries when the loss involves utility tunnels, mechanical mezzanines, or roof drain stacks.
            </p>
            <p>
              For food-grade and pharmaceutical facilities we add antimicrobial protocols, third-party post-remediation verification testing, and documentation that satisfies FDA, USDA, and Michigan Department of Agriculture inspection requirements. We have handled losses in cold-storage, light assembly, automotive supplier, food distribution, and chemical-handling facilities — every one with a clean restart.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Large-loss response: hundreds of thousands of square feet
            </h2>
            <p>
              When a roof comes off, a fire-suppression system trips on an entire floor, or a Great Lakes storm puts six inches of rain through a school, a church, or a senior living community, conventional crew sizes are not going to cut it. PROVAIL maintains a documented large-loss protocol: an incident commander is named within the first hour, the scene is gridded and photo-mapped, equipment is staged from multiple branches and partner shops, and we run 24-hour shift rotations until the building is stable. We have deployed crews of twenty-plus technicians with 100-plus dehumidifiers and 300-plus air movers on a single Michigan event. Daily project briefings are sent to the carrier, the property owner, and the broker, with photos, moisture maps, and equipment counts updated every shift.
            </p>
            <p>
              Schools, places of worship, senior living, hospitals, and municipal buildings get an additional layer: we coordinate with facilities directors, life-safety officers, and (where applicable) state inspectors before, during, and after the dry-out. Every one of those buildings has people in it who deserve a careful, documented restoration.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Insurance, documentation &amp; direct billing
            </h2>
            <p>
              Commercial property policies are unforgiving documents. Coinsurance, deductibles, sub-limits for water damage, named-storm exclusions, business interruption coverage, ordinance-and-law endorsements — every one of those line items can shift tens of thousands of dollars on a single loss. PROVAIL is not a public adjuster and we do not negotiate your settlement, but we do document the loss meticulously for your insurance company, work directly with your assigned adjuster and (if you have one) your broker, and direct-bill most major Michigan commercial carriers. We use Xactimate with regionally calibrated price lists, so the scope your adjuster receives is in the format and pricing they expect.
            </p>
            <p>
              You will get daily photo reports, daily moisture logs, equipment inventories, technician sign-in sheets, and a final close-out file you can hand to your broker. If your loss involves business interruption coverage, our documentation makes the BI calculation straightforward for your accountant or forensic team.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Reconstruction under one roof
            </h2>
            <p>
              Once the building is dry, the same project manager who ran your mitigation walks the rebuild scope with you. PROVAIL holds Michigan residential builder licensing and partners with licensed commercial general contractors for larger rebuilds, so drywall, ceiling grid, flooring, paint, casework, and tenant improvements all roll into a single contract with a single warranty. No subcontractor finger-pointing, no schedule gaps between mitigation and rebuild, no fresh round of estimates from contractors who never saw the building wet.
            </p>

            <h2 className="text-[#222222] font-bold mt-8" style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', letterSpacing: '-0.44px' }}>
              Service area for commercial response
            </h2>
            <p>
              Bloomfield Township, Bloomfield Hills, Birmingham, Beverly Hills, Franklin, Bingham Farms, West Bloomfield, Orchard Lake, Keego Harbor, Sylvan Lake, Pontiac, Auburn Hills, Lake Orion, Oxford, Rochester, Rochester Hills, Troy, Clawson, Royal Oak, Berkley, Huntington Woods, Oak Park, Ferndale, Pleasant Ridge, Madison Heights, Hazel Park, Southfield, Lathrup Village, Farmington, Farmington Hills, Novi, Northville, Walled Lake, Wixom, Commerce Township, Waterford, White Lake, Independence Township, Clarkston, Holly, Highland, Milford, and the surrounding Southeast Michigan commercial corridors.
            </p>

            <div className="bg-[#222222] text-white p-8 mt-10" style={{ borderRadius: '20px' }}>
              <h2 className="font-bold mb-3 text-white" style={{ fontSize: '1.5rem' }}>Commercial loss right now? Call us.</h2>
              <p className="text-white/80 mb-5">Live dispatch 24/7. On-site within 60 minutes across Oakland County.</p>
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
