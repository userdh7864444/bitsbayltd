import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { hero } from '../data/site'

/**
 * Live layout: a full-bleed photo with a 0.72 dark overlay, two columns —
 * headline + lead + Get Started on the left, the Bitsbay mark on the right
 * (hidden on mobile). Both columns animate in from the left, as on the
 * original (Gutenverse `desktop-fadeInLeft`).
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden md:min-h-[660px] lg:min-h-[780px]">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="hero-bg-responsive h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/banners/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-overlay/72" />
      </div>

      <div className="container-x grid w-full items-center gap-10 py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-28">
        <div>
          <m.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pb-1.5 text-white"
          >
            {hero.title}
          </m.h1>

          <m.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1.5 max-w-xl font-bold text-white"
          >
            {hero.subtitle}
          </m.p>

          <m.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <Link to={hero.cta.to} className="btn-primary">
              {hero.cta.label}
            </Link>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex justify-center mt-6 lg:mt-0"
        >
          <img
            src="/hero-logo.webp"
            srcSet="/hero-logo-sm.webp 260w, /hero-logo.webp 420w"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 420px"
            alt="Bitsbay - Custom Software & Amazon Growth Agency"
            width={420}
            height={426}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[420px] aspect-[420/426] h-auto object-contain"
          />
        </m.div>
      </div>
    </section>
  )
}
