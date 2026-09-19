import { Link } from 'react-router-dom'
import type { Product } from '../../data/types'
import { categoryById } from '../../data/categories'
import { brandById } from '../../data/brands'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

/**
 * Product card with a fixed 4:3 image frame (object-fit: contain on a neutral
 * background so mixed-size photos never stretch or crop), fixed text block and
 * buttons pinned to the bottom so every card in a row lines up.
 */
export function ProductCard({ product }: { product: Product }) {
  const category = categoryById[product.category]
  const brandNames = product.brands.map((b) => brandById[b]?.name).filter(Boolean)
  const detailHref = `/products/${product.slug}`

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-colors hover:border-navy-600">
      <Link to={detailHref} className="block bg-surface-alt" tabIndex={-1} aria-hidden>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={product.image}
            alt=""
            loading="lazy"
            decoding="async"
            width={640}
            height={480}
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge tone="navy">{category.name}</Badge>
          {brandNames.slice(0, 2).map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <h3 className="mt-2.5 text-base font-semibold leading-snug">
          <Link to={detailHref} className="hover:text-navy-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{product.shortDescription}</p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Button to={detailHref} variant="secondary" size="sm">
            View details
          </Button>
          <Button to={`/request-quote?product=${encodeURIComponent(product.slug)}`} size="sm">
            Request quote
          </Button>
        </div>
      </div>
    </article>
  )
}
