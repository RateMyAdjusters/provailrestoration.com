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
    title: 'Water Damage Restoration',
    body:
      'Emergency water extraction, structural drying, and moisture mapping for Royal Oak basements, crawlspaces, and main-floor living areas after supply-line bursts, dishwasher leaks, and groundwater intrusion.',
  },
  {
    title: 'Sewage & Sewer Backup Cleanup',
    body:
      'Category 3 sewage cleanup, disinfection, and contaminated-material removal for homes affected by Red Run Drain surcharges and combined-sewer overflow events along the Vinsetta Park and Normandy Oaks corridors.',
  },
  {
    title: 'Mold Remediation',
    body:
      'Containment, HEPA air scrubbing, and removal of mold growth behind plaster walls, inside finished basements, and under hardwood floors common in Royal Oak\'s older housing stock.',
  },
  {
    title: 'Fire & Smoke Damage Restoration',
    body:
      'Soot cleanup, odor neutralization, and board-up after kitchen fires, electrical faults in aging knob-and-tube wiring, and chimney incidents in pre-war homes near the Detroit Zoo and Starr-Jaycee Park.',
  },
  {
    title: 'Storm Damage Restoration',
    body:
      'Tarping, tree-impact cleanup, and water intrusion repair after the high-wind events and heavy thunderstorms that frequently roll through Oakland County during spring and summer.',
  },
  {
    title: 'Reconstruction Services',
    body:
      'Drywall, flooring, trim, cabinetry, and finish carpentry to rebuild affected rooms back to pre-loss condition — handled in-house so you deal with one team from extraction through final paint.',
  },
]

const faqs = [
  {
    q: 'How fast can you reach a Royal Oak home from your Bloomfield office?',
    a: 'Our office is at 4060 W Maple Rd in Bloomfield Township, roughly a 12–18 minute drive to most Royal Oak addresses via Woodward Avenue or I-696. On active emergencies we dispatch the nearest available crew 24/7, including overnight and holidays.',
  },
  {
    q: 'Why do Vinsetta Park and Northwood basements flood during big storms even without rain entering the house?',
    a: 'Large sections of Royal Oak are served by a combined sewer system that carries both stormwater and sanitary sewage in a single pipe. During high-intensity rain events, the system can surcharge and back up through floor drains and basement toilets. This is not a problem with your home — it is a regional infrastructure issue that Oakland County and the Red Run Drain district have been working on for years. We handle the cleanup side, sanitizing Category 3 water and removing affected materials per IICRC S500 guidelines.',
  },
  {
    q: 'My 1920s bungalow near Main Street has frozen pipes in the attic. Can you help?',
    a: 'Yes. Many of Royal Oak\'s pre-war bungalows have supply lines routed through unheated or poorly insulated attic kneewalls, which freeze and burst during Michigan cold snaps. We extract the water, dry the structure, coordinate a plumber for the line repair, and rebuild damaged ceilings and walls.',
  },
  {
    q: 'Do you work with my insurance carrier?',
    a: 'We work directly with all major carriers and document losses using Xactimate and detailed moisture logs that adjusters expect. You pay your deductible and we bill the rest to your carrier on approved claims. We are not public adjusters and do not negotiate settlements on your behalf — we simply provide the documentation and restoration work.',
  },
  {
    q: 'My brick colonial on the Pleasant Ridge border has water seeping through the foundation. Is that water damage restoration?',
    a: 'Foundation seepage itself is usually a waterproofing or grading issue, but the interior water, damaged drywall, ruined carpet pad, and any resulting mold are absolutely restoration work. We handle the interior side and can refer a trusted waterproofing contractor for the exterior cause.',
  },
  {
    q: 'Are you certified? What standards do you follow?',
    a: 'Our technicians follow IICRC S500 (water damage) and S520 (mold remediation) industry standards for drying, containment, and documentation. We carry general liability and workers\' comp insurance and can provide certificates on request.',
  },
  {
    q: 'Can you handle a sewage backup in a finished basement with hardwood floors?',
    a: 'Yes. Category 3 sewage cleanup in finished spaces requires removing porous materials that have been contaminated — pad, carpet, drywall bottom plate, and sometimes engineered wood — then antimicrobial treatment, drying, and rebuild. We document every affected material for the insurance claim.',
  },
  {
    q: 'What should I do right now while I wait for your crew?',
    a: 'If it is safe: shut off the water at the main, turn off electrical breakers to any wet rooms, move valuables off wet floors, and photograph everything for your claim. Do not run fans on contaminated sewage water — that spreads bacteria. Call us at (248) 531-8404 and we will walk you through the rest.',
  },
]

