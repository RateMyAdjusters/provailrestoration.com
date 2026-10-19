import type { CausePageData } from './types'

// =============================================================================
// /sink-leak-water-damage-oakland-county
// Angle: Oakland County homes with high-value finishes. Kitchen and bath sink
// leaks under custom cabinetry, stone counters, and hardwood or tile floors
// in Bloomfield Hills, Birmingham, West Bloomfield, Franklin, Orchard Lake,
// and Troy. Facts reused from Prime's sink-leak-water-damage.ts research
// (particleboard cabinet decay timeline, braided-line corrosion mechanism),
// written fresh for a custom-cabinetry and stone-counter audience.
// =============================================================================

const data: CausePageData = {
  slug: 'sink-leak-water-damage-oakland-county',
  title: 'Sink Leak Under Custom Cabinetry: Oakland County, MI',
  description:
    'A sink leak in a Bloomfield Hills or Birmingham kitchen often soaks custom cabinetry before anyone sees water. How we check, dry, and save the cabinet box and the floor around it.',
  eyebrow: 'SINK LEAK · CUSTOM CABINETRY',
  h1: 'A sink leak in a custom kitchen: saving the cabinet, the counter, and the floor',
  lede:
    'A sink leak in a Bloomfield Hills or Birmingham kitchen rarely shows up on the floor first. It shows up inside a closed cabinet, under a stone counter, against a hardwood or tile floor that cost real money to install. The first move is to find out how long it has been there, then plan the dry-out around what can still be saved.',
  steps: [
    {
      title: 'Shut the supply valves',
      text: 'Turn the hot and cold shutoff valves under the sink clockwise until they stop.',
    },
    {
      title: 'Cut power to a disposal or an instant-hot unit',
      text: 'Switch any disposal or instant-hot water dispenser off at the breaker before you open the cabinet further.',
    },
    {
      title: 'Open the cabinet and leave it open',
      text: 'Pull everything out from under the sink so air can reach the cabinet floor, the sides, and the wall behind it.',
    },
    {
      title: 'Photograph the cabinet interior and the counter seam',
      text: 'Dated photos of the cabinet floor, the supply lines, and any stain at the stone counter seam, before anything moves.',
    },
    {
      title: 'Check the floor directly below, if there is a floor below',
      text: 'In a two-story Birmingham or Franklin home, look at the ceiling of the room under the kitchen for a new stain or a soft spot.',
    },
    {
      title: 'Call for a moisture reading before a cabinetmaker is involved',
      text: 'A reading of the cabinet floor, the toe kick, and the subfloor tells you what the cabinet shop needs to know before any custom piece is reordered.',
    },
  ],
  quickAnswer: {
    question: 'A sink is leaking under custom cabinetry. What happens first?',
    answer:
      'Shut the supply valves, empty the cabinet, and get a moisture reading before anyone decides a custom cabinet box has to be replaced. A sink leak usually starts at the braided supply line, the P-trap, or the faucet base, and it can run for weeks inside a closed cabinet before it shows. A homeowners policy commonly covers sudden and accidental water damage. The carrier decides.',
  },
  sections: [
    {
      eyebrow: 'The hidden part',
      heading: 'Why does a cabinet leak stay hidden in a high-end kitchen?',
      paragraphs: [
        'A custom kitchen cabinet is built with a face frame and doors that close flush, which is exactly the feature that hides a leak longest. The cabinet floor under the sink holds the water, against the wood, with the door shut the rest of the day.',
        'A solid wood or plywood cabinet box resists water longer than a stock particleboard box, but the toe kick and any particleboard shelving inside the cabinet are usually standard material even in a custom installation, and that material wicks moisture and swells the same way it does in any home. A claims-industry test of particleboard under a controlled, low-volume daily leak found unfaced particleboard collapsed at around 64 days, while faced particleboard sagged into a dish shape without collapsing even after 88 to 152 days. That timeline is why a cabinet floor that "looks fine" from the front can still be wrong on the inside.',
        'A stone counter adds its own blind spot. The seam where a quartz or granite slab meets the backsplash or the sink cutout is sealed, and a leak at the faucet base can travel under that seam and down the back of the cabinet without ever reaching the visible counter edge.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'Mechanism',
      heading: 'Where does the leak actually start?',
      paragraphs: [
        'Four points account for nearly every sink leak, custom kitchen or not.',
      ],
      bullets: [
        'Supply line or braided hose, which is pressurized at all times and leaks whether or not the faucet is running.',
        'P-trap and drain joints, which leak only when the sink drains, usually at a slip-nut connection that was hand-tightened and never checked again.',
        'Faucet base, where a worn O-ring or cracked mounting gasket lets water pool on the counter and run down inside the cabinet at the back wall.',
        'A garbage disposal mounting gasket or drain connection, which leaks behind the unit where it is easy to miss.',
      ],
      callout:
        'A braided stainless line fails for a documented reason beyond age. Household chemicals stored in the same cabinet, bleach, drain cleaner, bathroom cleaner, corrode the exterior braid from the outside, and once the braid loses its grip the inner tube bulges and splits under pressure.',
    },
    {
      eyebrow: 'Insurance',
      heading: 'Does homeowners insurance cover a sink leak?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides, based on the facts of the loss and the specific policy.',
        'Long-term seepage and repeated leakage are commonly excluded, and a sink leak is exactly the kind of loss where that distinction gets drawn. A supply line that bursts overnight reads differently to an adjuster than a P-trap joint that has been weeping behind a closed cabinet door for two months. The cabinet floor itself is often the clearest evidence of which one happened, because a fresh burst and a slow drip leave different marks on the same particleboard.',
        'We document the cabinet floor, the subfloor, and moisture readings before anything is removed, including the custom cabinet box itself if it is affected, because that record is what a carrier and a cabinet shop both work from.',
      ],
    },
    {
      eyebrow: 'Stone and cabinetry',
      heading: 'Can a stone counter or a custom cabinet box be saved?',
      paragraphs: [
        'Stone itself, quartz or granite, is not damaged by water contact. The risk is at the seams and at the substrate underneath, typically plywood, which can delaminate if water sits against it long enough. We dry the substrate in place when readings support it and remove only the section that does not.',
        'A solid wood or plywood cabinet box survives more often than people assume, especially if the leak is caught inside the first week. A melamine-over-particleboard box, even a custom one with a stock interior, does not survive the same way once the base panel is saturated, because the particle core wicks water sideways and the whole base can fail.',
      ],
      table: {
        caption: 'What typically happens to each material under a kitchen sink',
        columns: ['Material', 'Caught within days', 'Wet for weeks'],
        rows: [
          ['Solid wood or plywood cabinet box', 'Usually dried in place', 'Depends on glue-joint condition, often saveable'],
          ['Melamine-over-particleboard toe kick or base', 'Often saveable', 'Usually replaced, particleboard does not regain strength'],
          ['Stone counter (quartz, granite)', 'No damage to the stone itself', 'No damage to the stone itself'],
          ['Plywood substrate under a stone seam', 'Dried in place', 'Checked for delamination, section removed if soft'],
          ['Hardwood or tile floor at the cabinet base', 'Often saveable with in-place drying', 'Hardwood cupping risk rises; tile grout and subfloor checked'],
        ],
      },
      photoIndex: 1,
    },
    {
      eyebrow: 'Downstairs',
      heading: 'What happens when the leak reaches a finished room below the kitchen?',
      paragraphs: [
        'Many Bloomfield Hills and Birmingham homes have a finished basement, a wine cellar, or a home theater directly under the kitchen. Water that soaks a cabinet floor long enough does not stop at the subfloor. It travels along the joists before it drops, so a stain on a basement ceiling or a damp patch near a wine rack is often several feet from the point directly under the sink.',
        'In an older Birmingham colonial with plaster ceilings, that stain shows differently than it would on drywall. Plaster holds moisture longer at the keys, the small plugs of plaster that lock through the wood lath, and a plaster ceiling that has gone soft at those keys needs a different repair plan than drywall, not a simple patch.',
      ],
      photoIndex: 2,
    },
  ],
  finishSaving: {
    heading: 'How we plan a sink leak dry-out to save the kitchen, not just dry it',
    intro: 'The plan starts with what is worth saving, confirmed by moisture readings, before anything is removed.',
    items: [
      {
        title: 'Cabinet box evaluated before removal',
        text: 'Solid wood and plywood cabinet boxes are checked with moisture meters and, where needed, a small inspection hole in an inconspicuous spot before any panel is pulled. A custom box is never removed on assumption.',
      },
      {
        title: 'Stone counters dried in place',
        text: 'Quartz and granite are not damaged by water. We dry the plywood substrate and the seam area underneath without disturbing the slab itself unless the substrate requires access.',
      },
      {
        title: 'Hardwood drying mats at the cabinet toe kick',
        text: 'When water reaches hardwood flooring at the base of the cabinet run, drying mats pull moisture up through the board face under controlled airflow, which gives solid wood a real chance to avoid cupping.',
      },
      {
        title: 'Plaster ceilings assessed by the key, not the stain',
        text: 'In older Birmingham and Bloomfield Township homes, we check the plaster keys where the ceiling meets the lath before deciding whether a section needs to come down or can be dried and patched.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/thermal-camera-moisture-check.webp',
      alt: 'A technician uses a handheld thermal imaging camera to check a hallway floor for hidden moisture near a kitchen',
      caption: 'A thermal scan finds moisture under flooring before it is visible on the surface.',
      width: 969,
      height: 1200,
    },
    {
      src: '/images/causes/drying-equipment-hardwood-floor.webp',
      alt: 'Drying equipment staged on a hardwood floor next to a basement storage area',
      caption: 'Equipment is staged to protect hardwood while a cabinet area dries.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a plaster ceiling to check for hidden water',
      caption: 'A moisture meter, not a visual check, decides whether a ceiling section needs to come down.',
      width: 900,
      height: 1200,
    },
  ],
  faqs: [
    {
      q: 'My kitchen has a custom cabinet box. Does a sink leak mean it has to be rebuilt?',
      a: 'Not automatically. A solid wood or plywood cabinet box can often be dried in place if the leak is caught within the first week or two, confirmed by moisture readings rather than a visual check. A melamine-over-particleboard toe kick or base panel is less likely to survive once saturated, because particleboard swells and does not regain strength. We check before we recommend removal.',
    },
    {
      q: 'Is a stone counter damaged by a sink leak?',
      a: 'The stone itself, quartz or granite, is not damaged by water contact. The risk is at the seam where the slab meets the backsplash or the sink cutout and at the plywood substrate underneath, which can delaminate if water sits against it for an extended period. We dry the substrate in place when readings support it.',
    },
    {
      q: 'Does homeowners insurance cover a sink leak in a high-end kitchen?',
      a: 'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides, based on your specific policy and the documented facts of the loss. Long-term seepage and repeated leakage are commonly excluded, which is why we document the cabinet floor and moisture readings carefully before anything is removed, custom cabinetry included.',
    },
    {
      q: 'We have a wine cellar below the kitchen. Can a sink leak reach it?',
      a: 'Yes. Water that soaks a cabinet floor long enough travels along the floor joists before it drops, so a damp patch in a wine cellar or a finished basement below the kitchen can appear several feet from the point directly under the sink. We check the full ceiling area below, not just the spot directly beneath the sink.',
    },
    {
      q: 'Our ceiling below the kitchen is plaster, not drywall. Does that change the repair?',
      a: 'Yes. Plaster holds moisture at the keys, the small plugs that lock through the wood lath, differently than drywall does. We check the condition of those keys before deciding whether a plaster ceiling section can be dried and patched or needs to come down and be rebuilt to match the original profile.',
    },
    {
      q: 'How long does a sink leak usually run before anyone notices?',
      a: 'It depends on the source. A supply line burst is sudden and obvious within hours. A P-trap drip or a slow weep at a braided line fitting can run for weeks inside a closed cabinet. A claims-industry test found that faced particleboard under a slow leak sagged into a dish shape without collapsing for 88 to 152 days, which is a long window for damage to accumulate unnoticed.',
    },
    {
      q: 'Can hardwood flooring at the base of the cabinets be saved?',
      a: 'Often, if the leak is caught within about 48 hours and the cupping is still minor. Solid hardwood can sometimes be dried in place using floor drying mats that pull moisture up through the board face. Engineered hardwood is more fragile because its plywood core delaminates once saturated. We confirm with moisture readings, not a visual check.',
    },
    {
      q: 'What should I do before a cabinetmaker comes to look at the damage?',
      a: 'Get a moisture reading of the cabinet floor, the toe kick, and the subfloor first. That reading tells the cabinet shop what is actually wet and what is dry, which changes whether they plan a repair or a full rebuild of the affected section.',
    },
  ],
  related: [
    { href: 'bathtub-overflow-water-damage-oakland-county', label: 'Bathtub overflow and shower pan leak damage' },
    { href: 'refrigerator-ice-maker-leak-water-damage-oakland-county', label: 'Refrigerator and ice maker line leak damage' },
    { href: 'sump-pump-failure-water-damage-oakland-county', label: 'Sump pump failure and finished basement damage' },
    { href: 'services/appliance-leak-water-damage', label: 'Appliance leak water damage' },
    { href: 'services/hardwood-floor-water-damage', label: 'Hardwood floor water damage' },
  ],
  sources: [
    {
      label: 'EPA, "A Brief Guide to Mold, Moisture, and Your Home"',
      href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
    },
    {
      label: 'CLM Magazine, "Drip, Drip, Drip" (particleboard cabinet decay test)',
      href: 'https://www.theclm.org/Magazine/articles/drip-drip-drip/341',
    },
    {
      label: 'Warren Forensics, "The Potential Leak in Your Kitchen Cabinet" (flexible supply connector failure)',
      href: 'https://www.warrenforensics.com/?p=10901',
    },
    {
      label: 'IICRC, ANSI/IICRC S500 Standard for Professional Water Damage Restoration',
      href: 'https://www.iicrc.org/page/S500',
    },
  ],
  serviceName: 'Sink Leak Water Damage Cleanup, Oakland County',
}

export default data
