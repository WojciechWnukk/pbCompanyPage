import type { Metadata } from 'next'
import Script from 'next/script'
import { Reveal } from '../ui/motion'

export const metadata: Metadata = {
  title: 'Realizacje',
  description: 'Projekty w całej Polsce – od lokalnych inwestycji po ogólnopolskie przedsięwzięcia infrastrukturalne.',
}

const ITEMS = [
  { t: 'Modernizacja rozdzielni nN', d: 'Opis skrócony realizacji – do uzupełnienia.' },
  { t: 'Instalacja teletechniczna w biurowcu', d: 'Opis skrócony realizacji – do uzupełnienia.' },
  { t: 'Oświetlenie LED – modernizacja', d: 'Opis skrócony realizacji – do uzupełnienia.' },
]

export default function ProjectsPage() {
  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Nasze projekty</span>
          <h1 className="h1 mt-2">Realizacje</h1>
          <p className="lead mt-3 max-w-3xl">Wybrane projekty z ostatnich lat. Wkrótce dodamy interaktywną mapę z filtrami.</p>
        </div>
      </section>

      <section className="section after-hero">
        <div className="wrap">
          {/* Filtry (placeholder) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Wszystkie', 'Elektroenergetyka', 'Telekomunikacja', 'Teletechnika', 'OZE'].map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-xl border ${i === 0 ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-50'}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ITEMS.map((i, idx) => (
              <Reveal trigger='mount' key={idx} delay={idx * 0.05}>
                <article className="card overflow-hidden">
                  <div className="aspect-video bg-gray-100" />
                  <div className="p-6">
                    <h3 className="font-semibold">{i.t}</h3>
                    <p className="p">{i.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Script id="ld-breadcrumbs-projects" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'Realizacje', item: 'https://pbprojekt.lublin.pl/realizacje' },
            ],
          }),
        }}
      />
    </main>
  )
}
