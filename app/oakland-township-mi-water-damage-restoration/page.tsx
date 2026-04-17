import { SiteHeader, SiteFooter, PillarSectionHeading } from '../_components/site-chrome'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/oakland-township-mi-water-damage-restoration'

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
    title: 'Estate Home on Adams Rd — Well Pump Burnout, Utility Room Flood',
    desc: 'A pressure-tank bladder lets go on a 6,500 sqft estate near Adams and Silver Bell. The submersible pump keeps cycling trying to hold pressure, the check valve hammers, and the utility room pad goes under before the homeowner gets home. We extract, remove saturated gypsum at the bottom plates, pull wet insulation out of the stud bays, and run LGR dehumidifiers while the referral well company rebuilds the pressure system the next morning.',
  },
  {
    title: 'Horse Farm on Gunn Rd — Frozen Barn Hydrant Burst, Tack Room Loss',
    desc: 'A frost-free hydrant feeding the wash stall lets go inside the insulated wall of a pole barn during a January cold snap. Water runs for hours overnight into the tack room — saddles, show pads, bridles, and a climate-controlled blanket rack. We extract, document the tack inventory for the equine rider, set up containment so the barn can keep operating on the non-damaged side, and dry the pole-barn wall cavities with targeted air movers and desiccant dehumidification.',
  },
  {
    title: 'Paint Creek Corridor Custom Home — Spring Melt Surface Water Intrusion',
    desc: 'A walkout basement on a Paint-Creek-adjacent lot takes on surface water during a fast March thaw stacked on top of a heavy rain. The water is not technically flood-insurance flood — it is surface runoff finding a below-grade sliding door seal. We extract, pull wet baseboard and the bottom 24 inches of drywall, dry the framing, and give the homeowner the documentation their HO-3 carrier needs to distinguish this from an NFIP-excluded event.',
  },
  {
    title: '5-Acre Property Near Addison Oaks — Septic Drain Field Saturation, Basement Backup',
    desc: 'Three straight days of rain saturate the drain field on a 5-acre property near the Addison Oaks north boundary. The septic tank still accepts inflow, but the field cannot accept outflow — so effluent finds the lowest fixture in the house, which is a basement floor drain in the utility sink area. By the time the homeowner smells it, there is standing Category 3 water on a finished basement floor. We stop the spread, contain, decontaminate, remove porous materials, and stage the dry-down while the septic contractor works the field.',
  },
  {
    title: 'Century Farmhouse on Silver Bell — Cast-Iron Stack Corrosion, Lath-Plaster Ceiling Leak',
    desc: 'An 1890s farmhouse on a parcel that used to be a working dairy has an original cast-iron waste stack running up through the pantry wall. A pinhole at the hub releases gray water behind lath and plaster for weeks before a brown ceiling stain shows up in the dining room. We remove the affected plaster panel with period-appropriate care, dry the framing, and hand off to a plaster restoration specialist who can match the original tooled texture. Century homes do not get the same drywall-rip-and-replace treatment as a 2010 build.',
  },
  {
    title: 'New Build on 3 Acres — Radiant-Slab Water Intrusion During Construction',
    desc: 'A custom 8,200 sqft home under construction takes on water when an overnight copper line pressurization test fails a joint above a radiant-heat concrete garage slab. The PEX radiant lines are already buried in the slab, so traditional drying has to work around that. We core-dry the slab from the top, use rescue mats targeted to the saturated zones, and coordinate with the builder so framing and drywall schedules adjust around the dry-down without the whole project losing a month.',
  },
]

