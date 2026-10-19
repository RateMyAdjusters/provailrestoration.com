import type { CausePageData } from './types'

// =============================================================================
// /refrigerator-ice-maker-leak-water-damage-oakland-county
// Angle: a built-in, paneled refrigerator in a custom Bloomfield Hills or
// Birmingham kitchen, set into custom cabinetry on hardwood or stone. The
// site already has /services/appliance-leak-water-damage covering dishwashers,
// washers, fridges, and water heaters broadly; this page is narrower and
// cross-links to it. Facts reused from Prime's
// refrigerator-water-line-leak-damage.ts (saddle valve failure mechanism,
// flooring type comparison) -- wording rewritten independently, 2026-10-18,
// to keep shingle overlap under the site's 20 percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'refrigerator-ice-maker-leak-water-damage-oakland-county',
  title: 'Built-In Refrigerator Ice Maker Line Leak: Oakland County, MI',
  description:
    'A leaking ice maker line behind a built-in, paneled refrigerator can soak custom cabinetry and hardwood before anyone sees it. How we check and dry it in a Bloomfield-area kitchen.',
  eyebrow: 'ICE MAKER LINE LEAK · BUILT-IN REFRIGERATOR',
  h1: 'A built-in refrigerator\'s ice maker line is leaking into custom cabinetry',
  lede:
    'A built-in, paneled refrigerator in a Bloomfield Hills or Birmingham kitchen sits flush against custom cabinetry, often on hardwood or stone. When the supply line behind it fails, it can run for weeks in that tight space before the panel front gives any sign at all.',
  steps: [
    {
      title: 'Find the valve, not the plug',
      text: 'Locate the shutoff behind the unit, under a nearby sink, or on the basement cold line, and close it. Pulling the plug does nothing to stop the water.',
    },
    {
      title: 'Leave a built-in unit where it is',
      text: 'A paneled, built-in refrigerator is often fastened to the surrounding cabinetry. Get help before forcing it forward, so the face frame and panels are not damaged in the process.',
    },
    {
      title: 'Check what is visible from the front',
      text: 'Look at the toe kick and the cabinet seams on either side for staining or swelling, and photograph anything you see.',
    },
    {
      title: 'Check below the kitchen, if there is a room below',
      text: 'A slow line leak often shows on a basement or lower-floor ceiling before it ever shows in the kitchen itself.',
    },
    {
      title: 'Blot visible water with towels',
      text: 'Press towels into any floor seam near the unit. Skip the fan until someone has checked beneath the surface.',
    },
    {
      title: 'Split the work',
      text: 'A plumber replaces or caps the line and any saddle valve involved. We extract the water, dry the cabinetry and flooring, and document the loss.',
    },
  ],
  quickAnswer: {
    question: 'The ice maker line behind a built-in refrigerator is leaking. What is the right first move?',
    answer:
      'Shut the water off at the valve behind the unit, under a nearby sink, or in the basement, not by unplugging the appliance. Photograph any staining at the toe kick and cabinet seams, and check the room below the kitchen if one exists. Have a plumber replace the line, and call us the same day to dry cabinetry, hardwood, or stone before it warps or the leak reaches a ceiling below.',
  },
  sections: [
    {
      eyebrow: 'The weak point',
      heading: 'Why built-in refrigerator lines fail, and why a built-in install hides it longer',
      paragraphs: [
        'Many installers still use a saddle valve, a clamp-on fitting with a small spike that pierces the supply pipe without cutting it. It installs fast, which is why it turns up frequently in Michigan kitchens remodeled over the last twenty years, built-in setups included.',
        'Most manufacturers advise against piercing-type saddle valves, since they cut flow and clog more readily than a proper valve installed on a drilled and tapped connection. The gasket inside that valve is the real failure point, hardening and losing its seal after years of hot-cold cycling. The resulting leak is often a slow weep at the valve body rather than at the fridge end, which lets it run longer unnoticed behind a built-in unit than behind a standalone one.',
        'A built-in, paneled refrigerator sits flush against cabinetry on both sides, often with a custom panel matching the surrounding cabinets. That same tight, flush fit also means a leak has nowhere to spread sideways, only straight down into the cabinet base and the floor beneath, with no visible gap to catch it early.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'Flooring',
      heading: 'What a leak does to hardwood or stone near a built-in unit',
      paragraphs: [
        'Solid hardwood around a built-in refrigerator can sometimes be dried in place if caught inside roughly 48 hours and cupping is still minor. Cupping occurs because the board\'s underside swells on contact with water while the top face stays dry, raising the plank edges relative to the center.',
        'Stone or tile flooring is not harmed by the water itself; the exposure is in the grout lines and the subfloor below, which we test with moisture meters before deciding whether the tile stays.',
        'Engineered hardwood and laminate hold up worse. Engineered flooring\'s plywood core delaminates once saturated, and laminate\'s fiberboard core swells permanently on contact with water, so both are generally treated as a replacement rather than a dry.',
      ],
      table: {
        caption: 'Flooring near a built-in refrigerator, by material',
        columns: ['Flooring type', 'Caught within 48 hours', 'Wet for longer'],
        rows: [
          ['Solid hardwood', 'Often saveable with in-place drying', 'Cupping deepens, replacement more likely'],
          ['Engineered hardwood', 'Still at risk once saturated', 'Core delamination, usually replaced'],
          ['Stone or tile', 'No damage to the material itself', 'Grout and subfloor checked either way'],
          ['Laminate', 'Core swells permanently on contact', 'Same, replacement standard'],
        ],
      },
      photoIndex: 1,
    },
    {
      eyebrow: 'Cabinetry',
      heading: 'Does the custom cabinet around a built-in fridge have to be torn out?',
      paragraphs: [
        'The side panels and toe kick directly beside a built-in refrigerator are typically particleboard or MDF even in a high-end install, and that material swells permanently once saturated, so it is usually replaced regardless of cabinet brand.',
        'The adjacent cabinet boxes, when built from solid wood or plywood, often come through intact if the water did not sit long enough to break down the glue joints. We check with moisture readings and, where needed, a small inspection hole before deciding what comes out, the same bar we apply to any custom kitchen.',
      ],
    },
    {
      eyebrow: 'Insurance',
      heading: 'Does a homeowners policy cover an ice maker line leak?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides, after its own inspection, whether a given claim fits that definition.',
        'A line that fails all at once and dumps water for an hour before being noticed reads very differently to an adjuster than one that has been weeping for weeks behind a tight built-in installation. Long-term staining or deep cupping that only develops over time can push a claim toward a seepage exclusion rather than sudden-and-accidental coverage, which is why documenting from the first hour matters.',
        'We photograph the line, the fitting, and the moisture pattern across the floor and cabinetry, and write up exactly what we measure. Coverage determinations and settlement amounts rest with your insurance carrier alone.',
      ],
    },
    {
      eyebrow: 'Below the kitchen',
      heading: 'What happens above a finished basement?',
      paragraphs: [
        'Standing water that finds a subfloor seam near a built-in unit soaks into the plywood plies, which begin delaminating after a day or two even when the surface still looks intact. In a home with a finished basement under the kitchen, that water eventually drops into the ceiling cavity below and surfaces as a stain or soft spot, sometimes in a location that seems unrelated to the kitchen until the joist line is traced.',
      ],
      photoIndex: 2,
    },
  ],
  finishSaving: {
    heading: 'Protecting cabinetry and flooring around a built-in refrigerator',
    intro: 'A built-in installation gets the same finish-first treatment as the rest of a custom kitchen.',
    items: [
      {
        title: 'Drying mats placed at the unit footprint',
        text: 'Where hardwood sits under or beside a built-in unit, drying mats pull moisture through the board face rather than relying on ambient airflow alone.',
      },
      {
        title: 'Stone and tile checked, not replaced by default',
        text: 'The stone or tile itself is not damaged by water. We check grout lines and subfloor before recommending any tile come up.',
      },
      {
        title: 'Custom panel and adjacent cabinetry tested first',
        text: 'A matching panel front for a built-in refrigerator is expensive to reorder. We confirm with readings before recommending the panel or an adjacent cabinet box be pulled.',
      },
      {
        title: 'Access coordinated with the installer',
        text: 'Because built-in units are secured into the surrounding cabinetry, we coordinate with whoever installed it so the unit moves and resets without damaging the custom fit.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/thermal-camera-moisture-check.webp',
      alt: 'A technician uses a thermal imaging camera to check a kitchen hallway floor near a built-in refrigerator',
      caption: 'A thermal scan checks for moisture under flooring near a built-in appliance.',
      width: 969,
      height: 1200,
    },
    {
      src: '/images/causes/drying-equipment-hardwood-floor.webp',
      alt: 'Drying equipment staged on a hardwood floor near a kitchen storage area',
      caption: 'Equipment staged to dry hardwood while cabinetry panels remain in place where possible.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a ceiling to check for water below a kitchen',
      caption: 'A reading on the ceiling below the kitchen confirms whether the leak reached that far.',
      width: 900,
      height: 1200,
    },
  ],
  faqs: [
    {
      q: 'Why do these lines fail so often behind built-in units?',
      a: 'Many installers use a saddle valve, a clamp-on fitting that pierces the supply pipe without cutting it. Manufacturers generally advise against piercing-type valves because they cut flow and clog easily, and the internal gasket is a common slow-leak point after years of hot-cold cycling.',
    },
    {
      q: 'Can a matching custom panel front be saved?',
      a: 'Often, if the panel itself was never standing in water. We assess the panel and the surrounding cabinet box separately with moisture readings before recommending either be replaced, since a matching panel is costly to reorder.',
    },
    {
      q: 'Is hardwood near a built-in fridge ruined once it gets wet?',
      a: 'Solid hardwood can often be dried in place if caught inside about 48 hours with minor cupping. Engineered hardwood is more fragile, since its plywood core delaminates once saturated. The dry-versus-replace decision comes from moisture meter readings, not appearance.',
    },
    {
      q: 'The leak ran for weeks before we found it. Will insurance still pay?',
      a: 'This is the hardest call in a fridge line claim. A homeowners policy commonly covers sudden and accidental water damage, and the carrier decides based on its own inspection. Seepage over weeks or months is commonly treated as maintenance and excluded. We document the moisture pattern carefully from the first visit regardless.',
    },
    {
      q: 'Does the cabinet box next to the fridge have to come out?',
      a: 'The side panels and toe kick right next to the unit are typically particleboard or MDF, which swells permanently when wet and is usually replaced. The adjacent cabinet box often survives if built from solid wood or plywood and the glue joints held. We confirm with readings first.',
    },
    {
      q: 'Why is there a stain below the kitchen when the leak was at the fridge?',
      a: 'In many Oakland County homes, the kitchen sits directly over a finished basement or another living space. Water from a line leak travels along the subfloor until it finds a seam, then drops into the ceiling cavity below, often appearing as a stain before it is obvious on the kitchen floor itself.',
    },
    {
      q: 'Can you dry the area without fully pulling the built-in unit?',
      a: 'In many cases, yes, working from the front and the toe kick. If the unit has to move for the plumber to reach the line, we coordinate with whoever installed it so the custom fit is not disturbed.',
    },
    {
      q: 'Should the old plastic line be swapped for braided stainless?',
      a: 'Yes, once a plastic line or saddle valve has already failed once. Braided stainless lines with compression fittings resist the kinking and brittleness that eventually crack plastic lines, and they remove the saddle valve gasket as a failure point entirely.',
    },
  ],
  related: [
    { href: 'sink-leak-water-damage-oakland-county', label: 'Sink leak water damage' },
    { href: 'services/appliance-leak-water-damage', label: 'Appliance leak water damage' },
    { href: 'services/hardwood-floor-water-damage', label: 'Hardwood floor water damage' },
    { href: 'ac-furnace-condensate-leak-water-damage-oakland-county', label: 'AC and furnace condensate leak damage' },
    { href: 'services/ceiling-water-damage-repair', label: 'Ceiling water damage repair' },
  ],
  sources: [
    {
      label: 'EPA: Mold Remediation in Schools and Commercial Buildings Guide, Chapter 4',
      href: 'https://www.epa.gov/mold/mold-remediation-schools-and-commercial-buildings-guide-chapter-4',
    },
    {
      label: 'Michigan DIFS: evaluating insurance needs, sudden vs. gradual water damage',
      href: 'https://www.michigan.gov/difs/news-and-outreach/press-releases/2019/03/26/difs-director-fox-urges-michiganders-to-evaluate-insurance-needs-during-severe-weather-awareness-we',
    },
    {
      label: 'IICRC: ANSI/IICRC S500 Standard for Professional Water Damage Restoration',
      href: 'https://www.iicrc.org/page/S500',
    },
  ],
  serviceName: 'Built-In Refrigerator Ice Maker Line Leak Cleanup, Oakland County',
}

export default data
