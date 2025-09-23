import type { Metadata } from 'next'
import Script from 'next/script'
import { Reveal } from '@/app/ui/motion'
import { CheckCircle2, Zap, Network, Shield, Factory, Building2, Radio } from 'lucide-react'
import Image from 'next/image'
import ProjectsFilter from '@/app/site/projects-filter'



export const metadata: Metadata = {
  title: 'Realizacje – PB PROJEKT',
  description:
    'Projekty w całej Polsce – OZE, elektroenergetyka, teletechnika, telekomunikacja. Od koncepcji po dokumentację wykonawczą.',
}


export default function ProjectsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Realizacje</span>
          <h1 className="h1 mt-2">Projekty, które zmieniają przestrzeń</h1>
          <p className="lead mt-3 max-w-3xl">
            Od lokalnych inwestycji po ogólnopolskie przedsięwzięcia infrastrukturalne.
          </p>
        </div>
      </section>

      {/* OZE */}
      <section className="section after-hero">
        <div className="wrap grid md:grid-cols-2 gap-10 items-start">
          <Reveal trigger="mount">
            <div>
              <h2 className="h2">Odnawialne Źródła Energii (OZE)</h2>
              <p className="p mt-2">Projektujemy kompleksowo farmy fotowoltaiczne, wiatrowe i magazyny energii.</p>
              <ul className="list-icon mt-4">
                <li><CheckCircle2 /> Dobór komponentów instalacji OZE</li>
                <li><CheckCircle2 /> Układy zasilania DC/AC</li>
                <li><CheckCircle2 /> Wyprowadzenie mocy do sieci OSD: stacje, przyłącza SN, telemechanika, sterowanie, łączność</li>
                <li><CheckCircle2 /> Analizy prądowo–napięciowe dla wyprowadzenia mocy</li>
                <li><CheckCircle2 /> Bilans mocy biernej i dobór kompensacji</li>
                <li><CheckCircle2 /> Dobór zabezpieczeń i obliczenia nastaw</li>
                <li><CheckCircle2 /> Obwody wtórne rozdzielnic – w kompletnym zakresie</li>
              </ul>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.05}>
  <aside className="card p-0 overflow-hidden">
    <div className="relative aspect-video">
      <Image
        src="/img/projects/example.jpg"
        alt="Przykładowa realizacja OZE (PV/wiatr/magazyn energii)"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>
    <div className="p-6">
      <p className="p">Farma PV 5 MW — Lubelskie</p>
    </div>
  </aside>
</Reveal>
        </div>
      </section>

      {/* Energetyka / Telekomunikacja / Teletechnika */}
      <section className="section bg-gray-50">
        <div className="wrap">
          <h2 className="h2 mb-6">Energetyka, teletechnika, telekomunikacja</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal trigger="mount">
              <article className="card p-6">
                <Zap className="w-6 h-6" />
                <h3 className="font-semibold text-lg mt-3">Elektroenergetyka</h3>
                <p className="p mt-2">
                  Sieci i instalacje nN/SN/WN: linie kablowe i napowietrzne, stacje transformatorowe, rozdzielnie oraz przyłącza energetyczne.
                </p>
              </article>
            </Reveal>
            <Reveal trigger="mount" delay={0.05}>
              <article className="card p-6">
                <Network className="w-6 h-6" />
                <h3 className="font-semibold text-lg mt-3">Telekomunikacja</h3>
                <p className="p mt-2">
                  Projekty sieci światłowodowych, infrastruktury telekomunikacyjnej i łączności krytycznej – we współpracy z operatorami i przedsiębiorstwami.
                </p>
              </article>
            </Reveal>
            <Reveal trigger="mount" delay={0.1}>
              <article className="card p-6">
                <Shield className="w-6 h-6" />
                <h3 className="font-semibold text-lg mt-3">Teletechnika</h3>
                <p className="p mt-2">
                  Systemy CCTV, kontrola dostępu, SSWiN, SAP/DSO oraz automatyka budynkowa – stawiamy na bezpieczeństwo i niezawodność.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Część ogólna + Dla kogo */}
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-10 items-start">
          <Reveal trigger="mount">
            <div>
              <h2 className="h2">
                Projekty, które zmieniają przestrzeń – od lokalnych inwestycji po ogólnopolskie przedsięwzięcia
              </h2>
              <p className="p mt-3">
                Od 2015 roku zrealizowaliśmy setki projektów w całej Polsce – od kameralnych inwestycji po rozbudowane przedsięwzięcia
                infrastrukturalne. Współpracujemy z różnymi podmiotami, dostosowując zakres i sposób realizacji do ich potrzeb
                oraz specyfiki branży.
              </p>
              <p className="p mt-3 font-medium">
                Każda realizacja to połączenie inżynierskiej precyzji, znajomości przepisów i praktycznego podejścia do harmonogramu.
              </p>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.05}>
            <div>
              <h2 className="h2">Dla kogo pracujemy</h2>
              <ul className="list-icon mt-4">
                <li><Factory /> Inwestorzy prywatni – firmy, deweloperzy, przedsiębiorstwa produkcyjne</li>
                <li><Building2 /> Jednostki samorządu terytorialnego – infrastruktura i obiekty użyteczności publicznej</li>
                <li><Building2 /> Spółki Skarbu Państwa – modernizacje i rozbudowa infrastruktury</li>
                <li><Factory /> Operatorzy OSD – projekty sieci i przyłączy</li>
                <li><Radio /> Operatorzy telekomunikacyjni – budowa i rozbudowa sieci światłowodowych i teletechnicznych</li>
                <li><Factory /> Firmy wykonawcze – sprawdzony partner w formule „projektuj i buduj”</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wybrane realizacje */}
      <section className="section bg-gray-50">
  <div className="wrap">
    <div className="flex items-end justify-between gap-4 mb-6">
      <h2 className="h2">Wybrane realizacje</h2>
      {/* <a href="/realizacje" className="hidden md:inline-block text-sm underline">Zobacz wszystkie</a> */}
    </div>

    <ProjectsFilter projects={PROJECTS} defaultCat="OZE" />
  </div>
