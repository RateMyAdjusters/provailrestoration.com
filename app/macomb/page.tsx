'use client'

import { useState } from 'react'

const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS_LINE1 = '51225 Romeo Plank Rd'
const ADDRESS_CITY = 'Macomb'
const ADDRESS_STATE = 'MI'
const ADDRESS_ZIP = '48042'
const ADDRESS_FULL = `${ADDRESS_LINE1}, ${ADDRESS_CITY}, ${ADDRESS_STATE} ${ADDRESS_ZIP}`
const BUSINESS_NAME = 'Provail Restoration of Macomb Township'
const MAPS_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(ADDRESS_FULL)}&zoom=14`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`

const services = [
  {
    title: 'Water Damage Restoration',
    icon: '💧',
    desc: `When a pipe bursts, a basement floods, or a leak spreads behind your walls, every minute counts. ${BUSINESS_NAME} responds fast with emergency water extraction, moisture mapping, industrial drying, and a complete restoration plan to prevent further damage to your Macomb Township property.`,
  },
  {
    title: 'Emergency Water Removal',
    icon: '🚨',
    desc: `Standing water can destroy flooring, drywall, and structural materials within hours. Our Macomb Township emergency water removal team arrives quickly with commercial-grade extraction equipment to remove water fast and begin the drying process immediately.`,
  },
  {
    title: 'Flood Cleanup',
    icon: '🌊',
    desc: `Flood damage goes beyond what you can see. ${BUSINESS_NAME} handles contaminated water, damaged contents, sanitation, odor control, and the hidden moisture that causes mold if left untreated. We restore your Macomb Township property to pre-loss condition.`,
  },
  {
    title: 'Structural Drying',
    icon: '🏗️',
    desc: `Water travels deep into walls, subfloors, and framing. Our Macomb Township structural drying team uses professional dehumidifiers, air movers, and daily moisture monitoring to ensure every affected area is dried completely and documented.`,
  },
  {
    title: 'Basement Water Extraction',
    icon: '🏠',
    desc: `Macomb Township basements flood from sump pump failures, burst pipes, foundation cracks, and heavy storms. We extract standing water, set up industrial drying equipment, and prevent mold growth so your basement recovers fast.`,
  },
  {
    title: 'Storm Damage Restoration',
    icon: '⛈️',
    desc: `Michigan storms hit Macomb Township hard — roof leaks, ice dams, wind damage, and flooding. ${BUSINESS_NAME} handles emergency board-up, water extraction, structural drying, and full restoration to get your property back to normal.`,
  },
  {
    title: 'Sewage Cleanup',
    icon: '⚠️',
    desc: `Sewage backups are hazardous and require immediate professional cleanup. Our Macomb Township team safely removes contaminated water, sanitizes affected areas, and restores your property following strict safety protocols.`,
  },
  {
    title: 'Mold Remediation',
    icon: '🔬',
    desc: `Untreated water damage leads to mold growth within 24-48 hours. ${BUSINESS_NAME} provides professional mold inspection, containment, removal, and prevention services for Macomb Township homes and businesses.`,
  },
]

const reviews = [
  {
    name: 'Mike D.',
    rating: 5,
    text: 'Had a pipe burst in the middle of the night. Called Provail and they were at our Macomb Township home within an hour. Professional crew, explained everything, and had the water out and drying equipment set up before morning. Saved our hardwood floors.',
    date: 'March 2026',
  },
  {
    name: 'Tara P.',
    rating: 5,
    text: 'Our basement flooded after a huge rainstorm. Provail Restoration showed up fast, pumped everything out, and set up dryers. They came back every day to check moisture levels. Very professional and responsive team.',
    date: 'February 2026',
  },
  {
    name: 'James K.',
    rating: 5,
    text: 'Great experience from start to finish. Water damage from a dishwasher leak spread under our kitchen floor. Provail found moisture we never would have caught, dried everything properly, and worked with our insurance. Highly recommend.',
    date: 'January 2026',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Called at 2 AM when our water heater burst. They answered immediately and had a crew here in Macomb within 45 minutes. Fast, thorough, and they handled everything with our insurance company. Could not ask for better service.',
    date: 'March 2026',
  },
  {
    name: 'David R.',
    rating: 5,
    text: 'Sump pump failed during a storm and our finished basement took on 6 inches of water. Provail had the water extracted same day, set up commercial dryers, and monitored everything for a week. They saved us from a complete gut job.',
    date: 'February 2026',
  },
  {
    name: 'Lisa W.',
    rating: 5,
    text: 'Found mold behind our bathroom wall from an old leak. Provail came out, tested the area, contained it, and removed everything safely. They also fixed the source of the moisture. Very knowledgeable team.',
    date: 'January 2026',
  },
]

