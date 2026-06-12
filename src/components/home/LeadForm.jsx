import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import Container from '@/components/common/Container'
import { fadeUp } from '@/utils/animations'
import { getWhatsAppLink } from '@/utils/whatsapp'

/**
 * Lead generation form (catalogue request / enquiry).
 * Submission currently logs to the console — replace `onRequestCatalogue`
 * with an API call once the backend lead-capture endpoint is ready.
 */
export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: '', mobile: '', email: '', message: '' },
  })
  const [submitted, setSubmitted] = useState(false)

  const onRequestCatalogue = (data) => {
    // TODO: replace with API call to lead-capture endpoint (src/services)
    console.log('Catalogue request submitted:', data)
    setSubmitted(true)
    reset()
  }

  const handleWhatsAppContact = async () => {
    const isValid = await trigger()
    if (!isValid) return

    const data = getValues()
    console.log('WhatsApp enquiry submitted:', data)
    const message = `Hello MJ Silks, my name is ${data.name}.\nMobile: ${data.mobile}\nEmail: ${data.email}\nMessage: ${data.message}`
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Request Our Catalogue"
          description="Share your details and our team will send you our latest saree catalogue and exclusive offers."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="rounded-2xl bg-white p-6 shadow-card sm:p-10"
        >
          {submitted && isSubmitSuccessful ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h3 className="font-display text-xl font-semibold text-accent">Thank you!</h3>
              <p className="text-text-muted">
                We've received your request and will reach out shortly with our catalogue.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm font-semibold text-primary-dark underline-offset-4 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onRequestCatalogue)} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-text">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit mobile number',
                      },
                    })}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-xs text-red-500">{errors.mobile.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  className="w-full resize-none rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  {...register('message', { required: 'Please add a short message' })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                >
                  <Send size={18} />
                  Request Catalogue
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1ebe5b] hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Contact on WhatsApp
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
