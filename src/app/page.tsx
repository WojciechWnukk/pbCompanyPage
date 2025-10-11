import type { Metadata } from 'next'
import { FadeUp, Reveal } from '../app/ui/motion'
import Counter from '../app/ui/counter'
import Image from 'next/image'
import ContactForm from './ui/contact-form'


export const metadata: Metadata = {
  title: 'Projektowanie instalacji elektrycznych, teletechnicznych i OZE',
  description:
    'Biuro projektowe: elektroenergetyka, teletechnika, telekomunikacja i OZE. Od koncepcji po dokumentację. 10+ lat doświadczenia.',
}

export default function HomePage() {
  return (
    <main>
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        {/* TŁO */}
        <div aria-hidden className="absolute inset-0 z-0">
          <Image
            src="/pv2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] md:object-[65%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 md:via-white/60 to-transparent" />
        </div>
        <div className="relative z-10 wrap grid items-center gap-10 md:grid-cols-2">
          <FadeUp className="max-w-2xl">
            <h1 className="h1">
              Projektowanie instalacji elektrycznych, teletechnicznych i OZE
            </h1>
            <p className="p mt-4">
              Kompletne opracowania dla inwestycji budowlanych i infrastrukturalnych – od koncepcji do dokumentacji wykonawczej.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/kontakt" className="btn btn-primary">Wyceń projekt</a>
              <a href="/uslugi" className="btn btn-secondary">Zobacz usługi</a>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="card p-6 md:p-8">
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
                <li>
                  <Counter value={10} suffix="+" className="text-2xl font-semibold" />
                  <div className="text-sm text-gray-600">lat doświadczenia</div>
                </li>
                <li>
                  <Counter value={1000} suffix="+" className="text-2xl font-semibold" />
                  <div className="text-sm text-gray-600">projektów</div>
                </li>
                <li>
                  <Counter value={50} suffix="+ MW" className="text-2xl font-semibold" />
                  <div className="text-sm text-gray-600">w OZE</div>
                </li>
                <li>
                  <span className="text-2xl font-semibold">PL</span>
                  <div className="text-sm text-gray-600">działamy w całym kraju</div>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="services" className="section bg-gray-50">
        <div className="wrap">
          <h2 className="h2 mb-8">Co robimy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal key={s.t} delay={idx * 0.05}>
                <a href="/uslugi" className="card p-6 hover:shadow-md transition-shadow block">
                  <h3 className="font-semibold text-lg">{s.t}</h3>
                  <p className="p mt-2">{s.d}</p>
                  <span className="inline-block mt-4 text-sm text-gray-700 underline">Więcej →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="h2">Wybrane realizacje</h2>
            <a href="/realizacje" className="text-sm underline">Zobacz wszystkie</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
  {projects.map((p, i) => (
    <Reveal key={p.t} delay={i * 0.06}>
      <article className="card p-0 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative aspect-video">
          <Image
            src={p.img}
            alt={p.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg">{p.t}</h3>
          <p className="p mt-2">{p.d}</p>
          {/* {p.href && (
            <a href={p.href} className="inline-block mt-4 text-sm underline">
              Zobacz realizację →
            </a>
          )} */}
        </div>
      </article>
    </Reveal>
  ))}
</div>

        </div>
      </section>

<section id="kontakt" className="section bg-gray-50">
  <div className="wrap grid gap-10 md:grid-cols-2 items-start">
    <div className="md:col-start-1 md:row-start-1 md:order-1">
      <h2 className="h2 mb-4">Skontaktuj się</h2>
      <p className="p">
        PB PROJEKT Sp. z o.o.<br />
        ul. Długa 5/142, 20-346 Lublin<br />
        NIP: 712-333-86-74 • REGON: 367142106
      </p>
      <p className="p mt-2">
        E-mail: <a className="underline" href="mailto:biuro@pbprojekt.lublin.pl">biuro@pbprojekt.lublin.pl</a><br />
        Telefon: <a className="underline" href="tel:+48574001545">+48 574 001 545</a>
      </p>
    </div>

    <div className="md:col-start-2 md:row-start-1 md:order-2">
      <ContactForm />
    </div>
  </div>
</section>
    </main>
  )
}

const services = [
  { t: 'Elektroenergetyka', d: 'Sieci i instalacje nN/SN/WN, stacje, rozdzielnie, przyłącza.' },
  { t: 'Teletechnika i telekomunikacja', d: 'Światłowody, CCTV, KD, SSWiN, SAP/DSO i automatyka.' },
  { t: 'Odnawialne Źródła Energii', d: 'Farmy PV i wiatrowe, magazyny energii, wyprowadzenie mocy.' },
]

const projects = [
  {
    t: 'Farma fotowoltaiczna 5 MW – Lubelskie',
    d: 'Projekt wyprowadzenia mocy: stacja SN/nn, zabezpieczenia, telemechanika i łączność OSD.',
    img: '/img/projects/example.jpg',
    alt: 'Farma fotowoltaiczna – rzędy paneli PV w terenie',
    href: '/realizacje/oz%20e-pv-5mw-lubelskie',
  },
  {
    t: 'Rozdzielnia nN w zakładzie produkcyjnym',
    d: 'Modernizacja rozdzielni nN z analizą obciążeń i doborem zabezpieczeń.',
    img: '/img/projects/example.jpg',
    alt: 'Wnętrze rozdzielni elektrycznej nN – szafy i aparatura',
    href: '/realizacje/rozdzielnia-nn-modernizacja',
  },
  {
    t: 'Sieć światłowodowa dla biurowca klasy A',
    d: 'Projekt FTTH/FTTB, szachty teletechniczne, patch panele i oznaczenia.',
    img: '/img/projects/example.jpg',
    alt: 'Światłowody i patch panele w szafie rack',
    href: '/realizacje/siec-swiatlowodowa-biurowiec',
  }
]
