import { SiteHeader, SiteFooter, PillarSectionHeading } from '../_components/site-chrome'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL =
  'https://provailrestoration.com/shelby-township-mi-water-damage-restoration'

const C = {
  accent: '#ff385c',
  text: '#222222',
  secondary: '#6a6a6a',
  white: '#ffffff',
  bgAlt: '#f7f7f7',
  border: '#ebebeb',
  dark: '#222222',
}

const scenarios = [
  {
    title: 'Cherry Creek Finished Basement — April 2026 Storm Sump Failure',
    desc: 'When the April 2026 storm band rolled across Macomb County, our dispatch took a cluster of calls out of Cherry Creek within a two-hour window. The pattern was identical from house to house: single primary sump, no battery backup, power blip during the heaviest rain band, and four to eight inches of standing water across a fully finished lower level by the time the homeowner got downstairs. Carpet, pad, baseboards, the bottom two feet of drywall, and anything sitting on the floor all had to be handled. We staged multiple truck-mounted extractors on the street, ran parallel drying plans across the block, and got families back to dry subfloors inside five days.',
  },
  {
    title: 'Clinton River Floodplain — River Bends Park Rim-Joist Intrusion',
    desc: 'Homes that back up to the Clinton River near River Bends Park and along the low ground east of Mound Road see a different kind of water intrusion than the rest of the township. During extended spring rain events, the river crests above the normal banks and groundwater pushes up against foundation walls from the outside. The water often enters at the rim joist, seeps down the inside of the block, and soaks the sill plate and bottom of the wall cavities before anyone notices. We pull affected insulation, dry the rim-joist cavity with directed airflow, and document a Category 2 loss for the carrier.',
  },
  {
    title: 'Plumcrest 1990s Colonial — Single Sump, No Backup',
    desc: 'Plumcrest and the 1990s subdivisions along 24 Mile and 25 Mile were built during the era when one primary sump pump was considered plenty. Thirty years later, that original pump is long past its service life, and the batteries that should be standard on a backup system were never installed in the first place. When the pump quits during a two-inch rain event, the finished rec room floods. We extract, cut the drywall to a dry line, dry the framing, and hand the homeowner a scope that includes the sentence we repeat on every one of these calls: get a battery backup installed before the reconstruction closes up.',
  },
  {
    title: '25 Mile Road Corridor — Combined-Sewer Floor-Drain Backup',
    desc: 'The older sanitary infrastructure along portions of 23 Mile, 25 Mile, and the Van Dyke corridor in southern Shelby Township includes sections that surcharge during heavy rain events. When the main backs up, it pushes waste water up through basement floor drains and laundry tubs — the classic Macomb County sewer backup call. This is Category 3 water by definition. We respond with PPE, contained extraction, aggressive antimicrobial treatment, and full removal of any porous materials that contacted the water. Every floor-drain backup call we run gets photographed and documented for the sewer-backup endorsement conversation.',
  },
  {
    title: 'Shelby Forest — Frozen Supply Line During February Cold Snap',
    desc: 'Shelby Forest and the mid-90s subdivisions near Schoenherr have long exterior wall runs feeding second-floor bathrooms. When overnight temperatures drop below zero and the garage-wall plumbing freezes, a pinhole split in the copper can dump water for hours before anyone hears the drip in the ceiling below. We find the split, cut out saturated drywall and insulation, dry the wall cavity and the ceiling assembly underneath, and coordinate with a plumber for the pipe repair. February frozen-pipe calls in Shelby Forest are a yearly occurrence, not an edge case.',
  },
  {
    title: 'Stony Creek-Adjacent Luxury Build — Radiant-Slab Water Intrusion',
    desc: 'The luxury new builds backing up to Stony Creek Metropark along 26 Mile often include radiant-floor heating on the lower level and engineered assemblies that dry very differently from older subdivision construction. When water intrudes during the construction phase — a failed ice-maker supply line, a copper joint that lets go behind the finished mechanical room, or rain entering before the roof was dried in — the drying plan has to account for the slab, the sleeper system if one is installed, and the engineered flooring stack above. We work directly with the builder and the homeowner to dry without pulling up the entire assembly.',
  },
]

