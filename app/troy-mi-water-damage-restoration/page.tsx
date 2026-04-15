import { SiteHeader, SiteFooter, PillarSectionHeading } from '../_components/site-chrome'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const BUSINESS_NAME = 'Provail Restoration of Bloomfield'
const PAGE_URL = 'https://provailrestoration.com/troy-mi-water-damage-restoration'

const C = {
  accent: '#ff385c',
  text: '#222222',
  secondary: '#6a6a6a',
  white: '#ffffff',
  bgAlt: '#f7f7f7',
  border: '#ebebeb',
  dark: '#222222',
}

const services = [
  {
    title: 'Somerset-Area Luxury Basement Flooding',
    desc: 'The newer luxury builds east of Somerset — with finished lower levels, wine rooms, home theaters, and built-in millwork — are the highest-stakes water losses we respond to in Troy. A failed sump during a summer downpour or a hot-water tank rupture behind a wet bar can put tens of thousands of dollars of casework on the line inside an hour. We extract water, protect finishes in place where we can, and run psychrometric drying plans calibrated to the tighter envelopes these homes are built with.',
  },
  {
    title: 'Big Beaver Office Park Commercial Water Losses',
    desc: 'The Big Beaver office corridor from I-75 west toward Somerset and Coolidge concentrates more Class A office space than almost anywhere in Oakland County. After-hours sprinkler discharges, rooftop HVAC condensate line failures, and slab-edge rain intrusion are the three calls we see most often. We mobilize commercial extraction equipment, coordinate with building engineers and property managers, and document losses so the tenant, owner, and carrier conversations all have the same technical record.',
  },
  {
    title: '1970s Colonial Sump Pump Failures',
    desc: 'Raintree Village, Sylvan Glen, Beach Forest, Northfield Hills and the older tract colonials north of Long Lake Road were built before modern battery-backup sump systems were standard. When a primary pump quits during a heavy rain, the finished rec rooms and lower-level carpet go first. We extract, pull wet pad, set air movers and LGR dehumidifiers, and monitor moisture daily so the subfloor and bottom plates come back dry — not just surface-dry.',
  },
  {
    title: 'Frost-Heave Pipe Bursts in Older Tract Homes',
    desc: 'Troy Corners, the older subdivisions around Big Beaver and Livernois, and the mid-century ranches north of Square Lake have clay soils that move with every hard freeze. That seasonal heave stresses copper and galvanized lines running through crawl spaces and unheated garage walls. When they let go in January, the loss is often hidden inside a wall for hours before anyone notices. We find the source, remove saturated materials, and dry the cavities before mold gets established.',
  },
  {
    title: 'Rouge River Tributary Flooding',
    desc: 'The Red Run and upper Rouge tributaries cut through the southern and western edges of Troy, and the low-lying yards in those drainage corridors back up during extended spring rain events. We handle silt-laden groundwater intrusion, saturated crawl spaces, and contaminated insulation with antimicrobial protocols appropriate for Category 2 and Category 3 water.',
  },
  {
    title: 'Structural Drying & Moisture Mapping',
    desc: 'Every Troy home we dry gets daily moisture readings logged against target dry standards. That is how we know when the envelope is actually dry versus when it just feels dry. It is also the paperwork your insurance adjuster needs to close out the mitigation portion of the claim cleanly.',
  },
]

