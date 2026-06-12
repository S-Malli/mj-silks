import { motion } from 'framer-motion'
import { Gem, Sparkles, Users, ShieldCheck, Truck, Wallet } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import Container from '@/components/common/Container'
import { fadeUp, staggerContainer } from '@/utils/animations'

const reasons = [
  {
    icon: Gem,
    title: 'Premium Silk Quality',
    description: 'Sourced from trusted weaving clusters, every saree is crafted from pure, premium-grade silk.',
  },
  {
    icon: Sparkles,
    title: 'Handpicked Collections',
    description: 'Each design is personally curated by our team for its weave, color and finishing.',
  },
  {
    icon: Users,
    title: 'Trusted by Customers',
    description: 'Loved by 500+ happy customers across India for quality and authenticity.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    description: 'Your details and transactions are always protected with industry-standard security.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick dispatch and reliable shipping ensures your saree reaches you on time.',
  },
  {
    icon: Wallet,
    title: 'Affordable Luxury',
    description: 'Premium silk sarees at honest prices, without compromising on craftsmanship.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Why MJ Silks"
          title="Why Choose MJ Silks"
          description="We blend tradition, quality and trust to bring you a saree shopping experience like no other."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="group rounded-2xl bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <reason.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-accent sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
