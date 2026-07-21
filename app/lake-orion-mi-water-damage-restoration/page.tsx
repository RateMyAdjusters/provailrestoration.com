import { SiteHeader, SiteFooter, HeroCTA, PillarSectionHeading, PHONE, PHONE_HREF } from '../_components/site-chrome'

const colors = {
  text: '#222222',
  secondary: '#6a6a6a',
  accent: '#ff385c',
  bgAlt: '#f7f7f7',
  border: '#ebebeb',
}

const services = [
  {
    title: 'Lakefront Water Damage Restoration',
    body:
      'Extraction, structural drying, and content pack-out for homes directly on Lake Orion, Long Lake, Judah Lake, Lake Voorheis, Lake Sixteen, and Square Lake — including shoreline cottages and walkout basements where the water table sits inches below the slab.',
  },
  {
    title: 'Cottage Conversion Mitigation',
    body:
      'Drying, dehumidification, and selective demo in 1920s-1960s lake cottages converted to year-round use. We work around legacy galvanized supply lines, fieldstone foundations, and thin-insulated wall cavities that behave nothing like a modern build.',
  },
  {
    title: 'Frozen Pipe & Burst Line Response',
    body:
      'February cold-snap ruptures in under-insulated cottage attics, crawlspaces under Keatington ranches, and exterior walls of 1970s Orion Oaks colonials. Water shutdown, plumber coordination, ceiling and wall drying.',
  },
  {
    title: 'Sump Pump Failure Cleanup',
    body:
      'Spring-melt sump failures in inland subdivisions and GM-worker housing near Orion Assembly. Category 1 or Category 2 clean-up depending on source, plus discharge-line and battery-backup recommendations.',
  },
  {
    title: 'Commercial Water Mitigation',
    body:
      'Sprinkler discharges, roof leaks, and plumbing failures in Broadway Street retail, downtown Lake Orion offices, and industrial buildings near the GM Orion Assembly Plant campus. After-hours dispatch available.',
  },
  {
    title: 'Mold Remediation & Reconstruction',
    body:
      'Containment and removal of mold behind cottage paneling, under lake-home subfloors, and inside fieldstone basement walls — then drywall, flooring, trim, and cabinetry rebuild under the same roof.',
  },
]

