import { useParams } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { productBySlug, products } from '../data/products'
import { ProductDetail } from '../components/products/ProductDetail'
import { ProductGrid } from '../components/products/ProductGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { NotFoundPage } from './NotFoundPage'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const product = productBySlug[slug]
  usePageMeta(product?.name ?? 'Product not found', product?.shortDescription)

  if (!product) return <NotFoundPage />

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container-x py-8 md:py-10">
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mt-14 border-t border-line pt-10" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" title="Related products" className="mb-6" />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  )
}
