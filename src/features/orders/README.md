# Orders (Planned)

Customer order history, order details and order status tracking.

## Planned structure

```
orders/
  components/   # OrderCard, OrderStatusBadge, OrderTimeline
  hooks/         # useOrders, useOrder
  services/      # ordersApi.js (list orders, get order by id, track status)
  pages/          # OrderHistory, OrderDetail (to be linked in routes/AppRoutes.jsx)
```

## Integration notes

- Requires `features/auth` for the authenticated customer context.
- Created automatically after a successful `features/checkout` +
  `features/payments/razorpay` flow.
- `features/admin` will reuse `ordersApi.js` for the admin order list with
  elevated permissions.
