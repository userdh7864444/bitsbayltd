import { motion } from 'framer-motion'

/**
 * The page banner, shared by every route so all banners are exactly the same
 * size. Geometry comes straight from the live theme's `.guten-4qr4Df` rules:
 *
 *   desktop        padding: 260px 0 300px
 *   tablet ≤1024   padding: 140px 10px 200px
 *   mobile ≤767    padding: 140px 0 180px
 *   overlay        #0f0e0e at 0.72
 *
 * Content is centred, as on the live inner pages.
 */
export default function Banner({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  align = 'center',
  uppercaseTitle = true,
  className = '',
}) {
  const centered = align === 'center'

  return (
    <section
      className={`relative isolate flex min-h-[560px] items-center overflow-hidden md:min-h-[660px] lg:min-h-[780px] ${className}`}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        {image && (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute inset-0 bg-overlay/72" />
      </div>

      <div
        className={`container-x w-full py-24 lg:py-28 ${centered ? 'text-center' : ''}`}
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-brand"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`text-white ${uppercaseTitle ? 'uppercase' : ''} ${
            centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-5 max-w-2xl font-bold leading-relaxed text-white ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-8 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
