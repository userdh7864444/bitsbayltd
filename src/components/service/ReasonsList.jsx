import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal, { Stagger, childVariants } from '../Reveal'
import SectionHead from './SectionHead'

/**
 * Checklist block. Entries arrive as plain strings in the data, but a
 * `{ title, body }` entry keeps both lines instead of being flattened into
 * one string.
 */
export default function ReasonsList({ section }) {
  const { eyebrow, heading, subheading, paragraphs, entries, image, ctaText, ctaTo } = section

  const split = image && entries.length

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          paragraphs={paragraphs}
        />

        <div className={`mt-10 gap-10 ${split ? 'grid items-center lg:grid-cols-2 lg:gap-16' : ''}`}>
          {image && (
            <Reveal>
              <img
                src={image}
                alt=""
                loading="lazy"
                className="mx-auto w-full max-w-md object-contain"
              />
            </Reveal>
          )}

          {entries.length > 0 && (
            <Stagger className={`grid gap-4 ${split ? '' : 'mx-auto max-w-3xl sm:grid-cols-2'}`}>
              {entries.map((entry, i) => (
                <motion.div
                  key={`${entry.title || entry.body}-${i}`}
                  variants={childVariants}
                  className="flex items-start gap-3 border border-line bg-white px-5 py-4 r-diag-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" />
                  <span className="leading-relaxed text-ink">
                    {entry.title && <span className="block">{entry.title}</span>}
                    {entry.body && (
                      <span className={`block text-sm ${entry.title ? 'mt-1 opacity-80' : ''}`}>
                        {entry.body}
                      </span>
                    )}
                  </span>
                </motion.div>
              ))}
            </Stagger>
          )}
        </div>

        {ctaText && (
          <Reveal delay={0.1} className="mt-10 text-center">
            <Link to={ctaTo} className="btn-primary">
              {ctaText}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
