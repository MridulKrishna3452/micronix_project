# Content Guide — how to update the Micronix website

All editable content lives in `src/data/`. No component code needs to change for
day-to-day updates.

| What you want to change | File |
|---|---|
| Company name, address, phones, email, WhatsApp, hours, GSTIN, intro paragraph | `src/data/company.ts` |
| Product categories (names, blurbs, thumbnail, featured on home) | `src/data/categories.ts` |
| Brands / manufacturers and dealership wording | `src/data/brands.ts` |
| Products (name, description, variants, specs, part numbers, image) | `src/data/products.ts` |
| Product / brand images | `public/images/products/`, `public/images/brand/` |

Search for the word **PLACEHOLDER** across `src/` to find every item that still needs
confirmation. In development a yellow "PLACEHOLDER (dev only)" note is rendered next to
each one; these notes are automatically removed from production builds.

## 1. Company information (`src/data/company.ts`)

Every field is commented `VERIFIED` (taken from the current website) or `PLACEHOLDER`.
Still needed from Micronix:

- `address.pincode` — PIN code
- `intro` — approved company introduction (also used on the About page)
- `gstin` — optional; shown in the footer and About page when filled

Phone numbers use two fields: `display` (what visitors see) and `tel` (E.164 for the
`tel:` link, e.g. `+919381011348`). WhatsApp uses the number without `+`.

## 2. Products (`src/data/products.ts`)

Add a new object to the `products` array:

```ts
{
  id: 'unique-id',                      // stable, never reused
  slug: 'url-friendly-name',            // becomes /products/<slug>
  name: 'Product name',
  category: 'connectors',               // one of the ids in categories.ts
  brands: ['mega'],                     // ids from brands.ts (empty array if none)
  shortDescription: 'One line for the card.',
  description: 'Two or three sentences for the detail page.',
  image: '/images/products/my-image.webp',
  imageAlt: 'What the photo shows',
  variants: ['2 pin', '4 pin'],         // optional
  specs: [{ label: 'Pitch', value: '2.54 mm' }],  // optional — only verified data
  partNumbers: ['ABC-123'],             // optional — searchable
  externalLink: { label: 'Datasheet', href: 'https://…' }, // optional
  featured: false,                      // true = show on homepage
  verified: true,                       // set true only once the company confirms
}
```

The catalogue search matches name, descriptions, category, brand, part numbers and
variants automatically. Category counts and the "N products" labels update automatically.

### Product images

- Put images in `public/images/products/`, ideally **WebP, 640×640 max, < 60 KB**.
- Any aspect ratio works — cards use a fixed 4:3 frame with `object-fit: contain`, so
  nothing is stretched or cropped. Photos on a plain white/light background look best.
- Existing photos were taken from the current website and are ~10–40 KB each.

## 3. Brands (`src/data/brands.ts`)

Add `logo: '/images/brand/<file>.webp'` once a manufacturer supplies an approved logo;
until then the brand name is rendered as a text mark. Keep `relationship` to the wording
Micronix is entitled to use (`'Dealer'` or `'Distributor'`).

## 4. Categories (`src/data/categories.ts`)

To add a category, add its id to the `CategoryId` union in `src/data/types.ts` and an
entry in `categories.ts`. Set `featured: true` on the six that should appear in the
homepage "Featured products" section (the featured products themselves are flagged in
`products.ts`).

## 5. Forms and enquiries (`src/lib/enquiry.ts`)

Forms currently open the visitor's email client (mailto:) or WhatsApp with the message
pre-filled. To deliver submissions to an inbox or CRM without relying on the visitor's
apps, replace the body of `submitEnquiry()` with a `fetch()` POST to a form service
(Formspree, Netlify Forms, EmailJS, Web3Forms) or your own endpoint. Validation and
success/error UI are already handled.

## 6. Map (`src/components/contact/MapPreview.tsx`)

The map uses a keyless Google Maps embed searched by the address string. For a
guaranteed-accurate pin, replace `mapsEmbedUrl` in `company.ts` with a Google Maps
Embed API URL (requires an API key + Place ID).

## 7. Cookie notice

No tracking cookies are set, so no banner is shown. If you add analytics, set
`usesTrackingCookies: true` in `company.ts`; a small non-blocking notice appears in the
bottom corner.
