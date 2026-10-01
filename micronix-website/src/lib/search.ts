import type { CategoryId, Product } from '../data/types'
import { categoryById } from '../data/categories'
import { brandById } from '../data/brands'

export interface ProductQuery {
  q?: string
  category?: CategoryId | ''
  brand?: string
}

/** Lower-case, strip punctuation, collapse whitespace. */
function normalise(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s.-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Build a single searchable string per product once. */
const haystacks = new Map<string, string>()

function haystack(p: Product) {
  let h = haystacks.get(p.id)
  if (!h) {
    const brandNames = p.brands.map((b) => brandById[b]?.name ?? b)
    h = normalise(
      [
        p.name,
        p.shortDescription,
        p.description,
        categoryById[p.category].name,
        ...brandNames,
        ...(p.partNumbers ?? []),
        ...(p.variants ?? []),
      ].join(' '),
    )
    haystacks.set(p.id, h)
  }
  return h
}

/**
 * Frontend product search + filter.
 * Every whitespace-separated term must match somewhere in the product's
 * name, description, category, brand, part numbers or variants.
 */
export function searchProducts(all: Product[], query: ProductQuery): Product[] {
  const terms = normalise(query.q ?? '').split(' ').filter(Boolean)
  return all.filter((p) => {
    if (query.category && p.category !== query.category) return false
    if (query.brand && !p.brands.includes(query.brand)) return false
    if (terms.length === 0) return true
    const h = haystack(p)
    return terms.every((t) => h.includes(t))
  })
}

export function countByCategory(all: Product[]) {
  const counts = {} as Record<CategoryId, number>
  for (const p of all) counts[p.category] = (counts[p.category] ?? 0) + 1
  return counts
}
