import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { products } from '../data/products'
import { categories, categoryById } from '../data/categories'
import { brandById } from '../data/brands'
import type { CategoryId } from '../data/types'
import { countByCategory, searchProducts } from '../lib/search'
import { ProductGrid } from '../components/products/ProductGrid'
import { ProductSearch } from '../components/products/ProductSearch'
import { ProductFilters } from '../components/products/ProductFilters'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

const CATEGORY_IDS = new Set(categories.map((c) => c.id))

/**
 * Catalogue page. Search + filters live in the URL (?q=&category=&brand=)
 * so results are shareable and the header search / footer links deep-link here.
 */
export function ProductsPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const rawCategory = params.get('category') ?? ''
  const category = (CATEGORY_IDS.has(rawCategory as CategoryId) ? rawCategory : '') as CategoryId | ''
  const brand = params.get('brand') && brandById[params.get('brand')!] ? params.get('brand')! : ''

  const activeCategory = category ? categoryById[category] : null
  usePageMeta(
    activeCategory ? activeCategory.name : 'Products',
    activeCategory ? activeCategory.description : 'Browse and search the Micronix Corporation electronic component catalogue.',
  )

  const update = useCallback(
    (patch: Record<string, string>) => {
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          for (const [k, v] of Object.entries(patch)) {
            if (v) next.set(k, v)
            else next.delete(k)
          }
          return next
        },
        { replace: true },
      )
    },
    [setParams],
  )

  const results = useMemo(() => searchProducts(products, { q, category, brand }), [q, category, brand])
  // Category counts respect the search term and brand so numbers stay truthful.
  const counts = useMemo(() => countByCategory(searchProducts(products, { q, brand })), [q, brand])

  return (
    <div className="container-x py-8 md:py-10">
      <SectionHeading
        as="h1"
        eyebrow="Product catalogue"
        title={activeCategory ? activeCategory.name : 'All products'}
        description={activeCategory?.description ?? 'Search by product name, category, brand or type/part number, or filter by category.'}
        className="mb-6"
      />

      {/* Mobile order: search → filters → results. Desktop: sticky filter column + search/results column. */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-6">
        <div className="order-1 min-w-0 lg:col-start-4 lg:col-end-13 lg:row-start-1">
          <ProductSearch value={q} onChange={(v) => update({ q: v })} resultCount={results.length} />
        </div>

        <aside className="order-2 min-w-0 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-span-2" aria-label="Product filters">
          <div className="lg:sticky lg:top-20">
            <ProductFilters
              category={category}
              brand={brand}
              counts={counts}
              total={searchProducts(products, { q, brand }).length}
              onCategory={(c) => update({ category: c })}
              onBrand={(b) => update({ brand: b })}
              onReset={() => update({ category: '', brand: '' })}
            />
          </div>
        </aside>

        <div className="order-3 min-w-0 lg:col-start-4 lg:col-end-13 lg:row-start-2">
          {results.length > 0 ? (
            <ProductGrid products={results} columns={3} />
          ) : (
            <div className="rounded-lg border border-dashed border-line-strong p-8 text-center">
              <h2 className="text-lg font-semibold">No products match</h2>
              <p className="prose-muted mx-auto mt-2 max-w-md text-sm">
                We may still be able to source it. Try a broader search term, clear the filters, or send us the part number.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="secondary" onClick={() => update({ q: '', category: '', brand: '' })}>
                  Clear search &amp; filters
                </Button>
                <Button to={`/request-quote?product=${encodeURIComponent(q)}`}>Request a quote for “{q || 'this part'}”</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
