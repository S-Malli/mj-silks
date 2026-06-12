/**
 * Saree categories used for filtering on the Sarees page and
 * for tagging products in `data/sarees.js`.
 */
export const categories = [
  { id: 'bridal', label: 'Bridal' },
  { id: 'kanchipuram', label: 'Kanchipuram' },
  { id: 'soft-silk', label: 'Soft Silk' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'party-wear', label: 'Party Wear' },
  { id: 'premium-collection', label: 'Premium Collection' },
]

export const categoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label || id
