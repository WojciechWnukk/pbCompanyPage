import type { Metadata } from 'next'
import Script from 'next/script'
import { StepsList } from '../ui/steps-list'

export const metadata: Metadata = {
  title: 'Jak pracujemy',
  description: 'Od konsultacji po wsparcie w realizacji – przejrzysty proces współpracy.',
}

const STEPS: Array<[string, string]> = [
  ['Konsultacja i analiza potrzeb', 'Rozmawiamy o celach, uwarunkowaniach i wykonujemy wstępne analizy.'],
  ['Koncepcja i studium wykonalności', 'Przygotowujemy warianty rozwiązań i założenia projektowe.'],
  ['Projekt budowlany', 'Dokumentacja formalno-prawna do uzyskania pozwoleń.'],
  ['Projekty wykonawcze i techniczne', 'Szczegółowe opracowania dla wykonawców.'],
  ['Dokumenty dodatkowe', 'STWiOR, kosztorysy, instrukcje ruchowe i eksploatacyjne.'],
  ['Wsparcie w realizacji', 'Nadzór autorski i bieżące doradztwo techniczne.'],
]

export default function ProcessPage() {
  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Współpraca</span>
          <h1 className="h1 mt-2">Jak pracujemy</h1>
          <p className="lead mt-3 max-w-3xl">
            Jasne etapy, przewidywalne terminy i dokumentacja spełniająca wszystkie wymogi techniczne i formalne.
          </p>
        </div>
      </section>

      <section className="section after-hero">
        <div className="wrap">
          <StepsList steps={STEPS} />
          <a href="/kontakt" className="btn btn-primary mt-10">Skontaktuj się</a>
        </div>
      </section>

      <Script id="ld-breadcrumbs-process" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'Jak pracujemy', item: 'https://pbprojekt.lublin.pl/jak-pracujemy' },
            ],
          }),
        }}
      />
    </main>
  )
}
