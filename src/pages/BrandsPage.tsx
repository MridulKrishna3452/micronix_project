import { usePageMeta } from '../lib/usePageMeta'
import { brands } from '../data/brands'
import { products } from '../data/products'
import { BrandCard } from '../components/brands/BrandCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EnquiryCta } from '../components/home/HomeSections'

export function BrandsPage() {
  usePageMeta('Brands', 'Manufacturers and brands represented by Micronix Corporation as authorised distributors and dealers.')
  const countFor = (id: string) => products.filter((p) => p.brands.includes(id)).length

  return (
    <>
      <section className="border-b border-line bg-surface-alt">
        <div className="container-x py-8 md:py-10">
          <SectionHeading
            as="h1"
            eyebrow="Authorised distributors & dealers"
            title="Brands & manufacturers"
            description={`Micronix represents ${brands.length} manufacturers. Every listing below is taken from our current dealership line-up.`}
            className="mb-0"
          />
        </div>
      </section>

      <section className="section" aria-label="Brand list">
        <div className="container-x">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
            {brands.map((b) => (
              <li key={b.id} className="min-w-0">
                <BrandCard brand={b} productCount={countFor(b.id)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryCta />
    </>
  )
}
