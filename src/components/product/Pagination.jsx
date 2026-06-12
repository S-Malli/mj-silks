import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

/**
 * Simple numbered pagination control for the Sarees listing page.
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-white text-accent transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? 'page' : undefined}
          className={cn(
            'h-10 w-10 rounded-full text-sm font-semibold transition-colors',
            currentPage === page
              ? 'bg-primary text-white shadow-soft'
              : 'border border-primary/30 bg-white text-text hover:bg-primary/10'
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-white text-accent transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  )
}
