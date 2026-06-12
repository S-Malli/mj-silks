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
    <>
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

    </>
    // <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-5 rounded-2xl bg-white p-6 shadow-card sm:p-8">
    //   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
    //     <div>
    //       <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text">
    //         Name
    //       </label>
    //       <input
    //         id="contact-name"
    //         type="text"
    //         placeholder="Your full name"
    //         className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
    //         {...register('name', { required: 'Name is required' })}
    //       />
    //       {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
    //     </div>

    //     <div>
    //       <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-text">
    //         Phone
    //       </label>
    //       <input
    //         id="contact-phone"
    //         type="tel"
    //         placeholder="10-digit mobile number"
    //         className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
    //         {...register('phone', {
    //           required: 'Phone number is required',
    //           pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' },
    //         })}
    //       />
    //       {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
    //     </div>
    //   </div>

    //   <div>
    //     <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text">
    //       Email Address
    //     </label>
    //     <input
    //       id="contact-email"
    //       type="email"
    //       placeholder="you@example.com"
    //       className="w-full rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
    //       {...register('email', {
    //         required: 'Email is required',
    //         pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
    //       })}
    //     />
    //     {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
    //   </div>

    //   <div>
    //     <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text">
    //       Message
    //     </label>
    //     <textarea
    //       id="contact-message"
    //       rows={5}
    //       placeholder="How can we help you?"
    //       className="w-full resize-none rounded-xl border border-primary/30 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
    //       {...register('message', { required: 'Please add a message' })}
    //     />
    //     {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
    //   </div>

    //   <button
    //     type="submit"
    //     className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary-dark hover:shadow-lg sm:w-auto"
    //   >
    //     <Send size={18} />
    //     Send Message
    //   </button>
    // </form>
  )
}
