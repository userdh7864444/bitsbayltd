import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { successStories, successIntro } from '../data/site'
import Reveal, { Stagger, childVariants } from './Reveal'

/**
 * Two uses on the live site:
 *  - homepage "Success Stories": heading + paragraph on the left, the
 *    All PROJECTS button on the right, no cards.
 *  - about page "Meet With Our Satisfied Clients": intro copy plus the five
 *    project cards (framed screenshot, name, E-Commerce tag).
 */
export default function SuccessStories({
  eyebrow,
  title = successIntro.title,
  body = successIntro.body,
  cta = successIntro.cta,
  showCards = false,
  className = 'pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-[100px] lg:pb-16',
}) {
  return (
<section className={className}>
  <div className="container-x">
    <div className="grid items-center gap-6 bg-brand px-6 py-8 text-white r-diag-lg sm:px-10 sm:py-10 lg:grid-cols-[70fr_30fr] lg:px-[50px]">
      <Reveal>
        {eyebrow && (
          <h5 className="eyebrow mb-4 !text-white">
            {eyebrow}
          </h5>
        )}

        <h2 className="!text-white">
          {title}
        </h2>

        <p className="mt-4 leading-relaxed !text-white/90">
          {body}
        </p>
      </Reveal>

      {cta && (
        <Reveal delay={0.1} className="lg:justify-self-end">
          <Link to={cta.to} className="btn-white">
            {cta.label}
          </Link>
        </Reveal>
      )}
    </div>

    {showCards && (
      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {successStories.map((p) => (
          <motion.article
            key={p.slug}
            variants={childVariants}
            className="group relative overflow-hidden border border-line bg-white transition-shadow duration-300 r-diag hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]"
          >
            <Link
              to={`/projects/${p.slug}`}
              className="absolute inset-0 z-10"
              aria-label={p.title}
            />

            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.title}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-black transition-colors group-hover:text-brand">
                {p.title}
              </h3>

              <p className="mt-1.5 text-sm">
                {p.tag}
              </p>
            </div>
          </motion.article>
        ))}
      </Stagger>
    )}
  </div>
</section>
  )
}
