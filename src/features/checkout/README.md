# Checkout (Planned)

Multi-step checkout flow: shipping address, delivery options, order review
and payment.

## Planned structure

```
checkout/
  components/   # AddressForm, OrderSummary, ShippingOptions, CheckoutSteps
  hooks/         # useCheckout
  services/      # checkoutApi.js (create order, validate address)
  pages/          # Checkout (to be linked in routes/AppRoutes.jsx)
```

## Integration notes

- Depends on `features/cart` for line items and `features/auth` for
  customer/shipping details.
- Payment step will hand off to `features/payments/razorpay`.
- On success, redirects to an order confirmation page backed by
  `features/orders`.
