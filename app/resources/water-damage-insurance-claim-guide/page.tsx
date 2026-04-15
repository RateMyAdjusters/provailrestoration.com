import type { Metadata } from 'next'
import {
  SiteHeader,
  SiteFooter,
  HeroCTA,
  PillarSectionHeading,
  BIZ_NAME,
  PHONE,
  PHONE_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from '../../_components/site-chrome'

export const metadata: Metadata = {
  title:
    'Water Damage Insurance Claim Guide | Homeowner Playbook | Provail Restoration of Bloomfield',
  description:
    'A plain-English guide to filing a homeowners water damage insurance claim in Michigan — first 24 hours, documentation, policy sections, adjuster expectations, and denied claim next steps. Not legal or insurance advice.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
  },
  openGraph: {
    title:
      'Water Damage Insurance Claim Guide | Provail Restoration of Bloomfield',
    description:
      'Plain-English homeowner guide to water damage insurance claims. Documentation, adjuster expectations, and next steps if a claim is denied. Not legal or insurance advice.',
    url: 'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Do I have to call my insurance company before calling a restoration contractor?',
    a: 'No. You can — and in many emergencies should — stop the water and bring in a restoration contractor to begin mitigation before the insurance conversation starts. Homeowners policies typically require the insured to take reasonable steps to prevent further damage, and waiting several hours for an adjuster to call back while water is still spreading can actually work against you. The claim itself can be opened in parallel with the mitigation work, and the documentation the contractor produces will support whatever the adjuster needs later.',
  },
  {
    q: 'What exactly does "sudden and accidental" mean on my policy?',
    a: 'It is the standard phrase most homeowners policies use to describe water losses they will cover — a water event that happened abruptly and unexpectedly, as opposed to a slow leak that developed over weeks or months. A burst supply line is sudden and accidental. A hidden weep under a sink that has been damaging the cabinet for a year is not. The determination is ultimately made by your carrier, and every policy has slightly different wording. Read the exact language in your own policy, or ask your agent to walk you through it.',
  },
  {
    q: 'What is Xactimate and why does my adjuster keep mentioning it?',
    a: 'Xactimate is a software platform published by Verisk Analytics that is used by most insurance carriers and many restoration contractors to estimate the cost of repairs. It contains a regional pricing database for labor and materials that is updated periodically. When an adjuster and a contractor are both using Xactimate, the goal is to produce an estimate that matches on line items and quantities. Disagreements on Xactimate estimates usually come down to specific line items — whether a particular piece of work is needed, whether a specialty item was priced correctly, or whether supplements are justified.',
  },
  {
    q: 'What is a supplement?',
    a: 'A supplement is an addition to the original estimate that captures work that was not visible or knowable on the first inspection. For example, a contractor removes drywall that was wet and finds wet insulation and framing that require additional drying. The added work is documented and submitted to the carrier as a supplement to the original estimate. Supplements are a normal part of almost any water damage claim of reasonable size — the first estimate is rarely the final estimate, because water losses hide damage behind other materials.',
  },
  {
    q: 'Should I take the insurance check directly or have the contractor billed directly?',
    a: 'Both approaches are common. Direct insurance billing means the restoration contractor submits invoices to the carrier and is paid directly by the carrier. Reimbursement means the homeowner is paid by the carrier and pays the contractor from those funds. Direct billing can simplify the paperwork for the homeowner; reimbursement gives the homeowner more control over the funds. Neither is inherently better, and the right approach depends on your preference and the contractor&rsquo;s willingness to work either way. We do not advise on which is right for your situation.',
  },
  {
    q: 'My claim was denied. What are my options?',
    a: 'A denial is not always the end of the process. You can ask the carrier for the specific policy language they are relying on, you can request a re-inspection, you can invoke the appraisal clause in your policy if there is a disagreement on the amount of loss, and in some cases you can contact the Michigan Department of Insurance and Financial Services for guidance. For disputes that cannot be resolved informally, homeowners sometimes consult a licensed public adjuster or an attorney who handles insurance matters. We do not represent homeowners in disputes with their carriers and we do not practice law — this is a list of options, not advice.',
  },
  {
    q: 'What is a public adjuster?',
    a: 'A public adjuster is a licensed professional who represents the homeowner (not the insurance company) in a claim. They typically work for a percentage of the settlement. In Michigan, public adjusters are licensed and regulated by DIFS. Whether hiring one makes sense depends on the size and complexity of the claim, and it is a decision the homeowner should weigh carefully. We are not public adjusters and cannot refer you to one — your state licensing board and your own research are the right place to start.',
  },
  {
    q: 'How long do I have to file a water damage claim in Michigan?',
    a: 'Policies usually require prompt notice of a loss, and waiting too long can sometimes be used as a reason to deny or reduce a claim — especially if the delay made the damage worse. The exact time limit is spelled out in your policy and varies between carriers. If a water event has just happened, start the claim now rather than later. If a loss happened weeks or months ago and you are only now thinking about filing, call your agent and ask about the filing window before assuming it is too late.',
  },
  {
    q: 'Does the restoration company negotiate my claim with the adjuster?',
    a: 'We provide complete technical documentation of the loss and the work performed, and we answer factual questions from adjusters about what we found and what we did. We do not negotiate settlements, adjust claims, advocate on a homeowner&rsquo;s behalf in disputes, or offer legal opinions on policy language. Those activities are either the role of a public adjuster or an attorney, and Michigan licensing law is clear about who can do them. This is a boundary we stay on the right side of.',
  },
  {
    q: 'Is my deductible separate from what the contractor charges?',
    a: 'The deductible is the amount the homeowner is responsible for out of pocket under the policy, and it is subtracted from the claim settlement before the carrier pays. It is not a separate bill from the contractor. If the total loss is less than the deductible, the entire claim is usually not worth filing. For losses well above the deductible, the homeowner pays the deductible and the rest is handled between the carrier and the contractor (or reimbursed to the homeowner). Your adjuster will confirm the exact number.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Water Damage Insurance Claim Guide for Michigan Homeowners',
  description:
    'A plain-English guide to filing a homeowners water damage insurance claim — first 24 hours, documentation, policy language, adjuster expectations, and denied claim next steps.',
  author: {
    '@type': 'Organization',
    name: BIZ_NAME,
  },
  publisher: {
    '@type': 'Organization',
    name: BIZ_NAME,
    logo: {
      '@type': 'ImageObject',
      url: 'https://provailrestoration.com/logo.png',
    },
  },
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Damage Restoration',
  name: 'Water Damage Restoration & Insurance Documentation',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: BIZ_NAME,
    telephone: '+12485318404',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE1,
      addressLocality: 'Bloomfield Township',
      addressRegion: 'MI',
      postalCode: '48301',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bloomfield Township' },
    { '@type': 'City', name: 'Bloomfield Hills' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'West Bloomfield' },
    { '@type': 'City', name: 'Troy' },
  ],
  description:
    'Water damage restoration with complete insurance-grade documentation, including photos, moisture mapping, daily drying logs, and scope of work in Bloomfield Township, MI.',
  url: 'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://provailrestoration.com/resources/water-damage-insurance-claim-guide#business',
  name: BIZ_NAME,
  telephone: '+12485318404',
  url: 'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE1,
    addressLocality: 'Bloomfield Township',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.5597, longitude: -83.3877 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://provailrestoration.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://provailrestoration.com/resources',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Water Damage Insurance Claim Guide',
      item: 'https://provailrestoration.com/resources/water-damage-insurance-claim-guide',
    },
  ],
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="bg-white p-8"
      style={{
        borderRadius: '20px',
        boxShadow:
          'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        {title}
      </h3>
      <div className="text-[#6a6a6a] text-[15px] leading-[1.65]">{children}</div>
    </div>
  )
}

