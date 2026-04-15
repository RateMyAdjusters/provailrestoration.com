import type { Metadata } from 'next'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from '../../_components/site-chrome'

export const metadata: Metadata = {
  title:
    'Ceiling Water Damage Repair in Bloomfield, MI | Upstairs Leaks & Stains | (248) 531-8404',
  description:
    'Ceiling water damage repair in Bloomfield Township and Oakland County. We diagnose the upstairs source, dry the cavity, and restore drywall or plaster safely. 24/7 response: (248) 531-8404.',
  alternates: {
    canonical:
      'https://provailrestoration.com/services/ceiling-water-damage-repair',
  },
  openGraph: {
    title:
      'Ceiling Water Damage Repair in Bloomfield, MI | Provail Restoration of Bloomfield',
    description:
      'Upstairs leak, stained drywall, sagging ceiling? We find the source, dry the cavity, and restore the finish. Call (248) 531-8404.',
    url: 'https://provailrestoration.com/services/ceiling-water-damage-repair',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'There is a brown stain spreading across my ceiling — is it urgent?',
    a: 'A stain that is actively growing usually means water is still reaching the drywall from above. That is urgent, because drywall loses structural integrity quickly once it is saturated, and a small stain can become a collapsed section in a matter of hours. Shut the water off at the closest valve you can identify and call a restoration company. A stain that has not changed in size for months and is completely dry to the touch is less time-critical but still worth inspecting.',
  },
  {
    q: 'My ceiling is sagging and feels heavy — should I puncture it?',
    a: 'A sagging ceiling holding trapped water is a real hazard, and a full bulge can release dozens of pounds of water at once. If you are comfortable doing so and can stand clear, placing a bucket beneath the lowest point and using a long screwdriver to create a single controlled drain hole can relieve pressure. If you are not comfortable, call us and stay out of the room. Do not stand directly under the bulge while you work.',
  },
  {
    q: 'How do you find the source of the leak when everything upstairs looks dry?',
    a: 'We start with the most likely suspects based on what is directly above the stain: a bathroom, the attic, an HVAC chase, or an exterior wall. Moisture meters read the subfloor and adjacent framing, a thermal camera reveals temperature differences where evaporating water cools the surface, and in some cases we open a small inspection cut in the ceiling to trace the drip path. Upstairs finishes that look dry can still be the source because water often travels along the top of a joist before dropping.',
  },
  {
    q: 'My ceiling has popcorn texture from the 1970s — is there an asbestos concern?',
    a: 'Possibly. Many textured ceilings applied before the late 1970s and some applied into the 1980s contain chrysotile asbestos, and disturbing them without testing creates a real exposure hazard. We do not scrape, sand, or demo popcorn ceiling material until a sample has been tested by a qualified laboratory. If the test comes back positive, abatement is handled by a licensed asbestos contractor before any restoration work continues. This is a hard rule on our job sites.',
  },
  {
    q: 'Can you match a textured or knockdown ceiling after repair?',
    a: 'In most cases, yes. Modern knockdown, orange peel, and stomp textures can be matched with hopper-gun application and careful blending. Perfect invisibility across a whole ceiling is rarely achievable on older homes where the original texture has yellowed or the pattern is irregular, and in those cases we discuss refinishing the full plane versus patch-and-blend with the homeowner before we start.',
  },
  {
    q: 'What is the difference between a water stain and structural damage?',
    a: 'A water stain is a surface discoloration caused by tannins and minerals carried by the water. The drywall behind the stain may still be sound. Structural damage means the gypsum core has softened, the paper face is separating, or the ceiling has begun to sag because the fasteners have lost their grip. We use a pin-type moisture meter and light finger pressure to tell the difference, and the treatment for each is very different — a stain can be sealed and painted, while damaged drywall has to be cut out and replaced.',
  },
  {
    q: 'Does wet insulation above the ceiling have to be replaced?',
    a: 'Fiberglass and cellulose insulation both lose most of their R-value when saturated and they hold moisture against the framing and drywall long after the surface looks dry. In almost every case we remove wet insulation, dry the cavity, and install new insulation before the ceiling is closed up. Blown-in cellulose that has been wet and compacted is essentially a total loss. Spray foam behaves differently and is evaluated case-by-case.',
  },
  {
    q: 'Do you inspect the framing above the ceiling for long-term moisture damage?',
    a: 'Yes. Once the cavity is open we check joists, top plates, and the subfloor of the room above for elevated moisture and for any visible decay. Short-term wetting almost never damages framing, but a slow leak that has been active for months can soften the fibers or start a microbial colony that needs to be addressed before new drywall goes up. We document the readings and the visual inspection in the file.',
  },
  {
    q: 'My house has lath-and-plaster ceilings. Can you repair those?',
    a: 'Lath-and-plaster ceilings in older Bloomfield and Birmingham homes behave very differently from drywall. The plaster can delaminate from the lath when it gets wet, and sagging is a sign that the plaster keys have failed. We stabilize what can be saved with plaster washers or injection adhesive, remove sections that are unsafe, and work with a plaster specialist for cosmetic matching on historic homes. Replacement with drywall is sometimes the more sensible option depending on the condition of the rest of the ceiling.',
  },
  {
    q: 'How long does the whole ceiling repair process take?',
    a: 'A simple stain-and-repaint after the leak has been fixed is often a one-day visit. A standard drywall replacement on a single room runs three to six days once drying is complete, including cut-out, replacement, taping, mud, texture matching, and paint. Historic plaster work takes longer. We give a written timeline with the scope of work before any work begins.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ceiling Water Damage Repair',
  name: 'Ceiling Water Damage Repair',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: BIZ_NAME,
    telephone: '+12485318404',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE1,
      addressLocality: 'Bloomfield Township',
      addressRegion: 'MI',
      postalCode: '48301',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
  ],
  description:
    'Ceiling water damage repair including source diagnosis, cavity drying, insulation replacement, drywall or plaster restoration, and texture matching in Bloomfield Township, MI.',
  url: 'https://provailrestoration.com/services/ceiling-water-damage-repair',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/services/ceiling-water-damage-repair#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/ceiling-water-damage-repair',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5597, longitude: -83.3877 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
}

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
      name: 'Services',
      item: 'https://provailrestoration.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ceiling Water Damage Repair',
      item: 'https://provailrestoration.com/services/ceiling-water-damage-repair',
    },
  ],
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="bg-white p-8"
      style={{
        borderRadius: '20px',
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65]">{children}</div>
    </div>
  )
}

