import { useRef } from 'react'
import { m, useReducedMotion, useInView } from 'framer-motion'

// Reveal triggers as soon as any part of a block clears this much of the
// viewport. Using a margin rather than an `amount` threshold matters for the
// long service sections: a nine-card process grid can be several screens tall,
// and a percentage threshold on an element that size is slow — or impossible —
// to satisfy, which left whole sections sitting at opacity 0.
const VIEWPORT = { once: true, amount: 'some', margin: '0px 0px -12% 0px' }

/**
 * Scroll-triggered reveal. Wrap any block:
 *   <Reveal delay={0.1}><h2>…</h2></Reveal>
 *
 * Visibility is driven by `useInView` rather than `whileInView` so the observer
 * belongs to this mount. `whileInView` keeps its in-view state on the layout
 * node, so when React recycled a node across routes the block inherited the
 * previous page's state and could stay hidden.
 *
 * When the visitor prefers reduced motion the content renders immediately with
 * no fade or travel at all.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  className = '',
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { ...VIEWPORT, once })

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = m[as] ?? m.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/** Stagger container — children use `childVariants` below. */
export function Stagger({ children, className = '', stagger = 0.09, once = true, style }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { ...VIEWPORT, once })

  if (reduce)
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )

  return (
    <m.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </m.div>
  )
}

export const childVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Word-by-word headline animation. */
export function AnimatedHeading({ text, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) return <h1 className={className}>{text}</h1>

  return (
    <m.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <m.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </m.span>
        </span>
      ))}
    </m.h1>
  )
}
