import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  PHONE,
  PHONE_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from '../../_components/site-chrome'

const BIZ_NAME = 'Provail Restoration of Bloomfield'

export const metadata: Metadata = {
  title: 'Contents Pack-Out, Cleaning & Storage | Provail Restoration of Bloomfield',
  description:
    'Itemized pack-out, climate-controlled storage, ultrasonic cleaning, textile restoration, electronics decontamination, document recovery, and return delivery for Bloomfield homeowners after water, fire, mold, or smoke losses.',
  alternates: {
    canonical: 'https://provailrestoration.com/services/contents-pack-out-storage',
  },
  openGraph: {
    title: 'Contents Pack-Out & Storage | Provail Restoration of Bloomfield',
    description:
      'Inventory, cleaning, climate-controlled storage, and return delivery for household contents during restoration projects.',
    url: 'https://provailrestoration.com/services/contents-pack-out-storage',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What exactly is a pack-out?',
    a: 'A pack-out is the organized removal of personal belongings from a damaged property so the structure can be restored and the contents can be cleaned separately. Items are inventoried, photographed, packed, labeled, and transported to a secure facility where the appropriate cleaning and storage work can take place.',
  },
  {
    q: 'How do you know what belongs to me if items are moved off-site?',
    a: 'Every item is logged against a barcoded inventory with photographs, room of origin, and condition notes. The inventory stays with your project file, so at return-delivery time we are matching items back to the same list that left your home.',
  },
  {
    q: 'Is my stuff safe in storage?',
    a: 'Our contents storage is climate-controlled, monitored, and segregated by job. Temperature and humidity are held in a range appropriate for typical household goods, and sensitive items such as electronics and heirlooms are stored with additional care as needed.',
  },
  {
    q: 'Can ultrasonic cleaning really restore soot-covered items?',
    a: 'Ultrasonic cleaning uses high-frequency sound waves to lift residues from the nooks and crevices of hard goods such as ceramics, metal, hardware, and many plastics. It is not appropriate for every item, but for the items that are suitable, it often produces results that hand cleaning cannot match.',
  },
  {
    q: 'What happens if an item cannot be restored?',
    a: 'Items that are beyond restoration are flagged in the inventory as non-salvageable and documented for your insurance claim. We do not discard anything without your authorization, and you receive a list of non-salvageable items as part of the project record.',
  },
  {
    q: 'How long does contents processing take?',
    a: 'Timelines depend on the volume, the type of loss, and the cleaning methods required. A small pack-out from a single room may process in a few days, while a full-house fire pack-out with extensive hard-goods and textile cleaning can take several weeks. Your project manager provides a realistic schedule at the start.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Contents Pack-Out, Cleaning, and Storage',
  name: 'Contents Pack-Out, Cleaning & Storage',
  provider: {
    '@type': 'LocalBusiness',
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
    'Inventoried pack-out, climate-controlled storage, ultrasonic cleaning, textile restoration, electronics decontamination, and return delivery for household contents after a water, fire, smoke, or mold loss.',
  url: 'https://provailrestoration.com/services/contents-pack-out-storage',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://provailrestoration.com/services/contents-pack-out-storage#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/services/contents-pack-out-storage',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5597, longitude: -83.3877 },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://provailrestoration.com/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Contents Pack-Out & Storage',
      item: 'https://provailrestoration.com/services/contents-pack-out-storage',
    },
  ],
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="bg-white p-8"
      style={{
        borderRadius: '20px',
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
      }}
    >
      <h3 className="text-[#222222] text-lg font-semibold mb-3" style={{ letterSpacing: '-0.44px' }}>
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65] space-y-3">{children}</div>
    </div>
  )
}