const services = [
  {
    title: 'Water Extraction & Structural Drying',
    desc: 'The core call across Shelby Township. Truck-mounted extraction for standing water, LGR dehumidifiers sized to finished-basement volumes, and daily moisture readings logged against IICRC dry standards. We dry the structure — not just the surface.',
  },
  {
    title: 'Fire & Smoke Damage Restoration',
    desc: 'Kitchen fires and garage-stored-item fires are the two most common residential fire calls we respond to in Shelby Township. Soot and odor in a tight modern envelope behave differently than in older homes — we use HEPA filtration, thermal fogging, and appropriate cleaning chemistry for the finishes.',
  },
  {
    title: 'Storm Damage & Wind-Driven Rain',
    desc: 'After a Macomb County severe storm — straight-line winds, hail, or the wind-driven rain events that push water under shingles and around window frames — we handle tarp-up, water extraction, and full envelope drying before mold sets in.',
  },
  {
    title: 'Mold Remediation',
    desc: 'Finished basements in Shelby Township subdivisions are heavily carpeted and finished, which means mold from prolonged moisture settles in quickly. We run containment, HEPA air scrubbing, and IICRC S520 protocols on every remediation, with post-remediation verification samples when the carrier requires them.',
  },
  {
    title: 'Sewage & Category 3 Water Cleanup',
    desc: 'The Macomb County combined-sewer sections surcharge during heavy rain. When waste water comes up through a floor drain or laundry tub, the entire contacted area is Category 3. We run full containment, PPE protocol, antimicrobial treatment, and porous-material removal.',
  },
  {
    title: 'Reconstruction After Mitigation',
    desc: 'When the drying is done and the drywall and flooring need to come back, we handle it. Drywall, paint, trim, flooring, and finish carpentry matched to the 1990s-subdivision construction standard most Shelby Township homes were built to. One contractor, one scope, no handoffs that fall through.',
  },
]

const trust = [
  {
    title: 'Closer Than People Think — ~25 Minutes via M-59',
    body: 'Our Bloomfield Township office at 4060 W Maple is about 16 miles from Shelby Township. Eastbound M-59 to Dequindre and we are in Cherry Creek. Most homeowners assume we are too far — we are not.',
  },
  {
    title: 'Fluent in Macomb County Insurance Patterns',
    body: 'Auto-Owners, Hanover, Citizens, AAA — the carrier mix in Macomb is distinct from Oakland. We know which adjusters read drying logs, which want itemized Xactimate scopes, and how sewer-backup endorsements read on the policy declaration pages.',
  },
  {
    title: 'We Serve the Whole Metro, Not Just One County',
    body: 'The idea of a "Bloomfield-only" restoration company is a geographic fiction. Water losses do not stop at the county line. We dispatch to both sides of the Dequindre and we handle the permit, utility, and school-district differences without skipping a step.',
  },
]