function Disclaimer() {
  return (
    <div
      className="p-8"
      style={{
        borderRadius: '20px',
        backgroundColor: 'rgba(255,56,92,0.06)',
        border: '1px solid rgba(255,56,92,0.2)',
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        Important: This is Not Legal or Insurance Advice
      </h3>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] mb-3">
        This guide is educational. It is written to help homeowners in
        Bloomfield Township and the surrounding Oakland County communities
        understand what a water damage insurance claim usually looks like
        from the inside. It is not legal advice, it is not insurance advice,
        and it does not create any attorney-client, adjuster-client, or
        advisor-client relationship.
      </p>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] mb-3">
        Every homeowners policy is different. The specific language in your
        policy, your state, your carrier, and the facts of your individual
        loss all matter, and none of those specifics are something a web
        page can answer for you. For questions about whether a particular
        loss is covered, the appropriate time to file, policy exclusions,
        or anything else that touches on the legal or contractual
        relationship between you and your carrier, please contact your
        licensed insurance agent, your carrier directly, or — if
        appropriate — a licensed public adjuster or an attorney.
      </p>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
        Provail Restoration of Bloomfield is a restoration contractor. We
        are not an insurance company, an insurance agent, a public
        adjuster, or a law firm. We provide cleanup, drying, and
        reconstruction services and we document those services thoroughly
        — the claims conversation itself belongs to you and your carrier.
      </p>
    </div>
  )
}

export default function WaterDamageInsuranceClaimGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-6 py-3 text-[#222222] text-[14px] font-medium"
                style={{
                  borderRadius: '32px',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <span>Homeowner Resource</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Bloomfield, MI</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[860px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Water Damage Insurance Claim Guide for Michigan Homeowners
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[680px] mx-auto mb-10 leading-relaxed">
              A plain-English walk-through of what happens when you file a
              homeowners water damage claim in Michigan — what to do in
              the first 24 hours, what to document, what adjusters
              actually look for, and what your options are if a claim is
              denied.
            </p>

            <HeroCTA />
          </div>
        </section>

        {/* DISCLAIMER (top placement, very visible) */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <Disclaimer />
          </div>
        </section>

        {/* FIRST 24 HOURS */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step One"
              title="The First 24 Hours Checklist"
              intro="Everything downstream of a water loss gets easier when the first day is handled well."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                <strong>Stop the water.</strong> Close the closest valve
                that shuts flow to the failure point. If you cannot find
                an appliance-level valve, close the whole-house main at
                the water meter. If the failure is a frozen-pipe burst,
                shut off the main and open a lower faucet to drain the
                system. This single step determines how big the claim
                will be.
              </p>
              <p>
                <strong>Make the scene electrically safe.</strong> If
                water has reached outlets, extension cords, or submerged
                appliances, shut off the affected circuits at the
                breaker before anyone walks into the room. This is not
                optional. Standing water and live electricity is a
                combination that has killed homeowners.
              </p>
              <p>
                <strong>Photograph everything, from everywhere.</strong>{' '}
                Wide shots of each affected room. Close-ups of the
                source. Shots showing the water level on walls or
                cabinets. Shots of the ceiling below if the leak came
                from above. Shots of any personal property that was
                touched. Your phone camera is the single most valuable
                piece of equipment in the first hour of a water loss,
                and more photos are always better than fewer.
              </p>
              <p>
                <strong>Write down what you know.</strong> When did you
                first notice the water? What were you doing? What
                sound, smell, or visual first alerted you? Get this
                into a note on your phone while it is still fresh,
                because the timeline matters later.
              </p>
              <p>
                <strong>Call a restoration contractor.</strong> Water
                spreads through porous materials far faster than most
                homeowners expect, and delayed mitigation is one of the
                most common ways a small claim becomes a large one. Most
                policies explicitly require the insured to take
                reasonable steps to prevent further damage, so bringing
                in a qualified contractor is both a practical and a
                contractual obligation.
              </p>
              <p>
                <strong>Open the claim when you are ready.</strong> You
                can call your carrier immediately or wait until the
                contractor has stabilized the scene and walked you
                through what they found. Both sequences are common.
                What you should not do is wait days to make any phone
                calls — to either side.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Two"
              title="What to Photograph and Document"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Documentation is the currency of an insurance claim. An
                adjuster was not there when the water event happened,
                cannot see what has already been dried or removed, and
                has to rely on what is recorded to understand the loss.
                The more thorough the record, the smoother the claim
                usually runs. Aim to capture the following.
              </p>
              <p>
                <strong>The source.</strong> A photo of the burst pipe,
                the failed supply line, the corroded tank, the stained
                ceiling above an upstairs leak, the water level in the
                basement at its high point. Whatever started the loss
                should be visible in at least one image.
              </p>
              <p>
                <strong>The affected materials.</strong> Every room,
                every cabinet, every piece of flooring, every wall with
                a visible waterline. Wide shots for context, close-ups
                for detail.
              </p>
              <p>
                <strong>Personal property.</strong> Furniture,
                electronics, rugs, clothing, mattresses, and anything
                else that was in the path of the water. Contents claims
                are a separate conversation from structure claims, and
                contents are notoriously easy to forget until the
                homeowner is listing items for the adjuster weeks later.
                Do the list early.
              </p>
              <p>
                <strong>Moisture readings and drying logs.</strong>{' '}
                This is where the restoration contractor&rsquo;s
                equipment and training add real value. A meter reading
                on a wet wall, recorded at a specific time, is a
                verifiable fact. A daily drying log showing readings
                coming down over three, five, or seven days tells the
                adjuster the work was done to a standard rather than
                based on a guess.
              </p>
              <p>
                <strong>The scope of work.</strong> A written,
                line-itemized description of everything the contractor
                intends to remove, dry, clean, replace, and repaint.
                Xactimate estimates usually carry this information in a
                format adjusters are comfortable reading.
              </p>
            </div>
          </div>
        </section>

        {/* POLICY LANGUAGE */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Three"
              title="Reading the Water Sections of Your Policy"
              intro="Not a legal interpretation — a translation into homeowner English. Your agent is the authoritative source."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Most standard homeowners policies — HO-3 and HO-5 in
                particular — handle water in three broad buckets. What
                follows is a general framing, not an interpretation of
                your specific policy. Pull your declarations page and
                the full policy document, and if anything below sounds
                relevant to your situation, call your agent to confirm
                how it applies to you.
              </p>
              <p>
                <strong>Covered: sudden and accidental discharge.</strong>{' '}
                Water that is suddenly and accidentally released from
                a plumbing system, heating system, AC system, or
                household appliance is commonly covered. A burst pipe,
                a failed supply hose, a dishwasher that overflowed
                unexpectedly — these usually fall in the covered
                bucket for structural damage and sometimes for contents.
              </p>
              <p>
                <strong>Excluded: gradual damage.</strong> Damage that
                occurred slowly over weeks, months, or years is
                commonly excluded, because it is treated as a
                maintenance issue. A cabinet that has been slowly
                rotting from a weep under the sink for a year is a
                classic example. The exclusion language is usually
                specific and worth reading carefully.
              </p>
              <p>
                <strong>Excluded or separate: flood.</strong> Surface
                water entering the home from outside — including
                overland flooding, rising rivers, and in many cases
                sewer backups — is commonly excluded from standard
                homeowners policies and is handled through a separate
                flood policy or a sewer and drain backup endorsement.
                If you live in a flood-prone neighborhood and you do
                not have flood insurance, a flooded basement is a
                difficult conversation with a standard HO-3 carrier.
              </p>
              <p>
                <strong>Sub-limits and endorsements.</strong> Many
                policies apply sub-limits to certain kinds of losses
                — mold remediation is a common one — and many
                homeowners have added endorsements that change the
                coverage picture in specific ways. The declarations
                page lists the base coverage and the endorsements;
                your agent can tell you what each one actually
                changes in practice.
              </p>
              <p>
                None of the above is a substitute for reading your own
                policy and talking to your own agent. Every carrier
                writes the water sections slightly differently, and
                the facts of your specific loss matter.
              </p>
            </div>
          </div>
        </section>

        {/* ADJUSTER EXPECTATIONS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Four"
              title="What the Adjuster Is Looking For"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                An adjuster&rsquo;s job is to evaluate the cause of
                loss, the scope of damage, and the reasonable cost of
                repair under the terms of the policy. On a typical
                water damage claim, they are going to walk the loss,
                take their own photos, ask a few direct questions,
                and either write their own estimate or review the
                contractor&rsquo;s. Most adjusters we work with in
                Southeast Michigan are reasonable professionals trying
                to do a fair job, and the interactions usually go
                smoothly when the documentation is complete.
              </p>
              <p>
                The main things they are confirming on a water loss:
                whether the cause of loss is a covered peril under
                the policy, whether the damage is consistent with a
                sudden event or a gradual one, what materials were
                affected and what the reasonable repair scope is,
                whether any code upgrade or matching concerns apply,
                and whether the contractor&rsquo;s pricing is within
                normal bounds for the area.
              </p>
              <p>
                Speaking plainly and factually with an adjuster is
                almost always the right approach. Speculation about
                causes, exaggeration of damage, or an adversarial
                tone tend to slow claims down rather than speed them
                up. If a disagreement comes up on a specific line
                item, the contractor&rsquo;s documentation is what
                resolves it — not a debate.
              </p>
            </div>
          </div>
        </section>

        {/* XACTIMATE & PRICING */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Five"
              title="Xactimate, Pricing, and Supplements"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="What Xactimate Is">
                A pricing and estimating platform used across the
                insurance and restoration industry. It contains
                regional unit pricing for materials and labor that is
                updated periodically, and it produces estimates in a
                format both carriers and contractors can read. Most
                adjusters and most experienced restoration contractors
                use it.
              </Card>
              <Card title="Why Estimates Can Differ">
                Two Xactimate estimates on the same loss can come out
                differently because of disagreements on scope (what
                work is needed), quantity (how much area is affected),
                or line items (whether a specific item is appropriate).
                Most differences are resolved by walking the loss
                together or by exchanging supporting documentation.
              </Card>
              <Card title="Supplements">
                A supplement is additional work added to the estimate
                after the fact because it was not visible at the
                initial inspection — insulation found to be wet behind
                drywall that was removed later, a subfloor found to be
                rotted once the flooring came up, additional drying
                days required to hit the dry standard. Supplements are
                routine on water losses and carriers generally expect
                them.
              </Card>
              <Card title="Direct Bill vs. Reimbursement">
                Direct bill means the contractor invoices the carrier
                and is paid directly. Reimbursement means the carrier
                pays the homeowner, who then pays the contractor from
                those funds. Both approaches are common in Michigan
                and each has practical tradeoffs. We do not advise on
                which is right for any specific homeowner — it is a
                preference and a logistics decision.
              </Card>
            </div>
          </div>
        </section>

        {/* DENIED CLAIMS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Six"
              title="If the Claim Is Denied"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A denial is a difficult conversation but it is rarely
                the end of the process. The first step is to read the
                denial letter carefully and identify the specific
                reason the carrier is giving — the policy language
                they are relying on and the facts they are citing. A
                denial based on a misreading of the facts is very
                different from a denial based on a clear policy
                exclusion, and the two have different remedies.
              </p>
              <p>
                Homeowners have several options when a denial feels
                wrong. They can ask the carrier for a re-inspection,
                especially if new information has come to light.
                They can request that the carrier reconsider with
                additional documentation from the restoration
                contractor. They can invoke the appraisal clause in
                the policy — a common mechanism for resolving
                disagreements about the amount of loss without
                litigation. For disputes that cannot be resolved
                informally, homeowners sometimes consult a licensed
                public adjuster (who represents the insured, not the
                carrier) or an attorney who handles insurance
                matters.
              </p>
              <p>
                The Michigan Department of Insurance and Financial
                Services (DIFS) handles consumer complaints about
                insurance companies and can be a resource for
                homeowners who believe their carrier is acting
                unreasonably. Filing a DIFS complaint is a formal
                step and should be weighed thoughtfully, not used as
                a negotiating tactic.
              </p>
              <p>
                We do not represent homeowners in disputes with
                their carriers. What we can do is provide thorough,
                factual documentation of the loss and the work
                performed, which is often what a homeowner needs to
                support whatever path they choose next. Beyond that,
                the right resource is a licensed public adjuster or
                an attorney — not a restoration contractor.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER REPEAT */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <Disclaimer />
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading title="Related Services & Resources" />
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="Water Damage Restoration">
                Our full{' '}
                <a
                  href="/water-damage-restoration"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  water damage restoration
                </a>{' '}
                process and the IICRC S500 standard.
              </Card>
              <Card title="Appliance Leak Damage">
                Dishwasher, washer, fridge, and water heater failures.{' '}
                <a
                  href="/services/appliance-leak-water-damage"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  Read more
                </a>
                .
              </Card>
              <Card title="Insurance Claims Help">
                Our{' '}
                <a
                  href="/insurance-claims-help"
                  className="text-[#ff385c] font-semibold no-underline"
                >
                  insurance claims help page
                </a>{' '}
                describes the documentation services we provide
                alongside every job.
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Insurance Claim FAQ"
            />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white p-6 group"
                  style={{
                    borderRadius: '16px',
                    boxShadow:
                      'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px',
                  }}
                >
                  <summary
                    className="cursor-pointer text-[#222222] font-semibold text-[17px] list-none flex justify-between items-center gap-4"
                    style={{ letterSpacing: '-0.18px' }}
                  >
                    <span>{f.q}</span>
                    <span className="text-[#ff385c] text-2xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[#6a6a6a] text-[15px] leading-[1.7] mt-4 mb-0">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{
                fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Water event right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a href={PHONE_HREF} className="text-[#ff385c] font-semibold no-underline">
                {PHONE}
              </a>{' '}
              and we will dispatch a crew. Documentation, drying, and
              reconstruction under one roof, with a claim-ready file at
              the end.
            </p>
            <HeroCTA />
            <p className="text-[#6a6a6a] text-sm mt-8">
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
