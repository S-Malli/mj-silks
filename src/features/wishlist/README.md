# Wishlist (Planned)

Save favourite sarees for later.

## Planned structure

```
wishlist/
  components/   # WishlistButton (heart icon toggle), WishlistGrid
  hooks/         # useWishlist
  context/       # WishlistContext / WishlistProvider
  pages/          # Wishlist (to be linked in routes/AppRoutes.jsx)
```

## Integration notes

- `WishlistProvider` will be added to `src/context/AppProviders.jsx`.
- `WishlistButton` will be added to `ProductCard` and `ProductDetail`.
- Initial version can persist to `localStorage`; later synced per-user once
  `features/auth` is implemented.