const faqs = [
  {
    q: 'How fast can you get to our house in Cherry Creek from Bloomfield?',
    a: `From 4060 W Maple Rd we take Square Lake east to M-59, run east on M-59 across Dequindre into Shelby Township, and pick up 25 Mile or Schoenherr to reach Cherry Creek. In normal traffic we are in your driveway in roughly 25 minutes. During widespread storm events we stage multiple crews east of Dequindre so that no single Shelby Township address waits behind an Oakland County call. Target door-to-door response is 30 to 45 minutes. Call ${PHONE} and the dispatcher will tell you which crew is closest and give you a real ETA.`,
  },
  {
    q: 'Our Plumcrest subdivision had a block-wide sump pump failure during the storm — do you coordinate multi-home response?',
    a: `Yes. When a whole block loses power during a storm and every primary sump quits at roughly the same time, we stage equipment on the street rather than moving between houses. A typical Plumcrest or Cherry Creek multi-home response involves two or three trucks parked together, shared generator capacity for homes that are still dark, and sequenced extraction starting with whichever basement has the most standing water. We dry the subdivision block by block rather than making each family wait for a single truck to finish the previous house. Document your damage with photos before we arrive — that paperwork matters for the claim.`,
  },
  {
    q: 'Is a basement flood from sewer backup covered by Auto-Owners or do we need a sewer rider?',
    a: 'Sewer and drain backup is typically excluded from the base HO-3 policy and requires a separate endorsement. Auto-Owners, Hanover, Citizens, and AAA all offer sewer-backup endorsements with varying limits — commonly $5,000, $10,000, or $25,000 of coverage. If you have ever had water come up through a Shelby Township floor drain, you want the endorsement. Check your declarations page under "endorsements" or "optional coverages." Coverage decisions always belong to you and your carrier. Our job is to document the loss cleanly so your claim has the technical record attached — moisture readings, photos, Category 3 protocols, and a written scope.',
  },
  {
    q: 'We have Consumers Energy not DTE — does that affect your response?',
    a: `Not in any meaningful way. Macomb County is mostly Consumers Energy service territory for both electric and natural gas, while Oakland County is split between DTE and Consumers. We work with both utilities routinely. If a water loss requires a gas shutoff at the meter or a power disconnect at the mast, we know the Consumers Energy emergency number, the Consumers locate procedure for work near underground gas lines, and the typical response window for a restoration-related utility coordination in Shelby Township. The utility is a detail, not a barrier.`,
  },
  {
    q: 'Our Utica Schools district home flooded — can you keep the work site safe for kids?',
    a: `Yes. Utica Community Schools covers most of Shelby Township and the work-site-with-kids-at-home conversation is one we have on nearly every residential job. We run full containment with six-mil plastic sheeting between the affected area and the rest of the house, HEPA-filtered air scrubbers to keep particulate from migrating, and physical barriers at stairways and doorways so that children cannot access the drying zone. If the work requires extended displacement — typically the case with Category 3 sewer backups or large finished-basement losses — we can coordinate with your adjuster on additional living expenses coverage so the family is not sleeping in the work site.`,
  },
  {
    q: 'Does your Bloomfield office handle Macomb County building permits?',
    a: `Yes. We pull permits in both Oakland and Macomb counties and we work with the Shelby Township building department at the town hall on 25 Mile Road. The permit requirements, inspection schedule, and submittal process are different from Bloomfield Township — we know the differences. For a typical water damage reconstruction scope in Shelby Township involving drywall, flooring, and trim, permits are usually required once the electrical or plumbing is touched. We handle the paperwork, coordinate the inspections, and pull the final sign-off so the job closes cleanly.`,
  },
  {
    q: 'How long to dry a 2,400 sqft finished basement in Shelby Forest?',
    a: `For a clean-water loss — a failed sump or supply-line break that caught quickly — a 2,400 sqft finished basement typically dries in three to five days with adequate equipment. That is roughly six to ten LGR dehumidifiers plus fifteen to twenty air movers, running continuously, with daily moisture readings tracked against target dry standards for the specific materials on site. Drywall dries faster than framing, framing dries faster than concrete, and concrete dries faster than the pad and carpet stack if any of it is left in place. If the loss is Category 3 or the water sat for more than 48 hours before extraction, the timeline extends because porous materials have to come out before drying starts.`,
  },
  {
    q: 'Clinton River backed up near River Bends — is that flood or homeowners?',
    a: `This is the question that trips up almost every homeowner near the Clinton River floodplain. Surface water that entered the home because the river overtopped its banks is considered flood damage under insurance definitions, which means it is covered by an NFIP flood policy — not standard homeowners. Water that came through the rim joist or foundation wall due to elevated groundwater is also typically categorized as flood. Homeowners policies generally cover sudden and accidental events originating inside the home — burst pipes, failed appliances, sump-pump backup with the proper endorsement. If you live near River Bends Park, Holland Ponds, or the Clinton River corridor and you do not have an NFIP policy, that is a conversation worth having with your agent before the next heavy rain event. We document the physical source of the water carefully on every Shelby Township loss so the coverage question is grounded in evidence.`,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://provailrestoration.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Service Areas',
      item: 'https://provailrestoration.com/#areas',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Shelby Township, MI',
      item: PAGE_URL,
    },
  ],
}

