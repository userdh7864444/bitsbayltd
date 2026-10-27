import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from '../Reveal'
import SectionHead from './SectionHead'

/**
 * Accordion FAQ block. Accepts section.entries = [{ title, body }].
 * Uses schema.org FAQPage JSON-LD for rich-result eligibility.
 */
export default function FaqBlock({ section }) {
  const { heading = 'Frequently Asked Questions', subheading, entries = [] } = section
  const [open, setOpen] = useState(null)

  if (!entries.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.title,
      acceptedAnswer: { '@type': 'Answer', text: e.body },
    })),
  }

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-[#0000001c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-x">
        <SectionHead heading={heading} subheading={subheading} />

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-line">
          {entries.map((item, i) => (
            <Reveal key={i}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-ink transition-colors hover:text-brand"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="pb-5 leading-relaxed text-sm">{item.body}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
