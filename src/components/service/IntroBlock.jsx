import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import SectionHead from './SectionHead'

/**
 * Copy-only block: eyebrow, heading, every paragraph, optional pills and CTA.
 * All fields are pre-resolved by `normalizeSection`, so nothing here has to
 * guess at aliases or bail out early.
 */
export default function IntroBlock({ section }) {
  const { eyebrow, heading, subheading, paragraphs, pills, ctaText, ctaTo, tight } = section

  return (
    <section className={tight ? 'pb-16 sm:pb-20 lg:pb-[100px]' : 'py-16 sm:py-20 lg:py-[100px]'}>
      <div className="container-x">
        <SectionHead
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          paragraphs={paragraphs}
        />

        {pills.length > 0 && (
          <Reveal delay={0.12} className="mx-auto max-w-3xl">
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {pills.map((pill, i) => (
                <span
                  key={`${pill}-${i}`}
                  className="border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink r-diag-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {ctaText && (
          <Reveal delay={0.16} className="mt-8 text-center">
            <Link to={ctaTo} className="btn-primary">
              {ctaText}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
