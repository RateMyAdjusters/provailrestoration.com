import type { CausePageData } from './types'

// =============================================================================
// /sump-pump-failure-water-damage-oakland-county
// Angle: finished basements in Bloomfield Hills, Franklin, and West Bloomfield
// with hardwood, wine cellars, home theaters, and custom millwork, not pump
// hardware. The site already has /services/sump-pump-failure covering battery
// backup sizing, check valves, and horsepower; this page covers what happens
// to the finished basement itself and cross-links to that hardware page.
// Facts reused from Prime's sump-pump-failure-water-damage.ts (MI DIFS
// exclusion, water backup endorsement, Michigan frost depth code) -- wording
// rewritten independently, 2026-10-18, to keep shingle overlap under the
// site's 20 percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'sump-pump-failure-water-damage-oakland-county',
  title: 'Sump Pump Failure in a Finished Basement: Oakland County, MI',
  description:
    'A failed sump pump in a Bloomfield Hills or Franklin finished basement can reach hardwood, a wine cellar, or a home theater fast. How we plan the dry-out to save the finishes.',
  eyebrow: 'SUMP PUMP FAILURE · FINISHED BASEMENT',
  h1: 'A sump pump failed and your finished basement is wet',
  lede:
    'A finished lower level in Bloomfield Hills, Franklin, or West Bloomfield often carries the best materials in the house: hardwood or engineered flooring, a wine cellar, a home theater, custom millwork. A failed pump puts groundwater against every bit of it fast, and what gets saved depends on how quickly the right equipment shows up.',
  steps: [
    {
      title: 'Kill power only if it is safe',
      text: 'If an outlet or equipment is sitting in water, stay clear and cut the main breaker from dry ground, or call an electrician first.',
    },
    {
      title: 'Inspect the pit itself',
      text: 'A full pit with a pump that is silent, laboring, or running dry is a confirmed failure.',
    },
    {
      title: 'Clear the floor fast',
      text: 'Rugs, furniture, and wine storage come up before the water spreads across more of the finished level.',
    },
    {
      title: 'Prioritize the theater or the cellar',
      text: 'Electronics, speaker cabinets, and wine racks sitting at floor height are the first things lost. Move or raise them ahead of anything else.',
    },
    {
      title: 'Photograph before you touch anything',
      text: 'Wide and close shots of the water, the pit, and any damaged items or finishes, before cleanup starts.',
    },
    {
      title: 'Split the calls',
      text: 'One call for water extraction, a separate call to a licensed plumber for the pump repair itself.',
    },
  ],
  quickAnswer: {
    question: 'The sump pump failed and the finished basement is taking on water. First move?',
    answer:
      'Cut power only where the breaker is reachable from dry ground. Check the pit: full and silent means the pump has failed. Get furniture, wine storage, and electronics off the floor, photograph the scene, then call for extraction. A standard homeowners policy commonly excludes sump pump failure unless a water backup endorsement was added. The carrier decides every claim.',
  },
  sections: [
    {
      eyebrow: 'What is actually at stake',
      heading: 'What a failed pump reaches in a finished Bloomfield-area basement',
      paragraphs: [
        'An unfinished basement loses a water heater, stored boxes, and floor-level framing. A finished lower level in a high-value Oakland County home stands to lose far more, far faster: engineered or solid hardwood, stone tile at a wet bar, built-in cabinetry, a home theater with floor-height electronics and speaker cabinets, and a wine cellar where humidity and temperature control matter as much as the water itself.',
        'Water from a failed pump climbs from the floor, which means whatever sits lowest, flooring, baseboard, cabinet bases, and anything stored at floor level, takes the worst and earliest damage. A theater riser or a built-in wine rack sits exactly at that height.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'Outside our lane',
      heading: 'The pump is a plumber\'s job; the finished space is ours',
      paragraphs: [
        'Repairing or replacing the pump, the check valve, the float, or the discharge line is licensed plumbing work, and we stay out of it entirely. If you want detail on battery backup sizing, horsepower, check valve failure, or discharge freeze-back prevention ahead of the next storm, that is covered in depth on our sump pump hardware and prevention page.',
        'Our scope is everything the water touched: extraction, mapping moisture across hardwood, stone, and cabinetry, and a drying plan built around what can realistically be saved rather than a reflexive strip-out of the whole level.',
      ],
    },
    {
      eyebrow: 'Coverage',
      heading: 'Is sump pump failure covered by homeowners insurance?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides. Sump pump failure gets different treatment. Michigan\'s Department of Insurance and Financial Services has stated plainly that damage from a failing sump pump, similar to sewer backup, is typically excluded under a standard policy.',
        'The remedy is a water backup endorsement, which restores coverage for an overflowing pump or a backed-up sewer or drain. It comes with its own, smaller cap, separate from the dwelling limit, and that cap varies by policy. On a finished basement with a wine cellar or theater, that cap can be reached faster than on a bare concrete floor, which is worth knowing ahead of a claim, not after one.',
      ],
      callout: 'Check your own declarations page for your actual endorsement and limit. Only the carrier decides a claim.',
    },
    {
      eyebrow: 'The freeze nobody expects',
      heading: 'Failure without a storm or an outage',
      paragraphs: [
        'Most people assume failure means a storm and a dead grid. A common Michigan winter failure happens with power on the whole time. The discharge line runs above grade across the yard, well above the roughly 42-inch frost depth Michigan code requires for footings, so that exposed run freezes solid during a cold snap long before the deeper ground ever would.',
        'Once the line is frozen, the pump keeps cycling because the float still sees water in the pit. With nowhere for the water to go, the motor overheats fighting the blockage and burns out. The basement does not flood until the thaw, so the pump looks like it simply died, with no visible trace of the freeze that actually killed it a week before.',
      ],
    },
    {
      eyebrow: 'Water classification',
      heading: 'Is sump water clean, and does that change the plan?',
      paragraphs: [
        'Groundwater from a sump pit that handles nothing else is normally Category 1, the cleanest tier, which gives the widest margin to dry hardwood, stone substrate, and cabinetry instead of removing it outright. A few days of standing water, or a check valve failure that lets contaminated water into the pit, changes that.',
        'Classification shifts with time, which is exactly why speed matters even on a clean groundwater event. A theater or wine cellar where equipment arrives within the first day keeps a meaningfully better shot at its flooring and millwork than one discovered after a weekend away.',
      ],
      table: {
        caption: 'Finished-basement materials: outcome by how quickly extraction starts',
        columns: ['Material', 'Response within a day', 'Standing water for several days'],
        rows: [
          ['Engineered hardwood', 'Often saveable with mat drying in place', 'Core delamination risk climbs sharply'],
          ['Stone tile (wet bar, theater riser)', 'Tile unaffected; grout and substrate checked', 'Substrate checked for softening'],
          ['Custom millwork and wine racks', 'Usually dried in place if solid wood', 'Melamine or particleboard components often replaced'],
          ['Theater electronics and carpet', 'Carpet and pad removed regardless; electronics assessed separately', 'Same, with more corrosion risk on contacts'],
          ['Drywall and insulation', 'Flood-cut only where wet, 12 to 24 inches above the line', 'Larger flood-cut, insulation replaced'],
        ],
      },
      photoIndex: 1,
    },
  ],
  finishSaving: {
    heading: 'Keeping a finished basement intact after a sump pump failure',
    intro: 'A lower level with real finishes gets a tailored drying plan, not an automatic strip-out.',
    items: [
      {
        title: 'Drying mats for engineered and solid flooring',
        text: 'Mats draw moisture up through the board face under controlled airflow, giving flooring a genuine chance at staying in place instead of defaulting to removal.',
      },
      {
        title: 'Wine cellar conditions held steady during drying',
        text: 'Equipment placement is planned so a wine cellar does not swing far from its normal temperature and humidity while the rest of the level dries out.',
      },
      {
        title: 'Theater electronics and cabinetry handled separately',
        text: 'Speaker cabinets, risers, and built-in components are evaluated on their own rather than lumped in with carpet and pad, which come out as a matter of course.',
      },
      {
        title: 'Custom millwork tested before anything is pulled',
        text: 'Solid wood wine racks, bars, and built-ins get moisture testing before any panel comes out, the same standard applied to kitchen cabinetry.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/drying-equipment-hardwood-floor.webp',
      alt: 'Drying equipment staged on a hardwood floor in a finished basement near a storage closet',
      caption: 'Drying mats and equipment staged to protect hardwood in a finished lower level.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/dehumidifier-mechanical-room.webp',
      alt: 'A commercial dehumidifier running in a basement mechanical room during a water damage dry-out',
      caption: 'A dehumidifier runs continuously near the sump area while flooring dries elsewhere in the space.',
      width: 1200,
      height: 1600,
    },
  ],
  faqs: [
    {
      q: 'Does Michigan homeowners insurance cover sump pump failure?',
      a: 'Usually not by itself. A standard policy typically excludes damage from sump pump failure, the same way it excludes sewer backup. Coverage requires a water backup endorsement, which carries its own separate limit. Check your declarations page or call your agent to confirm what you have.',
    },
    {
      q: 'Can engineered hardwood survive this kind of flood?',
      a: 'Often, if caught inside about a day and drying mats are placed quickly. Engineered hardwood has a plywood core that delaminates once saturated for an extended stretch, so the window is shorter than for solid hardwood. We confirm with moisture readings rather than appearance.',
    },
    {
      q: 'Who actually replaces the failed pump?',
      a: 'A licensed plumber. We do not touch sump pump hardware. If the failure sent water across a finished basement, call us for extraction and drying, and call a plumber separately for the pump. Our sump pump hardware and prevention page covers backup sizing and check valve failure in depth.',
    },
    {
      q: 'Is a wine cellar salvageable after a basement flood?',
      a: 'In most cases, yes, provided extraction happens quickly and the cellar\'s temperature and humidity are actively managed during drying rather than left to whatever the rest of the basement is doing. We plan equipment placement specifically to avoid swings that could affect stored wine.',
    },
    {
      q: 'Is sump water safe to be around?',
      a: 'Plain groundwater from a sump pit is usually Category 1, the cleanest classification. That changes once it mixes with a sewer backup or sits for days absorbing contaminants from flooring and belongings. Treat any water with odor or discoloration as contaminated.',
    },
    {
      q: 'Why did the pump fail with no storm and no outage?',
      a: 'Age and a frozen discharge line are the two most common causes without a storm. In winter, the line can freeze above the frost depth even with power running the whole time, which blocks flow and burns the motor out from fighting the blockage.',
    },
    {
      q: 'What happens to home theater electronics after a flood?',
      a: 'They are evaluated independently from flooring and carpet, which come out as a rule once saturated. Speaker cabinets, risers, and built-in components get assessed on contact time and exposure, not treated as an automatic write-off.',
    },
    {
      q: 'How fast can water rise in a finished basement?',
      a: 'It depends on the water table and the storm, but in areas with a higher table, a failed pump can push water up several inches in an hour during heavy rain. A finished basement with hardwood, millwork, and built-ins loses value quickly once water reaches the floor, which is why extraction speed matters more than nearly any other factor.',
    },
  ],
  related: [
    { href: 'services/sump-pump-failure', label: 'Sump pump hardware and failure prevention' },
    { href: 'services/basement-flood-cleanup', label: 'Finished basement flood cleanup' },
    { href: 'condo-upstairs-leak-water-damage-oakland-county', label: 'Upstairs condo or unit leak' },
    { href: 'ac-furnace-condensate-leak-water-damage-oakland-county', label: 'AC and furnace condensate leak damage' },
    { href: 'services/hardwood-floor-water-damage', label: 'Hardwood floor water damage' },
  ],
  sources: [
    {
      label: 'Michigan DIFS: tips following flooding (sewer backup and failing sump pump coverage)',
      href: 'https://www.michigan.gov/mspnewsroom/news-releases/2026/04/17/difs-tips-following-flooding',
    },
    {
      label: 'EPA: Mold, Homeowners and Renters Guide to Cleanup After Disasters',
      href: 'https://www.epa.gov/sites/production/files/2017-08/documents/mold._homeowners_and_renters_guide_to_cleanup_after_disasters.pdf',
    },
    {
      label: 'Michigan Administrative Code R 408.30449: frost protection depth for footings',
      href: 'https://regulations.justia.com/states/michigan/licensing-and-regulatory-affairs/bureau-of-construction-codes/construction-code-commission-general-rules/construction-code/part-4/section-r-408-30449',
    },
    {
      label: 'Policygenius: what is water backup coverage (endorsement form and typical sub-limits)',
      href: 'https://www.policygenius.com/homeowners-insurance/what-is-water-backup-coverage/',
    },
  ],
  serviceName: 'Sump Pump Failure Water Damage Cleanup, Finished Basement, Oakland County',
}

export default data
