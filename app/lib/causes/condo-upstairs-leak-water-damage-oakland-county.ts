import type { CausePageData } from './types'

// =============================================================================
// /condo-upstairs-leak-water-damage-oakland-county
// Angle: Birmingham and Troy condos and townhomes with upgraded finishes,
// the master-policy-vs-HO6 liability question. Facts reused from Prime's
// upstairs-neighbor-water-leak.ts -- wording rewritten independently,
// 2026-10-18, to keep shingle overlap under the site's 20 percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'condo-upstairs-leak-water-damage-oakland-county',
  title: 'Upstairs Condo Leak: Who Pays in a Birmingham or Troy Condo',
  description:
    'Water dropping through the ceiling from the condo above in Birmingham or Troy? Who typically owes what, the first calls to make, and how we dry two units without losing upgraded finishes.',
  eyebrow: 'UPSTAIRS UNIT LEAK · CONDO & TOWNHOME',
  h1: 'Water is coming down from the condo above yours',
  lede:
    'A leak from an upstairs unit in a Birmingham or Troy condo needs two things handled at once: the source stopped, and both affected units dried before upgraded flooring, millwork, or cabinetry suffer damage they did not have to suffer.',
  steps: [
    {
      title: 'Reach the unit above, or the association',
      text: 'Knock upstairs, or dial the property manager or HOA\'s emergency contact. Most associations staff one specifically for this situation.',
    },
    {
      title: 'No answer and water still running? Call for a check',
      text: 'If the source will not stop and nobody upstairs or at the association is reachable, use the local non-emergency line for a welfare check.',
    },
    {
      title: 'Close your own shutoff only if your own plumbing failed',
      text: 'If your unit is also leaking from its own fixtures, shut your main. Never open or close a valve inside a neighbor\'s unit without their knowledge.',
    },
    {
      title: 'Clear upgraded finishes out of the path',
      text: 'Furniture and electronics come off a wet floor first, and anything valuable comes out from under a sagging or staining ceiling next.',
    },
    {
      title: 'Document before repairs start in either unit',
      text: 'Photograph the ceiling, the wall, and the floor, with a visible timestamp, before cleanup begins above or below.',
    },
    {
      title: 'Get readings in both units, not just one',
      text: 'A moisture check of the ceiling below and the floor above gives both owners and both insurers the same starting facts.',
    },
  ],
  quickAnswer: {
    question: 'Who is responsible when water comes down from the condo above mine?',
    answer:
      'Three policies can be in play at once: the association\'s master policy, the upstairs owner\'s coverage, and your own HO-6 policy. Where one stops and another starts is set by your building\'s master deed and bylaws, and no two associations draw that line identically. A homeowners policy commonly covers sudden and accidental water damage, and the carrier decides. Read your documents and ask your agent before assuming who pays.',
  },
  sections: [
    {
      eyebrow: 'Where the water travels',
      heading: 'Why the stain rarely sits directly under the source',
      paragraphs: [
        'A condo floor is an assembly, not a single surface: subfloor, then joists or trusses, then insulation, then a ceiling of drywall or plaster below. Water released above runs sideways across the subfloor and along the joist cavity until it reaches a low point or a gap, not straight downward.',
        'Hardwood installed over the original subfloor in a Birmingham or Troy unit can actually hold that water above the subfloor longer than carpet would, which changes how far it migrates before it finally finds a way through. A sink leak in the unit above can therefore show up as a stain over a bedroom closet below, well off from the fixture that actually caused it.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'The money question',
      heading: 'Association, upstairs owner, or your own coverage: who pays?',
      paragraphs: [
        'Up to three policies can touch a single leak, and which one responds depends on where the water originated and what it damaged. The association\'s master policy typically handles shared structural elements and, in many buildings, the developer-installed drywall and flooring. The upstairs owner\'s own HO-6 policy covers their unit and can apply if their negligence is the cause. Your HO-6 covers your belongings and, depending on terms, any finishes you upgraded beyond the original build.',
        'The Michigan Condominium Act requires every project to carry a master deed and bylaws, and those specific documents, not a general assumption, draw the line between what the association insures and what falls to each owner. Two buildings a mile apart can split that line in entirely different places. Pull your master deed, or ask the association for it, and confirm with your own agent.',
      ],
    },
    {
      eyebrow: 'Upgrades',
      heading: 'Does the master policy cover hardwood or cabinetry you installed yourself?',
      paragraphs: [
        'Generally not. A master policy is built around the unit as the developer delivered it, so hardwood over original carpet, a custom closet system, or added built-in cabinetry typically falls outside it. Whether that gap is covered depends on your own HO-6 and whether your master deed assigns upgrades to the unit owner, which is the specific question worth settling before a leak, not after.',
        'Ask your agent directly whether your policy carries coverage for improvements and betterments. A policy sized to builder-grade finishes may underpay for a genuine hardwood or stone upgrade.',
      ],
    },
    {
      eyebrow: 'Two units at once',
      heading: 'Drying a shared cavity without losing upgraded flooring',
      paragraphs: [
        'The floor-ceiling assembly between two units is one cavity, so drying from only one side leaves the other wet. Both units get moisture readings at every visit, and the plan reflects what each one actually has: hardwood gets floor-mat drying in place where readings support it, while builder-grade carpet typically comes out with its pad.',
        'Equipment runs in both spaces wherever access allows, and nobody closes a ceiling or refinishes a floor until both sides hit a dry standard. A stained ceiling closed up while it still reads wet behind it is exactly how a leak becomes a mold job a few weeks later.',
      ],
      photoIndex: 1,
    },
    {
      eyebrow: 'Paper trail',
      heading: 'What to record before anyone starts repairs',
      paragraphs: [
        'Get dated photos of the ceiling, wall, and floor from multiple angles. Log the time you first noticed water and the time it was actually stopped. Note who you spoke with at the association or management company and when.',
        'Insist on a moisture reading before drywall is cut, plaster is opened, or paint is touched anywhere. A same-day reading carries more weight with every insurer involved than a recollection written a week out.',
      ],
      bullets: [
        'Dated photos and video of ceiling, wall, and floor',
        'Timestamp for first notice and for when the source stopped',
        'Name and time of the HOA or management contact',
        'A professional moisture reading, taken before repairs start',
      ],
      photoIndex: 2,
    },
  ],
  finishSaving: {
    heading: 'Protecting upgraded finishes in a shared cavity',
    intro: 'Equipment and schedule are set to match what each unit actually has, not a builder-grade default.',
    items: [
      {
        title: 'Hardwood dried in place where readings allow',
        text: 'Upgraded flooring over the original subfloor gets moisture-mat drying instead of automatic removal, confirmed with surface and subfloor readings both.',
      },
      {
        title: 'Custom millwork evaluated on its own',
        text: 'Built-in cabinetry and closet systems added beyond the developer specification are assessed independently rather than written off along with surrounding builder-grade material.',
      },
      {
        title: 'Two-unit scheduling handled directly',
        text: 'We coordinate timing with both owners and the property manager so access to one unit does not stall the drying timeline in the other.',
      },
      {
        title: 'No refinishing before readings confirm dry',
        text: 'Sanding, sealing, or finishing any flooring waits until the wood and the subfloor beneath both test at a dry standard.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a condo ceiling to check for water from the unit above',
      caption: 'Readings in both units confirm how far the water actually spread.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/containment-barrier-zipper-door.webp',
      alt: 'A zippered containment barrier set up in a condo hallway during a water damage dry-out',
      caption: 'Containment keeps drying work separate from shared hallways and common areas.',
      width: 1200,
      height: 1600,
    },
    {
      src: '/images/causes/thermal-camera-moisture-check.webp',
      alt: 'A technician uses a thermal imaging camera to scan a condo hallway floor for hidden moisture',
      caption: 'A thermal scan traces how far water traveled before it dropped through the ceiling.',
      width: 969,
      height: 1200,
    },
  ],
  faqs: [
    {
      q: 'The unit above had a washer overflow into my condo. Who pays?',
      a: 'It depends on your master deed, your bylaws, and each specific policy. The association\'s master policy can cover original ceiling and drywall it reaches. The upstairs owner\'s liability coverage can apply if negligence caused the overflow. Your own HO-6 covers your belongings and whatever upgrades the master policy does not reach. Notify the HOA and your agent the same day.',
    },
    {
      q: 'Will my HO-6 cover hardwood I put in over the original carpet?',
      a: 'Only if your policy specifically includes improvements and betterments coverage, the insurance term for finishes added beyond the building\'s original specification. A master policy generally will not cover a self-installed upgrade. Confirm this with your agent before assuming it is included.',
    },
    {
      q: 'What actually separates the master policy from my HO-6?',
      a: 'The master policy is the association\'s building-wide coverage, usually for common elements and the unit\'s original developer-installed finish. Your HO-6 covers your belongings, upgrades beyond that original finish, and loss of use. The two work together on most claims, with your master deed setting the dividing line.',
    },
    {
      q: 'Can I force the upstairs owner to pay me directly?',
      a: 'You can request it in writing, but you cannot compel it. Whether their insurer owes you is a liability determination the insurers make based on negligence. File under your own policy first so repairs move forward regardless of that outcome.',
    },
    {
      q: 'Will drying equipment damage upgraded hardwood?',
      a: 'No. Drying mats and air movers are built to extract moisture from flooring, not stress it further. We confirm with readings throughout, and nothing gets sanded or sealed until both the wood and the subfloor beneath it test dry.',
    },
    {
      q: 'Is a shared-wall pipe leak the association\'s responsibility?',
      a: 'Often, since a pipe inside a common wall or chase is typically a shared element the association insures. The exact classification still comes from your building\'s master deed and bylaws, so confirm with your property manager rather than assuming.',
    },
    {
      q: 'How do you dry two units at once without one side staying damp?',
      a: 'We read moisture in both units at every visit and run equipment on both sides of the cavity wherever access allows. Closing a ceiling or refinishing flooring before both readings hit dry standard is how a leak turns into a mold problem down the road.',
    },
    {
      q: 'Can original plaster in an older converted Birmingham condo be matched after a repair?',
      a: 'Usually, yes. We finish a repaired section to match the surrounding plaster texture and profile rather than defaulting to a visible drywall patch, which matters most in buildings converted from older apartment stock where the original plaster largely remains.',
    },
  ],
  related: [
    { href: 'toilet-overflow-water-damage-oakland-county', label: 'Toilet overflow water damage' },
    { href: 'bathtub-overflow-water-damage-oakland-county', label: 'Bathtub overflow and shower pan leak damage' },
    { href: 'ac-furnace-condensate-leak-water-damage-oakland-county', label: 'AC and furnace condensate leak damage' },
    { href: 'services/ceiling-water-damage-repair', label: 'Ceiling water damage repair' },
    { href: 'insurance-claims-help', label: 'Insurance claims help' },
  ],
  sources: [
    { label: 'Michigan Condominium Act, MCL 559.101 (short title; Act 59 of 1978), Michigan Legislature', href: 'https://www.legislature.mi.gov/documents/mcl/pdf/mcl-559-101.pdf' },
    { label: 'EPA: A Brief Guide to Mold, Moisture, and Your Home', href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' },
    { label: 'Michigan Department of Insurance and Financial Services (DIFS)', href: 'https://www.michigan.gov/difs' },
  ],
  serviceName: 'Upstairs Condo Leak Water Damage Cleanup, Oakland County',
}

export default data
