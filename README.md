# MJ Silks

A modern, responsive, production-ready e-commerce storefront for **MJ Silks** —
a premium silk saree brand. Built with React, Vite and Tailwind CSS, and
designed as a scalable, open-source-friendly foundation for future
full-stack e-commerce features.

## Tech Stack

- **React 19** + **JavaScript** (JSX)
- **Vite** — build tooling & dev server
- **Tailwind CSS v4** — utility-first styling with centralized theme tokens
- **React Router v7** — client-side routing
- **Framer Motion** — animations and transitions
- **React Hook Form** — form state & validation
- **Lucide React** — icon set
- **React Helmet Async** — per-page SEO meta tags

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build
npm run build

# preview the production build locally
npm run preview

# lint the codebase
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```env
VITE_APP_NAME=MJ Silks
VITE_CONTACT_EMAIL=sales.mjsilks@gmail.com
VITE_WHATSAPP_NUMBER=919790321115
VITE_API_URL=http://localhost:5000/api
VITE_SITE_URL=https://www.mjsilks.com
```

These are consumed centrally via `src/config/env.js` — never read
`import.meta.env` directly in components.

## Project Structure

```
src/
├── assets/             # Images (banners, saree product photos)
├── components/
│   ├── common/         # Navbar, Footer, Button, SectionHeader, SEO,
│   │                    # WhatsAppButton, LoadingSkeleton, etc.
│   ├── home/            # Home page sections (Hero, FeaturedCollections,
│   │                    # WhyChooseUs, Testimonials, CustomerStats, LeadForm)
│   ├── product/         # ProductCard, ProductGrid, SearchBar, Filters,
│   │                    # SortDropdown, Pagination
│   ├── testimonial/      # TestimonialCard
│   └── contact/          # ContactForm, MapPlaceholder, FAQAccordion
├── config/             # site.js (brand/nav config), theme.js (color tokens),
│                         # env.js (env var access)
├── context/            # AppProviders composition root (future global state)
├── data/               # Dummy data: sarees, categories, testimonials,
│                         # stats, faq, timeline
├── hooks/              # useCountUp, useDebounce
├── layouts/            # MainLayout (navbar + footer + WhatsApp button)
├── pages/              # Home, Sarees, ProductDetail, About, Contact,
│                         # PrivacyPolicy, ReturnPolicy, NotFound
├── routes/             # AppRoutes (route map)
├── services/           # apiClient.js (fetch wrapper for future backend)
├── utils/              # cn, formatCurrency, whatsapp, animations
└── features/           # Scaffolding for future full-stack features
    ├── auth/
    ├── cart/
    ├── wishlist/
    ├── checkout/
    ├── orders/
    ├── payments/razorpay/
    ├── admin/
    ├── inventory/
    ├── customers/
    └── marketing/
```

Each folder under `src/features/` contains a `README.md` describing its
intended structure and integration points — they are intentionally empty of
implementation for now.

## Theming

All brand colors and fonts are defined as design tokens in two places that
should be kept in sync:

- `src/index.css` — Tailwind v4 `@theme` block (used by Tailwind utility
  classes like `bg-primary`, `text-accent`, `bg-background`, etc.)
- `src/config/theme.js` — JS mirror of the same colors for use in raw JS
  (inline styles, SVGs, charts)

| Token        | Hex       | Usage                          |
| ------------ | --------- | ------------------------------- |
| `primary`    | `#E89EB8` | Primary brand color, CTAs       |
| `background` | `#FFE6EA` | Page background                 |
| `accent`     | `#734E5B` | Headings, footer, dark accents  |
| `text`       | `#333333` | Body text                       |
| `white`      | `#FFFFFF` | Surfaces, cards                  |

To re-theme the site, update both files — Tailwind classes and any raw JS
color usage will stay in sync.

## SEO

- Per-page meta tags, Open Graph and Twitter cards via the `<SEO />`
  component (`src/components/common/SEO.jsx`), powered by
  `react-helmet-async`.
- JSON-LD structured data for the organization (Home) and individual
  products (Product Detail).
- `public/robots.txt` and `public/sitemap.xml` are sitemap-ready; product
  URLs can be appended automatically once products are served from a
  backend/CMS.

## Brand Details

- **Email:** sales.mjsilks@gmail.com
- **WhatsApp:** +91 97903 21115

## License

This project is open-sourced for educational and portfolio purposes.
