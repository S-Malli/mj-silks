import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import PolicyContent from '@/components/common/PolicyContent'
import { siteConfig } from '@/config/site'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the MJ Silks privacy policy to understand how we collect, use and protect your personal information."
        path="/privacy-policy"
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy Policy"
            description="Last updated: January 2026"
          />

          <PolicyContent>
            <p>
              At {siteConfig.name}, we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we
              collect, use, disclose and safeguard your information when you visit our website
              or interact with us via WhatsApp, email or our contact forms.
            </p>

            <div>
              <h2>1. Information We Collect</h2>
              <ul>
                <li>Personal details such as your name, email address, mobile number and shipping address.</li>
                <li>Order details, including products viewed, enquired about or purchased.</li>
                <li>Messages and enquiries you send via our contact forms or WhatsApp.</li>
                <li>Technical data such as browser type, device information and IP address for analytics and security.</li>
              </ul>
            </div>

            <div>
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To process and fulfil your orders, including delivery and customer support.</li>
                <li>To respond to enquiries, send catalogues and share order updates.</li>
                <li>To improve our website, products and overall customer experience.</li>
                <li>To send promotional offers and updates, where you have consented to receive them.</li>
              </ul>
            </div>

            <div>
              <h2>3. Sharing of Information</h2>
              <p>
                We do not sell or rent your personal information to third parties. Information
                may be shared with trusted service providers (such as courier partners and
                payment processors) solely for the purpose of fulfilling your orders, and only
                to the extent necessary.
              </p>
            </div>

            <div>
              <h2>4. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your
                personal information from unauthorized access, alteration, disclosure or
                destruction. However, no method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2>5. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing
                experience, remember your preferences and analyze site traffic. You can choose
                to disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2>6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal
                information at any time by contacting us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-dark underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted
                on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-dark underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>{' '}
                or via WhatsApp at {siteConfig.whatsappDisplayNumber}.
              </p>
            </div>
          </PolicyContent>
        </Container>
      </section>
    </>
  )
}
