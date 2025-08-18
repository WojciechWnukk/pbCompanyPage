'use client'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

export function FadeUp({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Reveal – animacja wejścia z kontrolą wyzwalacza:
 *  - trigger="mount"  → start po wejściu na stronę (mount)
 *  - trigger="scroll" → start po wejściu w viewport (on scroll)
 *  - trigger="auto"   → jeśli element jest od razu widoczny, zadziała jak "mount",
 *                       w przeciwnym wypadku czeka do przewinięcia (domyślnie)
 */
export function Reveal({
  children,
  className,
  delay = 0,
  trigger = 'auto',
}: {
  children: ReactNode
  className?: string
  delay?: number
  trigger?: 'auto' | 'mount' | 'scroll'
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimationControls()
  const inView = useInView(ref, { margin: '-100px', amount: 0.2 })

  useEffect(() => {
    const shouldStart =
      trigger === 'mount' || (trigger === 'scroll' ? inView : inView) // 'auto' == inView
    if (shouldStart) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay } })
    }
  }, [trigger, inView, delay, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}
