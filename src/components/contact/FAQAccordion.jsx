import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/data/faq'
import { cn } from '@/utils/cn'

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id
        return (
          <div key={faq.id} className="overflow-hidden rounded-2xl bg-white shadow-card">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-accent">{faq.question}</span>
              <ChevronDown
                size={20}
                className={cn('shrink-0 text-primary transition-transform duration-300', isOpen && 'rotate-180')}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
