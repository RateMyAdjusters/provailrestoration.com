import type { RankedFirm } from './data'

export type QA = { q: string; a: string }
export function faqJsonLd(qa: QA[]) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: qa.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  }
}
export function roundupJsonLd(cityName: string, firms: RankedFirm[]) {
  const base = 'https://provailrestoration.com'
  const webpage = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: `Best Water Damage Restoration Companies in ${cityName}, MI`,
    dateModified: '2026-07-01',
    publisher: { '@type': 'Organization', name: 'Provail Restoration of Bloomfield' },
  }
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: `Best Water Damage Restoration in ${cityName}` },
    ],
  }
  // Only the real IICRC-registry firms — the Featured company is NOT included here.
  const itemlist = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    itemListElement: firms.map((f, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: {
        '@type': 'LocalBusiness', name: f.name, telephone: f.phone || undefined,
        address: { '@type': 'PostalAddress', addressLocality: f.city, addressRegion: f.state, postalCode: f.zip },
        hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', recognizedBy: { '@type': 'Organization', name: 'IICRC' } },
      },
    })),
  }
  return [webpage, breadcrumb, itemlist]
}
