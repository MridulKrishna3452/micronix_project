import { Link } from 'react-router-dom'
import type { Category } from '../../data/types'
import { ArrowRightIcon } from '../ui/Icons'

/** Category cards: equal image frame, name, one-line description, count. */
export function CategoryGrid({ categories, counts }: { categories: Category[]; counts: Partial<Record<Category['id'], number>> }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" role="list">
      {categories.map((c) => (
        <li key={c.id} className="min-w-0">
          <Link
            to={`/products?category=${c.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-colors hover:border-navy-600"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-alt">
              <img src={c.image} alt="" loading="lazy" decoding="async" width={640} height={400} className="absolute inset-0 h-full w-full object-contain p-4" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="flex items-center justify-between gap-2 text-base font-semibold">
                {c.name}
                <ArrowRightIcon width={18} height={18} className="shrink-0 text-ink-subtle transition-colors group-hover:text-navy-700" />
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{c.description}</p>
              <p className="mt-auto pt-3 text-xs font-medium text-ink-subtle">
                {counts[c.id] ?? 0} {counts[c.id] === 1 ? 'product' : 'products'}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
