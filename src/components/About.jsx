import { motion } from 'framer-motion'
import { CheckCircle2, Quote } from 'lucide-react'
import { about, capabilities, mission } from '../data/site'
import Reveal, { Stagger, childVariants } from './Reveal'

/**
 * Live layout: a photo panel on the left (diagonal radius) with the red
 * mission quote box overlapping it, and the "About Company / Our Story"
 * copy on the right above a two-column tick list.
 */
export default function About({ showQuote = true }) {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-[120px]">
      <div
        className={`container-x grid items-center gap-12 lg:gap-16 ${
          showQuote ? 'lg:grid-cols-2' : ''
        }`}
      >
        {showQuote && (
          <Reveal className="lg:pr-10">
            <div className="relative">
              <div className="overflow-hidden r-diag-lg">
                <img
                  src="/about-photo.webp"
                  alt="The Bitsbay software engineering team collaborating at work"
                  width={466}
                  height={520}
                  loading="lazy"
                  decoding="async"
                  className="h-[380px] w-full object-cover aspect-[466/520] sm:h-[460px] lg:h-[520px]"
                />
              </div>

              {/* Red mission quote, offset over the photo as on the live site. */}
              <div className="relative z-10 mx-4 -mt-20 bg-brand px-8 py-9 text-white r-diag-sm sm:mx-10 sm:-mt-24 sm:px-[60px] lg:-mr-10">
                <p className="leading-relaxed text-white">{mission}</p>
                <Quote aria-hidden className="mt-5 h-10 w-10 text-white/60" strokeWidth={1.5} />
              </div>
            </div>
          </Reveal>
        )}

        <div>
          <Reveal>
            <h5 className="eyebrow">{about.eyebrow}</h5>
            <h2 className="mt-4 text-ink">
              <strong>{about.title}</strong>
            </h2>
            <p className="mt-3">{about.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 text-black">
              <strong>{about.storyTitle}</strong>
            </h2>
            <p className="mt-3">
              We at <strong className="text-ink">Bitsbay</strong> are focused in developing
              apps that let our clients stand out in front of their competitors. Our team
              started providing custom-built technology services in{' '}
              <strong className="text-ink">2019</strong> with a vision of building robust,
              innovative and trendsetting solutions.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-x-8 gap-y-3 sm:auto-rows-min sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
            {capabilities.map((c) => (
              <motion.div key={c} variants={childVariants} className="flex items-center gap-3">
                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-brand" />
                <span className="text-ink">{c}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
