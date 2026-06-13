/**
 * Centralized access to environment variables.
 * Import from here instead of using `import.meta.env` directly
 * so defaults stay consistent across the app.
 */
export const env = {
  appName: import.meta.env.VITE_APP_NAME || 'MJ Silks',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'sales.mjsilks@gmail.com',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '14155238886',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.mjsilks.com',
}
