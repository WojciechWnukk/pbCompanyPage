import type { Metadata } from 'next'
import Script from 'next/script'
import ContactForm from '@/app/ui/contact-form'

export const metadata: Metadata = {
  title: 'Kontakt — PB PROJEKT',
  description:
    'Skontaktuj się z PB PROJEKT. Odpowiadamy tego samego dnia roboczego. Adres, telefon, e-mail oraz formularz kontaktowy.',
  alternates: { canonical: '/kontakt' },
}

const COMPANY = {
  name: 'PB PROJEKT Sp. z o.o.',
  street: 'ul. Długa 5/142',
  postal: '20-346',
  city: 'Lublin',
  nip: '712-333-86-74',
  regon: '367142106',
  phone: '+48 574 001 545',
  email: 'biuro@pbprojekt.lublin.pl',
}

export default function ContactPage() {
   const MAP = { lat: 51.2344541, lng: 22.5770921, zoom: 18 }
  const MAP_Q = `${MAP.lat},${MAP.lng}`

  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Kontakt</span>
          <h1 className="h1 mt-2">Skontaktuj się z nami</h1>
          <p className="lead mt-3 max-w-3xl">
            Napisz lub zadzwoń — odpowiadamy zazwyczaj w ciągu tego samego dnia roboczego.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="font-semibold text-xl">Dane firmy</h2>
              <address className="not-italic p mt-3">
                <strong>{COMPANY.name}</strong>
                <br />
                {COMPANY.street}
                <br />
                {COMPANY.postal} {COMPANY.city}
                <br />
                NIP: {COMPANY.nip} • REGON: {COMPANY.regon}
              </address>

              <div className="mt-4 space-y-2">
                <p>
                  E-mail:{' '}
                  <a className="underline" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  Telefon:{' '}
                  <a className="underline" href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}>
                    {COMPANY.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-200 bg-white">
              <iframe
              key={MAP_Q}
              title="PB PROJEKT — mapa dojazdu"
              src={`https://www.google.com/maps?q=${MAP_Q}&z=${MAP.zoom}&output=embed`}
              className="w-full aspect-[16/9] md:aspect-[4/3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="inline-block p-4 pt-0 text-sm underline"
              href={`https://www.google.com/maps?q=${MAP_Q}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz w Google Maps
            </a>
            </div>
          </div>

          <div className="md:col-start-2 md:row-start-1">
            <ContactForm />
          </div>
        </div>
      </section>

      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: COMPANY.name,
            url: 'https://pbprojekt.lublin.pl/',
            email: COMPANY.email,
            telephone: COMPANY.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY.street,
              addressLocality: COMPANY.city,
              postalCode: COMPANY.postal,
              addressCountry: 'PL',
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumbs-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://pbprojekt.lublin.pl/kontakt' },
            ],
          }),
        }}
      />
    </main>
  )
}
