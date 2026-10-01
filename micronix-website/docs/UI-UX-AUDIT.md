# Micronix Corporation — UI/UX Audit of the Current Website

Audited: https://micronixcorporation.godaddysites.com/ (GoDaddy Website Builder), 13 Sep 2026.
Method: desktop (1280px) and mobile (375px) review in a browser, DOM inspection, content extraction.

## Summary

The current site is a single long GoDaddy "Website Builder" page with an empty e-commerce
"Shop" section. It has the right raw content (brands, product families, contact details) but
no information architecture, weak hierarchy, three unrelated typefaces, an unused cart/account
UI, and platform branding that cannot be removed on the current plan.

## Findings (severity: 🔴 high · 🟠 medium · 🟡 low)

| # | Area | Finding | Evidence | Severity |
|---|------|---------|----------|----------|
| 1 | Platform | GoDaddy "Airo" promo banner injected above the header on every page and it is sticky | `s.zkcdn.net` advertiser banner, `WAM_BANNER_V1` | 🔴 |
| 2 | Header | Only two nav items ("HOME", "SHOP"); no About / Products / Brands / Contact | DOM: 2 nav links | 🔴 |
| 3 | Header | Search icon opens a builder overlay; not integrated, no visible input on desktop | header icons | 🟠 |
| 4 | Header | Active page is shown as a leading dash ("- HOME", "- SHOP") which reads as stray text | screenshot | 🟠 |
| 5 | Header | Cart and account icons are present but the shop has no products ("New products are coming soon!") | `/shop` page | 🔴 |
| 6 | Hero | No headline, no value proposition, no CTA. First screen is a product collage on white with ~250px of empty space above/below | hero block ~600px tall, text only "Welcome to MICRONIX CORPORATION" in the next band | 🔴 |
| 7 | Hero | Hero image is 500×500 px stretched to the full width, so it is blurry on desktop | `cover.jpg` 500×500 | 🟠 |
| 8 | Content | The page does not say what the company does until the H2 "AUTHORISED DISTRIBUTORS AND DEALERS FOR" | H1 is a greeting | 🔴 |
| 9 | Products | All ~30 product families are stacked into one page (~7,400px tall) with no anchors, filters, or categories | page height 7392px | 🔴 |
| 10 | Products | Card descriptions mix a one-word blurb, a bulleted variant list, and 9 outbound links inside a single card (MEGA) | MEGA card | 🟠 |
| 11 | Products | Images have mixed aspect ratios (365×157 to 365×365), mixed backgrounds (white, blue, studio), cropped edges | `rs=w:365,h:*` values vary | 🟠 |
| 12 | Products | Large uppercase paragraphs ("ALL TYPE OF CONNECTOR AVAILABLE", "SILICONE COATED RADIAL WIRE LEADS…") | text extraction | 🟠 |
| 13 | Products | 20+ cards have empty `<h4>` headings (builder artefacts) — bad for screen readers and SEO | 21 empty H4s | 🟠 |
| 14 | Products | Typos in customer-facing copy ("D sub connecor", "FLAT BABLE", "SOYNIA/soniya") | text extraction | 🟡 |
| 15 | Typography | Three unrelated fonts: Contrail One (italic display), Lusitana (serif), GD Sherpa (sans) | computed styles | 🟠 |
| 16 | Layout | Grid spacing is uneven because cards have variable image heights and text lengths, so rows don't align | screenshots | 🟠 |
| 17 | Contact | Useful info (address, 2 mobiles, 2 landlines, email, hours) but centred in a narrow column with large gaps, and hours are hidden behind a "Closed" toggle | contact block | 🟠 |
| 18 | Contact | Map is full-width and ~500px tall — the largest element on the page | map block | 🟠 |
| 19 | Contact | No enquiry form and no request-a-quote path; WhatsApp is a plain text link | DOM | 🔴 |
| 20 | Footer | Only copyright + "Powered by GoDaddy" + 2 legal links, with large padding; no nav, no contact repeat | footer | 🟠 |
| 21 | Cookies | Cookie banner covers ~35% of the mobile viewport and blocks the hero. The site sets no first-party cookies of its own that need consent | overlay | 🟠 |
| 22 | Mobile | Logo is centred with hamburger left and cart right; the promo banner + header consume 230px of the 812px viewport | mobile screenshot | 🟠 |
| 23 | A11y | Product images have empty `alt`; heading levels jump H1→H2→H4; no skip link; low-contrast grey serif body text | DOM | 🟠 |
| 24 | SEO | `<title>` is just "MICRONIX CORPORATION"; no meta description; single page so no per-topic URLs | `<head>` | 🟡 |

## What is good and worth keeping

- The logo (yellow "MC" monogram on navy, "SINCE 1992") — distinctive and reusable.
- The brand/dealership list is specific and credible (SAMWHA, KELTRON, JWCO, MEGA, Xinya, SOYNIA, SUCCESS, OEN, CROWN, Pankaj, EII, SOLDRON, MULTITEC, WEIDY).
- Product photos exist for every family — only the presentation is inconsistent.
- Complete contact data: address, two mobiles, two landlines, email, WhatsApp, weekly hours.

## GoDaddy banner — hosting limitation

The promo banner is injected by the GoDaddy Website Builder free/ads tier; it is not part of
the page content and cannot be removed with CSS from inside the builder. The new site is a
standalone Vite/React build, so it must be deployed on a static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or GoDaddy cPanel/Web Hosting — *not* Website Builder).
The custom domain (if any) should then be pointed at the new host. No GoDaddy branding is
included in the new build.
