import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getIcon } from '../../lib/icons'
import { gridColumns } from '../../lib/serviceSections'
import { Stagger, childVariants } from '../Reveal'
import SectionHead from './SectionHead'

/**
 * The value/feature card grid. Cards use the theme's diagonal radius; the
 * first can ship filled red, and the rest fill red on hover, exactly like the
 * live "What Service We Offer" cards.
 */
export default function CardsGrid({ section }) {
  const {
    eyebrow,
    heading,
    subheading,
    paragraphs,
    entries,
    columns,
    featuredFirst,
    linkLabel,
    ctaText,
    ctaTo,
  } = section

  const cols = gridColumns(columns, entries.length, 4)

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          paragraphs={paragraphs}
        />

        {entries.length > 0 && (
          <Stagger className={`mt-10 grid gap-6 ${cols}`}>
            {entries.map((entry, i) => {
              const Icon = getIcon(entry.icon)
              const filled = featuredFirst && i === 0
              return (
                <motion.div
                  key={`${entry.title || 'card'}-${i}`}
                  variants={childVariants}
                  className={`group relative flex flex-col overflow-hidden p-8 transition-colors duration-300 r-diag ${
                    filled
                      ? 'bg-brand text-white shadow-[0_0_30px_1px_rgba(0,0,0,0.08)]'
                      : 'border border-line bg-white hover:bg-brand'
                  }`}
                >
                  <Icon
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 right-0 h-[100px] w-[100px] text-white/10 opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100"
                    strokeWidth={1}
                  />

                  <span className={`relative ${filled ? 'text-white' : 'text-brand'}`}>
                    <Icon className="h-[46px] w-[46px]" strokeWidth={1.5} />
                  </span>

                  {entry.title && (
                    <h3
                      className={`relative mt-4 ${
                        filled ? 'text-white' : 'text-black group-hover:text-white'
                      }`}
                    >
                      {entry.title}
                    </h3>
                  )}

                  {entry.body && (
                    <p
                      className={`relative mt-3 ${
                        filled ? 'text-white/90' : 'group-hover:text-white'
                      }`}
                    >
                      {entry.body}
                    </p>
                  )}

                  {entry.to && (
                    <Link
                      to={entry.to}
                      className={`relative mt-auto w-fit pt-5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                        filled ? 'text-white' : 'text-brand group-hover:text-white'
                      }`}
                    >
                      {linkLabel}
                      {entry.title && <span className="sr-only">{` about ${entry.title}`}</span>}
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </Stagger>
        )}

        {ctaText && (
          <div className="mt-10 text-center">
            <Link to={ctaTo} className="btn-primary">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