const faqs = [
  {
    q: 'Our lakefront cottage had a pipe burst while we were away — how bad could it get?',
    a: 'Lake-cottage pipe bursts while the home is unoccupied are some of the worst losses we respond to. At the 48-hour mark you are typically looking at saturated subfloor, warped hardwood, wet insulation in every exterior wall the line crosses, and the beginning of microbial growth along the baseboards. By day five, drywall is wicking, fasteners are rusting, and mold colonies are visible. By two weeks, structural framing starts to show decay in the worst areas and the smell is unmistakable. The single biggest variable is when the water was shut off. If a neighbor catches it in the first 12 hours, we can often dry in place with minimal demo. If nobody noticed for a week, expect a full gut of the affected zones. Either way, call the moment you discover it — even an overnight head start on drying changes the scope dramatically.',
  },
  {
    q: 'The seawall along our Lake Orion property has a crack and lake water gets into the basement. Is that covered?',
    a: 'Typically, no — at least not under a standard homeowner policy. Carriers generally treat seawall failure and long-term lake-water infiltration as a maintenance or gradual-seepage issue, both of which are common exclusions. There are exceptions: a sudden event (a tree-fall impact cracking the seawall, for example) may be covered, and some lakefront owners carry NFIP flood policies or specific water-intrusion endorsements that fill the gap. We document the loss thoroughly either way and give you everything you need to have the conversation with your carrier. The restoration work — extraction, drying, affected-material removal, and mold prevention — can be paid out of pocket if the claim is denied. We provide a clear scope and price before any demo happens.',
  },
  {
    q: 'Our converted 1940s cottage has fieldstone basement walls — can you actually dry those?',
    a: 'Yes, and we do this often in the Lake Orion area. Fieldstone (and early concrete-block) cottage foundations are porous and weep through the mortar joints. Standard dehumidifier placement does not move moisture out of that kind of assembly fast enough. We deploy low-grain-refrigerant (LGR) dehumidifiers, direct air movement at the wall face, and use penetrating moisture meters rather than surface meters to verify dryness inside the stone. If the walls have been parged or painted (which traps moisture), we often need to open small inspection areas to confirm the assembly is drying behind the coating. The process takes longer than drying a modern poured-wall basement — typically five to eight days instead of three — but it absolutely works.',
  },
  {
    q: 'How fast can you reach the village of Lake Orion from Bloomfield?',
    a: 'Our office is at 4060 W Maple Rd in Bloomfield Township. From there, most Lake Orion addresses are about 25 minutes up M-24 (Lapeer Rd), or via Baldwin Road if we are coming from a job further east. Roughly 17 miles. On an active water loss we dispatch the nearest available crew 24/7 — if a truck is already on a job in Oakland Township or Rochester Hills, it may be even closer to you than our office is.',
  },
  {
    q: 'GM Orion Assembly had a sprinkler event in a nearby building — can you handle a commercial job that size?',
    a: 'Yes. We run commercial-capacity extraction and dehumidification equipment and regularly respond to sprinkler discharges, supply-line failures, and roof leaks in commercial and light-industrial buildings. For GM Orion Assembly plant-adjacent facilities (suppliers, logistics operations, office buildings) we can deploy truck-mount extractors, desiccant dehumidifiers, and enough air movers to dry a warehouse footprint. We coordinate with the facility manager, the carrier, and any third-party consultant your property management team has retained.',
  },
  {
    q: 'Lake Orion rose a foot last spring and our basement flooded — does that count as flood or water damage?',
    a: 'That is almost always treated as a flood event by insurance carriers, which means standard homeowner policies typically exclude it. If you carry an NFIP (National Flood Insurance Program) policy or a private flood policy, you have coverage — but the settlement, limits, and depreciation schedule are different from a standard water-damage claim. We can document the loss for either type of claim, but the recovery path depends entirely on which policies are in force. If you own lakefront on Lake Orion and do not currently carry flood insurance, it is worth a conversation with your agent before the next spring.',
  },
  {
    q: 'We have a boathouse with a small living space and sleeping loft. Do you work on those?',
    a: 'Yes. Lake Orion has a lot of boathouses with finished upper-level living quarters — they are often the most personal spaces on a lakefront property. We handle water damage in boathouses the same way we handle any other small structure: extract, dry, remove damaged finishes, treat for microbial growth, and rebuild. The one difference is we pay extra attention to structural drying of any framing members that continue down to a dock deck or water-adjacent pier, because those members live in a higher-humidity environment to begin with and are more likely to hold residual moisture.',
  },
  {
    q: 'Our downtown Lake Orion apartment got hit by an upstairs leak — the building is from 1908. Can you work in historic structures?',
    a: 'Yes, and we do this in several historic downtowns in Oakland County. The big consideration in 1900s-era buildings along Broadway and Flint Street is that interior walls are typically plaster on wood lath, not drywall. Plaster responds to water very differently — it can delaminate from the lath, lose its keys, and appear fine on the surface while being structurally compromised behind. We use moisture meters that read through plaster, dry where possible, and when removal is needed we do careful selective demo to preserve original trim, baseboards, and wood flooring. If historic features are load-bearing on the repair cost, we flag that early so the carrier has the right scope.',
  },
  {
    q: 'Our 1970s Keatington ranch had a sump pump failure during heavy rain — water everywhere in the finished basement. Where do you even start?',
    a: 'First call is to a plumber or sump-pump service to get a working pump back in — even a temporary portable pump buys us the ability to start. From there: extract standing water with truck-mount equipment, pull baseboard and a few inches of drywall to check wall cavities, lift and inspect carpet pad (carpet itself may be salvageable, pad almost never is), set LGR dehumidifiers and air movers, and monitor moisture daily. Most Keatington-era basements dry in three to five days. We also document the pump failure for your claim, including photos of the failed unit and the water line — that is often what the carrier asks for first.',
  },
]

const trustPoints = [
  '24/7 dispatch up M-24 to Lake Orion and Orion Township',
  'Lakefront experience — cottages, seawalls, walkouts, boathouses',
  'IICRC S500/S520 standards with full moisture documentation',
  'Direct insurance billing and Xactimate estimates',
  'In-house reconstruction — no hand-off to a separate builder',
]

