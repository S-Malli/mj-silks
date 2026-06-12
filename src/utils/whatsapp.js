import { siteConfig } from '@/config/site'

/**
 * Builds a wa.me deep link with an optional pre-filled message.
 * Falls back to the brand's default enquiry message.
 */
export function getWhatsAppLink(message = siteConfig.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message)
  return `${siteConfig.whatsappLink}?text=${encoded}`
}

/**
 * Builds a WhatsApp enquiry link for a specific saree product.
 */
export function getProductWhatsAppLink(productName) {
  const message = `Hello MJ Silks, I'm interested in the "${productName}" saree. Could you share more details?`
  return getWhatsAppLink(message)
}
