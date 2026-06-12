import { cn } from '@/utils/cn'

/**
 * Generic shimmering placeholder block. Compose with utility classes
 * to match the shape of the content being loaded.
 */
export function Skeleton({ className }) {
  return <div className={cn('skeleton rounded-xl', className)} />
}

/**
 * Skeleton placeholder matching the ProductCard layout, used while
 * saree product data is loading.
 */
export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card">
      <Skeleton className="aspect-[4/5] w-full rounded-none" />
      <div className="space-y-3 p-4">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-9 w-full rounded-full" />
      </div>
    </div>
  )
}

/**
 * Renders a responsive grid of ProductCardSkeleton items.
 */
export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}
