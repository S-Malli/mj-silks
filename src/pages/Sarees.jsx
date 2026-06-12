import { useEffect, useMemo, useState } from 'react'
import { PackageSearch } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import SearchBar from '@/components/product/SearchBar'
import Filters from '@/components/product/Filters'
import SortDropdown from '@/components/product/SortDropdown'
import ProductGrid from '@/components/product/ProductGrid'
import Pagination from '@/components/product/Pagination'
import { ProductGridSkeleton } from '@/components/common/LoadingSkeleton'
import { sarees } from '@/data/sarees'
import { useDebounce } from '@/hooks/useDebounce'

const PAGE_SIZE = 8

export default function Sarees() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('featured')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    let result = [...sarees]

    if (category !== 'all') {
      result = result.filter((saree) => saree.category === category)
    }

    if (debouncedSearch.trim()) {
      const query = debouncedSearch.trim().toLowerCase()
      result = result.filter(
        (saree) =>
          saree.name.toLowerCase().includes(query) ||
          saree.color.toLowerCase().includes(query) ||
          saree.fabric.toLowerCase().includes(query)
      )
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => Number(b.isNew) - Number(a.isNew))
        break
      default:
        result.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
    }

    return result
  }, [category, debouncedSearch, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const handleSearchChange = (value) => {
    setSearch(value)
    setPage(1)
  }

  const handleCategoryChange = (value) => {
    setCategory(value)
    setPage(1)
  }

  const handleSortChange = (value) => {
    setSort(value)
    setPage(1)
  }

  return (
    <>
      <SEO
        title="Shop Silk Sarees"
        description="Browse our full collection of premium Kanchipuram, Bridal, Soft Silk, Traditional, Party Wear and Premium silk sarees."
        path="/sarees"
      />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeader
            eyebrow="Our Collection"
            title="Shop Silk Sarees"
            description="Find the perfect saree for every occasion, from grand weddings to everyday elegance."
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:max-w-md">
              <SearchBar value={search} onChange={handleSearchChange} />
            </div>
            <SortDropdown value={sort} onChange={handleSortChange} />
          </div>

          <div className="mt-6">
            <Filters activeCategory={category} onChange={handleCategoryChange} />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          {isLoading ? (
            <ProductGridSkeleton count={PAGE_SIZE} />
          ) : paginated.length > 0 ? (
            <>
              <p className="mb-6 text-sm text-text-muted">
                Showing {paginated.length} of {filtered.length} sarees
              </p>
              <ProductGrid sarees={paginated} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-20 text-center">
              <PackageSearch size={48} className="text-primary" />
              <h3 className="font-display text-xl font-semibold text-accent">
                No sarees found
              </h3>
              <p className="text-text-muted">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
