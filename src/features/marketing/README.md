# Marketing Automation (Planned)

Email/WhatsApp campaigns, coupons, banners and promotional content
management.

## Planned structure

```
marketing/
  components/   # CouponBanner, CampaignTable (admin), PromoPopup
  hooks/         # useActivePromotions
  services/      # marketingApi.js (campaigns, coupons, banners)
```

## Integration notes

- `PromoPopup` / `CouponBanner` can be surfaced on `src/pages/Home.jsx` once
  implemented.
- Coupon codes feed into `features/checkout` for discount calculation.
- Campaign data (email/WhatsApp broadcasts) is managed via
  `features/admin`, targeting leads captured through `LeadForm` and
  `ContactForm`.
