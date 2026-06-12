import SectionHeader from '@/components/common/SectionHeader'
import Container from '@/components/common/Container'
import ProductGrid from '@/components/product/ProductGrid'
import Button from '@/components/common/Button'
import { sarees } from '@/data/sarees'

/**
 * Home page section showing a curated set of featured sarees,
 * falling back to the first products if fewer than 8 are flagged featured.
 */
export default function FeaturedCollections() {
  const featured = sarees.filter((saree) => saree.isFeatured)
  const display = (featured.length >= 8 ? featured : sarees).slice(0, 8)

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Handpicked For You"
          title="Featured Collections"
          description="Explore our most loved silk sarees, handpicked for their craftsmanship, weave and timeless appeal."
        />

        <ProductGrid sarees={display} />

        <div className="mt-12 flex justify-center">
          <Button to="/sarees" size="lg">
            View All Sarees
          </Button>
        </div>
      </Container>
    </section>
  )
}