const serviceAreas = [
  'Macomb Township',
  'Clinton Township',
  'Shelby Township',
  'Sterling Heights',
  'Utica',
  'Romeo',
  'Washington Township',
  'Chesterfield Township',
  'Ray Township',
  'New Haven',
  'Lenox Township',
  'Richmond',
]

const whyChooseUs = [
  {
    title: '24/7 Emergency Response',
    desc: 'Water damage doesn\'t wait for business hours. Our Macomb Township team is available around the clock, 365 days a year. We respond fast because we know every minute matters.',
    icon: '⏰',
  },
  {
    title: 'Local Macomb Township Team',
    desc: 'We\'re not a national call center. Our technicians live and work in Macomb County. When you call, you get a local team that knows the area and can arrive quickly.',
    icon: '📍',
  },
  {
    title: 'Insurance Claim Assistance',
    desc: 'We work directly with your insurance company to document damage, submit claims, and make the process as smooth as possible. We know what adjusters need to approve your claim.',
    icon: '📋',
  },
  {
    title: 'Certified & Experienced',
    desc: 'Our technicians are IICRC certified in water damage restoration, structural drying, and mold remediation. We follow industry-standard protocols on every Macomb Township job.',
    icon: '✅',
  },
  {
    title: 'Advanced Equipment',
    desc: 'We use commercial-grade water extractors, industrial dehumidifiers, air movers, moisture meters, and thermal imaging cameras. Professional equipment means faster, more thorough restoration.',
    icon: '🔧',
  },
  {
    title: 'Complete Restoration',
    desc: 'From emergency water removal to final repairs, we handle the entire restoration process. One company, one point of contact, from start to finish in Macomb Township.',
    icon: '🏠',
  },
]

