import { cn } from '@/utils/cn'

/**
 * Centered max-width content wrapper with responsive horizontal padding.
 * Use this instead of repeating `max-w-7xl mx-auto px-4` everywhere.
 */
export default function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
