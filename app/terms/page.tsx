import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter, PHONE, BIZ_NAME } from '../_components/site-chrome'

const EFFECTIVE_DATE = 'April 17, 2026'

export const metadata: Metadata = {
  title: 'Terms of Use | Provail Restoration of Bloomfield',
  description:
    'Terms of use for provailrestoration.com. Information on the site is for general reference and does not create a service agreement until we sign a written work authorization.',
  alternates: { canonical: 'https://provailrestoration.com/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="max-w-[820px] mx-auto px-6 py-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6a6a6a] mb-6">
            <Link href="/" className="no-underline hover:text-[#ff385c]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#222222]">Terms of Use</span>
          </nav>

          <h1 className="text-[#222222] font-bold mb-2" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', letterSpacing: '-0.5px' }}>
            Terms of Use
          </h1>
          <p className="text-[#6a6a6a] text-sm mb-10">Effective {EFFECTIVE_DATE}</p>

          <div className="text-[#222222] text-[16px] leading-[1.7] space-y-6">
            <p>
              These Terms govern your use of provailrestoration.com, the website of {BIZ_NAME}. By visiting the site you
              agree to these Terms. Restoration work itself is governed by a separate written work authorization that
              you sign with our field supervisor.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Informational only</h2>
            <p>
              Content on this site &mdash; including service descriptions, response-time targets, pricing references, and
              guides &mdash; is for general reference. It is not a contract, a binding quote, or professional advice for your
              specific property. Property conditions vary, and the actual scope, cost, and timeline of any job are set
              in writing before work begins.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Response-time targets</h2>
            <p>
              Our 60-minute on-site response is a target, not a guarantee. Severe weather, large regional loss events,
              road closures, and other conditions outside our control can extend arrival times. We will always give you
              an honest ETA over the phone.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">No professional or legal advice</h2>
            <p>
              The resources and guides on this site are not a substitute for a licensed insurance adjuster, licensed
              contractor inspection, industrial hygienist, attorney, or accountant. For your specific loss, call us or a
              qualified professional.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Intellectual property</h2>
            <p>
              The site&rsquo;s text, images, logos, and layout are the property of {BIZ_NAME} or our licensors and are
              protected by U.S. copyright and trademark law. You may view and share links to pages for personal,
              non-commercial use. Republishing substantial portions requires written permission.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">External links</h2>
            <p>
              Links to third-party sites (insurance carriers, Michigan state resources, IICRC, etc.) are provided for
              convenience. We don&rsquo;t control and aren&rsquo;t responsible for their content or their own policies.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Disclaimer of warranties</h2>
            <p>
              The site is provided &ldquo;as is.&rdquo; We do not warrant that the site will be error-free, uninterrupted,
              or free of viruses. Your use of the site is at your own risk. Nothing in these Terms limits any warranty
              we give you in a signed work authorization for restoration services.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {BIZ_NAME} is not liable for any indirect, incidental, or
              consequential damages arising from your use of the site. Our maximum liability for any claim related to
              the site is $100.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-law rules.
              Any dispute related to the site is subject to the exclusive jurisdiction of the state and federal courts
              located in Oakland County, Michigan.
            </p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Changes</h2>
            <p>We may update these Terms. The effective date at the top of this page reflects the most recent version.</p>

            <h2 className="text-[#222222] font-semibold text-[20px] mt-8 mb-3">Contact</h2>
            <p>
              Questions about these Terms:{' '}
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
