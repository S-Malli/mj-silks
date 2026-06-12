import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MessageCircle, ChevronRight, Truck, ShieldCheck, RotateCcw } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import ProductGrid from '@/components/product/ProductGrid'
import SectionHeader from '@/components/common/SectionHeader'
import { sarees } from '@/data/sarees'
import { categoryLabel } from '@/data/categories'
import { formatCurrency } from '@/utils/formatCurrency'
import { getProductWhatsAppLink } from '@/utils/whatsapp'
import { fadeUp } from '@/utils/animations'

export default function ProductDetail() {
  const { id } = useParams()
  const saree = sarees.find((item) => item.id === id)

  if (!saree) {
    return <Navigate to="/sarees" replace />
  }

  const discount = Math.round(
    ((saree.originalPrice - saree.price) / saree.originalPrice) * 100
  )

  const relatedSarees = sarees
    .filter((item) => item.category === saree.category && item.id !== saree.id)
    .slice(0, 4)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: saree.name,
    description: saree.description,
    category: categoryLabel(saree.category),
    offers: {
      '@type': 'Offer',
      price: saree.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: saree.rating,
      reviewCount: saree.reviews,
    },
  }

  return (
    <>
      <SEO
        title={saree.name}
        description={saree.description}
        path={`/sarees/${saree.id}`}
        structuredData={structuredData}
      />

      <section className="py-8 sm:py-12">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-text-muted">
            <Link to="/" className="hover:text-primary-dark">Home</Link>
            <ChevronRight size={14} />
            <Link to="/sarees" className="hover:text-primary-dark">Sarees</Link>
            <ChevronRight size={14} />
            <span className="text-accent">{categoryLabel(saree.category)}</span>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <div className="relative overflow-hidden rounded-2xl bg-primary/10 shadow-card">
              <img
                src={saree.image}
                alt={saree.name}
                className="h-full w-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  {discount}% OFF
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                {categoryLabel(saree.category)}
              </span>
              <h1 className="mt-2 font-display text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
                {saree.name}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  <Star size={18} className="fill-primary text-primary" />
                  <span className="font-semibold text-text">{saree.rating}</span>
                </div>
                <span className="text-text-muted">({saree.reviews} reviews)</span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-accent">
                  {formatCurrency(saree.price)}
                </span>
                {saree.originalPrice > saree.price && (
                  <span className="text-lg text-text-muted line-through">
                    {formatCurrency(saree.originalPrice)}
                  </span>
                )}
              </div>

              <p className="mt-5 leading-relaxed text-text-muted">{saree.description}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 shadow-card sm:max-w-md">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-text-muted">Fabric</dt>
                  <dd className="mt-1 font-medium text-accent">{saree.fabric}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-text-muted">Color</dt>
                  <dd className="mt-1 font-medium text-accent">{saree.color}</dd>
                </div>
              </dl>

              <div className="mt-8">
                <a
                  href={getProductWhatsAppLink(saree.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1ebe5b] hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                  Enquire on WhatsApp
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card">
                  <Truck size={22} className="text-primary" />
                  <span className="text-sm font-medium text-text">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card">
                  <ShieldCheck size={22} className="text-primary" />
                  <span className="text-sm font-medium text-text">Secure Shopping</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card">
                  <RotateCcw size={22} className="text-primary" />
                  <span className="text-sm font-medium text-text">Easy Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {relatedSarees.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <Container>
            <SectionHeader
              eyebrow="You May Also Like"
              title="Related Sarees"
              description={`More from our ${categoryLabel(saree.category)} collection.`}
            />
            <ProductGrid sarees={relatedSarees} />
          </Container>
        </section>
      )}
    </>
  )
}
