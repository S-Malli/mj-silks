import { Search, X } from 'lucide-react'

/**
 * Controlled search input for filtering sarees by name, category or color.
 */
export default function SearchBar({ value, onChange, placeholder = 'Search sarees by name, color or fabric...' }) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search sarees"
        className="w-full rounded-full border border-primary/30 bg-white py-3 pl-12 pr-10 text-sm text-text shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-text-muted transition-colors hover:bg-primary/10 hover:text-accent"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
