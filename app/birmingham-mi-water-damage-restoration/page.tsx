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

const SERVICES = [
  {
    title: 'Water Damage Restoration',
    body: 'Truck-mounted extraction, moisture mapping and targeted structural drying for homes along Quarton Lake, Poppleton Park and the Rouge River corridor. We document every affected material so your adjuster can settle the claim faster.',
  },
  {
    title: 'Fire & Smoke Damage',
    body: 'Soot removal, HEPA air scrubbing and odor counteraction for fires in Birmingham\u2019s older Tudor and Colonial housing stock, where balloon-framed walls can hide smoke migration two stories up.',
  },
  {
    title: 'Storm Damage Response',
    body: 'Emergency tarping, board-up and water mitigation after the summer squall lines that roll up Woodward Avenue. We secure the envelope first so secondary damage stops before the insurance inspection.',
  },
  {
    title: 'Mold Remediation',
    body: 'Contained removal of mold colonies in damp Birmingham basements and crawlspaces, performed to IICRC S520 standards with HEPA-filtered negative air and post-remediation verification.',
  },
  {
    title: 'Sewage Cleanup',
    body: 'Category 3 black-water extraction when Birmingham\u2019s combined storm-sewer lines back up through basement floor drains. Full PPE, biocide treatment and safe disposal of porous materials.',
  },
  {
    title: 'Reconstruction',
    body: 'Drywall, hardwood, trim and cabinetry rebuild once the structure is dry. One crew from first extraction call to final paint touch-up \u2014 no juggling subcontractors in the middle of your claim.',
  },
]

const FAQS = [
  {
    q: 'How fast can you reach my house in Birmingham?',
    a: 'Our crews dispatch from 4060 W Maple Rd in Bloomfield Township \u2014 roughly a ten-minute drive to Downtown Birmingham or Quarton Lake on a normal traffic day, longer during Woodward Dream Cruise week. We aim to be on site within 60 minutes for any emergency water call inside the 48009 zip.',
  },
  {
    q: 'Our 1920s Tudor near Holy Name has a wet basement every heavy rain. Is that covered by insurance?',
    a: 'Gradual seepage through a foundation is usually excluded, but a sudden sump-pump failure or sewer backup with the proper endorsement often is. We inspect the actual source, document it photographically and help you understand which coverage applies before you file \u2014 without giving advice on claim strategy that only a licensed public adjuster can give.',
  },
  {
    q: 'Rouge River overflowed into our yard off Lincoln. Do you handle surface flooding?',
    a: 'Yes. Overland flooding near the Rouge River floodplain is typically a NFIP flood-policy item rather than standard homeowners, but the drying, sanitizing and reconstruction work is identical. We can begin mitigation on an out-of-pocket basis and transfer documentation to your flood carrier once a claim number is issued.',
  },
  {
    q: 'Our century home near Pembroke Manor has plaster walls. Will you tear them out?',
    a: 'Not if we don\u2019t have to. Original plaster on wood lath can often be dried in place with injection drying and low-grain-per-pound dehumidification, preserving the character that makes these homes valuable. We only open walls when moisture readings confirm the lath behind is saturated.',
  },
  {
    q: 'Do you bill our insurance directly?',
    a: 'Yes. We work with every major carrier writing policies in Oakland County and submit Xactimate-format estimates directly to your adjuster. You sign a standard work authorization and handle your deductible; we handle the paperwork.',
  },
  {
    q: 'My tear-down rebuild in Quarton has radiant-heat concrete floors that got soaked during framing. Can you dry those?',
    a: 'Yes \u2014 wet slab drying on new construction is one of the calls we get most often from Birmingham luxury builders. We use desiccant dehumidification and low-profile air movers to pull bound moisture out of the slab before flooring goes down, then document ambient conditions for the GC\u2019s closeout file.',
  },
  {
    q: 'Are you IICRC certified?',
    a: 'Our water-damage technicians work to the IICRC S500 standard of care and our mold crews to S520. These are the industry reference documents for restorative drying and mold remediation; we follow them whether or not an adjuster is watching.',
  },
  {
    q: 'Downtown Birmingham condo above a retail shop \u2014 can you work in an occupied mixed-use building?',
    a: 'Yes. We stage equipment through service entries, run containment in common hallways and schedule noisy extraction outside retail hours when the property manager requires it. Most Old Woodward and Maple Road condos we have worked in let us operate without closing the ground-floor tenant.',
  },
]

