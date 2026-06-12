import { motion } from 'framer-motion'
import { Star, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '@/utils/formatCurrency'
import { categoryLabel } from '@/data/categories'
import { fadeUp } from '@/utils/animations'

/**
 * Card used in product grids (Home featured collections, Sarees listing).
 * Shows image, name, category, rating, price and a "View Details" CTA.
 */
export default function ProductCard({ saree }) {
  const discount = Math.round(
    ((saree.originalPrice - saree.price) / saree.originalPrice) * 100
  )

  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-primary/10">
        <img
          src={saree.image}
          alt={saree.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {saree.isNew && (
            <span className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-soft">
              <Sparkles size={12} /> New
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-soft">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
          {categoryLabel(saree.category)}
        </span>

        <h3 className="line-clamp-2 font-display text-base sm:text-lg font-semibold text-accent">
          {saree.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-text-muted">
          <Star size={16} className="fill-primary text-primary" />
          <span className="font-medium text-text">{saree.rating}</span>
          <span>({saree.reviews})</span>
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-accent sm:text-xl">
            {formatCurrency(saree.price)}
          </span>
          {saree.originalPrice > saree.price && (
            <span className="text-sm text-text-muted line-through">
              {formatCurrency(saree.originalPrice)}
            </span>
          )}
        </div>

        <Link
          to={`/sarees/${saree.id}`}
          className="mt-3 inline-flex items-center justify-center rounded-full bg-primary/15 px-4 py-2.5 text-sm font-semibold text-accent transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
