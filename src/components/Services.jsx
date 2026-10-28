import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getIcon } from '../lib/icons'
import { services, servicesIntro } from '../data/site'
import Reveal, { Stagger, childVariants } from './Reveal'

/**
 * Live layout: centred eyebrow + heading + lead, then five cards on a soft
 * tinted background. The first card ships filled red; the rest are outlined
 * and fill red on hover. Every card carries the diagonal radius and a large
 * translucent watermark of its own icon in the bottom-right corner.
 */
export default function Services() {
  return (
    <section id="services" className="bg-[#0000001c] py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{servicesIntro.eyebrow}</p>
          <h2 className="mt-4">{servicesIntro.title}</h2>
          <p className="mt-4">{servicesIntro.body}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = getIcon(s.icon)
            const filled = i === 0
            return (
              <motion.article
                key={s.title}
                variants={childVariants}
                className={`group relative flex flex-col overflow-hidden p-8 transition-colors duration-300 sm:p-10 r-diag ${
                  filled
                    ? 'bg-brand text-white shadow-[0_0_30px_1px_rgba(0,0,0,0.08)]'
                    : 'border border-line bg-transparent hover:bg-brand'
                }`}
              >
                {/* Hover watermark — matches the live theme's oversized glyph. */}
                <Icon
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 right-0 h-[100px] w-[100px] text-white/10 opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100"
                  strokeWidth={1}
                />

                <span
                  className={`relative ${filled ? 'text-white' : 'text-brand'}`}
                >
                  <Icon className="h-[50px] w-[50px]" strokeWidth={1.5} />
                </span>

                <h3
                   className={`relative mt-4 ${
                    filled ? 'text-white' : 'text-black group-hover:text-white'
                  }`}
                >
                  {s.title}
                </h3>

                <p
                  className={`relative mt-3 mb-5 ${
                    filled ? 'text-white' : 'group-hover:text-white'
                  }`}
                >
                  {s.body}
                </p>

                <Link
                  to={s.to}
                  className={`relative mt-auto w-fit text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    filled ? 'text-white' : 'text-brand group-hover:text-white'
                  }`}
                >
                  Read More
                  <span className="sr-only">{` about ${s.title}`}</span>
                </Link>
              </motion.article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
