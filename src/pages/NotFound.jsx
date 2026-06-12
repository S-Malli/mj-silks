import { Home, ShoppingBag } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />

      <section className="flex min-h-[70vh] items-center py-16">
        <Container className="flex flex-col items-center text-center">
          <span className="font-display text-7xl font-bold text-primary sm:text-8xl">404</span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-accent sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 max-w-md text-text-muted">
            The page you're looking for doesn't exist or may have been moved. Let's get you back
            to something beautiful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/" icon={Home}>
              Back to Home
            </Button>
            <Button to="/sarees" variant="outline" icon={ShoppingBag}>
              Shop Sarees
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
