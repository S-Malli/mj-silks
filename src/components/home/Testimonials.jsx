import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import Container from '@/components/common/Container'
import TestimonialCard from '@/components/testimonial/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { staggerContainer } from '@/utils/animations'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Customer Love"
          title="What Our Customers Say"
          description="Real stories from real customers who trusted MJ Silks for their most special occasions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
