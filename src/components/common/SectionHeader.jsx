import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'
import { cn } from '@/utils/cn'

/**
 * Consistent heading block used at the top of major page sections,
 * with an optional eyebrow label and centered or left alignment.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
