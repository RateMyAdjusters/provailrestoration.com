'use client'

const BIZ_NAME = 'PROVAIL Water Damage Restoration (Bloomfield)'
const PHONE = '(248) 531-8404'
const PHONE_HREF = 'tel:+12485318404'
const SMS_HREF = 'sms:+12485318404'
const ADDRESS_LINE1 = '4060 W Maple Rd'
const ADDRESS_LINE2 = 'Bloomfield Township, MI 48301'

/* ── Service card data ── */
const services = [
  {
    title: 'Residential Water Damage Restoration',
    desc: 'From frozen pipe ruptures during a January cold snap in Bloomfield Hills to dishwasher supply-line failures in Birmingham kitchens, our IICRC-certified Michigan crews respond around the clock. We map every wet pocket with thermal imaging and penetrating moisture meters, extract standing water with truck-mounted units, and rebuild what cannot be salvaged so your home looks like the loss never happened.',
  },
  {
    title: 'Flood & Storm Cleanup',
    desc: 'Southeast Michigan storms regularly overwhelm sump pumps and saturate window wells across Oakland County. We dispatch flood crews directly from our Bloomfield Township shop to pump out floodwater, decontaminate Category 2 and Category 3 losses to IICRC S500 standards, and dry your structure before secondary damage takes hold.',
  },
  {
    title: 'Mold Inspection & Remediation',
    desc: 'Hidden mold often blooms behind baseboards weeks after a leak is "fixed." Our remediation technicians follow IICRC S520 containment protocols, build negative-air chambers, HEPA-filter the work zone, and remove contaminated materials safely. We test before, during, and after so Michigan families can move back in with confidence.',
  },
  {
    title: 'Structural Drying & Dehumidification',
    desc: 'Surface water is the easy part. Real damage hides inside wall cavities, hardwood subfloors, and wood-framed crawl spaces. We deploy LGR dehumidifiers and high-velocity air movers, then monitor moisture content daily until every assembly returns to dry standard, preventing warping, delamination, and microbial growth across your Michigan home.',
  },
  {
    title: 'Basement Water Extraction',
    desc: 'Finished basements are a Bloomfield staple, and they are also the first room hit when a sump fails or groundwater rises. We extract water from carpet, pad, and concrete, dispose of unsalvageable materials per Michigan regulations, and disinfect every surface so your lower level is safe, dry, and ready to refinish.',
  },
  {
    title: 'Sewage & Biohazard Cleanup',
    desc: 'Sanitary backups from clogged county lines or failed ejector pumps create Category 3 "black water" losses that demand PPE, biocides, and proper disposal. Our trained technicians remove contaminated porous materials, sanitize structural surfaces with hospital-grade antimicrobials, and restore your property to a verifiably clean condition.',
  },
  {
    title: 'Storm & Wind Damage Repair',
    desc: 'When derecho winds rip shingles off Birmingham roofs or fallen oaks puncture Bloomfield Village ceilings, our crews tarp, board, and stabilize within the same call. We then dry the interior, document every loss item with photo logs your insurance company expects, and coordinate full reconstruction.',
  },
  {
    title: '24/7 Emergency Water Removal',
    desc: 'Water damage does not wait for business hours, and neither do we. Our Bloomfield Township dispatch is staffed 24/7/365, with a documented goal of arriving at your Oakland County property within 60 minutes of your call. Faster response equals lower repair costs and fewer total-loss materials.',
  },
  {
    title: 'Reconstruction & Repairs',
    desc: 'Drywall, flooring, cabinetry, paint, and trim — we put your home back together after the dry-out is complete. One licensed Michigan contractor handles mitigation and rebuild, so you do not have to chase three subs and reconcile two estimates.',
  },
]

