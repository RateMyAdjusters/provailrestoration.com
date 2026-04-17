import { SiteHeader, SiteFooter, PillarSectionHeading } from '../_components/site-chrome'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL =
  'https://provailrestoration.com/auburn-hills-mi-water-damage-restoration'

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
    title: 'Stellantis-Adjacent Office Building — Overnight Sprinkler Discharge',
    desc: 'A frozen pendant head on the third floor of a Class A office tower along Featherstone or Opdyke lets go at 2:47 AM. By the time the alarm monitoring company reaches facilities, there is an inch of water across six suites, the data closet has taken hits, and the drop ceilings are sagging. Our commercial crew responds with truck-mounted extractors and high-volume desiccant drying, protects sensitive electronics on the raised-floor systems, and works the overnight window so the tenants can open Monday morning without losing a business day.',
  },
  {
    title: 'Oakland University Off-Campus Student Rental — Kitchen Flood',
    desc: 'A dishwasher supply line fails overnight in a duplex on Walton Blvd or a garden-style apartment near Squirrel Rd. Three roommates wake up to a flooded first floor, ruined textbooks, and a panicked group chat about whose insurance is about to handle this. We document the loss for both the landlord policy and the tenants\' renter\'s insurance, protect the belongings with chain-of-custody inventory, and keep the unit habitable where we can so nobody has to move mid-semester.',
  },
  {
    title: '1968 Ranch Near Walton Blvd — Spring Storm Sump Pump Failure',
    desc: 'The engineering-boom subdivisions built during the Chrysler expansion of the late 1960s and early 1970s have aging primary sump pumps that were never paired with battery backups. A May thunderstorm drops two inches in an hour, the breaker trips, and the finished basement rec room is under water before the homeowner gets home from work. We extract, remove wet pad and saturated drywall to four inches above the waterline, and run LGR drying until moisture meters read normal for the assembly.',
  },
  {
    title: 'Great Lakes Crossing-Adjacent Hotel — HVAC Condensate Line Overflow',
    desc: 'A clogged condensate drain on a rooftop AHU backs up into a pan and lets go into the ceiling cavity above occupied guest rooms along the Joslyn hotel strip. Five rooms and a corridor take damage in the middle of a convention weekend. We mobilize a hospitality-sector crew that understands guest relocation, linen and contents protection, and keeping public areas looking presentable while mitigation happens in back-of-house.',
  },
  {
    title: 'Auto Supplier Facility — Machine Coolant Leak into Clean Room',
    desc: 'A hydraulic line on a CNC cell ruptures during second shift at a Tier 1 supplier in the Brown Road or Harmon industrial corridor. Coolant migrates through a floor joint into an adjacent clean-room assembly area where sensitive electronic sub-assemblies are staged. Our crew gowns up appropriately, contains the affected zone, extracts and decontaminates without introducing particulate, and coordinates with the plant\'s quality team so the root-cause investigation gets the documentation it needs.',
  },
  {
    title: 'Downtown Auburn Hills Mid-Rise Condo — Vertical Water Migration',
    desc: 'A toilet supply line fails on the sixth floor of a 2000s-era condo building along University Drive and water rides down through the post-tensioned slab penetrations, damaging the fifth, fourth, and third-floor units below. Three HO-6 policies, a master HOA policy, and a property management company all need to talk to each other. We dry every affected unit in parallel, write a single coordinated scope the HOA can hand to its carrier, and document which damage belongs to which policy so nobody pays twice.',
  },
]