const services = [
  {
    title: 'Well Pump & Pressure Tank Flood Cleanup',
    desc: 'Most of Oakland Township runs on private well water. When a pressure-tank bladder fails, a check valve sticks, or a submersible pump short-cycles itself into a burnout, the mess shows up as water on the utility room floor — often hundreds of gallons before anyone notices. We extract, remove saturated materials, dry the space, and hand the well-system repair itself to a trusted well contractor.',
  },
  {
    title: 'Septic Backup & Category 3 Decontamination',
    desc: 'Drain fields saturate after prolonged rain and effluent finds the lowest fixture in the house — almost always a basement floor drain, utility tub, or basement shower. That water is Category 3 the moment it touches the floor. We stop the spread, remove porous materials, clean and disinfect non-porous surfaces with EPA-registered antimicrobials, and document the loss to the standard estate carriers require.',
  },
  {
    title: 'Estate-Home Structural Drying (5,000–8,000+ sqft)',
    desc: 'Larger homes have more plumbing runs, more finished square footage, and more material on the line when something breaks. We scale LGR dehumidifier counts and air-mover placement to the actual cubic footage of the space — not a one-size-fits-all residential playbook. Moisture readings are logged daily against target dry standards so you and your adjuster both know the envelope is truly dry.',
  },
  {
    title: 'Horse Barn & Equestrian Facility Response',
    desc: 'Tack rooms, wash stalls, feed rooms, and climate-controlled blanket storage all respond poorly to uncontrolled water. Pole-barn construction, radiant arena slabs, and exposed framing need different drying approaches than a residential wall assembly. We have worked barns in Oakland Township, Addison, and Washington Township — we know what the agricultural insurance riders expect to see documented.',
  },
  {
    title: 'Paint Creek & Surface Water Intrusion',
    desc: 'Homes along the Paint Creek corridor, on lower lots off Gunn Rd and Orion Rd, and on property that drains toward the creek are exposed to surface-water intrusion during spring melt and extended rain events. We handle silt-laden intrusion, contaminated insulation, and the documentation that distinguishes a covered HO-3 loss from an NFIP-excluded one.',
  },
  {
    title: 'Mold Remediation for Estate Properties',
    desc: 'Custom-finish materials — walnut millwork, quarter-sawn flooring, plaster with integral tint — cannot be treated with the same generic remediation approach as a builder-grade interior. We contain, remove affected materials with care for adjacent finishes, and work alongside the millwork shops and finish carpenters who originally built the space.',
  },
]

