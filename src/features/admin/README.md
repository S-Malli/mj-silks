# Admin Dashboard (Planned)

Internal dashboard for managing products, orders, customers and marketing.

## Planned structure

```
admin/
  components/   # AdminSidebar, AdminHeader, DataTable, StatCard
  pages/          # Dashboard, Products, Orders, Customers, Marketing (separate router)
  hooks/          # useAdminAuth
  routes/         # AdminRoutes.jsx (mounted under /admin, separate from storefront routes)
```

## Integration notes

- Should be mounted as a separate route tree (e.g. `/admin/*`) guarded by an
  admin-only `AuthGuard` from `features/auth`.
- Reuses `features/inventory`, `features/orders`, `features/customers` and
  `features/marketing` services for data.
- Consider code-splitting this entire module with `React.lazy` so it doesn't
  add to the public storefront bundle.
