import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { fadeUp } from '@/utils/animations'

/**
 * Testimonial card with a placeholder initials avatar (no external images),
 * star rating and review text.
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card"
    >
      <Quote size={28} className="mb-4 text-primary" />
      <p className="flex-1 text-sm leading-relaxed text-text-muted sm:text-base">
        “{testimonial.review}”
      </p>

      <div className="mt-6 flex items-center gap-1 text-primary">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={16} className="fill-primary text-primary" />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-lg font-semibold text-accent">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-accent">{testimonial.name}</p>
          <p className="text-xs text-text-muted">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}
