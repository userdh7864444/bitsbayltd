import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Banner from '../components/Banner'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal, { Stagger, childVariants } from '../components/Reveal'
import { getProjectBySlug, allProjects } from '../data/site'

/**
 * Case-study page. The live pages are: a dark banner with the project name,
 * an "About" paragraph, a "Tech Stack" line, then the screenshot gallery.
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  const others = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <Banner
        title={project.heading || project.title}
        subtitle={project.category}
        image="/banners/projects.jpg"
      >
        <Link to="/projects" className="btn-white">
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>
      </Banner>

      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {project.description && (
              <Reveal>
                <h2>About</h2>
                <p className="mt-4 leading-relaxed">{project.description}</p>
              </Reveal>
            )}

            {project.stack && (
              <Reveal delay={0.1}>
                <div className="border border-line p-8 r-diag">
                  <h2>Tech Stack</h2>
                  <p className="mt-4">{project.stack}</p>
                </div>
              </Reveal>
            )}
          </div>

          {project.shots?.length > 0 && (
            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
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
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </motion.figure>
              ))}
            </Stagger>
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
