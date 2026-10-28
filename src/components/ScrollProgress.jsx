import { m, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-brand"
    />
  )
}