export default function BirminghamPage() {
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
      <section style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[1120px] mx-auto px-6 py-20 text-center">
          <div
            className="inline-block mb-4 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ff385c',
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            Serving Birmingham, Michigan 24/7
          </div>
          <h1
            className="font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.6px',
              lineHeight: 1.1,
            }}
          >
            Water Damage Restoration in Birmingham, MI
          </h1>
          <p
            className="text-[#6a6a6a] mx-auto mb-8"
            style={{ maxWidth: 720, fontSize: '1.125rem', lineHeight: 1.55 }}
          >
            {BIZ_NAME} dispatches water, fire, storm, mold and sewage crews to Birmingham
            homes and businesses around the clock. Our office on W Maple Road is roughly
            ten minutes from Downtown Birmingham, Quarton Lake and the Rouge River
            corridor \u2014 so when a sump fails in Poppleton Park at 2 a.m., a technician
            is usually knocking on your door before the basement carpet is fully soaked.
          </p>
          <HeroCTA />
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-20">
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Local Response"
            title="Birmingham is not a generic suburb. Neither is your damage."
          />
          <div className="text-[#444] space-y-5" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            <p>
              Birmingham\u2019s housing stock is unusually mixed for a city its size. A
              1924 English Tudor on Pilgrim shares a block with a 1955 brick ranch near
              Woodward and a 2022 modern-farmhouse tear-down in Quarton. Each one fails
              differently when water gets in \u2014 and anyone who has worked Oakland
              County for a decade will tell you that a playbook built for subdivision
              colonials in Troy or Novi does not translate here.
            </p>
            <p>
              The Rouge River runs right through the middle of the city, and the
              floodplain along Lincoln and east of Adams fills up fast during the spring
              melt and the heavy August downpours that Oakland County has been logging
              more of every year. Overland water, backed-up combined sewers on Old
              Woodward, and aging clay laterals under the older neighborhoods all feed
              the same call: \u201cwe just found water in the basement.\u201d Our job is to
              figure out which source actually caused it, stop the migration, and get
              the structure dry before mold becomes the next problem.
            </p>
            <p>
              We also see failure modes that are specific to century homes. Stone-and-
              mortar foundations near Holy Name and Pembroke Manor weep when the water
              table rises. Cast-iron stacks in Poppleton Park Tudors corrode through at
              the basement slab and leak gray water for weeks before anyone notices.
              Post-war ranches along 14 Mile and Eton still run on copper supply lines
              that pinhole above drop ceilings. None of these are catastrophic on day
              one \u2014 and that is exactly why they become five-figure claims by week
              three.
            </p>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SCENARIOS */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Neighborhood Scenarios"
            title="Common Birmingham water damage calls"
            intro="A sample of the situations we respond to most often inside the 48009 zip."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                h: 'Quarton Lake basement flooding',
                p: 'Homes backing onto Quarton Lake sit on high water table ground. When the lake rises and the sump pump cycles nonstop, a single power flicker can leave three inches of water across a finished lower level within an hour. We show up with generator-powered extraction so we are not waiting on DTE.',
              },
              {
                h: 'Rouge River overflow, east of Adams',
                p: 'The floodplain behind houses on Lincoln, Pilgrim and Oakland fills when the Rouge jumps its banks. Surface water intrudes at the rim joist or the basement window wells and soaks insulation, framing and stored belongings. We extract, dry and decontaminate under Category-2 protocols.',
              },
              {
                h: 'Tudor foundation seepage near Holy Name',
                p: 'Stone-and-mortar foundations on the 1920s Tudors around Holy Name church were never waterproofed to modern standards. Heavy rain pushes hydrostatic pressure through the walls and weeps onto the slab. We dry the affected bay, document the pattern, and refer you to a foundation contractor for the permanent fix.',
              },
              {
                h: 'Sump failure in Poppleton Park',
                p: 'Poppleton Park\u2019s mid-century ranches almost all run a single primary sump with no backup. When the pump seizes or the float sticks, water rises fast. We pump out, set air movers and dehumidifiers, and can coordinate a plumber to replace the pump while we dry the structure.',
              },
              {
                h: 'Sewer backup on Old Woodward',
                p: 'Birmingham\u2019s older combined storm-sewer sections along Old Woodward and around Downtown surcharge during heavy rain, pushing Category-3 black water up through basement floor drains in nearby homes and mixed-use buildings. We handle the full Cat-3 protocol: PPE, extraction, antimicrobial, removal of porous affected materials, and disposal.',
              },
              {
                h: 'Pembroke Manor century-home leaks',
                p: 'The large early-century homes around Pembroke Manor hide a lot of plumbing inside plaster walls. A pinhole in a second-floor supply line can drip for a week before a stain appears on the dining-room ceiling. We find the actual source with thermal imaging and moisture meters, then dry from the inside out.',
              },
            ].map((card) => (
              <div
                key={card.h}
                className="bg-white p-7 rounded-xl"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="font-semibold text-[#222] text-[18px] mb-2">
                  {card.h}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  {card.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Services"
            title="What we handle in Birmingham"
            intro="A single crew, from the first extraction hose to the final coat of paint."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-7 rounded-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="font-semibold text-[#222] text-[18px] mb-2">
                  {s.title}
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why Birmingham homeowners call us"
            title="Boring, careful, documented work"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                h: 'IICRC S500 standard of care',
                p: 'Our water technicians dry to the published industry reference, not to guesswork. Moisture readings are logged at every visit so the drying log matches what your adjuster expects.',
              },
              {
                h: 'Direct insurance billing',
                p: 'We submit Xactimate-format estimates straight to your carrier and work the file to closure. You sign the work authorization, pay your deductible, and we handle the rest.',
              },
              {
                h: '24/7 live dispatch from Bloomfield',
                p: 'A person answers the phone at 3 a.m., not a machine. The Bloomfield office is minutes from every Birmingham neighborhood, so equipment is on the truck and moving within a few minutes of your call.',
              },
            ].map((t) => (
              <div
                key={t.h}
                className="bg-white p-6 rounded-xl text-left"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                }}
              >
                <h3 className="font-semibold text-[#222] text-[16px] mb-2">
                  {t.h}
                </h3>
                <p className="text-[#6a6a6a] text-[14px] leading-relaxed m-0">
                  {t.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[820px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="FAQ"
            title="Birmingham water damage questions"
          />
          <div className="space-y-5">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
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

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#222222' }}>
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              letterSpacing: '-0.44px',
            }}
          >
            Water in your Birmingham basement right now?
          </h2>
          <p
            className="mb-8"
            style={{ color: '#c9c9c9', fontSize: '1.0625rem', lineHeight: 1.6 }}
          >
            Call {BIZ_NAME} and a live dispatcher will have a crew headed toward
            Birmingham within minutes. No answering service, no call-back loop, no
            weekend upcharge.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-[#222] font-semibold no-underline"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '0 32px',
              height: '56px',
              fontSize: '1.0625rem',
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