const faqs = [
  {
    q: 'Our well pump died and flooded the utility room — is that a covered loss?',
    a: `The sudden-and-accidental discharge of water from the pump and pressure tank plumbing is covered under most standard HO-3 policies, subject to your deductible and policy language. What is almost always excluded is the repair or replacement of the well pump or tank itself — that is a mechanical-breakdown equipment question, not a water-damage claim. ${BUSINESS_NAME} handles the water cleanup and structural drying side of the loss and produces the documentation your carrier needs. Your well contractor handles the pump and tank replacement on a separate invoice. Call ${PHONE} and we will walk you through what each contractor is responsible for.`,
  },
  {
    q: 'Septic backup in our basement after heavy rain — who do we call first?',
    a: `Call us first if there is water already on the floor. Category 3 water has a containment window that starts the moment it surfaces — the longer it sits, the more material has to come out. We stop the spread, set up containment, and begin extraction while you get your septic pumper rolling. Once the pumper empties the tank and confirms the drain field can accept inflow again, we continue the cleanup, decontamination, and structural drying. If you call the septic company first and they pump the tank before the interior water is handled, the house is still contaminated — so the sequencing matters. One call to ${PHONE} and we help coordinate the order.`,
  },
  {
    q: 'We have a Chubb policy — do you submit claims the way they want?',
    a: 'Yes. Estate-carrier workflows — Chubb Masterpiece, Cincinnati Executive Capstone, AIG Private Client, and PURE — expect a different documentation level than a standard HO-3 claim. That means higher-resolution photos, more thorough moisture logs, period-matched finish notes where applicable, and Xactimate line items that reflect the actual quality of materials in the home rather than builder-grade defaults. We are familiar with those workflows and the longer review timelines that come with them. We are a restoration contractor, not a public adjuster — we produce the mitigation record, and your claims consultant or adjuster handles the negotiation.',
  },
  {
    q: 'Our horse barn flooded — can you dry a 5,000 sqft pole building?',
    a: `Yes. Pole-barn construction dries differently from residential framing — the open trusses, exposed purlins, and metal sheathing all change how we place air movers and dehumidifiers. We use desiccant units when the cubic footage demands it, set containment so the healthy side of the barn can keep operating for horses that need to stay on property, and document losses to the standard equine insurance riders expect. Tack, feed, and blanket inventory is itemized so the rider claim has what it needs. Most Oakland Township barn losses we respond to involve frozen hydrants, burst supply lines, or arena-roof snow-melt — call ${PHONE} and describe what happened and we will send the right equipment on the first truck.`,
  },
  {
    q: 'How fast can you reach our estate on Orion Rd?',
    a: `Our dispatch runs from 4060 W Maple Rd in Bloomfield Township. Orion Rd, Gunn Rd, and most of the Paint Creek corridor are roughly 28 to 35 minutes from our door by way of Adams Rd north to Silver Bell or Rochester Rd. During widespread weather events we triage so that homes with actively running water move to the front of the line. Oakland Township is a lower-density service area — so during a heavy storm event we may be holding multiple calls at once across the area north of Rochester. The dispatcher at ${PHONE} will give you an honest ETA based on where the closest truck is.`,
  },
  {
    q: 'Our 8,000 sqft home has a finished lower level flooding — how long to dry?',
    a: 'A larger home takes longer to dry not because the drying science changes but because there is more cubic footage of air to condition and more linear feet of wet materials to manage. A typical clean-water event in a 7,000–9,000 sqft home with a fully finished lower level runs five to eight days of structural drying — compared to three to five days on a 2,500 sqft home — and usually requires six to twelve LGR dehumidifiers plus a larger count of high-velocity air movers. We monitor moisture daily and log every reading so you and your adjuster can see the envelope actually reach target dry standards. If drywall and flooring need to be removed and replaced, reconstruction adds two to six weeks depending on finish level and material lead times.',
  },
  {
    q: 'The Paint Creek flooded our walkout — is that flood or homeowners?',
    a: `That is the most important question to answer on any Paint Creek corridor loss, and the answer depends on how the water got into the house. If the creek itself rose above its banks and surface-flowed into the walkout, that is typically flood — and unless you carry an NFIP flood policy, a standard HO-3 will not respond to it. If the water is surface runoff finding a below-grade seal, a sump failure during a rain event, or a supply-line rupture on the interior, that is usually covered HO-3. The documentation has to be precise because carriers look very closely at these. ${BUSINESS_NAME} photographs the entry points, moisture-maps the affected materials, and produces the technical record — but the final coverage determination is always between you and your carrier.`,
  },
  {
    q: 'Do you work with equine insurance riders?',
    a: `Yes. Most Oakland Township horse-property owners carry an equine rider on top of their homeowners policy, or a dedicated farm-and-ranch policy through carriers like American Family AgriBusiness, Markel, or Great American. Those riders require itemized documentation of tack, feed, blankets, and facility damage — not just structure. We photograph and inventory at a more granular level for these losses, and we coordinate directly with the adjuster assigned to the equine side of the claim as well as the residential adjuster if those are different people. Call ${PHONE} and mention the rider when you describe the loss so the first truck brings the right documentation kit.`,
  },
  {
    q: 'We have a radiant-heat slab in the garage — can you dry it if it gets wet?',
    a: 'Yes, but radiant slabs dry differently from a conventional slab-on-grade. PEX lines buried in the concrete change how we place core-drying mats and how we interpret moisture readings — the slab releases moisture more slowly because the radiant lines are holding heat unevenly. We turn off the radiant system during drying, place rescue mats over the saturated zones, and run a longer dry-down than a plain concrete floor would require. The alternative — leaving a radiant slab wet — risks corrosion at the PEX fitting hubs and creates a mold-reservoir problem that will surface six to twelve months later. Worth doing correctly the first time.',
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
      name: 'Oakland Township, MI',
      item: PAGE_URL,
    },
  ],
}

