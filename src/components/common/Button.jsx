import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-lg',
  outline:
    'border-2 border-primary text-accent hover:bg-primary hover:text-white',
  accent: 'bg-accent text-white hover:bg-accent-light shadow-soft',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-soft',
  ghost: 'bg-white/80 text-accent hover:bg-white shadow-soft',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

/**
 * Shared button/link component for consistent CTA styling across the site.
 * Renders a <Link> when `to` is provided, an <a> when `href` is provided,
 * otherwise a native <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
