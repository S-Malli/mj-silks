import { Link } from 'react-router-dom'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'
import Container from './Container'
import { siteConfig, footerLinks } from '@/config/site'
import { getWhatsAppLink } from '@/utils/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-accent text-white">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <h3 className="font-display text-2xl font-bold">{siteConfig.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Premium handwoven silk sarees crafted for weddings, festivals and
            everyday elegance. Discover timeless tradition with a modern touch.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-primary-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Policies
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {footerLinks.policies.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-primary-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary-light">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-light"
              >
                +91 {siteConfig.whatsappNumber.slice(2)}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with care for timeless traditions.</p>
        </Container>
      </div>
    </footer>
  )
}