const scenarios = [
  {
    n: 'Lakefront 1952 converted cottage — February pipe burst',
    d: 'Galvanized supply line in an uninsulated crawl under a converted cottage froze and split during a cold snap. Water ran for roughly 14 hours before a neighbor noticed. Full extraction, removal of 1960s paneling, LGR drying of fieldstone walls, and reconstruction with modern PEX-compatible framing.',
  },
  {
    n: 'Rental adjacent to GM Orion Assembly — kitchen fire',
    d: 'Tenant had a small cooking fire — the fire department knocked it out quickly, but the water from suppression migrated into the unit below and into shared wall cavities. Smoke plus water is a layered job: we dry first, then deodorize, then rebuild. Worked with the landlord\'s carrier directly.',
  },
  {
    n: 'Downtown Lake Orion historic building — apartment leak',
    d: 'Second-floor apartment on Broadway had a bathroom supply-line failure that ran through the plaster ceiling into the first-floor retail space. Preserved original tin ceiling detail and plaster crown, selectively demoed only the saturated section, dried with targeted air movement.',
  },
  {
    n: 'Keatington subdivision 80s ranch — sump pump failure',
    d: 'Primary sump failed during a heavy spring rain with no battery backup. Six inches of water in a finished basement, affected carpet, pad, baseboards, and the lower sixteen inches of drywall. Full Category 2 cleanup, structural dry-down, and reconstruction.',
  },
  {
    n: 'Lake Orion seawall crack — ice-out basement infiltration',
    d: 'Spring ice-out on the lake pushed water through an undiagnosed seawall crack into a lakefront walkout basement. Because the event was gradual, the homeowner\'s carrier declined coverage. We restored out-of-pocket on an agreed scope and helped the homeowner get the seawall repaired before the next freeze.',
  },
  {
    n: 'Orion Township walkout on Paint Creek headwaters',
    d: 'Heavy rain saturated the grade above a walkout lower level near the Paint Creek headwaters. Surface water intrusion at the sill plate, wet insulation in two adjacent bedrooms, and early mold growth in the wall cavity. Demo, antimicrobial treatment, drying, and rebuild.',
  },
]

