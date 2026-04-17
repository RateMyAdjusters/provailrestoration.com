import { SiteHeader, SiteFooter, PillarSectionHeading } from '../_components/site-chrome'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/pontiac-mi-water-damage-restoration'

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
    title: 'Seminole Hills 1928 Tudor — Cast-Iron Stack Corrosion',
    desc: 'A homeowner on one of the curving streets off Franklin Rd noticed a gray, rust-tinged stain spreading across the plaster ceiling below a second-floor bathroom. The problem was not the bathroom — it was a pinhole in the original cast-iron drain stack that had been corroding from the inside for decades. We cut an access window from the cavity side rather than the plaster face, dried the lath and blown-in insulation with a low-grain system, and coordinated the stack repair so the homeowner only had to patch one finish plane instead of four.',
  },
  {
    title: 'Downtown Pontiac Loft — Upstairs Tub Overflow',
    desc: 'One of the loft conversions in a 1920s downtown commercial building had an overnight tub overflow that pushed water through the original heavy-timber floor assembly, through the tin ceiling of the retail space below, and across their inventory. These old mercantile buildings do not dry like modern wood-frame construction — the timbers are massive, and the cavity between floors is full of unknown fill. We extracted, drilled controlled access points, and ran a three-week drying cycle with daily moisture readings because the mass took that long to release the water cleanly.',
  },
  {
    title: 'West Pontiac Bungalow — Floor-Drain Sewer Backup',
    desc: 'A 1930s bungalow off Franklin Blvd took on two inches of gray water through the basement floor drain during a heavy summer thunderstorm. The block is on a combined sewer — the same pipe carries storm runoff and sanitary waste — and when the system surcharged, the path of least resistance was back into the house. We treated it as Category 3 contaminated water, removed saturated cardboard and stored belongings, ran antimicrobial protocols, and sealed the affected concrete so the smell did not come back two weeks later.',
  },
  {
    title: 'Telegraph Corridor Apartment — 3rd-Floor Burst',
    desc: 'A burst supply line in a third-floor unit of a Telegraph Road apartment complex migrated through two ceilings, across three units, and into the hallway carpet before the maintenance tech could get the riser shut off. We ran simultaneous drying plans for four separate tenant spaces, kept each one documented on its own scope and moisture log, and coordinated with the property manager so the building insurance claim had one clean paperwork trail instead of four conflicting ones.',
  },
  {
    title: 'Franklin Blvd Foursquare — Galvanized Pinhole in Wall',
    desc: 'A 1910s foursquare near the historic Franklin Blvd district had a slow galvanized-steel supply pinhole inside a second-floor interior wall. The leak ran for weeks behind the original plaster before a homeowner noticed the wallpaper bubble. Inside the cavity we found saturated blown-in cellulose, active mold colonization on the lath, and corroded copper supply the previous owner had spliced onto the galvanized run. We dried the cavity, remediated the mold, and gave the homeowner a written scope for the plumber so the repair covered the real source rather than just the symptom.',
  },
  {
    title: 'Pontiac Lake Area Ranch — Spring Melt Sump Failure',
    desc: 'A ranch off Williams Lake Rd lost its primary sump pump during a March melt combined with a heavy rain, and the battery backup did not kick in because the battery had never been replaced since the original install. Six inches of groundwater came in before the homeowner got home from work. We extracted, pulled the wet pad, dried the subfloor and bottom plates, and flagged the rim joists where seasonal groundwater had been wicking for longer than this one event — something the homeowner had suspected but never had documented.',
  },
]

