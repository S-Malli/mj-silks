import { motion } from 'framer-motion'
import { Gem, Hammer, ShieldCheck, Heart } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import { fadeUp, staggerContainer } from '@/utils/animations'
import { timeline } from '@/data/timeline'
import bannerImage from '@/assets/banners/Mj_Saree_Banner.jpg'

const pillars = [
  {
    icon: Gem,
    title: 'Heritage',
    description:
      'Rooted in the rich weaving traditions of Tamil Nadu, every MJ Silks saree carries forward generations of textile heritage.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'We work only with verified weaving clusters and inspect every saree for fabric purity, weave consistency and finishing.',
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description:
      'From handloom weaving to zari work, each saree reflects the skill and dedication of artisans who have perfected their craft over decades.',
  },
  {
    icon: Heart,
    title: 'Customer Trust',
    description:
      'Transparent pricing, honest product descriptions and responsive support have helped us build lasting relationships with our customers.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover the story behind MJ Silks — our heritage, commitment to quality, craftsmanship and the trust we've built with thousands of customers."
        path="/about"
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={bannerImage} alt="MJ Silks craftsmanship" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        <Container className="flex min-h-[40vh] flex-col items-center justify-center py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-white sm:text-5xl"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/90"
          >
            A journey rooted in tradition, woven with quality and trust.
          </motion.p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionHeader
            eyebrow="Who We Are"
            title="Bringing Authentic Silk Sarees to Every Home"
            description="MJ Silks is a family-driven silk saree brand dedicated to preserving the art of handloom weaving while making premium silk sarees accessible to customers across India. From bridal trousseaus to festive must-haves, every piece in our collection is chosen with care, quality and tradition in mind."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="What We Stand For"
            title="Heritage, Quality, Craftsmanship & Trust"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="rounded-2xl bg-background p-6 text-center shadow-card"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-accent">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Our Journey" title="Milestones Along the Way" />

          <div className="relative space-y-10 border-l-2 border-primary/30 pl-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-soft">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-accent sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
