import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter, PHONE, BIZ_NAME } from '../_components/site-chrome'

const EFFECTIVE_DATE = 'April 17, 2026'

export const metadata: Metadata = {
  title: 'Privacy Policy | Provail Restoration of Bloomfield',
  description:
    'How Provail Restoration of Bloomfield collects, uses, and protects information from customers and website visitors.',
  alternates: { canonical: 'https://provailrestoration.com/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="max-w-[820px] mx-auto px-6 py-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6a6a6a] mb-6">
            <Link href="/" className="no-underline hover:text-[#ff385c]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#222222]">Privacy Policy</span>
          </nav>

          <h1 className="text-[#222222] font-bold mb-2" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p className="text-[#6a6a6a] text-sm mb-10">Effective {EFFECTIVE_DATE}</p>

          <div className="prose-style text-[#222222] text-[16px] leading-[1.7] space-y-6">
            <p>
              {BIZ_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what
              information we collect when you contact us or visit provailrestoration.com, how we use it, and the choices
              you have.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact information you give us</strong> &mdash; name, phone number, email, property address, and a
                description of the loss &mdash; when you call, email, or submit a form.
              </li>
              <li>
                <strong>Insurance claim information</strong> &mdash; carrier, policy number, claim number, and adjuster contact
                details &mdash; when we work a claim on your behalf.
              </li>
              <li>
                <strong>Site analytics</strong> &mdash; standard server logs (IP address, browser type, referring page,
                pages viewed, timestamps) collected automatically when you visit the site.
              </li>
            </ul>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">How we use information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To dispatch crews and coordinate restoration work on your property.</li>
              <li>To bill your insurance carrier or invoice you directly.</li>
              <li>To respond to inquiries, schedule estimates, and follow up on work we&rsquo;ve completed.</li>
              <li>To improve the website and understand which pages visitors find useful.</li>
              <li>To comply with legal obligations, including Michigan contractor licensing and tax reporting.</li>
            </ul>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Sharing</h2>
            <p>
              We do not sell your personal information. We share information only with: your insurance carrier and
              adjuster when working a claim, licensed subcontractors who perform specialty repairs under our supervision,
              payment processors, and authorities when required by law.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Cookies and analytics</h2>
            <p>
              We use a small number of cookies and first-party analytics to measure site performance. You can disable
              cookies in your browser settings; the site will still function.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Data retention</h2>
            <p>
              We retain project records for as long as needed to complete the work, satisfy insurance and tax
              record-keeping obligations, and resolve any disputes. Site analytics are retained for up to 26 months.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Your choices</h2>
            <p>
              You may request a copy of the information we hold about you, ask us to correct inaccuracies, or request
              deletion where we are not legally required to keep it. Email{' '}
              <a href="mailto:info@provailrestoration.com" className="text-[#ff385c] no-underline">info@provailrestoration.com</a>
              {' '}or call {PHONE}.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Children</h2>
            <p>The site and our services are not directed to children under 13, and we do not knowingly collect information from them.</p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The effective date at the top of this page reflects the most
              recent version.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Contact</h2>
            <p>
              {BIZ_NAME}, 4060 W Maple Rd, Bloomfield Township, MI 48301.{' '}
              <a href="mailto:info@provailrestoration.com" className="text-[#ff385c] no-underline">info@provailrestoration.com</a>
              {' '}&middot; {PHONE}.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
