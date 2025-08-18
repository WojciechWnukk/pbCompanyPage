import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '../app/site/header'
import ClientTransition from './site/client-transition'


export const metadata: Metadata = {
  metadataBase: new URL('https://pbprojekt.lublin.pl'),
  title: {
    default: 'PB PROJEKT – Projektowanie i wykonawstwo instalacji elektrycznych i teletechnicznych',
    template: '%s | PB PROJEKT',
  },
  description:
    'PB PROJEKT Sp. z o.o. – projektowanie, budowa i utrzymanie instalacji elektrycznych i teletechnicznych. Lublin, ul. Długa 5/142, tel. +48 574 001 545.',
  openGraph: {
    type: 'website',
    siteName: 'PB PROJEKT',
    title: 'PB PROJEKT – Instalacje elektryczne i teletechniczne',
    description: 'Projektowanie, wykonawstwo i utrzymanie instalacji elektrycznych i teletechnicznych.',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="antialiased text-gray-900 bg-white">
        <Header />
          <ClientTransition>{children}</ClientTransition>
        <Footer />
        {/* LocalBusiness JSON-LD for SEO */}
        <Script id="ld-localbusiness" type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PB PROJEKT Sp. z o.o.',
              url: 'https://pbprojekt.lublin.pl',
              email: 'biuro@pbprojekt.lublin.pl',
              telephone: '+48 574001545',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ul. Długa 5/142',
                postalCode: '20-346',
                addressLocality: 'Lublin',
                addressCountry: 'PL',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}


function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="wrap py-12 grid gap-8 md:grid-cols-3 text-sm text-gray-600">
        <div>
          <div className="font-semibold mb-2">PB PROJEKT Sp. z o.o.</div>
          <p>ul. Długa 5/142, 20-346 Lublin</p>
          <p>NIP: 712-333-86-74 • REGON: 367142106</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Kontakt</div>
          <p>biuro@pbprojekt.lublin.pl</p>
          <p>+48 574 001 545</p>
        </div>
        <div className="md:text-right text-gray-500">© {new Date().getFullYear()} PB PROJEKT Sp. z o.o.</div>
      </div>
    </footer>
  )
}