export default function ContentsPackOutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <SiteHeader />

      <main>
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
                <span>Itemized Inventory</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Climate-Controlled</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Insurance Compatible</span>
              </div>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.44px' }}
            >
              Contents Pack-Out, Cleaning &amp; Storage
            </h1>
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              Inventoried removal of personal belongings, off-site cleaning by the right method
              for each material, climate-controlled storage, and coordinated return delivery — so
              your home can be restored properly and your contents are cared for in parallel.
            </p>
            <HeroCTA />
          </div>
        </section>

        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[780px] mx-auto px-6 text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
            <p>
              When water, fire, smoke, or mold damages a home, the things inside the home usually
              need attention too. Some items are lightly affected and can be cleaned in place.
              Others are sitting in the way of demolition, drying, or reconstruction work and need
              to be moved. Still others have absorbed contaminants and need specialty cleaning
              that is impossible to perform in a working job site. A pack-out solves all three
              problems at once by separating the contents from the structure so each can be
              restored using the right method.
            </p>
            <p>
              This page explains how a professional pack-out actually runs, from the first
              walkthrough with a clipboard to the final return delivery weeks later. It covers the
              categories of cleaning we use, what climate-controlled storage means in practice,
              and how the inventory integrates with the insurance claim so nothing gets lost
              between the home and the warehouse.
            </p>
            <p>
              If you are reading this the day of a loss and you need to decide whether a pack-out
              is necessary for your situation, the short answer is that the decision is made by
              the scope of the reconstruction — not by the preference of the restoration
              contractor. If rebuild work will displace furniture and possessions from the
              affected rooms, a pack-out is usually cheaper and cleaner than trying to shuffle
              items around the job site. If the work is contained to a small area, in-place
              handling is often a better fit.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Inventory"
              title="Documentation Before Anything Moves"
              intro="Every box is traceable back to a specific item, room, and condition note."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Barcoded Inventory">
                <p>
                  Each carton is tagged with a unique barcode and tied to a line in the digital
                  inventory. The line records the room of origin, a short description of contents,
                  photographs of the items inside, and condition notes at the moment of packing.
                  The barcoded system is what makes return delivery reliable weeks or months
                  later.
                </p>
              </Card>
              <Card title="Photographic Record">
                <p>
                  Before a single item leaves the home, rooms are photographed in their pre-pack
                  state so the layout, the content, and any pre-existing wear are on the record.
                  High-value items are photographed individually with close-ups of serial numbers,
                  maker marks, and any existing damage.
                </p>
              </Card>
              <Card title="Salvage Decisions with the Homeowner">
                <p>
                  Borderline items — waterlogged upholstery, smoke-exposed mattresses, items with
                  sentimental value that are technically beyond restoration — are flagged for
                  homeowner review. The restoration contractor does not unilaterally decide what
                  is worth saving. You make that call, and the decision is recorded.
                </p>
              </Card>
              <Card title="Integration with the Claim File">
                <p>
                  The inventory flows directly into the insurance documentation package so the
                  adjuster has a single organized source for contents discussions. Nothing gets
                  re-typed from paper notes into the claim, which is where errors and omissions
                  usually happen.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Cleaning"
              title="Matching Cleaning Methods to Materials"
              intro="One cleaning method cannot handle every item — and using the wrong method can destroy things that a correct method would have saved."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Ultrasonic Cleaning for Hard Goods">
                <p>
                  Ultrasonic cleaning tanks use high-frequency sound waves in a specialized
                  solution to lift residues from the surfaces and crevices of ceramics, metal
                  hardware, glassware, children's toys, and many plastics. Ultrasonic works
                  especially well for items with complex geometry — engraved trays, figurines,
                  hardware with small apertures — where hand wiping cannot reach.
                </p>
              </Card>
              <Card title="Textile and Soft Goods Cleaning">
                <p>
                  Clothing, linens, drapery, and other textiles are sorted by fiber type, color
                  fastness, and the nature of the contamination. Dedicated textile cleaning
                  processes — from commercial laundering to specialty dry cleaning to ozone
                  treatment in controlled chambers — are matched to each category. Smoke odor on
                  textiles typically requires multiple passes and sometimes different methods on
                  the same garment.
                </p>
              </Card>
              <Card title="Electronics Decontamination">
                <p>
                  Electronics and small appliances can often be recovered if they are handled
                  quickly and correctly. The workflow removes covers, cleans circuit boards with
                  appropriate solvents, replaces any components that show contamination or
                  corrosion, and verifies function before the unit is returned. Electronics that
                  show water intrusion or serious internal damage are flagged for replacement
                  rather than restored.
                </p>
              </Card>
              <Card title="Document and Photo Recovery">
                <p>
                  Paper records, books, photographs, and artwork on paper have specialized recovery
                  paths — vacuum freeze-drying for waterlogged documents, careful surface cleaning
                  for soot-exposed items, and controlled rehumidification for papers that have
                  started to cockle. High-value documents are handled by specialists when the
                  scope warrants it.
                </p>
              </Card>
              <Card title="Art and Heirloom Handling">
                <p>
                  Framed art, antiques, and family heirlooms are handled with extra care and
                  isolated from routine processing. Items that require conservator-level work are
                  referred to a specialist with the right training, and the handoff is documented
                  in the inventory so nothing disappears into a black box.
                </p>
              </Card>
              <Card title="Hard Surface Wipe-Down">
                <p>
                  Furniture, cabinetry, and other hard goods that are not appropriate for
                  ultrasonic tanks are hand cleaned with materials-specific products and dried
                  under controlled conditions. Finishes are protected, leather is conditioned where
                  appropriate, and any items with pre-existing issues are photographed before
                  cleaning so the before-and-after is clear.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Storage"
              title="Climate-Controlled, Segregated Storage"
              intro="What 'climate-controlled' actually means and why job segregation matters."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Climate control in a contents storage context means temperature and humidity held
                in a range appropriate for typical household goods. That range matters because
                wood furniture, leather, paper, and textiles all move when humidity swings, and
                uncontrolled swings can do more damage in storage than the original loss did in
                the home. Our storage areas are monitored so readings stay within acceptable
                bounds year-round, including through Michigan's very different summer and winter
                conditions.
              </p>
              <p>
                Segregation by job is the other half of a proper contents storage operation. Your
                belongings are kept together in a dedicated vault, palletized or shelved on your
                own project, not mixed with other households. That keeps return delivery clean,
                simplifies any mid-project access you might need, and avoids the cross-contamination
                risk that comes from mingling items from different losses.
              </p>
              <p>
                For homeowners who need to retrieve specific items while the project is underway
                — a suit for a wedding, a piece of paperwork, a child's favorite toy — we
                coordinate scheduled access. Requests go through your project manager so the
                item's location can be pulled from the inventory and the box opened in a
                controlled way rather than rummaged through.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Return"
              title="Return Delivery and Reinstallation"
              intro="Coordinated with the final reconstruction walkthrough so contents come back to a finished home."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Coordinated with Reconstruction">
                <p>
                  Return delivery is scheduled after reconstruction finish work is complete and
                  the structure has been cleaned. Delivering contents into a half-finished home
                  risks re-soiling items that were just cleaned, so the timing is coordinated
                  deliberately with your project manager.
                </p>
              </Card>
              <Card title="Room-of-Origin Placement">
                <p>
                  Because the inventory recorded the room each item came from, cartons can be
                  returned to the correct room on delivery rather than piled in a staging area.
                  Furniture can be reassembled and placed approximately where it came from, with
                  homeowner guidance on any changes.
                </p>
              </Card>
              <Card title="Non-Salvageable Item Report">
                <p>
                  Items that did not survive the loss or the cleaning process are listed in a
                  non-salvageable report with photographs and condition notes, so the final claim
                  discussion can address them directly. You should not be chasing missing items
                  after the project closes.
                </p>
              </Card>
              <Card title="Final Walkthrough">
                <p>
                  The project manager walks through the delivered contents with you, confirms that
                  the inventory matches, and resolves any discrepancies before the file closes.
                  That walkthrough is the last chance to catch anything, and we do not skip it.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Insurance"
              title="Line-Item Insurance Compatibility"
              intro="How pack-out costs fit into a standard homeowners claim."
            />
            <div className="max-w-[780px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Pack-out, cleaning, and storage are generally handled as line items within the
                contents portion of a property insurance claim. Carriers expect itemized
                documentation — inventories, photographs, cleaning method, and disposition — and
                writing our pack-out records in a format compatible with Xactimate and common
                contents management platforms shortens the approval cycle.
              </p>
              <p>
                We do not negotiate claim settlements, interpret policy language, or act as a
                public adjuster. What we do is produce a documentation package so complete that
                the adjuster can evaluate the contents portion of the claim without guesswork. If
                the policy covers the work, the paperwork is ready. If the policy does not, you
                at least have a clean record of what was affected and how it was handled.
              </p>
              <p>
                For the small percentage of projects where the contents portion of a claim becomes
                contested, we stay out of the dispute and let the licensed professionals on both
                sides handle it. Our role is to keep the record honest and the work consistent
                with the industry standard of care, not to advocate one way or the other on
                coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading eyebrow="FAQ" title="Pack-Out Questions" />
            <div className="max-w-[820px] mx-auto space-y-4">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-white p-6"
                  style={{
                    borderRadius: '20px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                  }}
                >
                  <h3 className="text-[#222222] font-semibold text-[17px] mb-2">{f.q}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.65] m-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Planning a Pack-Out?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8 leading-relaxed">
              Call to walk through the scope with a project manager who can tell you whether a
              pack-out is the right call for your specific loss — or whether in-place handling
              would serve you better.
            </p>
            <HeroCTA />
            <div className="mt-8 text-[#6a6a6a] text-[15px]">
              Related services:{' '}
              <Link href="/water-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Water Damage
              </Link>
              {' · '}
              <Link href="/fire-damage-restoration" className="text-[#ff385c] no-underline font-medium">
                Fire Damage
              </Link>
              {' · '}
              <Link href="/mold-remediation" className="text-[#ff385c] no-underline font-medium">
                Mold Remediation
              </Link>
              {' · '}
              <Link href="/reconstruction-services" className="text-[#ff385c] no-underline font-medium">
                Reconstruction
              </Link>
              {' · '}
              <Link href="/why-us" className="text-[#ff385c] no-underline font-medium">
                Why Us
              </Link>
              {' · '}
              <Link href="/faq" className="text-[#ff385c] no-underline font-medium">
                FAQ
              </Link>
              {' · '}
              <Link href="/" className="text-[#ff385c] no-underline font-medium">
                Home
              </Link>
            </div>
            <div className="mt-6 text-[#6a6a6a] text-[13px]">
              {ADDRESS_LINE1} &middot; {ADDRESS_LINE2} &middot;{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] no-underline">
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
