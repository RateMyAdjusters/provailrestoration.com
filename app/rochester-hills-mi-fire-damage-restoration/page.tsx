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

const cardShadow =
  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px'

const FIRE_TYPES: { title: string; body: string }[] = [
  {
    title: 'Kitchen & Protein Fires',
    body:
      'Grease flash on a gas cooktop or an unattended pan on a high-end range leaves a nearly invisible protein film that coats cabinets, ceilings, and painted trim across the whole main floor. It looks like nothing happened until the varnish yellows two weeks later. We treat kitchen fires as full-structure soot events from the first visit.',
  },
  {
    title: 'Chimney & Fireplace Fires',
    body:
      'East-side 1950s and 60s ranches around Rochester Heights still lean on masonry chimneys that have not been swept in years. A creosote ignition can punch through a cracked flue tile and smolder in attic framing long after the visible flames die down. We coordinate thermal imaging, attic access, and a licensed chimney sweep for the post-fire assessment.',
  },
  {
    title: 'Oakland University Rental Fires',
    body:
      'Off-campus OU houses and duplexes near Walton and Adams frequently have three to six tenants sharing space. Cooking fires, space-heater fires, and overloaded power-strip fires are the usual causes. We handle multi-tenant pack-outs with labeled, photographed inventory so each student can reclaim their own belongings.',
  },
  {
    title: 'Attached Garage & Workshop Fires',
    body:
      'Gasoline cans, lithium tool batteries on trickle chargers, and welding sparks in attached garages in Meadowbrook and Tienken subdivisions produce intense, fast-burning fires that push smoke into the house through the common wall and shared HVAC return. We seal off the garage, depressurize the living space, and clean both sides independently.',
  },
  {
    title: 'EV Charging Fires',
    body:
      'Adams-corridor new builds with Tesla, Rivian, and Lucid chargers introduce a different fire-damage profile. Lithium-battery combustion off-gasses hydrofluoric acid and heavy-metal particulates that standard smoke sponges do not touch. We bring specialized PPE, neutralizing agents, and a disposal chain that keeps contaminated contents out of your living space.',
  },
  {
    title: 'Dryer-Lint & Laundry Fires',
    body:
      'Second-floor laundry rooms on the newer 1990s and 2000s builds in Rochester Hills are the worst spot for a lint fire. The heat and smoke have nowhere to vent down, so they push up into the attic and laterally through every supply register on the floor. We HEPA-scrub every duct run and replace any flex duct that touched fire.',
  },
]

const FIRE_SERVICES: { title: string; body: string }[] = [
  {
    title: 'Emergency Board-Up & Tarp',
    body:
      'Broken-out windows and a cut-away roof after Rochester Hills Fire Department leaves are an open invitation for weather, animals, and theft. We board glazing with 3/4" exterior-grade plywood, tarp vented roof sections, and install a secondary lockset on any door the fire crew forced.',
  },
  {
    title: 'Soot & Smoke Cleaning',
    body:
      'Every surface gets sorted by substrate — painted drywall, stained oak, plaster, brick, stainless — and cleaned with the chemistry that actually lifts the soot type we see. Dry-chem sponges for dry smoke, solvent gel for wet smoke, enzyme degreaser for protein. No scrubbing through the paint, no skipped trim.',
  },
  {
    title: 'HEPA Air Scrubbing',
    body:
      'We run negative-air HEPA machines at four to six air changes per hour until particulate readings come back to ambient. The scrubbers pull ultrafine soot out of the air instead of pushing it around with a box fan, which is what makes the smell actually leave.',
  },
  {
    title: 'Odor Counteraction',
    body:
      'Smell is the test nobody warns you about. We stage hydroxyl generators for occupied rooms, ozone for fully evacuated spaces, and thermal fogging to drive counteractants into the same micro-crevices the smoke hit. We do not declare the job done until a two-sample re-occupancy check passes.',
  },
  {
    title: 'Contents Pack-Out & Cleaning',
    body:
      'Salvageable contents leave the house on a barcoded manifest, head to our facility for ultrasonic or ozone treatment, and come back cleaned and deodorized. Textiles go through esporta-style wet cleaning. Electronics get a corrosion-arrest protocol within 48 hours because soot is acidic.',
  },
  {
    title: 'Reconstruction Under One Roof',
    body:
      'Drywall, paint, cabinetry, flooring, trim — we rebuild what had to come out. Permits pulled through the Rochester Hills Building Department, inspections scheduled, one project manager from fire-out to final walk-through. You are not handed a list of three subs.',
  },
]

