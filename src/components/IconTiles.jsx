import { motion } from 'framer-motion'
import { getIcon } from '../lib/icons'
import { Stagger, childVariants } from './Reveal'

/**
 * The four-up icon-and-label tiles the live site uses under "Our Legacy" and
 * "Multivertical Expertise". The first tile ships filled red with white
 * artwork; the rest sit on the page background.
 */
export default function IconTiles({ items, className = '' }) {
  return (
    <Stagger className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((item, i) => {
        const Icon = getIcon(item.icon)
        const filled = i === 0
        return (
          <motion.div
            key={item.label}
            variants={childVariants}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={`flex flex-col items-center justify-center rounded-[20px] px-6 py-10 text-center ${
              filled ? 'bg-[#ef0402] text-white' : ''
            }`}
          >
            <Icon
              className={`h-20 w-20 ${filled ? 'text-white' : 'text-brand'}`}
              strokeWidth={1.25}
            />
            <h2
              className={`mt-5 flex min-h-[2.2em] items-start justify-center text-lg ${
                filled ? 'text-white' : 'text-ink'
              }`}
            >
              {item.label}
            </h2>
          </motion.div>
        )
      })}
    </Stagger>
  )
}
