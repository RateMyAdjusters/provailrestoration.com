'use client'

import { useState, useRef } from 'react'

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PHONE = '(586) 207-9091'
const PHONE_HREF = 'tel:+15862079091'
const ADDRESS_LINE1 = '51090 Romeo Plank Rd'
const ADDRESS_LINE2 = 'Macomb, MI 48042'
const BUSINESS_NAME = 'Provail Restoration of Macomb Township'

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const colors = {
  text: '#222222',
  secondary: '#6a6a6a',
  accent: '#ff385c',
  white: '#ffffff',
  bgAlt: '#f7f7f7',
  dark: '#222222',
}
const shadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
const fontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'

// ─── SVG ICON COMPONENTS ─────────────────────────────────────────────────────

function WaterDropIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" fill={color} />
    </svg>
  )
}

function FloodIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 18c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M1 14c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 2v8M8 6l4 4 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MoldIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" fill={color} />
      <circle cx="6" cy="8" r="2" fill={color} opacity="0.7" />
      <circle cx="18" cy="8" r="2" fill={color} opacity="0.7" />
      <circle cx="8" cy="17" r="2.5" fill={color} opacity="0.5" />
      <circle cx="17" cy="16" r="1.5" fill={color} opacity="0.6" />
      <path d="M12 9V4M8 10L5 6M16 10l3-4M9 14.5L5 18M15 14l4 4" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function DryingIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2v4M12 2v6M16 2v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="10" width="18" height="12" rx="3" stroke={color} strokeWidth="2" />
      <path d="M7 15h2M11 15h2M15 15h2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BasementIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10l9-7 9 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" stroke={color} strokeWidth="2" />
      <path d="M5 20h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M3 17c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function SewageIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 5v3M16 5v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="12" cy="14" r="6" stroke={color} strokeWidth="2" />
      <path d="M10 13l1.5 2 3-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StormIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10a4 4 0 0 0-7.46-2A3.5 3.5 0 1 0 7 12h11a3 3 0 0 0 0-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 12l-3 5h4l-3 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EmergencyIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9v4M12 17h.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke={color} strokeWidth="2" />
    </svg>
  )
}

function MoreIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="12" r="2" fill={color} />
      <circle cx="12" cy="12" r="2" fill={color} />
      <circle cx="18" cy="12" r="2" fill={color} />
    </svg>
  )
}

function QuoteIcon({ size = 32, color = colors.accent }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M9.135 5.015c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485zm8 0c-4.028 1.09-6.135 4.2-6.135 8.985h4c0-2.5.5-4 2.5-4.5l-.365-4.485z" />
    </svg>
  )
}

function PhoneIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CertIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="6" stroke={color} strokeWidth="2" />
      <path d="M12 16v6M9 19l3-3 3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function MapPinIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" />
    </svg>
  )
}

function ChevronLeftIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h18M3 6h18M3 18h18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ─── SERVICES DATA ───────────────────────────────────────────────────────────

