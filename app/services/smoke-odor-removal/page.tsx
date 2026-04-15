import type { Metadata } from 'next'

const BIZ_NAME = 'Provail Restoration of Bloomfield'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const PAGE_URL = 'https://provailrestoration.com/services/smoke-odor-removal'

export const metadata: Metadata = {
  title:
    'Odor Removal Without a Fire — Tobacco, Cooking, Skunk, Wildfire, Pet & Cannabis | (248) 531-8404',
  description:
    'Non-fire odor removal in Bloomfield Township, MI. Cigarette and cigar residue, cooking grease smell, skunk intrusion, wildfire smoke pulled through HVAC, deep pet decontamination, and cannabis odor. Hydroxyl and ozone equipment, source-based protocols. Provail Restoration of Bloomfield.',
  keywords: [
    'cigarette odor removal Bloomfield',
    'skunk smell removal Michigan',
    'wildfire smoke intrusion cleanup',
    'pet odor decontamination Oakland County',
    'cannabis odor removal home',
    'cooking grease odor HVAC',
    'hydroxyl generator rental Bloomfield',
    'ozone treatment Bloomfield Township',
  ],
  openGraph: {
    title: 'Odor Removal Without a Fire | (248) 531-8404',
    description:
      'Tobacco, cooking, skunk, wildfire intrusion, HVAC-carried, pet, and cannabis odor — source-based removal, not masking.',
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
    q: 'How is odor removal without a fire different from fire restoration?',
    a: 'Non-fire odor jobs are defined by what is missing as much as what is present. There is no soot residue to remove, no combustion particulate loaded onto every surface, and no structural char to seal. The work is almost entirely about finding where the odor compounds have deposited or where they are being continuously generated, eliminating that source, and then cycling the air and absorbent materials until the remaining traces are neutralized.',
  },
  {
    q: 'How long does cigarette or cigar odor take to remove from a home?',
    a: 'A lightly affected home from occasional indoor smoking can usually be cleared in two to three days of combined surface cleaning and hydroxyl treatment. A heavily saturated home with many years of indoor smoking typically runs five to ten days and often involves replacing some soft goods, deep-cleaning every textile, repainting ceilings, and sealing surfaces that cannot be fully washed. The timeline scales with how deeply the residue has penetrated.',
  },
  {
    q: 'What actually causes skunk smell to linger indoors?',
    a: 'Skunk spray is a mixture of sulfur-containing thiols and thioacetates. The thiols are aggressive and pungent but relatively volatile. The thioacetates are the problem: they are nearly odorless on their own, but they hydrolyze slowly into new thiols whenever they contact moisture, which is why a skunk smell can come roaring back on a humid day weeks later. Effective removal has to neutralize both groups, not just mask the thiols with fragrance.',
  },
  {
    q: 'Can you remove wildfire smoke smell from a home that did not burn?',
    a: 'Yes, and this is one of the most common non-fire odor calls. When wildfire smoke enters a building through HVAC intakes, open windows, soffits, or envelope gaps, it deposits ultra-fine particulate and volatile organic compounds onto interior surfaces and inside the HVAC system. The cleanup is a lighter version of the post-fire protocol: HEPA filtration of the air, HVAC cleaning, wipe-down of exposed hard surfaces, laundering of textiles, and hydroxyl treatment to neutralize residual off-gassing.',
  },
  {
    q: 'Will ozone hurt my houseplants, fish, or pets during treatment?',
    a: 'Yes, which is why any ozone cycle is run only in an evacuated, sealed space. Plants, aquariums, pets, food, leather goods, and natural rubber items either leave the treatment area or are moved to a separately ventilated portion of the home before the generator turns on. The space is then aerated to safe ambient levels before anyone or anything returns. Hydroxyl treatment, by contrast, is safe to run in occupied spaces.',
  },
  {
    q: 'Why would I pay for professional pet odor work instead of enzyme sprays?',
    a: 'Retail enzyme sprays are genuinely useful for small, localized events on sealed surfaces, and we often recommend them for fresh accidents. They fall short when urine has soaked through carpet into pad, through pad into the tack strip and subfloor, or into wall framing. The compounds that cause the lingering smell are uric acid crystals bonded to the substrate, and they re-activate every time the material contacts humidity. Professional decontamination flood-applies the right chemistry to the entire affected profile and, where necessary, includes removal and sealing of the substrate itself.',
  },
  {
    q: 'Is cooking grease odor really a service category?',
    a: 'For high-use kitchens without adequate hood ventilation, yes. Aerosolized fats collect on ceilings, cabinet faces, trim, and HVAC returns over months and years. The film is not always visible, but it absorbs every subsequent odor in the house and off-gases rancid aldehydes as it ages. The protocol is degreaser cleaning of all hard surfaces in and around the kitchen, coil and filter service in the HVAC system, and hydroxyl treatment of the air.',
  },
  {
    q: 'Can cannabis odor be removed from a home before a sale or listing?',
    a: 'In most cases yes, and this is a common pre-listing request. The active odor compounds from cannabis smoke behave similarly to tobacco: sticky resin on hard surfaces, deep saturation in soft goods, and accumulation inside the HVAC system. The cleanup protocol mirrors the tobacco workflow — wash, launder, HVAC service, hydroxyl treatment, and sealing of porous substrates that cannot be washed.',
  },
  {
    q: 'How does the HVAC system carry odor through a house that otherwise looks clean?',
    a: 'A forced-air system pulls room air through return grilles, past the filter and blower, across the coil, and back into the home through supply registers. Any odor compound picked up anywhere in the house makes a complete circuit every few minutes. Fine particulate and sticky volatiles accumulate on filter media, inside the blower housing, on coil fins, and along duct interiors. Those surfaces then become ongoing emitters, releasing a faint background odor every time the system runs — often in rooms nowhere near the original source.',
  },
  {
    q: 'Do you guarantee the smell will not return?',
    a: 'We guarantee our work to the protocol we agreed on, and we commit to returning for re-treatment if our workmanship is the reason a problem persists. We cannot guarantee outcomes when the source is ongoing — an active indoor smoker, a pet still marking territory, or a skunk still living under the deck will continue to reintroduce the odor after any cleanup. The first conversation we have on every job is about whether the source has been fully eliminated, because a durable result depends on that answer being yes.',
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
    serviceType: 'Non-Fire Odor Removal',
    name: 'Odor Removal Without a Structure Fire',
    provider: providerNode,
    areaServed: [
      { '@type': 'City', name: 'Bloomfield Township' },
      { '@type': 'City', name: 'Bloomfield Hills' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'West Bloomfield' },
      { '@type': 'City', name: 'Troy' },
    ],
    description:
      'Non-fire odor removal: tobacco, cooking grease, skunk intrusion, wildfire smoke intrusion, HVAC-carried odors, deep pet decontamination, and cannabis odor. Hydroxyl and ozone equipment with source-based protocols.',
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
      { '@type': 'ListItem', position: 3, name: 'Odor Removal Without a Fire', item: PAGE_URL },
    ],
  },
]

