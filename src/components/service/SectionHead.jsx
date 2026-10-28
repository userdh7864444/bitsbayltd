import Reveal from '../Reveal'

/**
 * Shared heading for every service block. Each block used to render its own
 * variation, which is why an `eyebrow` or a second paragraph showed up on one
 * section and disappeared on the next — here every field gets rendered once,
 * the same way, for all four block types.
 */
export default function SectionHead({
  eyebrow,
  heading,
  subheading,
  paragraphs = [],
  className = 'mx-auto max-w-3xl text-center',
}) {
  if (!eyebrow && !heading && !subheading && !paragraphs.length) return null

  return (
    <div className={className}>
      <Reveal>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <h2 className={eyebrow ? 'mt-3' : ''}>{heading}</h2>}
        {subheading && <p className="mt-4 leading-relaxed">{subheading}</p>}
      </Reveal>

      {paragraphs.length > 0 && (
        <Reveal delay={0.08}>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Reveal>
      )}
    </div>
  )
}
