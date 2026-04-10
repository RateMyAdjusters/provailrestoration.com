'use client'

import { useState } from 'react'

/* ── NAP Constants ── */
const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS = '51225 Romeo Plank Rd'
const CITY_STATE_ZIP = 'Macomb, MI 48042'
const ADDRESS_FULL = `${ADDRESS}, ${CITY_STATE_ZIP}`
const BIZ = 'Provail Restoration of Macomb Township'
const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`

/* ── Inline Icons ── */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}
function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff385c">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
function Stars5() {
  return <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <StarIcon key={i} />)}</div>
}

/* ── Services ── */
const services = [
  { title: 'Water Damage Restoration', desc: `When a pipe bursts, a basement floods, or a leak spreads behind your walls, every minute counts. ${BIZ} responds fast with emergency water extraction, moisture mapping, industrial drying, and a complete restoration plan to prevent further damage to your Macomb Township property.` },
  { title: 'Emergency Water Removal', desc: `Standing water can destroy flooring, drywall, and structural materials within hours. Our Macomb Township emergency water removal team arrives quickly with commercial-grade extraction equipment to remove water fast and begin the drying process immediately.` },
  { title: 'Flood Cleanup', desc: `Flood damage goes beyond what you can see. ${BIZ} handles contaminated water, damaged contents, sanitation, odor control, and the hidden moisture that causes mold if left untreated. We restore your Macomb Township property to pre-loss condition.` },
  { title: 'Structural Drying', desc: `Water travels deep into walls, subfloors, and framing. Our Macomb Township structural drying team uses professional dehumidifiers, air movers, and daily moisture monitoring to ensure every affected area is dried completely and documented.` },
  { title: 'Basement Water Extraction', desc: `Macomb Township basements flood from sump pump failures, burst pipes, foundation cracks, and heavy storms. We extract standing water, set up industrial drying equipment, and prevent mold growth so your basement recovers fast.` },
  { title: 'Storm Damage Restoration', desc: `Michigan storms hit Macomb Township hard — roof leaks, ice dams, wind damage, and flooding. ${BIZ} handles emergency board-up, water extraction, structural drying, and full restoration to get your property back to normal.` },
  { title: 'Sewage Cleanup', desc: `Sewage backups are hazardous and require immediate professional cleanup. Our Macomb Township team safely removes contaminated water, sanitizes affected areas, and restores your property following strict safety protocols.` },
  { title: 'Mold Remediation', desc: `Untreated water damage leads to mold growth within 24-48 hours. ${BIZ} provides professional mold inspection, containment, removal, and prevention services for Macomb Township homes and businesses.` },
  { title: 'More Services', desc: `From dehumidification and odor removal to content restoration and insurance claim assistance, we offer a full range of water damage services. Whatever your Macomb Township property has been through, we have the expertise and equipment to make it right.` },
]

/* ── Reviews ── */
const reviews = [
  { name: 'Mike D.', text: 'Had a pipe burst in the middle of the night. Called Provail and they were at our Macomb Township home within an hour. Professional crew, explained everything, and had the water out and drying equipment set up before morning. Saved our hardwood floors.' },
  { name: 'Tara P.', text: 'Our basement flooded after a huge rainstorm. Provail Restoration showed up fast, pumped everything out, and set up dryers. They came back every day to check moisture levels. Very professional and responsive team.' },
  { name: 'James K.', text: 'Great experience from start to finish. Water damage from a dishwasher leak spread under our kitchen floor. Provail found moisture we never would have caught, dried everything properly, and worked with our insurance. Highly recommend.' },
  { name: 'Sarah M.', text: 'Called at 2 AM when our water heater burst. They answered immediately and had a crew here in Macomb within 45 minutes. Fast, thorough, and they handled everything with our insurance company. Could not ask for better service.' },
  { name: 'David R.', text: 'Sump pump failed during a storm and our finished basement took on 6 inches of water. Provail had the water extracted same day, set up commercial dryers, and monitored everything for a week. They saved us from a complete gut job.' },
  { name: 'Lisa W.', text: 'Found mold behind our bathroom wall from an old leak. Provail came out, tested the area, contained it, and removed everything safely. They also fixed the source of the moisture. Very knowledgeable team.' },
]

/* ── Service Areas ── */
const areas = [
  'Macomb Township','Clinton Township','Shelby Township','Sterling Heights','Utica','Romeo',
  'Washington Township','Chesterfield Township','Ray Township','New Haven','Lenox Township','Richmond',
  'Fraser','Roseville','Mount Clemens','Harrison Township','New Baltimore','Armada',
]

/* ── FAQs ── */
const faqs = [
  { q: `Does ${BIZ} provide 24/7 emergency water damage restoration?`, a: `Yes. ${BIZ} provides 24/7 emergency water damage restoration services in Macomb Township and surrounding areas. Our team responds to calls day and night for pipe bursts, basement floods, sewage backups, storm damage, and any water emergency. Call ${PHONE} anytime.` },
  { q: `Where is ${BIZ} located?`, a: `${BIZ} is located at ${ADDRESS_FULL}. We serve Macomb Township, Clinton Township, Shelby Township, Sterling Heights, Utica, Romeo, Washington Township, and surrounding Macomb County communities.` },
  { q: 'How fast can you respond to a water damage emergency in Macomb Township?', a: `Our Macomb Township water damage restoration team typically arrives within 30-60 minutes of your call. We understand that water damage gets worse with every passing hour, so we prioritize fast response times for all emergency calls in the Macomb Township area.` },
  { q: 'Do you work with insurance companies for water damage claims?', a: `Yes. ${BIZ} works directly with all major insurance carriers. We document the damage thoroughly, provide detailed estimates, and communicate directly with your adjuster to help ensure your water damage claim is processed smoothly.` },
  { q: 'What should I do while waiting for your water damage restoration team?', a: `If it's safe to do so, turn off the water source if possible. Move valuables and electronics to a dry area. Do not use household vacuums to remove water. Do not enter rooms where the ceiling is sagging. Call us at ${PHONE} and we'll walk you through immediate steps while our Macomb Township team is on the way.` },
  { q: 'How long does the water damage restoration process take?', a: `The timeline depends on the severity of the damage. Water extraction typically takes a few hours. Structural drying usually takes 3-5 days with daily monitoring. Full restoration, including repairs, can take 1-2 weeks for moderate water damage. Our Macomb Township team provides a clear timeline during the initial assessment.` },
  { q: 'Can water damage cause mold in my Macomb Township home?', a: `Yes. Mold can begin growing within 24-48 hours of water exposure. That's why fast response and thorough drying are critical. ${BIZ} uses professional moisture detection equipment to find hidden moisture and prevent mold growth in walls, floors, and ceilings.` },
  { q: 'What types of water damage do you handle?', a: `${BIZ} handles all types of water damage in Macomb Township: pipe bursts, basement flooding, sump pump failures, sewage backups, appliance leaks, roof leaks, storm damage, ice dam damage, and more. No job is too large or too small.` },
]

