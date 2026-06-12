import SEO from '@/components/common/SEO'
import HeroBanner from '@/components/home/HeroBanner'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CustomerStats from '@/components/home/CustomerStats'
import LeadForm from '@/components/home/LeadForm'
import { siteConfig } from '@/config/site'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social),
  }

  return (
    <>
      <SEO
        title="Premium Silk Sarees Online"
        description={siteConfig.description}
        path="/"
        structuredData={structuredData}
      />
      <HeroBanner />
      <FeaturedCollections />
      <WhyChooseUs />
      <Testimonials />
      <CustomerStats />
      <LeadForm />
    </>
  )
}