const sources = [
  {
    title: 'Cigarette and Cigar Residue',
    body: 'Years of indoor smoking leave a sticky tar film on ceilings, trim, cabinet faces, and HVAC components. The protocol is a full hard-surface wash with the right degreaser, laundering or disposal of saturated soft goods, HVAC coil and duct service, air-phase treatment with hydroxyls, and sealing of porous substrates that cannot be washed back to the substrate.',
  },
  {
    title: 'Cooking Grease and Aerosolized Fats',
    body: 'High-use kitchens without adequate hood capture build up an invisible film of aerosolized cooking oils that coat ceilings and nearby trim. The film absorbs every subsequent household odor and starts to off-gas rancid notes as it ages. Degreaser cleaning of the affected hard surfaces plus HVAC filter and coil service is the core of the job.',
  },
  {
    title: 'Skunk Intrusion',
    body: 'A skunk spraying near a foundation vent, deck, or garage door will push enough of its thiol mixture into the building envelope to make the interior unusable for days. The challenge is the thioacetate fraction, which keeps regenerating new thiols whenever it contacts moisture. We run an oxidizing chemistry on the affected surfaces followed by hydroxyl treatment of the air, often with a repeat pass after the first humid day.',
  },
  {
    title: 'Wildfire Smoke Intrusion (No Structure Fire)',
    body: 'When wildfire smoke enters a building that did not itself burn, the deposition is light but pervasive. HEPA air scrubbing pulls the ultra-fine particulate out of the air, surface wipe-downs handle the visible film, and HVAC filter replacement plus blower and coil cleaning stops the system from reseeding the home. Hydroxyl treatment neutralizes residual volatile compounds.',
  },
  {
    title: 'HVAC-Carried Background Odors',
    body: 'A forced-air system recirculates the same air through the same components every few minutes. Any odor picked up anywhere in the home deposits fractionally on filter media, blower housing, coil fins, and duct interiors. Over time those components become ongoing emitters. Isolating the system, servicing the filter and coil, and cleaning the return and supply runs is the intervention that actually works.',
  },
  {
    title: 'Deep Pet Odor Decontamination',
    body: 'Long-standing urine events in carpet-over-pad or on unsealed substrates deposit uric acid crystals that reactivate every time the humidity rises. We apply a penetrating chemistry flood to the full depth of the affected profile, remove and replace pad where warranted, and seal or replace subfloor and tack strip on the heaviest losses. Hydroxyl treatment handles the airborne fraction after the substrate work is done.',
  },
  {
    title: 'Cannabis Smoke in Residential Interiors',
    body: 'Cannabis smoke behaves like tobacco residue in a home: a sticky film on hard surfaces, deep loading into soft goods, and accumulation inside the HVAC system. The protocol is the same as a tobacco job — degreaser wash, textile laundering or replacement, HVAC service, hydroxyl treatment, and sealing where washing is not enough.',
  },
  {
    title: 'Musty and Damp-Building Odors',
    body: 'Persistent basement or crawl space odors are usually a moisture problem pretending to be an odor problem. The durable fix is locating and correcting the water intrusion or high humidity source, followed by HEPA air scrubbing and hydroxyl treatment of the recovered space. Skipping the moisture correction guarantees the smell comes back.',
  },
]

