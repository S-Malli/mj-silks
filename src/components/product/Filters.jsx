import { cn } from '@/utils/cn'
import { categories } from '@/data/categories'

/**
 * Horizontal scrollable category filter chips for the Sarees page.
 * `activeCategory` is `'all'` or a category id from `data/categories.js`.
 */
export default function Filters({ activeCategory, onChange }) {
  const allCategories = [{ id: 'all', label: 'All Sarees' }, ...categories]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
      {allCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={cn(
            'shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300',
            activeCategory === category.id
              ? 'border-primary bg-primary text-white shadow-soft'
              : 'border-primary/30 bg-white text-text hover:border-primary hover:text-accent'
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