export default function OaklandTownshipPage() {
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
            Estate & Horse-Farm Response — Oakland Township, MI
          </div>
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              margin: '0 0 20px',
              maxWidth: 900,
            }}
          >
            Water Damage Restoration for Oakland Township Estates, Horse Farms & Paint Creek Homes
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              margin: '0 0 32px',
              maxWidth: 740,
            }}
          >
            {BUSINESS_NAME} responds to Oakland Township — the rural-luxury
            township north of Rochester Hills where most homes sit on two to
            ten acres, run on private wells and septic, and face a different
            set of water-damage failure modes than the subdivisions to the
            south. We are fluent in well-pump floods, septic-backup Category 3
            cleanups, Paint Creek corridor surface water, horse-barn losses,
            and the estate-carrier documentation that Chubb, Cincinnati, AIG,
            and PURE expect.
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

      {/* LOCAL INTRO — Oakland Township is Not a Subdivision Town */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Local Character"
            title="Oakland Township Is Not a Subdivision Town"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Most of the water-damage pages you will find on the internet for
            nearby cities talk about tract neighborhoods, sump pumps, and the
            aging infrastructure of 1970s colonials. Oakland Township is a
            different animal. The population is around seventeen thousand
            spread across thirty-six square miles — less than a quarter of the
            residential density of Rochester Hills next door. Most homes sit
            on two to ten acres. Many parcels are five acres or larger. A
            meaningful share are working or hobby horse farms with pole
            barns, arenas, wash stalls, and tack rooms. The zoning is
            deliberately residential and agricultural — there is almost no
            commercial footprint inside the township line, which is unusual
            in Oakland County and is the whole point of why the families who
            live here chose Oakland Township over Rochester Hills or Troy.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            That character changes how water-damage restoration actually
            works. Most of the township is on private wells — submersible
            pumps a hundred-fifty to three-hundred feet down, pressure tanks
            in a utility room or walkout mechanical space, no city water main
            to shut off at the street. Most of the township is also on
            private septic — individual drain fields, often twenty to thirty
            years old, working the same clay-over-sand soils that do not
            always percolate well after prolonged rain. There is no natural
            gas service in parts of the township — propane tanks and oil
            heat are still common, and those mechanical rooms are where a
            lot of water losses start. The houses themselves tend to be
            larger: four-thousand to eight-thousand-plus square feet of
            custom construction with finished lower levels, walnut and white
            oak millwork, quarter-sawn flooring, integral-tint plaster, and
            wine rooms or home theaters built into the lower level.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            That combination — estate-level finishes, private-utility
            failure modes, and longer drive times from any commercial center
            — is the specific job. Rural fire and EMS response from Oakland
            Township FD relies heavily on mutual aid because the department
            covers a lot of ground with relatively few stations, and by the
            same logic, a restoration crew that is based in Rochester Hills
            proper is going to treat an Oakland Township call as an outlier.
            {BUSINESS_NAME} treats it as a distinct service line, with crews
            who know the private-utility side of the work, equipment sized
            for 5,000-plus-square-foot homes, and the documentation
            discipline that estate-home carriers actually require to close a
            claim cleanly.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Our technicians hold IICRC credentials in water damage
            restoration, applied structural drying, and applied microbial
            remediation. We are a restoration contractor — not a public
            adjuster — and our role is to produce the technical record of
            the loss: moisture logs, photos, written scope, and
            line-item pricing in the format your adjuster already works
            with. On an Oakland Township estate, that record has to be a
            step more thorough than a typical HO-3 claim, because that is
            the standard your carrier is going to ask for.
          </p>
        </div>
      </section>

      {/* WELL WATER & SEPTIC — DEDICATED SECTION */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Private Utilities"
            title="Well Water & Septic Failures: The Oakland Township Loss Profile"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Because most of Oakland Township is not on municipal water or
            sewer, the set of failure modes that produce water damage here is
            meaningfully different from the city-water-and-sewer towns
            surrounding it. The two most common private-utility losses we
            respond to are well-pump failures and septic drain-field
            saturations — and both of them produce damage patterns that a
            contractor unfamiliar with well-and-septic work will misread.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Well-pump failure shows up three ways. The first is a submersible
            pump that has reached end of life and short-cycles itself into a
            burnout — during that last few hours of life, a failing check
            valve can let water back-siphon into the well and a failed
            pressure-tank bladder can push water straight out the tank tee.
            The result is a flooded utility room, often hundreds of gallons,
            usually noticed only when the homeowner hears the pump running or
            sees water under the mechanical-room door. The second is a
            pressure-tank rupture — the steel tank itself splits at a rust
            point and dumps its contents in seconds. The third is a well-cap
            failure that lets surface water into the well casing — less
            dramatic as an interior loss, but a Category 2 or Category 3
            contamination event for the entire household water supply.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Septic drain-field saturation is the other classic Oakland
            Township loss. After a sustained rainy stretch — the kind of
            three-or-four-day spring soaker that Michigan gets every April
            — the drain field cannot accept outflow from the septic tank.
            The tank fills, the D-box floods, and effluent looks for the
            next path of least resistance: upward, through the house, out
            the lowest fixture. On a typical Oakland Township estate, the
            lowest fixture is a basement floor drain near the utility sink
            or laundry. That is where gray-and-black water surfaces, and
            that is where an otherwise ordinary rainy weekend turns into a
            Category 3 contamination event on a finished basement floor.
            Porous materials — carpet, pad, drywall, MDF baseboard — all
            have to come out. Non-porous surfaces get cleaned and
            disinfected with EPA-registered antimicrobials.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            To be clear about scope: we handle the water-damage and
            contamination side of the loss. We do not repair wells, replace
            submersible pumps, or rebuild drain fields — those are
            specialized trades, and we refer to well and septic contractors
            we have worked alongside for years in Oakland Township, Addison,
            and Orion. What we do is stop the spread, contain, extract,
            decontaminate, dry the structure, and produce the documentation
            your carrier needs so that the claim is grounded in a real
            technical record rather than a homeowner trying to explain what
            happened in their own words.
          </p>
        </div>
      </section>

      {/* SCENARIOS */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Oakland Township Scenarios"
            title="Six Calls We Take From Oakland Township Every Year"
            intro="The real failure modes — with the roads, neighborhoods, and construction eras that make Oakland Township losses distinct from the subdivisions to the south."
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
                  backgroundColor: C.bgAlt,
                  borderRadius: 12,
                  padding: '28px 26px',
                  border: `1px solid ${C.border}`,
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
            eyebrow="Services for Oakland Township"
            title="The Restoration Work We Actually Do Here"
            intro="Six service lines we run on Oakland Township estates, horse farms, and Paint Creek corridor homes."
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

      {/* ESTATE CARRIERS */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Estate Carriers"
            title="Working With Chubb, Cincinnati, AIG & PURE"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            The insurance profile in Oakland Township skews toward
            high-net-worth carriers: Chubb Masterpiece, Cincinnati Executive
            Capstone, AIG Private Client Group, and PURE Insurance. Those
            carriers write different policies than a standard HO-3, and they
            expect a different standard of mitigation documentation. Where a
            main-street carrier may close a claim on a handful of photos and
            a generic Xactimate estimate, an estate carrier is going to ask
            for granular photo documentation of every affected material,
            daily moisture readings logged against target dry standards, and
            line-item pricing that reflects the actual quality of finish on
            the property — not builder-grade defaults.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            Estate-carrier timelines also run longer. It is common for a
            Chubb or PURE claim to move at a slower cadence than a standard
            HO-3 — not because anyone is dragging feet, but because the
            claims consultants on those files are working through a higher
            level of review. Custom-finish line items get looked at by
            reviewers who understand period-matched millwork pricing. That
            means the mitigation documentation has to stand up to that
            level of review on the front end. We build the file as if it is
            going to be audited, because on estate claims it often is.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {BUSINESS_NAME} is a restoration contractor — not a public
            adjuster — and we do not negotiate claims. What we do is
            produce the technical record. On an Oakland Township estate,
            that record has to include higher-resolution photos, more
            detailed moisture mapping, written notes on period finishes
            and custom materials affected, equipment logs by the day, and
            scope lines in Xactimate format that your carrier's claims
            consultant already works with. That is the work that makes a
            claim move cleanly rather than stall.
          </p>
        </div>
      </section>

      {/* HORSE FARMS */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Equestrian Properties"
            title="Horse Farms, Pole Barns & Tack Room Water Damage"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            Oakland Township has one of the higher concentrations of horse
            properties in Oakland County — boarders, hobby owners,
            trainers, and working show barns, spread along Gunn Rd,
            Silver Bell, Stoney Creek Rd, Predmore, and the parcels
            surrounding Bald Mountain and Addison Oaks. When a barn takes
            on water, the problems are not the same as a residential water
            loss. Frost-free hydrants inside insulated wash-stall walls
            burst in January. Heated waterer lines on automatic systems
            let go. Arena-roof snow melt finds a seam and drops into a
            sand-fiber riding surface that does not drain. Tack rooms —
            which are often climate-controlled and stocked with saddles,
            show pads, bridles, and coolers worth tens of thousands of
            dollars — take on water from a failed supply line and the
            inventory becomes part of the claim.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            Pole-barn construction dries differently from residential
            framing. The open truss space, metal sheathing, and exposed
            purlins mean that air-mover placement and dehumidifier sizing
            have to account for much larger cubic footage per linear foot
            of wet material. We use desiccant dehumidification on larger
            barn losses because compressor-based LGR units cannot keep up
            with the volume. We set up containment so the undamaged side
            of the barn can continue to operate for horses that cannot be
            moved off property on short notice. We work around feeding
            schedules, turnout rotations, and the simple reality that
            horses do not care about your drying plan and will interact
            with any equipment we leave in the aisle.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Equine insurance riders — and dedicated farm-and-ranch
            policies through Markel, American Family AgriBusiness, and
            Great American — require itemized documentation of tack,
            feed, blankets, and facility damage that goes beyond what a
            homeowners adjuster would ask for. We photograph and inventory
            at that level, and we coordinate with the adjuster handling
            the equine side of the claim in addition to any residential
            adjuster on the primary home. If you have a barn on your
            property, mention it when you call {PHONE} so the first truck
            comes prepared for agricultural work, not just residential.
          </p>
        </div>
      </section>

      {/* TRUST / WHY */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Why Oakland Township Calls Us"
            title="What Makes This Service Line Different"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                title: 'Estate-Carrier Documentation Fluency',
                body: 'Chubb, Cincinnati, AIG, PURE, Auto-Owners — we build mitigation files to the standard each carrier actually reviews against, not a generic HO-3 template.',
              },
              {
                title: 'Equipment Sized for 5,000–8,000+ sqft Homes',
                body: 'Larger cubic footage means more LGR dehumidifiers, higher air-mover counts, and desiccant units on barn and arena losses. We bring the gear the house actually needs.',
              },
              {
                title: 'Well & Septic Failure Pattern Recognition',
                body: 'Pump burnouts, pressure-tank ruptures, drain-field saturation, D-box backups — we read these patterns on arrival and know what has to happen in what order.',
              },
              {
                title: 'Rural Response Capability',
                body: 'Low-density townships with limited cell coverage, private driveways measured in tenths of a mile, and gated entries do not slow us down. We plan the approach on dispatch.',
              },
              {
                title: 'Barn, Arena & Tack Room Experience',
                body: 'Pole-barn drying, agricultural containment, tack inventory documentation, and coordination with equine insurance riders — this is a working capability, not a brochure item.',
              },
              {
                title: 'Period Finish & Custom Material Respect',
                body: 'Plaster, quarter-sawn hardwood, walnut millwork, cast iron, and integral-tint finishes do not get the generic drywall-and-replace treatment. We work with the finish trades.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: C.bgAlt,
                  borderRadius: 12,
                  padding: '26px 24px',
                  border: `1px solid ${C.border}`,
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
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Oakland Township FAQs"
            title="Questions Estate & Horse-Farm Owners Ask Us"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {faqs.map((f) => (
              <details
                key={f.q}
                style={{
                  backgroundColor: C.white,
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

      {/* NEARBY LINKS */}
      <section style={{ backgroundColor: C.white, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h3
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: C.secondary,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              margin: '0 0 16px',
            }}
          >
            Nearby Service Areas
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            {[
              { label: 'Rochester Hills, MI', href: '/rochester-hills-mi-water-damage-restoration' },
              { label: 'Rochester, MI', href: '/rochester-mi-water-damage-restoration' },
              { label: 'Lake Orion, MI', href: '/lake-orion-mi-water-damage-restoration' },
              { label: 'All Water Damage Services', href: '/water-damage-restoration' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: '10px 16px',
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.text,
                  textDecoration: 'none',
                  backgroundColor: C.bgAlt,
                }}
              >
                {l.label}
              </a>
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
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.4px',
              margin: '0 0 14px',
            }}
          >
            Water Damage at Your Oakland Township Estate or Horse Farm?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            We respond prepared for the property you actually own — well,
            septic, barn, estate home, finished lower level, radiant slab.
            Call now for a real ETA and a straight answer.
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

      <SiteFooter />
    </div>
  )
}
