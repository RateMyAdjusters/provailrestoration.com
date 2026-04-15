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
    'How to Document Water Damage for Your Insurance Adjuster | Provail Restoration of Bloomfield',
  description:
    'Step-by-step homeowner guide to documenting water damage for your insurance adjuster: photos, video, moisture readings, contents lists, and the narrative. Not legal or insurance advice.',
  alternates: {
    canonical:
      'https://provailrestoration.com/resources/document-water-damage-for-insurance',
  },
  openGraph: {
    title:
      'How to Document Water Damage for Your Insurance Adjuster | Provail Restoration of Bloomfield',
    description:
      'Step-by-step guide for Michigan homeowners: how to photograph, video, and log a water loss the way an adjuster file expects. Not legal or insurance advice.',
    url: 'https://provailrestoration.com/resources/document-water-damage-for-insurance',
    siteName: BIZ_NAME,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'How many photos is "enough" for a water damage claim?',
    a: 'There is no official number, but for a typical single-room loss, homeowners who end up with the cleanest claims usually take between fifty and two hundred photos before anything is cleaned or removed. For a multi-room basement flood, several hundred is normal. The rule of thumb is that you cannot take too many, and you will regret the ones you did not take far more often than the ones you did. Digital storage is free; reshooting after drywall has been demolished is impossible.',
  },
  {
    q: 'Should I shoot photos or video — or both?',
    a: 'Both, and in that order. Photos are what an adjuster can drop into a file, zoom on, and reference against a scope line. Video is what captures the walkthrough feel, the sound of water, and spatial relationships between rooms that still images flatten. A short narrated video walkthrough plus a thorough set of still photos is the strongest combination, and they take different amounts of effort to review so the adjuster will pick whichever is more useful for a given question.',
  },
  {
    q: 'Does my phone camera capture enough metadata?',
    a: 'For modern iPhones and Android devices with default settings, yes. The photo file stores the date, time, and typically GPS coordinates in its EXIF metadata, and that information travels with the file as long as it is not stripped by a messaging app. Sending photos through iMessage or email as attachments generally preserves metadata; sending them through some chat apps or social platforms can strip it. When in doubt, back up the originals to cloud storage or transfer them to a computer by cable before sharing anything.',
  },
  {
    q: 'Can I start cleanup before the adjuster arrives?',
    a: 'Mitigation — stopping the water, extracting standing water, and beginning to dry — is not just allowed, it is usually required by the policy. What you should not do is demolish, discard, or fully restore anything before the loss is documented. Pull saturated carpet only after photographing it in place. Keep damaged materials in a safe storage area rather than throwing them out. The adjuster needs to see what happened, not just hear about it, and the documentation is what bridges the gap between a scene that has already been partially stabilized and an adjuster who arrives a day or two later.',
  },
  {
    q: 'What if I forgot to photograph something before it was removed?',
    a: 'This happens on almost every claim, especially with fast-moving emergencies. A contractor who was on site during the mitigation phase will typically have their own photos of materials before and after removal, and those images become part of the file. If neither you nor a contractor captured a particular item, note it in your written narrative as clearly and honestly as you can, and be prepared to describe it to the adjuster in words. An honest gap is always better than a reconstructed memory presented as fact.',
  },
  {
    q: 'Does the restoration contractor replace my documentation?',
    a: 'No, it supplements yours. A contractor will bring moisture meters, thermal imaging, drying logs, and a scope of work that a homeowner generally cannot produce on their own. But the homeowner is the only person who knows what the room looked like before the event, what was stored in a particular closet, and which items had sentimental or receipt-backed value. The two records work together — the homeowner captures the before and the personal property, the contractor captures the technical readings and the mitigation work.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'How to Document Water Damage for Your Insurance Adjuster (Step-by-Step)',
  description:
    'Step-by-step homeowner guide to documenting water damage for an insurance adjuster: photography, video, moisture readings, contents, and the written narrative.',
  author: { '@type': 'Organization', name: BIZ_NAME, '@id': '#organization' },
  publisher: {
    '@type': 'Organization',
    name: BIZ_NAME,
    '@id': '#organization',
    logo: {
      '@type': 'ImageObject',
      url: 'https://provailrestoration.com/logo.png',
    },
  },
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://provailrestoration.com/resources/document-water-damage-for-insurance',
  },
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
      name: 'Document Water Damage for Insurance',
      item: 'https://provailrestoration.com/resources/document-water-damage-for-insurance',
    },
  ],
}

