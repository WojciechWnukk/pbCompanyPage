import type { Metadata } from 'next'
import Script from 'next/script'
import { Reveal } from '../ui/motion'
import { CheckCircle2, Zap, Network, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Usługi',
  description:
    'Kompleksowe usługi projektowe: koncepcje, projekty budowlane i wykonawcze, STWiOR, kosztorysy, instrukcje – elektroenergetyka, telekomunikacja, teletechnika, OZE.',
}

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Oferta</span>
          <h1 className="h1 mt-2">Usługi</h1>
          <p className="lead mt-3 max-w-3xl">
            Obsługujemy cały proces inwestycyjny – od pierwszego szkicu po gotową dokumentację i wsparcie wdrożenia.
          </p>
        </div>
      </section>

      <section className="section after-hero">
        <div className="wrap grid gap-10 md:grid-cols-2 items-start">
          <Reveal trigger='mount'>
            <div>
              <h2 className="font-semibold text-lg">Pełny zakres usług projektowych</h2>
              <ul className="list-icon mt-4">
                <li><CheckCircle2 /> Opracowanie koncepcji i studiów wykonalności</li>
                <li><CheckCircle2 /> Projekty budowlane, wykonawcze i techniczne</li>
                <li><CheckCircle2 /> Specyfikacje Techniczne Wykonania i Odbioru Robót (STWiOR)</li>
                <li><CheckCircle2 /> Kosztorysy inwestorskie</li>
                <li><CheckCircle2 /> Instrukcje współpracy ruchowej</li>
                <li><CheckCircle2 /> Instrukcje eksploatacji instalacji i urządzeń</li>
              </ul>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.05}>
            <aside className="card p-6 md:p-8">
              <p className="p">
                Zleć nam projekt i zyskaj pewność, że inwestycja będzie dopracowana w każdym detalu – od koncepcji po finalną dokumentację.
              </p>
              <a href="#kontakt" className="btn btn-primary mt-5 w-fit">Skontaktuj się</a>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="wrap">
          <h2 className="h2 mb-8">Specjalizacje</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal><article className="card p-6"><Zap className="w-6 h-6" />
              <h3 className="font-semibold text-lg mt-3">Elektroenergetyka</h3>
              <p className="p mt-2">Sieci i instalacje niskiego, średniego i wysokiego napięcia: linie kablowe/napowietrzne, stacje, rozdzielnie, przyłącza.</p>
            </article></Reveal>

            <Reveal delay={0.05}><article className="card p-6"><Network className="w-6 h-6" />
              <h3 className="font-semibold text-lg mt-3">Telekomunikacja</h3>
              <p className="p mt-2">Sieci światłowodowe i infrastruktura telekomunikacyjna, w tym łączność krytyczna – od koncepcji po dokumentację.</p>
            </article></Reveal>

            <Reveal delay={0.1}><article className="card p-6"><Shield className="w-6 h-6" />
              <h3 className="font-semibold text-lg mt-3">Teletechnika</h3>
              <p className="p mt-2">CCTV, KD, SSWiN, SAP/DSO i automatyka budynkowa – bezpieczeństwo i niezawodność rozwiązań.</p>
            </article></Reveal>
          </div>
        </div>
      </section>

      {/* BreadcrumbList JSON-LD */}
      <Script id="ld-breadcrumbs-services" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://pbprojekt.lublin.pl/uslugi' },
            ],
          }),
        }}
      />
    </main>
  )
}