/* ── Testimonials ── */
const testimonials = [
  { name: 'Mike Kowalski', text: 'Our basement flooded after a pipe burst in the middle of the night. PROVAIL was out within the hour and had everything under control. Can\u2019t say enough good things about this crew.' },
  { name: 'Linda Derkacz', text: 'Very professional and thorough. They handled our water damage quickly and kept us informed the whole time.' },
  { name: 'Tom Hensley', text: 'Fast response, fair pricing, quality work!' },
  { name: 'Karen Oblinger', text: 'We had water coming in from a cracked foundation after the spring thaw. They dried everything out, treated for mold, and even helped us deal with the insurance paperwork. Highly recommend.' },
  { name: 'Dave Stapleton', text: 'Called them on a Saturday when our sump pump failed and the basement was filling up. They came out right away, no extra charge for the weekend. Very honest and hardworking people.' },
  { name: 'Jennifer Makowski', text: 'Great experience from start to finish. Friendly, on time, and they did exactly what they said they would do.' },
  { name: 'Scott & Amy Novak', text: 'They saved us after a dishwasher leak ruined our kitchen floor. Professional, fast, and reasonably priced compared to other estimates we got.' },
  { name: 'Patricia Griggs', text: 'Excellent work. They found mold behind our drywall that two other companies missed. Very knowledgeable and thorough.' },
  { name: 'Rob Jankowski', text: 'Quick, clean, professional. Will absolutely use them again.' },
  { name: 'Dan & Michelle Brecht', text: 'We were dealing with a flooded basement and had no idea where to start. They walked us through everything, handled the water extraction and drying, and followed up a week later to make sure there were no issues.' },
]

/* ── Service areas ── */
const serviceAreas = [
  'Bloomfield Hills', 'Bloomfield Township', 'Bloomfield Village', 'Birmingham',
  'West Bloomfield', 'Troy', 'Farmington Hills', 'Southfield',
  'Royal Oak', 'Beverly Hills', 'Franklin', 'Keego Harbor',
]

/* ── Inline SVG Icon Components ── */

function WaterDropIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C24 4 8 22 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 22 24 4 24 4Z" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M18 33C18 28 24 20 24 20C24 20 30 28 30 33C30 36.31 27.31 39 24 39C20.69 39 18 36.31 18 33Z" fill="#ff385c" fillOpacity="0.15" />
    </svg>
  )
}

function FloodIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 30C10 25 15 30 20 25C25 20 30 25 35 20C40 15 44 20 44 20" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M6 38C10 33 15 38 20 33C25 28 30 33 35 28C40 23 44 28 44 28" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <rect x="15" y="6" width="18" height="16" rx="2" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M12 22L24 6L36 22" stroke="#ff385c" strokeWidth="2.5" fill="none" />
    </svg>
  )
}

function MoldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="14" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="5" fill="#ff385c" fillOpacity="0.15" />
      <path d="M24 10V6M24 42V38M38 24H42M6 24H10M34 14L37 11M11 37L14 34M34 34L37 37M11 11L14 14" stroke="#ff385c" strokeWidth="2.5" />
    </svg>
  )
}

function DryingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="36" height="24" rx="4" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M14 22C14 22 17 17 20 22C23 27 26 22 26 22C26 22 29 17 32 22C35 27 38 22 38 22" stroke="#ff385c" strokeWidth="2" fill="none" />
      <path d="M16 30H32" stroke="#ff385c" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  )
}

function BasementIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 22L24 6L42 22" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <rect x="10" y="22" width="28" height="20" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <line x1="10" y1="32" x2="38" y2="32" stroke="#ff385c" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M14 36C14 36 17 33 20 36C23 39 26 36 26 36C26 36 29 33 32 36" stroke="#ff385c" strokeWidth="2" fill="none" />
    </svg>
  )
}

function SewageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M16 18L24 24L32 18" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M24 24V36" stroke="#ff385c" strokeWidth="2.5" />
      <line x1="12" y1="12" x2="36" y2="36" stroke="#ff385c" strokeWidth="2.5" />
      <line x1="36" y1="12" x2="12" y2="36" stroke="#ff385c" strokeWidth="2.5" />
    </svg>
  )
}

function StormIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C12 17 17 12 24 12C29 12 33 15 35 19C39 19.5 42 22.5 42 26C42 30.5 38.5 34 34 34H14C10 34 7 31 7 27C7 24 9 21 12 24Z" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M24 28L21 34H26L22 42" stroke="#ff385c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EmergencyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="#ff385c" strokeWidth="2.5" fill="none" />
      <path d="M24 12V24L32 32" stroke="#ff385c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2.5" fill="#ff385c" />
      <path d="M8 8L13 13M40 8L35 13" stroke="#ff385c" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="24" r="4" fill="#ff385c" />
      <circle cx="24" cy="24" r="4" fill="#ff385c" />
      <circle cx="34" cy="24" r="4" fill="#ff385c" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 16H10L7 23H12L16 16V5H5V16ZM17 16H22L19 23H24L28 16V5H17V16Z" fill="#ff385c" />
    </svg>
  )
}

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

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function CertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

