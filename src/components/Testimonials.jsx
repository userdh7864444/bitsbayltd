import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials, testimonialsIntro } from '../data/site'
import Reveal from './Reveal'

/**
 * Mirrors the live Swiper: 1 card per view on mobile, 2 from 768px, 3 from
 * 1024px, looping automatically. Cards are white with the diagonal radius,
 * a red quote glyph and an italic quote, set over a dark photo background.
 */
function perView(width) {
  if (width >= 1024) return 3
  if (width >= 768) return 2
  return 1
}

export default function Testimonials() {
  const [view, setView] = useState(3)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef(null)

  useEffect(() => {
    const onResize = () => setView(perView(window.innerWidth))
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const pages = Math.max(1, testimonials.length - view + 1)

  const go = useCallback(
    (next) => setIndex(((next % pages) + pages) % pages),
    [pages]
  )

  useEffect(() => {
    if (paused || pages <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % pages), 2400)
    return () => clearInterval(id)
  }, [paused, pages])

  useEffect(() => {
    if (index > pages - 1) setIndex(0)
  }, [pages, index])

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-[100px]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src="/banners/testimonials.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay/92" />
      </div>

      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{testimonialsIntro.eyebrow}</p>
          <h2 className="mt-4 text-white">{testimonialsIntro.title}</h2>
          <p className="mt-4 font-bold text-white/80">{testimonialsIntro.body}</p>
        </Reveal>

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            ref={trackRef}
            className="flex"
            animate={{ x: `-${index * (100 / view)}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / view}%` }}
              >
                <figure className="h-full bg-white p-8 r-diag sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[5px] border-white bg-muted text-lg font-bold text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                      {t.name.charAt(0)}
                    </span>
                    <figcaption>
                      <strong className="block text-ink">{t.name}</strong>
                      <span className="block text-sm text-body">{t.role}</span>
                    </figcaption>
                  </div>

                  <Quote aria-hidden className="mt-6 h-[50px] w-[50px] text-brand" strokeWidth={1.5} />
                  <blockquote className="mt-3 italic leading-relaxed text-body">
                    {t.body}
                  </blockquote>
                </figure>
              </div>
            ))}
          </motion.div>
        </div>

        {pages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-brand' : 'bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
