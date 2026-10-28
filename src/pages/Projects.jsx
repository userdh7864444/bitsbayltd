import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHeader from './PageHeader'
import Reveal, { Stagger, childVariants } from '../components/Reveal'
import { webProjects, mobileProjects } from '../data/site'
import { staticPagesSeo } from '../data/seoData'

export default function Projects() {
  const seo = staticPagesSeo.projects

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/projects"
        image="/banners/projects.webp"
      />
      <PageHeader title="Projects" image="/banners/projects.webp" />

      <Gallery label="WEB APPLICATIONS" items={webProjects} />
      <Gallery label="MOBILE APPLICATIONS" items={mobileProjects} className="pb-20" />
    </>
  )
}

function Gallery({ label, items, className = '' }) {
  return (
    <section className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      <div className="container-x">
        <Reveal>
          <h2>{label}</h2>
          <span className="mt-3 block h-0.5 w-14 bg-brand" />
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <m.article
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
                <div className="absolute inset-0 bg-overlay/0 transition-colors duration-300 group-hover:bg-overlay/70" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="btn-white">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-black transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm">{p.category}</p>
              </div>
            </m.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
