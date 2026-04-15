import React from 'react'
import Link from 'next/link'

export const BIZ_NAME = 'Provail Restoration of Bloomfield'
export const FOOTER_BRAND = 'Provail Restoration of Bloomfield'
export const PHONE = '(248) 531-8404'
export const PHONE_HREF = 'tel:+12485318404'
export const SMS_HREF = 'sms:+12485318404'
export const ADDRESS_LINE1 = '4060 W Maple Rd'
export const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function SmsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
      <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
      }}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center no-underline">
          <img
            src="/logo.png"
            alt="Provail Restoration of Bloomfield"
            style={{ height: 60, width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Home', href: '/' },
            { label: 'Water Damage', href: '/water-damage-restoration' },
            { label: 'Basement Flood', href: '/services/basement-flood-cleanup' },
            { label: 'Frozen Pipes', href: '/services/frozen-pipe-repair' },
            { label: 'Bloomfield', href: '/bloomfield' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c] transition-colors duration-150 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c] transition-colors duration-150 no-underline"
        >
          <PhoneIcon />
          <span className="font-semibold text-[15px]">{PHONE}</span>
        </a>
      </div>

      <div
        className="lg:hidden flex items-center justify-center gap-3 py-2.5"
        style={{ backgroundColor: '#ff385c' }}
      >
        <a
          href={PHONE_HREF}
          className="text-white font-semibold text-sm flex items-center gap-1.5 no-underline hover:text-white"
        >
          <PhoneIcon className="text-white" />
          Call {PHONE}
        </a>
        <span className="text-white/40">|</span>
        <a
          href={SMS_HREF}
          className="text-white font-semibold text-sm no-underline hover:text-white flex items-center gap-1.5"
        >
          <SmsIcon />
          Text Us
        </a>
      </div>
    </header>
  )
}

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href={PHONE_HREF}
        className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black transition-colors duration-150"
        style={{
          backgroundColor: '#222222',
          borderRadius: '8px',
          padding: '0 28px',
          height: '52px',
        }}
      >
        <PhoneIcon className="text-white" />
        Call Now: {PHONE}
      </a>
      <a
        href={SMS_HREF}
        className="inline-flex items-center justify-center gap-2 text-[#222222] font-semibold text-base no-underline transition-colors duration-150"
        style={{
          borderRadius: '8px',
          padding: '0 28px',
          height: '52px',
          border: '2px solid #222222',
          backgroundColor: 'transparent',
        }}
      >
        <SmsIcon />
        Text Us
      </a>
    </div>
  )
}

const FOOTER_SERVICES: { label: string; href: string }[] = [
  { label: 'Water Damage Restoration', href: '/water-damage-restoration' },
  { label: 'Fire Damage Restoration', href: '/fire-damage-restoration' },
  { label: 'Storm Damage Restoration', href: '/storm-damage-restoration' },
  { label: 'Mold Remediation', href: '/mold-remediation' },
  { label: 'Sewage Cleanup', href: '/sewage-cleanup' },
  { label: 'Reconstruction', href: '/reconstruction-services' },
  { label: 'Commercial Restoration', href: '/commercial-restoration' },
  { label: 'Insurance Claims Help', href: '/insurance-claims-help' },
  { label: 'Basement Flood Cleanup', href: '/services/basement-flood-cleanup' },
  { label: 'Frozen Pipe Repair', href: '/services/frozen-pipe-repair' },
  { label: 'Sump Pump Failure', href: '/services/sump-pump-failure' },
  { label: 'Ice Dam Removal', href: '/services/ice-dam-removal' },
  { label: 'Smoke Odor Removal', href: '/services/smoke-odor-removal' },
  { label: 'Soot Cleanup', href: '/services/soot-cleanup' },
]

const FOOTER_LOCATIONS: { label: string; href: string }[] = [
  { label: 'Bloomfield', href: '/bloomfield' },
  { label: 'Macomb Township', href: '/macomb-township-mi-water-damage-restoration-near-you' },
]

export function SiteFooter() {
  return (
    <footer className="bg-white" style={{ padding: '48px 0 40px' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <img
            src="/logo.png"
            alt={FOOTER_BRAND}
            style={{ height: 48, width: 'auto', objectFit: 'contain' }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 text-left">
          <div>
            <h3 className="text-[#222222] font-semibold text-[14px] uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6a6a6a] text-[14px] hover:text-[#ff385c] transition-colors duration-150 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#222222] font-semibold text-[14px] uppercase tracking-wide mb-4">
              Locations
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {FOOTER_LOCATIONS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6a6a6a] text-[14px] hover:text-[#ff385c] transition-colors duration-150 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#222222] font-semibold text-[14px] uppercase tracking-wide mb-4">
              Contact
            </h3>
            <address className="not-italic text-[#6a6a6a] text-[14px] space-y-2">
              <div>{ADDRESS_LINE1}</div>
              <div>{ADDRESS_LINE2}</div>
              <div>
                <a
                  href={PHONE_HREF}
                  className="text-[#ff385c] font-semibold no-underline hover:text-[#222222] transition-colors duration-150"
                >
                  {PHONE}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="text-center border-t border-[#ebebeb] pt-6">
          <p className="text-[#6a6a6a] text-[13px] m-0">
            &copy; {new Date().getFullYear()} {FOOTER_BRAND}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export function PillarSectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <div
          className="inline-block mb-4 px-4 py-1.5 text-[12px] font-semibold tracking-wide uppercase"
          style={{
            color: '#ff385c',
            backgroundColor: 'rgba(255,56,92,0.08)',
            borderRadius: '999px',
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="text-[#222222] font-bold mb-3"
        style={{
          fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
          letterSpacing: '-0.44px',
        }}
      >
        {title}
      </h2>
      {intro && (
        <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto">{intro}</p>
      )}
    </div>
  )
}
