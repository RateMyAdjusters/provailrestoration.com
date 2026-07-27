import type { Metadata } from 'next'
import { RoundupPage } from '../_directory/Roundup'
import { roundupBySlug } from '../_directory/data'

const SLUG = 'best-water-damage-restoration-companies-sterling-heights-mi'
export const metadata: Metadata = {
  title: 'Best Water Damage Restoration Companies in Sterling Heights, MI (2026) | Provail Restoration',
  description:
    'A vetted guide to the best IICRC-certified water damage restoration companies in Sterling Heights, Michigan — ranked by verifiable credentials, with live Google ratings.',
  alternates: { canonical: 'https://provailrestoration.com/' + SLUG },
  robots: { index: true, follow: true },
}
export default function Page() {
  const cfg = roundupBySlug(SLUG)!
  return <RoundupPage cfg={cfg} />
}
