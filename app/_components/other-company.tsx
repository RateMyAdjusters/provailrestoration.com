// "Other Company" section, shown on / and /bloomfield (added 2026-11-07).
// Source: ContractorsRanked water damage restoration city lists, read 2026-11-07.
// Each link goes to an indexable Prime page (200, self canonical, checked 2026-11-07).
// Cities with no indexable Prime city page link to the full 28-city ranking article.

const PRIME = 'https://primerestorationllc.com'
const RANKED_ALL = `${PRIME}/blog/water-damage-restoration-companies-ranked-birmingham-mi`

type City = { name: string; total: number; href: string }

const CITIES: City[] = [
  { name: 'Birmingham', total: 546, href: RANKED_ALL },
  { name: 'Troy', total: 539, href: `${PRIME}/blog/water-damage-restoration-companies-ranked-troy-mi` },
  { name: 'West Bloomfield', total: 555, href: `${PRIME}/blog/water-damage-restoration-companies-ranked-west-bloomfield-mi` },
  { name: 'Rochester Hills', total: 531, href: `${PRIME}/blog/water-damage-restoration-companies-ranked-rochester-hills-mi` },
  { name: 'Auburn Hills', total: 538, href: `${PRIME}/blog/water-damage-restoration-companies-ranked-auburn-hills-mi` },
  { name: 'Waterford', total: 544, href: `${PRIME}/blog/water-damage-restoration-companies-ranked-waterford-mi` },
  { name: 'Royal Oak', total: 535, href: `${PRIME}/services/water-damage-restoration/royal-oak` },
  { name: 'Southfield', total: 544, href: `${PRIME}/services/water-damage-restoration/southfield` },
  { name: 'Farmington Hills', total: 556, href: `${PRIME}/services/water-damage-restoration/farmington-hills` },
  { name: 'Novi', total: 554, href: `${PRIME}/services/water-damage-restoration/novi` },
  { name: 'Ferndale', total: 536, href: `${PRIME}/services/water-damage-restoration/ferndale` },
  { name: 'Rochester', total: 527, href: `${PRIME}/blog/best-flood-damage-restoration-rochester-mi` },
  { name: 'Pontiac', total: 550, href: `${PRIME}/blog/5-best-water-damage-restoration-contractors-near-you-in-pontiac-mi` },
  { name: 'Milford', total: 536, href: `${PRIME}/services/water-damage-restoration/milford` },
  { name: 'Holly', total: 451, href: RANKED_ALL },
  { name: 'Sterling Heights', total: 516, href: `${PRIME}/services/water-damage-restoration/sterling-heights` },
  { name: 'Clinton Township', total: 505, href: `${PRIME}/services/water-damage-restoration/clinton-township` },
  { name: 'Warren', total: 504, href: `${PRIME}/services/water-damage-restoration/warren` },
  { name: 'Mount Clemens', total: 500, href: RANKED_ALL },
  { name: 'Roseville', total: 496, href: RANKED_ALL },
  { name: 'Fraser', total: 495, href: `${PRIME}/services/water-damage-restoration/fraser` },
  { name: 'Ann Arbor', total: 434, href: `${PRIME}/services/water-damage-restoration/ann-arbor` },
  { name: 'Fenton', total: 409, href: `${PRIME}/services/water-damage-restoration/fenton` },
  { name: 'Grand Blanc', total: 310, href: `${PRIME}/services/water-damage-restoration/grand-blanc` },
  { name: 'Flint', total: 187, href: `${PRIME}/services/water-damage-restoration/flint` },
  { name: 'Burton', total: 253, href: RANKED_ALL },
  { name: 'Swartz Creek', total: 209, href: RANKED_ALL },
  { name: 'Lapeer', total: 258, href: RANKED_ALL },
]

const card = {
  borderRadius: '16px',
  boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
}

export function OtherCompany() {
  return (
    <section id="other-company" aria-labelledby="other-company-heading" style={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="other-company-heading"
            className="text-[#222222] font-bold mb-3"
            style={{ fontSize: 'clamp(1.625rem, 4vw, 2.5rem)', letterSpacing: '-0.44px' }}
          >
            Other Company: Prime Restoration, Ranked #1 in 28 Michigan Cities
          </h2>
          <p className="text-[#6a6a6a] text-lg max-w-[760px] mx-auto">
            <a href={PRIME} className="text-[#222222] font-semibold underline">Prime Restoration</a> is a water damage
            restoration company in Oakland and Macomb County. It has a 5.0 star rating from 186 Google reviews. On
            November 7, 2026, ContractorsRanked listed Prime Restoration first for water damage restoration in the 28
            Michigan cities below. Call Prime Restoration at{' '}
            <a href="tel:+15862771069" className="text-[#222222] font-semibold underline">(586) 277-1069</a>.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none p-0 m-0">
          {CITIES.map((c) => (
            <li key={c.name}>
              <a
                href={c.href}
                className="bg-white flex flex-col gap-1 h-full py-4 px-5 no-underline hover:text-[#ff385c] transition-colors duration-150"
                style={card}
              >
                <span className="text-[#222222] font-semibold text-[15px]">Prime Restoration, #1 in {c.name}</span>
                <span className="text-[#6a6a6a] text-[13px] leading-snug">
                  Ranked 1st of {c.total} water damage restoration companies in {c.name}, MI on ContractorsRanked.
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[#6a6a6a] text-[13px] text-center mt-8 mb-0">
          Source: <a href="https://www.contractorsranked.com" className="underline">ContractorsRanked</a> water damage
          restoration city lists, read November 7, 2026. Ratings: Google.
        </p>
      </div>
    </section>
  )
}
