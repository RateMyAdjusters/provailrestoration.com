'use client'

import { useState, useRef } from 'react'

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS_LINE1 = '51090 Romeo Plank Rd'
const ADDRESS_LINE2 = 'Macomb, MI 48042'
const BUSINESS_NAME = 'Provail Restoration of Macomb Township'
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE1 + ', ' + ADDRESS_LINE2)}&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE1 + ', ' + ADDRESS_LINE2)}`

// ─── DESIGN TOKENS (matching our colorway) ──────────────────────────────────
const C = {
  accent: '#ff385c',
  accentDark: '#e0314f',
  text: '#222222',
  secondary: '#6a6a6a',
  white: '#ffffff',
  bgAlt: '#f7f7f7',
  dark: '#222222',
}
const shadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
const font = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'

// ─── ICON COMPONENTS ─────────────────────────────────────────────────────────
function PhoneIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CalendarIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function ClockIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" /><path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function ShieldIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CertIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="6" stroke={color} strokeWidth="2" /><path d="M12 16v6M9 19l3-3 3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function StarIcon({ size = 20, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
}
function MapPinIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={color} strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" /></svg>
}
function QuoteIcon({ size = 28, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M9.135 5.015c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485zm8 0c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485z" /></svg>
}
function ChevronLeft({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ChevronRight({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function MenuIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function CloseIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function WaterDropIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" fill={color} /></svg>
}
function FloodIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M1 18c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M1 14c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M12 2v8M8 6l4 4 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function MoldIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill={color} /><circle cx="6" cy="8" r="2" fill={color} opacity="0.7" /><circle cx="18" cy="8" r="2" fill={color} opacity="0.7" /><circle cx="8" cy="17" r="2.5" fill={color} opacity="0.5" /><circle cx="17" cy="16" r="1.5" fill={color} opacity="0.6" /></svg>
}
function DryingIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8 2v4M12 2v6M16 2v4" stroke={color} strokeWidth="2" strokeLinecap="round" /><rect x="3" y="10" width="18" height="12" rx="3" stroke={color} strokeWidth="2" /><path d="M7 15h2M11 15h2M15 15h2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
}
function BasementIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 10l9-7 9 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v10h14V10" stroke={color} strokeWidth="2" /><path d="M3 17c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" /></svg>
}
function SewageIcon({ size = 32, color = C.accent }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 3v5" stroke={color} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="14" r="6" stroke={color} strokeWidth="2" /><path d="M10 13l1.5 2 3-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const services = [
  { icon: WaterDropIcon, title: 'Same Day Service', desc: `${BUSINESS_NAME} offers 24/7 emergency water damage restoration. Our local water damage experts guarantee swift resolution for your water damage issues, day or night.` },
  { icon: FloodIcon, title: 'Flood Cleanup', desc: 'Floodwater can carry contaminants, weaken structures, and create long-term problems if not handled properly. Our flood cleanup team removes water, sanitizes affected areas, and ensures your property is safe to occupy again.' },
  { icon: MoldIcon, title: 'Mold Remediation', desc: 'Noticed a musty smell, discoloration on your walls, or visible mold growth? Mold can spread fast and pose serious health risks if left untreated. Call our certified mold remediation specialists to contain the problem and remove it at the source.' },
  { icon: DryingIcon, title: 'Structural Drying', desc: 'Water damage doesn\'t stop at the surface\u2014moisture trapped inside walls, floors, and ceilings can cause warping, rot, and mold if not addressed. Our structural drying specialists use commercial-grade dehumidifiers and air movers to eliminate hidden moisture completely.' },
  { icon: BasementIcon, title: 'Basement Water Extraction', desc: 'Is water pooling in your basement after a storm, sump pump failure, or foundation leak? Standing water in your basement can damage your belongings, compromise your foundation, and invite mold growth.' },
  { icon: SewageIcon, title: 'Sewage Cleanup', desc: 'Sewage backups are more than just unpleasant\u2014they\'re a serious health hazard that requires professional handling. Don\'t attempt to clean up sewage contamination on your own. Call our trained technicians to safely remove waste and disinfect affected areas.' },
]

const testimonials = [
  { name: 'Mike D.', text: 'Had a pipe burst in the middle of the night. Called Provail and they were at our Macomb Township home within an hour. Professional crew, explained everything, and had the water out and drying equipment set up before morning. Saved our hardwood floors.' },
  { name: 'Tara P.', text: 'Our basement flooded after a huge rainstorm. Provail Restoration showed up fast, pumped everything out, and set up dryers. They came back every day to check moisture levels. Very professional and responsive team.' },
  { name: 'James K.', text: 'Great experience from start to finish. Water damage from a dishwasher leak spread under our kitchen floor. Provail found moisture we never would have caught, dried everything properly, and worked with our insurance.' },
  { name: 'Sarah M.', text: 'Called at 2 AM when our water heater burst. They answered immediately and had a crew here in Macomb within 45 minutes. Fast, thorough, and they handled everything with our insurance company. Could not ask for better service.' },
  { name: 'David R.', text: 'Sump pump failed during a storm and our finished basement took on 6 inches of water. Provail had the water extracted same day, set up commercial dryers, and monitored everything for a week.' },
  { name: 'Lisa W.', text: 'Found mold behind our bathroom wall from an old leak. Provail came out, tested the area, contained it, and removed everything safely. They also fixed the source of the moisture. Very knowledgeable team.' },
  { name: 'Dan B.', text: 'We were dealing with a flooded basement and had no idea where to start. They walked us through everything, handled the water extraction and drying, and followed up a week later to make sure there were no issues.' },
  { name: 'Patricia G.', text: 'Excellent work. They found mold behind our drywall that two other companies missed. Very knowledgeable and thorough.' },
]

const serviceAreas = [
  'Macomb Township', 'Clinton Township', 'Shelby Township', 'Sterling Heights', 'Utica', 'Romeo',
  'Washington Township', 'Chesterfield Township', 'Ray Township', 'New Haven', 'Lenox Township', 'Richmond',
  'Fraser', 'Roseville', 'Mount Clemens', 'Harrison Township', 'New Baltimore', 'Armada',
]

const faqs = [
  { q: 'How fast can you respond to a water damage emergency in Macomb Township?', a: `Our Macomb Township water damage restoration team typically arrives within 30-60 minutes of your call. We understand that water damage gets worse with every passing hour, so we prioritize fast response times for all emergency calls in the Macomb Township area.` },
  { q: 'Do you work with insurance companies for water damage claims?', a: `Yes. ${BUSINESS_NAME} works directly with all major insurance carriers. We document the damage thoroughly, provide detailed estimates, and communicate directly with your adjuster to help ensure your water damage claim is processed smoothly.` },
  { q: 'What should I do while waiting for your water damage restoration team?', a: `If it's safe to do so, turn off the water source if possible. Move valuables and electronics to a dry area. Do not use household vacuums to remove water. Do not enter rooms where the ceiling is sagging. Call us at ${PHONE} and we'll walk you through immediate steps while our Macomb Township team is on the way.` },
  { q: 'How long does the water damage restoration process take?', a: `The timeline depends on the severity of the damage. Water extraction typically takes a few hours. Structural drying usually takes 3-5 days with daily monitoring. Full restoration, including repairs, can take 1-2 weeks for moderate water damage.` },
]

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default function MacombTownshipPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (dir: 'left' | 'right') => {
    carouselRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: font, color: C.text, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* ═══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: C.white, boxShadow: '0 1px 0 rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 75, width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['Services', 'About', 'Reviews', 'Areas', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: C.text, fontSize: 14, fontWeight: 500 }}>{item}</a>
            ))}
            <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: C.text, fontSize: 14, fontWeight: 600 }}>
              <PhoneIcon size={16} color={C.accent} />
              {PHONE}
            </a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} aria-label="Toggle menu">
            {mobileMenuOpen ? <CloseIcon color={C.text} /> : <MenuIcon color={C.text} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div style={{ backgroundColor: C.white, borderTop: '1px solid #ebebeb', padding: '16px 24px' }}>
            {['Services', 'About', 'Reviews', 'Areas', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', textDecoration: 'none', color: C.text, fontSize: 16, fontWeight: 500, borderBottom: '1px solid #ebebeb' }}>{item}</a>
            ))}
          </div>
        )}
        <div className="mobile-cta-bar" style={{ display: 'none', backgroundColor: C.accent }}>
          <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 0', color: C.white, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <PhoneIcon size={16} color={C.white} />Call Now: {PHONE}
          </a>
        </div>
      </header>

      {/* ═══ HERO — A1 Garage style: dark bg image, two columns ══════════════ */}
      <section style={{ position: 'relative', backgroundColor: '#111', minHeight: 600, padding: '80px 0 180px', overflow: 'visible' }}>
        {/* Dark overlay gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(34,34,34,0.75) 50%, rgba(0,0,0,0.65) 100%)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: 50, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left column */}
            <div style={{ flex: '1 1 55%', minWidth: 320 }}>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.white, lineHeight: 1.1, margin: '0 0 20px' }}>
                BEST Water Damage Restoration Near You in Macomb Township
              </h1>
              <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 540 }}>
                Whether you need emergency water removal, flood cleanup, or a complete water damage restoration, {BUSINESS_NAME} is here to help. Our team of expert technicians is equipped with commercial-grade tools and industry-leading training to make sure your property is restored safely and thoroughly.
              </p>
              <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none', minWidth: 230 }}>
                Emergency? Call Now
              </a>
            </div>

            {/* Right column — White card with map + info (A1 style) */}
            <div style={{ flex: '0 0 380px', backgroundColor: C.white, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', maxWidth: '100%' }}>
              <iframe src={MAPS_EMBED} width="100%" height="250" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" title={`${BUSINESS_NAME} Location`} />
              <div style={{ padding: 25 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: C.accent, textTransform: 'uppercase', margin: '0 0 15px', letterSpacing: '-0.3px' }}>
                  {BUSINESS_NAME}
                </h2>
                <p style={{ fontSize: 15, color: C.text, margin: '0 0 4px', lineHeight: 1.5 }}>{ADDRESS_LINE1}</p>
                <p style={{ fontSize: 15, color: C.text, margin: '0 0 12px', lineHeight: 1.5 }}>{ADDRESS_LINE2}</p>
                <a href={PHONE_HREF} style={{ fontSize: 17, fontWeight: 600, color: C.text, textDecoration: 'none', display: 'block', marginBottom: 12 }}>{PHONE}</a>
                <p style={{ fontSize: 16, color: C.secondary, margin: 0, lineHeight: 1.5 }}>
                  Available 24 hours a day,<br />7 days a week for emergency water damage restoration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ FLOATING APPOINTMENT STRIP (A1 .sc_strip style) ═══════════════ */}
        <div style={{ position: 'absolute', bottom: -70, left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: 1100, zIndex: 9, backgroundColor: C.white, borderRadius: 12, boxShadow: '0 0 18px 8px rgba(0,0,0,0.1)', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 auto', minWidth: 280 }}>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: C.text, margin: '0 0 6px', letterSpacing: '-0.3px' }}>Book Your Appointment Today</h2>
            <p style={{ fontSize: 14, color: C.secondary, margin: 0, lineHeight: 1.6 }}>
              Looking to get your water damage fixed, assessed, or restored? Book your appointment today and discover how easy and affordable it can be to restore your Macomb Township property.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <CalendarIcon size={16} color={C.white} />Schedule Online
            </a>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', backgroundColor: C.dark, color: C.white, borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <PhoneIcon size={16} color={C.white} />Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Spacer for the floating strip */}
      <div style={{ height: 100 }} />

      {/* ═══ YOUR LOCAL COMPANY ═══════════════════════════════════════════════ */}
      <section id="about" style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px' }}>
            Your Local Water Damage Restoration Company
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            Trust {BUSINESS_NAME}, the water damage restoration company serving Macomb Township, MI, for all your water damage needs. From emergency water removal and structural drying to complete flood cleanup and mold remediation, we deliver reliable and lasting solutions with quality equipment and expert craftsmanship.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            We proudly serve Macomb Township and surrounding areas such as Clinton Township, Shelby Township, Sterling Heights, Utica, and Washington Township. We are known for clear pricing, exceptional service, and dependable restoration for every water damage project.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: 0, maxWidth: 900 }}>
            At {BUSINESS_NAME}, we treat you like family. As your local partner, we take pride in serving our Macomb Township neighbors with dedicated care and attention. Our promise of integrity, respect, and accountability is backed by IICRC certification and a commitment to restoring your property right the first time.
          </p>
        </div>
      </section>

      {/* ═══ TRUST BADGES ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { icon: <ClockIcon size={28} color={C.accent} />, label: '<60 Min Response' },
            { icon: <ShieldIcon size={28} color={C.accent} />, label: '24/7 Available' },
            { icon: <CertIcon size={28} color={C.accent} />, label: 'IICRC Certified' },
            { icon: <StarIcon size={28} color={C.accent} />, label: '4.9 Rating' },
          ].map((badge, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {badge.icon}
              <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WATER DAMAGE RESTORATION SPECIALISTS ════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px', lineHeight: 1.15 }}>
              Water Damage Restoration Specialists
            </h2>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px' }}>
              Water damage can come from anywhere\u2014a burst pipe behind the wall, a failing appliance, a roof leak during a Michigan storm, or a sump pump that quits at 2 AM. When it happens, the damage spreads fast. Within hours, standing water can warp hardwood floors, saturate drywall, and create the conditions for mold growth that puts your family&apos;s health at risk.
            </p>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 32px' }}>
              Our IICRC-certified technicians use commercial-grade extraction equipment, industrial dehumidifiers, and advanced moisture detection tools to locate hidden water, remove it completely, and dry your property to pre-loss condition. We document everything for insurance and keep you informed at every step.
            </p>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
              Schedule Now
            </a>
          </div>
          <div style={{ backgroundColor: C.bgAlt, borderRadius: 20, padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 320 }}>
            <ClockIcon size={64} color={C.accent} />
            <h3 style={{ fontSize: 56, fontWeight: 700, color: C.text, marginTop: 20, marginBottom: 8, letterSpacing: '-0.44px' }}>&lt;60 min</h3>
            <p style={{ fontSize: 16, color: C.secondary, margin: 0 }}>Average response time</p>
          </div>
        </div>
      </section>

      {/* ═══ 24/7 EMERGENCY ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px', lineHeight: 1.15 }}>
            24/7 Emergency Water Damage Restoration Near You in Macomb Township &mdash; There When You Need Us
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            Experiencing a water damage emergency when you&apos;re on a tight schedule can be incredibly stressful. Whether it&apos;s a basement that&apos;s flooding, a pipe that won&apos;t stop leaking, standing water in your kitchen, or a sewage backup, such disasters can turn your life upside down. That&apos;s where your trusted emergency water damage restoration technicians in Macomb Township at {BUSINESS_NAME} come in.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            We&apos;re at the forefront, always prepared to address any water damage challenges and provide emergency solutions when needed. Our experienced technicians can handle an array of issues, from extracting standing water and setting up industrial drying equipment to treating mold and coordinating with your insurance company.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 900 }}>
            If an unexpected water damage emergency occurs late at night or during the weekend, remember that we&apos;re just a phone call away. Our dedicated local emergency crew is ready for 24/7 water damage restoration in Macomb Township. Yes, we&apos;re on standby round the clock, every day!
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>Your Basement Won&apos;t Stop Flooding</h3>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            When your basement won&apos;t stop taking on water, it can be overwhelming\u2014especially when you&apos;re not sure where it&apos;s coming from. Common causes include sump pump failures, foundation cracks, burst pipes, and heavy storms. Before calling for help, turn off the water supply if you can identify the source and move valuables to higher ground.
          </p>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 900 }}>
            Our 24/7 emergency water damage restoration team is always available to extract standing water, set up commercial drying equipment, treat for mold prevention, and restore your basement to safe, dry condition with quality equipment and expert care.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.accent, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
              Emergency? Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ HOW MUCH DOES WATER DAMAGE RESTORATION COST ════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 20px' }}>
            How Much Does Water Damage Restoration Cost in Macomb Township?
          </h2>
          <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 900 }}>
            The cost of water damage restoration in Macomb Township depends on several factors, including the extent of the damage, the type of water involved, and the areas of your property affected. Here&apos;s a general breakdown of what influences pricing:
          </p>
          <ul style={{ fontSize: 16, color: C.secondary, lineHeight: 1.9, margin: '0 0 24px', paddingLeft: 24, maxWidth: 900 }}>
            <li><strong>Category of water damage</strong> &mdash; Clean water (Category 1) from a burst pipe costs less to restore than gray water (Category 2) or black water (Category 3) from sewage backups</li>
            <li><strong>Square footage affected</strong> &mdash; A small kitchen leak is significantly different from a fully flooded basement</li>
            <li><strong>Materials damaged</strong> &mdash; Hardwood floors, drywall, carpet, and structural materials each require different restoration approaches</li>
            <li><strong>Mold presence</strong> &mdash; If mold has already begun growing, remediation adds to the scope and cost</li>
            <li><strong>Equipment needed</strong> &mdash; Industrial dehumidifiers, air movers, and specialized extraction tools are priced based on duration of use</li>
            <li><strong>Insurance coverage</strong> &mdash; Most homeowner policies cover sudden and accidental water damage. We work directly with your carrier to streamline the process</li>
          </ul>
          <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', backgroundColor: C.dark, color: C.white, borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
            Get Your Estimate
          </a>
        </div>
      </section>

      {/* ═══ SERVICES & PRODUCTS ═════════════════════════════════════════════ */}
      <section id="services" style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>Services and Products</h2>
            <p style={{ fontSize: 16, color: C.secondary, margin: 0 }}>Discover the range of services provided by {BUSINESS_NAME}, reflecting our commitment to excellence.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {services.map((s, i) => {
              const Icon = s.icon
              const isHovered = hoveredCard === i
              return (
                <div key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{ backgroundColor: isHovered ? C.accent : C.white, borderRadius: 20, padding: '48px 24px 24px', boxShadow: shadow, transition: 'transform 0.25s ease, background-color 0.25s ease', transform: isHovered ? 'translateY(-4px)' : 'translateY(0)', cursor: 'default', position: 'relative', textAlign: 'center' }}>
                  <div style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', width: 56, height: 56, borderRadius: 16, backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${C.accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={28} color={isHovered ? C.white : C.accent} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.44px', color: isHovered ? C.white : C.text, margin: '0 0 12px' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: isHovered ? 'rgba(255,255,255,0.9)' : C.secondary, lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                    <a href={PHONE_HREF} style={{ fontSize: 13, fontWeight: 600, color: isHovered ? C.white : C.accent, textDecoration: 'none', padding: '8px 20px', border: `1px solid ${isHovered ? 'rgba(255,255,255,0.4)' : C.accent}`, borderRadius: 6 }}>Schedule Online</a>
                    <a href={PHONE_HREF} style={{ fontSize: 13, fontWeight: 600, color: isHovered ? C.white : C.text, textDecoration: 'none', padding: '8px 20px', border: `1px solid ${isHovered ? 'rgba(255,255,255,0.4)' : '#ccc'}`, borderRadius: 6 }}>Learn More</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═════════════════════════════════════════════════════════ */}
      <section id="reviews" style={{ backgroundColor: C.white, padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>What Our Happy Clients Are Saying</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
              {[1,2,3,4,5].map(s => <StarIcon key={s} size={20} />)}
              <span style={{ fontSize: 16, fontWeight: 700, color: C.text, marginLeft: 4 }}>4.9</span>
              <span style={{ fontSize: 14, color: C.secondary }}>&mdash; 127+ reviews</span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => scrollCarousel('left')} style={{ position: 'absolute', left: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 40, height: 40, borderRadius: '50%', backgroundColor: C.white, border: '1px solid #ebebeb', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll left"><ChevronLeft size={20} color={C.text} /></button>
            <button onClick={() => scrollCarousel('right')} style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 40, height: 40, borderRadius: '50%', backgroundColor: C.white, border: '1px solid #ebebeb', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll right"><ChevronRight size={20} color={C.text} /></button>
            <div ref={carouselRef} style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', paddingBottom: 8, scrollbarWidth: 'none' }}>
              {testimonials.map((t, i) => {
                const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                return (
                  <div key={i} style={{ flex: '0 0 340px', scrollSnapAlign: 'start', backgroundColor: C.white, borderRadius: 20, padding: 32, boxShadow: shadow }}>
                    <QuoteIcon size={28} />
                    <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.7, margin: '16px 0 24px' }}>{t.text}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: `${C.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, color: C.accent }}>{initials}</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: C.text, margin: 0 }}>{t.name}</p>
                        <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>{[1,2,3,4,5].map(s => <StarIcon key={s} size={12} />)}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 32px', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 8, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', backgroundColor: openFaq === i ? C.accent : C.white, color: openFaq === i ? C.white : C.text, border: 'none', cursor: 'pointer', fontSize: 16, fontWeight: 600, textAlign: 'left', transition: 'background-color 0.2s' }}>
                  <span style={{ paddingRight: 16 }}>{faq.q}</span>
                  <span style={{ fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{openFaq === i ? '\u2212' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '20px 24px', backgroundColor: C.white, borderTop: `2px solid ${C.accent}` }}>
                    <p style={{ fontSize: 15, color: C.secondary, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HELPFUL RESOURCES ═══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 12px' }}>Helpful Resources in Macomb Township, MI</h2>
          <p style={{ fontSize: 16, color: C.secondary, margin: '0 0 40px', lineHeight: 1.6 }}>
            If you are dealing with water damage in Macomb Township, these local resources can help you navigate permits, codes, and emergency services.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {[
              { name: 'Macomb Township Building Department', address: '54111 Broughton Rd', city: 'Macomb Township, MI 48042', phone: '(586) 992-0710', desc: 'This department handles building permits, inspections, and code compliance for water damage restoration projects that involve structural repairs.' },
              { name: 'Macomb Township Fire Department', address: '54111 Broughton Rd', city: 'Macomb Township, MI 48042', phone: '(586) 992-7830', desc: 'The Fire Department can assist with emergency water shutoffs, safety inspections, and code compliance for restoration projects.' },
              { name: 'Macomb County Health Department', address: '43525 Elizabeth Rd', city: 'Mount Clemens, MI 48043', phone: '(586) 469-5235', desc: 'The Health Department provides guidance on mold remediation standards, sewage cleanup protocols, and environmental health concerns related to water damage.' },
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: C.bgAlt, borderRadius: 12, padding: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, margin: '0 0 12px' }}>{r.name}</h3>
                <p style={{ fontSize: 14, color: C.secondary, margin: '0 0 2px' }}>{r.address}</p>
                <p style={{ fontSize: 14, color: C.secondary, margin: '0 0 10px' }}>{r.city}</p>
                <a href={`tel:${r.phone.replace(/[^\d]/g, '')}`} style={{ fontSize: 15, fontWeight: 600, color: C.text, textDecoration: 'none', display: 'block', marginBottom: 12 }}>{r.phone}</a>
                <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══════════════════════════════════════════════════ */}
      <section id="areas" style={{ backgroundColor: C.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.text, margin: '0 0 40px', textAlign: 'center' }}>Find {BUSINESS_NAME} Near You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {serviceAreas.map((area, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', backgroundColor: C.white, borderRadius: 12, fontSize: 15, fontWeight: 500, color: C.text }}>
                <MapPinIcon size={18} color={C.accent} />{area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT / FINAL CTA ════════════════════════════════════════════ */}
      <section id="contact" style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.44px', color: C.white, margin: '0 0 48px', textAlign: 'center' }}>Contact {BUSINESS_NAME}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 48 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: C.white, margin: '0 0 24px' }}>{BUSINESS_NAME}</h3>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <MapPinIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Address</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <PhoneIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Phone</p>
                  <a href={PHONE_HREF} style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{PHONE}</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <ClockIcon size={20} color={C.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>Hours</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0 }}>24 Hours a Day, 7 Days a Week</p>
                </div>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', minHeight: 280 }}>
              <iframe src={MAPS_EMBED} width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${BUSINESS_NAME} Location`} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.white, borderTop: '1px solid #ebebeb', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <img src="/logo.png" alt={BUSINESS_NAME} style={{ height: 144, width: 'auto', objectFit: 'contain' }} />
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Areas', href: '#areas' },
              { label: 'Contact', href: '#contact' },
              { label: 'More Offices', href: '/bloomfield' },
            ].map((item, i) => (
              <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: '#ddd', fontSize: 10 }}>&bull;</span>}
                <a href={item.href} style={{ textDecoration: 'none', color: C.secondary, fontSize: 14, fontWeight: 500 }}>{item.label}</a>
              </span>
            ))}
          </nav>
          <p style={{ fontSize: 14, color: C.secondary, textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
            {ADDRESS_LINE1}, {ADDRESS_LINE2} &bull; <a href={PHONE_HREF} style={{ color: C.secondary, textDecoration: 'none' }}>{PHONE}</a>
          </p>
          <p style={{ fontSize: 13, color: '#b0b0b0', margin: 0 }}>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </footer>

      {/* ═══ RESPONSIVE STYLES ══════════════════════════════════════════════ */}
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        div::-webkit-scrollbar { display: none; }
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        .mobile-cta-bar { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-cta-bar { display: block !important; }
        }
      `}</style>
    </div>
  )
}