const TRUST_CARDS: { title: string; body: string }[] = [
  {
    title: 'Soot Chemistry, Not Guesswork',
    body:
      'Protein, wet, dry, and fuel-oil soot each require a different detergent, a different dwell time, and a different order of operations. We identify the soot type on the first walk-through and document it in the job file — so the right chemistry hits the wall on day one, not after a failed first attempt.',
  },
  {
    title: 'ICC S700 Documentation',
    body:
      'We write our fire files to the ICC/IICRC S700 standard: room-by-room soot maps, particulate readings, thermal fogging logs, and a final clearance report. That is the paperwork carriers actually want to see when they are deciding whether to pay the full scope or argue for a reduced settlement.',
  },
  {
    title: 'Mitigation-to-Rebuild, One Roof',
    body:
      'The same company that HEPA-scrubs your Meadowbrook colonial on day two is the one hanging drywall on day twenty-eight. No lost scope between a mitigation contractor and a rebuild GC, no re-soiling a freshly cleaned space because someone else showed up with a miter saw.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How fast can you reach Rochester Hills after a fire?',
    a: 'Our office at 4060 W Maple Rd in Bloomfield Township is roughly fourteen miles from Rochester Hills via Opdyke and M-59 — about twenty minutes off-peak. We dispatch a board-up and assessment crew as soon as Rochester Hills Fire Department releases the scene, which is usually within a couple of hours of the last fire truck leaving. If the fire is still active, we stage nearby so we are on-site the moment the scene is cleared.',
  },
  {
    q: 'Is smoke damage in an adjacent room still our problem if the fire was contained to the kitchen?',
    a: 'Yes, almost always. Smoke follows HVAC returns, plumbing chases, and electrical penetrations — it does not respect the door between the kitchen and the family room. We routinely find measurable soot deposits two floors above a contained kitchen fire because the return plenum pulled contaminated air into every supply register. That lateral and vertical migration is exactly why we scope the whole structure, not just the room with visible char.',
  },
  {
    q: 'Our Adams-corridor new build had an EV charging fire in the garage — is lithium-battery residue different from normal soot?',
    a: 'Very different. Lithium-ion battery fires off-gas hydrofluoric acid and deposit heavy-metal particulates that are hazardous to touch and hazardous to breathe, even after the flames are out. Standard soot sponges and dry-chem wipes will smear the residue rather than lift it. We bring acid-neutralizing chemistry, full-face respirators, and a hazardous-contents disposal chain. Anything we cannot decontaminate to a safe threshold leaves the property on a manifest, not in a regular trash bag.',
  },
  {
    q: 'How do you handle Oakland University off-campus rental fires with multiple tenants\u2019 belongings?',
    a: 'Chain of custody is the whole game. Every item gets a photograph, a barcode, and a room-of-origin tag before it leaves the house. Salvageable contents head to our facility for ultrasonic or ozone treatment with the tenant\u2019s name and room attached. Unsalvageable items get a photo-documented disposal list that we share with the tenant and the claims adjuster. At reoccupancy we reunite each tenant with their own belongings, not a general pile — it is the only way to keep three to six roommates and their insurance carriers aligned.',
  },
  {
    q: 'Does our State Farm policy cover smoke odor removal if there is no structural fire damage?',
    a: 'Usually yes, when the smoke event is from a covered cause of loss. Furnace puffbacks, oven malfunctions, lightning-strike wiring fires, and neighbor fires that push smoke into your home are commonly covered even when there is no structural char. The key is documentation — we write the loss cause, the soot categorization, and the scope of smoke migration in language the adjuster expects. That prevents the claim from being reclassified as a general cleaning event, which is the usual excuse for a reduced payout.',
  },
  {
    q: 'Can you save our 1950s plaster walls after a kitchen fire near Rochester Heights?',
    a: 'Plaster is far more forgiving than people expect. Wet plaster or plaster with visible char usually has to come out, but intact plaster that is only soot-coated can almost always be cleaned, primed with a pigmented shellac sealer, and skim-coated back to a new-paint-ready finish. We selective-demo only the sections that were heat-compromised and preserve the rest — which is faster, cheaper, and keeps the original wall texture that newer drywall cannot match.',
  },
  {
    q: 'How long until we can move back into our Meadowbrook home after a fire?',
    a: 'It depends on scope, but rough ranges help. A contained kitchen fire with whole-home smoke migration is typically three to four weeks: one week for emergency services and pack-out, one to two weeks for cleaning and deodorization, then finish painting and flooring. A larger event with partial structural demo runs six to eight weeks. A full gut-and-rebuild is a three-to-six-month project. We write a milestone schedule in week one so you are not guessing from progress photos.',
  },
  {
    q: 'Do you handle the rebuild or just the cleanup?',
    a: 'Both, under one contract and one project manager. That matters more than it sounds — the typical failure mode in fire claims is a seam between the mitigation contractor and the rebuild contractor, where scope items get dropped and nobody is accountable for re-soiling a just-cleaned space. We pull permits through the Rochester Hills Building Department, schedule inspections, manage trades, and hand the keys back with a single warranty covering the full project.',
  },
  {
    q: 'We keep smelling smoke two weeks after the fire, even after another company cleaned. What gives?',
    a: 'Almost always one of three things: the HVAC system was not decontaminated, the attic insulation was not replaced, or thermal fogging was skipped. Smoke particulates lodge in the fiberglass batts, the flex duct lining, and the micro-pores of painted drywall. If any of those three zones were missed on the first pass, the smell will come back on the first humid day. We are frequently called in as a second opinion for exactly this scenario in Rochester Hills and surrounding cities.',
  },
]

