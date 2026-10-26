import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Stagger, childVariants } from '../Reveal'
import SectionHead from './SectionHead'

/** Numbered process cards, in the theme's diagonal-radius style. */
export default function ProcessSteps({ section }) {
  const { eyebrow, heading, subheading, paragraphs, entries, ctaText, ctaTo } = section

  return (
    <section className="bg-[#0000001c] py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          paragraphs={paragraphs}
        />

        {entries.length > 0 && (
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry, i) => (
              <motion.div
                key={`${entry.title || 'step'}-${i}`}
                variants={childVariants}
                className={`group p-8 transition-colors duration-300 r-diag ${
                  i === 0
                    ? 'bg-brand shadow-[0_0_30px_1px_rgba(0,0,0,0.08)]'
                    : 'border border-line bg-white hover:bg-brand'
                }`}
              >
                <span
                  className={`text-[42px] font-semibold leading-none transition-colors ${
                    i === 0 ? 'text-white/40' : 'text-brand/25 group-hover:text-white/40'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {entry.title && (
                  <h3
                    className={`mt-3 transition-colors ${
                      i === 0 ? 'text-white' : 'text-black group-hover:text-white'
                    }`}
                  >
                    {entry.title}
                  </h3>
                )}

                {entry.body && (
                  <p
                    className={`mt-2.5 transition-colors ${
                      i === 0 ? 'text-white/90' : 'group-hover:text-white'
                    }`}
                  >
                    {entry.body}
                  </p>
                )}
              </motion.div>
            ))}
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
