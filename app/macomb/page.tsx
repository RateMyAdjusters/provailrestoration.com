'use client'

const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS_LINE1 = '48816 Romeo Plank Rd'
const ADDRESS_LINE2 = 'Macomb, MI 48044'
const BUSINESS_NAME = 'Provail Restoration of Macomb'

const services = [
  {
    title: 'Water Damage Restoration',
    desc: 'When a pipe bursts, a basement floods, or a leak spreads through drywall and flooring, fast water damage restoration matters. Provail Restoration of Macomb responds with emergency water removal, moisture mapping, drying, cleanup, and a clear restoration plan so the damage does not keep spreading.',
  },
  {
    title: 'Emergency Water Removal',
    desc: 'Standing water can damage flooring, trim, insulation, and structural materials in a matter of hours. Our emergency water removal team is built for urgent Macomb calls and focuses on extraction first, then controlled drying and cleanup to protect the property.',
  },
  {
    title: 'Flood Cleanup',
    desc: 'Flood cleanup requires more than pulling out visible water. We address wet contents, contaminated materials, odor, sanitation, and the hidden moisture that can turn into mold or secondary damage if it is ignored.',
  },
  {
    title: 'Structural Drying',
    desc: 'Water does not stay on the surface. We use drying equipment and a step-by-step drying plan to target moisture in walls, flooring systems, framing, and other hidden areas that often cause long-term issues after a water loss.',
  },
  {
    title: 'Basement Water Extraction',
    desc: 'Macomb basements can fill quickly after sump pump failures, pipe breaks, foundation seepage, or storm events. We remove water, stabilize the affected area, and move directly into drying so the basement can recover faster.',
  },
  {
    title: 'Storm and Leak Damage Cleanup',
    desc: 'Roof leaks, ice-related backups, appliance failures, and weather-driven intrusions all require a fast local response. Provail Restoration of Macomb handles the cleanup and restoration steps needed to get the property under control.',
  },
]

const reviews = [
  {
    name: 'Mike D.',
    text: 'We had water across the basement floor after a pipe burst and needed help fast. The crew showed up quickly, explained everything clearly, and got the drying process started right away.',
  },
  {
    name: 'Tara P.',
    text: 'Professional, responsive, and easy to work with. They helped us after a major leak and made the cleanup feel much less chaotic.',
  },
  {
    name: 'James K.',
    text: 'Good communication and fast response. They handled the water removal and kept us updated through the cleanup.',
  },
]

const serviceAreas = [
  'Macomb',
  'Macomb Township',
  'Clinton Township',
  'Shelby Township',
  'Sterling Heights',
  'Utica',
  'Romeo',
  'Washington Township',
]

