import { Link } from 'react-router-dom'
import type { Brand } from '../../data/types'
import { Badge } from '../ui/Badge'
import { ArrowRightIcon, ExternalIcon } from '../ui/Icons'

/** Brand card — renders a text mark when no approved logo file is available. */
export function BrandCard({ brand, productCount }: { brand: Brand; productCount: number }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 transition-colors hover:border-navy-600">
      <div className="flex h-14 items-center">
        {brand.logo ? (
          <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-12 w-auto object-contain" loading="lazy" />
        ) : (
          <span className="text-xl font-bold tracking-wide text-navy-900">{brand.name}</span>
        )}
      </div>
      <div className="mt-2">
        <Badge tone="navy">{brand.relationship}</Badge>
      </div>
      <p className="mt-3 flex-1 text-sm text-ink-muted">{brand.productLine}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
        {productCount > 0 && (
          <Link to={`/products?brand=${brand.id}`} className="inline-flex items-center gap-1 text-navy-700 hover:underline">
            {productCount} {productCount === 1 ? 'product' : 'products'} <ArrowRightIcon width={16} height={16} />
          </Link>
        )}
        {brand.website && (
          <a href={brand.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink-muted hover:text-navy-700">
            Manufacturer site <ExternalIcon width={14} height={14} />
          </a>
        )}
      </div>
    </article>
  )
}
