import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SiteHeader,
  SiteFooter,
  PillarSectionHeading,
  BIZ_NAME,
} from '../_components/site-chrome'

export const metadata: Metadata = {
  title: `Restoration Resources & Homeowner Guides | ${BIZ_NAME}`,
  description:
    'Plain-English homeowner guides on water damage insurance claims, first-24-hour response, and Michigan-specific restoration topics. Educational only — not legal or insurance advice.',
  alternates: {
    canonical: 'https://provailrestoration.com/resources',
  },
  openGraph: {
    title: `Restoration Resources | ${BIZ_NAME}`,
    description:
      'Homeowner guides on water damage insurance claims, first-24-hour response, and Michigan restoration topics.',
    url: 'https://provailrestoration.com/resources',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

type Article = {
  href: string
  title: string
  excerpt: string
  readTime: string
  topic: string
}

const articles: Article[] = [
  {
    href: '/resources/first-24-hours-after-water-damage',
    title: 'First 24 Hours After Water Damage: Michigan Homeowner Checklist',
    excerpt:
      'Immediate safety steps, how to stop the source, what to document before touching anything, and when to call your insurer versus a restoration contractor — written for Michigan basements, frozen pipe bursts, and ice dam leaks.',
    readTime: '14 min read',
    topic: 'Emergency Response',
  },
  {
    href: '/resources/document-water-damage-for-insurance',
    title: 'How to Document Water Damage for Your Insurance Adjuster',
    excerpt:
      'A step-by-step photo and video walkthrough method adjusters actually use. Wide-to-tight room coverage, moisture-reading context, contents capture, and the documentation mistakes that weaken a claim file.',
    readTime: '13 min read',
    topic: 'Documentation',
  },
  {
    href: '/resources/michigan-frozen-pipe-prevention-guide',
    title: 'Michigan Frozen Pipe Prevention Guide: Winter Playbook',
    excerpt:
      'Why Michigan freeze-thaw cycles burst pipes, which runs in Oakland County homes are most at risk, a pre-winter checklist, warning signs of a freezing line, and what to do if one has already let go.',
    readTime: '14 min read',
    topic: 'Winter Prevention',
  },
  {
    href: '/resources/water-damage-insurance-claim-guide',
    title: 'Water Damage Insurance Claim Guide',
    excerpt:
      'A plain-English homeowner playbook for filing a water damage claim in Michigan — what to do in the first 24 hours, how to document loss, what adjusters look for, and what to try if a claim is denied.',
    readTime: '12 min read',
    topic: 'Insurance Claims',
  },
]

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://provailrestoration.com/resources#collection',
  name: 'Restoration Resources & Homeowner Guides',
  description:
    'Homeowner guides on water damage insurance claims, first-24-hour response, and Michigan restoration topics.',
  url: 'https://provailrestoration.com/resources',
  isPartOf: { '@id': 'https://provailrestoration.com/#website' },
  publisher: { '@id': 'https://provailrestoration.com/#organization' },
  hasPart: articles.map((a) => ({
    '@type': 'Article',
    headline: a.title,
    url: `https://provailrestoration.com${a.href}`,
    about: a.topic,
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
      name: 'Resources',
      item: 'https://provailrestoration.com/resources',
    },
  ],
}

export default function ResourcesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <SiteHeader />

        <main>
          <section
            className="px-6"
            style={{ padding: '72px 24px 48px', backgroundColor: '#f7f7f7' }}
          >
            <div className="max-w-[1120px] mx-auto text-center">
              <div
                className="inline-block mb-4 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
                style={{
                  color: '#ff385c',
                  backgroundColor: 'rgba(255,56,92,0.08)',
                  borderRadius: '999px',
                }}
              >
                Homeowner Resources
              </div>
              <h1
                className="text-[#222222] font-bold mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.1,
                }}
              >
                Plain-English guides for Michigan homeowners
              </h1>
              <p className="text-[#6a6a6a] text-lg max-w-[720px] mx-auto">
                Practical answers to the questions we hear most often — insurance
                claims, first-24-hour response, documentation, and what actually
                happens during a restoration project. Educational only, never a
                substitute for legal or insurance advice.
              </p>
            </div>
          </section>

          <section className="px-6" style={{ padding: '64px 24px' }}>
            <div className="max-w-[1120px] mx-auto">
              <PillarSectionHeading
                eyebrow="Articles"
                title="Start here"
                intro="Longer-form guides. We add new articles as common questions come in from Bloomfield Township and Macomb County homeowners."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block no-underline group"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #ebebeb',
                      borderRadius: '20px',
                      padding: '28px',
                      transition: 'border-color 150ms, transform 150ms',
                    }}
                  >
                    <div
                      className="inline-block mb-4 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase"
                      style={{
                        color: '#ff385c',
                        backgroundColor: 'rgba(255,56,92,0.08)',
                        borderRadius: '999px',
                      }}
                    >
                      {article.topic}
                    </div>
                    <h2
                      className="text-[#222222] font-bold mb-3 group-hover:text-[#ff385c] transition-colors duration-150"
                      style={{
                        fontSize: '1.375rem',
                        letterSpacing: '-0.3px',
                        lineHeight: 1.25,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-[#6a6a6a] text-[15px] mb-5" style={{ lineHeight: 1.55 }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6a6a6a] text-[13px]">{article.readTime}</span>
                      <span className="text-[#ff385c] font-semibold text-[14px]">
                        Read guide &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section
            className="px-6"
            style={{ padding: '48px 24px 80px', backgroundColor: '#f7f7f7' }}
          >
            <div className="max-w-[800px] mx-auto text-center">
              <h2
                className="text-[#222222] font-bold mb-3"
                style={{
                  fontSize: 'clamp(1.375rem, 3vw, 1.875rem)',
                  letterSpacing: '-0.3px',
                }}
              >
                Don&apos;t see what you&apos;re looking for?
              </h2>
              <p className="text-[#6a6a6a] text-base mb-6" style={{ lineHeight: 1.6 }}>
                Our{' '}
                <Link href="/faq" className="text-[#ff385c] font-semibold no-underline">
                  FAQ
                </Link>{' '}
                covers 30+ questions on water damage timelines, insurance, mold,
                equipment, and what to expect during a restoration project. For
                emergencies, call us any hour — we dispatch 24/7.
              </p>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
