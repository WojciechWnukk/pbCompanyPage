import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pbprojekt.lublin.pl'),
  title: {
    default: 'PB PROJEKT – Projektowanie i wykonawstwo instalacji elektrycznych i teletechnicznych',
    template: '%s | PB PROJEKT',
  },
  description:
    'PB PROJEKT Sp. z o.o. – projektowanie, budowa i utrzymanie instalacji elektrycznych i teletechnicznych. Lublin, ul. Długa 5/142, tel. +48 574 001 545.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="antialiased text-gray-900 bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="header-glass">
      <div className="wrap flex items-center justify-between py-3 md:py-4">
        <a href="/" className="font-semibold tracking-tight">PB PROJEKT</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#uslugi" className="hover:text-gray-900">Usługi</a>
          <a href="#o-nas" className="hover:text-gray-900">O nas</a>
          <a href="#realizacje" className="hover:text-gray-900">Realizacje</a>
          <a href="#kontakt" className="hover:text-gray-900">Kontakt</a>
        </nav>
        <a href="#kontakt" className="btn btn-primary text-sm">Skontaktuj się</a>
      </div>
    </header>
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
