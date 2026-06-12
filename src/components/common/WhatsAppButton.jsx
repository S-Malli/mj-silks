import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { getWhatsAppLink } from '@/utils/whatsapp'

/**
 * Fixed floating WhatsApp button shown on every page, bottom-right.
 * Opens a pre-filled wa.me chat with the brand's default enquiry message.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MJ Silks on WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-ring sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
    </motion.a>
  )
}