export default function CeilingWaterDamageRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: '32px',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Same-Day Ceiling Inspection
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Ceiling Water Damage Repair in Bloomfield, MI
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              Brown stain spreading after an upstairs shower? Bulge forming
              under a bathroom floor? We diagnose the source, dry the cavity,
              and restore the finish — drywall, knockdown, or old-home plaster.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              Ceiling water damage almost never starts at the ceiling. By the
              time a homeowner notices a stain, a drip, or a sag, water has
              already traveled through a floor assembly, across a joist, and
              down into the drywall from above. Finding and stopping that
              upstream source is the first and most important step — repairing
              the cosmetic damage without identifying the cause simply buys a
              few months before the same ceiling is wet again.
            </p>
            <p>
              Our job on a ceiling water loss is straightforward in order, but
              every one of these steps matters: locate the source, stop the
              flow, dry the cavity, evaluate the materials, handle any hazards
              like suspected asbestos or failing plaster, and then rebuild the
              ceiling so the finish blends into the existing room. This page
              walks through how we approach each one in Bloomfield Township
              and the surrounding Oakland County communities.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Diagnosing the Source"
              title="Where Is the Water Actually Coming From?"
              intro="A stain on the ceiling is the end of the story. We work backwards to find the beginning."
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Bathroom Directly Above">
                The most common source. A tub surround that has lost its
                grout or caulk seal allows water past the waterproofing every
                time someone showers. Wax rings under toilets fail silently.
                Angle stops and supply lines to the sink can weep for months
                before the first stain appears below. We inspect the bathroom
                fixtures and the subfloor in the corners and along the tub
                skirt with a moisture meter before opening the ceiling.
              </Card>
              <Card title="Roof & Flashing">
                If the damage is on a top-floor ceiling, the attic is the next
                suspect. Failed roof flashing around vent stacks, chimneys,
                and skylights lets water run along rafters and drip into the
                insulation. Ice dams in winter push melted water back under
                shingles. An attic inspection with a thermal camera almost
                always reveals the entry point. See our{' '}
                <a
                  href="/services/ice-dam-removal"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  ice dam removal page
                </a>{' '}
                for the winter version of this problem.
              </Card>
              <Card title="HVAC Condensate">
                Air handlers installed in attics and second-floor closets
                produce condensate while they run in the summer. A plugged
                drain line or a rusted-through drain pan can dump gallons a
                day into the ceiling below, and the pattern is recognizable
                because it only shows up in cooling season.
              </Card>
              <Card title="Ice Dam Trail">
                Michigan homes with poorly insulated attics grow ice dams at
                the eaves after heavy snowfall. Water ponds behind the dam,
                works its way under the shingles, and follows the rafters
                until it drops through the ceiling — often several feet from
                the actual entry point. The trail of stains can look
                confusing until the attic is inspected.
              </Card>
            </div>
          </div>
        </section>

        {/* HAZARDS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Safety First"
              title="Hazards We Check Before Any Demo"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Sagging drywall and trapped water.</strong> A single
                square foot of saturated half-inch drywall holding a pool of
                water above it can weigh more than the ceiling fasteners are
                rated to hold. We establish a clear zone, relieve the water
                into a bucket through a controlled drain hole, and stabilize
                the area before anyone works underneath.
              </p>
              <p>
                <strong>Popcorn and textured ceilings.</strong> Ceilings
                textured before the late 1970s may contain asbestos. Our hard
                rule is that we do not scrape, sand, or demo a popcorn
                ceiling until a lab sample has cleared it. If testing comes
                back positive, a licensed asbestos abatement contractor
                handles the removal before any restoration work proceeds. Do
                not let any contractor — including us — cut into that
                material without testing first.
              </p>
              <p>
                <strong>Electrical in the ceiling cavity.</strong> Bathroom
                fans, recessed cans, and junction boxes are all potential
                contact points for water. Before we open the ceiling we shut
                off the affected circuits at the breaker and test with a
                non-contact voltage detector.
              </p>
              <p>
                <strong>Framing moisture and microbial concerns.</strong>{' '}
                Long-term slow leaks sometimes feed hidden microbial growth
                on the joists and the back of the drywall. When we see it,
                we document it, and any remediation follows the IICRC S520
                standard rather than a quick spray-and-paint. We do not make
                health claims about mold exposure — we simply clean the
                affected materials and air quality according to the standard.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Our Process"
              title="What Happens Once We Are On Site"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>1. Source confirmed and stopped.</strong> We will not
                start drying a ceiling that is still being fed. A plumber is
                called in for supply-line failures we cannot valve off, a
                roofer for active shingle leaks, and an HVAC technician for
                condensate problems. Stopping the source is step zero.
              </p>
              <p>
                <strong>2. Moisture mapping.</strong> Readings are taken at
                the stain, at the edges of the suspect area, and at nearby
                unaffected drywall to establish a dry-standard baseline. The
                subfloor above is checked from the attic or from the room
                above wherever we have access.
              </p>
              <p>
                <strong>3. Controlled cut-out.</strong> If the drywall is
                wet, sagging, or harboring contaminated water, the affected
                section is removed in a clean rectangle rather than patched
                over. We cut to the nearest framing members so the
                replacement piece has a solid attachment surface.
              </p>
              <p>
                <strong>4. Insulation and cavity drying.</strong> Wet fiber
                insulation is removed and bagged. Air movers and dehumidifiers
                are positioned to dry the joists, the subfloor of the room
                above, and any remaining drywall to the same moisture content
                as unaffected reference material. Drying is monitored daily.
              </p>
              <p>
                <strong>5. Framing inspection.</strong> Once the cavity is
                dry we visually inspect the joists and top plates for decay,
                staining, or delamination and document what we find with
                photos.
              </p>
              <p>
                <strong>6. Rebuild.</strong> New insulation, new drywall,
                taping and mud, primer over the old stain perimeter,
                texture match, and paint. We prime with a stain-blocking
                primer on any remaining original drywall so tannins cannot
                bleed through the final paint coat.
              </p>
            </div>
          </div>
        </section>

        {/* INSULATION & FRAMING DETAIL */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Details That Matter"
              title="Insulation, Framing, and Old-Home Plaster"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Wet Insulation">
                Fiberglass batts lose their R-value when compressed and
                saturated, and cellulose turns into a dense mat that holds
                moisture against framing for weeks. We remove wet insulation
                as a rule and replace it with dry product of the same type
                and rating once the cavity is closed up.
              </Card>
              <Card title="Framing Moisture">
                Structural lumber can tolerate short-term wetting without
                long-term damage, but sustained elevated moisture encourages
                fungal growth and slowly reduces fastener holding strength.
                We meter the framing, document the readings, and dry the
                wood to an acceptable moisture content before closing the
                cavity.
              </Card>
              <Card title="Lath & Plaster">
                Many pre-1950s homes around Bloomfield and Birmingham have
                plaster ceilings on wood lath. Plaster behaves very
                differently than drywall when wet — the keys holding it to
                the lath can fail, and sections can come down unpredictably.
                We stabilize safe sections with plaster washers, remove
                unsafe sections cleanly, and coordinate with a plaster
                specialist on historic matching when appropriate.
              </Card>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Water Damage Restoration">
                The full{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process — how we apply the IICRC S500 standard from first
                contact through final documentation.
              </Card>
              <Card title="Appliance Leak Damage">
                Upstairs laundry rooms are a common ceiling-damage source.
                See our{' '}
                <a
                  href="/services/appliance-leak-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  appliance leak water damage page
                </a>
                .
              </Card>
              <Card title="Ice Dam Removal">
                Winter ice dams are one of the leading causes of top-floor
                ceiling stains in Michigan.{' '}
                <a
                  href="/services/ice-dam-removal"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Read more
                </a>
                .
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Ceiling Water Damage FAQ"
            />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white p-6 group"
                  style={{
                    borderRadius: '16px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                  }}
                >
                  <summary
                    className="cursor-pointer text-[#222222] font-semibold text-[17px] list-none flex justify-between items-center gap-4"
                    style={{ letterSpacing: '-0.18px' }}
                  >
                    <span>{f.q}</span>
                    <span className="text-[#ff385c] text-2xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-4 mb-0">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{
                fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Stain growing? Ceiling sagging?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>{' '}
              and we will send a technician out to find the source. A live
              person answers every call, every hour of every day.
            </p>
            <HeroCTA />
            <p className="text-[#6a6a6a] text-sm mt-8">
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
