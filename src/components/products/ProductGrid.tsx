import type { Product } from '../../data/types'
import { ProductCard } from './ProductCard'

/** 1 column on mobile, 2 on tablet, 3 on desktop, 4 on wide desktop. */
export function ProductGrid({ products, columns = 4 }: { products: Product[]; columns?: 3 | 4 }) {
  const cols = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'
  return (
    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 ${cols}`} role="list">
      {products.map((p) => (
        <li key={p.id} className="min-w-0">
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  )
}
