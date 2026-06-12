# Cart (Planned)

Shopping cart functionality — add/remove sarees, update quantities,
persist cart across sessions.

## Planned structure

```
cart/
  components/   # CartDrawer, CartItem, CartSummary, CartIcon (badge)
  hooks/         # useCart
  context/       # CartContext / CartProvider
  utils/         # cartTotals.js (subtotal, discounts, totals)
```

## Integration notes

- `CartProvider` will be added to `src/context/AppProviders.jsx`.
- `CartIcon` will be added to `src/components/common/Navbar.jsx`.
- `ProductCard` and `ProductDetail` will get an "Add to Cart" action once
  this module is implemented.
- Initial version can persist state to `localStorage` via
  `src/hooks/useLocalStorage.js`; later this can sync with the backend cart
  endpoint at `VITE_API_URL`.
