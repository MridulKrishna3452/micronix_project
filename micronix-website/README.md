# Micronix Corporation — website

Redesigned marketing + product-catalogue website for Micronix Corporation, Chennai
(industrial electronic components distributor). Replaces the GoDaddy Website Builder site.

- **Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · React Router 7
- **No backend required** — static build; enquiries go via mailto/WhatsApp (pluggable, see below)
- **No cart / accounts** — the site is built around product discovery and request-a-quote

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check + production build to dist/
npm run preview    # serve dist/ locally
npm run lint       # oxlint
```

## Project structure

```
public/images/brand/       logo.webp, logo-lg.webp, favicon.png, hero-components.webp
public/images/products/    one WebP per product family (≤ 640px, ~10–40 KB)
src/
  index.css                Tailwind import + design tokens (@theme) + base styles
  App.tsx                  routes (secondary pages are lazy-loaded)
  data/                    ALL editable content — see docs/CONTENT-GUIDE.md
    company.ts             contact details, hours, intro (VERIFIED / PLACEHOLDER flags)
    categories.ts          10 product categories
    brands.ts              14 manufacturers represented
    products.ts            40 products
    types.ts
  lib/
    search.ts              frontend search + category/brand filtering
    enquiry.ts             validation + mailto/WhatsApp delivery (swap in an API here)
    usePageMeta.ts         per-page <title> / meta description
  components/
    layout/                Navbar, MobileMenu, Logo, Footer, Layout, CookieNotice
    ui/                    Button, SectionHeading, FormField, Badge, Icons
    home/                  HeroSection, CategoryGrid, BrandsStrip, WhyChoose, EnquiryCta, ContactPreview
    products/              ProductCard, ProductGrid, ProductSearch, ProductFilters, ProductDetail
    brands/                BrandCard
    contact/               ContactInfo, EnquiryForm (ContactForm + QuoteForm), MapPreview
  pages/                   Home, About, Products, ProductDetail, Brands, Contact, RequestQuote, NotFound
docs/
  UI-UX-AUDIT.md           audit of the current GoDaddy site
  CONTENT-GUIDE.md         how to update products, brands and company info
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About us |
| `/products` | Catalogue — `?q=` search, `?category=` and `?brand=` filters |
| `/products/:slug` | Product detail |
| `/brands` | Brands & manufacturers |
| `/contact` | Contact + enquiry form + map |
| `/request-quote` | Quote form — `?product=<slug or text>` pre-fills the product |

## Before go-live checklist

1. Confirm every item marked `PLACEHOLDER` (search `src/`): PIN code, company intro, GSTIN.
2. Confirm product names/variants with Micronix (`src/data/products.ts`) — all current
   entries are transcribed from the existing website; none are invented.
3. Add manufacturer logos to `src/data/brands.ts` only with permission.
4. Decide on form delivery (`src/lib/enquiry.ts`) — mailto/WhatsApp works today; a form
   service gives you an inbox record.
5. Deploy `dist/` to a static host with SPA fallback (see below) and point the domain there.

## Deployment

The site is a single-page app: every route must fall back to `index.html`.

- **Netlify:** `public/_redirects` is included (`/* /index.html 200`). Build command
  `npm run build`, publish directory `dist`.
- **Vercel:** `vercel.json` is included with the rewrite.
- **Cloudflare Pages / GitHub Pages / any static host:** upload `dist/`, enable SPA
  fallback (or use a 404.html copy of index.html).
- **GoDaddy:** the current GoDaddy *Website Builder* cannot host a custom build and injects
  its own promotional banner on the free/ads tier. Use GoDaddy cPanel/Web Hosting (upload
  `dist/` and add an `.htaccess` rewrite to `index.html`) or point the domain's DNS at one of
  the hosts above.
