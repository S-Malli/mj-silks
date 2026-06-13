import { Outlet } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

/**
 * Shared shell for all storefront pages: sticky navbar, page content,
 * footer and the floating WhatsApp button.
 */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-text">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
