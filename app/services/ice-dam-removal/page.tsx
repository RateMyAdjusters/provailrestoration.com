import type { Metadata } from 'next'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/services/ice-dam-removal'

export const metadata: Metadata = {
  title:
    'Ice Dam Removal Michigan | Low-Pressure Steam, Attic Insulation & Ventilation Guidance | Provail Restoration of Bloomfield',
  description:
    'Shingle-safe low-pressure steam ice dam removal in Bloomfield Township. Why chipping, chemicals, and hot water fail. Attic R-values, soffit-to-ridge airflow, thermal bridging, and refreeze prevention explained.',
  keywords: [
    'steam ice dam removal Michigan',
    'low pressure steam roof ice',
    'attic insulation R-value ice dam',
    'soffit to ridge ventilation',
    'thermal bridging eaves',
    'heat cable temporary ice dam',
    'refreeze prevention roof',
    'ice dam shingle safe removal',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ice Dam Removal Michigan | Steam, Insulation & Ventilation Science',
    description:
      'Low-pressure steam ice dam removal and the building-science reasons chipping, chemicals, and hot water fail. Bloomfield Township, Michigan.',
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'What temperature and pressure does a proper ice dam steam unit actually run at?',
    a: 'Professional ice dam steamers deliver saturated steam in the range of roughly 250 to 290 degrees Fahrenheit at the boiler, with nozzle output pressure under 100 PSI once the steam has expanded and cooled through the insulated line. The cutting action is thermal, not mechanical. The technician holds the wand close to the ice and the phase change from steam to water releases latent heat that melts the ice along a narrow kerf. Pressure-washer setups run at 2000 to 4000 PSI and cold or lukewarm water, which is a completely different tool and a completely wrong one for this job.',
  },
  {
    q: 'Why not just chip the ice off with a hammer and a pick?',
    a: 'Because the pick cannot tell the difference between ice and shingle. Asphalt shingles bond to the ice that freezes in contact with them, and every strike either takes granules off the surface or fractures the shingle mat itself. Ridge caps crack, step flashing bends, drip edge deforms, and by the time the ice is off you have converted a one-winter leak into a roof replacement. Manufacturers commonly void shingle warranties when mechanical damage from ice removal is documented.',
  },
  {
    q: 'Calcium chloride pucks are sold at every hardware store. Why do you say no?',
    a: 'Calcium and sodium chlorides do melt ice, but they also dissolve into the meltwater and run down the roof, across the fascia, over the gutters, and onto everything below. Aluminum gutters and flashings corrode. Galvanized fasteners lose their coating. Landscape beds below the eave are burned. Cedar, copper, and zinc details discolor. And the chloride solution itself can find its way into attic insulation through the same path the original leak followed, leaving a salt burden in fiberglass that never fully flushes out. It is the wrong chemistry for a finished roof.',
  },
  {
    q: 'Is hot water from a pressure washer close enough to steam?',
    a: 'No. Hot water from a hose delivers sensible heat only. To melt a pound of ice you need the latent heat of fusion, roughly 144 BTU per pound, and hot water from a pressure washer loses most of its usable temperature to the surrounding air and to the ice surface in the first second of contact. Steam carries the latent heat of vaporization, roughly 970 BTU per pound, which is released directly at the ice surface as the steam condenses. The same tank of fuel moves many times more ice when the water is converted to steam first.',
  },
  {
    q: 'What insulation R-value should my attic have to actually prevent ice dams?',
    a: 'The Department of Energy recommends R-49 to R-60 for attics in Michigan Climate Zone 5. Many Bloomfield homes built before the 1990s have R-19 to R-30 in place, often compressed, often with bare top plates, and often with bath fan ducts terminating in the attic instead of through the roof. R-value alone does not stop ice dams. You need R-value combined with continuous air sealing along the attic floor so that warm, moist indoor air stops convecting into the attic in the first place. Air sealing without insulation is better than insulation without air sealing.',
  },
  {
    q: 'How does soffit-to-ridge ventilation math actually work?',
    a: 'Model building code calls for a minimum of one square foot of net free ventilation area for every 150 square feet of attic floor, split roughly evenly between low intake at the soffits and high exhaust at the ridge. When the ratio is closer to 60 percent intake and 40 percent exhaust, the attic runs under slight positive pressure and ambient air sweeps continuously under the roof deck, flushing any heat that managed to leak past the insulation. Blocked soffit intake, missing baffles, or mixing ridge vents with gable vents all short-circuit that airflow and allow a warm layer to form against the sheathing. That warm layer is where ice dams begin.',
  },
  {
    q: 'What does thermal bridging at the eaves have to do with ice dams?',
    a: 'Thermal bridging is the heat path that sneaks past insulation through solid framing. At the eaves, the rafter tails and the top plate of the exterior wall meet at a point where insulation thickness usually drops to almost nothing because the roof slope pinches down over the wall. Heat from the conditioned space conducts up the wall top plate, through the blocking, and into the lower roof deck. That localized warm spot melts snow right above the eave where the deck should be coldest, which is exactly where ice dams form. Proper baffles, blocking, and sometimes raised-heel truss retrofits interrupt the bridge.',
  },
  {
    q: 'Is heat cable a real fix or just a band-aid?',
    a: 'Heat cable is a temporary measure, full stop. It uses electricity to push back the freeze line on the lower courses of shingles and in the gutter, which buys you a drainage channel during a cold snap. It does nothing to address the heat loss that caused the ice to form in the first place, it adds operating cost every day it runs, and the service life of the cable is measured in single-digit winters. We install heat cable as a bridge for homes where the permanent insulation and ventilation retrofit cannot happen until spring. We never install it as the long-term answer.',
  },
  {
    q: 'I see water stains but no ice on the eave. Could it still be from an ice dam?',
    a: 'Yes. Ice dam infiltration follows framing, not gravity. Meltwater that worked its way under the shingles can travel several feet along a rafter, down a top plate, and through the wall assembly before it shows up as a stain on a ceiling, a bubble in paint, or a wet spot at the top of a closet wall. We use thermal imaging and pin-type moisture meters to trace the wet path back to its entry point so the repair addresses the source and not just the stain.',
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://provailrestoration.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Ice Dam Removal', item: PAGE_URL },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ice Dam Removal',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
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
    'Low-pressure steam ice dam removal with attic insulation, air-sealing, and soffit-to-ridge ventilation guidance for Michigan homes.',
  url: PAGE_URL,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${PAGE_URL}#business`,
  name: BUSINESS_NAME,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
                  Low-Pressure Steam Removal
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Michigan Climate Zone 5</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Ice Dam Removal in Michigan
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Shingle-safe low-pressure steam, attic insulation and ventilation
              guidance, and the building-science reasons ice dams form in the
              first place. Serving Bloomfield Township and Oakland County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline"
                style={{ backgroundColor: '#222222', borderRadius: 8, padding: '0 28px', height: 52 }}
              >
                Call Now: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white" style={sectionPad}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-5" style={{ fontSize: '2rem', letterSpacing: '-0.44px' }}>
              The mechanics of a professional steam removal
            </h2>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              An ice dam steamer is not a pressure washer with a heater bolted
              to it. It is a low-pressure, high-temperature tool built around a
              diesel- or propane-fired boiler that converts water into saturated
              steam and delivers it through an insulated line to a long,
              lightweight wand at the roof edge. The boiler runs at modest line
              pressure, and by the time the steam reaches the nozzle the working
              pressure has dropped well under 100 PSI. What the wand delivers is
              a gentle plume of hot vapor, not a cutting jet. The work is done
              by heat, not force.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              When steam meets ice, it condenses back to liquid water and
              releases its latent heat of vaporization directly at the ice
              surface. That phase change is where almost all the melting energy
              comes from. For every pound of steam we deliver we dump roughly
              970 BTU into the ice, compared to the 144 BTU per pound of heat
              needed to actually phase-change ice back into water. The math is
              so favorable that a trained operator can cut a channel through a
              twelve-inch dam in minutes without ever raising the wand pressure
              high enough to disturb a single shingle granule.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              The wand we use is aluminum or stainless steel, insulated along
              its length, with an interchangeable tip for different ice
              geometries. On a thick horizontal dam we use a cone tip that
              spreads the plume across a wider kerf. On narrow vertical ice
              inside a valley or around a dormer we switch to a focused tip that
              melts a precise channel. The technician walks the wand in slow
              overlapping passes along the line of the dam, opens a drain
              channel at the gutter, and steps the cut back up toward the
              shingle line until the eave is clear and meltwater can move again.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Why chipping, chemicals, and hot water all fail
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Mechanical chipping is the most common homeowner attempt and the
              most destructive. A hammer, a pick, a roof rake with a metal edge,
              or a hatchet all deliver impact energy in the range where shingle
              mats fracture. Even careful chipping takes shingle granules away
              with every swing, which is the layer that protects the asphalt
              from ultraviolet breakdown. We have walked onto roofs in April
              where you could still see the pick pattern from January, because
              the exposed asphalt oxidized in the months afterward and baked
              into a brittle, scaled finish that no longer sheds water the way
              the manufacturer designed it to.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Chloride chemicals, whether marketed as ice melt pucks, pantyhose
              filled with rock salt, or calcium chloride pellets scattered from
              a ladder, all share the same failure mode. They do melt ice, but
              the melted water carries the dissolved salt everywhere downhill.
              Aluminum gutters, galvanized nails, copper valleys, zinc strips,
              and steel fasteners all corrode on contact. Landscape beds below
              the drip line burn. And the chloride-laden water often ends up
              taking the same path the original ice-dam leak followed, carrying
              salt into wall assemblies and fiberglass insulation where it
              becomes effectively impossible to flush out.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Hot water from a hose or a pressure washer is the third common
              mistake. It sounds like it should work. The problem is that liquid
              water carries only sensible heat, and by the time a 180-degree
              stream leaves a hose nozzle and travels through cold air to reach
              the ice, it has already given up a meaningful fraction of its
              temperature. More importantly, hot water does not carry the
              latent heat of vaporization that makes steam effective. A typical
              pressure-washer setup also runs at 2000 to 4000 PSI, which is
              more than enough to blast shingle granules off the surface and
              drive liquid water up under the courses into the decking and
              insulation, turning a bad problem into a very bad problem.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Why attic insulation R-value is the real story
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Steam removes today&apos;s ice. The question that matters next
              winter is why the dam formed in the first place, and the answer is
              almost always heat loss from the conditioned envelope up into the
              attic. The Department of Energy target for attic insulation in
              Michigan Climate Zone 5 is R-49 to R-60. A lot of Bloomfield homes
              built in the 1950s, 60s, and 70s sit at R-19 or R-30 with
              compressed fiberglass batts, bare top plates where insulation
              never reached, recessed lights that leak conditioned air straight
              up into the attic, and plumbing chases and attic hatches with no
              weather stripping at all. The effective R-value at the warm spots
              can be close to zero.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Piling more fiberglass on top of those leaks does not fix them. If
              warm, moist interior air can convect into the attic through an
              uncapped recessed light or a missing gasket at the hatch, then the
              insulation above that leak is being bypassed entirely. The air
              carries its heat around the insulation rather than through it.
              This is why the retrofit sequence matters: air seal first with
              rigid foam caps, fire-rated caulk, and gasketed hatches, then top
              off with loose-fill cellulose or blown fiberglass to the target
              depth. R-value plus air sealing is the pair that actually works.
              One without the other leaves you calling us again next February.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Soffit-to-ridge airflow math
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Even a well-insulated attic needs ventilation because no
              insulation stops 100 percent of heat flow, and whatever trickles
              through needs somewhere to go. Model building codes use a simple
              ratio: one square foot of net free ventilation area for every 150
              square feet of attic floor, split between low intake at the
              soffits and high exhaust at the ridge. A 1,500 square foot attic
              therefore needs about ten square feet of total net free area,
              with roughly six square feet at the soffits and four at the ridge
              for a balanced intake-biased flow.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Net free area is not the same as the hole you cut in the eave.
              Manufacturer data sheets list the actual free area of a vent after
              accounting for louvers and insect screening, and it is usually 50
              to 70 percent of the nominal opening. When the intake is
              undersized, or when soffit vents are buried under insulation with
              no air channel above them, the attic cannot pull in enough cold
              air from below. The ridge vent then starts drawing conditioned
              air up through the attic floor instead, which makes the heat loss
              problem worse at exactly the point where you were trying to solve
              it.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Mixing ridge vents with powered attic fans or gable vents is
              another common failure mode. Each creates its own short-circuit
              path that pulls air from the closest opening rather than from the
              soffits, and the lower courses of the roof deck never get the
              flushing action they need. We walk through all of this during the
              on-site visit so you know not just that there is a ventilation
              problem but exactly where it is and what the corrected design
              should look like.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Thermal bridging at the eaves
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              There is one spot on almost every Michigan roof where insulation
              is thinnest even when the rest of the attic is well-insulated:
              the eave. The roof slope comes down, the rafters meet the top
              plate of the exterior wall, and the cavity between them pinches
              down to a few inches at most. Whatever R-value you have in the
              middle of the attic drops to R-5 or less right at the edge, and
              heat conducts up the wall top plate directly into the lower
              courses of the roof deck. That localized warm zone is precisely
              where you do not want heat, because the lower courses of deck
              need to stay cold so the meltwater from above freezes on the
              shingles and refreezes as it travels, not on the eave where a dam
              starts.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              The fix is a combination of tools. Proper insulation baffles keep
              the soffit air channel open while allowing full insulation depth
              over the top plate. Rigid foam blocking at the rafter heel
              interrupts the conduction path up the wall. In extreme cases,
              especially on cathedralized ceilings or shallow-truss roofs, a
              raised-heel retrofit or a layer of continuous exterior insulation
              at the eave is the only durable answer. We flag thermal bridging
              during the on-site assessment and name the specific fix for the
              roof geometry you have, rather than pretending one answer works
              for every house.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Refreeze prevention after the dam is off
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Removing the ice does no good if a fresh dam forms in the same
              spot forty-eight hours later. Refreeze prevention while the cold
              snap continues focuses on three fronts at once. First, we clear
              rooftop snow above the affected eave so that whatever meltwater
              the sun produces has an unobstructed path off the roof instead of
              pooling against the shingle line. Second, we open channels at the
              gutter so drainage can actually exit rather than backing up
              behind what is left of the dam. Third, we address the heat source
              to the extent we can in a single visit, by flagging the attic air
              leaks we find and recommending immediate temporary measures like
              weather stripping at the attic hatch or insulation caps over
              recessed lights.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Heat cable as a temporary measure only
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Heat cable, sometimes sold as roof or gutter de-icing cable, is a
              resistive wire that draws electricity and dissipates it as heat
              along the lower courses of shingles and inside the gutter and
              downspout. When the snow load is heavy and the homeowner cannot
              schedule insulation and ventilation work until spring, heat cable
              can keep a drainage channel open and prevent catastrophic backup.
              We install it for that reason and for that reason only. It is not
              a long-term solution. The cable runs up your electric bill every
              day it is powered, its service life is typically five to eight
              winters before the element or the ground fault protection
              degrades, and it does nothing at all to fix the heat loss that
              caused the dam. If you have heat cable that is older than a
              decade, consider it at end of life regardless of whether it still
              turns on.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Interior evidence of ice dam infiltration
            </h3>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Water that has worked its way past the shingle course does not
              always show up directly below the dam. Meltwater follows framing,
              and it can travel several feet along a rafter, across a top plate,
              and down a stud cavity before emerging as a stain on a ceiling, a
              bubble in paint at the top of an exterior wall, or a dark spot in
              a closet corner. Common interior indicators we look for include
              drips from recessed light housings during a thaw cycle, wet
              attic insulation directly above an affected room, salt-colored
              halos on a ceiling where evaporating water has left mineral
              residue, peeling paint along a window header, and hardwood
              flooring that has started to cup along the wall closest to the
              eave.
            </p>
            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              We map each wet point with pin-type moisture meters and confirm
              the findings with thermal imaging before any drywall is opened.
              The goal is to open only what needs to be opened, dry what can be
              dried in place, and remove only the materials that cannot be
              saved. For broader{' '}
              <a href="/services/water-damage-restoration" className="text-[#ff385c] font-semibold">water damage restoration</a>{' '}
              from the same event, our restoration crew handles the interior
              scope on the same project so you are not juggling multiple
              contractors.
            </p>

            <h3 className="text-[#222222] font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              What to expect when you call
            </h3>
            <ol className="text-[#444] text-[17px] leading-[1.75] mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>Live phone intake.</strong> A real person takes your
                address, the location of the dam, and any signs of interior
                water entry.
              </li>
              <li>
                <strong>On-site walkaround.</strong> Our lead technician
                inspects the eaves, walks the attic if accessible, and explains
                the removal plan in plain language before starting.
              </li>
              <li>
                <strong>Low-pressure steam removal.</strong> The dam is cut down
                with the steam wand, drainage channels are opened at the
                gutter, and the shingle line is cleared.
              </li>
              <li>
                <strong>Thermal and moisture mapping.</strong> Interior wet
                points are traced with thermal imaging and pin meters, and a
                written scope is produced for any drying needed.
              </li>
              <li>
                <strong>Attic and ventilation guidance.</strong> A written note
                of the R-value, air-sealing, and soffit-to-ridge corrections we
                recommend for the permanent fix, so you can schedule that work
                when the weather turns.
              </li>
            </ol>

            <p className="text-[#444] text-[17px] leading-[1.75] mb-6">
              Related services: see our{' '}
              <a href="/storm-damage-restoration" className="text-[#ff385c] font-semibold">storm damage page</a>{' '}
              for wind and tree impact response,{' '}
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
              Steam, Insulation &amp; Ventilation FAQs
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
              Ice on the eave? Drip from a recessed can?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call {BUSINESS_NAME}. We will get a steam crew on the way and
              walk you through the next steps before they arrive.
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
