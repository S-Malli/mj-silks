import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import ContactForm from '@/components/contact/ContactForm'
import MapPlaceholder from '@/components/contact/MapPlaceholder'
import FAQAccordion from '@/components/contact/FAQAccordion'
import { siteConfig } from '@/config/site'
import { getWhatsAppLink } from '@/utils/whatsapp'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with MJ Silks via email, WhatsApp or our contact form. View our business hours and frequently asked questions."
        path="/contact"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="We'd Love to Hear From You"
            title="Contact MJ Silks"
            description="Have a question about a saree, an order, or want a custom recommendation? Reach out to us through any of the channels below."
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-accent">{siteConfig.name}</h3>

                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-text">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-text-muted transition-colors hover:text-primary-dark">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-text">WhatsApp</p>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted transition-colors hover:text-primary-dark"
                      >
                        {siteConfig.whatsappDisplayNumber}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-text">Address</p>
                      <p className="text-text-muted">{siteConfig.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-accent">
                  <Clock size={20} className="text-primary" />
                  Business Hours
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {siteConfig.businessHours.map((entry) => (
                    <li key={entry.day} className="flex items-center justify-between text-text-muted">
                      <span>{entry.day}</span>
                      <span className="font-medium text-text">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Need Help?" title="Frequently Asked Questions" />
          <FAQAccordion />
        </Container>
      </section>
    </>
  )
}
