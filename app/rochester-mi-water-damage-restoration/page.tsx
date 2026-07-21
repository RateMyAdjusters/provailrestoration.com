import React from 'react'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
} from '../_components/site-chrome'

const downtownScenarios = [
  {
    title: 'Paint Creek Overflow Near Water Street',
    body: 'After a sudden thaw or a summer downpour, Paint Creek can jump its banks near Water Street and push silty, debris-laden water into first-floor utility rooms and garden-level basements. We pump out the standing water, clear sediment, sanitize to Category 3 standards, and set drying equipment before the stone joints start wicking it back up.',
  },
  {
    title: 'Historic Main Street Sprinkler Discharge',
    body: 'A frozen sprinkler head on a renovated upper floor can dump hundreds of gallons into a ground-floor shop in minutes — and the water rarely stays in one tenant space. We work with the building owner and each tenant on lateral containment, moisture mapping across shared walls, and staged drying so neighbors can reopen while we finish one unit.',
  },
  {
    title: '1900s Victorian on Pine — Cast-Iron Stack Leak',
    body: 'Corroded cast-iron stacks in older Pine Street Victorians tend to weep slowly, soaking plaster ceilings below a second-floor bathroom for weeks before the stain appears. We thermal-image the footprint, tent off the affected plaster, run injection drying between the lath, and coordinate with your plumber on stack replacement.',
  },
  {
    title: 'Condo Above Retail — Upstairs Bathroom Migration',
    body: 'In mixed-use buildings near the Rochester Mills district, an upstairs condo leak travels through the floor assembly and drips through a commercial tile ceiling below. We separate the HO-6 unit owner\'s responsibility from the master policy, document the migration path, and dry both the residential subfloor and the commercial ceiling cavity.',
  },
  {
    title: 'Craftsman Bungalow Near Municipal Park — Galvanized Pinhole',
    body: 'Original galvanized supply lines in bungalows off Rochester Municipal Park often develop pinhole leaks behind plaster walls. By the time the homeowner notices the bubble, several stud bays are saturated. We open a discreet access point, dry the cavity without demolishing the plaster face, and match original trim when reconstruction is needed.',
  },
  {
    title: 'Stone-and-Mortar Foundation on Walnut — Spring Melt Weeping',
    body: 'Stone foundations on Walnut Street and similar blocks weep through mortar joints during the March–April melt. We run low-grain-refrigerant (LGR) dehumidifiers sized for high-latent-load basements, introduce targeted airflow along the foundation face, and document the moisture trend daily until the readings stabilize.',
  },
]

const services = [
  {
    title: 'Emergency Water Extraction',
    body: 'Truck-mounted extraction and portable units sized for narrow historic staircases and downtown alleys. We can access most Rochester basements and upper-floor condos without tearing up your finished spaces.',
  },
  {
    title: 'Structural Drying for Historic Buildings',
    body: 'Plaster, lath, original hardwood, and stone behave differently than modern drywall and engineered lumber. We use injection drying, cavity ventilation, and slower, lower-temperature drying profiles to protect Rochester\'s older building stock.',
  },
  {
    title: 'Mold Prevention After Flooding',
    body: 'After Paint Creek incidents or long-undetected slow leaks, mold is the real threat. We apply EPA-registered antimicrobials, set containment where spores could travel, and follow up with air and surface sampling when warranted.',
  },
  {
    title: 'Sewage and Category 3 Cleanup',
    body: 'Root-intruded clay laterals and failing cast-iron stacks are common in Rochester. We handle the extraction, affected-material removal, and decontamination under IICRC S500 protocols and document everything for your carrier.',
  },
  {
    title: 'Reconstruction With Period-Matched Materials',
    body: 'We source plaster, trim profiles, crown, baseboard, and hardwood species that match what\'s in your 1910 foursquare or 1925 craftsman. For homes adjacent to the historic district, we coordinate permits so the work does not jeopardize your designation.',
  },
  {
    title: 'Emergency Tarping and Board-Up',
    body: 'For Main Street storefronts after a vehicle strike, or roof damage after a wind event in the neighborhoods north of Tienken, we stabilize openings the same day so secondary water intrusion does not compound the loss.',
  },
]

const trustCards = [
  {
    title: 'We Know the Rochester Building Stock',
    body: 'Our crews have worked through plaster, lath, hand-hewn joists, stone foundations, and 1950s postwar additions across downtown Rochester and its surrounding blocks. We estimate and sequence the job for the building you actually have — not a generic modern house.',
  },
  {
    title: 'One Crew, From Pump-Out Through Finish',
    body: 'You will not get passed from a mitigation company to a separate contractor and then a third party for finish work. The team that extracts the water is the team that dries it, rebuilds it, and walks the final punch list with you.',
  },
  {
    title: 'Carrier Documentation That Holds Up',
    body: 'Moisture maps, thermal images, equipment logs, and Xactimate-ready scopes for every Rochester loss. When your adjuster asks why a 1912 Victorian needs a different drying approach than a 2005 ranch, we have already written it up.',
  },
]