const services = [
  {
    title: 'Emergency Water Damage Response — 15 Minutes From You',
    desc: 'When a supply line lets go inside a Pontiac wall or a basement floor drain starts pushing water up into a finished rec room, the first hour is everything. Our Bloomfield Township office is seven miles south of downtown Pontiac — closer to you than to any other city we serve. Target on-site arrival for Pontiac emergency calls is 15 minutes under normal traffic, and we truck-mount extraction equipment so the first pass starts within minutes of the crew walking through the door.',
  },
  {
    title: 'Older-Home Plumbing Failure Drying',
    desc: 'Pontiac housing stock was built when galvanized steel, cast iron, and lead laterals were the standard. Every one of those materials fails differently. Galvanized pinholes spray in a fine mist inside wall cavities for days before anyone notices. Cast-iron stacks weep gray water through plaster ceilings. Clay laterals collapse under tree roots and push sewage back up the line. We know the signature of each failure and we document the loss so the plumbing repair conversation with your insurer is grounded in the actual cause, not guesswork.',
  },
  {
    title: 'Combined Sewer Backup Category 3 Cleanup',
    desc: 'Older sections of Pontiac are served by combined sewers — one pipe carries stormwater and sanitary waste together. During heavy rain the system surcharges, and the overflow point is often the lowest drain in your basement. Any water that has contacted sewage is Category 3 under the IICRC S500 standard and requires specific containment, disposal, and antimicrobial protocols. We handle it the way the standard says, not a shortcut version of it, because the smell and the mold will come back if you do not.',
  },
  {
    title: 'Multi-Unit Apartment & Downtown Loft Restoration',
    desc: 'Downtown loft conversions and the apartment complexes along Telegraph, Walton, and Perry generate water losses that migrate across multiple units in minutes. We scope each affected unit separately, run separate moisture logs, and coordinate with the property manager so the building-side claim and each tenant-side conversation have clean documentation. That matters when four different carriers end up looking at the same loss.',
  },
  {
    title: 'Plaster & Lath Injection Drying for Historic Homes',
    desc: 'Seminole Hills, the Franklin Blvd district, and the older blocks around downtown are full of homes with original plaster walls and wood lath. Modern drywall drying protocols will destroy that finish if a technician applies them without thinking. We use controlled access points, cavity-injection drying, and low-grain dehumidification so the plaster stays intact. Replacing plaster is a specialty trade with a multi-week lead time — preserving what is there is almost always the right call.',
  },
  {
    title: 'Mold Remediation & Post-Flip Hidden-Moisture Investigations',
    desc: 'A significant share of Pontiac housing stock has been through one or more investor flips. Cheap drywall over wet framing, paint over unaddressed mold, vinyl plank over saturated subfloor — we see all of it. When a buyer calls us a year after closing because there is a smell in a finished basement, the investigation usually ends in a corner of the house nobody touched since the flip. We document it, remediate it, and give the homeowner something they can use if the transaction is still inside a disclosure window.',
  },
]

const whyCards = [
  {
    title: 'Closest Response — 7 Miles From You',
    body: 'Our 4060 W Maple Rd office in Bloomfield Township is seven miles south of downtown Pontiac. That is the shortest distance to any city on our coverage list — closer than Rochester Hills, closer than Troy, closer than Royal Oak. Fifteen minutes on a clear road.',
  },
  {
    title: 'Older-Home Expertise',
    body: 'Galvanized supply, cast-iron stacks, plaster and lath, clay laterals, knob-and-tube near water. We have worked on homes from the 1900s through the 1950s across every Pontiac neighborhood, and our drying plans match the actual construction instead of a modern-house default.',
  },
  {
    title: 'Landlord & Tenant Coordination',
    body: 'A large share of Pontiac is rental. We know how to respond when the tenant calls at 11 PM, document the unit for an absentee landlord, and protect tenant belongings through the chain of custody while the insurance side gets sorted out.',
  },
]

