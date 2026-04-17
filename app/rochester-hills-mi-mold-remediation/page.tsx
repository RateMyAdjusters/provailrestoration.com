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

const SCENARIOS: { title: string; zip: string; body: string }[] = [
  {
    title: 'Meadowbrook finished basement — drywall on concrete',
    zip: '48306',
    body:
      'Built in the mid-1990s, finished two years later by the original owner: 2x4 walls framed tight to the poured wall, fiberglass batts stuffed behind, drywall and carpet pad on top. Twenty-five years later the occupant notices a musty smell after a rainy week. Nothing is visible. A moisture meter through the drywall reads 35% WME along the bottom 18 inches. Pulling the baseboard reveals black Cladosporium and pink-staining staining across the back of the drywall from the sill plate up to the cold joint. The wall cavity has been wicking hydrostatic moisture for a decade.',
  },
  {
    title: 'Rochester Heights 1958 ranch — crawlspace joist mold',
    zip: '48307',
    body:
      'Original vented crawlspace, earth floor with a brittle 4-mil poly and a dust layer on top. In July the relative humidity inside the crawl runs 78% and condensation forms on every floor joist because the joist surface sits around 62°F. Over three or four summers the underside of the subfloor and the bottom half of every joist goes from tan to charcoal. Often the owner never knew anything was wrong until a home inspector during a sale pulled the crawl hatch.',
  },
  {
    title: 'Adams-corridor luxury new build — HVAC-driven wall mold',
    zip: '48306',
    body:
      'Five-bedroom 2018 build near Adams and Tienken, great detailing on the outside, oversized two-stage AC inside. The AC satisfies setpoint in nine minutes and shuts off — never long enough to pull indoor humidity down. July indoor RH sits at 65-68%. Inside the poorly-detailed rim joist and around a bumpout window, dew-point condensation forms inside the wall cavity. Mold shows up on the paper face of the drywall and the edges of sheathing, with no visible water intrusion from outside.',
  },
  {
    title: 'Clinton River corridor — perimeter foundation mold',
    zip: '48307',
    body:
      'Ranch a few hundred yards from the Clinton River. High water table plus a failed footing drain means liquid water wicks through the block wall every time the river pond up. The homeowner painted DryLok over the interior of the block ten years ago, which hides the stain but not the moisture — now the paint is flaking off in sheets with mold colonies trapped underneath. The fix is never paint; it is exterior waterproofing and a working footing drain, which we coordinate with a waterproofing partner.',
  },
  {
    title: '1990s subdivision attic — sheathing mold from vent imbalance',
    zip: '48309',
    body:
      'Hills of Oakland or Butler Ridge attic: ridge vent present but undersized, soffits partially blocked by blown-in insulation, two bathroom fans terminating six inches from the underside of the sheathing instead of through the roof. Winter condensation freezes on the OSB north slope, thaws every week, and by year eight a dusting of gray-black mold covers several hundred square feet. No water ever entered from outside.',
  },
  {
    title: 'Oakland University rental — bathroom exhaust into attic',
    zip: '48309',
    body:
      'Student rental near OU: the upstairs bathroom exhaust fan was wired but never ducted — it terminates into the attic directly above the bathroom ceiling. Five showers a day for three tenants, over two winters, produces enough moisture load to bloom mold on the ceiling drywall above the bathroom and across the joists for several feet in every direction. Simple to remediate once the exhaust is actually routed outside; impossible to permanently fix without that repair.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'My Meadowbrook basement smells musty but I cannot see any mold — should we pull the drywall?',
    a: 'Not as the first step. We come out with a pinless moisture meter and a thermal camera and read the bottom 18 inches of every finished wall. If we find elevated readings behind an otherwise clean-looking wall, we cut a small inspection hole at the sill plate rather than tearing out the whole basement. In older finished basements where the drywall sits against the concrete with no vapor break, the decision is usually made by what we see through a four-inch inspection cut, not by a guess.',
  },
  {
    q: 'Does my State Farm or Auto-Owners policy cover the mold remediation?',
    a: 'Generally speaking, no — Michigan homeowners policies exclude mold as a separate peril, though most carriers offer a limited endorsement in the $5,000 to $10,000 range for mold that results from a covered water loss. The practical implication is that the way to keep mold out of the claim is to get the original water event dried properly within the first 72 hours. When a storm sewer backup or supply-line break is addressed promptly and dried to IICRC S500 standards, mold never becomes the problem. When the event sat for ten days before anyone touched it, the mold bill ends up being paid out of pocket. We are happy to review your declarations page and tell you which bucket your situation falls into before you file.',
  },
  {
    q: 'Is black mold always toxic? Everything on the internet says Stachybotrys is deadly.',
    a: 'The short answer is that the color of the mold tells you almost nothing about risk. Stachybotrys chartarum is one species among dozens that can appear black, and while it can produce mycotoxins under certain conditions, the CDC position is that extensive indoor mold growth of any species warrants remediation and routine species identification is generally not necessary before remediation. We do not diagnose health effects — that is a conversation with your physician or an allergist. What we do is remove the growth and fix the source, regardless of species.',
  },
  {
    q: 'Do we need lab testing before you start work?',
    a: 'Our default answer is no. If mold is visible and the moisture source is identifiable, remediation is the correct next step and pre-work sampling tells you little that changes the scope of work. Testing is genuinely useful in a narrower set of cases: a pending real-estate disclosure, a landlord-tenant dispute, an insurance or litigation matter where sampling documentation matters, or a family with a documented immune-compromised member whose physician has requested species identification. In those cases we bring in a third-party industrial hygienist so the testing is independent of the remediation contractor.',
  },
  {
    q: 'How fast will mold grow in a Rochester Hills basement after a flood?',
    a: 'The IICRC S500 water-damage standard is clear on this: under typical indoor temperatures, visible fungal growth can begin on wet cellulose materials — drywall paper, cardboard, the face of paper-faced fiberglass — within 48 to 72 hours. That is the window we aim to beat. A basement flood in a Rochester Heights ranch that is extracted, opened up, and under active dehumidification within two days almost never develops a mold problem. The same event left untouched over a long weekend frequently does.',
  },
  {
    q: 'Can we stay in the house during remediation?',
    a: 'In most cases yes, though it depends on which room is affected and how sensitive anyone in the household is. S520 remediation relies on negative-pressure containment: we seal off the work area with 6-mil poly and run a HEPA-filtered air scrubber sized for at least four air changes per hour, which pulls air from the rest of the home through the containment and exhausts it outside. Families without asthma or allergy complaints typically stay in unaffected areas. If someone in the house has active asthma, chronic sinus issues, or is immunosuppressed, we discuss temporary relocation with you before work starts.',
  },
  {
    q: 'Our 1955 ranch crawlspace has mold on every joist — is encapsulation the real answer?',
    a: 'For a vented crawl on Avon Rd or Tienken with summer-condensation mold, yes, encapsulation combined with a dedicated dehumidifier is usually the long-term fix and the cheapest over a ten-year window. The process: remove fiberglass batts if present, HEPA-vacuum every joist and subfloor underside, wet-wipe with a registered fungicide, treat visible staining, seal the crawl vents, lay down a reinforced vapor barrier turned up the walls, and install a crawlspace-rated dehumidifier with a condensate pump. We self-perform the remediation and cleaning; we coordinate with a waterproofing and encapsulation partner for the vapor barrier and dehumidifier install so that the mechanical work is done by a specialist and warranted separately.',
  },
  {
    q: 'Will the mold come back after you remediate?',
    a: 'Only if the moisture source does. The remediation itself — removing porous materials, HEPA-cleaning the rest, and confirming Condition 1 with post-remediation verification — is reliable. What brings mold back is ignoring the source. A finished Meadowbrook basement wall replastered without addressing hydrostatic seepage will be wet again. An attic repaired without opening the soffits will condense again in January. We write the moisture-source recommendation into the final report and, in many cases, stay involved to coordinate the waterproofing or HVAC follow-on work rather than hand you a piece of paper and disappear.',
  },
]

