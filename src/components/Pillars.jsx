import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CircleArrowRight } from 'lucide-react'
import { getIcon } from '../lib/icons'
import { pillars, appointment } from '../data/site'
import { Stagger, childVariants } from './Reveal'

/**
 * Live layout: three centred cards on a light panel, separated by thin
 * dividers, each with a solid red glyph and a red circular arrow. The fourth
 * column is the red "Make Appointment" panel, which runs taller than the rest.
 * The whole strip overlaps the bottom of the hero.
 */
export default function Pillars() {
  return (
    <section className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-[110px]">
      <div className="container-x">
        <Stagger className="grid items-stretch overflow-hidden r-diag shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = getIcon(p.icon)
            return (
              <motion.article
                key={p.title}
                variants={childVariants}
                className={`group bg-muted px-7 py-9 text-center transition-colors duration-300 sm:px-8 sm:py-10 ${
                  i > 0 ? 'lg:border-l lg:border-line/60' : ''
                }`}
              >
                <span className="inline-flex text-brand transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-9 w-9" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 text-[22px] font-semibold text-black">{p.title}</h3>
                <p className="mt-2.5 text-body">{p.body}</p>
                <Link
                  to="/contact"
                  aria-label={`More about ${p.title}`}
                  className="mt-5 inline-flex text-brand transition-transform duration-300 group-hover:translate-x-1"
                >
                  <CircleArrowRight className="h-[26px] w-[26px]" />
                </Link>
              </motion.article>
            )
          })}

          {/* Fourth column: the red appointment panel */}
          <motion.div
            variants={childVariants}
            className="flex flex-col justify-center bg-brand px-7 py-9 text-white sm:px-8 sm:py-10"
          >
            <h3 className="text-[22px] font-semibold text-white">{appointment.title}</h3>
            <p className="mt-2.5 text-white/90">{appointment.body}</p>
            <Link to={appointment.cta.to} className="btn-white mt-6 w-fit">
              {appointment.cta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </Stagger>
      </div>
    </section>
  )
}
