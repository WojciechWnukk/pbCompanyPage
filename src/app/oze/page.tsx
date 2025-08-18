import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'OZE – farmy PV, wiatrowe, magazyny energii',
  description: 'Projektujemy kompleksowo instalacje OZE: PV, wiatrowe, magazyny energii i wyprowadzenie mocy.',
}

export default function OZEPage() {
  return (
    <main className="section after-hero">
      <div className="wrap">
        <h1 className="h1">Odnawialne Źródła Energii</h1>
        <p className="p mt-4 max-w-3xl">Projektujemy kompleksowo farmy fotowoltaiczne, wiatrowe i magazyny energii – od doboru komponentów po układy wyprowadzenia mocy do sieci OSD.</p>
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Dobór komponentów instalacji OZE</li>
            <li>Układy zasilania DC/AC</li>
            <li>Układy wyprowadzenia mocy do sieci OSD: stacje, przyłącza SN, telemechanika</li>
            <li>Analizy prądowo‑napięciowe wyprowadzenia mocy</li>
          </ul>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Bilans mocy biernej i kompensacja</li>
            <li>Dobór zabezpieczeń i nastawy dla sieci rozdzielczej</li>
            <li>Kompletne obwody wtórne rozdzielnic</li>
          </ul>
        </div>
      </div>
      <Script id="ld-breadcrumbs-oze" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'OZE', item: 'https://pbprojekt.lublin.pl/oze' },
            ],
          }),
        }}
      />
    </main>
  )
}