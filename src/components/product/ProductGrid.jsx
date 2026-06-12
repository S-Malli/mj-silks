import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { staggerContainer } from '@/utils/animations'

/**
 * Responsive grid of ProductCard items with a staggered reveal animation.
 */
export default function ProductGrid({ sarees }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {sarees.map((saree) => (
        <ProductCard key={saree.id} saree={saree} />
      ))}
    </motion.div>
  )
}