const faqs = [
  {
    q: 'How fast can you reach our Pontiac house? You are in Bloomfield, right?',
    a: `Our office at 4060 W Maple Rd in Bloomfield Township is about seven miles south of downtown Pontiac — the closest city on our coverage list. Target on-site arrival for a Pontiac emergency call is fifteen minutes under normal traffic, and we rarely miss that window unless weather has the whole region slowed down. Call ${PHONE} and the dispatcher will give you a real ETA based on where the nearest crew currently is, not a generic promise.`,
  },
  {
    q: 'Our 1930s Tudor in Seminole Hills has plaster walls — will you tear them out?',
    a: 'Almost never. Original plaster and wood lath is a finish we work hard to preserve because replacing it is a specialty plaster trade with long lead times and high cost. Our standard approach on a Seminole Hills or Franklin Blvd plaster wall is to create a small controlled access point at the edge of the affected area, run low-grain cavity drying with injection ports, and monitor moisture daily until the lath and any blown-in insulation reads dry. If we do need to remove a section we will show you the moisture readings that justify it before we touch the wall.',
  },
  {
    q: 'The basement in our Franklin Blvd foursquare keeps flooding from the floor drain during heavy rain. Is that sewer or sump?',
    a: `It is almost certainly the combined sewer surcharging back into the house through the floor drain. A lot of older Pontiac blocks are served by combined sewers — a single pipe carries both stormwater and sanitary waste — and when the municipal system overloads during heavy rain, the closest drain below street level becomes the relief valve. That matters for your insurance conversation because combined-sewer backup is treated differently from sump-pump failure under most policies. A backup-of-sewers-and-drains endorsement, if you have one, is usually the relevant coverage. We can document the loss accurately either way, and the way we write the scope lines up with how your carrier looks at it.`,
  },
  {
    q: 'Our tenant called us at 11 PM — can you respond before we get there?',
    a: `Yes. A significant share of our Pontiac call volume is absentee landlords and property managers. Our dispatcher will get a verbal authorization from you over the phone, document the call time and content, and send a crew with a written chain-of-custody protocol for tenant belongings. We photograph everything before we move anything, keep tenant-owned items separated from landlord responsibility scope, and produce documentation both sides can use later. Call ${PHONE} as soon as your tenant calls you — the sooner we are in the unit, the smaller the scope stays.`,
  },
  {
    q: 'Does State Farm still write policies on older Pontiac homes?',
    a: 'Carrier availability for older Pontiac housing changes year to year, and which companies are writing new business in a given ZIP depends on their book and on recent loss ratios. We see State Farm, Auto-Owners, Citizens, AAA, Allstate, Liberty Mutual, and Michigan-based writers on Pontiac losses regularly, and we bill every major carrier that operates in the area. What we can tell you is that the documentation we produce — scope, photos, moisture logs, line-item pricing in the industry-standard format — works the same regardless of which company your policy is with. Our job is the technical record; the coverage question belongs to you and your agent.',
  },
  {
    q: 'Our apartment above a retail shop flooded the store below — whose insurance pays?',
    a: 'This is one of the more complicated fact patterns in downtown Pontiac because the loft units and the ground-floor retail spaces are frequently under different ownership, different lease structures, and different policies. Typically the tenant in the loft has an HO-6 or renters policy with limited liability for water damage caused to others, the building owner has a commercial property policy, and the retail tenant below has their own contents and business-interruption coverage. All three potentially come into play, and which one responds first depends on the cause of loss and the specific policy language. We produce one clean loss document that all parties and all carriers can work from — that is the single most useful thing you can have in a multi-party scenario like this.',
  },
  {
    q: 'The Clinton River rose after heavy rain and backed into our basement — is that flood or sewer?',
    a: 'The Clinton River and the Pontiac-area tributaries cause two distinct types of loss and it matters which one you had. Surface water that rose from the river over the bank and entered through a basement window well, door, or grade is flood water under the National Flood Insurance Program definition, and it is covered only if you have a separate NFIP flood policy. Water that came up through a floor drain or sewer cleanout during that same rain event is combined-sewer backup, which is covered differently — usually under a sewer-and-drain backup endorsement on your homeowners policy, not under flood. The physical loss looks similar but the coverage path is entirely different. We document which path the water took so the claim is filed against the right coverage.',
  },
  {
    q: 'Our boiler room flooded — can you work around a functioning boiler?',
    a: `Yes, and we have done a lot of this work in older Pontiac homes and in the small commercial boilers in downtown mixed-use buildings. A leaking radiator, a failed zone valve, or a relief-valve discharge can flood a boiler room quickly, and shutting the whole system down in January is not a decision to make lightly. We work with your heating contractor to isolate the specific loop or zone that failed, keep the rest of the system running where that is safe, and dry around the operating equipment with the appropriate clearances. If the loss requires a full shutdown — for example if water got into the burner assembly — we will tell you that and help arrange temporary heat while the repair is made.`,
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
      name: 'Pontiac, MI',
      item: PAGE_URL,
    },
  ],
}

