# Auth (Planned)

Customer authentication for MJ Silks (sign up, login, OTP/password reset,
session management).

## Planned structure

```
auth/
  components/   # LoginForm, RegisterForm, OtpInput, AuthGuard
  hooks/         # useAuth, useSession
  services/      # authApi.js (login, register, refresh token)
  context/        # AuthContext / AuthProvider
  pages/          # Login, Register, ForgotPassword (to be linked in routes/AppRoutes.jsx)
```

## Integration notes

- `services/authApi.js` should use the shared API client in `src/services/apiClient.js`.
- `AuthProvider` will be added to `src/context/AppProviders.jsx` once implemented.
- Protected routes (e.g. Orders, Wishlist, Checkout) will use an `AuthGuard`
  wrapper component added to `src/routes/AppRoutes.jsx`.