export default function ShelbyTownshipPage() {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: C.text,
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

      {/* HERO */}
      <section
        style={{
          backgroundColor: '#111',
          padding: '80px 24px 96px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(34,34,34,0.8) 60%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: 1120,
            margin: '0 auto',
            color: C.white,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              backgroundColor: 'rgba(255,56,92,0.15)',
              color: C.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            24/7 Macomb County Response — Shelby Township, MI
          </div>
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              margin: '0 0 20px',
              maxWidth: 820,
            }}
          >
            Water Damage Restoration in Shelby Township, MI — From Stony Creek to the Clinton River
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              margin: '0 0 32px',
              maxWidth: 720,
            }}
          >
            {BUSINESS_NAME} dispatches to Shelby Township 24 hours a day from
            our office at 4060 W Maple Rd — roughly 16 miles west via M-59,
            about a 25-minute run to Cherry Creek, Shelby Forest, and the
            Clinton River corridor. We are a Macomb-County-competent
            restoration contractor working fluently on both sides of the
            Dequindre line, with crews trained on the specific subdivision
            sump-pump density, combined-sewer backup patterns, and floodplain
            intrusion that define water damage in Shelby.
          </p>
          <a
            href={PHONE_HREF}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 32px',
              backgroundColor: C.accent,
              color: C.white,
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Call Now: {PHONE}
          </a>
        </div>
      </section>

      {/* CROSSING THE DEQUINDRE LINE */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Oakland to Macomb"
            title="Crossing the Dequindre Line Into Shelby Township"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Dequindre Road is the county line. On the Oakland County side you
            are in Rochester Hills. Cross Dequindre heading east and the rules
            change — the utility changes, the school district changes, the
            building department changes, and the carrier mix on the policies
            sitting in the kitchen drawer changes too. A restoration contractor
            that works only one side of that line is going to fumble the
            details on the other side. We do not.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Shelby Township is served primarily by Consumers Energy for electric
            and natural gas — not DTE, which runs most of Oakland County. The
            school district is Utica Community Schools, one of the largest
            districts in Michigan, not Rochester Community. Building permits
            route through the Shelby Township Building Department at the town
            hall on 25 Mile Road, which has its own submittal process and
            inspection schedule that does not match Bloomfield Township or
            Rochester Hills. And the carrier mix across Macomb leans heavily
            toward Auto-Owners, Hanover, Citizens, and AAA in proportions that
            are distinctly different from what we see on the Oakland side.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {BUSINESS_NAME} operates fluently in both counties. Our crews pull
            permits in Shelby Township and Bloomfield Township in the same
            week. Our dispatchers know to call Consumers for a gas shutoff on a
            25 Mile address and DTE for the same shutoff on a Rochester Hills
            address a mile to the west. The small operational details are the
            ones that matter when water is coming into a finished basement at
            2 AM and the clock is running.
          </p>
        </div>
      </section>

      {/* SHELBY WATER DAMAGE PATTERNS */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Local Patterns"
            title="Shelby Township Water Damage Patterns"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            The Clinton River cuts east-west through the southern half of the
            township and defines the first pattern we see. Houses along the
            25 Mile and 26 Mile stretch east of Mound Road, and particularly
            the properties near River Bends Park and the low ground around
            Holland Ponds, sit in or near the Clinton River floodplain. When
            the river crests during extended spring rain, groundwater pressure
            on foundation walls spikes, surface water finds the low points in
            the yard, and intrusion at the rim joist is the most common
            entry path we document.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            The second pattern is subdivision sump-pump density. The 1990s and
            early 2000s were Shelby Township's big build-out decade — Cherry
            Creek, Plumcrest, Shelby Forest, Brookshire, Villas of Cherry
            Creek, Andersonville, Cheyenne Trails, The Preserve at Stony Creek.
            These neighborhoods were built on clay soils with a high water
            table, which means almost every home has a sump pit. But the vast
            majority were built with a single primary pump and no battery
            backup. Thirty years on, those original pumps are at or past end
            of life, and the 90-second power blip that happens during a heavy
            thunderstorm is enough to put water in the finished basement.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            The third pattern is combined-sewer backup. Sections of the older
            sanitary infrastructure along 23 Mile Road, the Van Dyke corridor,
            and portions of southern Shelby closer to the Utica line include
            combined-sewer segments that surcharge during heavy rain events.
            When the main backs up under rain load, the pressure pushes waste
            water up through the path of least resistance — which is often a
            basement floor drain or laundry tub. These are always Category 3
            losses. The sewer-backup endorsement on a homeowners policy is the
            single most important coverage decision families in this corridor
            make, and many of them only find that out after the first backup.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            The April 2026 storm system that crossed Macomb County put
            measurable pressure on all three of these patterns at once. Our
            Shelby Township call volume during the 72 hours following the
            storm was one of the highest concentrations we have logged in any
            single ZIP code footprint — Cherry Creek sump failures stacked on
            top of 23 Mile floor-drain backups stacked on top of Clinton River
            rim-joist intrusion. The storm did not create new patterns. It
            revealed the ones that were already there.
          </p>
        </div>
      </section>

      {/* SHELBY SCENARIOS */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Shelby Scenarios"
            title="Water Damage Scenarios We Work Across Shelby Township"
            intro="Six real call types from the subdivisions, roads, and landmarks that define this township — and how we actually run each one."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {scenarios.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: C.white,
                  borderRadius: 12,
                  padding: '28px 26px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 12px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: C.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Full Restoration Scope"
            title="Services for Shelby Township Homeowners"
            intro="Water is our lead service in Shelby, but a single loss often pulls in fire, mold, sewage, storm, or reconstruction work. One contractor, one scope."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: C.white,
                  borderRadius: 12,
                  padding: '28px 26px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 12px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: C.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING ACROSS COUNTY LINES */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Operational Details"
            title="Working Across County Lines"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Pulling a permit in Shelby Township is a different process than
            pulling one in Bloomfield. The Shelby Township Building Department
            at the town hall on 25 Mile Road has its own submittal
            requirements, inspector schedule, and rebuild standards that we
            work within on every reconstruction scope. For a water-damage
            rebuild that touches drywall, flooring, and trim without altering
            electrical or plumbing, many jobs move on a homeowner repair
            affidavit. Once the scope touches a panel, a fixture, or a supply
            line, we pull the permit, coordinate the rough and final
            inspections, and close it out before we invoice the carrier.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Utica Community Schools serves most of Shelby Township, and every
            residential water-damage call we take during the school year has
            children in the house at some point. Keeping the drying area
            contained — six-mil plastic sheeting sealed to the framing at
            floor and ceiling, HEPA air scrubbers running negative pressure,
            physical barriers at stairways — is how we keep particulate out of
            the living space and keep kids safely on the other side of the
            work. If a family needs to displace for a few nights during a
            Category 3 cleanup, we write the scope in the format that
            supports an ALE coverage conversation with the carrier.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Consumers Energy is the utility across most of Macomb County for
            both electric and natural gas. We coordinate with Consumers on
            shutoffs, locates, and restoration timing the same way we
            coordinate with DTE on the Oakland side. Neither utility is a
            barrier to response — they are both operational details we handle
            quietly in the background so the homeowner never has to think
            about it.
          </p>
        </div>
      </section>

      {/* TRUST / WHY */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Why Cross the County Line"
            title="Why Shelby Township Homeowners Call an Oakland County Restoration Company"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {trust.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: C.white,
                  borderRadius: 12,
                  padding: '26px 24px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 10px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: C.secondary,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Shelby Township FAQs"
            title="Questions We Hear From Shelby Township Homeowners"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {faqs.map((f) => (
              <details
                key={f.q}
                style={{
                  backgroundColor: C.bgAlt,
                  borderRadius: 10,
                  padding: '18px 22px',
                  border: `1px solid ${C.border}`,
                }}
              >
                <summary
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: C.text,
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                >
                  {f.q}
                </summary>
                <p
                  style={{
                    fontSize: 15,
                    color: C.secondary,
                    lineHeight: 1.7,
                    margin: '12px 0 0',
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: C.dark,
          padding: '64px 24px',
          textAlign: 'center',
          color: C.white,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.4px',
              margin: '0 0 14px',
            }}
          >
            Basement Flooded in Your Shelby Township Home?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            We respond from our Bloomfield office to Shelby Township in under
            30 minutes on most calls. Every hour the pad stays saturated
            doubles the eventual scope. Call now — real dispatcher, real ETA,
            straight answer.
          </p>
          <a
            href={PHONE_HREF}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 36px',
              backgroundColor: C.accent,
              color: C.white,
              borderRadius: 8,
              fontSize: 17,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* LINK STRIP */}
      <section style={{ backgroundColor: C.white, padding: '48px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 14,
              color: C.secondary,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: '0 0 16px',
              fontWeight: 600,
            }}
          >
            Related Service Areas & Pages
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            {[
              {
                href: '/macomb-township-mi-water-damage-restoration-near-you',
                label: 'Macomb Township',
              },
              {
                href: '/rochester-hills-mi-water-damage-restoration',
                label: 'Rochester Hills',
              },
              {
                href: '/water-damage-restoration',
                label: 'Water Damage Restoration',
              },
              {
                href: '/services/sump-pump-failure',
                label: 'Sump Pump Failure',
              },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: 'inline-block',
                  padding: '10px 18px',
                  borderRadius: 999,
                  backgroundColor: C.bgAlt,
                  color: C.text,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: `1px solid ${C.border}`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
