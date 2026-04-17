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

const NEIGHBORHOOD_SCENARIOS: { title: string; body: string }[] = [
  {
    title: 'Clinton River walkout along Avon Road',
    body:
      'Homes on the bend where Avon Rd drops toward the Clinton River see groundwater push up through the walkout slab every spring thaw. We handle the extraction, dehumidify the lower level, and document the water line for your carrier so the source question is not left open.',
  },
  {
    title: '1950s ranch sump failure in Rochester Heights',
    body:
      'Original-era ranches east of Livernois near John R typically run a single sump on one circuit. When that breaker pops during a storm, the cove drain floods the rec room within two hours. We arrive with portable pumps first, then stabilize the humidity before the paneling warps any further.',
  },
  {
    title: 'Oakland University adjacent rental pipe burst',
    body:
      'Student-leased duplexes and landlord-owned houses off Squirrel Rd and Walton Blvd lose second-floor supply lines in February cold snaps. We coordinate with absentee owners by phone, isolate the tenant space, and keep drying equipment out of the way of class schedules.',
  },
  {
    title: 'Meadowbrook finished-basement sewer backup',
    body:
      'Meadowbrook homes built in the late 1970s share aging clay-to-PVC transitions at the main sewer. A single backup can flood a carpeted media room ankle-deep. We run Category 3 protocol, remove the affected carpet pad and drywall to tack-strip height, and disinfect the slab before any rebuild.',
  },
  {
    title: 'Tienken corridor new-build foundation seep',
    body:
      'Colonials north of Tienken built since 2005 sometimes seep at the cold-joint where the poured wall meets the footing, especially after an April rain pattern like 2026. We find the intrusion point with thermal imaging, dry the sill plate cavity, and flag anything the builder warranty team should see.',
  },
  {
    title: 'Adams corridor radiant-slab water intrusion',
    body:
      'Luxury tear-downs west of Adams near Opdyke run radiant-heat manifolds through the main-floor slab. When a zone leaks, the wood floor above cups within a day. We pull boards strategically, dry the slab from both sides, and protect the manifold while the plumber makes the repair.',
  },
]

const SERVICES: { title: string; body: string }[] = [
  {
    title: 'Water damage restoration',
    body:
      'Truck-mount extraction, low-grain refrigerant dehumidifiers, and documented moisture logs for Rochester Hills basements, crawlspaces and main floors. We dry to dry-standard readings, not to a calendar deadline.',
  },
  {
    title: 'Fire & smoke damage restoration',
    body:
      'Soot removal, thermal fogging and contents pack-out for Rochester Hills homes in 48306, 48307 and 48309. Kitchens, chimneys and attached-garage fires all get different cleaning chemistries — we do not mix them up.',
  },
  {
    title: 'Storm damage restoration',
    body:
      'Tarp-over, board-up and water mitigation after hail, straight-line wind and downed tree events across the Adams and Rochester Rd corridor. The April 15, 2026 Oakland County storm is a recent example — our dispatch logs show a sharp Rochester Hills spike that afternoon.',
  },
  {
    title: 'Mold remediation',
    body:
      'Containment barriers, HEPA air scrubbers and affected-material removal for slow leaks in Rochester Hills finished basements. Often the visible mold is behind a Meadowbrook bookshelf or under an Avon Estates vinyl plank floor — we look.',
  },
  {
    title: 'Sewage cleanup',
    body:
      'Category 3 black-water extraction, disinfection and controlled disposal for sewer backups along the older east-side lines near Dequindre and across the Clinton River lowlands. We do not band-aid a Cat 3 loss.',
  },
  {
    title: 'Reconstruction services',
    body:
      'Drywall, flooring, cabinetry and finish carpentry rebuild after mitigation. Whether the house is a 1960s split-level with plaster or a 2015 Tienken colonial with engineered joists, the rebuild is matched to what was actually there.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How fast can a crew reach my house near Oakland University?',
    a: 'From our Bloomfield Township office at 4060 W Maple Rd we are about 14 miles from Oakland University via Opdyke Rd and M-59 — a 20 minute drive off peak, a little longer if Adams or Walton is jammed. In a true emergency we roll before we finish the intake call.',
  },
  {
    q: 'Our Meadowbrook house has 1980s PVC stack and we found a slow leak behind the laundry wall. Is that a claimable loss?',
    a: 'In most Meadowbrook cases yes — a sudden and accidental hidden leak is covered by the majority of the Oakland County carriers we work with, including the State Farm, Auto-Owners and AAA policies we see most on that street grid. We document the leak source, moisture mapping and any resulting mold so your adjuster has a clean file.',
  },
  {
    q: 'The Clinton River backed up into our walkout off Avon Rd. Is that flood or sewer coverage?',
    a: 'Surface water from the Clinton River itself is usually a flood claim (NFIP), which is a separate policy from your homeowners. Backflow through a floor drain can be covered under a water or sewer backup endorsement on the homeowners side. We document both origin points so the right adjuster gets the right claim — your deductible depends on that distinction.',
  },
  {
    q: 'How do you dry a radiant-heat slab in an Adams corridor new-build without damaging the floor above?',
    a: 'We lift the hardwood or LVP in a pattern that protects the manifold runs, set low-profile injection ports into the substrate, and run desiccant dehumidifiers so the slab dries from both top and bottom. We coordinate with your plumber on the manifold shutoff sequence so nothing else gets cycled while we work.',
  },
  {
    q: 'What happens if our sump pump dies during a storm pattern like April 2026?',
    a: 'Call first, then try to cut power to the pit if it is safe. We carry portable trash pumps and battery backups on the truck. Once we have the standing water off the slab we set up drying equipment, and we can refer you to an electrician or plumber for the replacement pump if you do not already have one.',
  },
  {
    q: 'Our Rochester Heights ranch has original copper supply — pinhole leaks keep appearing. Are repeat leaks still a claim?',
    a: 'Each sudden pinhole event is usually its own loss, but most carriers pay attention to frequency and may non-renew if the pattern continues. We document each event cleanly and, with your permission, send written moisture and material findings to your agent — a proactive repipe conversation can protect the policy.',
  },
  {
    q: 'Do you work with my insurance company? We have Citizens / Hanover / Liberty Mutual.',
    a: 'We work with every major carrier writing policies in Oakland County, including the three you named. We do not act as public adjusters and we do not represent the insurer — we document the damage, prepare Xactimate-format estimates, and hand a clean package to whichever desk reviewer or field adjuster your file is assigned to.',
  },
  {
    q: 'Can you handle a whole-house job in the Stony Creek Ridge area or do we need multiple crews?',
    a: 'Stony Creek Ridge homes tend to be 4,000+ square feet with finished lower levels, which typically means a larger equipment count (more air movers and two dehumidifiers rather than one) and a slightly longer dry cycle. One of our crews handles it — we scale equipment to the cubic footage, not to the zip code.',
  },
]