const faqs = [
  {
    q: 'Our 1912 Victorian on Pine Street has original plaster walls. Are you going to tear them out?',
    a: 'No — that is our last resort. Plaster-and-lath dries differently than drywall, and with the right tools we can almost always save it. We drill small injection holes along the base, push conditioned air into the stud cavity, and monitor the plaster face for movement. If a section has already delaminated from the lath, we address that surgically rather than demolishing the wall. Preserving the plaster also protects the original trim, picture rails, and any stenciled or wallpapered details underneath.',
  },
  {
    q: 'How fast can you actually reach downtown Rochester from your Bloomfield office?',
    a: 'Our office is at 4060 W Maple Rd in Bloomfield Township. From there, it is roughly 15 miles to downtown Rochester via Adams Road, Opdyke, and Rochester Road — about 22 minutes in normal traffic. During rush hour we re-route through Square Lake and Auburn. We dispatch the moment you call, so equipment and techs are rolling while you are still on the phone.',
  },
  {
    q: 'Paint Creek backed up into our basement. Is that a homeowners claim or do I need flood insurance?',
    a: 'It depends on the source. If the water is overland flooding — the creek jumping its banks and flowing across the ground into your basement — that is almost always excluded from a standard homeowners policy and requires a separate NFIP or private flood policy. If the water is from a sewer or drain backup behind a blocked lateral, a backup-of-sewers-and-drains endorsement on your homeowners policy may apply. We photograph the entry points, document the water line elevation, and help you present the facts clearly to both carriers so coverage gets sorted on evidence rather than guesswork.',
  },
  {
    q: 'Our Main Street shop had a sprinkler discharge this morning. Can we reopen tomorrow?',
    a: 'Often, yes — depending on the footprint. Commercial mitigation is about isolating the affected area, getting the standing water out within the first few hours, and flooding the space with drying equipment overnight. We can usually clear enough of the sales floor and back-of-house to allow limited operations the next day, while we finish drying wall cavities and subfloors over the following two to four days. We will give you a realistic timeline after the initial walk-through, not an optimistic one.',
  },
  {
    q: 'The condo above us leaked through our ceiling. Whose insurance pays?',
    a: 'Mixed-use buildings in downtown Rochester usually have a master policy for the structure and common elements, plus individual HO-6 policies for each unit owner and separate policies for commercial tenants. Which one responds depends on where the water came from, where the damage landed, and what the condominium bylaws say about maintenance responsibility. We work with all three carriers in parallel — documenting the migration path from the upstairs fixture through the floor assembly down into your space — so each insurer sees the same factual record.',
  },
  {
    q: 'Do you actually use period-matched trim and millwork for reconstruction, or just modern stock?',
    a: 'Period-matched whenever we can. For older Rochester homes, we source matching casing, baseboard, crown, and window stool from local millwork suppliers who can run custom profiles off a salvaged sample. For rare species or ornate Victorian profiles, we sometimes hold the job open an extra week to get it right rather than substituting modern stock. If a perfect match is not available, we show you the closest options before we order anything.',
  },
  {
    q: 'Will restoration work affect our historic-district designation?',
    a: 'Not if it is scoped and permitted correctly. Rochester has specific expectations for exterior changes on and near designated historic properties. Internal drying, plaster repair, and in-kind material replacement generally do not trigger historic-district review. Exterior repairs — roofing, siding, windows — may. We coordinate with the City of Rochester on permits and, where needed, on materials approval before work starts, so your designation stays intact.',
  },
  {
    q: 'We have a stone-and-mortar foundation basement. Can you actually dry that?',
    a: 'Yes. Stone foundations are high-latent-load environments — they hold and release moisture slowly through mortar joints and through the stone itself. We use LGR dehumidifiers sized for the cubic footage and the moisture load, combined with directed airflow along the foundation face. Typical drying time for a flooded stone-foundation basement is five to ten days, versus three to five for a modern poured wall. We track moisture daily with pin and pinless meters and share the log with your adjuster so the extended timeline is clearly supported.',
  },
]

const nearbyLinks = [
  { label: 'Rochester Hills, MI', href: '/rochester-hills-mi-water-damage-restoration' },
  { label: 'Oakland Township, MI', href: '/oakland-township-mi-water-damage-restoration' },
  { label: 'Auburn Hills, MI', href: '/auburn-hills-mi-water-damage-restoration' },
  { label: 'Bloomfield', href: '/bloomfield' },
  { label: 'Water Damage Restoration (All Services)', href: '/water-damage-restoration' },
]

