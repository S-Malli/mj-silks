import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2 } from 'lucide-react'

/**
 * General enquiry form for the Contact page.
 * Submission currently logs to the console — replace `onSubmitForm`
 * with an API call once the backend contact endpoint is ready.
 */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: '', email: '', phone: '', message: '' },
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmitForm = (data) => {
    // TODO: replace with API call to contact endpoint (src/services)
    console.log('Contact form submitted:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted && isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-10 text-center shadow-card">
        <CheckCircle2 size={48} className="text-primary" />
        <h3 className="font-display text-xl font-semibold text-accent">Message Sent!</h3>
        <p className="text-text-muted">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-primary-dark underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div
      id="aidig-lead-form"
      data-key="LK-P4NM-W9ME-79SZ"
      data-title="Get a Free Callback"
      data-name="Hello Silks"
      data-subtitle="Fill in your details and we'll reach you in max 10 mins."
      data-btn-text="Send My Details"
      data-fields="name,phone,email,message"
      data-required="name,phone"
      data-color="#ef4444"
      data-theme="light"
      data-rounded="xl"
      data-success="Thank you! We'll call you shortly. 🎉"
      data-redirect=""
      data-source="website"
      data-relay="https://iknxajeuxbziieslmttw.supabase.co/functions/v1/submit-lead"
      data-webhook="https://script.google.com/macros/s/AKfycbyxUNmPBLueguhifKaocELeaxGRWnnWUcggJFtZMYr7dYNyGPwPYdmtAugp_J_3mIOQ/exec"
    ></div>

  )
}