const NEARBY_AREAS: { label: string; href: string }[] = [
  { label: 'Rochester', href: '/rochester-mi-water-damage-restoration' },
  { label: 'Auburn Hills', href: '/auburn-hills-mi-water-damage-restoration' },
  { label: 'Oakland Township', href: '/oakland-township-mi-water-damage-restoration' },
  { label: 'Troy', href: '/troy-mi-water-damage-restoration' },
  { label: 'Bloomfield', href: '/bloomfield' },
]

export default function RochesterHillsWaterDamagePage() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: '#222222',
        backgroundColor: '#ffffff',
      }}
    >
      <SiteHeader />

      {/* HERO */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ff385c',
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            Serving Rochester Hills Michigan 24/7
          </div>
          <h1
            className="text-[#222222] font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.8px',
              lineHeight: 1.1,
            }}
          >
            Rochester Hills Water Damage Restoration — from the Clinton River Floodplain to the Adams Road Corridor
          </h1>
          <p className="text-[#6a6a6a] text-lg mb-8" style={{ lineHeight: 1.55 }}>
            {BIZ_NAME} dispatches crews to Rochester Hills, Michigan from our office at 4060 W
            Maple Rd in Bloomfield Township — about fourteen miles via Opdyke Rd and M-59. We
            work every ZIP in the city: 48306 up along Tienken, 48307 across Meadowbrook and
            Rochester Heights, and 48309 through the Oakland University and Adams corridors.
            Emergency calls are answered and dispatched around the clock, including during the
            April storm pattern that just hit Oakland County.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section style={{ backgroundColor: '#f7f7f7' }} className="py-20">
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why Rochester Hills is not a generic suburb job"
            title="Four neighborhoods, four different water problems"
            intro="Rochester Hills is really a stitched-together map of housing stock eras. The work we do on a 1958 ranch east of Livernois is not the same work we do on a 2018 colonial north of Tienken, and a landing page that pretends otherwise is useless when water is actually on the floor."
          />

          <div className="space-y-6 text-[#333333] text-[17px]" style={{ lineHeight: 1.75 }}>
            <p>
              Start on the east side, inside the Dequindre border. A lot of those streets — the
              Rochester Heights grid, the pockets south of Avon Rd — went up in the 1950s and early
              1960s to house Chrysler engineering staff and their families. The foundations are
              poured concrete, the supply lines are original-era copper, and the sump pumps (if
              there is one) are usually single-zone. That is the set of conditions where a pinhole
              leak behind a washing machine wall and a Category 2 flood from a failed sump happen
              on the same block, the same week, every spring. When we show up, the first question
              is usually not about the water — it is about what year the copper went in.
            </p>
            <p>
              Move west into Meadowbrook, Avon Estates and the Christian Hills subdivisions, and
              you are mostly in 1970s and 1980s builds. Finished basements are the norm here, not
              the exception. Sump pumps are standard. Main-stack plumbing has transitioned to PVC,
              which is generally a good thing, but the joint between the house PVC and the
              municipal clay lateral at the property line is getting older and tired. Sewer
              backups that push dirty water onto a finished-basement carpet pad are the Category 3
              losses we handle on this side of town. The Clinton River cuts east through here as
              well — homes sitting lower along Avon Rd, near Bloomer Park, or at the Paint Creek
              confluence carry real floodplain risk during heavy spring rain events.
            </p>
            <p>
              Then there is the Tienken corridor and the newer colonials north toward Oakland
              Township. These are 1990s through 2000s builds, larger lots, basements that were
              never meant to be wet, and finishes — wine cellars, home gyms, built-in media walls —
              that are expensive to rebuild. The water problem up here is usually not the municipal
              side; it is the envelope of a newer house. Cold-joint seeps where the poured wall
              meets the footing, window-well grading that sheds the wrong direction, HVAC
              condensate lines that cracked behind drywall. We have been writing more of these
              files in 2026, and the April 15 storm that dumped three inches across Oakland County
              produced a measurable Rochester Hills spike on our dispatch board.
            </p>
            <p>
              Finally, west of Adams toward Opdyke, bordering the Bloomfield Hills edge of the
              city, you have luxury tear-downs and custom new-builds from roughly 2005 forward.
              Radiant-heat slabs, complex zoned HVAC, European-style closed-cell insulation in the
              exterior walls. When a radiant manifold drips under an engineered-hardwood floor, or
              a second-floor supply line breaks above a coffered ceiling near Oakland University,
              the mitigation playbook looks more like a custom-construction job than a standard
              water loss. Recognizing which of these four Rochester Hills you are in is the entire
              difference between a clean file and a repeat claim.
            </p>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SCENARIOS */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Common Rochester Hills calls"
            title="Six losses we see across 48306, 48307 and 48309"
            intro="Not every water call looks alike. Here are six specific patterns we respond to every month inside Rochester Hills city limits."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOOD_SCENARIOS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] m-0" style={{ lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ backgroundColor: '#f7f7f7' }} className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Services for Rochester Hills properties"
            title="Mitigation, remediation and rebuild under one roof"
            intro="All six core services, sized and scoped to how Rochester Hills houses are actually built."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] m-0" style={{ lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / DIFFERENTIATORS */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="What a Rochester Hills file actually looks like with us"
            title="Three things that make the difference here"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="rounded-xl bg-white p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
              }}
            >
              <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                Moisture logs, not vibes
              </h3>
              <p className="text-[#6a6a6a] text-[15px] m-0" style={{ lineHeight: 1.65 }}>
                We record daily hygrometer and pin-meter readings in every affected cavity until
                materials hit dry-standard. Your adjuster gets a dated moisture log — not a
                guess, not a drying story that ends on a Friday because crews want the weekend
                off.
              </p>
            </div>
            <div
              className="rounded-xl bg-white p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
              }}
            >
              <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                Rochester Hills route knowledge
              </h3>
              <p className="text-[#6a6a6a] text-[15px] m-0" style={{ lineHeight: 1.65 }}>
                Fourteen miles and twenty minutes off peak from our Bloomfield Township office.
                We know which lights on Adams and Opdyke slow us down, where the Clinton River
                crossings flood, and which Tienken cross-streets the plow trucks hit first in a
                winter event.
              </p>
            </div>
            <div
              className="rounded-xl bg-white p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
              }}
            >
              <h3 className="text-[#222222] font-semibold text-[18px] mb-3">
                Built for how Rochester Hills houses are built
              </h3>
              <p className="text-[#6a6a6a] text-[15px] m-0" style={{ lineHeight: 1.65 }}>
                Plaster walls get handled differently from modern drywall. Radiant slabs get
                handled differently from poured basements. We match the mitigation approach to
                the actual structure on the property — which, in this city, changes every few
                streets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f7f7f7' }} className="py-20">
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Rochester Hills FAQ"
            title="Straight answers to questions we actually get in this city"
          />
          <div className="space-y-5">
            {FAQS.map((item) => (
              <div
                key={item.q}
                className="rounded-xl bg-white p-6"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="text-[#222222] font-semibold text-[17px] mb-3">{item.q}</h3>
                <p
                  className="text-[#555555] text-[15px] m-0"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section style={{ backgroundColor: '#222222' }} className="py-20">
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-5"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.5px',
            }}
          >
            Water on a Rochester Hills floor right now? Call before the drywall wicks.
          </h2>
          <p
            className="text-[#cccccc] text-lg mb-8"
            style={{ lineHeight: 1.6, maxWidth: 640, margin: '0 auto 32px' }}
          >
            Every hour you wait is another inch the moisture climbs up the baseboard. Pick up the
            phone — you will reach a real person, we will ask three or four questions, and we
            will be rolling a truck toward your Rochester Hills address before the call ends.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-[#222222] font-semibold text-base no-underline hover:opacity-90 transition-opacity duration-150"
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

      {/* NEARBY SERVICE AREAS */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <p
            className="text-[#6a6a6a] text-[13px] m-0"
            style={{ letterSpacing: '0.2px' }}
          >
            Nearby service areas:{' '}
            {NEARBY_AREAS.map((area, i) => (
              <React.Fragment key={area.href}>
                <a
                  href={area.href}
                  className="text-[#6a6a6a] hover:text-[#ff385c] transition-colors duration-150 no-underline"
                >
                  {area.label}
                </a>
                {i < NEARBY_AREAS.length - 1 ? ' · ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