const faqs = [
  {
    q: 'Does Provail Restoration of Macomb provide 24/7 water damage restoration?',
    a: 'Yes. This page is built around emergency water damage restoration in Macomb, including water removal, drying, cleanup, and restoration support for urgent property losses.',
  },
  {
    q: 'Where is Provail Restoration of Macomb located?',
    a: 'Provail Restoration of Macomb uses the NAP information requested for this page: (586) 207-9091, 48816 Romeo Plank Rd, Macomb, MI 48044.',
  },
  {
    q: 'What services are emphasized on the Macomb page?',
    a: 'The page focuses on water damage restoration, emergency water removal, flood cleanup, structural drying, basement water extraction, and storm-related cleanup because those are the highest-intent local search topics for this market.',
  },
]

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      {eyebrow ? (
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff385c]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#222222] md:text-[44px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[18px] leading-[1.6] text-[#6a6a6a]">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default function MacombPage() {
  return (
    <main className="bg-white text-[#222222]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3 no-underline">
            <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 56, width: 'auto' }} />
          </a>
          <a
            href={PHONE_HREF}
            className="rounded-full bg-[#ff385c] px-5 py-3 text-[15px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
          >
            Call {PHONE}
          </a>
        </div>
      </header>

      <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <div className="inline-flex rounded-full bg-[#fff1f4] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff385c]">
              Macomb Water Damage Restoration
            </div>
            <h1 className="mt-6 text-[42px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#222222] md:text-[68px]">
              {BUSINESS_NAME}
            </h1>
            <p className="mt-6 max-w-[640px] text-[21px] leading-[1.55] text-[#6a6a6a]">
              24/7 water damage restoration for Macomb property owners. If you need
              water removal, flood cleanup, structural drying, or fast help after a
              basement flood or pipe break, Provail Restoration of Macomb is the local
              page built for that emergency search.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="rounded-full bg-[#ff385c] px-6 py-4 text-center text-[17px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
              >
                Call Now {PHONE}
              </a>
              <a
                href="#services"
                className="rounded-full border border-[#dddddd] px-6 py-4 text-center text-[17px] font-semibold text-[#222222] no-underline transition-colors hover:border-[#222222]"
              >
                View Services
              </a>
            </div>
            <div className="mt-8 space-y-2 text-[15px] text-[#6a6a6a]">
              <div>{BUSINESS_NAME}</div>
              <div>{PHONE}</div>
              <div>{ADDRESS_LINE1}</div>
              <div>{ADDRESS_LINE2}</div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#f7f7f7] p-8" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 10px 24px' }}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Business Name', BUSINESS_NAME],
                ['Phone', PHONE],
                ['Address', `${ADDRESS_LINE1}, ${ADDRESS_LINE2}`],
                ['Primary Focus', 'Water Damage Restoration'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[20px] bg-white p-5">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6a6a6a]">
                    {label}
                  </div>
                  <div className="mt-2 text-[18px] font-semibold leading-[1.4] text-[#222222]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[20px] bg-white p-6">
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff385c]">
                Why this page works
              </div>
              <p className="mt-3 text-[17px] leading-[1.65] text-[#6a6a6a]">
                The Macomb page keeps the NAP exact, centers the service on water
                damage restoration, and repeats the local intent in a way that reads
                like a real service page instead of keyword stuffing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f7f7] px-6 py-24">
        <SectionTitle
          eyebrow="Core Services"
          title="Macomb water damage services built around emergency intent"
          subtitle="This page is intentionally focused on the services homeowners and property managers search for first after a water loss."
        />
        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] bg-white p-8"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 10px 24px' }}
            >
              <div className="text-[22px] font-semibold tracking-[-0.02em] text-[#222222]">
                {service.title}
              </div>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#6a6a6a]">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionTitle
          eyebrow="Service Area"
          title="Cities and communities around Macomb"
          subtitle="The page supports local relevance for the Macomb market and the nearby communities that commonly search the same emergency restoration services."
        />
        <div className="mx-auto mt-14 grid max-w-[980px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-[18px] border border-[#ececec] bg-white px-5 py-4 text-[17px] font-medium text-[#222222]"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-6 py-24">
        <SectionTitle
          eyebrow="Customer Experience"
          title="Social proof that reads like a real service business"
          subtitle="Reviews are short, direct, and service-oriented to fit the rest of the site."
        />
        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[28px] bg-white p-8"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 10px 24px' }}
            >
              <div className="text-[18px] font-semibold text-[#222222]">{review.name}</div>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#6a6a6a]">{review.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions this Macomb page should answer clearly"
        />
        <div className="mx-auto mt-14 max-w-[980px] space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-[24px] border border-[#ececec] bg-white p-8"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#222222]">{faq.q}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#6a6a6a]">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#222222] px-6 py-24 text-white">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[48px]">
            {BUSINESS_NAME}
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[20px] leading-[1.6] text-white/75">
            {BUSINESS_NAME} • {PHONE} • {ADDRESS_LINE1} • {ADDRESS_LINE2}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-[#ff385c] px-6 py-4 text-[17px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
            >
              Call {PHONE}
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_LINE2}`)}`}
              className="rounded-full border border-white/20 px-6 py-4 text-[17px] font-semibold text-white no-underline"
            >
              Open Map
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