</section>

      {/* Breadcrumbs */}
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

type Cat = 'OZE' | 'Elektroenergetyka' | 'Telekomunikacja' | 'Teletechnika'
type Project = { cat: Cat; t: string; d: string; img: string; alt: string; href?: string }

const PROJECTS: Project[] = [
  // OZE (3)
  { cat: 'OZE', t: 'Farma PV 5 MW — Lubelskie',
    d: 'Wyprowadzenie mocy: stacja SN/nn, zabezpieczenia, telemechanika i łączność OSD.',
    img: '/img/projects/example.jpg', alt: 'Rzędy paneli fotowoltaicznych' },
  { cat: 'OZE', t: 'Magazyn energii 1 MWh — integracja z PV',
    d: 'Dobór BESS, schematy AC/DC oraz algorytm pracy na styku z siecią.',
    img: '/img/projects/example.jpg', alt: 'Kontenerowy magazyn energii' },
  { cat: 'OZE', t: 'Farma wiatrowa — wyprowadzenie mocy',
    d: 'Przyłącze SN, układy zabezpieczeń, telemechanika i nadzór autorski.',
    img: '/img/projects/example.jpg', alt: 'Turbiny wiatrowe w terenie' },

  // Elektroenergetyka (3)
  { cat: 'Elektroenergetyka', t: 'Rozdzielnia nN — modernizacja',
    d: 'Analiza obciążeń, dobór zabezpieczeń i dokumentacja wykonawcza.',
    img: '/img/projects/example.jpg', alt: 'Wnętrze rozdzielni nN' },
  { cat: 'Elektroenergetyka', t: 'Stacja transformatorowa SN/nn',
    d: 'Projekt pól odpływowych, OSN, uziemienia i koordynacja zabezpieczeń.',
    img: '/img/projects/example.jpg', alt: 'Stacja transformatorowa' },
  { cat: 'Elektroenergetyka', t: 'Linia kablowa SN w mieście',
    d: 'Trasa kablowa, uzgodnienia, bilans mocy i dokumentacja powykonawcza.',
    img: '/img/projects/example.jpg', alt: 'Ułożenie linii kablowej SN' },

  // Telekomunikacja (3)
  { cat: 'Telekomunikacja', t: 'Sieć światłowodowa biurowca',
    d: 'FTTH/FTTB, szachty teletechniczne, patch panele i oznaczenia.',
    img: '/img/projects/example.jpg', alt: 'Patch panele światłowodowe' },
  { cat: 'Telekomunikacja', t: 'Łączność krytyczna (rezerwowe łącza)',
    d: 'Redundantne tory transmisji, SLA, monitoring i alerting.',
    img: '/img/projects/example.jpg', alt: 'Urządzenia telekomunikacyjne' },
  { cat: 'Telekomunikacja', t: 'Dosył optyczny do OSD',
    d: 'Węzły dostępowe DWDM i integracja z telemechaniką.',
    img: '/img/projects/example.jpg', alt: 'Światłowód w trasach kablowych' },

  // Teletechnika (3)
  { cat: 'Teletechnika', t: 'CCTV + Kontrola Dostępu',
    d: 'Kamery 4K, KD, SSWiN, zasilanie PoE i rezerwa z UPS.',
    img: '/img/projects/example.jpg', alt: 'Kamery CCTV na obiekcie' },
  { cat: 'Teletechnika', t: 'SAP/DSO — obiekt publiczny',
    d: 'Detekcja pożaru, sterowanie DSO i scenariusze pożarowe.',
    img: '/img/projects/example.jpg', alt: 'Centrala systemu pożarowego' },
  { cat: 'Teletechnika', t: 'Automatyka budynkowa (BMS)',
    d: 'Integracja HVAC/elektryka, DALI i harmonogramy.',
    img: '/img/projects/example.jpg', alt: 'Szafa automatyki' },
]