const residentialServices = [
  {
    title: 'Emergency Water Extraction & Structural Drying',
    desc: 'Auburn Hills has more rental stock than most Oakland County cities, which means fast access decisions — getting a key from a landlord or property manager, coordinating with on-site maintenance, or meeting a tenant after work. Our dispatch team handles that access choreography while the truck is rolling, so the crew is extracting inside the first hour instead of waiting on a key in the parking lot.',
  },
  {
    title: 'Fire & Smoke Damage Restoration',
    desc: 'Kitchen fires in OU-adjacent rentals, electrical events in older ranches near Auburn Rd, and the occasional commercial kitchen incident at Great Lakes Crossing food-court tenants — Auburn Hills fire calls are as varied as the property mix. We handle soot cleaning, odor neutralization, contents pack-out, and the water damage that always follows suppression.',
  },
  {
    title: 'Storm & Wind Damage Response',
    desc: 'The Clinton River tributaries and Galloway Lake feeder streams that cut through Auburn Hills back up during extended spring rain events. Tree strikes along Joslyn and Squirrel expose attics and rim joists to wind-driven rain. We tarp, board, extract, and dry — and we do the emergency mitigation in a sequence that protects what is salvageable before build-back starts.',
  },
  {
    title: 'Mold Remediation',
    desc: 'Auburn Hills\' heavy rental stock means a lot of "the previous tenant mentioned a smell" calls. We test, contain, remediate, and issue post-remediation verification documentation — the paperwork a landlord needs to turn a unit and the paperwork a tenant needs to prove habitability. IICRC-credentialed on every crew, with AMRT leads on the larger jobs.',
  },
  {
    title: 'Sewage Cleanup & Decontamination',
    desc: 'Lower-level bathroom backups in the 1970s ranches along Walton, basement-drain sewage events in older multi-family rentals, and commercial grease-interceptor overflows in restaurant tenants — Auburn Hills sees the full range of Category 3 water. We handle with PPE, biocide, and disposal protocols that meet IICRC S500 standards.',
  },
  {
    title: 'Reconstruction & Build-Back',
    desc: 'Once the structure is dry, someone has to put it back together. We do drywall, flooring, trim, cabinetry, and paint in-house so your Auburn Hills home or rental unit does not sit empty for two months waiting for a separate GC to schedule. Single point of contact from extraction through final walkthrough.',
  },
]

const commercialFeatures = [
  '24/7 after-hours commercial dispatch — most Auburn Hills office and industrial calls come in outside business hours',
  'Truck-mounted extraction and desiccant drying equipment sized for multi-suite and warehouse-scale losses',
  'Familiarity with Tier 1 automotive supplier protocols — PPE, containment, clean-room gowning where required',
  'Direct coordination with building engineers, property managers, and tenant representatives',
  'Documentation packages formatted for commercial property carriers and business-interruption adjusters',
  'Established relationships with hospitality-sector property managers along the Great Lakes Crossing corridor',
]

const trustCards = [
  {
    title: 'Built For Commercial Response',
    body: 'A significant share of our Auburn Hills call volume is commercial — office towers along Opdyke, industrial parks in the Brown Road corridor, and hospitality properties near Great Lakes Crossing. We stock the truck-mounted equipment and desiccant drying capacity that those losses actually require, not just household-scale gear.',
  },
  {
    title: 'Oakland University Housing Experience',
    body: 'We have worked with OU-area landlords, off-campus property management companies, and student tenants often enough to know the coordination patterns — shared leases, roommate insurance questions, mid-semester scheduling, and the chain-of-custody paperwork that keeps everyone\'s belongings accounted for.',
  },
  {
    title: 'I-75 Fast Response',
    body: 'Our Bloomfield Township office is a straight shot up I-75 or Opdyke to any Auburn Hills address — roughly nine miles and fifteen minutes off-peak. For after-hours emergencies, that proximity means a crew is on-site before the water has time to wick through the subfloor.',
  },
]

