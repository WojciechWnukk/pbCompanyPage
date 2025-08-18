'use client'
import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  duration?: number // sekundy
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  locale?: string
}

export default function Counter({
  value,
  duration = 1.5,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  locale = 'pl-PL',
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(display)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