export default function RochesterMiWaterDamagePage() {
  return (
    <div className="bg-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ff385c',
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            Serving Rochester, MI — Historic Downtown & Paint Creek 24/7
          </div>
          <h1
            className="text-[#222222] font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.6px',
              lineHeight: 1.15,
            }}
          >
            Plaster Walls, Stone Foundations, Paint Creek — Rochester Needs a
            Water Damage Crew That Understands Old Buildings.
          </h1>
          <p
            className="text-[#6a6a6a] mb-8 mx-auto"
            style={{ fontSize: '1.125rem', maxWidth: '720px', lineHeight: 1.55 }}
          >
            Rochester is the historic downtown core — about 13,000 residents,
            1890s Main Street commercial buildings, Victorian and Craftsman
            homes on Pine, Walnut, and Wilcox, and Paint Creek running right
            through town. It is not Rochester Hills, and it does not need the
            same playbook. {BIZ_NAME} is 22 minutes away in Bloomfield
            Township with the right equipment for plaster, hardwood, and stone.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* NOT TO BE CONFUSED WITH ROCHESTER HILLS */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Two Cities, Two Zip Codes, Two Very Different Jobs"
            title="Rochester and Rochester Hills Are Not the Same City"
          />
          <div className="space-y-5 text-[#222222] text-[17px] leading-[1.7]">
            <p>
              This is the confusion we hear on the phone every week. A homeowner
              calls saying they are in Rochester, we ask for cross streets, and
              we end up two miles east of the actual city limits in Rochester
              Hills. The two municipalities border each other — Rochester Hills
              wraps around Rochester on three sides — but they are separate
              cities with separate building stock, separate risk profiles, and
              separate stories when something goes wrong.
            </p>
            <p>
              Rochester, MI (ZIPs 48306 and 48307) is the older, smaller, denser
              city. Roughly 13,000 people. A walkable historic Main Street.
              Homes going back to the 1890s. Paint Creek cutting through the
              downtown and the Paint Creek Trail heading north out of town
              toward Oakland Township and Lake Orion. Rochester Hills is the
              surrounding municipality — about 74,000 residents, newer
              subdivisions, larger lots, mostly 1970s through 2000s construction.
              Oakland University, despite the address confusion, is technically
              in Rochester Hills, not Rochester.
            </p>
            <p>
              Why does this matter for water damage? Because a flooded 1912
              Victorian with plaster walls, original hardwood, galvanized supply
              lines, and a hand-dug stone cellar cannot be dried the same way as
              a 1995 colonial on an engineered truss system with drywall and a
              poured basement. The equipment, the sequencing, and the
              reconstruction materials are all different. A crew that only
              knows modern construction will over-demolish your Rochester home.
              A crew that treats a 2005 Rochester Hills house like a historic
              structure will blow your schedule and your budget. We route the
              right crew based on the actual address — not the city name on the
              voicemail.
            </p>
          </div>
        </div>
      </section>

      {/* ROCHESTER'S WATER DAMAGE PROFILE */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The Local Picture"
            title="Rochester's Water Damage Profile"
            intro="Four patterns show up again and again in this city."
          />
          <div className="space-y-5 text-[#222222] text-[17px] leading-[1.7]">
            <p>
              <strong>Paint Creek flooding.</strong> Paint Creek is not a
              threatening river most of the year, but the watershed drains a
              large area and the creek runs right through the center of town
              before crossing under Main Street. Spring melt, ice-jam releases,
              and sustained summer rain all push the creek over its banks into
              homes and businesses near Water Street, along the Paint Creek
              Trail corridor, and around Rochester Municipal Park. Homes with
              garden-level basements are particularly exposed.
            </p>
            <p>
              <strong>Historic home plumbing.</strong> Galvanized steel supply
              lines in 1900s bungalows and Victorians corrode from the inside
              and develop pinhole leaks behind finished walls. Cast-iron drain
              stacks rust through at the base and weep for months before
              anyone notices a ceiling stain. Old clay laterals from the house
              to the city main fracture at joints and take on tree roots. Any
              of these can dump water where you cannot see it until the damage
              is already extensive.
            </p>
            <p>
              <strong>Mixed-use downtown buildings.</strong> The historic Main
              Street blocks — including buildings near the Rochester Mills
              Brewery and the Rochester Cemetery end of downtown — combine
              ground-floor retail, upper-floor offices, and upper-floor condos
              in single buildings with party walls, shared plumbing runs, and
              fire-suppression systems retrofitted into older structures.
              When something breaks, it rarely stays in one unit. A single
              sprinkler head or an upstairs bathtub overflow can affect three
              tenants vertically and two more laterally.
            </p>
            <p>
              <strong>Stone-and-mortar foundations and hand-dug cellars.</strong>{' '}
              A meaningful share of homes on streets like Walnut, Wilcox, and
              the older blocks off Rochester Road have stone-and-mortar
              foundations, dirt-floor crawlspaces, or shallow hand-dug cellars.
              These spaces move moisture in and out seasonally and require
              different dehumidification strategy than a poured concrete
              basement. We have drying profiles built specifically for them.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNTOWN ROCHESTER SCENARIOS */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Real Situations We Work"
            title="Downtown Rochester Scenarios"
            intro="Six of the most common calls we get from this city."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downtownScenarios.map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-xl"
                style={{ boxShadow: 'rgba(0,0,0,0.06) 0px 4px 16px' }}
              >
                <h3 className="text-[#222222] font-semibold text-[19px] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATER RESTORATION SERVICES FOR ROCHESTER */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Full-Service, Historic-Aware"
            title="Water Restoration Services for Rochester"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-xl"
                style={{
                  backgroundColor: '#f7f7f7',
                  boxShadow: 'rgba(0,0,0,0.04) 0px 2px 8px',
                }}
              >
                <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING IN HISTORIC HOMES */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Our Approach"
            title="Working in Rochester's Historic Homes"
          />
          <div className="space-y-5 text-[#222222] text-[17px] leading-[1.7]">
            <p>
              Plaster is not drywall, and treating it that way is how older
              Rochester homes lose their character during a restoration job.
              Plaster-and-lath walls have a cavity you can dry through from the
              back, a lath layer that absorbs and releases moisture at its own
              pace, and a finish face that can be saved almost every time if
              you catch the job early. We drill small injection points along
              the base or into discreet locations, push conditioned air into
              the cavity with low-profile ventilation systems, and monitor both
              faces of the wall with pinless moisture meters so we know when
              the drying curve has actually flattened.
            </p>
            <p>
              Original hardwood floors respond to drying — they do not always
              need to be ripped up. We use floor-drying mats designed for
              tongue-and-groove strip flooring, combined with dehumidification
              that holds a steady grain-moisture target rather than just
              pulling the room to a low relative humidity. Many Rochester
              hardwoods that other crews would have replaced we have saved
              with four to seven extra days of careful drying. Period trim,
              crown, baseboard, window casing — we remove it carefully where
              we have to, number and store it, and reinstall it when the wall
              is back together.
            </p>
            <p>
              When a section genuinely cannot be saved, we rebuild with
              like-kind materials. For a 1910 foursquare, that means real
              plaster over lath (or a plaster-over-blueboard hybrid where
              appropriate), hardwood species and cut that match the original,
              and trim profiles milled to match what is still on the adjoining
              walls. You will not finish the job with a 2025 plastic-trim room
              sitting next to your original parlor. Our goal on every Rochester
              historic home is that a visitor cannot point to the wall that
              got fixed.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ROCHESTER HOMEOWNERS CALL US */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why Rochester Calls Us"
            title="What Makes Us the Right Crew for an Older City"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustCards.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-xl"
                style={{
                  backgroundColor: '#f7f7f7',
                  boxShadow: 'rgba(0,0,0,0.04) 0px 2px 8px',
                }}
              >
                <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Questions From Rochester Homeowners"
            title="Rochester, MI Water Damage FAQ"
          />
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl p-6 group"
                style={{ boxShadow: 'rgba(0,0,0,0.04) 0px 2px 8px' }}
              >
                <summary
                  className="cursor-pointer list-none text-[#222222] font-semibold text-[17px] leading-[1.45]"
                  style={{ outline: 'none' }}
                >
                  {item.q}
                </summary>
                <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-3 mb-0">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section style={{ backgroundColor: '#222222', padding: '72px 0' }}>
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.44px',
              lineHeight: 1.2,
            }}
          >
            Water damage in your Rochester home? A Bloomfield crew is 22
            minutes away.
          </h2>
          <p
            className="text-[#cccccc] mb-8 mx-auto"
            style={{ fontSize: '1.0625rem', maxWidth: '640px', lineHeight: 1.6 }}
          >
            Paint Creek overflow, cast-iron stack leak, sprinkler discharge on
            Main, or a slow plaster-ceiling drip — we answer 24/7, dispatch
            the moment you call, and bring equipment sized for historic
            buildings.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-[#222222] font-semibold text-base no-underline hover:bg-[#f0f0f0] transition-colors duration-150"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '0 32px',
              height: '56px',
            }}
          >
            Call {PHONE} Now
          </a>
        </div>
      </section>

      {/* NEARBY LINKS */}
      <section className="bg-white" style={{ padding: '64px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-[#222222] font-semibold text-[22px] mb-6">
            Serving Rochester and the Surrounding Area
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#222222] text-[14px] no-underline hover:text-[#ff385c] transition-colors duration-150"
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '999px',
                  padding: '10px 18px',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