const faqs = [
  {
    q: 'Our office building had a sprinkler discharge overnight — can you be on-site before Monday morning?',
    a: `Yes. After-hours commercial response is a core part of what we do in Auburn Hills. Call ${PHONE} and the dispatcher will put a truck-mounted extraction crew on the road immediately. For a typical Friday-night or weekend sprinkler activation in an office tower along Opdyke, Featherstone, or University Drive, we can usually have extraction underway within 60 to 90 minutes and a drying plan installed by early Saturday. Most of our commercial Auburn Hills clients are back in their suites Monday morning with mitigation continuing quietly around them. The key is getting the call in fast — every hour the water sits, the drop-ceiling tiles, carpet tile, and wall base degrade further.`,
  },
  {
    q: 'Our OU student rental flooded and our roommates\' stuff got damaged — whose insurance covers what?',
    a: 'This is one of the most common questions we get on Auburn Hills calls. The short version: your landlord\'s policy covers the building — walls, floors, plumbing, built-in fixtures. It does not cover your personal belongings or your roommates\' belongings. Those are covered under each individual tenant\'s renter\'s insurance policy, if they have one. We document the loss in a way that supports both conversations — the landlord\'s claim to their carrier for the structural work we perform, and each tenant\'s claim against their renter\'s policy for contents. If a roommate does not have renter\'s insurance, their belongings generally are not covered, which is a hard conversation but an important one. We provide photo documentation and inventory support regardless.',
  },
  {
    q: 'How fast can you reach Great Lakes Crossing from your Bloomfield office?',
    a: `Our office at 4060 W Maple Rd is about nine miles from Great Lakes Crossing via I-75 north to the Joslyn or Lapeer Rd exits. Off-peak drive time is roughly 15 minutes. Morning rush or bad weather can stretch that to 25 or 30. For emergency hospitality-sector calls — hotels, the mall common areas, or the outlet-adjacent retail and restaurant tenants — we target a 30 to 45 minute door-to-door response from the moment the phone rings. The Palace site (now Amazon distribution) and the surrounding industrial corridor are even closer via the Joslyn/Brown Road route.`,
  },
  {
    q: 'We have a Stellantis supplier clean room — can your crew work in controlled environments?',
    a: 'Yes. We regularly work in Tier 1 and Tier 2 automotive supplier facilities where quality protocols require containment, PPE, and sometimes full gowning before entering assembly areas. For a coolant leak, hydraulic fluid event, or water migration into a clean room or controlled zone, we coordinate with the plant\'s quality and EHS teams before the crew enters. We use appropriate PPE, set negative-pressure containment where required, extract and decontaminate without introducing particulate, and document the work so your root-cause investigation and any customer notification has a clean record. We have worked in engineering labs, validation bays, and assembly cells across the Auburn Hills supplier community.',
  },
  {
    q: 'Our condo on University Dr had an upstairs unit leak into ours — is this on the HOA or our insurance?',
    a: 'Vertical water migration in multi-unit condos is one of the messier insurance conversations because it usually involves at least three policies — the upstairs unit\'s HO-6, your HO-6, and the HOA master policy. The general framework in Michigan: the HOA master policy typically covers the building structure (studs out in most policies, walls in for "all-in" policies). Your HO-6 covers improvements and betterments inside your unit — flooring, cabinetry, fixtures, personal property. The upstairs unit owner\'s HO-6 may also come into play if their negligence caused the loss. We dry every affected unit, write a single coordinated scope, and provide the documentation each policy needs. Your condo association\'s property manager can usually tell you which master-policy structure your building uses — that is the starting point.',
  },
  {
    q: '1968 ranch on Joslyn with a finished basement — is the wall material from the 90s real wood paneling or drywall?',
    a: 'Most Auburn Hills basements finished in the 1990s used either thin vinyl-wrapped paneling over furring strips, or drywall on 2x4 studs with a vinyl wainscot. The material matters because it dries differently. True wood paneling on furring strips usually traps moisture in the cavity behind it, and the paneling itself often delaminates — those almost always have to come out. Drywall with a cavity behind it can sometimes be dried in place with controlled drying chambers and careful moisture monitoring, though baseboards and lower drywall sections above the waterline often still need removal. We will check behind the wall with a moisture meter and a thermal camera before recommending demo, so you only remove what actually needs to come out.',
  },
  {
    q: 'Can you coordinate with our property management company for invoicing?',
    a: `Yes. Commercial and multi-tenant billing is something we handle every week in Auburn Hills. We can bill directly to a property management company, work against a purchase order, or submit through a third-party claims administrator or property-carrier portal. We provide insurance-grade documentation — photos, moisture logs, written scope, and line-item pricing in the industry-standard format your carrier and your PM already work with. If your management company uses a specific vendor approval process or insurance requirement for contractors, let us know when you call ${PHONE} and we can have certificates of insurance, W-9s, and vendor paperwork to your AP contact before the crew arrives on site.`,
  },
  {
    q: 'Do you do emergency response for hotel guest rooms?',
    a: 'Yes, hospitality work is a regular part of our Auburn Hills service load, especially along the Joslyn and Lapeer Rd hotel corridor near Great Lakes Crossing. The hospitality-sector playbook is different from a standard office loss — you are working around check-in and check-out windows, occupied adjacent rooms, room-service carts and housekeeping schedules, and a general manager who needs those rooms back in inventory as fast as possible. We coordinate with front-of-house on guest relocation, keep public corridors looking presentable during mitigation, and work the back-of-house drying overnight where we can so the daytime guest experience stays intact. Most guest-room water losses can be dried and returned to sellable inventory within three to five days depending on scope.',
  },
  {
    q: 'What areas of Auburn Hills do you cover?',
    a: 'All of Auburn Hills (ZIP 48326) — from the Stellantis Tech Center campus along Featherstone west through the Chrysler Drive corridor, up through the Oakland University campus and Meadow Brook Hall area, south through the older Walton Blvd and Auburn Rd neighborhoods, east along the I-75 Joslyn and Lapeer Rd commercial strip through Great Lakes Crossing, and out into the Brown Road industrial corridor. We also cover the city border areas that blend into Rochester Hills, Pontiac, Lake Orion, and Oakland Township. If you are inside the Auburn Hills city limits or adjacent, we respond.',
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
      name: 'Auburn Hills, MI',
      item: PAGE_URL,
    },
  ],
}

