# Customer Management (Planned)

Customer profiles, addresses and admin-side customer management.

## Planned structure

```
customers/
  components/   # CustomerProfileForm, AddressBook, CustomerTable (admin)
  hooks/         # useCustomerProfile
  services/      # customersApi.js (profile CRUD, address management)
```

## Integration notes

- Customer-facing profile pages depend on `features/auth`.
- `CustomerTable` is reused by `features/admin` for customer management
  screens, fed by `customersApi.js`.
- The lead capture data currently logged from `LeadForm`
  (`src/components/home/LeadForm.jsx`) and `ContactForm`
  (`src/components/contact/ContactForm.jsx`) is a natural seed source for
  this module's backend once available.
