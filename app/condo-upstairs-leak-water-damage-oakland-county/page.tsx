import type { Metadata } from 'next'
import { CauseLanding, buildCauseJsonLd } from '../_components/cause-landing'
import data from '../lib/causes/condo-upstairs-leak-water-damage-oakland-county'

const URL = 'https://provailrestoration.com/condo-upstairs-leak-water-damage-oakland-county'

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: URL },
  openGraph: {
    title: data.title,
    description: data.description,
    url: URL,
    siteName: 'Provail Restoration of Bloomfield',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = buildCauseJsonLd(data, 'condo-upstairs-leak-water-damage-oakland-county')

export default function CondoUpstairsLeakOaklandCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CauseLanding data={data} />
    </>
  )
}