const faqs = [
  {
    q: 'How fast can you get to a Troy address from your Bloomfield Township office?',
    a: `Our office at 4060 W Maple Rd is about 15 to 20 minutes from most Troy addresses depending on where you are and what traffic on I-75 or Big Beaver looks like. Target response is 30 to 60 minutes door-to-door for Troy emergency calls. During widespread weather events we triage so that homes with active water intrusion move to the front of the line. Call ${PHONE} and the dispatcher will give you an honest ETA based on where the closest crew is.`,
  },
  {
    q: 'Do you handle commercial water damage in the Big Beaver office corridor?',
    a: `Yes. Commercial work along Big Beaver, Stephenson Highway, and the I-75 office parks is a regular part of our Troy service load. We respond to after-hours sprinkler activations, HVAC condensate failures, roof leaks, and slab-edge rain intrusion. We coordinate directly with building engineers and property managers, and we are familiar with working around tenant schedules, security protocols, and sensitive electronics on raised-floor systems.`,
  },
  {
    q: 'My 1970s colonial in Raintree Village just had a sump pump fail. Is the carpet salvageable?',
    a: 'It depends on how long the water sat, what it contacted, and what the carpet is made of. Clean groundwater caught quickly on synthetic pad can often be extracted, the pad replaced, and the carpet dried in place. If the water sat long enough to wick into the subfloor or the pump kicked sewage back through a floor drain, the carpet and pad almost always need to come out. We will give you a straight answer on site after we measure moisture and check the water category.',
  },
  {
    q: 'What should I do while waiting for a crew to arrive in Troy?',
    a: `If you can safely shut off the water at the main or the affected fixture, do that first. Move electronics, rugs, and valuables to a dry floor. Stay out of rooms with sagging ceilings or standing water near outlets or the electrical panel. Do not run a household shop vac on water you suspect is contaminated. Call us at ${PHONE} and the dispatcher will walk you through the next few minutes while the truck is en route.`,
  },
  {
    q: 'Does homeowners insurance usually cover frozen pipe bursts in Troy?',
    a: `Sudden and accidental discharge from a burst pipe is covered under most standard HO-3 homeowners policies, subject to your deductible and policy conditions. Coverage decisions always belong to you and your carrier. What ${BUSINESS_NAME} controls is the technical record of the loss — photos, moisture readings, a written scope, and drying logs — so that the conversation with your adjuster is grounded in documentation rather than back-and-forth guesswork.`,
  },
  {
    q: 'How long does a typical Troy water damage job take from start to finish?',
    a: 'Extraction is usually a matter of hours on a residential loss. Structural drying runs three to five days for a clean-water event with daily moisture monitoring. If the scope includes drywall removal, flooring replacement, and finish carpentry, full reconstruction can add one to three weeks depending on size and material lead times. Contaminated water jobs — sewer backups or floodwater that contacted soil — take longer because the containment and disposal protocols add steps.',
  },
  {
    q: 'Do you work on the newer builds east of Somerset and around Troy Corners?',
    a: 'Yes. The newer luxury construction around Somerset, the custom homes east of Rochester Road, and the infill builds around Troy Corners all have tighter envelopes and engineered assemblies that dry differently from older plaster-and-lath houses. We adjust the drying plan to match the assemblies we are actually working with — LVP over sleeper systems, engineered hardwood on concrete, spray foam in rim joists — instead of running the same playbook on every house.',
  },
  {
    q: 'Can you help with the insurance claim paperwork?',
    a: `We are a restoration contractor, not a public adjuster, and we do not negotiate your claim for you. What we do is produce the mitigation documentation — scope of work, photos, moisture readings, equipment logs, and line-item pricing in the industry-standard format your carrier's adjuster already knows — so that your side of the file is complete and professional. Most Troy homeowners find that gets the conversation moving in the right direction.`,
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
      name: 'Troy, MI',
      item: PAGE_URL,
    },
  ],
}

