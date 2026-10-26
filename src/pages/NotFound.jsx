import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from './PageHeader'

/**
 * The header floats over the page in white, so this page needs the same dark
 * banner every other route has — without it the nav is invisible.
 */
export default function NotFound() {
  return (
    <>
      <PageHeader
        title="Page Not Found"
        blurb="The link may be old, or the page moved."
        image="/banners/technologies.jpg"
        align="center"
      />

      <section className="py-20 text-center sm:py-28">
        <div className="container-x">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[84px] font-semibold leading-none text-ink/10 sm:text-[160px]"
          >
            404
          </motion.p>
          <h2 className="mt-2">This page does not exist</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed">
            Head back to the homepage and start again, or jump straight to what you were
            looking for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