export default function PontiacPage() {
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
            Closest Response — Pontiac, MI — 7 Miles From Our Office
          </div>
          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              margin: '0 0 20px',
              maxWidth: 860,
            }}
          >
            Pontiac Water Damage Restoration Built for a City of Older Homes, Rentals, and Combined Sewers
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
            {BUSINESS_NAME} dispatches from 4060 W Maple Rd, seven miles south
            of the Oakland County Courthouse — the shortest run to any city we
            serve. Fifteen-minute typical response across Seminole Hills,
            downtown lofts, West Pontiac bungalows, Telegraph-corridor
            apartments, and the Pontiac Lake neighborhoods. We know how older
            Pontiac housing actually fails and we dry it without destroying the
            finishes.
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

      {/* PONTIAC IS OUR BACKYARD */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Closest City We Serve"
            title="Pontiac Is Our Backyard — Seven Miles, Fifteen Minutes"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            We say this plainly because it is true: no city we serve is closer
            to our shop than Pontiac. The drive from 4060 W Maple Rd in
            Bloomfield Township to the Oakland County Courthouse at 1200 N
            Telegraph is about seven miles, mostly up Telegraph or across on
            Orchard Lake Rd into South Boulevard. In fifteen minutes under
            normal traffic, a fully-loaded extraction truck can be at a Franklin
            Blvd foursquare, a Seminole Hills Tudor, a West Pontiac bungalow, or
            a Pontiac Lake area ranch. For many addresses inside Pontiac city
            limits, we are closer than Auburn Hills-based crews, closer than
            Waterford-based crews, and closer than any of the Detroit-area
            franchise crews that advertise here but actually dispatch from
            twenty or thirty miles out.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            That proximity is not a marketing line — it is the single most
            important variable in what a water loss eventually costs. Clean
            water becomes contaminated at about the 48-hour mark. Drywall below
            a saturation line wicks another foot or two every hour it sits.
            Cast-iron stacks that weep for a weekend put visible mold on plaster
            lath by the following Tuesday. When you call and we roll from seven
            miles away instead of thirty, you skip the portion of the loss
            curve where the scope doubles.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We work every Pontiac neighborhood. Seminole Hills with its 1920s
            Tudors and Colonials. The downtown core and the Phoenix Center area
            with its growing base of loft conversions over original mercantile
            commercial. West Pontiac and the blocks off Franklin Blvd with
            their 1910s-1930s foursquares and bungalows. The Telegraph corridor
            with its larger multi-family buildings. The Pontiac Lake and
            Williams Lake areas where the housing mix shifts toward postwar
            ranches and lakefront builds. Each has its own failure modes and we
            know them.
          </p>
        </div>
      </section>

      {/* OLDER HOUSING OLDER PLUMBING */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Pontiac Housing Stock"
            title="Older Housing, Older Plumbing — and the Failures That Come With It"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            A lot of Pontiac housing was built between 1900 and 1950, during
            the era when the auto industry — Pontiac Motor, GM Truck, Fisher
            Body — was pulling workers into the city faster than contractors
            could build for them. That stock is still here: bungalows and
            foursquares west and north of downtown, larger Tudors and Colonials
            in Seminole Hills, postwar ranches and Cape Cods from the GI Bill
            era pushing out toward the township line. It is a beautiful housing
            inventory and a historically significant one. It also carries every
            material-era plumbing failure we deal with as a restoration
            company.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Galvanized steel supply lines were the residential standard from
            roughly the 1920s through the 1960s, and most homes that still have
            their original supply have passed the point where the interior wall
            of the pipe has corroded down to a brittle shell. The classic
            failure is a pinhole — a tiny, high-pressure spray inside a wall
            cavity that can run for days or weeks before anyone sees evidence
            on a finish surface. By the time you notice the bubble in the
            wallpaper, the blown-in insulation behind the lath is saturated and
            there is visible mold on the wood.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Cast-iron drain stacks corrode from the inside too, and they fail
            slowly — a weeping horizontal joint behind a second-floor wall, a
            pinhole on a vertical run, a slow drip through a plaster ceiling
            that looks like condensation for a month before the water line
            finally shows. Clay sewer laterals between the house and the city
            main are the third predictable failure: tree roots find them, the
            pipe cracks, and eventually a section collapses and the line backs
            up. Combined-sewer backups during heavy rain are a separate
            category — not a lateral problem at all, but a municipal-system
            surcharge pushing gray water into the lowest drain in your
            basement. The aging three-tab shingle roofs on many older Pontiac
            homes are a fourth: roof failures that wet attic insulation
            silently through a heavy winter.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Older boiler systems with steel radiators are the fifth. The
            rubber-diaphragm relief valves, zone valves, and union joints on
            heating loops that have been running for fifty years will eventually
            give up, and the flood from a boiler-room failure is complicated
            because the heat is still running somewhere in the house while you
            are standing in six inches of hot water. We dry around operating
            boilers when we can, coordinate with a heating contractor when the
            system has to come down, and we know the sequence well because
            Pontiac has more operating boilers than almost any other city on
            our coverage list.
          </p>
        </div>
      </section>

      {/* PONTIAC SCENARIOS */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Pontiac Scenarios"
            title="Six Losses We Have Actually Worked in Pontiac"
            intro="These are the kinds of calls we take from Pontiac every week — each one specific to a neighborhood and a housing era."
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
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
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

      {/* SERVICES FOR PONTIAC */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Services for Pontiac"
            title="The Work We Do Across the City"
            intro="Scope-accurate restoration calibrated to the housing stock, the plumbing era, and the multi-family mix that defines Pontiac."
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

      {/* ABSENTEE LANDLORDS & TENANTS */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Rental Property Coordination"
            title="Working With Absentee Landlords and Tenants"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Pontiac has a significantly larger share of renter-occupied
            households than the suburbs that surround it. Single-family rentals
            on the west side, two-flats and four-flats in the older blocks
            around downtown, and multi-unit apartment complexes along
            Telegraph, Walton, Perry, and Baldwin all generate a specific kind
            of call pattern: the tenant discovers water damage at an
            inconvenient hour, the landlord or property manager is off-site,
            and the first conversation we have is with someone who does not own
            the property but does want the water to stop.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Our dispatch process is built for this. When a tenant calls, we get
            the property owner or manager on the phone for verbal authorization
            before extraction work begins, document the authorization, and
            proceed with a written chain-of-custody protocol for any tenant
            belongings that need to be moved. Tenant-owned items stay
            segregated from the landlord-scope work and are photographed in
            place before anything is touched. That separation matters later
            when two different insurance conversations are happening in
            parallel — the landlord-side property policy on the building and
            the tenant-side renters policy on contents.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            If you own rental property in Pontiac and have ever had the
            experience of finding out about a water loss two days after the
            fact because the tenant did not know who to call, get our number on
            your lease disclosure now. Tell your tenants to call us directly,
            cc you, and we handle the rest. We have done this enough that the
            workflow is routine and the documentation is clean.
          </p>
        </div>
      </section>

      {/* INSURANCE CHALLENGES */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Insurance in Older Housing"
            title="What We See on Pontiac Claims"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Homeowners insurance in older Pontiac neighborhoods has some
            patterns worth naming. Higher deductibles are common on older
            housing because carriers price for the replacement-cost exposure on
            homes built a century ago. Some policies carry exclusions specific
            to galvanized supply, polybutylene, or original cast-iron drain
            systems — meaning a sudden pipe-burst loss may be covered while the
            underlying plumbing replacement is not. Sewer backup is typically a
            separate endorsement rather than a default coverage, and whether
            the endorsement is on a given policy varies.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Documentation is the variable we can control. Our scope of work
            identifies the cause of loss cleanly, the moisture log shows the
            sequence of drying day by day, and the line-item pricing uses the
            same industry-standard software and format that adjusters from
            every major carrier already work with. When a claim on an older
            home is going to see scrutiny, the single best thing a policyholder
            can have on their side is a professional-grade loss record. That is
            what we produce.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We bill every major carrier that operates in Michigan — State Farm,
            Auto-Owners, AAA, Citizens, Allstate, Liberty Mutual, Farmers,
            Progressive, Travelers, Hanover, MemberSelect, Michigan Millers,
            Frankenmuth, and the specialty writers that handle high-value
            older homes. Coverage questions belong between you and your agent.
            The technical side of the claim belongs to us.
          </p>
        </div>
      </section>

      {/* WHY PONTIAC CALLS US */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Why Pontiac Calls Us"
            title="Three Things That Matter Here"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {whyCards.map((item) => (
              <div
                key={item.title}
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
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Pontiac FAQs"
            title="Questions We Hear From Pontiac Homeowners, Tenants, and Landlords"
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

      {/* CTA */}
      <section
        style={{
          backgroundColor: C.dark,
          padding: '72px 24px',
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
            Water Damage in Your Pontiac Home or Rental?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            We are fifteen minutes away — faster than anywhere else we serve.
            Call now, talk to a live dispatcher, and get a real ETA from our
            Bloomfield Township shop.
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
      <section style={{ backgroundColor: C.white, padding: '48px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 14,
              color: C.secondary,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 600,
              margin: '0 0 16px',
            }}
          >
            Nearby & Related Services
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 14,
            }}
          >
            {[
              { href: '/bloomfield', label: 'Bloomfield Water Damage' },
              {
                href: '/auburn-hills-mi-water-damage-restoration',
                label: 'Auburn Hills Water Damage',
              },
              {
                href: '/water-damage-restoration',
                label: 'All Water Damage Services',
              },
              {
                href: '/services/sump-pump-failure',
                label: 'Sump Pump Failure',
              },
              {
                href: '/commercial-restoration',
                label: 'Commercial Restoration',
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-block',
                  padding: '10px 18px',
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  backgroundColor: C.bgAlt,
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