/* ════════════════════════════════════════════════════════════════
   PAGE COMPONENT — A1 Garage sequence, Provail Airbnb design
   ════════════════════════════════════════════════════════════════ */
export default function MacombPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── 1. HEADER — White sticky, matching homepage ── */}
      <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center no-underline">
            <img src="/logo.png" alt={BIZ} style={{ height: 150, width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Areas', href: '#areas' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-[#222222] text-[15px] font-medium no-underline hover:text-[#ff385c] transition-colors duration-150">
                {link.label}
              </a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-[#222222] no-underline hover:text-[#ff385c] transition-colors duration-150">
            <PhoneIcon />
            <span className="font-semibold text-[15px]">{PHONE}</span>
          </a>
        </div>
        {/* Mobile CTA bar */}
        <div className="lg:hidden flex items-center justify-center gap-3 py-2.5" style={{ backgroundColor: '#ff385c' }}>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm flex items-center gap-1.5 no-underline">
            <PhoneIcon className="text-white" />
            Call {PHONE}
          </a>
          <span className="text-white/40">|</span>
          <a href="#services" className="text-white font-semibold text-sm no-underline">View Services</a>
        </div>
      </header>

      <main>
        {/* ── 2. HERO — A1 style: big headline + NAP card right ── */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                {/* Pill badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 text-[13px] font-medium text-[#222222]" style={{ borderRadius: '32px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  <span>Emergency Service</span>
                  <span className="text-[#c1c1c1]">|</span>
                  <span>24/7</span>
                  <span className="text-[#c1c1c1]">|</span>
                  <span>Licensed &amp; Insured</span>
                </div>

                <h1 className="text-[#222222] font-bold leading-[1.08] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', letterSpacing: '-0.44px' }}>
                  BEST Water Damage Restoration Near You in Macomb Township
                </h1>
                <p className="text-[#6a6a6a] text-lg leading-relaxed mb-8 max-w-[560px]">
                  Whether you need emergency water removal, flood cleanup, or complete water damage restoration, {BIZ} is here to help. Our team of expert technicians responds 24/7 with commercial-grade equipment to restore your Macomb Township property.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href={PHONE_HREF} className="btn-cta inline-flex items-center justify-center gap-2 no-underline" style={{ borderRadius: '20px', padding: '0 32px', height: '52px', backgroundColor: '#ff385c', color: '#fff', fontWeight: 600, fontSize: '1.0625rem', border: 'none' }}>
                    <PhoneIcon className="text-white" />
                    Call Now: {PHONE}
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center gap-2 no-underline" style={{ borderRadius: '8px', padding: '0 28px', height: '52px', border: '2px solid #222222', color: '#222222', fontWeight: 600, fontSize: '1rem', backgroundColor: 'transparent' }}>
                    View Our Services
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#222222] font-semibold">
                  <span className="flex items-center gap-1.5"><Stars5 /> 4.9</span>
                  <span className="text-[#c1c1c1]">|</span>
                  <span>127+ Reviews</span>
                  <span className="text-[#c1c1c1]">|</span>
                  <span>IICRC Certified</span>
                </div>
              </div>

              {/* NAP Card */}
              <div className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                <h2 className="text-[#222222] text-xl font-bold mb-1">{BIZ}</h2>
                <p className="text-[#6a6a6a] text-sm mb-6">Your Local Water Damage Restoration Company</p>
                <div className="space-y-4 text-[15px]">
                  <div><span className="text-[#6a6a6a] text-[12px] font-semibold uppercase tracking-wider block mb-1">Address</span><span className="text-[#222222] font-medium">{ADDRESS}<br />{CITY_STATE_ZIP}</span></div>
                  <div><span className="text-[#6a6a6a] text-[12px] font-semibold uppercase tracking-wider block mb-1">Phone</span><a href={PHONE_HREF} className="text-[#ff385c] font-bold text-lg no-underline hover:underline">{PHONE}</a></div>
                  <div><span className="text-[#6a6a6a] text-[12px] font-semibold uppercase tracking-wider block mb-1">Hours</span><span className="text-[#222222] font-medium">Open 24 Hours — 7 Days a Week</span></div>
                  <div><span className="text-[#6a6a6a] text-[12px] font-semibold uppercase tracking-wider block mb-1">Certifications</span><span className="text-[#222222] font-medium">IICRC Certified • Licensed &amp; Insured</span></div>
                </div>
                <a href={PHONE_HREF} className="mt-6 flex items-center justify-center gap-2 text-white font-semibold text-base no-underline w-full" style={{ backgroundColor: '#222222', borderRadius: '8px', height: '48px' }}>
                  <PhoneIcon className="text-white" />
                  Get Emergency Help Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BOOK APPOINTMENT / CTA STRIP ── */}
        <section className="bg-[#f7f7f7]" style={{ padding: '48px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', letterSpacing: '-0.44px' }}>
              Book Your Appointment Today
            </h2>
            <p className="text-[#6a6a6a] text-lg max-w-[560px] mx-auto mb-6">
              Looking to get your water damage fixed? Book your appointment today and discover how easy and affordable it can be to restore your Macomb Township property!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold no-underline" style={{ backgroundColor: '#ff385c', borderRadius: '20px', padding: '0 32px', height: '52px', fontSize: '1.0625rem' }}>
                <PhoneIcon className="text-white" />
                Call Now
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 font-semibold no-underline" style={{ backgroundColor: '#222222', color: '#fff', borderRadius: '8px', padding: '0 28px', height: '52px' }}>
                Schedule Online
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. YOUR LOCAL COMPANY (About / Why Choose Us) ── */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px', lineHeight: '1.2' }}>
                  Your Local Water Damage Restoration Company
                </h2>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
                  Trust {BIZ}, the water damage restoration company serving Macomb Township, MI, for all your water damage needs. From emergency water removal and structural drying to complete flood cleanup and mold remediation, we deliver reliable and lasting solutions with quality equipment and expert craftsmanship.
                </p>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
                  We proudly serve Macomb Township and surrounding areas such as Clinton Township, Shelby Township, Sterling Heights, Utica, and Washington Township. We are known for clear pricing, exceptional service, and dependable restoration for every water damage project.
                </p>
                <p className="text-[#6a6a6a] text-base leading-relaxed">
                  At {BIZ}, we treat you like family. As your local partner, we take pride in serving our Macomb Township neighbors with dedicated care and attention. Our promise of integrity, respect, and accountability is backed by IICRC certification and a commitment to restoring your property right the first time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '<60 Min Response', icon: '⏱️' },
                  { label: '24/7 Available', icon: '🔄' },
                  { label: 'IICRC Certified', icon: '✅' },
                  { label: 'Insurance Assistance', icon: '📋' },
                  { label: 'Local Macomb Team', icon: '📍' },
                  { label: 'Commercial Equipment', icon: '🔧' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f7f7f7] p-5 text-center" style={{ borderRadius: '20px' }}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-[#222222] text-[14px] font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. LOCATION / MAP ── */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
                {BIZ} in Macomb Township, Michigan
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                <h3 className="text-[#222222] text-lg font-semibold mb-4">{BIZ}</h3>
                <p className="text-[#6a6a6a] text-[15px] mb-1">{ADDRESS}</p>
                <p className="text-[#6a6a6a] text-[15px] mb-3">{CITY_STATE_ZIP}</p>
                <a href={PHONE_HREF} className="text-[#ff385c] font-bold text-lg no-underline hover:underline block mb-3">{PHONE}</a>
                <p className="text-[#6a6a6a] text-[14px] mb-4">Available 24 hours a day, 7 days a week for emergency water damage restoration</p>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-[#222222] font-semibold text-[15px] no-underline hover:text-[#ff385c] transition-colors">
                  Get Directions →
                </a>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', minHeight: 350 }}>
                <iframe src={MAPS_URL} width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${BIZ} Location`} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. SERVICES — 3x3 grid matching homepage ── */}
        <section id="services" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Water Damage Restoration Services in Macomb Township
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[600px] mx-auto">
                Discover the range of services provided by {BIZ}, reflecting our commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white p-8 cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                    transition: 'box-shadow 250ms cubic-bezier(0.25,0.1,0.25,1), transform 250ms cubic-bezier(0.25,0.1,0.25,1)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px, rgba(0,0,0,0.14) 0px 8px 20px' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
                >
                  <h3 className="text-[#222222] text-lg font-semibold mb-3" style={{ letterSpacing: '-0.44px' }}>{s.title}</h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.6] m-0">{s.desc}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={PHONE_HREF} className="text-[#ff385c] text-[14px] font-semibold no-underline hover:underline">Schedule Online</a>
                    <span className="text-[#c1c1c1]">|</span>
                    <a href={PHONE_HREF} className="text-[#222222] text-[14px] font-semibold no-underline hover:text-[#ff385c]">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. 24/7 EMERGENCY SECTION ── */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[#222222] font-bold mb-4" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px', lineHeight: '1.2' }}>
                  24/7 Emergency Water Damage Restoration Near You in Macomb Township
                </h2>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
                  Experiencing a water damage emergency when you&apos;re on a tight schedule can be incredibly stressful. Whether it&apos;s a basement that&apos;s flooding, a pipe that won&apos;t stop leaking, standing water in your kitchen, or a sewage backup, such disasters can turn your life upside down. That&apos;s where {BIZ} comes in.
                </p>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-6">
                  If an unexpected water damage emergency occurs late at night or during the weekend, remember that we&apos;re just a phone call away. Our dedicated local emergency crew is ready for 24/7 water damage restoration in Macomb Township. Yes, we&apos;re on standby round the clock, every day!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold no-underline" style={{ backgroundColor: '#ff385c', borderRadius: '20px', padding: '0 32px', height: '52px', fontSize: '1.0625rem' }}>
                    Emergency? Call Now
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-[#222222] text-xl font-semibold mb-4">Common Water Damage Emergencies</h3>
                {[
                  { title: 'Pipe Burst or Leak', desc: 'Sudden pipe failures can flood rooms in minutes. Our team extracts water and begins drying immediately.' },
                  { title: 'Basement Flooding', desc: 'Sump pump failures, storms, and foundation cracks cause rapid basement flooding. We respond fast to extract and dry.' },
                  { title: 'Sewage Backup', desc: 'Sewage is hazardous. Our certified team safely removes contaminated water and sanitizes the affected area.' },
                  { title: 'Appliance Failure', desc: 'Dishwashers, washing machines, and water heaters can leak or burst without warning. We handle the cleanup and restoration.' },
                ].map((item) => (
                  <div key={item.title} className="mb-4 bg-white p-5" style={{ borderRadius: '16px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                    <h4 className="text-[#222222] text-[15px] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[#6a6a6a] text-[14px] leading-[1.6] m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. REVIEWS — Matching homepage testimonial style ── */}
        <section id="reviews" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                What Macomb Township Customers Say
              </h2>
              <div className="flex items-center justify-center gap-3">
                <Stars5 />
                <span className="text-[#222222] text-[17px] font-bold">4.9 out of 5</span>
                <span className="text-[#6a6a6a] text-[15px]">— 127+ reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}>
                  <Stars5 />
                  <p className="text-[#222222] text-[15px] leading-[1.65] mt-4 mb-4">&ldquo;{r.text}&rdquo;</p>
                  <div className="text-[#222222] text-[15px] font-semibold">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. SERVICE AREAS ── */}
        <section id="areas" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px' }}>
                Find {BIZ} Near You
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[560px] mx-auto">
                We serve Macomb Township and all surrounding Macomb County communities.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((a) => (
                <div key={a} className="bg-white px-4 py-3 text-center text-[14px] font-medium text-[#222222]" style={{ borderRadius: '12px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. FAQ — Accordion ── */}
        <section id="faq" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Frequently Asked Questions About Water Damage Restoration
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white"
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    <span className="text-[#222222] text-[16px] font-semibold pr-4">{faq.q}</span>
                    <span className="text-[#ff385c] text-xl flex-shrink-0 font-bold">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 bg-white" style={{ borderTop: '1px solid #f2f2f2' }}>
                      <p className="text-[#6a6a6a] text-[15px] leading-[1.7] pt-4 m-0">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. FINAL CTA ── */}
        <section className="bg-[#222222]" style={{ padding: '80px 0' }}>
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.44px' }}>
              Water Damage in Macomb Township?
            </h2>
            <p className="text-white/70 text-lg max-w-[560px] mx-auto mb-8">
              Don&apos;t wait — water damage gets worse every hour. Call {BIZ} now for immediate emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-semibold no-underline" style={{ backgroundColor: '#ff385c', borderRadius: '20px', padding: '0 32px', height: '56px', fontSize: '1.125rem' }}>
                <PhoneIcon className="text-white" />
                Call {PHONE}
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-semibold no-underline" style={{ borderRadius: '8px', padding: '0 28px', height: '56px', border: '2px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '1rem' }}>
                Get Directions
              </a>
            </div>
            <p className="text-white/40 text-[14px]">{BIZ} • {ADDRESS_FULL} • {PHONE}</p>
          </div>
        </section>
      </main>

      {/* ── 12. FOOTER ── */}
      <footer className="bg-[#f7f7f7]" style={{ padding: '48px 0 32px', borderTop: '1px solid #e8e8e8' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[#222222] text-[16px] font-bold mb-3">{BIZ}</div>
              <div className="text-[#6a6a6a] text-[14px] space-y-1">
                <div>{ADDRESS}</div>
                <div>{CITY_STATE_ZIP}</div>
                <a href={PHONE_HREF} className="text-[#ff385c] no-underline font-semibold block">{PHONE}</a>
              </div>
            </div>
            <div>
              <div className="text-[#222222] text-[13px] font-semibold uppercase tracking-wider mb-3">Services</div>
              <div className="text-[#6a6a6a] text-[14px] space-y-1">
                {['Water Damage Restoration','Emergency Water Removal','Flood Cleanup','Structural Drying','Basement Water Extraction','Storm Damage Restoration','Sewage Cleanup','Mold Remediation'].map(s => <div key={s}>{s}</div>)}
              </div>
            </div>
            <div>
              <div className="text-[#222222] text-[13px] font-semibold uppercase tracking-wider mb-3">Service Area</div>
              <div className="text-[#6a6a6a] text-[14px] space-y-1">
                {['Macomb Township, MI','Clinton Township, MI','Shelby Township, MI','Sterling Heights, MI','Utica, MI','Washington Township, MI'].map(a => <div key={a}>{a}</div>)}
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 text-center text-[#6a6a6a] text-[13px]" style={{ borderTop: '1px solid #e8e8e8' }}>
            © {new Date().getFullYear()} {BIZ}. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
