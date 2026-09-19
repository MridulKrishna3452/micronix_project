import { Link } from 'react-router-dom'
import type { Product } from '../../data/types'
import { categoryById } from '../../data/categories'
import { brandById } from '../../data/brands'
import { company, whatsappUrl } from '../../data/company'
import { Button } from '../ui/Button'
import { Badge, PlaceholderNote } from '../ui/Badge'
import { ChevronRightIcon, ExternalIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '../ui/Icons'

/** Reusable product detail layout: image | info + CTAs, then variants / specs. */
export function ProductDetail({ product }: { product: Product }) {
  const category = categoryById[product.category]
  const productBrands = product.brands.map((b) => brandById[b]).filter(Boolean)
  const quoteHref = `/request-quote?product=${encodeURIComponent(product.slug)}`
  const waMessage = `Hello Micronix, I would like a quote for: ${product.name}.`

  return (
    <article>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-subtle">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/products" className="hover:text-navy-700">
              Products
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRightIcon width={16} height={16} />
          </li>
          <li>
            <Link to={`/products?category=${category.id}`} className="hover:text-navy-700">
              {category.name}
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRightIcon width={16} height={16} />
          </li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Image */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line bg-surface-alt">
            <img
              src={product.image}
              alt={product.imageAlt}
              width={640}
              height={480}
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-contain p-6"
            />
          </div>
          <p className="mt-2 text-xs text-ink-subtle">Representative image. Actual item may vary by variant.</p>
        </div>

        {/* Info */}
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-1.5">
            <Badge tone="navy">{category.name}</Badge>
            {productBrands.map((b) => (
              <Badge key={b.id}>{b.name}</Badge>
            ))}
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>
          <p className="prose-muted mt-4">{product.description}</p>

          {product.partNumbers && product.partNumbers.length > 0 && (
            <dl className="mt-4 flex gap-2 text-sm">
              <dt className="text-ink-subtle">Type / part no.:</dt>
              <dd className="font-medium">{product.partNumbers.join(', ')}</dd>
            </dl>
          )}

          {productBrands.length > 0 && (
            <p className="mt-2 text-sm text-ink-muted">
              {productBrands.map((b) => `${b.relationship} of ${b.name}`).join(' · ')}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button to={quoteHref} size="lg" className="sm:flex-1">
              Request a quote
            </Button>
            <Button href={whatsappUrl(waMessage)} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="sm:flex-1">
              <WhatsAppIcon width={18} height={18} /> Enquire on WhatsApp
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-muted">
            <a href={`tel:${company.phones[0].tel}`} className="inline-flex items-center gap-1.5 hover:text-navy-700">
              <PhoneIcon width={16} height={16} /> {company.phones[0].display}
            </a>
            <a href={`mailto:${company.email}?subject=${encodeURIComponent('Enquiry: ' + product.name)}`} className="inline-flex items-center gap-1.5 hover:text-navy-700">
              <MailIcon width={16} height={16} /> {company.email}
            </a>
          </div>

          {product.externalLink && (
            <a
              href={product.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:underline"
            >
              {product.externalLink.label} <ExternalIcon width={16} height={16} />
            </a>
          )}
        </div>
      </div>

      {/* Variants & specs */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="variants-heading" className="rounded-lg border border-line p-5">
          <h2 id="variants-heading" className="text-lg font-semibold">
            Available variants
          </h2>
          {product.variants && product.variants.length > 0 ? (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.variants.map((v) => (
                <li key={v} className="rounded-md bg-surface-alt px-3 py-2 text-sm">
                  {v}
                </li>
              ))}
            </ul>
          ) : (
            <p className="prose-muted mt-3 text-sm">
              Multiple values and packages are available. Tell us what you need and we will confirm availability.
            </p>
          )}
        </section>

        <section aria-labelledby="specs-heading" className="rounded-lg border border-line p-5">
          <h2 id="specs-heading" className="text-lg font-semibold">
            Specifications
          </h2>
          {product.specs && product.specs.length > 0 ? (
            <dl className="mt-3 divide-y divide-line text-sm">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-2 gap-2 py-2">
                  <dt className="text-ink-subtle">{s.label}</dt>
                  <dd className="font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <>
              <p className="prose-muted mt-3 text-sm">
                Detailed specifications are provided on request
                {product.externalLink ? ' or on the manufacturer page linked above' : ''}. Share your part number or
                electrical requirement and we will send the datasheet.
              </p>
              <PlaceholderNote>Add verified specs to `specs` in src/data/products.ts to show a spec table here.</PlaceholderNote>
            </>
          )}
        </section>
      </div>
    </article>
  )
}
