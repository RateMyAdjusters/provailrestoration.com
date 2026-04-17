'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'

const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'

type NavLink = { label: string; href: string; desc?: string }
type NavColumn = { heading: string; links: NavLink[] }
type NavGroup = { label: string; featured?: NavLink; columns: NavColumn[] }

const SERVICES_GROUP: NavGroup = {
  label: 'Services',
  featured: {
    label: '24/7 Emergency Response',
    href: PHONE_HREF,
    desc: 'Certified IICRC technicians on-site in 60 minutes across Oakland & Macomb County.',
  },
  columns: [
    {
      heading: 'Core Restoration',
      links: [
        { label: 'Water Damage Restoration', href: '/water-damage-restoration', desc: 'Extraction, structural drying, moisture mapping' },
        { label: 'Fire Damage Restoration', href: '/fire-damage-restoration', desc: 'Soot removal, structural repair, deodorization' },
        { label: 'Storm Damage Restoration', href: '/storm-damage-restoration', desc: 'Wind, hail, flood, and tree-impact response' },
        { label: 'Mold Remediation', href: '/mold-remediation', desc: 'Containment, HEPA filtration, clearance testing' },
        { label: 'Sewage Cleanup', href: '/sewage-cleanup', desc: 'Cat-3 biohazard extraction and sanitization' },
        { label: 'Reconstruction', href: '/reconstruction-services', desc: 'Full rebuild from demo to final finish' },
        { label: 'Commercial Restoration', href: '/commercial-restoration', desc: 'Business continuity for offices & retail' },
        { label: 'Insurance Claims Help', href: '/insurance-claims-help', desc: 'We bill your carrier directly' },
      ],
    },
    {
      heading: 'Specialty Services',
      links: [
        { label: 'Basement Flood Cleanup', href: '/services/basement-flood-cleanup' },
        { label: 'Frozen Pipe Repair', href: '/services/frozen-pipe-repair' },
        { label: 'Sump Pump Failure', href: '/services/sump-pump-failure' },
        { label: 'Ice Dam Removal', href: '/services/ice-dam-removal' },
        { label: 'Ceiling Water Damage', href: '/services/ceiling-water-damage-repair' },
        { label: 'Hardwood Floor Water Damage', href: '/services/hardwood-floor-water-damage' },
        { label: 'Appliance Leak Damage', href: '/services/appliance-leak-water-damage' },
        { label: 'Smoke Odor Removal', href: '/services/smoke-odor-removal' },
        { label: 'Soot Cleanup', href: '/services/soot-cleanup' },
        { label: 'Contents Pack-Out & Storage', href: '/services/contents-pack-out-storage' },
      ],
    },
  ],
}

const LOCATIONS_GROUP: NavGroup = {
  label: 'Locations',
  featured: {
    label: 'Headquartered in Bloomfield Township',
    href: '/bloomfield',
    desc: '4060 W Maple Rd — serving Oakland & Macomb County 24/7.',
  },
  columns: [
    {
      heading: 'Oakland County',
      links: [
        { label: 'Bloomfield', href: '/bloomfield' },
        { label: 'Birmingham', href: '/birmingham-mi-water-damage-restoration' },
        { label: 'Troy', href: '/troy-mi-water-damage-restoration' },
        { label: 'Royal Oak', href: '/royal-oak-mi-water-damage-restoration' },
        { label: 'Rochester', href: '/rochester-mi-water-damage-restoration' },
        { label: 'Rochester Hills — Water', href: '/rochester-hills-mi-water-damage-restoration' },
        { label: 'Rochester Hills — Fire', href: '/rochester-hills-mi-fire-damage-restoration' },
        { label: 'Rochester Hills — Mold', href: '/rochester-hills-mi-mold-remediation' },
        { label: 'Rochester Hills — Storm', href: '/rochester-hills-mi-storm-damage-restoration' },
        { label: 'Auburn Hills', href: '/auburn-hills-mi-water-damage-restoration' },
        { label: 'Lake Orion', href: '/lake-orion-mi-water-damage-restoration' },
        { label: 'Oakland Township', href: '/oakland-township-mi-water-damage-restoration' },
      ],
    },
    {
      heading: 'Macomb County',
      links: [
        { label: 'Macomb Township', href: '/macomb-township-mi-water-damage-restoration-near-you' },
        { label: 'Shelby Township', href: '/shelby-township-mi-water-damage-restoration' },
      ],
    },
  ],
}