function Callout({
  title,
  children,
  tone = 'neutral',
}: {
  title: string
  children: React.ReactNode
  tone?: 'neutral' | 'warn'
}) {
  const bg =
    tone === 'warn' ? 'rgba(255,56,92,0.06)' : 'rgba(34,34,34,0.035)'
  const border =
    tone === 'warn' ? 'rgba(255,56,92,0.2)' : 'rgba(34,34,34,0.1)'
  return (
    <div
      className="p-8"
      style={{
        borderRadius: '20px',
        backgroundColor: bg,
        border: `1px solid ${border}`,
      }}
    >
      <h3
        className="text-[#222222] text-lg font-semibold mb-3"
        style={{ letterSpacing: '-0.44px' }}
      >
        {title}
      </h3>
      <div className="text-[#3c3c3c] text-[15px] leading-[1.7]">{children}</div>
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
        Not Legal or Insurance Advice
      </h3>
      <p className="text-[#3c3c3c] text-[15px] leading-[1.7] m-0">
        This article is educational only. It is not legal advice, not
        insurance advice, and it does not create any advisor-client
        relationship. Provail Restoration of Bloomfield is a restoration
        contractor — we do not adjust claims, represent homeowners in
        disputes with carriers, or interpret policy language. For
        questions about coverage, deadlines, or policy terms, contact
        your licensed insurance agent, your carrier, or — if
        appropriate — a licensed public adjuster or attorney.
      </p>
    </div>
  )
}

const tocItems = [
  { id: 'why', label: 'Why Documentation Matters' },
  { id: 'gear', label: 'Camera & Phone Setup' },
  { id: 'technique', label: 'Wide-to-Tight Photography' },
  { id: 'checklist', label: 'The Photo Checklist' },
  { id: 'video', label: 'Video Walkthrough' },
  { id: 'moisture', label: 'Moisture Readings' },
  { id: 'contents', label: 'Contents & Personal Property' },
  { id: 'narrative', label: 'Written Narrative & Inventory' },
  { id: 'avoid', label: 'What to Avoid' },
  { id: 'contractor', label: 'How a Contractor Supplements You' },
]

