import type { Metadata } from 'next'
import Script from 'next/script'
import { Reveal } from '../ui/motion'
import { Factory, Building2, Radio, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'O nas',
  description: 'Kim jesteśmy i jak pracujemy: zespół, doświadczenie, zakres realizacji oraz dla kogo pracujemy.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Poznaj nas</span>
          <h1 className="h1 mt-2">O nas</h1>
          <p className="lead mt-3 max-w-3xl">
            Od 2015 roku projektujemy rozwiązania dla energetyki, teletechniki, telekomunikacji i OZE. Łączymy inżynierską precyzję z nowoczesnymi technologiami.
          </p>
        </div>
      </section>

      <section className="section after-hero">
        <div className="wrap grid gap-6 md:grid-cols-4">
          {[
            ['10+', 'lat doświadczenia'],
            ['1000+', 'zrealizowanych projektów'],
            ['50+ MW', 'mocy w projektach OZE'],
            ['PL', 'działamy w całym kraju'],
          ].map(([n, t], i) => (
            <Reveal trigger='mount' key={t} delay={i * 0.04}>
              <div className="card p-6 text-center">
                <div className="text-3xl font-semibold">{n}</div>
                <div className="p mt-2">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="wrap grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h2 className="h2">Zakres realizacji</h2>
              <ul className="list-icon mt-4">
                <li><Factory /> Obiekty kubaturowe: przemysłowe, magazynowe, biurowe</li>
                <li><Building2 /> Sieci energetyczne dla operatorów OSD</li>
                <li><Radio /> Sieci i instalacje telekomunikacyjne</li>
                <li><Leaf /> Farmy fotowoltaiczne i wiatrowe</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="h2">Dla kogo pracujemy</h2>
              <ul className="list-icon mt-4">
                <li><Factory /> Inwestorzy prywatni: firmy, deweloperzy, przemysł</li>
                <li><Building2 /> Jednostki samorządu terytorialnego</li>
                <li><Building2 /> Spółki Skarbu Państwa</li>
                <li><Radio /> Operatorzy OSD i operatorzy telekomunikacyjni</li>
                <li><Factory /> Firmy wykonawcze – partner „projektuj i buduj”</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Zespół</h2>
          <p className="p mt-2 max-w-4xl">
            Zespół tworzą projektanci z uprawnieniami budowlanymi oraz specjaliści wspierający proces: asystenci projektantów,
            back-office, logistyka i negocjatorzy terenowi – dzięki temu realizujemy złożone przedsięwzięcia sprawnie i terminowo.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {['Projektanci', 'Asystenci projektantów', 'Back-office', 'Logistyka i teren'].map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="card p-4 text-sm">{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Script id="ld-breadcrumbs-about" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'O nas', item: 'https://pbprojekt.lublin.pl/o-nas' },
            ],
          }),
        }}
      />
    </main>
  )
}