export default function LakeOrionPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', color: colors.text }}>
      <SiteHeader />

      {/* Hero */}
      <section style={{ backgroundColor: colors.bgAlt, padding: '72px 0 64px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: colors.accent,
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            Lakefront & 24/7 Response — Lake Orion, MI
          </div>
          <h1
            className="font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.6px',
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Lake Orion Water Damage Restoration — Cottages, Lake Homes, and Inland Subdivisions
          </h1>
          <p
            className="mx-auto mb-8"
            style={{ color: colors.secondary, fontSize: '1.15rem', maxWidth: 760, lineHeight: 1.55 }}
          >
            Provail Restoration of Bloomfield covers the lake itself, the village of Lake Orion, and all of
            Orion Township — from converted lakefront cottages and 1990s custom lake homes to Keatington,
            Eagle Pointe, Orion Oaks, and the neighborhoods around the GM Orion Assembly Plant. About 25
            minutes up M-24 from our Bloomfield Township office, 24 hours a day.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* The Village, the Township, and the Lake */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="What We Cover"
            title="The village, the township, and the lake"
          />
          <div style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: 1.75 }}>
            <p className="mb-5">
              &ldquo;Lake Orion&rdquo; is actually three places people mean interchangeably, and our crews
              respond to all three. There is the <strong>Village of Lake Orion</strong> — the small historic
              downtown with Broadway Street, Flint Street, the Children&apos;s Park, and the older homes
              radiating out from the village core. There is <strong>Orion Township</strong> — the roughly
              36,000-resident area surrounding the village, including Keatington, Eagle Pointe, Orion Oaks,
              the Bald Mountain Recreation Area, and the GM Orion Assembly Plant campus to the north. And
              there is <strong>Lake Orion itself</strong> — the lake — a major residential lakefront with
              hundreds of homes directly on the water.
            </p>
            <p className="mb-5">
              It matters because the housing stock and water-damage patterns are different in each. The
              village has 1880s-1920s downtown homes with plaster walls and older foundations. The lakefront
              has a mix of 1920s-1960s converted cottages and 1990s-2020s teardown-and-rebuild lake homes.
              Inland Orion Township is dominated by 1970s-2000s family subdivisions with full basements and
              modern sump systems. A seawall failure on the lake, a frozen supply line in a village
              bungalow, and a sump-pump-backed flood in a Keatington ranch all look completely different
              under our moisture meters.
            </p>
            <p>
              We treat the three contexts as one service area because that is how residents actually live.
              A family in Keatington owns a lakefront cottage on Long Lake. A retiree in a downtown village
              Victorian has a rental property on the big lake. Our dispatch does not care which ZIP
              (48362, 48360, or 48359) you are in — we care where your water is and how fast we can get a
              truck to it.
            </p>
          </div>
        </div>
      </section>

      {/* Lakefront dedicated section */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Lakefront"
            title="Water damage on the lake is different. Here is how."
          />
          <div style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: 1.75 }}>
            <p className="mb-5">
              The single biggest source of lakefront water damage we see on Lake Orion is
              <strong> seawall and retaining-wall failure</strong>, particularly in spring. Ice heave through
              the winter puts enormous pressure on seawalls — sheet-pile, concrete, and timber all flex and
              crack under repeated freeze-thaw cycles. When the ice lets go in March and April and the lake
              level rises with spring rain, any crack that opened up over the winter becomes a direct path for
              lake water into the basement or walkout. The damage is usually Category 1 (clean water) initially
              but trends toward Category 2 quickly because the water is carrying sand, silt, and organic matter
              off the lake bottom.
            </p>
            <p className="mb-5">
              The second big category is <strong>converted cottage issues</strong>. Hundreds of homes on Lake
              Orion started life as 1920s-1960s summer cottages and were converted to year-round residences
              over the following decades. The conversions were rarely complete. Original galvanized supply
              lines run through crawlspaces that are better insulated than they were in 1950 but not
              meaningfully insulated by modern standards. Cast-iron waste lines corrode quietly for fifty
              years, then let go in one dramatic moment. Subfloors that were perfectly adequate for a summer
              cabin are not sized for year-round living with modern bathrooms. When water hits these houses,
              the failure path is almost always down the original construction, not the new work.
            </p>
            <p className="mb-5">
              <strong>Boathouse water damage</strong> is its own category. Many Lake Orion lakefront
              properties have boathouses with electrical, small kitchens, sleeping lofts, or even full
              living spaces above the slip. These structures sit over water by design, which means the
              humidity baseline is already high. A supply-line leak or roof failure in a boathouse gets more
              serious faster than the same loss in a detached garage, because the framing is already living
              at a higher moisture content. We adjust drying targets accordingly.
            </p>
            <p className="mb-5">
              Finally, <strong>lake-rise basement flooding</strong>. Lake Orion can rise one to two feet above
              its typical level after a heavy spring. For lakefront homes with walkout basements at an elevation
              close to the waterline, that rise pushes groundwater up through the soil around the foundation
              and into the basement through cold joints and utility penetrations. This is almost always
              treated as flood (not water damage) by insurance carriers, which is worth knowing before you need
              the policy.
            </p>
            <p>
              What changes about our process on lakefront jobs: we pull carpet pad early because sand gets into
              it and will not come out with drying alone; we pay closer attention to structural drying of
              members adjacent to docks and piers that live in high-humidity conditions year-round; and we
              watch for lake-borne contamination markers that would shift a job from Category 1 to Category 2
              and trigger different demo thresholds under IICRC S500.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios grid */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Lake Orion Scenarios"
            title="Real jobs in Lake Orion and Orion Township"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((item) => (
              <div
                key={item.n}
                className="p-6 rounded-xl"
                style={{ border: `1px solid ${colors.border}` }}
              >
                <h3 className="font-semibold text-[17px] mb-2" style={{ color: colors.text }}>
                  {item.n}
                </h3>
                <p className="text-[15px] m-0" style={{ color: colors.secondary, lineHeight: 1.6 }}>
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cottage vs year-round */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Cottage vs Year-Round"
            title="Drying a cottage is not the same as drying a modern lake home"
          />
          <div style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: 1.75 }}>
            <p className="mb-5">
              Two houses a hundred feet apart on the same Lake Orion shoreline can take completely different
              approaches to the same water loss. A 1940s converted cottage with thin wall insulation, original
              wood paneling, pine subfloor, and fieldstone or early-block basement walls behaves like a sponge
              that air-dries quickly but holds moisture in the stone assembly for a long time. A 2008 custom
              lake home with closed-cell foam, engineered hardwood over OSB, and a modern poured-wall basement
              behaves like a sealed box: water stays exactly where it lands, insulation holds moisture for
              weeks if not extracted, and the modern finishes are far less forgiving of slow drying.
            </p>
            <p className="mb-5">
              On <strong>cottages</strong>, we lean toward open drying with aggressive dehumidification, do
              more careful inspection of stone and block assemblies with penetrating meters, and are less
              aggressive about full demolition of finishes that were never expensive to begin with. On
              <strong> modern lake homes</strong>, we move faster on demo decisions — closed-cell foam has
              to come out if it is wet because it will not dry in place, and engineered wood products either
              dry in the first 48 hours or they are a loss.
            </p>
            <p>
              The other real difference is how carriers treat the two. Modern lake homes are typically insured
              at replacement cost with high coverage limits. Older cottages are sometimes underinsured, or on
              actual-cash-value policies where depreciation hits harder. We flag this early so the homeowner
              knows whether the claim is going to cover the scope or leave a gap — and so we can design a
              scope that hits the coverage limit without compromising the drying standard.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Services"
            title="Water-focused restoration for Lake Orion"
            intro="Every service below is something we do regularly in the village, the township, and on the lake itself."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-6 rounded-xl"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 4px 10px',
                }}
              >
                <h3 className="font-semibold text-[18px] mb-2" style={{ color: colors.text }}>
                  {s.title}
                </h3>
                <p className="text-[15px] m-0" style={{ color: colors.secondary, lineHeight: 1.6 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lake Orion Calls Us */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why Lake Orion Calls Us"
            title="Three reasons our phone rings from lakefront addresses"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: 'We actually understand cottage construction',
                b: 'Fieldstone walls, galvanized lines, thin wall cavities, 1950s subfloors — the quirks of converted cottages are not a surprise to our crews. We do not try to dry them like a modern build and we do not over-demo things that will dry on their own.',
              },
              {
                t: 'Lakefront-specific experience',
                b: 'Seawall infiltration, sand in carpet pad, elevated-humidity structural drying near docks, boathouse finishes, lake-rise groundwater — the lakefront conditions that break generic playbooks are things we plan for from the first call.',
              },
              {
                t: '25 minutes up M-24, not a call center',
                b: 'Our dispatch is our own people in Bloomfield, not a national routing service. The truck that shows up is a crew we know. The phone you call is answered by someone who can tell you how far out the nearest available unit is, right now.',
              },
            ].map((c) => (
              <div
                key={c.t}
                className="bg-white p-6 rounded-xl"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 4px 10px',
                }}
              >
                <h3 className="font-semibold text-[17px] mb-2" style={{ color: colors.text }}>
                  {c.t}
                </h3>
                <p className="text-[15px] m-0" style={{ color: colors.secondary, lineHeight: 1.6 }}>
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust list */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading eyebrow="What to Expect" title="Standards we work to on every Lake Orion job" />
          <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((t) => (
              <li
                key={t}
                className="bg-white p-5 rounded-lg text-[15px]"
                style={{
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <span style={{ color: colors.accent, fontWeight: 700, marginRight: 8 }}>✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="FAQ"
            title="Lake Orion questions, answered"
          />
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="p-5 rounded-lg"
                style={{ border: `1px solid ${colors.border}`, backgroundColor: '#fff' }}
              >
                <summary
                  className="font-semibold cursor-pointer text-[16px]"
                  style={{ color: colors.text, listStyle: 'none' }}
                >
                  {f.q}
                </summary>
                <p className="mt-3 mb-0 text-[15px]" style={{ color: colors.secondary, lineHeight: 1.65 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby links */}
      <section style={{ padding: '56px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <p className="text-[13px] uppercase tracking-wide font-semibold mb-3" style={{ color: colors.accent }}>
            Nearby Service Areas
          </p>
          <p className="text-[15px]" style={{ color: colors.secondary, lineHeight: 1.7 }}>
            <a href="/oakland-township-mi-water-damage-restoration" style={{ color: colors.text, textDecoration: 'underline' }}>
              Oakland Township water damage
            </a>{' '}·{' '}
            <a href="/rochester-hills-mi-water-damage-restoration" style={{ color: colors.text, textDecoration: 'underline' }}>
              Rochester Hills water damage
            </a>{' '}·{' '}
            <a href="/services/frozen-pipe-repair" style={{ color: colors.text, textDecoration: 'underline' }}>
              Frozen pipe repair
            </a>{' '}·{' '}
            <a href="/services/sump-pump-failure" style={{ color: colors.text, textDecoration: 'underline' }}>
              Sump pump failure
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', backgroundColor: colors.text }}>
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h2
            className="font-bold mb-4"
            style={{
              color: '#fff',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.5px',
            }}
          >
            Water in your Lake Orion home or cottage?
          </h2>
          <p className="mb-8 mx-auto" style={{ color: '#c9c9c9', fontSize: '1.1rem', maxWidth: 600 }}>
            A Bloomfield crew is 25 minutes up M-24. We dispatch 24/7 to the village, the township, and
            every lakefront on Lake Orion. The earlier we get there, the smaller the job.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 font-semibold text-base no-underline"
            style={{
              backgroundColor: colors.accent,
              color: '#fff',
              borderRadius: '8px',
              padding: '0 32px',
              height: '56px',
            }}
          >
            Call {PHONE}
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