const serviceIcons = [
  <WaterDropIcon key="0" />,
  <FloodIcon key="1" />,
  <MoldIcon key="2" />,
  <DryingIcon key="3" />,
  <BasementIcon key="4" />,
  <SewageIcon key="5" />,
  <StormIcon key="6" />,
  <EmergencyIcon key="7" />,
  <MoreIcon key="8" />,
]

export default function Home() {
  return (
    <>
      {/* ================================================================
          1. HEADER - White sticky, Airbnb style
          ================================================================ */}
      <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center no-underline">
            <img
              src="/logo.png"
              alt="PROVAIL Water Damage Restoration Bloomfield"
              style={{
                height: 60,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#why-choose' },
              { label: 'Protection Plan', href: '#protection-plan' },
              { label: 'Areas', href: '#areas' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#222222] text-[15px] font-medium hover:text-[#ff385c] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone - right side */}
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-[#222222] hover:text-[#ff385c] transition-colors duration-150"
          >
            <PhoneIcon />
            <span className="font-semibold text-[15px]">{PHONE}</span>
          </a>
        </div>

        {/* Mobile CTA bar */}
        <div className="lg:hidden flex items-center justify-center gap-3 py-2.5" style={{ backgroundColor: '#ff385c' }}>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm flex items-center gap-1.5 no-underline hover:text-white">
            <PhoneIcon className="text-white" />
            Call {PHONE}
          </a>
          <span className="text-white/40">|</span>
          <a href={SMS_HREF} className="text-white font-semibold text-sm no-underline hover:text-white flex items-center gap-1.5">
            <SmsIcon />
            Text Us
          </a>
        </div>
      </header>

      <main>
        {/* ================================================================
            2. HERO - White/light bg, Airbnb clean style
            ================================================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            {/* Pill-shaped status bar */}
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: '32px',
                  boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Emergency Service
                </span>
                <span className="text-[#c1c1c1]">|</span>
                <span>24/7</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Licensed &amp; Insured</span>
              </div>
            </div>

            {/* Main heading */}
            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[820px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Michigan&apos;s 60-minute water damage restoration team.
            </h1>

            {/* Subtext */}
            <p className="text-[#6a6a6a] text-lg font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
              IICRC-certified water removal, mold remediation, sewage cleanup, and full reconstruction for homes and businesses across Bloomfield Township, Bloomfield Hills, Birmingham, and the greater Oakland County area. Licensed, insured, and direct-billing most major Michigan carriers.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
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

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto">
              {[
                { icon: <ClockIcon />, label: '<60 Min Response' },
                { icon: <ShieldIcon />, label: '24/7 Available' },
                { icon: <CertIcon />, label: 'IICRC Certified' },
                { icon: <StarIcon />, label: '5.0 Rating' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2">
                  <div className="text-[#ff385c]">{stat.icon}</div>
                  <span className="text-[#222222] text-[14px] font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            2b. INTRO LONG-FORM - SEO body content
            ================================================================ */}
        <section className="bg-white" style={{ padding: '0 0 72px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <h2 className="text-[#222222] font-bold mb-5" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', letterSpacing: '-0.44px' }}>
              The Michigan property owner&apos;s first call after a water loss
            </h2>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              PROVAIL Water Damage Restoration Bloomfield is a locally owned, IICRC-certified mitigation and reconstruction firm headquartered at 4060 W Maple Rd in Bloomfield Township, Michigan. We exist for one reason: to make a flooded home or a soaked office look, smell, and feel exactly the way it did before disaster struck — fast, documented, and without the runaround that gives this industry a bad name.
            </p>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              Southeast Michigan is a tough environment for buildings. Lake-effect humidity rolls in off the Great Lakes, January temperatures crater into the single digits, spring thaw saturates Oakland County clay, and summer thunderstorms regularly drop two inches of rain in under an hour. Every one of those conditions can put water somewhere it does not belong: behind a refrigerator water line, inside a finished basement, under a hardwood floor, or down a chimney chase. When that happens at 2 a.m. on a Sunday, you need a crew that is awake, equipped, and within driving distance of your zip code. That is the entire job description we wrote for ourselves.
            </p>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              Our service area covers Bloomfield Hills, Bloomfield Township, Bloomfield Village, Birmingham, Beverly Hills, Franklin, Keego Harbor, West Bloomfield, Orchard Lake, Sylvan Lake, Pontiac, Auburn Hills, Rochester, Rochester Hills, Troy, Clawson, Royal Oak, Berkley, Huntington Woods, Oak Park, Ferndale, Pleasant Ridge, Southfield, Lathrup Village, Farmington, Farmington Hills, Novi, Northville, Walled Lake, Wixom, Commerce Township, Waterford, White Lake, Independence Township, and Clarkston. If you are anywhere in Oakland County or northern Wayne and Macomb Counties, we can typically be at your front door inside 60 minutes from the time you hang up the phone.
            </p>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              Every technician on our payroll holds current IICRC credentials in Water Damage Restoration (WRT), Applied Structural Drying (ASD), or Applied Microbial Remediation (AMRT). We follow the IICRC S500 standard for water damage and the IICRC S520 standard for mold remediation — not because a marketing brochure says so, but because those documents represent the actual consensus of the restoration industry on how to do this work without making things worse. Our trucks carry truck-mounted extractors, LGR (low-grain refrigerant) dehumidifiers, axial and centrifugal air movers, HEPA air scrubbers, thermal imaging cameras, and pin and pinless moisture meters. We document moisture readings every visit, on every affected assembly, and we leave that log with your insurance adjuster.
            </p>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              Speaking of insurance: PROVAIL direct-bills most major carriers writing policies in Michigan, including State Farm, Allstate, Auto-Owners, Hanover, Citizens, Liberty Mutual, Progressive, Travelers, USAA, Farmers, Nationwide, Chubb, Cincinnati, Hartford, AAA, MetLife, and Frankenmuth. We document the loss for your insurance company, work directly with your assigned adjuster, photograph and inventory damaged contents, and submit our scope and Xactimate estimate using the line items and pricing your carrier publishes for the Bloomfield zip code. You sign a work authorization, we coordinate with the people writing the check, and you focus on your family.
            </p>
            <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
              Beyond emergency mitigation, PROVAIL offers full reconstruction under one roof. Once the structure is dry, the same project manager who handled your dry-out walks the rebuild scope with you: drywall, insulation, hardwood and tile flooring, cabinetry, trim, paint, and finish carpentry. Single point of contact, single contract, single warranty. No subcontractor finger-pointing when the new baseboard meets the new floor.
            </p>
          </div>
        </section>

        {/* ================================================================
            3. SERVICES - 3x3 grid of service cards
            ================================================================ */}
        <section id="services" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            {/* Section heading */}
            <div className="text-center mb-12">
              <h2
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
              >
                Our Michigan Restoration Services
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto">
                A complete water damage, mold, sewage, and reconstruction lineup for homes and commercial buildings across Oakland County and Southeast Michigan.
              </p>
            </div>

            {/* 3x3 card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-white p-8 cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                    transition: 'box-shadow 250ms cubic-bezier(0.25,0.1,0.25,1), transform 250ms cubic-bezier(0.25,0.1,0.25,1)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px, rgba(0,0,0,0.14) 0px 8px 20px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
                  }}
                >
                  <div className="mb-5">{serviceIcons[i]}</div>
                  <h3 className="text-[#222222] text-lg font-semibold mb-3" style={{ letterSpacing: '-0.44px' }}>
                    {s.title}
                  </h3>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.6] m-0">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            4. PROTECTION PLAN - 2-col: text left, image right
            ================================================================ */}
        <section id="protection-plan" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text left */}
              <div>
                <h2
                  className="text-[#222222] font-bold mb-4"
                  style={{ fontSize: 'clamp(1.625rem, 4vw, 2.25rem)', letterSpacing: '-0.44px', lineHeight: '1.2' }}
                >
                  Join the PROVAIL Member-Exclusive Home Protection Plan.
                </h2>
                <h3 className="text-[#222222] text-xl font-semibold mb-6">
                  Keep your home safe from hidden water damage all year long.
                </h3>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-4">
                  For one low annual fee, our certified technicians perform a comprehensive moisture inspection
                  of your home&apos;s most vulnerable areas &mdash; catching small problems before they become costly disasters.
                  Members enjoy <strong className="text-[#222222]">priority emergency scheduling</strong>, <strong className="text-[#222222]">waived service call fees</strong>,
                  and <strong className="text-[#222222]">exclusive discounts</strong> on all restoration services.
                </p>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-8">
                  Because at PROVAIL, our members aren&apos;t just customers &mdash; <strong className="text-[#222222]">they&apos;re our priority.</strong>
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black transition-colors duration-150"
                  style={{
                    backgroundColor: '#222222',
                    borderRadius: '8px',
                    padding: '0 28px',
                    height: '48px',
                  }}
                >
                  Enroll in the Protection Plan
                </a>
              </div>

              {/* Image placeholder right */}
              <div
                className="flex items-center justify-center min-h-[400px]"
                style={{ borderRadius: '20px', backgroundColor: '#f2f2f2' }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                    style={{ borderRadius: '50%', backgroundColor: 'rgba(255,56,92,0.08)' }}
                  >
                    <ShieldIcon />
                  </div>
                  <p className="text-[#6a6a6a] text-sm m-0">Protection Plan Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            5. WHY CHOOSE US - 3 columns, #f7f7f7 bg
            ================================================================ */}
        <section id="why-choose" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
              >
                Why Choose PROVAIL
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[500px] mx-auto">
                Because your home deserves a partner, not just a contractor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Block 1: Certified Technicians */}
              <div>
                <div
                  className="flex items-center justify-center mb-6"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#f2f2f2',
                    minHeight: '200px',
                  }}
                >
                  <div className="text-center p-6">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ff385c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-[#6a6a6a] text-sm m-0">Image Coming Soon</p>
                  </div>
                </div>
                <h3 className="text-[#222222] text-xl font-semibold mb-3" style={{ letterSpacing: '-0.18px' }}>
                  IICRC-Certified Michigan Crews
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  Every PROVAIL technician carries current IICRC credentials in Water Restoration, Applied Structural Drying, or Microbial Remediation. We follow the published S500 and S520 industry standards on every job, so your home is dried right the first time and the documentation holds up under any adjuster review.
                </p>
              </div>

              {/* Block 2: Local Bloomfield Experts */}
              <div>
                <div
                  className="flex items-center justify-center mb-6"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#f2f2f2',
                    minHeight: '200px',
                  }}
                >
                  <div className="text-center p-6">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="#ff385c" className="mx-auto mb-2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p className="text-[#6a6a6a] text-sm m-0">Image Coming Soon</p>
                  </div>
                </div>
                <h3 className="text-[#222222] text-xl font-semibold mb-3" style={{ letterSpacing: '-0.18px' }}>
                  Locally Owned in Bloomfield Township
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  We are headquartered on West Maple Road, not in a corporate call center two states away. Our owners answer the phone, our trucks live in Oakland County, and our crews know the difference between a Bloomfield Hills mid-century basement and a Birmingham bungalow crawl space.
                </p>
              </div>

              {/* Block 3: Insurance Assistance */}
              <div>
                <div
                  className="flex items-center justify-center mb-6"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#f2f2f2',
                    minHeight: '200px',
                  }}
                >
                  <div className="text-center p-6">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ff385c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p className="text-[#6a6a6a] text-sm m-0">Image Coming Soon</p>
                  </div>
                </div>
                <h3 className="text-[#222222] text-xl font-semibold mb-3" style={{ letterSpacing: '-0.18px' }}>
                  Direct-Bill Insurance Documentation
                </h3>
                <p className="text-[#6a6a6a] text-[15px] leading-relaxed m-0">
                  We document every wet material, every moisture reading, and every line item so your insurance company has a complete file. We work directly with your assigned adjuster and direct-bill most major Michigan carriers, so you never write a check up front for the covered portion of your loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            6. RAPID RESPONSE - 2-col, circle image left, text right
            ================================================================ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-center">
              {/* Circle image left */}
              <div className="flex justify-center">
                <div
                  className="w-[180px] h-[180px] flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '50%', backgroundColor: '#f2f2f2' }}
                >
                  <div className="text-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ff385c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p className="text-[#6a6a6a] text-[11px] mt-2 m-0">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Text right */}
              <div>
                <h2
                  className="text-[#222222] font-bold mb-5"
                  style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                    letterSpacing: '-0.44px',
                    lineHeight: '1.2',
                  }}
                >
                  Rest Easy With the Power of Our 60-Minute Rapid Response Guarantee!
                </h2>
                <p className="text-[#6a6a6a] text-base leading-relaxed mb-6">
                  When water damage strikes, every minute counts. Our <strong className="text-[#222222]">Rapid Response Guarantee</strong> means
                  a certified restoration crew is at your door within 60 minutes &mdash; equipped with commercial-grade
                  extraction, drying, and monitoring technology to stop the damage in its tracks and protect what matters most.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base no-underline hover:bg-black transition-colors duration-150"
                  style={{
                    backgroundColor: '#222222',
                    borderRadius: '8px',
                    padding: '0 28px',
                    height: '48px',
                  }}
                >
                  <PhoneIcon className="text-white" />
                  Call Now: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            7. TESTIMONIALS - Horizontal scroll carousel
            ================================================================ */}
        <section className="bg-white" style={{ padding: '80px 0 64px' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
              >
                What Our Clients Are Saying
              </h2>
              <p className="text-[#6a6a6a] text-lg">Real reviews from real homeowners in Bloomfield.</p>
            </div>
          </div>

          {/* Carousel - full bleed with padding */}
          <div
            className="flex gap-6 overflow-x-auto pb-8 px-6"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-shrink-0 bg-white p-8"
                style={{
                  width: 'min(85vw, 380px)',
                  scrollSnapAlign: 'start',
                  borderRadius: '20px',
                  boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  transition: 'box-shadow 250ms cubic-bezier(0.25,0.1,0.25,1), transform 250ms cubic-bezier(0.25,0.1,0.25,1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px, rgba(0,0,0,0.14) 0px 8px 20px'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
                }}
              >
                <div className="mb-4">
                  <QuoteIcon />
                </div>
                <p className="text-[#222222] text-[15px] leading-[1.65] font-normal mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 flex items-center justify-center text-[#ff385c] font-semibold text-sm"
                    style={{ borderRadius: '50%', backgroundColor: 'rgba(255,56,92,0.08)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#222222] text-[15px] font-semibold m-0 leading-tight">{t.name}</p>
                    <p className="text-[#6a6a6a] text-[13px] m-0 leading-tight mt-0.5">Bloomfield Homeowner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================
            8. SERVICE AREAS - #f7f7f7 bg, 4-col grid of pills
            ================================================================ */}
        <section id="areas" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-[#222222] font-bold mb-3"
                style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
              >
                Areas We Serve
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[520px] mx-auto">
                Proudly serving Oakland County and surrounding communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white text-center text-[#222222] font-medium text-[15px] flex items-center justify-center gap-2 py-4 px-5"
                  style={{
                    borderRadius: '20px',
                    boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  }}
                >
                  <MapPinIcon />
                  {area}, MI
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            8b. PROCESS - 5 step
            ================================================================ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Our 5-Step Restoration Process
              </h2>
              <p className="text-[#6a6a6a] text-lg max-w-[640px] mx-auto">
                The same documented workflow on every Michigan loss, residential or commercial.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { n: '01', t: 'Emergency Call & Dispatch', d: 'Call (248) 531-8404 anytime, day or night. A live PROVAIL team member gathers your address, the source of the water, and any safety hazards, then dispatches the closest crew to your Michigan property.' },
                { n: '02', t: 'On-Site Inspection', d: 'We arrive within 60 minutes, locate the source, take initial moisture readings with calibrated meters, classify the water (Cat 1, 2, or 3), and walk you through what we found before any work begins.' },
                { n: '03', t: 'Water Extraction & Removal', d: 'Truck-mounted extractors pull standing water from carpet, hardwood, tile, and concrete. We remove unsalvageable porous materials and contain the affected area to prevent cross-contamination.' },
                { n: '04', t: 'Structural Drying & Monitoring', d: 'LGR dehumidifiers and air movers go in. We return daily to log moisture content on every assembly until your structure hits dry standard, typically three to five days.' },
                { n: '05', t: 'Reconstruction & Sign-Off', d: 'Drywall, flooring, paint, trim, and final clean — completed by the same licensed PROVAIL team. We hand you a written warranty and a complete loss file for your records.' },
              ].map((step) => (
                <div key={step.n} className="bg-[#f7f7f7] p-6" style={{ borderRadius: '20px' }}>
                  <div className="text-[#ff385c] font-bold text-2xl mb-2">{step.n}</div>
                  <h3 className="text-[#222222] font-semibold text-base mb-2">{step.t}</h3>
                  <p className="text-[#6a6a6a] text-[14px] leading-relaxed m-0">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            8c. FAQ
            ================================================================ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[#222222] font-bold mb-3" style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[#6a6a6a] text-lg">Straight answers about water damage, mold, and insurance in Michigan.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'How fast can PROVAIL get to my Bloomfield property?', a: 'Our documented goal is on-site within 60 minutes of your call, 24 hours a day, 7 days a week, anywhere in Oakland County. From our Bloomfield Township shop on West Maple Road, most addresses in Birmingham, Bloomfield Hills, West Bloomfield, Troy, and Royal Oak are well inside that window.' },
                { q: 'Do you work directly with my insurance company?', a: 'Yes. We document the damage for your insurance company, work directly with your assigned adjuster, and direct-bill most major Michigan carriers. You sign a work authorization at the start and we coordinate the file from there. We are a restoration contractor, not a public adjuster, so we never negotiate your settlement on your behalf.' },
                { q: 'How much does water damage restoration cost in Michigan?', a: 'Pricing varies by the water category, the affected square footage, and the materials involved. Typical Bloomfield-area dry-outs range from roughly $1,500 for a small single-room loss to $10,000-plus for a fully flooded basement. We use Xactimate line-item pricing — the same software your insurance carrier uses — so the numbers reconcile cleanly.' },
                { q: 'Will my homeowners insurance cover the loss?', a: 'Most sudden and accidental water losses (burst pipes, appliance failures, ice dams, wind-driven rain through a damaged roof) are covered under standard Michigan homeowners policies. Long-term seepage, groundwater, and surface flooding are typically excluded unless you carry a sewer/sump rider or separate flood policy. Your adjuster makes the final call, and we provide the documentation they need to make it accurately.' },
                { q: 'How long does drying out a flooded home take?', a: 'Most residential structural dry-outs take three to five days of active equipment, depending on the materials involved. Hardwood floors and plaster walls take longer than drywall and carpet. We monitor moisture content every visit and only pull equipment when readings hit dry standard.' },
                { q: 'Do you handle mold remediation too?', a: 'Yes. We are IICRC S520-certified for microbial remediation, build full containments with negative-air HEPA scrubbers, and remove contaminated materials safely. We also coordinate third-party post-remediation verification testing when your insurance company or a real estate transaction requires it.' },
                { q: 'What areas of Michigan do you serve?', a: 'Our primary service area is Oakland County: Bloomfield Township, Bloomfield Hills, Birmingham, Beverly Hills, Franklin, Bingham Farms, West Bloomfield, Orchard Lake, Keego Harbor, Sylvan Lake, Pontiac, Auburn Hills, Rochester, Rochester Hills, Troy, Clawson, Royal Oak, Berkley, Huntington Woods, Oak Park, Ferndale, Southfield, Lathrup Village, Farmington, Farmington Hills, Novi, Northville, Walled Lake, Wixom, Commerce, Waterford, White Lake, Independence Township, and Clarkston. We also respond into northern Wayne and western Macomb Counties on request.' },
                { q: 'Are you licensed and insured in Michigan?', a: 'Yes. PROVAIL Water Damage Restoration Bloomfield carries Michigan residential builder licensing, general liability, pollution liability, and workers compensation. Certificates of insurance are available on request before we step on your property.' },
              ].map((f) => (
                <details key={f.q} className="bg-white p-6" style={{ borderRadius: '16px', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                  <summary className="cursor-pointer text-[#222222] font-semibold text-base list-none flex justify-between items-center">
                    {f.q}
                    <span className="text-[#ff385c] text-xl">+</span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-relaxed mt-4 mb-0">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'How fast can PROVAIL get to my Bloomfield property?', acceptedAnswer: { '@type': 'Answer', text: 'Our documented goal is on-site within 60 minutes of your call, 24/7, anywhere in Oakland County, Michigan.' } },
                { '@type': 'Question', name: 'Do you work directly with my insurance company?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We document damage for your insurance company, work directly with your adjuster, and direct-bill most major Michigan carriers. We are a restoration contractor, not a public adjuster.' } },
                { '@type': 'Question', name: 'How much does water damage restoration cost in Michigan?', acceptedAnswer: { '@type': 'Answer', text: 'Typical Bloomfield-area dry-outs range from $1,500 for a small loss to $10,000-plus for a fully flooded basement. We use Xactimate line-item pricing.' } },
                { '@type': 'Question', name: 'Will my homeowners insurance cover the loss?', acceptedAnswer: { '@type': 'Answer', text: 'Most sudden and accidental water losses are covered under standard Michigan homeowners policies. Long-term seepage and surface flooding are typically excluded.' } },
                { '@type': 'Question', name: 'How long does drying out a flooded home take?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential structural dry-outs take three to five days of active equipment, with daily moisture monitoring.' } },
                { '@type': 'Question', name: 'Do you handle mold remediation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We are IICRC S520-certified, build negative-air containments, and coordinate post-remediation verification testing.' } },
                { '@type': 'Question', name: 'What areas of Michigan do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'Primarily Oakland County, including Bloomfield Township, Birmingham, Troy, Royal Oak, Farmington Hills, Southfield, and surrounding cities. We also respond into northern Wayne and western Macomb Counties.' } },
                { '@type': 'Question', name: 'Are you licensed and insured in Michigan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PROVAIL carries Michigan residential builder licensing, general liability, pollution liability, and workers compensation.' } },
              ],
            }),
          }}
        />

        {/* ================================================================
            9. CONTACT - Dark section (#222222 bg)
            ================================================================ */}
        <section id="contact" style={{ backgroundColor: '#222222', padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <h2
              className="text-white font-bold text-center mb-12"
              style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
            >
              Contact PROVAIL
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info left */}
              <div>
                {/* Address */}
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2" style={{ letterSpacing: '-0.18px' }}>Address</h3>
                  <address className="not-italic text-white/70 text-base leading-relaxed">
                    {BIZ_NAME}<br />
                    {ADDRESS_LINE1}<br />
                    {ADDRESS_LINE2}
                  </address>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2" style={{ letterSpacing: '-0.18px' }}>Phone</h3>
                  <a href={PHONE_HREF} className="text-[#ff385c] hover:text-white text-lg font-semibold transition-colors duration-150 no-underline">
                    {PHONE}
                  </a>
                </div>

                {/* Text */}
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2" style={{ letterSpacing: '-0.18px' }}>Text / SMS</h3>
                  <a href={SMS_HREF} className="text-[#ff385c] hover:text-white text-lg font-semibold transition-colors duration-150 no-underline">
                    {PHONE}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2" style={{ letterSpacing: '-0.18px' }}>Hours</h3>
                  <p className="text-white/70 text-base m-0 mb-1">24 Hours a Day, 7 Days a Week</p>
                  <p className="text-white/50 text-sm m-0">Emergency services available around the clock</p>
                </div>
              </div>

              {/* Map placeholder right */}
              <div
                className="flex items-center justify-center min-h-[350px]"
                style={{ borderRadius: '20px', backgroundColor: '#f2f2f2' }}
              >
                <div className="text-center p-8">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="#ff385c" className="mx-auto mb-3">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-[#6a6a6a] text-sm m-0 mb-1">Google Map Coming Soon</p>
                  <p className="text-[#6a6a6a] text-xs m-0">{ADDRESS_LINE1}, {ADDRESS_LINE2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
          10. FOOTER - White bg, centered, warm and clean
          ================================================================ */}
      <footer className="bg-white" style={{ padding: '48px 0 40px' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logo.png"
              alt="PROVAIL Water Damage Restoration Bloomfield"
              style={{
                height: 48,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Nav links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap items-center justify-center gap-2 text-[14px] list-none p-0 m-0">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#why-choose' },
                { label: 'Protection Plan', href: '#protection-plan' },
                { label: 'Areas', href: '#areas' },
                { label: 'Contact', href: '#contact' },
                { label: 'More Offices', href: '/macomb-township-mi-water-damage-restoration-near-you' },
              ].map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#c1c1c1]">&middot;</span>}
                  <a href={link.href} className="text-[#222222] hover:text-[#ff385c] transition-colors duration-150 no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* NAP */}
          <address className="not-italic text-[#6a6a6a] text-[14px] mb-4">
            {ADDRESS_LINE1}, {ADDRESS_LINE2} &bull;{' '}
            <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline hover:text-[#222222] transition-colors duration-150">
              {PHONE}
            </a>
          </address>

          {/* Copyright */}
          <p className="text-[#6a6a6a] text-[13px] m-0">
            &copy; {new Date().getFullYear()} {BIZ_NAME}. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Hide carousel scrollbar globally */}
      <style>{`
        [style*="scroll-snap-type"]::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  )
}
