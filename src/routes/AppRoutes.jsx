import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Sarees from '@/pages/Sarees'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import ReturnPolicy from '@/pages/ReturnPolicy'
import NotFound from '@/pages/NotFound'

/**
 * Central route map for the storefront. All routes render inside
 * MainLayout (navbar, footer, floating WhatsApp button).
 *
 * Future feature routes (auth, cart, wishlist, checkout, orders, admin)
 * will be added here once those modules are implemented under
 * `src/features/*`.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/sarees/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