const services = [
  {
    icon: WaterDropIcon,
    title: 'Water Damage Restoration',
    description: 'Dealing with water damage from a burst pipe, appliance leak, or unexpected flooding? Don\'t let standing water cause even more damage to your home or business. Call your local Macomb Township water damage experts and let us assess the full scope of the problem. We use advanced moisture detection and industrial-grade equipment to restore your property safely and thoroughly.',
  },
  {
    icon: FloodIcon,
    title: 'Flood Cleanup',
    description: 'Floodwater can carry contaminants, weaken structures, and create long-term problems if not handled properly. Our flood cleanup team removes water, sanitizes affected areas, and ensures your property is safe to occupy again. Give us a call and we\'ll get a crew to your location quickly so the recovery process can begin right away.',
  },
  {
    icon: MoldIcon,
    title: 'Mold Remediation',
    description: 'Noticed a musty smell, discoloration on your walls, or visible mold growth? Mold can spread fast and pose serious health risks if left untreated. Call our certified mold remediation specialists to contain the problem and remove it at the source. We test, treat, and clear affected areas so you can breathe easy in your home again.',
  },
  {
    icon: DryingIcon,
    title: 'Structural Drying',
    description: 'Water damage doesn\'t stop at the surface\u2014moisture trapped inside walls, floors, and ceilings can cause warping, rot, and mold if not addressed. Our structural drying specialists use commercial-grade dehumidifiers and air movers to eliminate hidden moisture completely. Call the ' + BUSINESS_NAME + ' team to make sure your property is dried right the first time.',
  },
  {
    icon: BasementIcon,
    title: 'Basement Water Extraction',
    description: 'Is water pooling in your basement after a storm, sump pump failure, or foundation leak? Standing water in your basement can damage your belongings, compromise your foundation, and invite mold growth. Call the ' + BUSINESS_NAME + ' team and let us extract the water and dry out your basement completely.',
  },
  {
    icon: SewageIcon,
    title: 'Sewage Cleanup',
    description: 'Sewage backups are more than just unpleasant\u2014they\'re a serious health hazard that requires professional handling. Don\'t attempt to clean up sewage contamination on your own. Call our trained technicians to safely remove waste, disinfect affected areas, and restore your property to a sanitary condition.',
  },
  {
    icon: StormIcon,
    title: 'Storm Damage Repair',
    description: 'Severe weather can leave your property vulnerable to water intrusion, roof leaks, and structural damage. Our storm damage repair team responds fast to secure your home and begin the restoration process. Give us a call after a storm and we\'ll assess the damage, work with your insurance, and get your property back to its pre-storm condition.',
  },
  {
    icon: EmergencyIcon,
    title: 'Emergency Water Removal',
    description: 'We offer same-day and emergency water removal services to ensure your property is protected quickly and efficiently. Our 24-hour emergency team guarantees round-the-clock availability when disaster strikes. In urgent situations, you can expect us to arrive at your property within hours, not days. Give us a call and our water removal crew will be with you shortly.',
  },
  {
    icon: MoreIcon,
    title: 'More Services',
    description: 'From dehumidification and odor removal to content restoration and insurance claim assistance, we offer a full range of water damage services. Whatever your property has been through, we have the expertise and equipment to make it right. Contact us today and we\'ll put together a restoration plan tailored to your needs.',
  },
]

// ─── TESTIMONIALS DATA ───────────────────────────────────────────────────────

const testimonials = [
  { name: 'Mike D.', text: 'Had a pipe burst in the middle of the night. Called Provail and they were at our Macomb Township home within an hour. Professional crew, explained everything, and had the water out and drying equipment set up before morning. Saved our hardwood floors.' },
  { name: 'Tara P.', text: 'Our basement flooded after a huge rainstorm. Provail Restoration showed up fast, pumped everything out, and set up dryers. They came back every day to check moisture levels. Very professional and responsive team.' },
  { name: 'James K.', text: 'Great experience from start to finish. Water damage from a dishwasher leak spread under our kitchen floor. Provail found moisture we never would have caught, dried everything properly, and worked with our insurance. Highly recommend.' },
  { name: 'Sarah M.', text: 'Called at 2 AM when our water heater burst. They answered immediately and had a crew here in Macomb within 45 minutes. Fast, thorough, and they handled everything with our insurance company. Could not ask for better service.' },
  { name: 'David R.', text: 'Sump pump failed during a storm and our finished basement took on 6 inches of water. Provail had the water extracted same day, set up commercial dryers, and monitored everything for a week. They saved us from a complete gut job.' },
  { name: 'Lisa W.', text: 'Found mold behind our bathroom wall from an old leak. Provail came out, tested the area, contained it, and removed everything safely. They also fixed the source of the moisture. Very knowledgeable team.' },
  { name: 'Dan B.', text: 'We were dealing with a flooded basement and had no idea where to start. They walked us through everything, handled the water extraction and drying, and followed up a week later to make sure there were no issues.' },
  { name: 'Jennifer M.', text: 'Great experience from start to finish. Friendly, on time, and they did exactly what they said they would do.' },
  { name: 'Scott N.', text: 'They saved us after a dishwasher leak ruined our kitchen floor. Professional, fast, and reasonably priced compared to other estimates we got.' },
  { name: 'Patricia G.', text: 'Excellent work. They found mold behind our drywall that two other companies missed. Very knowledgeable and thorough.' },
]

