import { motion } from 'framer-motion'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import { getWhatsAppLink } from '@/utils/whatsapp'
import bannerImage from '@/assets/banners/Mj_Saree_Banner.jpg'

/**
 * Full-width hero section with the brand banner image, headline,
 * subheadline and primary CTAs.
 */
export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={bannerImage}
          alt="MJ Silks premium silk saree collection"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/40 to-accent/10" />
      </div>

      <Container className="flex min-h-[80vh] flex-col items-start justify-center py-24 sm:min-h-[85vh]">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white glass"
        >
          Premium Silk Saree Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Timeless Elegance in Every Thread
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-white/90 sm:text-lg"
        >
          Premium Silk Sarees Crafted for Every Celebration
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button to="/sarees" size="lg" icon={ShoppingBag}>
            Shop Collection
          </Button>
          <Button href={getWhatsAppLink()} variant="whatsapp" size="lg" icon={MessageCircle}>
            WhatsApp Us
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