const BLOG_GROUP: NavGroup = {
  label: 'Blog',
  featured: {
    label: 'Resources & Guides',
    href: '/resources',
    desc: 'Expert guides on insurance claims, storm prep, and emergency response.',
  },
  columns: [
    {
      heading: 'Insurance & Claims',
      links: [
        { label: 'Water Damage Insurance Claim Guide', href: '/resources/water-damage-insurance-claim-guide' },
        { label: 'Document Water Damage for Insurance', href: '/resources/document-water-damage-for-insurance' },
        { label: 'First 24 Hours After Water Damage', href: '/resources/first-24-hours-after-water-damage' },
      ],
    },
    {
      heading: 'Storm & Seasonal',
      links: [
        { label: 'Ann Arbor 88mph Wind Storm Guide', href: '/resources/ann-arbor-88mph-wind-storm-damage-guide' },
        { label: 'Macomb County April 2026 Storm Guide', href: '/resources/macomb-county-april-2026-storm-damage-guide' },
        { label: 'April 2026 Oakland–Macomb Storm Response', href: '/resources/april-2026-oakland-macomb-storm-response' },
        { label: 'Roof Leak After Storm Emergency Guide', href: '/resources/roof-leak-after-storm-emergency-guide' },
        { label: 'Michigan Frozen Pipe Prevention Guide', href: '/resources/michigan-frozen-pipe-prevention-guide' },
      ],
    },
  ],
}

const ABOUT_GROUP: NavGroup = {
  label: 'About',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'Why Choose Us', href: '/why-us', desc: 'Certifications, response time, and guarantees' },
        { label: 'Technology & Equipment', href: '/technology-equipment', desc: 'Commercial-grade drying and monitoring' },
        { label: 'Frequently Asked Questions', href: '/faq', desc: 'Insurance, timelines, and process' },
      ],
    },
  ],
}