const trustPoints = [
  '24/7 emergency dispatch, 365 days a year',
  'IICRC S500 and S520 standards followed on every job',
  'Direct insurance billing with Xactimate documentation',
  'Licensed and insured — full in-house reconstruction team',
  'Local Oakland County operation, not a national call center',
]

export default function RoyalOakPage() {
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
            Serving Royal Oak, Michigan
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
            Water Damage Restoration in Royal Oak, MI
          </h1>
          <p
            className="mx-auto mb-8"
            style={{ color: colors.secondary, fontSize: '1.15rem', maxWidth: 720, lineHeight: 1.55 }}
          >
            Provail Restoration of Bloomfield dispatches 24/7 emergency crews to Royal Oak homes and businesses
            — from the 1920s bungalows along Vinsetta Park to the brick colonials on the Pleasant Ridge border
            and the pre-war homes near the Detroit Zoo. Fast arrival from our Bloomfield Township office,
            straight through Woodward Avenue.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* Local context */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Local Response"
            title="Royal Oak homes have specific water problems. We know them."
          />
          <div style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: 1.75 }}>
            <p className="mb-5">
              Royal Oak sits in a tricky spot for water damage. Much of the city — particularly the older
              neighborhoods like Vinsetta Park, Northwood, and the blocks radiating out from downtown Royal Oak
              near Main Street — is served by a combined sewer system that pushes stormwater and sanitary sewage
              through the same pipes. When a summer thunderstorm stalls over Oakland County, that system
              surcharges. Basements take on inches of Category 3 water through floor drains and laundry
              standpipes, even when not a drop of rain has touched the house itself.
            </p>
            <p className="mb-5">
              Then there is the Red Run Drain. Homes in the northern reaches of Royal Oak and along the
              Normandy Oaks and Starr-Jaycee corridors have dealt with Red Run-related basement flooding for
              decades. Combine that with aging clay sewer laterals — many original to the 1920s and 1940s
              housing stock — and root intrusion, offset joints, and partial collapses become common failure
              points we see year after year.
            </p>
            <p className="mb-5">
              Winter brings a different problem. Royal Oak&apos;s pre-war bungalows were built with supply lines
              routed through poorly insulated attic kneewalls and exterior stud bays. A hard Michigan cold
              snap freezes those lines, and when the thaw hits, ceilings open up. We have dried out more
              second-floor bathrooms on Rochester, Washington, and Lincoln than we can count.
            </p>
            <p>
              Our office is at 4060 W Maple Rd in Bloomfield Township, roughly fifteen minutes from most Royal
              Oak addresses via Woodward or I-696. When you call, an actual technician answers — not a
              national routing service — and a truck rolls within the hour on emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Services"
            title="Full-service restoration for Royal Oak"
            intro="Everything we need to take your home from an active water loss back to pre-loss condition, under one roof."
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

      {/* Neighborhood scenarios */}
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Neighborhood Scenarios"
            title="Where we work in Royal Oak"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: 'Vinsetta Park & Northwood',
                d: 'Combined-sewer overflow backups into finished basements during heavy rain. We extract, sanitize, remove affected drywall and flooring, and document for the claim.',
              },
              {
                n: 'Downtown Royal Oak (Main St area)',
                d: '1920s bungalow frozen pipe bursts in unheated attics and second-floor bathrooms. Ceiling drying, plaster repair, and trim restoration.',
              },
              {
                n: 'Normandy Oaks & Starr-Jaycee',
                d: 'Red Run Drain-adjacent basement flooding and aging clay lateral failures. Category 3 cleanup and reconstruction.',
              },
              {
                n: 'Detroit Zoo area pre-war homes',
                d: 'Foundation seepage through original block walls, finished-basement water damage, and mold remediation behind paneled walls.',
              },
              {
                n: 'Pleasant Ridge border brick colonials',
                d: 'Sump pump failures, supply line bursts, and window-well overflow into below-grade living spaces.',
              },
              {
                n: 'Berkley / Huntington Woods / Clawson edge',
                d: 'We regularly service these adjacent communities on the same dispatch runs. Call and we will tell you exactly how far out we are.',
              },
            ].map((item) => (
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

      {/* Trust */}
      <section style={{ padding: '72px 0', backgroundColor: colors.bgAlt }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading eyebrow="Why Provail" title="What you can expect from our crew" />
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
      <section style={{ padding: '72px 0', backgroundColor: '#fff' }}>
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="FAQ"
            title="Royal Oak questions, answered"
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
            Active water loss in Royal Oak? Call now.
          </h2>
          <p className="mb-8 mx-auto" style={{ color: '#c9c9c9', fontSize: '1.1rem', maxWidth: 560 }}>
            Every hour matters with water damage. Our dispatch line is staffed 24/7 and our nearest crew to
            Royal Oak is usually less than twenty minutes away.
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
