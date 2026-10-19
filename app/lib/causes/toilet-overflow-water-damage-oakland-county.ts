import type { CausePageData } from './types'

// =============================================================================
// /toilet-overflow-water-damage-oakland-county
// Angle: upstairs bathrooms in two-story Bloomfield Hills, Birmingham, and
// Troy homes with tile over mud-bed floors, plaster ceilings, and formal
// rooms below. Facts reused from Prime's
// toilet-overflow-water-damage-cleanup.ts (bowl vs. tank water category
// distinction, wax ring subfloor mechanism, IICRC S500 time/temperature
// language) -- wording rewritten independently, 2026-10-18, to keep shingle
// overlap with the Prime source under the site's 20 percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'toilet-overflow-water-damage-oakland-county',
  title: 'Toilet Overflow Above a Formal Room: Oakland County, MI',
  description:
    'An upstairs toilet overflow in a Bloomfield Hills or Birmingham home can reach a tile floor and a plaster ceiling in a formal room below. What we remove, what we dry, and how we rebuild to match.',
  eyebrow: 'TOILET OVERFLOW · TILE & PLASTER',
  h1: 'An upstairs toilet overflowed into a formal room below',
  lede:
    'Not every toilet overflow is the same loss. Tank water and bowl water get different handling under restoration standards, and in a two-story Bloomfield Hills or Birmingham home that difference decides what happens to a tiled floor set in mortar and the plaster ceiling of the room directly beneath it.',
  steps: [
    {
      title: 'Cut the flow',
      text: 'Reach into the tank and hold the flapper closed, or turn the small angle stop behind the toilet clockwise until it stops.',
    },
    {
      title: 'Go to the main if the angle stop is frozen',
      text: 'Old shutoff valves seize. Close the house main rather than forcing a stuck valve and risking a worse leak.',
    },
    {
      title: 'Evacuate the room underneath',
      text: 'If the ceiling below is wet, bowed, or staining, move people, rugs, and breakables out from under it immediately.',
    },
    {
      title: 'Remove soft items from the bathroom floor',
      text: 'Towels, mats, and cardboard pick up water fast. If any of it touched bowl water, plan to discard it rather than clean it.',
    },
    {
      title: 'Document the scene before you clean it',
      text: 'Wide shots and close-ups of the standing water, the fixture, and the ceiling below, timestamped, before anyone mops or moves anything.',
    },
    {
      title: 'Request readings on both floors',
      text: 'A meter check of the tile and mortar bed above, and the plaster or drywall below, is what actually scopes the repair, not a visual guess.',
    },
  ],
  quickAnswer: {
    question: 'Is water from a toilet overflow Category 1, 2, or 3?',
    answer:
      'That depends entirely on where it came from, not how it looks. Tank water that never reached the bowl is Category 2. Water that crested the bowl rim, or backed up the drain, is Category 3 no matter how clear it appears, because the bowl and trap hold baseline contamination. The classification drives everything else: what tile and plaster can be dried versus what has to come out.',
  },
  sections: [
    {
      eyebrow: 'The sorting question',
      heading: 'Bowl water or tank water: why it matters first',
      paragraphs: [
        'Two overflows can leave an identical puddle on an identical bathroom floor and still call for two completely different scopes. A cracked tank, a bad fill valve, or a split supply hose releases water that the bowl never touched. That water starts out clean and is classed Category 2 the moment it hits the floor.',
        'Water that spilled over the bowl rim during a flush, or rose up through the drain line, is Category 3 starting from minute one, visible waste or not, because the bowl and the trap beneath it carry contamination regardless of appearance. This classification is the first thing checked on arrival, and it determines which materials get worn gloves to handle, which get disinfected, and which simply get removed.',
      ],
      bullets: [
        'Tank-side failures (cracked tank, bad fill valve, split supply line): Category 2',
        'Bowl-side events (overflow mid-flush, waste present): Category 3',
        'Drain backup that surfaced through the toilet: Category 3',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'The quiet failure',
      heading: 'A failed wax ring rots a tile subfloor with no puddle in sight',
      paragraphs: [
        'The wax ring seals the toilet base to the floor flange beneath it. When it fails, it almost never produces a flood. Instead it drips a small volume with every single flush, directly into the subfloor surrounding the flange, which happens to be the largest unsealed opening in the room, sitting at the lowest point of the floor.',
        'With tile set over a traditional mortar bed, that drip soaks into the bedding mortar and the plywood under it long before any sign reaches the tile surface, because the mortar itself holds the moisture. A toilet with even a slight rock at the base is often telling you the mortar bed or subfloor underneath has already gone soft, and it is worth checking that before the rock turns into a full breach.',
      ],
      callout: 'A rocking toilet is not cosmetic. Get the subfloor checked before the rock becomes a hole.',
      photoIndex: 1,
    },
    {
      eyebrow: 'The room below',
      heading: 'What happens to a plaster ceiling under an upstairs bathroom?',
      paragraphs: [
        'A typical two-story colonial in Birmingham or Bloomfield Hills has the upstairs bath built as tile over mortar, over plywood subfloor, over joists that frame the ceiling of whatever sits below, frequently a dining room, library, or front hall with its original plaster and crown detail intact.',
        'Water that reaches that subfloor spreads sideways along the top of the joists before it finds a way down, usually at the flange penetration or a register boot, which is why a ceiling stain often appears a day or two after the event and rarely lines up directly under the toilet. Plaster responds differently than drywall here: the water degrades the bond at the keys locking the plaster to its lath, and a section can detach from the ceiling before any stain is visible at all.',
      ],
      photoIndex: 2,
    },
    {
      eyebrow: 'Dry versus discard',
      heading: 'Deciding what stays and what goes',
      paragraphs: [
        'The water category, not the room\'s appearance, makes this call. On a Category 2 tank event, mortar-set tile, framing, and solid subfloor can generally be dried in place if the response is quick. On a Category 3 event, porous materials in the affected zone come out rather than dry in place, because there is no way to verify contamination has been cleared from inside a porous material.',
      ],
      table: {
        caption: 'Typical outcome by material and water category',
        columns: ['Material', 'Category 2 (tank)', 'Category 3 (bowl / sewage)'],
        rows: [
          ['Tile over mortar bed', 'Dried in place', 'Cleaned and disinfected, or removed if grout is compromised'],
          ['Plaster ceiling below', 'Checked at the keys, left if sound', 'Cut and removed where contaminated water reached it'],
          ['Crown molding, millwork', 'Kept if it tests dry', 'Evaluated separately, kept wherever readings allow'],
          ['Subfloor and framing', 'Dried in place', 'Disinfected and dried, or cut out if rotted'],
          ['Mats, towels, cardboard', 'Often kept if caught early', 'Discarded'],
        ],
      },
    },
    {
      eyebrow: 'Insurance',
      heading: 'Does a homeowners policy pay for toilet overflow damage?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides. A burst supply line, a cracked tank, or an overflow during one flush generally reads as a sudden event to an adjuster. A wax ring that had been dripping for months before the subfloor finally gave out is a different story, and that kind of long-term seepage is commonly excluded as maintenance rather than loss.',
        'We scope the claim from facts: moisture readings, dated photographs, and an itemized list, which is what actually moves a decision rather than a description from memory.',
      ],
      callout: 'Confirm coverage and limits with your own carrier and policy. We never promise an outcome.',
    },
  ],
  finishSaving: {
    heading: 'Keeping the tile, the mortar bed, and the plaster below intact',
    intro: 'A default demolition is not the starting point. Readings decide what opens and what stays closed.',
    items: [
      {
        title: 'Mortar checked, not assumed wet',
        text: 'We test moisture in the bedding mortar under tile rather than presuming the floor has to be pulled, since mortar-set tile over a Category 2 loss often dries where it sits.',
      },
      {
        title: 'Plaster evaluated at the lath connection',
        text: 'A formal room\'s plaster ceiling gets checked at the keys first, so only the section that has actually let go gets opened.',
      },
      {
        title: 'Trim handled around, not through',
        text: 'Original crown and millwork near a repair zone are tested on their own and worked around wherever the readings allow it.',
      },
      {
        title: 'Rebuild matched to the original profile',
        text: 'When a ceiling section does need to come down, the replacement is finished to match the surrounding plaster texture rather than left as a visible drywall patch.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/containment-barrier-zipper-door.webp',
      alt: 'A zippered plastic containment barrier set up in a hallway during a water damage dry-out',
      caption: 'Containment keeps a Category 3 work area separate from the rest of the home during cleanup.',
      width: 1200,
      height: 1600,
    },
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a plaster ceiling to check for hidden water damage',
      caption: 'A reading at the plaster keys decides whether a ceiling section needs to come down.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/room-containment-drying.webp',
      alt: 'A sealed plastic containment setup in a room during a water damage dry-out',
      caption: 'Containment and air movers run in the affected room while the floor and ceiling dry.',
      width: 1201,
      height: 1200,
    },
  ],
  faqs: [
    {
      q: 'Is every toilet overflow automatically a Category 3 loss?',
      a: 'No. Water that leaked or overflowed from the tank and never touched the bowl is Category 2. Water that spilled over the bowl rim or backed up from the drain is Category 3 regardless of clarity, because the bowl and trap hold baseline contamination.',
    },
    {
      q: 'Can tile set over a mortar bed survive an overflow?',
      a: 'Often, on a Category 2 tank event caught promptly, because the mortar and subfloor beneath can be dried in place. A Category 3 event changes that math, since porous grout and contaminated mortar are more often removed than dried.',
    },
    {
      q: 'Why did the ceiling crack rather than just show a stain?',
      a: 'Plaster bonds to wood or metal lath through small plugs called keys. Water weakens that bond before a visible stain necessarily forms, so a crack or sag can mean the keys have already begun to fail, which is structural, not cosmetic.',
    },
    {
      q: 'What separates a wax ring leak from a burst supply line?',
      a: 'A burst supply line is sudden and obvious, several gallons at once and then a steady flow until someone finds the valve. A wax ring leak is a trickle at every flush, going straight into the subfloor around the flange with nothing visible on the surface. One is an emergency; the other is a rotted subfloor nobody noticed.',
    },
    {
      q: 'Will insurance pay for this?',
      a: 'A homeowners policy commonly covers sudden and accidental water damage, which generally includes a burst line or a single overflow event. Months of unnoticed wax ring seepage is commonly treated as maintenance and excluded. The carrier decides based on your policy and the documented cause.',
    },
    {
      q: 'Can original crown molding near the damage be saved?',
      a: 'Usually, if it was not directly saturated. We test trim near the affected plaster separately and route the repair boundary around millwork that reads dry.',
    },
    {
      q: 'My upstairs toilet rocks a little but has never overflowed. Worth checking?',
      a: 'Yes. A slight rock at the base often means the mortar bed or subfloor underneath has already softened from a slow wax ring drip. Catching it now is far less work than catching it after the floor gives way.',
    },
    {
      q: 'How long until the area is dry?',
      a: 'A Category 2 event caught within hours with no subfloor involvement can be dry in two to three days. Once a mortar bed, subfloor, or plaster cavity is involved, drying runs longer because those materials release moisture slowly. A Category 3 loss adds disinfection time before drying equipment even goes in.',
    },
  ],
  related: [
    { href: 'bathtub-overflow-water-damage-oakland-county', label: 'Bathtub overflow and shower pan leak damage' },
    { href: 'condo-upstairs-leak-water-damage-oakland-county', label: 'Upstairs condo or unit leak' },
    { href: 'sink-leak-water-damage-oakland-county', label: 'Sink leak water damage' },
    { href: 'services/ceiling-water-damage-repair', label: 'Ceiling water damage repair' },
    { href: 'services/contents-pack-out-storage', label: 'Contents pack-out and storage' },
  ],
  sources: [
    { label: 'EPA: A Brief Guide to Mold, Moisture, and Your Home', href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' },
    { label: 'InterNACHI: The Hidden Leak Destroying Your Bathroom Floor (toilet wax seals)', href: 'https://www.nachi.org/bathroom-toilet-wax-seal-inspection.htm' },
    { label: 'Cleanfax: Practical Application, IICRC S500-2015 Key Terms (water category change over time)', href: 'https://cleanfax.com/practical-application-s500-2015-key-terms/' },
  ],
  serviceName: 'Toilet Overflow Water Damage Cleanup, Oakland County',
}

export default data
