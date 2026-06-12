/**
 * Composition root for global React context providers.
 *
 * Currently a passthrough — wrap `children` with future providers here
 * (e.g. AuthProvider, CartProvider, WishlistProvider) as those features
 * under `src/features/*` are implemented, then mount <AppProviders> in
 * `src/App.jsx`.
 */
export default function AppProviders({ children }) {
  return children
}