export default function TroyPage() {
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
            Serving Troy, Michigan 24/7
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
            Water Damage Restoration in Troy, MI
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
            {BUSINESS_NAME} dispatches from 4060 W Maple Rd, about 15 to 20
            minutes west of most Troy addresses. From Somerset-area luxury
            basements to the Big Beaver office corridor to the older colonial
            subdivisions around Raintree Village and Sylvan Glen, we respond to
            Troy water damage emergencies every hour of every day.
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

      {/* LOCAL INTRO */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Local Response"
            title="A Restoration Crew That Actually Knows Troy"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            Troy is not one kind of water damage call. The city is a patchwork
            of housing eras and commercial footprints, and the losses we
            respond to here reflect that. You have 1960s and 1970s colonials in
            established subdivisions like Raintree Village, Sylvan Glen, Beach
            Forest, and Northfield Hills, where the aging plumbing, original
            sump pumps, and settled clay-soil foundations all become issues at
            different times of year. You have the newer luxury builds east of
            Somerset and north toward Long Lake Road, where finished basements
            and engineered assemblies make the stakes higher when something
            fails. And you have the Big Beaver office corridor — one of the
            densest commercial office markets in Oakland County — where
            after-hours sprinkler discharges and HVAC failures are their own
            category of call.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}
          >
            {BUSINESS_NAME} stages equipment in Bloomfield Township, a short
            run across Maple or Square Lake to reach any Troy address. That
            proximity matters when water is actively coming into a finished
            lower level and every hour the pad stays saturated doubles the
            eventual scope. Our crews know which neighborhoods drain where
            after a heavy rain, which older subdivisions have chronic sump
            failures during January thaws, and how the Rouge River tributaries
            along the southern edge of Troy behave during extended spring wet
            periods.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Our technicians hold IICRC credentials in water damage restoration,
            applied structural drying, and applied microbial remediation. We
            document every loss with photos, moisture readings, and a written
            scope so that the conversation with your insurance carrier has a
            clear technical record attached. We are a restoration contractor
            — not a public adjuster, and not a claims negotiator. Our job is
            to dry your home correctly and give you the paperwork your
            adjuster actually needs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Troy Services"
            title="Water Damage Scenarios We Handle Across Troy"
            intro="Six of the most common calls we take from Troy homeowners and commercial property managers — and how we actually work them."
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

      {/* COMMERCIAL SPOTLIGHT */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Commercial"
            title="Commercial Restoration for the Big Beaver Corridor"
          />
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            Troy has one of the largest concentrations of Class A office space
            in metro Detroit, stretching along Big Beaver Road from I-75 west
            through the Somerset-adjacent office parks and north along
            Stephenson Highway. That commercial density generates a category
            of water loss that strictly residential restoration companies are
            not set up to handle well: after-hours sprinkler activations
            flooding multiple suites, rooftop HVAC condensate-line failures
            dripping through drop ceilings into occupied workstations, and
            slab-edge rain intrusion along parking-deck-level retail.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: '0 0 16px',
            }}
          >
            {BUSINESS_NAME} mobilizes commercial extraction equipment —
            truck-mounted units, high-volume air movers, and desiccant
            dehumidifiers — for losses that are simply too large for household
            gear. We coordinate directly with building engineers, property
            managers, and tenant reps. We work around occupied suites, secure
            sensitive electronics on raised-floor systems, and document the
            loss cleanly enough that the tenant, owner, and carrier
            conversations all start from the same record.
          </p>
          <p
            style={{
              fontSize: 17,
              color: C.secondary,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            If you manage commercial property anywhere along Big Beaver,
            Coolidge, Livernois, Rochester Road, or the I-75 corridor through
            Troy, call us before the next loss so we have your building on
            file. It shortens response time significantly when the call comes
            in at 2 AM.
          </p>
        </div>
      </section>

      {/* TRUST / WHY */}
      <section style={{ backgroundColor: C.bgAlt, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Why Troy Homeowners Call Us"
            title="What You Actually Get When You Call"
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
                title: '15–20 Minute Response Window',
                body: 'Dispatched from 4060 W Maple Rd in Bloomfield Township — minutes from any Troy address via Maple, Square Lake, or Big Beaver.',
              },
              {
                title: '24/7 Live Dispatch',
                body: 'An actual person answers the phone at 2 AM. You will get an ETA based on where the closest truck is, not a callback tomorrow.',
              },
              {
                title: 'IICRC-Credentialed Technicians',
                body: 'Water damage restoration, applied structural drying, and applied microbial remediation training on every crew we dispatch.',
              },
              {
                title: 'Insurance-Grade Documentation',
                body: 'Daily moisture logs, photo documentation, and written scopes in the format your adjuster already works with.',
              },
              {
                title: 'Residential and Commercial',
                body: 'Raintree Village basement one hour, Big Beaver office suite the next. The equipment and training scale to the loss.',
              },
              {
                title: 'Straight Answers On Site',
                body: 'We will tell you what is salvageable and what is not before we start tearing anything out. No pressure, no upsell theater.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: C.white,
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
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <PillarSectionHeading
            eyebrow="Troy FAQs"
            title="Questions We Hear From Troy Homeowners and Property Managers"
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
            Water in Your Troy Home or Building Right Now?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            Every hour the pad stays saturated doubles the eventual scope. Call
            now and we will give you a real ETA and a straight answer.
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