const equipment = [
  {
    title: 'Hydroxyl Generators',
    body: 'A hydroxyl generator passes humid room air through a chamber lit by ultraviolet light, creating a stream of hydroxyl radicals that react with airborne odor molecules and exposed-surface residues. The concentrations produced are safe for occupied spaces, which means residents and pets can remain at home while the machines run around the clock for the several days most non-fire jobs require. Hydroxyls are our default air-phase tool for tobacco, pet, cooking, and cannabis jobs.',
  },
  {
    title: 'Ozone Generators',
    body: 'An ozone generator produces O3 at concentrations high enough to oxidize almost any organic compound in the treatment volume. That aggressive reactivity is the reason ozone works on stubborn residues like heavy tobacco loading or deep skunk penetration, and it is also the reason ozone cycles run only in sealed, evacuated spaces. The area is aerated to safe ambient levels before anyone returns, and sensitive items like houseplants, aquariums, rubber goods, and leather are relocated first.',
  },
  {
    title: 'HEPA Air Scrubbers',
    body: 'A HEPA air scrubber pulls room air through a pleated filter that captures ultra-fine particulate, including the sub-micron fraction left behind by wildfire smoke intrusion. Running one or more scrubbers in the affected volume for the length of the project removes a significant fraction of the physical smoke load before any air-phase chemistry has to deal with it.',
  },
  {
    title: 'Oxidizing Surface Chemistry',
    body: 'For skunk, heavy pet, and certain tobacco residues, a targeted surface chemistry is applied before air-phase treatment begins. The product is matched to the residue — an oxidizer for skunk thioacetates, an enzymatic for uric acid crystals, a degreaser for kitchen film. Getting the surface chemistry right is the reason an air-phase cycle at the end actually finishes the job.',
  },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
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
                  Odor Without a Fire
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Hydroxyl &middot; Ozone &middot; HEPA</span>
              </div>
            </div>
            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Odor Removal When There Was No Fire
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[680px] mx-auto mb-10 leading-relaxed">
              Tobacco residue, cooking grease film, skunk intrusion, wildfire
              smoke pulled through HVAC, deep pet contamination, and cannabis
              odor. Source-based removal with hydroxyl and ozone equipment.
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
              A Different Kind of Odor Project
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Most of the smoke and odor calls we take in Bloomfield are not
              from structure fires. They are from homes where something else
              happened: a decade of indoor cigarette use under a previous
              owner, a skunk that sprayed against a basement vent last week,
              a summer of cross-country wildfire smoke that rode the jet
              stream into Oakland County and lodged itself in everyone&apos;s
              HVAC return, a kitchen fan that has not been cleaned since the
              house was built, a cat that found a corner of the dining room
              carpet it could not let go of. These are all odor projects,
              and they share almost none of the post-fire cleanup playbook.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              The absence of a fire simplifies the scope in some ways and
              complicates it in others. There is no soot loading, no char
              layer, no structural damage, no insurance claim the size of a
              total loss. At the same time, the odor compounds are often
              more deeply embedded because they arrived slowly and
              continuously rather than all at once, and the source is
              sometimes still present and still emitting. Getting a durable
              result starts with a source conversation, not a treatment
              conversation.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              This page walks through the non-fire odor categories that{' '}
              {BIZ_NAME} handles most often, the source-level work each
              category requires, and the equipment we bring in to finish
              the air-phase portion of the job. If your situation does not
              match anything below, call us anyway — odor projects are
              rarely textbook, and a short phone conversation is usually
              enough to tell whether we can help.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Odor Categories We Handle
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Each source has its own residue chemistry and its own protocol.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sources.map((s) => (
                <div key={s.title} className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>{s.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Equipment We Use on Non-Fire Jobs
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">Hydroxyl, ozone, HEPA, and targeted surface chemistry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((e) => (
                <div key={e.title} className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>{e.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD WALKTHROUGH */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              How a Typical Non-Fire Odor Job Runs
            </h2>
            <div className="text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                The first visit is diagnostic. A lead walks the space,
                identifies every surface that is visibly or tangibly
                contaminated, checks the HVAC filter and return grilles for
                loading, and asks questions about how long the source has
                been present, whether it is still present, and what rooms
                carry the strongest odor. A short sniff test at the supply
                registers often tells us whether the HVAC system is a
                secondary reservoir or the primary one.
              </p>
              <p>
                Source elimination comes next, and it is the part most
                likely to involve the homeowner. If the source is ongoing —
                an active indoor smoker, an uncaptured kitchen, a pet that
                is still having accidents, a skunk that has not yet
                relocated — treatment cannot produce a durable result until
                that situation changes. We say this out loud on the first
                visit so no one is surprised.
              </p>
              <p>
                Surface work follows: degreaser washdown of affected hard
                surfaces, targeted chemistry for specialty residues like
                skunk thioacetates or pet uric acid, HEPA vacuuming and dry
                sponging of ceilings and trim where relevant, and
                laundering or disposal of the saturated soft goods that
                cannot be recovered. On tobacco and cannabis jobs the
                ceiling is often the single most loaded surface in the
                home, which is why the surface phase can take as long as
                the air phase.
              </p>
              <p>
                HVAC service is run in parallel with surface work. Filter
                change, cabinet cleaning, blower access and cleaning where
                practical, coil service, and mechanical cleaning of the
                supply and return ducts proportional to how loaded they
                are. Without this step the system starts reseeding the
                home as soon as it cycles on.
              </p>
              <p>
                Air-phase treatment finishes the job. On occupied homes
                that means hydroxyl generators running continuously for
                two to five days, with return visits to verify trends. On
                unoccupied homes a sealed ozone cycle is often faster, and
                we schedule it for a window when residents and pets can
                easily relocate. Either way, the final step is a walkthrough
                with the homeowner to confirm the space smells neutral in
                the rooms and periods it was previously worst in.
              </p>
              <p>
                Sealing only comes up on the most heavily loaded homes.
                When a ceiling has absorbed years of tar or cannabis
                resin, no amount of washing returns the substrate to
                neutral, and a shellac-based primer is the durable fix.
                That is a painting decision as much as an odor decision,
                and we coordinate it with the homeowner&apos;s preferences
                on finish.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Non-Fire Odor FAQ
              </h2>
              <p className="text-[#6a6a6a] text-lg">Questions we hear on tobacco, skunk, wildfire, pet, and cannabis jobs.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white p-6 group" style={{ borderRadius: '16px' }}>
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
                { label: 'Surface-Specific Soot', href: '/services/soot-cleanup' },
                { label: 'S500 Drying Process', href: '/water-damage-restoration' },
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
              Get an Odor Assessment
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
