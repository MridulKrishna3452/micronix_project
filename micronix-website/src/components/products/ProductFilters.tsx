import { useId } from 'react'
import { categories } from '../../data/categories'
import { brands } from '../../data/brands'
import type { CategoryId } from '../../data/types'

interface Props {
  category: CategoryId | ''
  brand: string
  counts: Partial<Record<CategoryId, number>>
  total: number
  onCategory: (c: CategoryId | '') => void
  onBrand: (b: string) => void
  onReset: () => void
}

/**
 * Desktop: vertical category list + brand select in a sidebar.
 * Mobile:  horizontally scrollable category chips + brand select (no sidebar).
 */
export function ProductFilters({ category, brand, counts, total, onCategory, onBrand, onReset }: Props) {
  const brandId = useId()
  const hasFilters = category !== '' || brand !== ''

  const chip = (active: boolean) =>
    [
      'inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border px-3 text-sm font-medium transition-colors lg:whitespace-normal',
      active ? 'border-navy-800 bg-navy-800 text-white' : 'border-line-strong bg-white text-ink-muted hover:border-navy-600 hover:text-ink',
    ].join(' ')

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Filter</h2>
        {hasFilters && (
          <button type="button" onClick={onReset} className="text-sm font-medium text-navy-700 hover:underline">
            Reset
          </button>
        )}
      </div>

      {/* Categories — chips on mobile/tablet, list on desktop */}
      <fieldset className="min-w-0">
        <legend className="sr-only">Category</legend>
        <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0" role="list">
          <li>
            <button type="button" onClick={() => onCategory('')} aria-pressed={category === ''} className={`${chip(category === '')} lg:w-full lg:justify-between`}>
              All products <span className="text-xs opacity-70">{total}</span>
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onCategory(c.id)}
                aria-pressed={category === c.id}
                className={`${chip(category === c.id)} lg:w-full lg:justify-between`}
              >
                <span className="lg:text-left">{c.name}</span>
                <span className="text-xs opacity-70">{counts[c.id] ?? 0}</span>
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      {/* Brand */}
      <div>
        <label htmlFor={brandId} className="mb-1.5 block text-sm font-medium">
          Brand
        </label>
        <select
          id={brandId}
          value={brand}
          onChange={(e) => onBrand(e.target.value)}
          className="h-11 w-full rounded-md border border-line-strong bg-white px-3 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
        >
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
