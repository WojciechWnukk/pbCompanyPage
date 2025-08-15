import { Building2, Cable, ShieldCheck, Wrench } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="wrap grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="h1">Projektowanie i wykonawstwo instalacji elektrycznych i teletechnicznych</h1>
            <p className="p mt-5">
              Kompleksowo realizujemy projekty: od koncepcji i uzgodnień, przez dokumentację, wykonawstwo i pomiary, po serwis i utrzymanie.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="btn btn-primary">Wyceń projekt</a>
              <a href="#uslugi" className="btn">Zobacz usługi</a>
            </div>
          </div>
          <div>
            <div className="card p-6 md:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 shrink-0" /> Uzgodnienia i nadzory</li>
                <li className="flex items-center gap-3"><Building2 className="w-5 h-5 shrink-0" /> Projekty budowlane i wykonawcze</li>
                <li className="flex items-center gap-3"><Cable className="w-5 h-5 shrink-0" /> Instalacje elektryczne i teletechniczne</li>
                <li className="flex items-center gap-3"><Wrench className="w-5 h-5 shrink-0" /> Pomiary i utrzymanie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USŁUGI */}
      <section id="uslugi" className="section bg-gray-50 scroll-mt-28">
        <div className="wrap">
          <h2 className="h2 mb-8">Usługi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="card p-6 hover:shadow-md transition-shadow">
                <s.icon className="w-6 h-6" />
                <h3 className="font-semibold text-lg mt-4">{s.title}</h3>
                <p className="p mt-2">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" className="section scroll-mt-28">
        <div className="wrap">
          <h2 className="h2 mb-4">O nas</h2>
          <p className="p max-w-3xl">
            PB PROJEKT Sp. z o.o. działa w branży elektrycznej i teletechnicznej, realizując prace dla biur architektonicznych,
            sektora publicznego, operatorów energetycznych i telekomunikacyjnych oraz przemysłu. Dostarczamy dokumentację projektową,
            wykonujemy instalacje i prowadzimy okresowe pomiary.
          </p>
        </div>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="section bg-gray-50 scroll-mt-28">
        <div className="wrap">
          <h2 className="h2 mb-8">Wybrane realizacje</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {['Modernizacja rozdzielni nN', 'Instalacja teletechniczna w biurowcu', 'Oświetlenie LED – modernizacja'].map((t, i) => (
              <article key={i} className="card p-6">
                <div className="aspect-video rounded-xl bg-gray-100" />
                <h3 className="font-semibold mt-4">{t}</h3>
                <p className="p">Opis skrócony realizacji – do podmiany po migracji treści.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="section scroll-mt-28">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h2 mb-4">Skontaktuj się</h2>
            <p className="p">
              PB PROJEKT Sp. z o.o.<br />ul. Długa 5/142, 20-346 Lublin<br />
              NIP: 712-333-86-74 • REGON: 367142106
            </p>
            <p className="p mt-2">
              E-mail: <a className="underline" href="mailto:wojti767@gmail.com">biuro@pbprojekt.lublin.pl</a><br />
              Telefon: <a className="underline" href="tel:+48574001545">+48 574 001 545</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

const services = [
  { title: 'Projektowanie elektryczne', desc: 'Projekty budowlane i wykonawcze instalacji elektrycznych nN/SN, dobór urządzeń, bilanse mocy.', icon: Building2 },
  { title: 'Teletechnika i SSP', desc: 'Okablowanie strukturalne, CCTV, SSWiN, KD, systemy SAP/DSO, okablowanie światłowodowe.', icon: Cable },
  { title: 'Pomiary i utrzymanie', desc: 'Pomiary ochronne, protokoły, przeglądy okresowe, serwis i modernizacje instalacji.', icon: Wrench },
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