export default function DocumentWaterDamageForInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO */}
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '48px' }}
        >
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
                <span>Homeowner Guide</span>
                <span className="text-[#c1c1c1]">|</span>
                <span>Documentation</span>
              </div>
            </div>

            <h1
              className="text-[#222222] font-bold leading-[1.12] mb-5 max-w-[920px] mx-auto"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              How to Document Water Damage for Your Insurance Adjuster (Step-by-Step)
            </h1>

            <p className="text-[#6a6a6a] text-lg font-normal max-w-[720px] mx-auto mb-10 leading-relaxed">
              A narrowly focused walkthrough of the documentation process
              itself — what to photograph, how to photograph it, what to
              write down, and how to organize the file so an adjuster can
              actually use it. Not legal or insurance advice.
            </p>

            <HeroCTA />

            <div className="max-w-[720px] mx-auto mt-12">
              <Callout title="TL;DR">
                Shoot hundreds of photos in a wide-to-tight pattern, four
                walls plus ceiling plus floor for every affected room.
                Add a narrated video walkthrough. Log what you know in
                writing while the memory is fresh. Do not throw anything
                away until the adjuster — or the contractor documenting
                on your behalf — has seen it. The homeowner captures the
                before and the contents; the contractor captures the
                readings and the scope.
              </Callout>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="bg-white" style={{ paddingBottom: '64px' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <div
              className="p-8"
              style={{
                borderRadius: '20px',
                boxShadow:
                  'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                backgroundColor: '#ffffff',
              }}
            >
              <h2
                className="text-[#222222] text-lg font-semibold mb-4"
                style={{ letterSpacing: '-0.44px' }}
              >
                What&rsquo;s in this guide
              </h2>
              <ol className="list-decimal pl-5 text-[#3c3c3c] text-[15px] leading-[1.8] m-0 space-y-1">
                {tocItems.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-[#222222] no-underline hover:text-[#ff385c]"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step One"
              title="Why Documentation Matters"
              intro="An adjuster file is built on what was recorded, not what was remembered."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                When a claim reaches an insurance adjuster, it becomes a
                file. That file is a collection of photographs, a written
                first-notice-of-loss statement, a cause-of-loss narrative,
                a scope of work, any technical readings that were taken,
                and whatever invoices or receipts apply. The adjuster was
                not in your basement at 2 a.m. when the supply line let
                go. Everything they know about your loss is what made it
                into that file, and the homeowner is usually the first
                and most important contributor.
              </p>
              <p>
                Thorough documentation does not change your coverage — it
                changes how cleanly the claim moves. A well-documented
                loss reaches a scope of work faster, resolves
                disagreements on specific line items more quickly, and
                tends to see fewer surprises when hidden damage is found
                behind drywall or under flooring. A thinly documented
                loss frequently circles back with questions the
                homeowner can no longer answer because the material is
                already in a dumpster. The goal of this guide is to
                help you avoid the second outcome.
              </p>
            </div>
          </div>
        </section>

        {/* GEAR */}
        <section id="gear" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Two"
              title="Camera and Phone Setup Before You Start"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Your phone is the right tool for almost every homeowner
                water loss. A dedicated camera is not necessary, and in
                fact phones have a real advantage: the images are
                automatically timestamped and geotagged, which is
                exactly the metadata an adjuster appreciates seeing.
                Before you begin shooting, take thirty seconds to
                confirm a few settings.
              </p>
              <p>
                <strong>Date and time.</strong> Make sure your phone is
                set to automatic time via the network. A photo with an
                incorrect clock is worse than a photo with no clock at
                all, because it can undermine the credibility of the
                whole set.
              </p>
              <p>
                <strong>Location services for the camera.</strong> On
                both iOS and Android, allow the camera app to use
                location while in use. This embeds GPS coordinates in
                the EXIF data and is the easiest way for an adjuster to
                confirm that photos were taken at the insured address.
              </p>
              <p>
                <strong>Resolution.</strong> Shoot at your phone&rsquo;s
                native full resolution, not a reduced setting. Close-up
                detail matters — a thumbnail-sized image of a moisture
                stain is nearly useless when an adjuster wants to zoom
                in two days later.
              </p>
              <p>
                <strong>Flash and lighting.</strong> Turn on the flash
                for dark basements, closets, and under-sink spaces.
                Where possible, supplement with a work light or even a
                second phone&rsquo;s flashlight held by a family
                member. Dimly lit photos of wet drywall tell the
                adjuster almost nothing.
              </p>
              <p>
                <strong>Storage and backup.</strong> Before you take
                anything, confirm you have enough free storage on your
                phone for several hundred photos and a few minutes of
                video. If cloud backup is enabled (iCloud Photos,
                Google Photos), even better — the originals are
                replicated off-device immediately.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNIQUE */}
        <section
          id="technique"
          className="bg-[#f7f7f7]"
          style={{ padding: '80px 0' }}
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Three"
              title="Wide-to-Tight Photography"
              intro="The single technique that separates a clean photo set from a confusing one."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Professional loss photographers and many claims
                adjusters use a wide-to-tight pattern, and it is easy
                to copy. For every area of damage, shoot three scales
                of image in sequence: a wide shot that shows the room
                from across the space, a medium shot that frames the
                affected area within its surroundings, and a close-up
                that fills the frame with the actual damage. This
                approach gives an adjuster three things at once:
                context (where in the room is this?), relationship
                (what is around it?), and detail (what exactly am I
                looking at?).
              </p>
              <p>
                The wide-to-tight pattern also protects you. A single
                close-up photo of a wet baseboard is evidence that the
                baseboard was wet, but it is not evidence of where in
                the house that baseboard was or how it related to the
                source. The adjuster is left trusting your verbal
                description. The wide shot removes the ambiguity and
                ties the close-up to a specific location.
              </p>
              <p>
                Apply the <strong>four walls plus ceiling plus floor
                rule</strong> for every affected room. Stand in one
                corner and shoot the two opposing walls. Move to the
                opposite corner and shoot the other two. Add one shot
                straight up at the ceiling and one straight down at
                the floor. That is six baseline images per room
                before you have photographed any specific damage.
                Then walk the perimeter and capture each affected
                spot in wide-to-tight sequence.
              </p>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section id="checklist" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Four"
              title="The Room-by-Room Photo Checklist"
            />
            <div className="max-w-[820px] mx-auto">
              <div
                className="p-8"
                style={{
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
                  backgroundColor: '#ffffff',
                }}
              >
                <h3
                  className="text-[#222222] text-lg font-semibold mb-4"
                  style={{ letterSpacing: '-0.44px' }}
                >
                  For every affected room, capture:
                </h3>
                <ul className="list-none p-0 m-0 space-y-3 text-[#3c3c3c] text-[15px] leading-[1.7]">
                  <li>
                    <strong>Six baseline shots</strong> — four walls,
                    ceiling, and floor, taken before any specific
                    damage photos.
                  </li>
                  <li>
                    <strong>The source</strong> — the burst pipe, the
                    failed hose, the stained ceiling above, the
                    overflowing appliance, or the high-water mark.
                  </li>
                  <li>
                    <strong>Water lines on walls and cabinets</strong>{' '}
                    — use a tape measure in frame to give scale, and
                    shoot the tape both extended and in context.
                  </li>
                  <li>
                    <strong>Flooring</strong> — every type of flooring
                    material affected, including transitions between
                    rooms where water may have traveled.
                  </li>
                  <li>
                    <strong>Baseboards and trim</strong> — close-ups of
                    any swelling, staining, or separation from the
                    wall.
                  </li>
                  <li>
                    <strong>Cabinets and millwork</strong> — open every
                    door and drawer, photograph the interior and the
                    bases, and document anything touching the wet
                    area.
                  </li>
                  <li>
                    <strong>Closets and storage</strong> — open every
                    closet on or near the affected area and capture
                    what was inside at floor level.
                  </li>
                  <li>
                    <strong>HVAC registers and returns</strong> — if
                    ducting may have been exposed to water, document
                    it before anyone opens it.
                  </li>
                  <li>
                    <strong>Ceiling and floor above/below</strong> —
                    upstairs leaks affect multiple floors; document
                    both sides of the damage path.
                  </li>
                  <li>
                    <strong>Personal property in place</strong> —
                    before anything is moved, photograph contents
                    where they sat when the water reached them.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section id="video" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Five"
              title="The Narrated Video Walkthrough"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                After the still photos are done, record a single video
                walkthrough of the loss. Keep it short — two to five
                minutes is usually enough for a single-room loss, and
                eight to ten for a whole-basement event. Start at the
                front door or the source of water, narrate where you
                are, and walk slowly through the affected areas.
                Describe what you are seeing in plain language: the
                room, the item, the type of damage, and any relevant
                context.
              </p>
              <p>
                Resist the temptation to editorialize or speculate
                about causes. Stick to what you can see. Good
                narration sounds like: &ldquo;This is the basement
                bedroom. The carpet is saturated from about here to
                the closet. The drywall has a visible waterline about
                six inches up. Inside the closet, a box of photo
                albums was sitting on the floor — I&rsquo;ll pull it
                out in a moment.&rdquo; That is useful. Bad narration
                sounds like: &ldquo;Our insurance better cover this
                because we just paid the premium last month.&rdquo;
                That is a distraction and a claims examiner will skip
                past it.
              </p>
              <p>
                Hold the phone horizontally (landscape) and move
                slowly. Sudden sweeps and fast zooms make it hard for
                an adjuster to see anything. When you stop at an item
                of interest, pause for two or three seconds on it
                before moving on.
              </p>
            </div>
          </div>
        </section>

        {/* MOISTURE */}
        <section id="moisture" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Six"
              title="Moisture Readings: What They Are and Who Takes Them"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                A moisture reading is a measurement, usually taken
                with a pin-type or pinless meter, that quantifies how
                much water is in a material at a specific point. A dry
                interior wall typically reads in the single digits on
                a wood-equivalent scale. A freshly soaked wall can
                read at or above the saturation point. The numbers
                themselves are less important than the pattern they
                create when recorded over time: readings that decline
                day over day are proof that drying is working and the
                structure is returning to normal.
              </p>
              <p>
                Homeowners are not expected to take moisture readings,
                and most do not own a meter. This is the piece of the
                documentation where a qualified restoration contractor
                adds the most value. During mitigation, the contractor
                establishes a dry standard for each material class,
                takes readings at labeled locations, and logs those
                readings daily in a format that adjusters recognize.
                Thermal imaging often accompanies the readings and can
                visually map where hidden moisture sits behind walls
                before any demolition.
              </p>
              <p>
                If a contractor is on site, ask them directly whether
                they will be producing a daily drying log and whether
                a copy will be included with the final file. The
                answer should be yes, and the file should travel with
                the claim from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENTS */}
        <section
          id="contents"
          className="bg-[#f7f7f7]"
          style={{ padding: '80px 0' }}
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Seven"
              title="Contents and Personal Property"
              intro="Contents are notoriously easy to forget and notoriously important."
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Structure claims are one conversation; contents
                claims are another. The structure conversation is
                about drywall, flooring, and framing. The contents
                conversation is about everything that was in the
                rooms when the water arrived: furniture,
                electronics, rugs, clothing, books, mattresses,
                appliances, decor, and — more often than anyone
                expects — items stored on basement shelves and in
                closets. Contents are documented the same way
                structure is: wide-to-tight photos, in place, before
                anything is moved.
              </p>
              <p>
                Open every drawer, every closet, and every cabinet
                near the affected area. Photograph the interior
                before removing anything. A closet on the opposite
                side of the room from the obvious damage may still
                have a wet base, because water travels along the
                floor under baseboards. The inside of a dresser whose
                bottom drawer is soaked matters just as much as the
                visible exterior.
              </p>
              <p>
                Build a simple inventory spreadsheet. The columns
                that serve homeowners best are: item description,
                location in the home, approximate age, approximate
                purchase price, replacement cost, condition before
                the loss, condition after the loss, and whether you
                have a receipt or photo. A starter template might
                look like this:
              </p>
              <div
                className="p-6 my-2"
                style={{
                  borderRadius: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(34,34,34,0.08)',
                }}
              >
                <code className="text-[#222222] text-[13px] leading-[1.7] block whitespace-pre-wrap font-mono">
                  Item | Location | Age | Purchase $ | Replace $ | Before | After | Receipt?
                  {'\n'}Sectional sofa | Basement family | 4 yrs | 1,800 | 2,200 | Good | Saturated | Yes (email)
                  {'\n'}Area rug 8x10 | Basement family | 2 yrs | 450 | 500 | Good | Saturated | No
                  {'\n'}Photo album box | Basement closet | 20+ yrs | n/a | n/a | Good | Wet | Irreplaceable
                </code>
              </div>
              <p>
                Receipts, email order confirmations, and credit card
                statements are all acceptable forms of proof of
                purchase. If you do not have any of those, a photo
                of the item in place before the loss is the next
                best thing, which is one of the reasons those
                six-baseline room shots matter.
              </p>
            </div>
          </div>
        </section>

        {/* NARRATIVE */}
        <section id="narrative" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Eight"
              title="The Written Narrative and File Organization"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Photos and video answer <em>what</em>. A short
                written narrative answers <em>how</em> and{' '}
                <em>when</em>. Open a note on your phone or a
                document on a computer and write a timeline: when
                you first noticed the water, what alerted you, what
                you saw when you first reached the source, what you
                did in the first hour, who you called, and in what
                order. Keep it factual. A narrative that says
                &ldquo;I heard a pop from the laundry room at about
                10:40 p.m. and found water spraying from the back
                of the washer supply hose&rdquo; is gold. A
                narrative that speculates about who is at fault is
                not useful and can complicate the claim.
              </p>
              <p>
                Organize the files in a single folder named with
                the date of loss. Inside, create subfolders for
                photos, video, inventory, and any correspondence
                (emails from the carrier, text messages with the
                contractor, receipts for emergency supplies). Name
                photo files in a way that preserves chronology —
                most phones already do this automatically by
                filename. Back the whole folder up to cloud
                storage or an external drive as soon as you have
                it, and do not delete the originals from your
                phone until the claim is closed.
              </p>
              <p>
                When you send the file to the adjuster, send
                originals where possible rather than screenshots.
                Screenshots strip the EXIF metadata and make the
                photos less useful for verification.
              </p>
            </div>
          </div>
        </section>

        {/* AVOID */}
        <section id="avoid" className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Nine"
              title="What to Avoid"
            />
            <div className="max-w-[820px] mx-auto">
              <Callout title="Common documentation mistakes" tone="warn">
                <ul className="list-disc pl-5 m-0 space-y-3">
                  <li>
                    <strong>Staging photos.</strong> Do not move items
                    around to make the damage look worse or better than
                    it is. Shoot the scene as it is. Staging undermines
                    the credibility of the entire file.
                  </li>
                  <li>
                    <strong>Throwing away damaged materials prematurely.</strong>{' '}
                    Saturated carpet, wet drywall, ruined baseboards —
                    none of it should hit a dumpster until the adjuster
                    or the contractor has documented it. Store removed
                    materials in a garage or driveway area until clearance
                    is given.
                  </li>
                  <li>
                    <strong>Deleting items before inspection.</strong> A
                    waterlogged mattress may feel worthless the moment
                    you pull it out, but it is still part of the contents
                    claim. Photograph it, move it to a staging area, and
                    let the adjuster confirm before disposal.
                  </li>
                  <li>
                    <strong>Sending photos through apps that strip metadata.</strong>{' '}
                    Some chat apps and social platforms recompress images
                    and discard EXIF data. Use email attachments, cloud
                    links to the original files, or a direct transfer via
                    cable.
                  </li>
                  <li>
                    <strong>Waiting several days to start.</strong>{' '}
                    Memory fades fast. Begin the written narrative on the
                    same day as the loss, even if it is only a few
                    sentences.
                  </li>
                  <li>
                    <strong>Speculating about cause.</strong> Describe
                    what you saw and heard. Let the adjuster and the
                    contractor determine the cause from the physical
                    evidence.
                  </li>
                </ul>
              </Callout>
            </div>
          </div>
        </section>

        {/* CONTRACTOR */}
        <section id="contractor" className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[1120px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Step Ten"
              title="How a Restoration Contractor Supplements Your Documentation"
            />
            <div className="max-w-[820px] mx-auto text-[#3c3c3c] text-[17px] leading-[1.75] space-y-5">
              <p>
                Homeowner documentation and contractor documentation
                are complementary rather than redundant. The homeowner
                captures the pre-cleanup scene, the personal property,
                the written timeline, and the human context. The
                contractor adds the technical layer: labeled moisture
                readings, thermal images of hidden wet areas, a daily
                drying log, photographs of materials before and after
                removal, an itemized scope of work, and (usually) an
                Xactimate estimate written in a format adjusters
                already know how to read.
              </p>
              <p>
                On the jobs we handle, we produce a claim-ready file
                that travels with the project from the first site
                visit to final reconstruction, and we share it with
                whichever parties the homeowner asks us to share it
                with. We do not negotiate claims, represent homeowners
                in disputes with carriers, or interpret policy
                language — those activities belong to public adjusters
                and attorneys under Michigan licensing law, and we
                stay on the right side of that line. What we can do is
                make sure the facts of the loss and the work performed
                are recorded in a way that holds up under scrutiny.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-[#f7f7f7]" style={{ padding: '64px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <Disclaimer />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6">
            <PillarSectionHeading
              eyebrow="Answers"
              title="Documentation FAQ"
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
        <section className="bg-[#f7f7f7]" style={{ padding: '80px 0' }}>
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2
              className="text-[#222222] font-bold mb-4"
              style={{
                fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
                letterSpacing: '-0.44px',
              }}
            >
              Dealing with a water loss right now?
            </h2>
            <p className="text-[#6a6a6a] text-lg mb-8">
              Call{' '}
              <a
                href={PHONE_HREF}
                className="text-[#ff385c] font-semibold no-underline"
              >
                {PHONE}
              </a>{' '}
              and we will dispatch a crew. Drying, demolition, and
              reconstruction under one roof — with a claim-ready
              documentation file produced alongside the work.
            </p>
            <HeroCTA />
            <p className="text-[#6a6a6a] text-sm mt-8">
              {BIZ_NAME} &middot; {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </p>
            <p className="text-[#9a9a9a] text-[13px] mt-4 max-w-[620px] mx-auto">
              This article is educational only and is not legal or
              insurance advice. For questions about coverage or policy
              terms, contact your licensed insurance agent or carrier.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
