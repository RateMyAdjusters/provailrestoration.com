import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const BUSINESS_NAME = 'PROVAIL Water Damage Restoration Bloomfield'

export const metadata: Metadata = {
  title:
    'Ice Dam Removal in Michigan | Steam Removal & Interior Water Damage | PROVAIL',
  description:
    'Steam-based ice dam removal in Bloomfield Township and across Michigan. Safe for shingles, prevents refreeze, and addresses interior water damage from ice dams. Call PROVAIL at (248) 531-8404.',
  keywords: [
    'ice dam removal Michigan',
    'steam ice dam removal Bloomfield',
    'ice dam Bloomfield Township',
    'attic insulation ice dam Michigan',
    'ice dam interior water damage',
    'roof ice dam refreeze prevention',
    'PROVAIL ice dam removal',
  ],
  alternates: {
    canonical: 'https://provailrestoration.com/services/ice-dam-removal',
  },
  openGraph: {
    title:
      'Ice Dam Removal in Michigan | Steam Removal | PROVAIL Bloomfield',
    description:
      'Professional steam ice dam removal in Michigan. Shingle-safe, refreeze prevention, and full restoration of interior water damage from ice dams.',
    url: 'https://provailrestoration.com/services/ice-dam-removal',
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'What exactly is an ice dam?',
    a: 'An ice dam is a ridge of ice that forms along the lower edge of a roof, usually at the eaves or above an unheated overhang. It develops when heat escaping from the living space below warms the upper roof deck enough to melt snow, while the lower edge stays cold enough to refreeze that meltwater. As the ice grows, it traps additional water behind it, and that pooled water can work its way under the shingles and into the attic and walls.',
  },
  {
    q: 'Why is steam removal safer than chipping or chemicals?',
    a: 'Steam removal uses low-pressure, high-temperature steam to gently melt the ice from the surface inward. Chipping with hammers, picks, or hatchets damages shingles, flashing, and gutters and often voids roofing warranties. Calcium chloride pucks and other chemicals can stain siding, kill landscaping below the eaves, and corrode fasteners. Steam, used by a trained operator, removes the ice without abrading the roof system.',
  },
  {
    q: 'How long does ice dam removal usually take?',
    a: 'Most residential ice dams in the Bloomfield area are removed in two to five hours, depending on the length of the eave, the thickness of the dam, and how much rooftop snow has to be cleared first. Larger or multi-elevation dams on bigger homes can take longer. Our lead technician will give you an honest time estimate after the on-site walkaround.',
  },
  {
    q: 'What role does attic insulation play in ice dams?',
    a: 'Attic insulation, combined with proper ventilation and air sealing, is what keeps the underside of the roof deck cold enough to prevent the melt-and-refreeze cycle in the first place. Insufficient or compressed insulation, missing baffles at the soffit, recessed lights that leak warm air, and gaps around plumbing stacks all let heat escape into the attic. We can identify these contributors during the visit so the long-term solution is part of the conversation, not just the immediate ice removal.',
  },
  {
    q: 'How do you keep the ice from forming again right after you leave?',
    a: 'For short-term refreeze prevention we clear the rooftop snow above the affected eave, channel meltwater off the roof so it does not pool, and on some jobs we install heat cable in problem areas. The lasting fix is air sealing and insulating the attic plane and improving soffit-to-ridge ventilation so the roof deck stays uniformly cold. Ice dam removal addresses today; insulation work addresses next winter.',
  },
  {
    q: 'I see water stains on my ceiling. Is that from an ice dam?',
    a: 'Possibly. When water backs up behind an ice dam, it follows the path of least resistance under the shingles, into the underlayment, then onto the top plate of an exterior wall or directly onto attic insulation. From there it can show up as a stain on a ceiling, a bubble in paint, or a wet spot at the top of a wall. We map the wet area with moisture meters and thermal imaging so the source is confirmed before any drywall is opened.',
  },
  {
    q: 'Will my homeowners insurance cover ice dam damage?',
    a: 'Many Michigan homeowners policies provide coverage for sudden interior water damage caused by an ice dam, but coverage details vary widely by carrier and policy. We document the conditions, the affected areas, and the work performed so you have what you need for the conversation with your insurer. Coverage decisions remain between you and your carrier.',
  },
  {
    q: 'Can ice dams really damage the inside of my house, or is it mostly cosmetic?',
    a: 'Ice dams routinely cause interior damage well beyond a stained ceiling. We have seen wet attic insulation lose most of its R-value, drywall and trim that needs replacement, hardwood flooring that cups from above, and microbial growth in wall cavities that were never dried out. Addressing the visible water early is the easiest way to keep a small ice dam from becoming a large restoration project.',
  },
  {
    q: 'Do you only handle ice dams in Bloomfield, or all of Michigan?',
    a: 'Bloomfield Township and the surrounding Oakland County communities are our home base, and most of our ice dam work happens there. We do also respond throughout Southeast Michigan when conditions allow, especially during the lake-effect events that make ice dams worse. Call us with your address and we will tell you honestly whether we can reach you in time.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ice Dam Removal',
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
    'Steam-based ice dam removal and interior water damage restoration for Michigan homes, including refreeze prevention and attic insulation guidance.',
  url: 'https://provailrestoration.com/services/ice-dam-removal',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://provailrestoration.com/services/ice-dam-removal#business',
  name: BUSINESS_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/ice-dam-removal',
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

export default function IceDamRemovalPage() {
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
            <a href="/storm-damage-restoration" className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c]">Storm Damage</a>
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
                  boxShadow: shadow,
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Same-Day Steam Removal
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Michigan Winters</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Ice Dam Removal in Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Shingle-safe steam removal, refreeze prevention, and full restoration
              of interior water damage from ice dams. Serving Bloomfield Township
              and Southeast Michigan.
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

        {/* Body */}
        <section className="bg-white" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-5" style={{ fontSize: '2rem', letterSpacing: '-0.44px' }}>
              Why ice dams are a Michigan problem
            </h2>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Michigan winters give us the exact recipe ice dams need:
              long stretches of below-freezing weather, deep snow on the roof,
              and homes built across many decades with very different
              insulation and ventilation standards. When warm air leaks from
              the living space into the attic, the upper portion of the roof
              deck heats up just enough to melt the snow sitting on it. That
              meltwater runs down the slope toward the eaves, which stay
              colder because they hang past the heated envelope of the house,
              and there it refreezes. Day after day the ice ridge grows. Once
              it is tall enough, water backs up behind it, finds its way under
              shingles that were never designed to hold standing water, and
              starts moving into the structure.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Steam removal: how we actually take the ice off
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We use professional steam equipment built specifically for ice
              dam work. The system heats water on-site and delivers it through
              an insulated line to a steam wand at the roof edge, where a
              trained technician walks the wand along the dam in slow,
              overlapping passes. The steam is hot enough to cut the ice
              quickly but the pressure at the nozzle is low, so the shingles,
              ridge caps, and flashing are not damaged. There is no chipping,
              no chemicals, and no high-pressure abrasion. When we are
              finished, the dam has been cut down to the shingle line, the
              gutter is opened, and meltwater can drain again instead of
              backing up.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We do not recommend the alternatives. Pressure washers force
              water under shingles. Ice picks and hatchets break the very
              thing you are trying to protect. Salt and ice melt pucks corrode
              metal and discolor everything below the eave. Steam, used
              correctly, is the only method we trust on a customer&apos;s roof.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              The role of attic insulation and ventilation
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Removing today&apos;s ice dam is the urgent job, but the question
              that matters next winter is why the dam formed in the first
              place. The answer is almost always heat loss from the conditioned
              part of the house up into the attic. Recessed light cans that
              are not airtight, plumbing chases, attic hatches without
              weather stripping, bath fan ducts that vent into the attic
              instead of through the roof, and compressed or missing
              insulation over the top plates all add up. When that warm air
              reaches the underside of the roof deck, the deck is no longer
              uniformly cold, and the conditions for ice dam formation are
              back.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Proper soffit-to-ridge ventilation flushes any heat that does
              get into the attic before it can warm the deck. Healthy
              insulation depth, with baffles that keep the soffit airflow open,
              keeps the deck cold to begin with. We talk through the
              contributing factors we see during the on-site visit so the
              path to a permanent fix is clear, even if the heavier insulation
              and air-sealing work is scheduled for after the ice is gone.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Refreeze prevention while the cold snap is still on
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Removing the ice does no good if a fresh dam forms two days
              later in the same spot. Our refreeze prevention work focuses on
              keeping meltwater moving off the roof and reducing the heat that
              is causing the melt cycle. We clear the rooftop snow above the
              affected eave so future melt has somewhere to go. We open
              channels at the gutter line so meltwater drains rather than
              pools. Where appropriate we install or service heat cable in
              the gutters and along the lower courses of shingles, and we
              prioritize attic air-sealing recommendations so that the next
              storm is not a repeat performance.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Interior water damage from ice dams
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Once water has worked its way past the shingles, it can show up
              almost anywhere. Common patterns we see in Bloomfield homes
              include stained ceilings near the exterior walls, peeling paint
              at the top of a wall, wet attic insulation directly above an
              affected room, water dripping from recessed light cans, and
              soaked drywall behind window headers. We treat the interior
              side of the loss as a full water damage restoration project.
              Affected areas are mapped with moisture meters, wet insulation
              is removed, drywall is opened only where the readings call for
              it, and structural drying equipment is set on a documented plan
              and monitored daily.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              When materials are too far gone to dry in place, we coordinate
              controlled removal so the rebuild starts on a clean, dry
              substrate. If you are also dealing with broader{' '}
              <a href="/services/water-damage-restoration" className="text-[#ff385c] font-semibold">water damage restoration</a>{' '}
              from the same event, the same crew handles both so you are not
              juggling multiple contractors during an already stressful week.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              What to expect when you call
            </h3>
            <ol className="text-[#444] text-[17px] leading-[1.75] mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>Live phone triage.</strong> A real person takes your
                address, the location of the dam, and any signs of interior
                water entry.
              </li>
              <li>
                <strong>On-site walkaround.</strong> Our lead technician
                inspects the eaves, attic if accessible, and any interior
                staining, then explains the plan in plain language.
              </li>
              <li>
                <strong>Steam removal.</strong> The dam is cut down with the
                steam wand, the gutter line is opened, and meltwater is
                redirected.
              </li>
              <li>
                <strong>Interior assessment.</strong> Moisture readings,
                thermal imaging, and a written scope for any drying or
                restoration work that is needed inside.
              </li>
              <li>
                <strong>Refreeze and insulation guidance.</strong> Practical
                steps to keep this from happening again, written down for you
                to keep.
              </li>
            </ol>

            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Related services: see our{' '}
              <a href="/storm-damage-restoration" className="text-[#ff385c] font-semibold">storm damage restoration</a>{' '}
              page for winter wind events, our{' '}
              <a href="/services/frozen-pipe-repair" className="text-[#ff385c] font-semibold">frozen pipe response</a>,
              and the{' '}
              <a href="/bloomfield" className="text-[#ff385c] font-semibold">Bloomfield service area page</a>{' '}
              for everything we cover locally.
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
              Ice Dam FAQs
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
              Ice on your eaves? Stains on your ceiling?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call PROVAIL Water Damage Restoration Bloomfield. We will get a
              steam crew on the way and walk you through the next steps before
              they arrive.
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