export default function RochesterHillsMoldPage() {
  return (
    <div style={{ backgroundColor: 'white', color: '#222222' }}>
      <SiteHeader />

      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
            style={{
              color: '#ff385c',
              backgroundColor: 'rgba(255,56,92,0.08)',
              borderRadius: '999px',
            }}
          >
            IICRC S520 Mold Remediation — Rochester Hills, MI
          </div>
          <h1
            className="text-[#222222] font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.7px',
              lineHeight: 1.08,
            }}
          >
            The mold in your Rochester Hills basement has been
            there longer than you think. Let&apos;s find the
            source, not just the stain.
          </h1>
          <p className="text-[#6a6a6a] text-lg mb-10 max-w-[700px] mx-auto">
            Visual and moisture-meter inspection, containment
            and negative-air remediation to the IICRC S520
            standard, and clear referrals for the waterproofing
            or HVAC repair that actually keeps it from coming
            back — for 48306, 48307, and 48309.
          </p>
          <HeroCTA />
          <p className="mt-6 text-[13px] text-[#6a6a6a]">
            {BIZ_NAME} · 24/7 response from Bloomfield Township · About 14 miles to most Rochester Hills addresses
          </p>
        </div>
      </section>

      {/* WHY RH HAS A MOLD PROBLEM */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The local picture"
            title="Why Rochester Hills Has a Mold Problem"
          />
          <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
            <p>
              Rochester Hills is not a city with one mold
              story — it is a city with three, and they map
              almost perfectly to three distinct eras of
              housing stock. If we know the decade the house
              was built and which part of town it sits in, we
              can usually predict which scenario we are about
              to walk into before we open the truck.
            </p>
            <p>
              The dominant one, by volume, is
              finished-basement wall-cavity mold in the
              1990s-to-early-2000s subdivisions spread across
              the north and west sides — Meadowbrook, The
              Hills of Oakland, Stony Creek Ridge, Butler
              Ridge, Christian Hills. These homes were
              finished with framing pressed tight to the
              poured concrete, fiberglass batts in the
              cavity, drywall with a kraft-paper back, and
              carpet with a pad running to the wall. None of
              that assembly tolerates hydrostatic moisture,
              and most Rochester Hills lots have plenty of
              it. The result is a wall that wicks moisture
              quietly for a decade, grows a small colony of
              Cladosporium and Aspergillus behind the
              drywall, and produces the musty smell the
              occupant eventually calls about — long before
              any visible staining reaches the outside face
              of the wall.
            </p>
            <p>
              The second story is crawlspace mold in the
              east-side and south-side ranches from the
              1950s and early 1960s off Rochester Rd,
              Livernois, and Avon Rd. Those homes were built
              with vented crawlspaces and no vapor barrier
              that would still be called a vapor barrier by
              modern standards. Every summer the vents pull
              85°F, 75%-humidity air across joists sitting
              at 62°F and condensation runs for three
              months. Over four or five summers, the
              underside of the subfloor and the lower half
              of every joist goes gray-black. We also see
              plaster-wall mold behind bathrooms in these
              ranches when original cast-iron stacks corrode
              through behind the tile.
            </p>
            <p>
              The third is post-water-damage mold. This is
              the category we respond to most often in a
              calendar sense — and it is almost always
              preventable. A storm-sewer backup, a supply
              line under a vanity, a sump pump failure
              during the April 2026 storm cycle — any
              un-dried water event over 48 to 72 hours
              becomes a mold job. The homes that escape
              never had a mold problem to begin with; the
              ones that sat over a weekend or a vacation
              week almost always develop one. We will be
              remediating mold from March and April 2026
              floods through the rest of this year.
            </p>
            <p>
              A fourth, smaller category is worth a mention:
              luxury new builds along the Adams and Opdyke
              corridor where the mold story has nothing to
              do with water and everything to do with the
              HVAC. Oversized two-stage AC systems that
              short-cycle in July leave indoor relative
              humidity in the mid-60s, and the wall cavities
              near rim joists and cantilevered bumpouts
              condense on their own. The fix is a
              mechanical-contractor conversation, not a
              waterproofing one.
            </p>
          </div>
        </div>
      </section>

      {/* S520 PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="The standard"
            title="How the IICRC S520 Remediation Actually Works"
          />
          <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
            <p>
              S520 is the IICRC&apos;s mold remediation
              standard and it is the benchmark most
              legitimate remediators in Michigan work to,
              even though Michigan — unlike New York, Texas,
              or Florida — does not currently require a mold
              remediation license. That distinction matters
              because it means Rochester Hills homeowners
              have to evaluate us on process and paperwork
              rather than relying on a state license number.
              Here is what the process looks like from the
              moment we agree on a scope.
            </p>
            <p>
              The work area is classified by S520 as
              Condition 1 (normal indoor fungal ecology),
              Condition 2 (settled spores from a nearby
              source), or Condition 3 (actual growth). Our
              job is to bring whatever is in front of us
              back to Condition 1 and document that return
              with post-remediation verification. Before any
              demolition, we build containment out of 6-mil
              poly — floor-to-ceiling walls sealed at the
              perimeter, a zippered entry, sometimes a
              two-chamber decontamination airlock when the
              scope is large. Inside the containment we run
              a HEPA-filtered negative-air machine sized to
              deliver at least four air changes per hour of
              the enclosed volume. That negative pressure is
              what keeps spores from migrating into the rest
              of the house while the work is underway.
            </p>
            <p>
              Technicians inside Condition 3 containment
              wear full-face respirators with P100 filter
              cartridges and disposable protective suits.
              For Condition 2 work we often drop to
              half-face respirators with P100. None of this
              is theater — it exists because mold
              remediation inherently disturbs and
              aerosolizes spore loads, and the IICRC PPE
              recommendations reflect the exposure levels
              during the work itself, not the ambient
              exposure that the homeowner had before we
              arrived.
            </p>
            <p>
              Removal is the part most homeowners anticipate
              and it is more nuanced than it sounds. Porous
              materials that have supported growth —
              drywall, carpet pad, fiberglass batts, upholstered
              furniture, cellulose insulation — are double-bagged and
              discarded, because porous materials cannot be
              reliably decontaminated. Semi-porous materials
              like framing lumber and the subfloor underside are
              HEPA-vacuumed, wet-wiped with a registered
              fungicide, and (where indicated) treated with a
              borate-based residual. Non-porous surfaces are
              wet-cleaned and HEPA-vacuumed. Once the work
              area is visibly clean, the air scrubber keeps
              running through a final cleaning pass so the
              settled spore load drops before sampling.
            </p>
            <p>
              Post-remediation verification (PRV) is the
              last step and it is not optional for any
              meaningful job. Air sampling and surface
              sampling by a third party — typically an
              industrial hygienist independent of us — is
              what confirms the space is back to Condition
              1. Our report references the hygienist&apos;s
              data. Skipping PRV on a large remediation is a
              red flag, and any remediator who refuses to
              work with third-party verification is
              protecting themselves, not the homeowner.
            </p>
            <p>
              None of that process matters if we do not
              solve why the mold grew in the first place.
              Source control is treated as a separate
              deliverable with its own documentation, and we
              cover that further down the page.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON RH SCENARIOS */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="What we actually see"
            title="Six Rochester Hills Mold Scenarios, by Neighborhood"
            intro="Nearly every call falls into one of these shapes. The specifics change — decade, drainage, ventilation, HVAC — but the patterns repeat."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.04) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px',
                }}
              >
                <div
                  className="inline-block mb-3 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase"
                  style={{
                    color: '#ff385c',
                    backgroundColor: 'rgba(255,56,92,0.08)',
                    borderRadius: '999px',
                  }}
                >
                  ZIP {s.zip}
                </div>
                <h3
                  className="text-[#222222] font-bold mb-3"
                  style={{ fontSize: '1.25rem', letterSpacing: '-0.2px' }}
                >
                  {s.title}
                </h3>
                <p className="text-[#555555] text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTING SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Testing"
            title="When Testing Matters — And When It Is a Waste of Your Money"
          />
          <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
            <p>
              The CDC&apos;s public health position is that
              when extensive mold growth is present in a
              building, the growth should be remediated
              regardless of species, and routine sampling to
              identify the species is generally not
              necessary before remediation begins. That is
              not a radical contractor opinion; it is the
              federal public-health baseline and we align
              with it. If you are standing in a basement
              looking at visible growth on your drywall and
              a moisture meter confirms the wall cavity is
              wet, testing before remediation tells you very
              little that changes what has to happen next.
            </p>
            <p>
              There are real exceptions where testing
              earns its cost. If the house is about to
              change hands and Michigan&apos;s seller
              disclosure obligations are in play, independent
              pre-work documentation matters. If there is
              active litigation — a construction defect
              case, a landlord-tenant matter, a claim that a
              prior remediation was incomplete — sampling
              creates the evidentiary record. If a household
              member is documented immune-compromised,
              recently transplanted, or has a treating
              pulmonologist asking specifically for species
              identification, we bring in a hygienist. And
              if the homeowner simply wants a third-party
              opinion before spending money on us, that is a
              legitimate reason to hire an independent
              hygienist first — we welcome it and it tends
              to shorten, not lengthen, the project.
            </p>
            <p>
              Where testing is almost always right is at
              the end of the job. Post-remediation
              verification by a hygienist — taking indoor
              and outdoor air samples, comparing spore
              counts and taxa, and visually inspecting the
              cleaned work area — is how we prove we
              delivered what you paid for. We do not
              self-test our own work.
            </p>
          </div>
        </div>
      </section>

      {/* MATERIALS HANDLING */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Materials"
            title="What Comes Out, What Stays In, and How We Decide"
          />
          <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
            <p>
              S520 categorizes affected materials by
              porosity and that category drives the
              decision tree. Porous materials that have
              supported visible growth or substantial spore
              embedment are removed rather than cleaned.
              That includes paper-faced drywall, carpet and
              carpet pad, fiberglass batts, cellulose
              insulation, upholstered furniture, mattresses,
              and most ceiling tile. Attempting to bleach a
              moldy piece of drywall or shampoo a
              contaminated pad is not legitimate remediation
              — the hyphae have already penetrated below
              the surface and the material cannot be
              decontaminated in place.
            </p>
            <p>
              Semi-porous materials — dimensional framing
              lumber, OSB and plywood sheathing, the
              underside of the subfloor, unfinished wood —
              can typically stay in place if the growth is
              surface-level and the structural integrity is
              intact. The protocol is HEPA-vacuuming to
              remove settled spores, wet-cleaning with a
              registered fungicide, physical abrasion (soda
              blasting, sanding, wire-brushing) where
              staining is heavy, and in some cases a
              borate-based residual to suppress future
              growth. For attic sheathing jobs in Hills of
              Oakland and similar 1990s developments, this
              is almost always the path: clean in place,
              then address the ventilation.
            </p>
            <p>
              Non-porous materials — metal, glazed tile,
              sealed concrete, finished hardwood — are
              wet-cleaned with a detergent solution and
              HEPA-vacuumed. These surfaces are the easiest
              part of the job. The nuance is often what is
              behind them: a mold colony on the tile face
              of a 1960s Rochester Heights bathroom
              typically indicates a much larger colony in
              the substrate behind the tile, and the
              conversation shifts from cleaning to
              demolition.
            </p>
          </div>
        </div>
      </section>

      {/* SOURCE CONTROL */}
      <section className="bg-white py-20">
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why it comes back"
            title="Source Control — The Part Most Remediators Skip"
          />
          <div className="space-y-6 text-[#333333] text-[17px] leading-relaxed">
            <p>
              The single most common reason a Rochester
              Hills homeowner ends up with mold twice is
              that the first remediation addressed the
              visible growth without addressing the
              moisture that caused it. Mold does not
              colonize dry materials. If your finished
              basement wall cavity is back to Condition 1
              and dry on the day of PRV, but the footing
              drain is still failing and the hydrostatic
              pressure behind the poured wall has not
              changed, the wall will be wet again by next
              spring and the colony will be back within
              eighteen months.
            </p>
            <p>
              We take source control seriously enough to
              be honest about what we do and do not
              self-perform. We do self-perform: the
              assessment of where the moisture is coming
              from, moisture-mapping of adjacent materials,
              basic interior grading fixes, sealing of
              obvious interior penetrations, installation
              of dehumidifiers in conditioned spaces,
              coordination and documentation of the
              follow-on work. We do not self-perform:
              exterior waterproofing and footing-drain
              replacement, crawlspace encapsulation
              mechanicals, HVAC rebalancing, attic
              ventilation upgrades, or roof work. For each
              of those we have specific Rochester-Hills-area
              partners we refer to — waterproofing
              contractors who work the Clinton River
              corridor, HVAC shops that are comfortable
              balancing a two-stage system on a luxury
              Adams-corridor build, insulation contractors
              who properly open soffits and route bath
              exhaust through the roof.
            </p>
            <p>
              Because we are not financially incentivized
              to sell you waterproofing or HVAC work, our
              source-control recommendations are the most
              honest part of the report. The report names
              the cause, names the fix, names a partner who
              does that fix, and explains what happens if
              the source stays unaddressed. That level of
              paper is what keeps the warranty on our
              remediation meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RH HOMEOWNERS CALL US */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Why homeowners pick us"
            title="The Three Reasons People Call Us Instead of a Franchise"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white rounded-xl p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.04) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px',
              }}
            >
              <h3
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: '1.2rem' }}
              >
                We refuse to self-test our own remediation
              </h3>
              <p className="text-[#555555] text-[15px] leading-relaxed">
                Post-remediation verification is run by a
                third-party industrial hygienist we don&apos;t
                own and don&apos;t pay. If you want to hire
                your own hygienist independent of the one we
                recommend, that is the right instinct and we
                will work with whoever you choose. The paper
                is the deliverable.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.04) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px',
              }}
            >
              <h3
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: '1.2rem' }}
              >
                The scope names the cause, not just the cleanup
              </h3>
              <p className="text-[#555555] text-[15px] leading-relaxed">
                Our written scope for a Rochester Hills job
                includes the moisture source, the fix for it,
                and a named partner who performs that fix.
                We would rather lose the bid than write a
                scope that treats the symptom and leaves you
                calling someone else in eighteen months when
                the mold returns.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-7"
              style={{
                boxShadow:
                  'rgba(0,0,0,0.04) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px',
              }}
            >
              <h3
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: '1.2rem' }}
              >
                Fourteen miles, not ninety
              </h3>
              <p className="text-[#555555] text-[15px] leading-relaxed">
                Our shop is on West Maple Rd in Bloomfield
                Township — a short run up Adams or Opdyke
                to any 48306, 48307, or 48309 address.
                That proximity matters for the follow-up
                visits mold jobs always need: moisture
                re-checks, PRV, scope adjustments. A
                franchise crew driving from Warren or Taylor
                is fighting traffic and will space
                appointments a week apart when yours needs
                to be tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-[880px] mx-auto px-6">
          <PillarSectionHeading
            eyebrow="Rochester Hills Mold FAQ"
            title="The Questions Homeowners Actually Ask on the Phone"
          />
          <div className="space-y-5">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: '#f7f7f7',
                  boxShadow:
                    'rgba(0,0,0,0.03) 0px 0px 0px 1px',
                }}
              >
                <h3
                  className="text-[#222222] font-semibold mb-2"
                  style={{ fontSize: '1.075rem', letterSpacing: '-0.1px' }}
                >
                  {f.q}
                </h3>
                <p className="text-[#444444] text-[16px] leading-relaxed m-0">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="py-20" style={{ backgroundColor: '#222222' }}>
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '-0.5px',
            }}
          >
            Finding mold in your Rochester Hills home?
            Start with a remediation plan, not a bottle of bleach.
          </h2>
          <p className="text-[#bbbbbb] text-lg mb-8 max-w-[640px] mx-auto">
            Inspection, S520-scoped remediation, and a written
            source-control plan naming the follow-on work. 48306,
            48307, 48309 covered from our Bloomfield Township shop.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:opacity-90 transition-opacity duration-150"
            style={{
              backgroundColor: '#ff385c',
              borderRadius: '8px',
              padding: '0 32px',
              height: '56px',
            }}
          >
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <h2
            className="text-[#222222] font-bold mb-6 text-center"
            style={{ fontSize: '1.375rem', letterSpacing: '-0.2px' }}
          >
            Related services and nearby cities
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Rochester Hills Water Damage', href: '/rochester-hills-mi-water-damage-restoration' },
              { label: 'Mold Remediation (Overview)', href: '/mold-remediation' },
              { label: 'Basement Flood Cleanup', href: '/services/basement-flood-cleanup' },
              { label: 'Oakland Township Water Damage', href: '/oakland-township-mi-water-damage-restoration' },
              { label: 'Water Damage Restoration', href: '/water-damage-restoration' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-[#222222] text-[14px] font-medium no-underline hover:text-[#ff385c] transition-colors duration-150"
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '999px',
                  padding: '8px 16px',
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