const NEARBY: { label: string; href: string }[] = [
  { label: 'Rochester Hills Water Damage', href: '/rochester-hills-mi-water-damage-restoration' },
  { label: 'Rochester Hills Storm Damage', href: '/rochester-hills-mi-storm-damage-restoration' },
  { label: 'Rochester Hills Mold Remediation', href: '/rochester-hills-mi-mold-remediation' },
  { label: 'Auburn Hills Water Damage', href: '/auburn-hills-mi-water-damage-restoration' },
]

export default function RochesterHillsFireDamagePage() {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: '#222222',
        backgroundColor: '#ffffff',
      }}
    >
      <SiteHeader />

      {/* HERO */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '80px 0 72px',
        }}
      >
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ffffff',
              backgroundColor: '#ff385c',
              borderRadius: '999px',
            }}
          >
            Serving Rochester Hills Michigan 24/7
          </div>
          <h1
            className="text-[#222222] font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.6px',
              lineHeight: 1.1,
            }}
          >
            Fire &amp; Smoke Damage Restoration &mdash; Rochester Hills, MI
          </h1>
          <p
            style={{
              color: '#444',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: 720,
              margin: '0 auto 32px',
            }}
          >
            Rapid response for the Oakland University corridor, Meadowbrook,
            Rochester Heights, and every subdivision in 48306, 48307, and
            48309. Soot-migration specialists, ICC S700 documentation, and a
            single crew that handles board-up through final paint. Call{' '}
            {BIZ_NAME} when minutes matter and the smell has to be gone before
            the adjuster walks back through.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* FIRST 24 HOURS */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="THE FIRST 24 HOURS"
            title="What Happens After Rochester Hills Fire Department Leaves"
            intro="The clock that actually matters starts when the last fire truck pulls away — not when the fire started."
          />
          <div
            style={{
              color: '#444',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            <p className="mb-5">
              Rochester Hills Fire Department runs a clean post-suppression
              scene. They ventilate, they check for hidden extension in the
              attic and wall cavities, and they release the structure to the
              homeowner or an agent once the fire is declared out cold.
              That hand-off is the moment restoration work actually begins,
              and it is also the moment most damage starts compounding. The
              water used to suppress the fire is soaking into drywall and
              subfloor, acidic soot is bonding chemically with painted and
              varnished surfaces, and the HVAC is redistributing fine
              particulates into every room.
            </p>
            <p className="mb-5">
              We target a two-hour dispatch window from scene release for
              Rochester Hills addresses. Our office sits at 4060 W Maple Rd
              in Bloomfield Township, roughly fourteen miles from
              Rochester Hills via Opdyke and M-59, and we route around the
              usual M-59 congestion to keep arrival inside that window. The
              first vehicle on-site is a board-up and assessment truck —
              plywood, tarps, locksets, and a tech with a moisture meter
              and a particulate counter — so we can secure the property
              before anyone decides what the restoration scope will be.
            </p>
            <p className="mb-5">
              The first twenty-four hours are dominated by three tasks that
              cannot wait. We board and tarp every penetration the fire
              crew created for ventilation or access. We stage HEPA air
              scrubbers and start running them at negative pressure so the
              airborne soot stops redepositing on cleaned surfaces. And we
              begin content triage — anything that can be corrosion-arrested
              (electronics, jewelry, silverware) gets wiped and bagged, and
              anything textile goes into a sealed pack-out container to
              prevent the smell from setting permanently into the fibers.
            </p>
            <p className="mb-0">
              The seventy-two-hour mark is the deadline most homeowners do
              not know about. After about three days, acidic soot bonds with
              metal fixtures, varnished wood, and high-gloss painted trim at
              a chemical level that turns cleaning into refinishing. A
              stainless refrigerator door that could have been wiped on day
              one often needs replacement by day four. That is the real
              reason we push so hard on the first-day response in Rochester
              Hills — the financial gap between a forty-eight-hour start and
              a week-long start is enormous, and it comes out of the
              homeowner&rsquo;s settlement either way.
            </p>
          </div>
        </div>
      </section>

      {/* FIRE TYPES */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="TYPES OF FIRE DAMAGE"
            title="Fires We See Most Often in Rochester Hills"
            intro="Every subdivision has a pattern. Here is what actually burns here, and why it matters for the cleanup."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIRE_TYPES.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6"
                style={{ boxShadow: cardShadow }}
              >
                <h3 className="font-semibold text-[#222] text-[18px] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOOT SCIENCE */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="SOOT &amp; SMOKE SCIENCE"
            title="Why the Wrong Chemistry Makes Fire Damage Permanent"
            intro="Four soot types, four different cleanups. The biggest single predictor of a successful restoration is whether the first crew identified what actually burned."
          />
          <div
            style={{
              color: '#444',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            <p className="mb-5">
              Protein soot is the kitchen assassin. It comes from burned
              meat, poultry, and dairy &mdash; think an unattended pan on a
              Wolf range &mdash; and it deposits as a nearly invisible,
              greasy film that coats an entire main floor. Homeowners often
              tell us the house &ldquo;looks fine but smells terrible.&rdquo;
              Two weeks later the cabinet varnish has yellowed, the crown
              molding has gone tacky, and the paint on the ceiling has lost
              its sheen. Protein soot needs enzyme-based degreasers and
              patience; dry sponges just smear it.
            </p>
            <p className="mb-5">
              Wet smoke comes from low-heat, smoldering fires &mdash; a
              couch that caught from a dropped cigarette, or plastics
              burning slowly in a basement storage room. It is sticky,
              web-like, and migrates aggressively through HVAC. Wet smoke
              demands solvent-based cleaners and a methodical top-down
              cleaning sequence, because any residue left on a ceiling will
              drip down onto a freshly cleaned wall the next day. Dry
              smoke, by contrast, is the product of a fast, hot,
              oxygen-rich fire &mdash; paper, framing, drapery &mdash; and
              it deposits a loose, powdery residue that responds well to
              dry chemical sponges and HEPA vacuuming, as long as you work
              from the top down and never touch a surface with a wet rag
              first.
            </p>
            <p className="mb-0">
              Fuel-oil soot is the specialty case you only see a few times
              a year in Rochester Hills, usually in older homes still
              running an oil-fired furnace or boiler. A puffback pushes
              combustion byproducts through the entire supply trunk and
              out every register in the house in a matter of seconds. The
              residue is oily, acidic, and aggressive on metal fixtures
              &mdash; door knobs and light switches often pit within days.
              Fuel-oil cleanup requires a specific degreaser chemistry, a
              full HVAC cleaning with mechanical brushing of the trunk, and
              sometimes a temporary shutdown of the heating system. HEPA
              filtration is non-negotiable for any of these scenarios,
              because the particle sizes we are chasing are in the 0.3 to
              2.5 micron range, and a box fan simply cannot capture them.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="OUR FIRE RESTORATION SERVICES"
            title="Full-Scope Fire Recovery for Rochester Hills"
            intro="Board-up through final paint, with one project manager from scene release to move-back day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIRE_SERVICES.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6"
                style={{ boxShadow: cardShadow }}
              >
                <h3 className="font-semibold text-[#222] text-[18px] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="WHY ROCHESTER HILLS CHOOSES US"
            title="Three Things We Do Differently on Fire Jobs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_CARDS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6"
                style={{ boxShadow: cardShadow }}
              >
                <h3 className="font-semibold text-[#222] text-[18px] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="FREQUENTLY ASKED"
            title="Fire Damage Questions from Rochester Hills Homeowners"
            intro="The questions that come up on almost every first call. If yours isn't here, just ask when we pick up."
          />
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: cardShadow,
                }}
              >
                <summary
                  className="cursor-pointer font-semibold text-[#222] text-[16px]"
                  style={{ listStyle: 'none' }}
                >
                  {f.q}
                </summary>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed mt-3 mb-0">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section style={{ backgroundColor: '#222222', padding: '72px 0' }}>
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.44px',
              lineHeight: 1.15,
            }}
          >
            Smoke in the walls. Soot on the ceiling. We can be in Rochester
            Hills in twenty minutes.
          </h2>
          <p
            style={{
              color: '#d0d0d0',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: 620,
              margin: '0 auto 28px',
            }}
          >
            One call starts the board-up, the HEPA scrubbers, and the claim
            documentation. {BIZ_NAME} answers the phone live, around the
            clock.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-[#222] font-semibold text-base no-underline hover:bg-[#f2f2f2] transition-colors duration-150"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '0 28px',
              height: '52px',
            }}
          >
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* NEARBY */}
      <section style={{ backgroundColor: '#ffffff', padding: '40px 0 64px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <p
            className="text-[#6a6a6a] text-[13px] m-0"
            style={{ letterSpacing: '0.2px' }}
          >
            Nearby service areas:{' '}
            {NEARBY.map((n, i) => (
              <React.Fragment key={n.href}>
                <a
                  href={n.href}
                  className="text-[#6a6a6a] hover:text-[#ff385c] no-underline transition-colors duration-150"
                >
                  {n.label}
                </a>
                {i < NEARBY.length - 1 ? ' \u2022 ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
