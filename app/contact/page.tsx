import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter, PHONE, PHONE_HREF, ADDRESS_LINE1, ADDRESS_LINE2, BIZ_NAME } from '../_components/site-chrome'

export const metadata: Metadata = {
  title: 'Contact Provail Restoration of Bloomfield | 24/7 Dispatch | (248) 531-8404',
  description:
    'Reach Provail Restoration of Bloomfield 24 hours a day for emergency water, fire, mold, and storm damage response across Oakland and Macomb counties. Call, email, or visit our Bloomfield Township office.',
  alternates: { canonical: 'https://provailrestoration.com/contact' },
  openGraph: {
    title: 'Contact Provail Restoration of Bloomfield',
    description: '24/7 emergency dispatch and office contact details for Oakland and Macomb counties.',
    url: 'https://provailrestoration.com/contact',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://provailrestoration.com/contact#contactpage',
      url: 'https://provailrestoration.com/contact',
      name: 'Contact Provail Restoration of Bloomfield',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://provailrestoration.com/#website' },
      about: { '@id': 'https://provailrestoration.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://provailrestoration.com/contact#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provailrestoration.com/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://provailrestoration.com/contact' },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="bg-white">
        <section className="max-w-[900px] mx-auto px-6 py-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6a6a6a] mb-6">
            <Link href="/" className="no-underline hover:text-[#ff385c]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#222222]">Contact</span>
          </nav>

          <h1 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', letterSpacing: '-0.5px' }}>
            Contact Provail Restoration of Bloomfield
          </h1>
          <p className="text-[#6a6a6a] text-lg leading-relaxed mb-10">
            Water, fire, mold, and storm damage don&rsquo;t wait for business hours &mdash; neither do we. Our Bloomfield Township
            dispatch line is staffed 24 hours a day, 7 days a week. For the fastest response, call us directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 text-white font-semibold text-lg no-underline hover:bg-black transition-colors"
              style={{ backgroundColor: '#ff385c', borderRadius: '10px', padding: '20px 24px' }}
            >
              Call {PHONE}
            </a>
            <a
              href="mailto:info@provailrestoration.com"
              className="flex items-center justify-center gap-3 text-[#222222] font-semibold text-lg no-underline hover:bg-[#f7f7f7] transition-colors"
              style={{ border: '1.5px solid #222222', borderRadius: '10px', padding: '20px 24px' }}
            >
              Email info@provailrestoration.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-[#222222] font-semibold text-[18px] mb-3">Office</h2>
              <address className="not-italic text-[#222222] text-[15px] leading-relaxed">
                {BIZ_NAME}<br />
                {ADDRESS_LINE1}<br />
                {ADDRESS_LINE2}
              </address>
            </div>
            <div>
              <h2 className="text-[#222222] font-semibold text-[18px] mb-3">Hours</h2>
              <p className="text-[#222222] text-[15px] leading-relaxed m-0">
                Emergency dispatch: 24 hours, 7 days a week<br />
                Office visits: By appointment only
              </p>
            </div>
            <div>
              <h2 className="text-[#222222] font-semibold text-[18px] mb-3">Service area</h2>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                Oakland County and Macomb County, Michigan &mdash; including Bloomfield, Birmingham, Troy, Royal Oak,
                Rochester, Rochester Hills, Auburn Hills, Lake Orion, Oakland Township, Shelby Township, and Macomb Township.
              </p>
            </div>
            <div>
              <h2 className="text-[#222222] font-semibold text-[18px] mb-3">Credentials</h2>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                IICRC-certified technicians. Licensed and insured in the State of Michigan. We bill most major homeowner
                and commercial insurance carriers directly.
              </p>
            </div>
          </div>

          <div className="border-t border-[#ebebeb] pt-8">
            <h2 className="text-[#222222] font-semibold text-[18px] mb-3">What to have ready when you call</h2>
            <ul className="text-[#6a6a6a] text-[15px] leading-relaxed space-y-2 list-disc pl-5">
              <li>Your address and the best callback number</li>
              <li>A brief description of the damage (source, rooms affected, approximate time of loss)</li>
              <li>Your homeowner or commercial property insurance carrier, if you have one</li>
              <li>Whether the property is currently occupied and whether utilities are safe to leave on</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
