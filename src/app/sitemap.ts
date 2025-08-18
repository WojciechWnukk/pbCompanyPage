import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pbprojekt.lublin.pl/', priority: 1 },
    { url: 'https://pbprojekt.lublin.pl/uslugi', priority: 0.8 },
    { url: 'https://pbprojekt.lublin.pl/realizacje', priority: 0.7 },
    { url: 'https://pbprojekt.lublin.pl/polityka-prywatnosci', priority: 0.5 },
  ]
}