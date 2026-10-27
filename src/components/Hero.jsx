import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.background})` }}
        />
        <div className="absolute inset-0 bg-overlay/72" />
      </div>

      <div className="container-x grid w-full items-center gap-10 py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pb-1.5 text-white"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1.5 max-w-xl font-bold text-white"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <Link to={hero.cta.to} className="btn-primary">
              {hero.cta.label}
            </Link>
          </motion.div>
        </div>

        {/* Right column is hidden on mobile on the live site too. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden justify-center lg:flex"
        >
          <img
            src={hero.image}
            alt="Bitsbay - Custom Software & Amazon Growth Agency"
            width={420}
            height={426}
            fetchPriority="high"
            sizes="420px"
            className="w-full max-w-[420px] aspect-[420/426] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
