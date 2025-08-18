import type { Metadata } from 'next'
import { FadeUp, Reveal } from '../app/ui/motion'
import Counter from '../app/ui/counter'

export const metadata: Metadata = {
  title: 'Projektowanie instalacji elektrycznych, teletechnicznych i OZE',
  description:
    'Biuro projektowe: elektroenergetyka, teletechnika, telekomunikacja i OZE. Od koncepcji po dokumentację. 10+ lat doświadczenia.',
}

export default function HomePage() {
  return (
    <main>
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <FadeUp className="max-w-2xl">
            <h1 className="h1">Projektowanie instalacji elektrycznych, teletechnicznych i OZE</h1>
            <p className="p mt-4">Kompletne opracowania dla inwestycji budowlanych i infrastrukturalnych – od koncepcji do dokumentacji wykonawczej.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="btn btn-primary">Wyceń projekt</a>
              <a href="/uslugi" className="btn">Zobacz usługi</a>
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

      {/* Skrót usług z animacją przy przewijaniu */}
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

      {/* Realizacje – zajawka z animacją */}
      <section className="section">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="h2">Wybrane realizacje</h2>
            <a href="/realizacje" className="text-sm underline">Zobacz wszystkie</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <article className="card p-6">
                  <div className="aspect-video rounded-xl bg-gray-100" />
                  <h3 className="font-semibold mt-4">{t}</h3>
                  <p className="p">Opis skrócony realizacji – do podmiany.</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt – CTA */}
      <section id="kontakt" className="section bg-gray-50">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h2 mb-4">Skontaktuj się</h2>
            <p className="p">PB PROJEKT Sp. z o.o.<br/>ul. Długa 5/142, 20-346 Lublin<br/>NIP: 712-333-86-74 • REGON: 367142106</p>
            <p className="p mt-2">E-mail: <a className="underline" href="mailto:biuro@pbprojekt.lublin.pl">biuro@pbprojekt.lublin.pl</a><br/>Telefon: <a className="underline" href="tel:+48574001545">+48 574 001 545</a></p>
          </div>
          <ContactForm />
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
  'Modernizacja rozdzielni nN',
  'Instalacja teletechniczna w biurowcu',
  'Oświetlenie LED – modernizacja',
]

function ContactForm() {
  return (
    <form action={send} className="card p-6 md:p-8">
      <h3 className="font-semibold text-lg">Formularz kontaktowy</h3>
      <div className="mt-4 grid gap-4">
        <input name="name" required placeholder="Imię i nazwisko" className="border rounded-xl px-4 py-3" />
        <input name="email" required type="email" placeholder="E-mail" className="border rounded-xl px-4 py-3" />
        <textarea name="message" required placeholder="Wiadomość" className="border rounded-xl px-4 py-3 min-h-[120px]"></textarea>
      </div>
      <button className="btn btn-primary mt-4" type="submit">Wyślij</button>
      <p className="p text-sm mt-3">Wysyłając formularz wyrażasz zgodę na kontakt w sprawie zapytania.</p>
    </form>
  )
}

async function send(formData: FormData) {
  'use server'
  console.log('Lead:', Object.fromEntries(formData.entries()))
}