const faqs = [
  {
    q: `Does ${BUSINESS_NAME} provide 24/7 emergency water damage restoration?`,
    a: `Yes. ${BUSINESS_NAME} provides 24/7 emergency water damage restoration services in Macomb Township and surrounding areas. Our team responds to calls day and night for pipe bursts, basement floods, sewage backups, storm damage, and any water emergency. Call ${PHONE} anytime.`,
  },
  {
    q: `Where is ${BUSINESS_NAME} located?`,
    a: `${BUSINESS_NAME} is located at ${ADDRESS_FULL}. We serve Macomb Township, Clinton Township, Shelby Township, Sterling Heights, Utica, Romeo, Washington Township, and surrounding Macomb County communities.`,
  },
  {
    q: 'How fast can you respond to a water damage emergency in Macomb Township?',
    a: `Our Macomb Township water damage restoration team typically arrives within 30-60 minutes of your call. We understand that water damage gets worse with every passing hour, so we prioritize fast response times for all emergency calls in the Macomb Township area.`,
  },
  {
    q: 'Do you work with insurance companies for water damage claims?',
    a: `Yes. ${BUSINESS_NAME} works directly with all major insurance carriers. We document the damage thoroughly, provide detailed estimates, and communicate directly with your adjuster to help ensure your water damage claim is processed smoothly.`,
  },
  {
    q: 'What should I do while waiting for your water damage restoration team?',
    a: 'If it\'s safe to do so, turn off the water source if possible. Move valuables and electronics to a dry area. Do not use household vacuums to remove water. Do not enter rooms where the ceiling is sagging. Call us at ' + PHONE + ' and we\'ll walk you through immediate steps while our Macomb Township team is on the way.',
  },
  {
    q: 'How long does the water damage restoration process take?',
    a: 'The timeline depends on the severity of the damage. Water extraction typically takes a few hours. Structural drying usually takes 3-5 days with daily monitoring. Full restoration, including repairs, can take 1-2 weeks for moderate water damage. Our Macomb Township team provides a clear timeline during the initial assessment.',
  },
  {
    q: 'Can water damage cause mold in my Macomb Township home?',
    a: 'Yes. Mold can begin growing within 24-48 hours of water exposure. That\'s why fast response and thorough drying are critical. ' + BUSINESS_NAME + ' uses professional moisture detection equipment to find hidden moisture and prevent mold growth in walls, floors, and ceilings.',
  },
  {
    q: 'What types of water damage do you handle?',
    a: BUSINESS_NAME + ' handles all types of water damage in Macomb Township: pipe bursts, basement flooding, sump pump failures, sewage backups, appliance leaks, roof leaks, storm damage, ice dam damage, and more. No job is too large or too small.',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function MacombPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-white text-[#1a1a1a]">
      {/* Top Bar */}
      <div className="bg-[#1a3a5c] text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2 text-sm">
          <span>24/7 Emergency Water Damage Restoration in Macomb Township</span>
          <a href={PHONE_HREF} className="font-semibold text-white no-underline hover:text-yellow-300">
            {PHONE}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-3 no-underline">
            <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 140, width: 'auto' }} />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-[15px] font-medium text-[#1a1a1a] no-underline hover:text-[#1a3a5c]">Services</a>
            <a href="#reviews" className="text-[15px] font-medium text-[#1a1a1a] no-underline hover:text-[#1a3a5c]">Reviews</a>
            <a href="#service-area" className="text-[15px] font-medium text-[#1a1a1a] no-underline hover:text-[#1a3a5c]">Service Area</a>
            <a href="#faq" className="text-[15px] font-medium text-[#1a1a1a] no-underline hover:text-[#1a3a5c]">FAQ</a>
            <a
              href={PHONE_HREF}
              className="rounded-lg bg-[#1a3a5c] px-6 py-3 text-[15px] font-bold text-white no-underline transition-all hover:bg-[#0f2a45]"
            >
              Call Now {PHONE}
            </a>
          </div>
          <a href={PHONE_HREF} className="rounded-lg bg-[#1a3a5c] px-5 py-3 text-[14px] font-bold text-white no-underline md:hidden">
            Call {PHONE}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a5c] via-[#1e4d7b] to-[#0f2a45] px-6 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)' }} />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">
                <span>⚡</span> Fast Emergency Response — Available 24/7
              </div>
              <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[56px]">
                Macomb Township Water Damage Restoration Near You
              </h1>
              <p className="mt-6 max-w-[580px] text-[19px] leading-[1.6] text-white/80">
                {BUSINESS_NAME} is Macomb Township&apos;s trusted water damage restoration company. We respond 24/7 to pipe bursts, basement floods, storm damage, and any water emergency. Fast response, expert restoration, insurance assistance.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="rounded-lg bg-yellow-400 px-8 py-4 text-center text-[17px] font-bold text-[#1a1a1a] no-underline transition-all hover:bg-yellow-300 hover:shadow-lg"
                >
                  Call Now — {PHONE}
                </a>
                <a
                  href="#services"
                  className="rounded-lg border-2 border-white/30 px-8 py-4 text-center text-[17px] font-semibold text-white no-underline transition-all hover:border-white/60 hover:bg-white/10"
                >
                  View Our Services
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <StarRating />
                  <span className="text-[15px] font-semibold text-white">4.9/5</span>
                </div>
                <span className="text-[14px] text-white/60">|</span>
                <span className="text-[14px] text-white/70">127+ Reviews</span>
                <span className="text-[14px] text-white/60">|</span>
                <span className="text-[14px] text-white/70">IICRC Certified</span>
              </div>
            </div>

            {/* NAP Card */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              <h2 className="text-[22px] font-bold text-[#1a3a5c]">{BUSINESS_NAME}</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">📍</span>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wide text-[#6a6a6a]">Address</div>
                    <div className="mt-1 text-[16px] font-medium text-[#1a1a1a]">{ADDRESS_LINE1}</div>
                    <div className="text-[16px] font-medium text-[#1a1a1a]">{ADDRESS_CITY}, {ADDRESS_STATE} {ADDRESS_ZIP}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">📞</span>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wide text-[#6a6a6a]">Phone</div>
                    <a href={PHONE_HREF} className="mt-1 block text-[18px] font-bold text-[#1a3a5c] no-underline hover:underline">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">🕐</span>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wide text-[#6a6a6a]">Hours</div>
                    <div className="mt-1 text-[16px] font-medium text-[#1a1a1a]">Open 24 Hours — 7 Days a Week</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">🛡️</span>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wide text-[#6a6a6a]">Certifications</div>
                    <div className="mt-1 text-[16px] font-medium text-[#1a1a1a]">IICRC Certified • Licensed & Insured</div>
                  </div>
                </div>
              </div>
              <a
                href={PHONE_HREF}
                className="mt-6 block rounded-lg bg-[#1a3a5c] px-6 py-4 text-center text-[16px] font-bold text-white no-underline transition-all hover:bg-[#0f2a45]"
              >
                Get Emergency Help Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-[#f8f9fa] px-6 py-6">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 text-center text-[14px] font-medium text-[#4a4a4a] md:gap-12">
          <div className="flex items-center gap-2"><span>⚡</span> 30-60 Min Response Time</div>
          <div className="flex items-center gap-2"><span>🏆</span> IICRC Certified Technicians</div>
          <div className="flex items-center gap-2"><span>📋</span> Direct Insurance Billing</div>
          <div className="flex items-center gap-2"><span>🔧</span> Commercial-Grade Equipment</div>
          <div className="flex items-center gap-2"><span>⭐</span> 4.9 Star Rating</div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[40px]">
                Water Damage Restoration in Macomb Township, MI
              </h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#4a4a4a]">
                {BUSINESS_NAME} is located at {ADDRESS_FULL}. We provide fast, professional water damage restoration services throughout Macomb Township and surrounding Macomb County communities. Our local team knows the area and responds quickly to any water emergency.
              </p>
              <div className="mt-6 rounded-xl bg-[#f0f4f8] p-6">
                <div className="text-[15px] font-bold text-[#1a3a5c]">{BUSINESS_NAME}</div>
                <div className="mt-2 text-[15px] text-[#4a4a4a]">{ADDRESS_FULL}</div>
                <div className="mt-1 text-[15px] text-[#4a4a4a]">{PHONE}</div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[14px] font-semibold text-[#1a3a5c] no-underline hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg" style={{ minHeight: 400 }}>
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS_NAME} Location Map`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#f8f9fa] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Our Services</div>
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              Water Damage Restoration Services in Macomb Township
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-[1.6] text-[#4a4a4a]">
              {BUSINESS_NAME} provides a full range of water damage restoration services for Macomb Township homeowners and businesses. From emergency water removal to complete structural restoration.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                style={{ borderTop: '4px solid #1a3a5c' }}
              >
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="text-[19px] font-bold text-[#1a1a1a]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#4a4a4a]">{service.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={PHONE_HREF}
              className="inline-block rounded-lg bg-[#1a3a5c] px-8 py-4 text-[17px] font-bold text-white no-underline transition-all hover:bg-[#0f2a45] hover:shadow-lg"
            >
              Call {PHONE} for Emergency Service
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Why Choose Us</div>
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              Why Macomb Township Trusts {BUSINESS_NAME}
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f0f4f8] text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4a4a]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-[#f8f9fa] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Customer Reviews</div>
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              What Macomb Township Customers Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <StarRating />
              <span className="text-[17px] font-bold text-[#1a1a1a]">4.9 out of 5</span>
              <span className="text-[15px] text-[#6a6a6a]">— Based on 127+ reviews</span>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-xl bg-white p-7 shadow-sm"
              >
                <StarRating />
                <p className="mt-4 text-[15px] leading-[1.7] text-[#4a4a4a]">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#eee] pt-4">
                  <span className="text-[16px] font-bold text-[#1a1a1a]">{review.name}</span>
                  <span className="text-[13px] text-[#6a6a6a]">{review.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-area" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">Service Area</div>
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              Serving Macomb Township &amp; Surrounding Communities
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-[1.6] text-[#4a4a4a]">
              {BUSINESS_NAME} provides 24/7 water damage restoration services throughout Macomb Township and the greater Macomb County area. If you&apos;re nearby, we can be there fast.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-[1000px] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-lg border border-[#e0e0e0] bg-white px-5 py-4 text-[16px] font-medium text-[#1a1a1a]"
              >
                <span className="text-[#1a3a5c]">📍</span>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#f8f9fa] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#1a3a5c]">FAQ</div>
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-14 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-5 text-left"
                >
                  <h3 className="pr-4 text-[17px] font-semibold text-[#1a1a1a]">{faq.q}</h3>
                  <span className="flex-shrink-0 text-[22px] text-[#1a3a5c]">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-[#eee] px-7 pb-6 pt-4">
                    <p className="text-[16px] leading-[1.7] text-[#4a4a4a]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3a5c] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-white md:text-[48px]">
            Water Damage in Macomb Township?
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[19px] leading-[1.6] text-white/80">
            Don&apos;t wait — water damage gets worse every hour. Call {BUSINESS_NAME} now for immediate emergency response in Macomb Township.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-lg bg-yellow-400 px-10 py-5 text-[18px] font-bold text-[#1a1a1a] no-underline transition-all hover:bg-yellow-300 hover:shadow-lg"
            >
              Call {PHONE}
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white/30 px-10 py-5 text-[18px] font-semibold text-white no-underline transition-all hover:border-white/60 hover:bg-white/10"
            >
              Get Directions
            </a>
          </div>
          <div className="mt-8 text-[15px] text-white/60">
            {BUSINESS_NAME} • {ADDRESS_FULL} • {PHONE}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f2e] px-6 py-12 text-white/70">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-[18px] font-bold text-white">{BUSINESS_NAME}</div>
              <div className="mt-3 space-y-1 text-[15px]">
                <div>{ADDRESS_LINE1}</div>
                <div>{ADDRESS_CITY}, {ADDRESS_STATE} {ADDRESS_ZIP}</div>
                <a href={PHONE_HREF} className="block text-white no-underline hover:text-yellow-300">{PHONE}</a>
              </div>
            </div>
            <div>
              <div className="text-[15px] font-bold uppercase tracking-wide text-white/50">Services</div>
              <div className="mt-3 space-y-1 text-[14px]">
                <div>Water Damage Restoration</div>
                <div>Emergency Water Removal</div>
                <div>Flood Cleanup</div>
                <div>Structural Drying</div>
                <div>Basement Water Extraction</div>
                <div>Storm Damage Restoration</div>
                <div>Sewage Cleanup</div>
                <div>Mold Remediation</div>
              </div>
            </div>
            <div>
              <div className="text-[15px] font-bold uppercase tracking-wide text-white/50">Service Area</div>
              <div className="mt-3 space-y-1 text-[14px]">
                <div>Macomb Township, MI</div>
                <div>Clinton Township, MI</div>
                <div>Shelby Township, MI</div>
                <div>Sterling Heights, MI</div>
                <div>Utica, MI</div>
                <div>Washington Township, MI</div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-[13px] text-white/40">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. | 24/7 Emergency Water Damage Restoration in Macomb Township, MI
          </div>
        </div>
      </footer>
    </main>
  )
}
