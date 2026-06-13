import { env } from './env'

/**
 * Site-wide brand and navigation configuration.
 * Centralizing this makes it easy to update brand details,
 * navigation links, and social profiles from a single place.
 */
export const siteConfig = {
  name: env.appName,
  tagline: 'Timeless Elegance in Every Thread',
  description:
    'MJ Silks brings you premium handpicked silk sarees crafted for weddings, festivals and every celebration. Discover Kanchipuram, Bridal, Soft Silk and Premium Collections.',
  url: env.siteUrl,
  email: env.contactEmail,
  whatsappNumber: env.whatsappNumber,
  whatsappDisplayNumber: `+${env.whatsappNumber}`,
  whatsappLink: `https://wa.me/${env.whatsappNumber}`,
  whatsappDefaultMessage:
    'Hello MJ Silks, I would like to know more about your saree collection.',
  address: 'Rasipuram, Tamil Nadu, India',
  businessHours: [
    { day: 'Monday - Saturday', hours: '9:30 AM - 8:30 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/mjsilksarees_2026/',
    facebook: 'https://www.facebook.com/profile.php?id=61574261591867',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sarees', path: '/sarees' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Return Policy', path: '/return-policy' },
]

export const footerLinks = {
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'Sarees', path: '/sarees' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ],
  policies: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Return Policy', path: '/return-policy' },
  ],
}
