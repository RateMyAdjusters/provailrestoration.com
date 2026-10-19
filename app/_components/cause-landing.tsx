import type { CausePageData } from '../lib/causes/types'
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
} from './site-chrome'

const shadow =
  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-8" style={{ borderRadius: 20, boxShadow: shadow }}>
      <h3 className="text-[#222222] text-lg font-semibold mb-3" style={{ letterSpacing: '-0.44px' }}>
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65]">{children}</div>
    </div>
  )
}

function CauseTableBlock({ table }: { table: NonNullable<CausePageData['sections'][number]['table']> }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[14px]" style={{ minWidth: 560 }}>
        <caption className="text-left text-[13px] text-[#6a6a6a] mb-2 caption-top">{table.caption}</caption>
        <thead>
          <tr>
            {table.columns.map((c) => (
              <th
                key={c}
                className="p-3 font-semibold text-[#222222] border-b-2"
                style={{ borderColor: '#222222' }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f7]'}>
              {row.map((cell, j) => (
                <td key={j} className="p-3 align-top text-[#3c3c3c] border-b" style={{ borderColor: '#eee' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Photo({ photo }: { photo: CausePageData['gallery'][number] }) {
  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        className="w-full h-auto"
        style={{ borderRadius: 16, boxShadow: shadow }}
      />
      <figcaption className="text-[13px] text-[#6a6a6a] mt-2">{photo.caption}</figcaption>
    </figure>
  )
}

const BASE_URL = 'https://provailrestoration.com'

export function buildCauseJsonLd(data: CausePageData, path: string) {
  const url = `${BASE_URL}/${path}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': url + '#service',
      name: data.serviceName,
      serviceType: data.serviceName,
      provider: {
        '@type': 'LocalBusiness',
        name: BIZ_NAME,
        telephone: '+15863275015',
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
        { '@type': 'City', name: 'Franklin' },
        { '@type': 'City', name: 'Orchard Lake' },
        { '@type': 'City', name: 'Troy' },
      ],
      description: data.description,
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: data.h1, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
}

export function CauseLanding({ data }: { data: CausePageData }) {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 56 }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 mb-8 text-[#222222] text-[14px] font-medium"
              style={{ borderRadius: 32, boxShadow: shadow, backgroundColor: '#ffffff' }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                {data.eyebrow}
              </span>
              <span className="text-[#c1c1c1]">|</span>
              <span>Oakland County, MI</span>
            </div>
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.25rem)', letterSpacing: '-0.44px' }}
            >
              {data.h1}
            </h1>
            <p className="text-[#6a6a6a] text-lg max-w-[680px] mx-auto mb-10 leading-relaxed">
              {data.lede}
            </p>
            <HeroCTA />
          </div>
        </section>

        {/* FIRST HOUR STEPS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[900px] mx-auto px-6">
            <PillarSectionHeading eyebrow="Do this first" title="The first hour" />
            <ol className="space-y-4 list-none p-0 m-0">
              {data.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="bg-white p-6 flex gap-5 items-start"
                  style={{ borderRadius: 16, boxShadow: shadow }}
                >
                  <span
                    className="flex items-center justify-center shrink-0 font-bold text-white"
                    style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#222222' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[#222222] font-semibold text-[16px] m-0 mb-1">{s.title}</p>
                    <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="bg-white" style={{ paddingTop: 64, paddingBottom: 8 }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{ borderRadius: 20, backgroundColor: '#fff5f6', border: '1px solid #ffd7dd' }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-wide m-0 mb-2" style={{ color: '#ff385c' }}>
                Quick answer
              </p>
              <p className="text-[#222222] font-semibold text-lg m-0 mb-2">{data.quickAnswer.question}</p>
              <p className="text-[#3c3c3c] text-[16px] leading-relaxed m-0">{data.quickAnswer.answer}</p>
            </div>
          </div>
        </section>

        {/* BODY SECTIONS */}
        <section className="bg-white" style={{ paddingTop: 40, paddingBottom: 24 }}>
          <article className="max-w-[820px] mx-auto px-6 text-[#222222]" style={{ fontSize: 17, lineHeight: 1.75 }}>
            {data.sections.map((sec) => (
              <div key={sec.heading} className="mt-14">
                <p className="text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: '#ff385c' }}>
                  {sec.eyebrow}
                </p>
                <h2 className="font-bold mb-4" style={{ fontSize: '1.625rem', letterSpacing: '-0.44px' }}>
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#444] mb-5">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="list-disc pl-6 mb-5 space-y-2 text-[#444]">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {sec.table && <CauseTableBlock table={sec.table} />}
                {sec.callout && (
                  <p
                    className="text-[15px] p-4 mb-5"
                    style={{ borderRadius: 12, backgroundColor: '#f7f7f7', color: '#222222' }}
                  >
                    {sec.callout}
                  </p>
                )}
                {typeof sec.photoIndex === 'number' && data.gallery[sec.photoIndex] && (
                  <Photo photo={data.gallery[sec.photoIndex]} />
                )}
              </div>
            ))}
          </article>
        </section>

        {/* FINISH SAVING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '72px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Finish-first drying"
              title={data.finishSaving.heading}
              intro={data.finishSaving.intro}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {data.finishSaving.items.map((item) => (
                <Card key={item.title} title={item.title}>
                  {item.text}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-white" style={{ padding: '64px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related causes" />
            <div className="grid md:grid-cols-3 gap-6">
              {data.related.map((r) => (
                <a
                  key={r.href}
                  href={`/${r.href}`}
                  className="block bg-[#f7f7f7] p-6 no-underline hover:bg-[#f0f0f0] transition-colors"
                  style={{ borderRadius: 16 }}
                >
                  <span className="text-[#222222] font-semibold">{r.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '72px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading eyebrow="Answers" title="Frequently asked questions" />
            <div className="space-y-4">
              {data.faqs.map((f) => (
                <details key={f.q} className="bg-white p-6 group" style={{ borderRadius: 16, boxShadow: shadow }}>
                  <summary
                    className="cursor-pointer text-[#222222] font-semibold text-[17px] list-none flex justify-between items-center gap-4"
                    style={{ letterSpacing: '-0.18px' }}
                  >
                    <span>{f.q}</span>
                    <span className="text-[#ff385c] text-2xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-4 mb-0">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="bg-white" style={{ padding: '48px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: '1.125rem' }}>
              Sources
            </h2>
            <ul className="text-[14px] text-[#6a6a6a] space-y-2 pl-5 list-disc">
              {data.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#6a6a6a] underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f7f7f7]" style={{ padding: '72px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}
            >
              Water reached finishes you want to keep?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">{PHONE}</a>. Provail
              Restoration of Bloomfield plans every dry-out to save hardwood, stone, cabinetry, and plaster first,
              and removes only what moisture readings say cannot be saved.
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
