'use client'
import { motion } from 'framer-motion'

type Step = [title: string, desc: string]

export function StepsList({ steps }: { steps: Step[] }) {
  return (
    <motion.ol
      className="relative border-l border-gray-200/70 pl-6 md:pl-8 space-y-2 md:space-y-4"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {steps.map(([t, d], i) => (
        <motion.li
          key={t}
          className="relative pt-1"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
        >
          <span className="absolute -left-4 md:-left-10 top-0 grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-white text-xs">
            {i + 1}
          </span>
          <h3 className="font-semibold leading-tight">{t}</h3>
          <p className="p mt-2 leading-relaxed">{d}</p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
