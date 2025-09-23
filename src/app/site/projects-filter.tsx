'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/app/ui/motion'
import { Zap, Network, Shield, Leaf } from 'lucide-react'

type Cat = 'OZE' | 'Elektroenergetyka' | 'Telekomunikacja' | 'Teletechnika'
type Project = { cat: Cat; t: string; d: string; img: string; alt: string; href?: string }

const CAT_META: Record<Cat, { label: string; Icon: any }> = {
  OZE: { label: 'OZE', Icon: Leaf },
  Elektroenergetyka: { label: 'Elektroenergetyka', Icon: Zap },
  Telekomunikacja: { label: 'Telekomunikacja', Icon: Network },
  Teletechnika: { label: 'Teletechnika', Icon: Shield },
}

export default function ProjectsFilter({
  projects,
  defaultCat = 'OZE',
}: {
  projects: Project[]
  defaultCat?: Cat
}) {
  const [cat, setCat] = useState<Cat>(defaultCat)
  const list = useMemo(() => projects.filter(p => p.cat === cat), [projects, cat])

  return (
    <div>
      {/* PRZYCISKI KATEGORII */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 mb-6">
        {(Object.keys(CAT_META) as Cat[]).map((c) => {
          const { label, Icon } = CAT_META[c]
          const active = c === cat
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={active}
              className={`mx-1 inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors
                ${active ? 'bg-[var(--brand,#E21F26)] text-white border-[var(--brand,#E21F26)]' : 'hover:bg-gray-50'}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          )
        })}
      </div>

      {/* SIATKA PROJEKTÓW */}
      <div className="grid gap-6 md:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05} trigger="mount">
            <article className="card overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(min-width:1024px) 33vw,(min-width:768px) 50vw,100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{p.t}</h3>
                <p className="p mt-2">{p.d}</p>
                {p.href && (
                  <a href={p.href} className="inline-block mt-4 text-sm underline">
                    Zobacz realizację →
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
