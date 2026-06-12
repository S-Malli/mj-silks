import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import { navLinks, siteConfig } from '@/config/site'
import { cn } from '@/utils/cn'

/**
 * Sticky responsive navbar with a glassmorphism scrolled state and an
 * animated mobile menu drawer.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    cn(
      'text-sm font-medium transition-colors hover:text-primary-dark',
      isActive ? 'text-accent font-semibold' : 'text-text'
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'glass shadow-card'
          : 'bg-background/80 backdrop-blur-sm'
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-soft">
            <ShoppingBag size={20} />
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold text-accent">
            {siteConfig.name}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/sarees" size="sm">
            Shop Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-accent md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-md md:hidden"
          >
            <Container className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-2 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-primary/15 text-accent font-semibold'
                        : 'text-text hover:bg-primary/10'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/sarees" size="sm" className="mt-1 self-start" onClick={() => setIsOpen(false)}>
                Shop Now
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
