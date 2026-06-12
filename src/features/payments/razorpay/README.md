# Razorpay Payments (Planned)

Integration with Razorpay for order payments.

## Planned structure

```
payments/razorpay/
  components/   # RazorpayButton, PaymentStatusModal
  hooks/         # useRazorpayCheckout
  services/      # razorpayApi.js (create order, verify payment signature)
```

## Integration notes

- Backend (`VITE_API_URL`) will expose endpoints to create a Razorpay order
  and verify the payment signature server-side — never expose the key
  secret in the frontend.
- `RazorpayButton` will be used inside `features/checkout` as the final
  payment step.
- On successful payment, the order is created/updated via
  `features/orders/services/ordersApi.js`.
