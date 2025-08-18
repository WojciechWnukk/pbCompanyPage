'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/uslugi', label: 'Usługi' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/jak-pracujemy', label: 'Jak pracujemy' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/#kontakt', label: 'Kontakt', anchor: true },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // zamknij po zmianie ścieżki
  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string, anchor?: boolean) =>
    !anchor && href !== '/' && pathname?.startsWith(href)

  const linkCls = (href: string, anchor?: boolean) =>
    `px-1 py-2 text-sm transition ${
      isActive(href, anchor) ? 'text-gray-900 font-semibold border-b-2 border-blue-600' : 'text-gray-700 hover:text-gray-900'
    }`

  return (
    <header className="header-glass">
      <div className="wrap flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="font-semibold tracking-tight">PB PROJEKT</Link>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            l.anchor ? (
              <a key={l.label} href={l.href} className={linkCls(l.href, l.anchor)}>{l.label}</a>
            ) : (
              <Link key={l.label} href={l.href} className={linkCls(l.href)}>{l.label}</Link>
            )
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href="#kontakt" className="btn btn-primary text-sm hidden md:inline-flex">Skontaktuj się</a>
          <button
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex p-2 rounded-lg border border-gray-200"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)}>
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="ml-auto h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-lg border border-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-3 mt-2">
              {LINKS.map(l =>
                l.anchor ? (
                  <a key={l.label} href={l.href} className={linkCls(l.href, l.anchor)}>{l.label}</a>
                ) : (
                  <Link key={l.label} href={l.href} className={linkCls(l.href)}>{l.label}</Link>
                )
              )}
            </nav>
            <a href="#kontakt" className="btn btn-primary mt-auto">Skontaktuj się</a>
          </div>
        </div>
      )}
    </header>
  )
}
