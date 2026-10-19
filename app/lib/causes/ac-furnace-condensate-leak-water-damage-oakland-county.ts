import type { CausePageData } from './types'

// =============================================================================
// /ac-furnace-condensate-leak-water-damage-oakland-county
// Angle: an attic air handler over a finished upstairs bedroom, or a
// mechanical room over a finished basement theater, in a Bloomfield-area
// home. Facts reused from Prime's ac-condensate-leak-water-damage.ts
// (IRC/IMC M1411.3.1 float switch requirement, furnace condensate volume
// estimate) -- wording rewritten independently, 2026-10-18, to keep
// shingle overlap under the site's 20 percent ceiling.
// =============================================================================

const data: CausePageData = {
  slug: 'ac-furnace-condensate-leak-water-damage-oakland-county',
  title: 'AC or Furnace Condensate Leak Into a Finished Ceiling (MI)',
  description:
    'A clogged condensate line above a finished bedroom or home theater in a Bloomfield-area home can soak plaster, millwork, or a built-in ceiling before it shows. What to do and how we dry it.',
  eyebrow: 'CONDENSATE LEAK · ATTIC & MECHANICAL ROOM',
  h1: 'An AC or furnace condensate leak is soaking a finished ceiling',
  lede:
    'Both your air conditioner and your high-efficiency furnace produce condensate, and both lines clog the same way. In a Bloomfield Hills or Franklin home with an attic air handler over a finished bedroom, or a mechanical room above a basement theater, that clog sends water into a ceiling that was built for living space, not storage.',
  steps: [
    {
      title: 'Power the system down',
      text: 'Switch the thermostat off entirely, heat and cool both, so the unit stops producing more condensate while the drain stays blocked.',
    },
    {
      title: 'Contain the water, leave the ceiling alone',
      text: 'Set a bucket or towels under the drip. Only open a sagging plaster or drywall ceiling if water is actively pooling and the ceiling is visibly bowing.',
    },
    {
      title: 'Clear the room underneath',
      text: 'Move furniture, electronics, or theater seating out from under the stain before it drops, particularly around built-in cabinetry.',
    },
    {
      title: 'Photograph the pan and the stain',
      text: 'Capture the drain pan, the line, and the ceiling stain or sag before anything is cleaned up.',
    },
    {
      title: 'Call your HVAC technician',
      text: 'They clear the clog, verify the float switch, and get the system running again.',
    },
    {
      title: 'Call us for the ceiling',
      text: 'We extract standing water, evaluate the plaster or drywall and any insulation, and dry the structure before mold has a chance to establish.',
    },
  ],
  quickAnswer: {
    question: 'A condensate leak is soaking a finished ceiling below. What now?',
    answer:
      'Shut the thermostat off, contain the water, and photograph the drain pan and the stain. Call an HVAC technician to clear the clog or replace the float switch, and call a restoration company to evaluate the plaster or drywall ceiling and any nearby millwork before anything comes down. A homeowners policy commonly covers sudden and accidental water damage. The carrier decides.',
  },
  sections: [
    {
      eyebrow: 'The causes',
      heading: 'What triggers a condensate leak, and why winter is not exempt',
      paragraphs: [
        'A clogged condensate line, biofilm and algae accumulated over a cooling season, is the most common summer trigger. A high-efficiency furnace produces condensate the same way an AC coil does, so a clogged line in January causes the identical overflow a clog in July would, just with heat running instead of cooling. A failed condensate pump, a cracked or overflowing drain pan, a humidifier leak, and a frozen evaporator coil account for most of the remaining cases.',
        'Attic air handlers, common above finished upper-floor rooms, sit directly over the ceiling drywall or plaster and the insulation beneath it. The water has to pass through both before it ever shows as a stain, so the cavity above has usually been wet for days by the time anyone notices a ring on a bedroom or hallway ceiling.',
      ],
      photoIndex: 0,
    },
    {
      eyebrow: 'The code detail',
      heading: 'Is a safety switch required over a finished room?',
      paragraphs: [
        'For equipment installed somewhere an overflow would damage the house, such as an attic over finished rooms, the model mechanical code calls for either a separate auxiliary drain pan with its own visible drain, or a water-level detection device, commonly called a float switch, that cuts power to the unit before the pan overflows. Where that switch is missing, failed, or bypassed, nothing stands between a clogged line and a soaked ceiling in a finished bedroom or hallway.',
        'If your home has an attic unit above a finished room, or a mechanical room above a basement theater, it is worth confirming with your HVAC technician that this safety device exists and still works, ideally before the next cooling or heating season rather than after a leak.',
      ],
    },
    {
      eyebrow: 'Coverage',
      heading: 'Does a homeowners policy pay for AC or furnace leak damage?',
      paragraphs: [
        'A homeowners policy commonly covers sudden and accidental water damage. The carrier decides. A condensate line that clogs and overflows overnight, soaking a finished ceiling, is the kind of event carriers typically treat as sudden.',
        'Long-term seepage is different. A system leaking for weeks or months before it was reported, with prior staining or a known service record, is commonly denied as maintenance rather than sudden loss. Reporting the same day it is found gives the claim the strongest version of the sudden-and-accidental story.',
      ],
      callout: 'Payment decisions come from your insurance carrier after its own inspection. You choose your own contractor.',
    },
    {
      eyebrow: 'The finished ceiling',
      heading: 'What happens to plaster or built-in millwork above a home theater?',
      paragraphs: [
        'In an older Birmingham home, the ceiling above a finished room is often plaster rather than drywall, and plaster responds differently once wet. Water breaks the bond at the small plugs, called keys, that lock plaster to its lath, and a section can detach before any obvious stain is visible. We check the keys directly rather than assuming a visible stain marks the full extent of the problem.',
        'A home theater or finished basement room below a mechanical room typically adds built-in screens, speaker cabinets, and recessed lighting at ceiling level, each of which gets its own evaluation before any section is opened or closed back up.',
      ],
      photoIndex: 1,
    },
    {
      eyebrow: 'The response',
      heading: 'What cleanup above a finished space actually involves',
      paragraphs: [
        'The order of operations stays the same regardless of finish level, but the care taken around built-ins does not.',
      ],
      bullets: [
        'Extracting standing water from the ceiling cavity or mechanical room floor.',
        'Mapping moisture across drywall or plaster, subfloor, joists, and insulation, including an inspection hole in an inconspicuous spot when needed.',
        'Assessing recessed lighting, built-in speakers, and nearby millwork before any demolition of surrounding material.',
        'Removing only what cannot be saved, typically saturated drywall or failed plaster sections and wet insulation.',
        'Running structural drying with air movers and dehumidifiers, logged daily against a dry standard.',
        'Rebuilding to match the original ceiling texture and reinstalling fixtures and millwork in their original positions.',
      ],
      photoIndex: 2,
    },
  ],
  finishSaving: {
    heading: 'Protecting a finished ceiling and the room below it',
    intro: 'A home theater, a formal bedroom, or a finished mechanical room gets a repair plan built around its built-ins, not a default demolition.',
    items: [
      {
        title: 'Keys checked before any section is cut',
        text: 'We press and sound the ceiling to find where plaster has actually separated from the lath, rather than cutting a square around the visible stain.',
      },
      {
        title: 'Recessed lighting and speaker cabinets assessed on their own',
        text: 'Built-in fixtures near the affected area are evaluated independently before a ceiling section is opened or closed.',
      },
      {
        title: 'Texture and profile matched on the rebuild',
        text: 'Where a ceiling section must come down, the rebuild matches the surrounding plaster or drywall texture rather than leaving a visible patch.',
      },
      {
        title: 'Flooring below checked before refinishing',
        text: 'Hardwood or carpet in the room below gets moisture readings before anyone assumes it needs replacement.',
      },
    ],
  },
  gallery: [
    {
      src: '/images/causes/dehumidifier-mechanical-room.webp',
      alt: 'A commercial dehumidifier running in a basement mechanical room during a water damage dry-out',
      caption: 'A dehumidifier runs in the mechanical room while a finished ceiling nearby dries.',
      width: 1200,
      height: 1600,
    },
    {
      src: '/images/causes/moisture-meter-ceiling-reading.webp',
      alt: 'A technician holds a moisture meter against a finished ceiling to check for condensate leak damage',
      caption: 'A reading at the ceiling confirms whether a section needs to come down.',
      width: 900,
      height: 1200,
    },
    {
      src: '/images/causes/room-containment-drying.webp',
      alt: 'A sealed plastic containment setup in a finished room during a water damage dry-out',
      caption: 'Containment protects built-ins and furniture in a finished room while equipment runs.',
      width: 1201,
      height: 1200,
    },
  ],
  faqs: [
    {
      q: 'Is condensate water from an AC or furnace unsafe?',
      a: 'No. Condensate is Category 1, clean water under the IICRC S500 standard. It is mildly acidic, which is why PVC drain lines corrode over years, but it carries no sewage contamination. The real risk is structural and mold-related, tied to how long the water sat rather than what it contains.',
    },
    {
      q: 'Can a condensate leak happen in winter?',
      a: 'Yes. A high-efficiency furnace produces condensate every time it runs, through the same drain line and pan an AC coil uses. A clog in that line causes a leak in January just as readily as it does in July, with the furnace running instead of the AC.',
    },
    {
      q: 'Why does an attic unit over a finished bedroom cause worse damage than a basement unit?',
      a: 'A basement unit drips onto concrete and is usually spotted within hours. An attic air handler sits directly above the ceiling drywall or plaster and the insulation, so water has to work through both before it shows as a stain, which can take several days. By the time a ring appears, the cavity has typically been wet longer than the stain suggests.',
    },
    {
      q: 'Does an attic unit need a float switch?',
      a: 'The model mechanical code requires either a separate auxiliary drain pan with its own visible drain, or a float switch, for equipment installed where an overflow would damage the house, such as an attic over finished rooms. Confirm with your HVAC technician whether your unit has one.',
    },
    {
      q: 'Can original plaster above a home theater be matched after a repair?',
      a: 'In most cases, yes. We finish a repaired section to match the surrounding plaster texture and profile rather than defaulting to a drywall patch, and we coordinate recessed lighting and speaker cabinet reinstallation around the repair.',
    },
    {
      q: 'Will insurance pay for this damage?',
      a: 'A homeowners policy commonly covers sudden and accidental water damage, and a line that clogs and overflows overnight is the kind of loss carriers typically treat that way. Seepage known about for weeks before being reported is commonly denied as maintenance. The carrier decides.',
    },
    {
      q: 'Does a leak mean the HVAC system needs replacing?',
      a: 'Almost never. The leak is a drainage issue, not a failure of the heating or cooling mechanism itself. Once the clog clears, the pump is replaced, or a float switch is added, the equipment typically returns to service the same day. The restoration work is a separate scope.',
    },
    {
      q: 'Can built-in theater speakers and recessed lighting be saved?',
      a: 'Often, if they did not take direct water exposure for an extended period. We evaluate fixtures near the affected ceiling independently of the drywall or plaster around them before recommending removal.',
    },
  ],
  related: [
    { href: 'sump-pump-failure-water-damage-oakland-county', label: 'Sump pump failure and finished basement damage' },
    { href: 'refrigerator-ice-maker-leak-water-damage-oakland-county', label: 'Built-in refrigerator ice maker leak' },
    { href: 'condo-upstairs-leak-water-damage-oakland-county', label: 'Upstairs condo or unit leak' },
    { href: 'services/ceiling-water-damage-repair', label: 'Ceiling water damage repair' },
    { href: 'services/basement-flood-cleanup', label: 'Finished basement flood cleanup' },
  ],
  sources: [
    {
      label: 'EPA, Mold Remediation in Schools and Commercial Buildings (Chapter 4): drying within 24-48 hours',
      href: 'https://www.epa.gov/mold/mold-remediation-schools-and-commercial-buildings-guide-chapter-4',
    },
    {
      label: 'Pumper (trade press), "How a High-Efficiency Furnace Impacts a Septic System": condensate volume estimate',
      href: 'https://www.pumper.com/online_exclusives/2021/01/how-a-high-efficiency-furnace-impacts-a-septic-system',
    },
    {
      label: 'InterNACHI forum: IRC Section M1411.3.1, auxiliary and secondary drain systems text',
      href: 'https://forum.nachi.org/t/condensate-drainage/53753',
    },
  ],
  serviceName: 'AC and Furnace Condensate Leak Water Damage Cleanup, Oakland County',
}

export default data
