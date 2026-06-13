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
            <div
              id="aidig-lead-form"

              data-key="LK-QRQA-MJNC-MNYR"

              data-title="Get a Free Callback"

              data-name="Mj Silks"

              data-subtitle="Fill in your details and we'll reach you in max 10 mins."

              data-btn-text="Send My Details"

              data-fields="name,phone,email,message"


              data-required="name,phone"

              data-color="#6366f1"

              data-theme="light"

              data-rounded="xl"

              data-success="Thank you! We'll call you shortly. 🎉"
              
              data-redirect=""


              data-source="website"


              data-relay="https://iknxajeuxbziieslmttw.supabase.co/functions/v1/submit-lead"
            

              data-webhook="https://script.google.com/macros/s/AKfycbxKN8shUwCP0aBoOVsaAgK_dPO2HmX-Vb-RN1XPyu6OQFWpwXan23hiIOuHK13MDpoI/exec"
              
            ></div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