export default function AuburnHillsPage() {
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
            24/7 Response — Auburn Hills, MI
          </div>
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              margin: '0 0 20px',
              maxWidth: 880,
            }}
          >
            Water Damage Restoration for Auburn Hills Offices, Campuses & Homes
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
            {BUSINESS_NAME} dispatches from 4060 W Maple Rd — about nine miles
            and 15 minutes down Adams or Opdyke to the Stellantis HQ corridor,
            Oakland University, and every ZIP 48326 address in between. From
            overnight sprinkler discharges in Class A office towers to OU
            student-rental kitchen floods to 1960s ranches along Walton Blvd,
            we respond to Auburn Hills water emergencies every hour of every
            day.
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

      {/* AUBURN HILLS IS DIFFERENT */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Local Character"
            title="Auburn Hills Is Different From Every City Around It"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Drive ten minutes in any direction from the Auburn Hills city center
            and the property mix changes completely. Rochester Hills to the
            northeast is almost entirely residential — subdivisions, cul-de-sacs,
            and established family homes. Bloomfield Township to the southwest
            leans toward historic homes and older affluent neighborhoods. Pontiac
            to the west is a dense urban grid with its own patterns. Auburn Hills
            is none of those. It is a corporate and university town first, with
            housing built around the jobs rather than the other way around.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            The defining features are the Stellantis (formerly Chrysler) world
            headquarters and Technology Center campus along Featherstone and
            Chrysler Drive, the Oakland University main campus straddling the
            Rochester Hills border, Great Lakes Crossing Outlets along I-75, and
            the former Palace of Auburn Hills site — now an Amazon distribution
            center and one of the largest logistics footprints in Oakland
            County. Cluster around those anchors a dense ring of Tier 1
            automotive suppliers, engineering firms, BorgWarner\'s headquarters,
            and dozens of office parks serving the auto industry, and you get a
            commercial profile that is unusual for a city this size.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            The residential stock reflects the industrial history. Most of the
            housing you see in Auburn Hills was built during the Chrysler
            engineering boom of the 1960s and 1970s — modest ranches and split
            levels along Auburn Rd, Walton Blvd, and the streets feeding into
            Joslyn. The 1980s and 1990s added apartment complexes serving
            Oakland University students. The 2000s and 2010s added mid-rise
            condos and townhomes in the downtown Auburn Hills redevelopment
            along University Drive. Unlike Rochester or Birmingham, there is
            very little historic housing stock here — the city was largely
            undeveloped before Chrysler arrived.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            All of that matters when you call a restoration contractor. The
            water damage profile in Auburn Hills is heavier on commercial
            sprinkler discharges, multi-tenant rental coordination, and
            industrial facility response than you will see in the surrounding
            cities. A restoration company that mostly handles single-family
            residential work in Birmingham or Rochester will struggle with the
            equipment scale and coordination that a Class A office tower or an
            auto supplier clean room actually requires. We built the Auburn
            Hills response around what Auburn Hills actually is.
          </p>
        </div>
      </section>

      {/* COMMERCIAL & INDUSTRIAL SPOTLIGHT */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Commercial & Industrial"
            title="Water Damage Response for Auburn Hills Businesses"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            Commercial water damage is a distinct line of business in Auburn
            Hills because the building stock demands it. An office tower along
            Opdyke with 300,000 square feet of rentable space and a
            twenty-pendant sprinkler system is not a residential job with more
            fans. The physics of the drying project — the air changes per hour
            needed to hit target dry, the BTU load the dehumidifiers have to
            pull, the way water migrates through concrete slab penetrations and
            raised floors — is a different engineering problem. We stock
            truck-mounted extraction units, high-capacity desiccant
            dehumidifiers, and commercial-grade air movers specifically for
            Auburn Hills losses at this scale.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            The same is true for the industrial side. Tier 1 and Tier 2
            automotive suppliers across the Brown Road, Harmon, and Joslyn
            industrial corridors run facilities with clean rooms, validation
            bays, electronic assembly areas, and quality-controlled environments
            where you cannot just walk in with a shop vac. When a hydraulic line
            ruptures on a CNC cell or a fire-suppression system discharges over
            sensitive electronics, the mitigation crew has to understand PPE,
            containment, gowning, negative-pressure isolation, and the
            documentation standards that the supplier\'s customer quality audit
            will eventually see. We have worked with enough auto-industry
            facilities in Auburn Hills to know how those conversations go.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 20px',
            }}
          >
            Commercial insurance is its own layer. Most of our Auburn Hills
            commercial clients carry property coverage with separate
            business-interruption provisions, deductibles that can run into six
            figures, and carrier adjusters who want the mitigation documentation
            formatted a specific way. We write our Auburn Hills commercial
            scopes to that standard from the first site visit, so the claim
            conversation has a clean record attached and the carrier is not
            holding up progress payments while they ask for paperwork we could
            have provided on day one.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
            }}
          >
            {commercialFeatures.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: 15,
                  color: C.text,
                  lineHeight: 1.6,
                  padding: '14px 16px',
                  backgroundColor: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: C.accent,
                    marginRight: 10,
                    verticalAlign: 'middle',
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AUBURN HILLS SCENARIOS */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Auburn Hills Scenarios"
            title="Six Auburn Hills Water Losses We Respond To Regularly"
            intro="Actual call types from Auburn Hills — with how we work each one."
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
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
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

      {/* RESIDENTIAL SERVICES */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Residential Services"
            title="Full Residential Restoration for Auburn Hills Homes & Rentals"
            intro="Every service tuned to the Auburn Hills property mix — ranches, student rentals, and downtown condos."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {residentialServices.map((s) => (
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

      {/* PROPERTY MANAGERS & OU HOUSING */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Multi-Tenant Coordination"
            title="Working With Auburn Hills Property Managers & OU Housing"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            A large share of the Auburn Hills housing stock is renter-occupied,
            which means a lot of our residential calls involve at least three
            parties — the tenant living in the unit, the landlord or property
            management company that owns the building, and an insurance carrier
            on one or both sides. When the water event happens on a Friday
            evening, the coordination choreography is the work as much as the
            extraction is. Who has the key. Who is authorizing the scope. Where
            does the invoice go. Which policy pays for what. We handle all of
            that in parallel with the actual drying so the job does not stall on
            paperwork while the pad is still wet.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Chain-of-custody matters too, especially with student rentals near
            Oakland University where a displaced roommate\'s belongings need to
            be inventoried, protected, packed out where necessary, and returned
            without dispute. We photograph contents before anything moves,
            tag-and-track through pack-out, and issue a formal inventory
            document that the tenant, landlord, and any renter\'s insurance
            adjuster can all reference. That paper trail prevents the awkward
            post-job conversation where nobody can remember whose laptop was
            where when the crew arrived.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            On the billing side, we can invoice a property management company
            directly, bill against a purchase order, submit through a carrier
            portal, or direct-bill the owner with a pass-through to the
            landlord\'s property policy. If your Auburn Hills management company
            has a vendor approval process or specific insurance requirements for
            restoration contractors, we will have certificates, W-9s, and any
            required paperwork to your AP contact before our crew arrives on
            site. Off-hours access is routine — we work with lockboxes,
            maintenance escort, or tenant meet-ups whenever the situation calls
            for it.
          </p>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Why Auburn Hills Calls Us"
            title="Three Things Auburn Hills Clients Tell Us Matter Most"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {trustCards.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: C.white,
                  borderRadius: 12,
                  padding: '28px 26px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: C.secondary,
                    lineHeight: 1.7,
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
            eyebrow="Auburn Hills FAQs"
            title="What Auburn Hills Businesses, Tenants & Homeowners Ask Us"
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
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.4px',
              margin: '0 0 14px',
            }}
          >
            Water Damage at Your Auburn Hills Business or Home?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            A Bloomfield crew is 15 minutes away on I-75. Whether it is a
            Class A office tower at 2 AM or a flooded student rental off
            Walton, call now for a real ETA and a straight answer about scope.
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

      {/* NEARBY LINKS */}
      <section
        style={{
          backgroundColor: C.bgAlt,
          padding: '40px 24px',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: C.secondary,
              margin: '0 0 16px',
              fontWeight: 600,
            }}
          >
            Nearby Service Areas
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
                label: 'Rochester Hills, MI',
                href: '/rochester-hills-mi-water-damage-restoration',
              },
              {
                label: 'Pontiac, MI',
                href: '/pontiac-mi-water-damage-restoration',
              },
              { label: 'Bloomfield Township', href: '/bloomfield' },
              {
                label: 'Commercial Restoration',
                href: '/commercial-restoration',
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: '10px 18px',
                  backgroundColor: C.white,
                  color: C.text,
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
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
