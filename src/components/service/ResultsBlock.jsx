import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Reveal, { Stagger, childVariants } from '../Reveal'
import { m } from 'framer-motion'
import SectionHead from './SectionHead'

/**
 * Case-result proof block + internal links.
 * section.entries = [{ stat, label, detail }]  ← numbered results
 * section.links   = [{ label, to }]            ← internal cross-links
 */
export default function ResultsBlock({ section }) {
  const {
    heading = 'Proven Results',
    subheading,
    entries = [],
    links = [],
  } = section

  if (!entries.length && !links.length) return null

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="container-x">
        <SectionHead heading={heading} subheading={subheading} />

        {entries.length > 0 && (
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((e, i) => (
              <m.div
                key={i}
                variants={childVariants}
                className="flex flex-col gap-3 border border-line bg-white p-8 r-diag"
              >
                <TrendingUp className="h-8 w-8 text-brand" strokeWidth={1.5} />
                <p className="text-4xl font-bold text-ink">{e.stat}</p>
                <p className="font-semibold text-ink">{e.label}</p>
                {e.detail && <p className="text-sm leading-relaxed">{e.detail}</p>}
              </m.div>
            ))}
          </Stagger>
        )}

        {links.length > 0 && (
          <Reveal delay={0.1} className="mt-12">
            <p className="font-semibold text-ink mb-4">Related reading</p>
            <ul className="flex flex-wrap gap-4">
              {links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1.5 border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand hover:text-white r-diag-sm"
                  >
                    {l.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
