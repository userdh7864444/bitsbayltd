import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Wrench, TrendingUp } from 'lucide-react'
import Reveal, { Stagger, childVariants } from '../components/Reveal'
import { getProjectBySlug, allProjects } from '../data/site'
import { projectSeo } from '../data/seoData'

/**
 * Case-study page. Renders client type, problem, solution, results, tech stack,
 * and screenshots in an authoritative case study layout.
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  const others = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3)

  const seo = projectSeo[slug] || {
    title: `${project.title} — Case Study | Bitsbay`,
    description: `Discover how Bitsbay engineered ${project.title}, delivering high-performance ${project.category} solutions and tailored modern digital architecture.`,
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: seo.title,
    description: seo.description,
    author: {
      '@type': 'Organization',
      name: 'Bitsbay Ltd',
      url: 'https://bitsbayltd.com',
    },
    image: project.image ? `https://bitsbayltd.com${project.image}` : undefined,
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path={`/projects/${project.slug}`}
        image={project.image || '/banners/projects.jpg'}
        schema={schema}
      />
      <Banner
        title={project.heading || project.title}
        subtitle={project.clientType ? `${project.clientType} • ${project.category}` : project.category}
        image="/banners/projects.jpg"
      >
        <Link to="/projects" className="btn-white">
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>
      </Banner>

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x max-w-5xl">
          {/* Executive Overview */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand">
                  {project.category}
                </span>
                {project.clientType && (
                  <span className="inline-block rounded-full border border-line bg-white px-3.5 py-1 text-xs font-semibold text-ink">
                    Client: {project.clientType}
                  </span>
                )}
              </div>
              <h2 className="mt-4">Executive Summary</h2>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                {project.description}
              </p>
            </Reveal>

            {project.stack && (
              <Reveal delay={0.1}>
                <div className="border border-line bg-white p-8 r-diag">
                  <div className="flex items-center gap-2.5">
                    <Wrench className="h-5 w-5 text-brand" />
                    <h3 className="text-lg font-bold text-ink">Tech Stack & Tools</h3>
                  </div>
                  <p className="mt-4 font-mono text-sm leading-relaxed text-ink/80">{project.stack}</p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {project.problem && (
                <Reveal>
                  <div className="h-full border border-line bg-white p-8 r-diag">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-red-100 text-red-600">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-ink">The Challenge</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-body">{project.problem}</p>
                  </div>
                </Reveal>
              )}

              {project.solution && (
                <Reveal delay={0.1}>
                  <div className="h-full border border-line bg-white p-8 r-diag">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 text-brand">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-ink">The Engineering Solution</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-body">{project.solution}</p>
                  </div>
                </Reveal>
              )}
            </div>
          )}

          {/* Key Measurable Results */}
          {Array.isArray(project.results) && project.results.length > 0 && (
            <div className="mt-14">
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="h-6 w-6 text-brand" />
                  <h2>Key Measurable Results</h2>
                </div>
                <p className="mt-2 text-sm">
                  Concrete outcomes delivered through our agile development sprints:
                </p>
              </Reveal>

              <Stagger className="mt-6 grid gap-4 sm:grid-cols-3">
                {project.results.map((res, i) => (
                  <motion.div
                    key={i}
                    variants={childVariants}
                    className="flex items-start gap-3 border border-line bg-white p-6 r-diag-sm"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    <p className="font-semibold text-ink leading-snug">{res}</p>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          )}

          {/* Screenshots Gallery */}
          {project.shots?.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <h2>Product Showcase</h2>
              </Reveal>
              <Stagger className="mt-8 grid gap-6 sm:grid-cols-2">
                {project.shots.map((src, i) => (
                  <motion.figure
                    key={src}
                    variants={childVariants}
                    className={`overflow-hidden border border-line bg-muted r-diag ${
                      project.shots.length % 2 !== 0 && i === project.shots.length - 1
                        ? 'sm:col-span-2'
                        : ''
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} software interface screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </motion.figure>
                ))}
              </Stagger>
            </div>
          )}

          <Reveal delay={0.1} className="mt-14">
            <Link to="/contact" className="btn-primary">
              Start a similar project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>


    </> 
  )
}
