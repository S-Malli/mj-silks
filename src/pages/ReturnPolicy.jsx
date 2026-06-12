import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import PolicyContent from '@/components/common/PolicyContent'
import { siteConfig } from '@/config/site'

export default function ReturnPolicy() {
  return (
    <>
      <SEO
        title="Return Policy"
        description="Read the MJ Silks return and exchange policy, including eligibility, process and refund timelines."
        path="/return-policy"
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Legal"
            title="Return & Exchange Policy"
            description="Last updated: January 2026"
          />

          <PolicyContent>
            <p>
              At {siteConfig.name}, customer satisfaction is at the heart of everything we do.
              We want you to love your saree, and if for any reason you're not completely
              satisfied, we're here to help.
            </p>

            <div>
              <h2>1. Eligibility for Returns</h2>
              <ul>
                <li>Returns must be requested within 3 days of delivery.</li>
                <li>The saree must be unused, unwashed and unworn, with all original tags intact.</li>
                <li>The product must be returned in its original packaging.</li>
                <li>Sarees purchased during clearance sales or custom orders are not eligible for return.</li>
              </ul>
            </div>

            <div>
              <h2>2. How to Initiate a Return</h2>
              <ul>
                <li>Contact us via WhatsApp or email within 3 days of receiving your order.</li>
                <li>Share your order details along with clear photos/videos of the product.</li>
                <li>Our team will review your request and confirm the return pickup or shipping address.</li>
              </ul>
            </div>

            <div>
              <h2>3. Exchanges</h2>
              <p>
                If you'd like a different color, design or size, we're happy to offer an
                exchange subject to product availability. Exchange requests follow the same
                eligibility criteria as returns.
              </p>
            </div>

            <div>
              <h2>4. Refunds</h2>
              <ul>
                <li>Once we receive and inspect the returned item, we will notify you of the approval status.</li>
                <li>Approved refunds will be processed to the original payment method within 7-10 business days.</li>
                <li>For Cash on Delivery orders, refunds will be issued via bank transfer or UPI.</li>
              </ul>
            </div>

            <div>
              <h2>5. Non-Returnable Items</h2>
              <ul>
                <li>Sarees that have been altered, tailored or washed.</li>
                <li>Items marked as "Final Sale" or "Non-Returnable" at the time of purchase.</li>
                <li>Gift cards and promotional vouchers.</li>
              </ul>
            </div>

            <div>
              <h2>6. Damaged or Incorrect Items</h2>
              <p>
                If you receive a damaged, defective or incorrect item, please contact us within
                48 hours of delivery with photos of the product and packaging. We will arrange
                for a replacement or full refund at no additional cost to you.
              </p>
            </div>

            <div>
              <h2>7. Contact Us</h2>
              <p>
                For any questions about returns or exchanges, reach out to us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-dark underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>{' '}
                or via WhatsApp at +91 {siteConfig.whatsappNumber.slice(2)}.
              </p>
            </div>
          </PolicyContent>
        </Container>
      </section>
    </>
  )
}
