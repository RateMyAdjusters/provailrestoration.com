import type { CausePageData } from './types'

// =============================================================================
// /bathtub-overflow-water-damage-oakland-county
// Angle: a two-story Bloomfield Hills or Birmingham home where an upstairs
// tub overflow or shower pan leak reaches a plaster or drywall ceiling below.
// Facts reused from Prime's bathtub-overflow-water-damage.ts (overflow drain
// code minimum size, shower pan flood-test requirement) -- wording rewritten
// independently, 2026-10-18, to keep shingle overlap under the site's 20
// percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'bathtub-overflow-water-damage-oakland-county',
  title: 'Bathtub Overflow or Shower Pan Leak Into a Ceiling Below',
  description:
    'An upstairs tub overflow or a slow shower pan leak in a Bloomfield Hills or Birmingham home can land on a plaster ceiling, millwork, or hardwood below. How we assess and dry it.',
  eyebrow: 'BATHTUB OVERFLOW & SHOWER PAN LEAK',
  h1: 'An upstairs tub overflowed, or a shower pan is leaking into the ceiling below',
  lede:
    'In a two-story Bloomfield Hills or Birmingham home, the bathroom above a kitchen, a library, or a formal room usually determines what the ceiling below looks like after a tub overflow or a failed shower pan. The floor assembly between the two rooms takes the water first either way.',
  steps: [
    {
      title: 'Kill the source',
      text: 'Shut the faucet or the supply valve. If a shower pan is leaking with nothing obviously running, close the house main until you can find the fixture.',
    },
    {
      title: 'Empty the room below',
      text: 'Keep people and furniture clear of any bulging, dripping, or discolored plaster or drywall overhead.',
    },
    {
      title: 'Move what sits under the stain',
      text: 'Furniture, rugs, and shelved items beneath the affected ceiling should come out before that section lets go.',
    },
    {
      title: 'Photograph both rooms',
      text: 'Timestamped shots of the bathroom water line and of the stain, sag, or crack below, before either room is touched.',
    },
    {
      title: 'Skip the fan on a failing ceiling',
      text: 'Airflow helps a flat, stable surface dry. It does nothing for a plaster or drywall section that has already lost its bond, and that call needs a professional, not a guess.',
    },
    {
      title: 'Get moisture readings in both rooms',
      text: 'A check of the bathroom floor and the ceiling cavity underneath tells you what is actually saturated before anyone decides what opens.',
    },
  ],
  quickAnswer: {
    question: 'An upstairs tub overflowed, or a shower pan is leaking into the room below. Now what?',
    answer:
      'Stop the source, clear people and furniture from the room below, and photograph the water line along with the ceiling damage. An overflow has an obvious start time and is usually straightforward to document for a claim. A shower pan leak is typically a slow, repeated seep, which carriers tend to treat differently. Either way, the floor above and the ceiling below both need a moisture reading before anything gets opened.',
  },
  sections: [
    {
      eyebrow: 'The sudden event',
      heading: 'An overflow upstairs reaching a plaster ceiling below',
      paragraphs: [
        'A full tub holds somewhere between 40 and 80 gallons, and a faucet left running past that point keeps adding water faster than the overflow opening and drain can move it together. Once it tops the rim, water spreads across the bathroom floor and seeks the lowest point, usually the seam where the tub meets the wall or floor.',
        'In an older Birmingham or Bloomfield Township home with plaster below, that water behaves differently than it would over drywall. Plaster bonds to wood or metal lath through small plugs called keys, and water breaks that bond at the keys first. A ceiling that still looks solid from below can already have failed keys, which means it can come down in a section rather than announce itself with a slow drip.',
        'Many of these homes also carry original or restored millwork, crown detail, and plaster medallions in the rooms beneath an upstairs bath, and those details change how a repair gets planned. A damaged section of plaster next to an intact medallion is not simply cut square and patched with drywall.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'The slow failure',
      heading: 'A shower pan leak, and why it goes undetected so long',
      paragraphs: [
        'The pan underneath the tile is the waterproof layer standing between a normal shower and the floor assembly. When the liner, the drain seal, or the tile and grout above it gives out, a small amount of water bypasses the surface with every single shower, rather than running down the drain as intended.',
        'Plumbing code commonly requires a pan liner to hold standing water for at least 24 hours before tile ever goes over it, which is a real bar to clear. A liner that fails after passing that test does not announce itself in the bathroom. The first clue is usually the ceiling below, or a loose or hollow-sounding tile, appearing weeks or months after the actual failure.',
      ],
      photoIndex: 1,
    },
    {
      eyebrow: 'Coverage',
      heading: 'Do carriers treat an overflow and a pan leak the same way?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides. An overflow with a clear cause and a clear start time usually matches what a carrier means by sudden.',
        'A shower pan leak is a different pattern most of the time. It ran unnoticed for weeks or months, which puts it closer to the long-term seepage that standard policies commonly exclude. The carrier weighs how long the condition existed and whether there is a record of prior staining or repeat repairs. We document exactly what we find, with photos and readings, but coverage decisions and settlement amounts rest entirely with your carrier.',
      ],
      callout: 'An overflow has a date you can point to. A shower pan leak usually does not, and that gap is exactly what a carrier is checking for.',
    },
    {
      eyebrow: 'What comes out',
      heading: 'Deciding what to remove from a plaster ceiling and what to dry',
      paragraphs: [
        'Moisture readings drive this decision, not appearance. A plaster section that tests wet at the keys and has separated from the lath comes out, because a detached section is a safety concern, not a cosmetic one. Plaster that reads dry stays, even near an obviously stained area.',
        'Millwork and crown detail near the damaged zone get their own check. Painted wood trim typically survives if it was never standing in water, and the repair boundary gets drawn around existing trim rather than through it whenever the readings allow it.',
      ],
      table: {
        caption: 'Overflow vs. pan leak in an older Birmingham or Bloomfield home',
        columns: ['', 'Tub overflow', 'Shower pan leak'],
        rows: [
          ['Onset', 'Faucet left running, overflow outpaced', 'Failed liner, cracked grout or tile, or a leaking valve'],
          ['Discovery', 'Immediate, water visible on the floor', 'Delayed: a ceiling stain, loose tile, or a plaster crack'],
          ['Plaster below', 'Keys can fail quickly if water sat before discovery', 'Keys weaken gradually over the leak\'s whole lifespan'],
          ['Carrier treatment, generally', 'Often treated as sudden and accidental', 'Often treated as gradual, commonly excluded'],
          ['Nearby millwork', 'Usually dry unless directly under the saturated zone', 'Risk scales with how long the leak ran undetected'],
        ],
      },
      photoIndex: 2,
    },
  ],
  finishSaving: {
    heading: 'Protecting plaster, millwork, and flooring below a bathroom leak',
    intro: 'Original plaster and trim in a Birmingham or Bloomfield Hills home rarely fit a standard drywall repair plan.',
    items: [
      {
        title: 'Keys checked before any section is cut',
        text: 'We press and sound the ceiling to locate where plaster has actually separated from the lath, rather than cutting a square around the visible stain.',
      },
      {
        title: 'Repairs routed around existing millwork',
        text: 'Crown detail and plaster medallions near the damaged zone are assessed independently so the repair does not remove trim that is still sound.',
      },
      {
        title: 'Flooring checked before refinishing is even discussed',
        text: 'A floor below or beside the affected bathroom gets moisture readings before anyone assumes sanding or replacement is required.',
      },
      {
        title: 'Texture matched on the rebuild',
        text: 'Where a section must come out, the replacement is finished to the surrounding plaster texture and profile rather than left as a visible patch.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/room-containment-drying.webp',
      alt: 'A sealed plastic containment barrier set up in a room during a water damage dry-out',
      caption: 'Containment keeps dust and debris out of the rest of the home while a ceiling section is opened.',
      width: 1201,
      height: 1200,
    },
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a ceiling to check for hidden water damage',
      caption: 'A reading at the plaster keys decides what comes down and what stays.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/containment-barrier-zipper-door.webp',
      alt: 'A zippered plastic containment doorway set up in a hallway during drying work',
      caption: 'A zippered containment doorway keeps the work area separate from the rest of the home.',
      width: 1200,
      height: 1600,
    },
  ],
  faqs: [
    {
      q: 'Why did the plaster ceiling crack instead of just showing a stain?',
      a: 'Plaster locks to wood or metal lath through small plugs called keys, and water weakens that bond before an obvious stain necessarily appears. A crack or sag means the keys have already started failing, a structural issue rather than a cosmetic one.',
    },
    {
      q: 'Is a tub overflow covered by a homeowners policy?',
      a: 'A homeowners policy commonly covers sudden and accidental water damage, and an overflow with a clear cause and start time generally fits. The carrier decides based on your specific policy and inspection. Document the timeline and photograph the water line and the ceiling below before any cleanup starts.',
    },
    {
      q: 'What about a shower pan leak?',
      a: 'Often not covered, because a shower pan leak is typically a slow, repeated seep rather than one sudden event, and gradual seepage is commonly excluded under a standard policy. Some claims still succeed depending on how the carrier reads the evidence. We document the condition as found; coverage decisions rest with your carrier.',
    },
    {
      q: 'Can original millwork survive a ceiling leak?',
      a: 'Often, if it never sat in standing water. We check trim near the damaged plaster independently and route the repair line around anything that reads dry rather than removing it along with the damaged section.',
    },
    {
      q: 'How do I spot a shower pan leak with no visible water?',
      a: 'Look for a stain or crack on the ceiling below the shower, a soft area on that lower floor, or a shower tile gone loose or hollow-sounding. By the time any of those show up, the leak has typically been running for a while.',
    },
    {
      q: 'Will a repaired plaster ceiling look the same as the rest of the room?',
      a: 'That is the standard we work to. We match the surrounding plaster texture and profile on the repaired section instead of leaving a drywall patch inside an original plaster ceiling, and we route trim and medallion work around the repair.',
    },
    {
      q: 'What drives the cost on a job like this?',
      a: 'What the water actually reached, not which fixture caused it. An overflow caught in minutes with no ceiling involvement is a small job. The same overflow left running for twenty minutes with a finished ceiling below is considerably larger. We provide a written estimate on site after readings, and after opening the ceiling where that is needed.',
    },
    {
      q: 'Can we stay in the house during the repair?',
      a: 'In most cases, yes. A bathroom and the room below it can typically be dried while the rest of the house functions normally, with the affected rooms closed off while equipment runs. The exception is a ceiling with structural sagging that needs to come down before it fails on its own.',
    },
  ],
  related: [
    { href: 'toilet-overflow-water-damage-oakland-county', label: 'Toilet overflow water damage' },
    { href: 'sink-leak-water-damage-oakland-county', label: 'Sink leak water damage' },
    { href: 'condo-upstairs-leak-water-damage-oakland-county', label: 'Upstairs condo or unit leak' },
    { href: 'services/ceiling-water-damage-repair', label: 'Ceiling water damage repair' },
    { href: 'services/contents-pack-out-storage', label: 'Contents pack-out and storage' },
  ],
  sources: [
    { label: 'EPA, A Brief Guide to Mold, Moisture, and Your Home', href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' },
    { label: 'IICRC S500, Standard for Professional Water Damage Restoration', href: 'https://iicrc.org/s500/' },
    { label: 'Wisconsin Administrative Code SPS 384.20, bathtub waste outlet and overflow size', href: 'https://docs.legis.wisconsin.gov/document/administrativecode/SPS%20384.20(5)(b)2.' },
    { label: 'City of Owatonna, MN, shower pan liner flood test certification (Minnesota Plumbing Code 408.7.5)', href: 'https://www.owatonna.gov/DocumentCenter/View/11340' },
  ],
  serviceName: 'Bathtub Overflow and Shower Pan Leak Water Damage Cleanup, Oakland County',
}

export default data
