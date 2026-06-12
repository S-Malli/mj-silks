# Inventory (Planned)

Product and stock management — replaces the static `src/data/sarees.js`
with live inventory data once a backend is available.

## Planned structure

```
inventory/
  components/   # StockBadge, ProductForm, BulkUploadModal
  hooks/         # useProducts, useProduct
  services/      # inventoryApi.js (CRUD for products, stock levels)
```

## Integration notes

- `useProducts`/`useProduct` are designed as drop-in replacements for the
  current `sarees` import from `src/data/sarees.js` — components like
  `ProductGrid`, `ProductCard` and `ProductDetail` should continue to work
  once the data shape matches `src/data/sarees.js`.
- Used by `features/admin` for product management screens.
