import SEO from '../components/SEO'
import PageHeader from './PageHeader'
import Reveal from '../components/Reveal'
import { privacyPolicy as p } from '../data/legal'
import { staticPagesSeo } from '../data/seoData'
import ObfuscatedEmail from '../components/ObfuscatedEmail'

function Bullets({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((li) => (
        <li key={li} className="flex gap-3">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand" />
          <span>{li}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  const seo = staticPagesSeo.privacyPolicy

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/privacy-policy"
        image="/banners/about.webp"
      />
      <PageHeader title={p.title} blurb={p.updated} image="/banners/about.webp" />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-4xl">
          {p.sections.map((s, i) => (
            <Reveal key={s.heading} delay={Math.min(i, 4) * 0.04} className="mb-10">
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((t) => (
                <p key={t} className="mt-3 leading-relaxed">
                  {t}
                </p>
              ))}
              {s.list && <Bullets items={s.list} />}
              {s.after?.map((t) => (
                <p key={t} className="mt-3 leading-relaxed">
                  {t}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal className="mt-14 border border-line p-8 r-diag sm:p-10">
            <h2>{p.compliance.heading}</h2>
            {p.compliance.intro.map((t) => (
              <p key={t} className="mt-3 leading-relaxed">
                {t}
              </p>
            ))}

            <div className="mt-8 space-y-7">
              {p.compliance.items.map((item) => (
                <div key={item.heading}>
                  <h3>{item.heading}</h3>
                  {item.paragraphs.map((t) => (
                    <p key={t} className="mt-2 leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2>{p.contact.heading}</h2>
            <p className="mt-3">{p.contact.company}</p>
            <p className="mt-1">
              Email:{' '}
              <ObfuscatedEmail
                email={p.contact.email}
                label="Email Bitsbay support"
                className="text-brand transition-colors hover:underline"
              />
            </p>
            <p className="mt-1">
              Website:{' '}
              <a
                href={p.contact.website}
                target="_blank"
                rel="noreferrer"
                className="text-brand transition-colors hover:underline"
              >
                {p.contact.website}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
