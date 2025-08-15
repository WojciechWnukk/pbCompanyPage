import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Nie rób nic w dev
  if (process.env.NODE_ENV !== 'production') return NextResponse.next()

  const url = req.nextUrl
  const host = req.headers.get('host') ?? url.hostname

  // Bezpieczeństwo: nie ruszaj localhostów i adresów prywatnych (gdybyś kiedyś odpalał prod lokalnie)
  const isLocal =
    host.startsWith('localhost') ||
    host.startsWith('127.0.0.1') ||
    host.endsWith('.local')

  if (isLocal) return NextResponse.next()

  const isWWW = host.startsWith('www.')
  const proto = req.headers.get('x-forwarded-proto') || url.protocol.replace(':', '')

  if (proto !== 'https' || isWWW) {
    url.protocol = 'https:'
    if (isWWW) url.hostname = host.replace(/^www\./, '')
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

// (opcjonalnie) nie uruchamiaj middleware dla zasobów statycznych
export const config = {
  matcher: ['/((?!_next|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml).*)'],
}
