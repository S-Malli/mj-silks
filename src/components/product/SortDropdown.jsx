import { ArrowDownUp } from 'lucide-react'
import { sortOptions } from '@/data/sortOptions'

/**
 * Dropdown for sorting the saree product grid.
 */
export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative inline-flex items-center">
      <ArrowDownUp size={16} className="pointer-events-none absolute left-3 text-text-muted" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Sort sarees"
        className="appearance-none rounded-full border border-primary/30 bg-white py-3 pl-9 pr-8 text-sm font-medium text-text shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
