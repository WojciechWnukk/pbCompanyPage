import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pbprojekt.lublin.pl/', priority: 1 },
    { url: 'https://pbprojekt.lublin.pl/polityka-prywatnosci', priority: 0.5 }
  ]
}