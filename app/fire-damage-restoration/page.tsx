import type { Metadata } from 'next'
import { SiteHeader } from '../_components/site-chrome'

const BIZ_NAME = 'Provail Restoration of Bloomfield'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'

export const metadata: Metadata = {
  title:
    'Fire Damage Restoration Bloomfield MI | Soot, Smoke & Structural Repair | (248) 531-8404',
  description:
    'Provail Restoration of Bloomfield provides 24/7 fire damage restoration in Bloomfield Township and Oakland County, MI. Emergency board-up, soot removal, thermal fogging, ozone treatment, content cleaning, structural repair, and complete odor elimination. Call (248) 531-8404.',
  keywords: [
    'fire damage restoration Bloomfield',
    'fire damage repair Bloomfield Township MI',
    'smoke damage cleanup Bloomfield Hills',
    'soot removal Oakland County',
    'emergency board up Bloomfield',
    'thermal fogging Michigan',
    'ozone treatment fire damage',
    'puffback cleanup Bloomfield',
    'structural fire repair Bloomfield Township',
    'content cleaning after fire Michigan',
  ],
  openGraph: {
    title:
      'Fire Damage Restoration Bloomfield MI | 24/7 Emergency | (248) 531-8404',
    description:
      'IICRC S700 fire and smoke restoration in Bloomfield Township, MI. Board-up, soot and smoke removal, thermal fogging, ozone, content cleaning, and odor elimination.',
    url: 'https://provailrestoration.com/fire-damage-restoration',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://provailrestoration.com/fire-damage-restoration',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'How quickly should fire damage restoration begin after a fire?',
    a: 'Restoration should begin within 24 to 48 hours of the fire being extinguished. Acidic soot residues start etching glass, metal, and finished surfaces within hours, and trapped moisture from firefighting water accelerates corrosion and microbial growth. The faster a qualified restoration team stabilizes the structure, the more materials and contents can be saved.',
  },
  {
    q: 'What does emergency board-up include?',
    a: 'Emergency board-up secures broken windows, breached walls, missing doors, and compromised roof areas with plywood, tarps, and temporary fasteners. It prevents weather intrusion, animal entry, vandalism, and theft while the loss is being documented and a full restoration plan is built.',
  },
  {
    q: 'Can soot and smoke odor really be removed from a home?',
    a: 'Yes. A combination of HEPA vacuuming, dry chemical sponging, alkaline degreasing, sealing of porous substrates, and air-phase treatment with hydroxyl generators, ozone, or thermal fogging can remove the vast majority of soot residue and combustion odor from properly cleaned structures. Severely charred materials usually need to be removed and replaced.',
  },
  {
    q: 'What is the difference between hydroxyl generators and ozone for smoke odor?',
    a: 'Hydroxyl generators use UV light to create hydroxyl radicals that neutralize odor molecules and can run in occupied spaces. Ozone generators produce O3, a much stronger oxidizer that requires the area to be unoccupied during treatment and an aeration period afterward. Hydroxyls are gentler and slower; ozone is faster and more aggressive.',
  },
  {
    q: 'What is thermal fogging and why is it used after a fire?',
    a: 'Thermal fogging heats a deodorizing solvent into a dense fog that mimics the behavior of smoke. The fog penetrates the same wall cavities, crevices, fabrics, and porous materials that smoke originally reached, neutralizing odor molecules at the molecular level rather than just masking them.',
  },
  {
    q: 'Will my belongings be cleaned on site or taken away?',
    a: 'It depends on the contents and the level of damage. Hard goods, durable furniture, and large items are often cleaned on site. Soft goods, electronics, documents, and high-value items are typically pack-out items that are inventoried, transported to a controlled cleaning facility, and returned after the structure is restored.',
  },
  {
    q: 'Does fire damage restoration also handle the water from firefighting?',
    a: 'Yes. Water extraction, structural drying, and antimicrobial treatment are part of any complete fire damage project. Water that is not removed promptly leads to swelling, delamination, rust, and secondary microbial growth that can be more expensive than the fire damage itself.',
  },
  {
    q: 'How long does fire damage restoration take?',
    a: 'A small kitchen or puffback event may be completed in a few days. A whole-room fire with heavy smoke spread typically takes one to three weeks for cleaning and deodorization, with structural reconstruction adding additional time depending on the scope. Every loss is scoped individually before a timeline is committed to.',
  },
  {
    q: 'Do you document the damage for the insurance file?',
    a: 'Yes. We provide photographs, moisture and soot mapping, room-by-room inventories, and itemized scopes that document the condition of the property and contents. Final decisions about coverage, payment, and claim handling are between the policyholder and the insurer.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fire Damage Restoration',
    name: 'Fire Damage Restoration',
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
      { '@type': 'City', name: 'Franklin' },
      { '@type': 'City', name: 'Beverly Hills' },
      { '@type': 'City', name: 'Southfield' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fire & Smoke Restoration Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Board-Up & Tarping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soot & Smoke Residue Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermal Fogging Deodorization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ozone Treatment' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydroxyl Generator Deodorization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Pack-Out & Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repair & Reconstruction' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://provailrestoration.com/fire-damage-restoration',
    name: BIZ_NAME,
    telephone: '+12485318404',
    url: 'https://provailrestoration.com/fire-damage-restoration',
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}
const stages = [
  {
    n: '01',
    title: 'Emergency Response & Safety Assessment',
    body:
      'Our first priority on any fire loss is making the structure safe to enter. Technicians evaluate compromised framing, power and gas hazards, slip surfaces, and air quality before any cleanup begins. We coordinate with the property owner to walk the loss, photograph conditions, and identify which areas are stable enough for immediate work and which require additional shoring or utility lockout.',
  },
  {
    n: '02',
    title: 'Emergency Board-Up & Roof Tarping',
    body:
      'Fires almost always leave a building partially open to the weather. Firefighting operations break windows for ventilation, doors are forced for access, and roofs are cut to vent heat and smoke. We board broken openings with plywood, install heavy-duty tarps over compromised roof sections, and secure any breach that could allow rain, snow, wind, animals, or trespassers inside while the restoration work is being scoped.',
  },
  {
    n: '03',
    title: 'Water Removal & Structural Drying',
    body:
      'Suppression water is one of the most overlooked sources of secondary loss after a fire. Water that is allowed to sit causes wood swelling, plaster failure, drywall delamination, rust on metal components, and rapid microbial growth. We extract standing water, set commercial-grade air movers and dehumidifiers, monitor moisture readings daily, and dry the building back to equilibrium before any porous materials are sealed or refinished.',
  },
  {
    n: '04',
    title: 'Damage Documentation & Scope Building',
    body:
      'Before contents are touched, we build a detailed scope of the loss. Each room is photographed, smoke and soot patterns are mapped, salvageable items are separated from non-salvageable items, and a written inventory is prepared. This documentation is used to coordinate with the property owner and is provided to the insurance file. We document the damage; coverage and claim handling decisions are between the policyholder and the carrier.',
  },
  {
    n: '05',
    title: 'Content Pack-Out & Off-Site Cleaning',
    body:
      'Soft goods, electronics, art, documents, dishes, books, and high-value items are inventoried and packed for transport to a controlled cleaning facility. Off-site cleaning gives us a clean, dry environment to ultrasonic-clean hard goods, hand-clean delicate items, launder textiles, and digitize documents. Restored items are stored in clean containers until the structure is ready to receive them again.',
  },
  {
    n: '06',
    title: 'Structural Soot Removal',
    body:
      'Soot is removed from structural surfaces in stages. Loose particulate is captured with HEPA vacuums and dry chemical sponges so it is not driven deeper into porous substrates. Wet cleaning follows with surfactant and alkaline degreasers chosen for the specific residue type. Wood trim, masonry, plaster, brick, exposed framing, and finished surfaces each receive a method matched to their material and condition.',
  },
  {
    n: '07',
    title: 'HVAC System Decontamination',
    body:
      'During a fire, the HVAC system pulls smoke and soot into supply and return ducting, the blower compartment, the coil, and the filter cabinet. If it is not cleaned, the system will redistribute fire residue every time it cycles on. We isolate the system, replace filters, vacuum and brush the duct interior, clean the air handler and coil, and apply a sealant where appropriate so the system stops being an odor source.',
  },
  {
    n: '08',
    title: 'Thermal Fogging Deodorization',
    body:
      'Smoke molecules penetrate building materials by following the same air currents that carried them during the fire. Thermal fogging recreates that behavior. A petroleum-based deodorizer is heated into a dense, dry fog that travels into wall cavities, attic spaces, upholstery, draperies, carpet pad, and crevices the original smoke reached. The fog chemically pairs with combustion molecules to neutralize them at the source rather than masking them.',
  },
  {
    n: '09',
    title: 'Ozone Treatment',
    body:
      'For unoccupied structures with persistent smoke odor, ozone treatment can be used as a finishing step. Ozone generators produce O3, an unstable form of oxygen that aggressively oxidizes odor compounds in the air and on exposed surfaces. The space is sealed, generators run for a defined cycle, and the area is then thoroughly aerated before reoccupation. Ozone is powerful but must be used by trained technicians under controlled conditions.',
  },
  {
    n: '10',
    title: 'Hydroxyl Generator Treatment',
    body:
      'When occupied structures or sensitive materials cannot tolerate ozone, hydroxyl generators are used instead. Hydroxyl radicals are produced by UV-C light reacting with humidity in the air and they neutralize odor molecules without the aggressive oxidation profile of ozone. Hydroxyls are slower than ozone but allow restoration to continue while occupants and pets remain in unaffected areas of the building.',
  },
  {
    n: '11',
    title: 'Sealing Porous Substrates',
    body:
      'Once cleaning and deodorization are complete, exposed framing, subfloor, and other porous structural surfaces are sealed with a shellac- or water-based primer rated for fire restoration. Sealing locks any residual odor molecules into the substrate so they cannot off-gas after reconstruction. Sealing is not a substitute for cleaning; it is the final step that follows proper soot removal and deodorization.',
  },
  {
    n: '12',
    title: 'Reconstruction & Final Walk-Through',
    body:
      'With the structure cleaned, dried, deodorized, and sealed, reconstruction begins. Drywall, insulation, flooring, trim, paint, cabinetry, and finishes are restored to pre-loss condition. We coordinate trades, manage the schedule, and walk the finished property with the homeowner before the project is closed. Cleaned contents are returned and placed only after the building is verified ready.',
  },
]

const causes = [
  { title: 'Kitchen Grease Fires', body: 'Cooking fires are the leading cause of residential structure fires in Michigan. Grease fires generate dense, oily smoke that travels far beyond the kitchen and leaves protein residue on cabinets, ceilings, and finishes throughout the home.' },
  { title: 'Furnace & Boiler Puffbacks', body: 'A puffback occurs when a malfunctioning oil burner ignites accumulated fuel in the combustion chamber and forces oily soot through the ductwork. Puffback residue is particularly stubborn and reaches every room served by the system.' },
  { title: 'Electrical & Wiring Fires', body: 'Overloaded circuits, failing receptacles, and aged wiring can ignite hidden fires inside walls and attics. These fires often produce heavy plastic combustion residue that requires aggressive deodorization.' },
  { title: 'Fireplace & Chimney Fires', body: 'Creosote ignition inside a flue can extend into adjacent framing and force smoke back into the living space. We address both the burn area and any smoke spread that traveled through the home.' },
  { title: 'Candle, Smoking & Appliance Fires', body: 'Unattended candles, lithium-ion batteries, dryers, and small appliances are common ignition sources for room and contents fires that may be small in footprint but heavy in smoke spread.' },
  { title: 'Wildland & Exterior Fires', body: 'Brush fires, garage fires, and exterior fires can push smoke into a home through eaves, attic vents, and HVAC intakes even when the structure itself was never on fire.' },
]

const residueTypes = [
  { name: 'Dry Smoke', body: 'Produced by fast, high-temperature, oxygen-rich fires burning paper and wood. Powdery, non-smeary, and easier to vacuum and dry-sponge.' },
  { name: 'Wet Smoke', body: 'Produced by slow, low-temperature, oxygen-starved fires burning plastic and rubber. Sticky, smeary, pungent, and difficult to remove. Requires solvent cleaning.' },
  { name: 'Protein Residue', body: 'Produced by burned food and grease. Nearly invisible but extremely odorous. Discolors paint and finishes and demands aggressive degreasing.' },
  { name: 'Fuel-Oil Soot', body: 'Produced by furnace puffbacks. Fine, oily, and adhesive. Travels through ductwork and coats every surface in the airstream.' },
  { name: 'Fingerprint Residue', body: 'Light surface deposit left when smoke barely contacts a surface. Small footprint but still requires controlled cleaning to avoid driving residue into the substrate.' },
]

export default function FireDamagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: '32px',
                  boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  24/7 Fire Damage Response
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>IICRC S700</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>

            <h1 className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}>
              Fire Damage Restoration in Bloomfield, Michigan
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Emergency board-up, soot and smoke removal, thermal fogging, ozone, content cleaning, and full structural repair. One team from the first call to the final walk-through.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black transition-colors duration-150" style={{ backgroundColor: '#222222', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
                <PhoneIcon className="text-white" />
                Call Now: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* INTRO / OVERVIEW */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              What Fire Damage Restoration Actually Involves
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              A house fire is rarely just a fire. By the time the engines pull away, the property has been hit with three overlapping disasters at once: heat damage from the fire itself, water and chemical damage from suppression, and a building-wide spread of smoke and soot that travels far beyond the room of origin. Effective fire damage restoration has to address all three on parallel tracks, and it has to do it quickly. Acidic combustion residues begin etching glass, brass, aluminum, marble, grout, and finished wood within hours. Suppression water saturates carpet pad, drywall, and insulation. And the smell of smoke moves through every wall cavity, duct run, and attic space the building has.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              At {BIZ_NAME}, we follow the IICRC S700 standard of care for fire and smoke damage restoration. That means a defined sequence: stabilize, document, dry, clean, deodorize, seal, and rebuild. Skipping or reordering steps is the most common reason fire restoration projects fail and odor returns weeks or months later. Our crews are trained to work the sequence in the right order, in the right environmental conditions, and with the right products for the residue type they are facing.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              We serve homeowners and commercial property owners throughout Bloomfield Township, Bloomfield Hills, Birmingham, West Bloomfield, Troy, Franklin, Beverly Hills, and the surrounding Oakland County communities. Calls are answered 24 hours a day, every day of the year, and a response crew is dispatched immediately for any active loss. If your property has just experienced a fire, call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a> before doing anything else, including walking back into the structure. Even a brief reentry can grind soot deeper into carpet and finishes and complicate the cleaning that follows.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              The rest of this page walks through every stage of a real fire restoration project, the science behind the cleaning chemistry and air-phase deodorization equipment we use, the categories of smoke residue we encounter in Michigan homes, and answers to the questions homeowners ask most often after a fire.
            </p>
          </div>
        </section>

        {/* STAGES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                The 12 Stages of Fire Damage Restoration
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">
                Every fire loss we handle follows the same structured workflow, scaled to the size of the project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className="bg-white p-8"
                  style={{
                    borderRadius: '20px',
                    boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  }}
                >
                  <div className="text-[#ff385c] font-bold text-[14px] mb-2 tracking-wider">STAGE {s.n}</div>
                  <h3 className="text-[#222222] font-bold text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>{s.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] m-0">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESIDUE TYPES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Smoke Residue Types We Identify First
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">
                The cleaning chemistry and sequence change completely depending on what burned.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residueTypes.map((r) => (
                <div key={r.name} className="bg-white p-7" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <h3 className="text-[#222222] font-bold text-[18px] mb-2" style={{ letterSpacing: '-0.2px' }}>{r.name}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAUSES */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Common Causes of Residential Fire Loss in Michigan
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[620px] mx-auto">
                Knowing the cause helps us anticipate where smoke spread and which residues we will be cleaning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {causes.map((c) => (
                <div key={c.title} className="bg-[#f7f7f7] p-7" style={{ borderRadius: '20px' }}>
                  <h3 className="text-[#222222] font-bold text-[18px] mb-2" style={{ letterSpacing: '-0.2px' }}>{c.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEEP DIVE: AIR PHASE DEODORIZATION */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              The Science of Smoke Odor Elimination
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Smoke odor is not a smell trapped on the surface of a building. Combustion produces microscopic particles and volatile organic compounds that lodge themselves into anything porous: wood framing, insulation, drywall paper, carpet pad, fabric, leather, paper, books, and grout. Surface cleaning alone will never reach all of them. That is why every effective deodorization protocol uses an air-phase or vapor-phase treatment that follows the same diffusion paths the smoke originally took.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Thermal fogging is the workhorse of fire restoration deodorization. A petroleum-based deodorizer is heated above its flash point and forced through a small orifice, producing a dense, dry fog of sub-micron droplets. Because the droplets are roughly the same size as smoke particles, they travel into the same wall cavities, joist bays, attic spaces, and fabric fibers. The deodorizer pairs with combustion molecules through a chemical reaction that neutralizes them, rather than masking them with a stronger fragrance.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Ozone treatment works differently. Ozone, or O3, is an unstable form of oxygen that breaks apart easily and oxidizes anything it contacts, including odor molecules. Ozone is extremely effective on residual smoke odor in unoccupied spaces but is also reactive enough that the area must be sealed and unoccupied during treatment, with no people, pets, or live plants present. After the treatment cycle, the structure is aerated until ozone levels return to safe ambient conditions before reoccupation.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Hydroxyl generators are the gentler alternative. UV-C light reacts with water vapor in the air to produce hydroxyl radicals, the same molecules that nature uses to clean the atmosphere. Hydroxyls are slower than ozone but safe enough to operate in occupied spaces, which makes them ideal for partial-loss properties where residents need to remain in unaffected areas while restoration proceeds in the damaged section.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              On most projects we use a combination: thermal fogging to neutralize odor at the source, hydroxyls for ongoing air-phase treatment during cleaning, and a final ozone cycle on unoccupied properties as a finishing step before reconstruction. Selecting the right combination is part of the scoping process and depends on the residue type, building materials, occupancy status, and project timeline.
            </p>
          </div>
        </section>

        {/* DEEP DIVE: CONTENTS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-6" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Content Cleaning &amp; Pack-Out
            </h2>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Personal belongings are often the hardest part of a fire loss for the homeowner. Photographs, family heirlooms, books, electronics, instruments, art, and clothing carry meaning that goes far beyond their replacement cost. Our content division is built around saving as much as possible, and around being honest about what cannot be saved.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75] mb-5">
              Items that can be cleaned on site are addressed first. Hard furniture, cabinetry, appliances, and durable goods are HEPA vacuumed, dry chemical sponged, wet cleaned, and deodorized in place. Items that need controlled cleaning are inventoried, photographed, packed in labeled containers, and transported to our cleaning facility. There they are processed using the right method for the material: ultrasonic cleaning for hard non-porous goods, hand cleaning for delicate items, professional laundering and ozone chambers for textiles, and digital recovery for damaged documents and photographs.
            </p>
            <p className="text-[#222222] text-[17px] leading-[1.75]">
              Restored contents are stored in a clean, climate-controlled environment until the structure has been cleaned, deodorized, and rebuilt. They are returned only when the building is verified ready, so cleaned items are not recontaminated by an active worksite.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Fire Damage Restoration FAQ
              </h2>
              <p className="text-[#6a6a6a] text-lg">Direct answers to the questions Bloomfield homeowners ask after a fire.</p>
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
                { label: 'Water Damage Restoration', href: '/' },
                { label: 'Smoke &amp; Odor Removal', href: '/services/smoke-odor-removal' },
                { label: 'Soot Cleanup', href: '/services/soot-cleanup' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="bg-[#f7f7f7] text-center text-[#222222] font-semibold text-[15px] py-5 px-5 no-underline hover:text-[#ff385c] transition-colors" style={{ borderRadius: '16px' }} dangerouslySetInnerHTML={{ __html: l.label }} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ backgroundColor: '#222222', padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-white font-bold text-center mb-12" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
              Call Provail Restoration of Bloomfield for 24/7 Fire Damage Response
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
                  <p className="text-white/70 text-base m-0 mb-1">24 Hours a Day, 7 Days a Week</p>
                  <p className="text-white/50 text-sm m-0">Emergency fire response available around the clock</p>
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

      {/* FOOTER */}
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
                { label: 'Contact', href: '#contact' },
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
