import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHeader from './PageHeader'
import Reveal, { Stagger, childVariants } from '../components/Reveal'
import { technologies, technologiesIntro } from '../data/site'
import { techIcons, techLogos } from '../lib/techIcons'
import { staticPagesSeo } from '../data/seoData'

/**
 * /technologies/ — centred intro, then one bordered card per technology
 * carrying its brand logo above the name, grouped by category.
 */
export default function Technologies() {
  const seo = staticPagesSeo.technologies

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/technologies"
        image="/banners/technologies.webp"
      />
      <PageHeader title={technologiesIntro.eyebrow} image="/banners/technologies.webp" uppercaseTitle={false} />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2>{technologiesIntro.title}</h2>
            <p className="mt-6 text-sm">{technologiesIntro.body}</p>
            <p className="mt-6 text-sm">{technologiesIntro.body2}</p>
          </Reveal>

          <div className="mt-14 space-y-12">
            {Object.entries(technologies).map(([group, items]) => (
              <div key={group}>
                <Reveal className="text-center">
                  <h3 className="text-2xl font-bold">{group}</h3>
                </Reveal>

                <Stagger
                  className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
                  style={{ '--cols': items.length }}
                >
                  {items.map((t) => {
                    const entry = techIcons[t]
                    const logo = techLogos[t]
                    return (
                      <motion.div
                        key={`${group}-${t}`}
                        variants={childVariants}
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="flex flex-col items-center justify-center gap-4 rounded-[20px] border border-line bg-white px-4 py-10 text-center"
                      >
                        {logo ? (
                          <img
                            src={logo}
                            alt={`${t} technology logo`}
                            width={80}
                            height={80}
                            loading="lazy"
                            decoding="async"
                            sizes="80px"
                            className="h-20 w-20 aspect-square object-contain"
                          />
                        ) : entry ? (
                          <entry.Icon
                            aria-hidden
                            className="h-20 w-20"
                            style={{ color: entry.color }}
                          />
                        ) : (
                          <span className="h-20 w-20" />
                        )}
                        <h4 className="text-[#575a5f]">{t}</h4>
                      </motion.div>
                    )
                  })}
                </Stagger>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
