import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from './PageHeader'
import { Stagger, childVariants } from '../components/Reveal'
import { posts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" image="/banners/technologies.jpg" />

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <motion.article
                key={p.slug}
                variants={childVariants}
                className="group relative flex flex-col overflow-hidden border border-line bg-white transition-shadow duration-300 r-diag hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]"
              >
                <Link
                  to={`/blog/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={p.title}
                />
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-black transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm">{p.date}</p>
                  <p className="mt-3 line-clamp-3">{p.excerpt}</p>
                  <span className="mt-5 w-fit text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">
                    Read More
                  </span>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