const GROUPS: NavGroup[] = [SERVICES_GROUP, LOCATIONS_GROUP, BLOG_GROUP, ABOUT_GROUP]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  const hasFeatured = !!group.featured
  const gridCols = hasFeatured ? 'grid-cols-[1fr_2fr]' : group.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
  const panelWidth = hasFeatured || group.columns.length > 1 ? 'w-[720px]' : 'w-[320px]'

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-[#222222] text-[15px] font-medium px-1 py-2 transition-colors duration-150 hover:text-[#ff385c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c] focus-visible:ring-offset-2 rounded"
      >
        {group.label}
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={group.label}
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'} transition-all duration-200`}
      >
        <div
          className={`${panelWidth} bg-white rounded-xl overflow-hidden`}
          style={{
            boxShadow:
              'rgba(0,0,0,0.04) 0px 0px 0px 1px, rgba(0,0,0,0.12) 0px 16px 40px -12px, rgba(0,0,0,0.08) 0px 4px 12px',
          }}
        >
          <div className={`grid ${gridCols}`}>
            {hasFeatured && (
              <div
                className="p-6 flex flex-col justify-between"
                style={{
                  background:
                    'linear-gradient(160deg, #fff5f7 0%, #fff 60%)',
                  borderRight: '1px solid #f0f0f0',
                }}
              >
                <div>
                  <div
                    className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase mb-3"
                    style={{
                      color: '#ff385c',
                      backgroundColor: 'rgba(255,56,92,0.1)',
                      borderRadius: '999px',
                    }}
                  >
                    Featured
                  </div>
                  <a
                    href={group.featured!.href}
                    role="menuitem"
                    className="block text-[#222222] font-semibold text-[16px] leading-snug mb-2 no-underline hover:text-[#ff385c] transition-colors"
                  >
                    {group.featured!.label}
                  </a>
                  {group.featured!.desc && (
                    <p className="text-[#6a6a6a] text-[13px] leading-relaxed m-0">
                      {group.featured!.desc}
                    </p>
                  )}
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-5 inline-flex items-center gap-2 text-[#ff385c] font-semibold text-[14px] no-underline hover:text-[#222222] transition-colors"
                >
                  <PhoneIcon />
                  {PHONE}
                </a>
              </div>
            )}

            <div className={`p-6 grid ${group.columns.length > 1 ? 'grid-cols-2 gap-6' : 'grid-cols-1'}`}>
              {group.columns.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-[#6a6a6a] font-semibold text-[11px] uppercase tracking-wide mb-3 m-0">
                    {col.heading}
                  </h3>
                  <ul className="list-none p-0 m-0 space-y-0.5">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          role="menuitem"
                          onClick={() => setOpen(false)}
                          className="block px-2 py-1.5 -mx-2 rounded-md no-underline group transition-colors hover:bg-[#f7f7f7] focus:outline-none focus-visible:bg-[#f7f7f7] focus-visible:ring-2 focus-visible:ring-[#ff385c]"
                        >
                          <span className="block text-[#222222] font-medium text-[14px] group-hover:text-[#ff385c] transition-colors">
                            {link.label}
                          </span>
                          {link.desc && (
                            <span className="block text-[#6a6a6a] text-[12px] leading-snug mt-0.5">
                              {link.desc}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileDisclosure({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  return (
    <div className="border-b border-[#ebebeb]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-[#222222] font-semibold text-[17px] focus:outline-none focus-visible:text-[#ff385c]"
      >
        <span>{group.label}</span>
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="pb-4 space-y-4"
      >
        {group.featured && (
          <a
            href={group.featured.href}
            onClick={onNavigate}
            className="block p-3 rounded-lg no-underline"
            style={{ backgroundColor: '#fff5f7' }}
          >
            <span className="block text-[#ff385c] text-[11px] font-semibold uppercase tracking-wide mb-1">Featured</span>
            <span className="block text-[#222222] font-semibold text-[15px]">{group.featured.label}</span>
            {group.featured.desc && (
              <span className="block text-[#6a6a6a] text-[13px] mt-1">{group.featured.desc}</span>
            )}
          </a>
        )}
        {group.columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-[#6a6a6a] font-semibold text-[11px] uppercase tracking-wide mb-2 m-0">
              {col.heading}
            </h3>
            <ul className="list-none p-0 m-0 space-y-0.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="block py-2 text-[#222222] text-[15px] no-underline hover:text-[#ff385c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
      }}
    >
      {/* Utility bar */}
      <div
        className="hidden lg:block"
        style={{ backgroundColor: '#222222', color: '#fff' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-2 text-[12.5px]">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.25)' }}
              aria-hidden="true"
            />
            <span className="font-medium tracking-wide">24/7 Emergency Response · On-Site in 60 Minutes</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#c9c9c9]">IICRC Certified · Licensed &amp; Insured</span>
            <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 text-white font-semibold no-underline hover:text-[#ff385c] transition-colors">
              <PhoneIcon />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4 gap-6">
        <Link href="/" className="flex items-center no-underline shrink-0" aria-label="Provail Restoration of Bloomfield — Home">
          <img
            src="/logo.png"
            alt="Provail Restoration of Bloomfield"
            style={{ height: 180, width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          <Link
            href="/"
            className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c] transition-colors duration-150 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c] focus-visible:ring-offset-2 rounded px-1 py-2"
          >
            Home
          </Link>
          {GROUPS.map((group) => (
            <DesktopDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-white font-semibold text-[14px] no-underline hover:bg-black transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c] focus-visible:ring-offset-2"
            style={{
              backgroundColor: '#ff385c',
              borderRadius: '8px',
              padding: '0 18px',
              height: '44px',
            }}
          >
            <PhoneIcon />
            Call {PHONE}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center text-[#222222] rounded-md p-2 hover:bg-[#f7f7f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c]"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile emergency strip */}
      <div
        className="lg:hidden flex items-center justify-center gap-3 py-2.5"
        style={{ backgroundColor: '#ff385c' }}
      >
        <a
          href={PHONE_HREF}
          className="text-white font-semibold text-sm flex items-center gap-1.5 no-underline hover:text-white"
        >
          <PhoneIcon className="text-white" />
          24/7 Emergency · Call {PHONE}
        </a>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-panel"
            className="absolute top-0 right-0 h-full w-[88%] max-w-[420px] bg-white overflow-y-auto"
            style={{ boxShadow: 'rgba(0,0,0,0.18) -12px 0 40px -12px' }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#ebebeb]">
              <img
                src="/logo.png"
                alt="Provail Restoration of Bloomfield"
                style={{ height: 44, width: 'auto', objectFit: 'contain' }}
              />
              <button
                type="button"
                className="inline-flex items-center justify-center text-[#222222] rounded-md p-2 hover:bg-[#f7f7f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c]"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="px-5">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[#222222] font-semibold text-[17px] border-b border-[#ebebeb] no-underline"
              >
                Home
              </Link>
              {GROUPS.map((group) => (
                <MobileDisclosure key={group.label} group={group} onNavigate={() => setMobileOpen(false)} />
              ))}
            </div>

            <div className="p-5 mt-2">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] no-underline"
                style={{
                  backgroundColor: '#ff385c',
                  borderRadius: '10px',
                  height: '52px',
                }}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
              <p className="text-center text-[#6a6a6a] text-[12.5px] mt-3 m-0">
                24/7 Emergency Response · IICRC Certified
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