// ─── SERVICE AREAS DATA ──────────────────────────────────────────────────────

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

// ─── MAIN PAGE COMPONENT ────────────────────────────────────────────────────

export default function MacombTownshipPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 360
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div style={{ fontFamily, color: colors.text, margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* ─── HEADER ─────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: colors.white,
          boxShadow: '0 1px 0 rgba(0,0,0,0.08)',
        }}
      >
        {/* Desktop Header */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '8px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt={BUSINESS_NAME}
              style={{
                height: 150,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}
            className="desktop-nav"
          >
            {['Services', 'About', 'Areas', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: colors.text,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {item}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: colors.text,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <PhoneIcon size={16} color={colors.accent} />
              {PHONE}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon color={colors.text} /> : <MenuIcon color={colors.text} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: colors.white,
              borderTop: '1px solid #ebebeb',
              padding: '16px 24px',
            }}
            className="mobile-menu"
          >
            {['Services', 'About', 'Areas', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  textDecoration: 'none',
                  color: colors.text,
                  fontSize: 16,
                  fontWeight: 500,
                  borderBottom: '1px solid #ebebeb',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Mobile CTA Bar */}
        <div
          className="mobile-cta-bar"
          style={{
            display: 'none',
            backgroundColor: colors.accent,
          }}
        >
          <a
            href={PHONE_HREF}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '10px 0',
              color: colors.white,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <PhoneIcon size={16} color={colors.white} />
            Call Now: {PHONE}
          </a>
        </div>
      </header>

      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          backgroundColor: colors.white,
          padding: '80px 24px 64px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Pill Badge */}
          <div
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: 32,
              boxShadow: shadow,
              fontSize: 13,
              fontWeight: 500,
              color: colors.text,
              marginBottom: 32,
              backgroundColor: colors.white,
            }}
          >
            24/7 Emergency Response &bull; Macomb Township
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.44px',
              color: colors.text,
              lineHeight: 1.1,
              margin: '0 0 20px',
            }}
          >
            BEST Water Damage Restoration Near You in Macomb Township
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              fontWeight: 400,
              color: colors.secondary,
              lineHeight: 1.6,
              margin: '0 0 24px',
              maxWidth: 680,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Fast, professional emergency water damage restoration, flood cleanup, and mold remediation.
            Serving Macomb Township, Clinton Township, Shelby Township, and surrounding Macomb County communities.
          </p>

          {/* Address - links to Google Maps */}
          <a
            href={`https://www.google.com/maps/place/${encodeURIComponent(ADDRESS_LINE1 + ', ' + ADDRESS_LINE2)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
              color: colors.text,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: 20,
              backgroundColor: colors.bgAlt,
              transition: 'box-shadow 0.2s, transform 0.2s',
              boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px, rgba(0,0,0,0.14) 0px 8px 20px'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <MapPinIcon size={18} color={colors.accent} />
            <span>{ADDRESS_LINE1}, {ADDRESS_LINE2}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* CTA Button */}
          <div>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 40px',
                backgroundColor: colors.dark,
                color: colors.white,
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <PhoneIcon size={18} color={colors.white} />
              Call Now: {PHONE}
            </a>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 40,
              marginTop: 56,
            }}
          >
            {[
              { icon: <ClockIcon size={24} color={colors.accent} />, label: '<60 Min', sub: 'Response' },
              { icon: <ShieldIcon size={24} color={colors.accent} />, label: '24/7', sub: 'Available' },
              { icon: <CertIcon size={24} color={colors.accent} />, label: 'IICRC', sub: 'Certified' },
              { icon: <StarIcon size={24} color={colors.accent} />, label: '5.0', sub: 'Rating' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                {stat.icon}
                <span style={{ fontSize: 20, fontWeight: 700, color: colors.text }}>{stat.label}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: colors.secondary }}>{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Belfor-style Mouse Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            left: 32,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            zIndex: 50,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: 1,
              height: 80,
              backgroundColor: colors.text,
              opacity: 0.3,
            }}
          />
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            style={{
              animation: 'scrollBounce 2s ease-in-out infinite',
              opacity: 0.4,
            }}
          >
            <rect x="4" y="0" width="16" height="28" rx="8" stroke={colors.text} strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="10" r="2" fill={colors.text}>
              <animate attributeName="cy" values="10;18;10" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}</style>
      </section>

      {/* ─── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services" style={{ backgroundColor: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 12px',
              }}
            >
              {BUSINESS_NAME} Services
            </h2>
            <p style={{ fontSize: 16, fontWeight: 400, color: colors.secondary, margin: 0 }}>
              Honest and Reliable Solutions You Deserve
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {services.map((service, i) => {
              const IconComponent = service.icon
              const isHovered = hoveredCard === i
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 20,
                    padding: 32,
                    boxShadow: shadow,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      backgroundColor: `${colors.accent}10`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}
                  >
                    <IconComponent size={28} color={colors.accent} />
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: '-0.44px',
                      color: colors.text,
                      margin: '0 0 12px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: colors.secondary,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PROTECTION PLAN ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: colors.white, padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 20px',
                lineHeight: 1.15,
              }}
            >
              Join the {BUSINESS_NAME} Member-Exclusive Home Protection Plan.
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              Being a homeowner means the unexpected is always around the corner. A burst pipe at
              2 AM. A slow leak behind the washing machine you don&apos;t notice for weeks. An ice dam
              that sends water pouring into your attic. Most people only think about water damage
              restoration when it&apos;s already too late. We created something better.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              The {BUSINESS_NAME} Home Protection Plan gives you peace of mind before disaster strikes, and
              priority care if it ever does. As a member, you get an annual home water risk assessment,
              priority scheduling ahead of non-members during emergencies, discounted rates on all
              restoration services, and a dedicated account manager who knows your home and your history.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 32px',
              }}
            >
              It&apos;s not just a service plan. It&apos;s a relationship with a team that&apos;s already
              familiar with your property, so when something goes wrong, we can respond faster and
              smarter. No call centers. No strangers showing up at your door. Just your {BUSINESS_NAME} team,
              ready when you need us.
            </p>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 40px',
                backgroundColor: colors.dark,
                color: colors.white,
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <PhoneIcon size={18} color={colors.white} />
              Call Now: {PHONE}
            </a>
          </div>
          <div
            style={{
              backgroundColor: colors.bgAlt,
              borderRadius: 20,
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: 320,
            }}
          >
            <ShieldIcon size={64} color={colors.accent} />
            <h3
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: colors.text,
                marginTop: 24,
                marginBottom: 12,
                letterSpacing: '-0.44px',
              }}
            >
              Home Protection Plan
            </h3>
            <p style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.6, maxWidth: 320, margin: '0 0 8px' }}>
              Annual water risk assessment
            </p>
            <p style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.6, maxWidth: 320, margin: '0 0 8px' }}>
              Priority emergency scheduling
            </p>
            <p style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.6, maxWidth: 320, margin: '0 0 8px' }}>
              Discounted restoration rates
            </p>
            <p style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
              Dedicated account manager
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ──────────────────────────────────────────────────── */}
      <section id="about" style={{ backgroundColor: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 12px',
              }}
            >
              Why Choose {BUSINESS_NAME}
            </h2>
            <p style={{ fontSize: 16, fontWeight: 400, color: colors.secondary, margin: 0 }}>
              Because Your Home Deserves a Partner, Not Just a Contractor
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 32,
            }}
          >
            {[
              {
                icon: <CertIcon size={32} color={colors.accent} />,
                title: 'Certified Technicians',
                description:
                  'Our team is IICRC-certified and undergoes continuous training to stay current with the latest restoration techniques and safety standards. When we walk into your home, you can trust that you\'re getting knowledgeable, qualified professionals who know exactly what they\'re doing.',
              },
              {
                icon: <MapPinIcon size={32} color={colors.accent} />,
                title: 'Macomb Township Experts',
                description:
                  'We\'re not a national franchise dispatching crews from who-knows-where. We\'re local to Macomb Township and deeply familiar with the homes, building styles, and common water damage risks in this area. That local knowledge means faster diagnosis, better solutions, and a team that genuinely cares about your community.',
              },
              {
                icon: <ShieldIcon size={32} color={colors.accent} />,
                title: 'Insurance Assistance',
                description:
                  'Filing an insurance claim after water damage can feel overwhelming. We work directly with your insurance company to document the damage, provide detailed estimates, and streamline the claims process. Our goal is to take as much stress off your plate as possible so you can focus on getting back to normal.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 20,
                  padding: 40,
                  boxShadow: shadow,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: `${colors.accent}10`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-0.44px',
                    color: colors.text,
                    margin: '0 0 12px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: colors.secondary, lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RAPID RESPONSE ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: colors.white, padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: colors.bgAlt,
              borderRadius: 20,
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: 320,
            }}
          >
            <ClockIcon size={64} color={colors.accent} />
            <h3
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: colors.text,
                marginTop: 20,
                marginBottom: 8,
                letterSpacing: '-0.44px',
              }}
            >
              &lt;60 min
            </h3>
            <p style={{ fontSize: 16, color: colors.secondary, margin: 0 }}>
              Average response time
            </p>
          </div>
          <div>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 20px',
                lineHeight: 1.15,
              }}
            >
              Rest Easy With the Power of Our 60-Minute Rapid Response Guarantee!
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              When water damage strikes, every minute counts. The longer water sits, the more damage
              it does&mdash;to your floors, your walls, your belongings, and your peace of mind. That&apos;s why
              we built our entire operation around speed without sacrificing quality.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              Our 60-Minute Rapid Response Guarantee means that when you call, we move. Fast. Our
              local Macomb Township crews are strategically positioned so we can reach your property quickly,
              assess the situation, and start extracting water and preventing further damage right away.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: colors.secondary,
                lineHeight: 1.7,
                margin: '0 0 32px',
              }}
            >
              No waiting around for hours wondering when help is coming. No generic call centers
              putting you on hold. Just real, local technicians ready to protect your home when you
              need them most.
            </p>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 40px',
                backgroundColor: colors.dark,
                color: colors.white,
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <PhoneIcon size={18} color={colors.white} />
              Call Now: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: colors.bgAlt, padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 12px',
              }}
            >
              What Our Happy Clients Are Saying
            </h2>
          </div>

          {/* Carousel Controls */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => scrollCarousel('left')}
              style={{
                position: 'absolute',
                left: -12,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: colors.white,
                border: '1px solid #ebebeb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon size={20} color={colors.text} />
            </button>

            <button
              onClick={() => scrollCarousel('right')}
              style={{
                position: 'absolute',
                right: -12,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: colors.white,
                border: '1px solid #ebebeb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Scroll right"
            >
              <ChevronRightIcon size={20} color={colors.text} />
            </button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              style={{
                display: 'flex',
                gap: 20,
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                paddingBottom: 8,
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {testimonials.map((testimonial, i) => {
                const isHovered = hoveredTestimonial === i
                const initials = testimonial.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredTestimonial(i)}
                    onMouseLeave={() => setHoveredTestimonial(null)}
                    style={{
                      flex: '0 0 340px',
                      scrollSnapAlign: 'start',
                      backgroundColor: colors.white,
                      borderRadius: 20,
                      padding: 32,
                      boxShadow: shadow,
                      transition: 'transform 0.25s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                  >
                    <QuoteIcon size={28} color={colors.accent} />
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: colors.secondary,
                        lineHeight: 1.7,
                        margin: '16px 0 24px',
                      }}
                    >
                      {testimonial.text}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: `${colors.accent}14`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 600,
                          color: colors.accent,
                        }}
                      >
                        {initials}
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: colors.text, margin: 0 }}>
                          {testimonial.name}
                        </p>
                        <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                          {[1, 2, 3, 4, 5].map((s) => (
                            <StarIcon key={s} size={12} color={colors.accent} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ──────────────────────────────────────────────────── */}
      <section id="areas" style={{ backgroundColor: colors.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: 0,
              }}
            >
              Areas We Serve
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {serviceAreas.map((area, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 20px',
                  backgroundColor: colors.bgAlt,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  color: colors.text,
                }}
              >
                <MapPinIcon size={18} color={colors.accent} />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HELPFUL RESOURCES ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.44px',
                color: colors.text,
                margin: '0 0 12px',
              }}
            >
              Helpful Resources in Macomb Township, MI
            </h2>
            <p style={{ fontSize: 16, fontWeight: 400, color: colors.secondary, margin: 0 }}>
              If you are dealing with water damage in Macomb Township, these local resources can help you navigate permits, codes, and emergency services.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                name: 'Macomb Township Building Department',
                address: '54111 Broughton Rd',
                city: 'Macomb Township, MI 48042',
                phone: '(586) 992-0710',
                desc: 'This department handles building permits, inspections, and code compliance for water damage restoration projects that involve structural repairs.',
              },
              {
                name: 'Macomb Township Fire Department',
                address: '54111 Broughton Rd',
                city: 'Macomb Township, MI 48042',
                phone: '(586) 992-7830',
                desc: 'The Fire Department can assist with emergency water shutoffs, fire safety inspections, and code compliance for restoration projects.',
              },
              {
                name: 'Macomb County Health Department',
                address: '43525 Elizabeth Rd',
                city: 'Mount Clemens, MI 48043',
                phone: '(586) 469-5235',
                desc: 'The Health Department provides guidance on mold remediation standards, sewage cleanup protocols, and environmental health concerns related to water damage.',
              },
            ].map((resource, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: shadow,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: '-0.44px',
                    color: colors.text,
                    margin: '0 0 16px',
                  }}
                >
                  {resource.name}
                </h3>
                <p style={{ fontSize: 14, color: colors.secondary, margin: '0 0 4px', lineHeight: 1.6 }}>
                  {resource.address}
                </p>
                <p style={{ fontSize: 14, color: colors.secondary, margin: '0 0 12px', lineHeight: 1.6 }}>
                  {resource.city}
                </p>
                <a
                  href={`tel:${resource.phone.replace(/[^\d+]/g, '')}`}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: colors.text,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: 16,
                  }}
                >
                  {resource.phone}
                </a>
                <p style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.7, margin: 0 }}>
                  {resource.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" style={{ backgroundColor: colors.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.44px',
              color: colors.white,
              margin: '0 0 48px',
              textAlign: 'center',
            }}
          >
            Contact {BUSINESS_NAME}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: 48,
            }}
          >
            {/* Contact Info */}
            <div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.white,
                  margin: '0 0 24px',
                  letterSpacing: '-0.44px',
                }}
              >
                {BUSINESS_NAME}
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <MapPinIcon size={20} color={colors.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>
                    Address
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>
                    {ADDRESS_LINE1}<br />
                    {ADDRESS_LINE2}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}>
                <PhoneIcon size={20} color={colors.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>
                    Phone
                  </p>
                  <a
                    href={PHONE_HREF}
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                    }}
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <ClockIcon size={20} color={colors.accent} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>
                    Hours
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                    24 Hours a Day, 7 Days a Week
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                minHeight: 280,
              }}
            >
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE1 + ', ' + ADDRESS_LINE2)}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${BUSINESS_NAME} Location`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: colors.white, borderTop: '1px solid #ebebeb', padding: '40px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt={BUSINESS_NAME}
            style={{
              height: 48,
              width: 'auto',
              objectFit: 'contain',
            }}
          />

          {/* Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Areas', href: '#areas' },
              { label: 'Contact', href: '#contact' },
              { label: 'More Offices', href: '/bloomfield' },
            ].map((item, i) => (
              <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: '#ddd', fontSize: 10 }}>&bull;</span>}
                <a
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: colors.secondary,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </a>
              </span>
            ))}
          </nav>

          {/* NAP */}
          <p
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: colors.secondary,
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {ADDRESS_LINE1}, {ADDRESS_LINE2} &bull;{' '}
            <a href={PHONE_HREF} style={{ color: colors.secondary, textDecoration: 'none' }}>
              {PHONE}
            </a>
          </p>

          {/* Copyright */}
          <p style={{ fontSize: 13, color: '#b0b0b0', margin: 0 }}>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── RESPONSIVE STYLES ──────────────────────────────────────────────── */}
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }

        /* Hide scrollbar on carousel */
        div::-webkit-scrollbar { display: none; }

        /* Desktop nav visible, mobile hidden by default */
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
