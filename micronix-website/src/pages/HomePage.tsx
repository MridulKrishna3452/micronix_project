import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { company } from '../data/company'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { countByCategory } from '../lib/search'
import { HeroSection } from '../components/home/HeroSection'
import { CategoryGrid } from '../components/home/CategoryGrid'
import { BrandsStrip, ContactPreview, EnquiryCta, WhyChoose } from '../components/home/HomeSections'
import { ProductGrid } from '../components/products/ProductGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { PlaceholderNote } from '../components/ui/Badge'
import { ArrowRightIcon } from '../components/ui/Icons'

export function HomePage() {
  usePageMeta('', `${company.positioning} Capacitors, resistors, connectors, terminal blocks, relays and tools.`)
  const counts = countByCategory(products)
  const featuredCategories = categories.filter((c) => c.featured)
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8)

  return (
    <>
      <HeroSection />

      {/* Intro */}
      <section className="section" aria-labelledby="intro-heading">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="intro-heading" eyebrow="About Micronix" title={company.tagline} className="mb-0" />
          </div>
          <div className="lg:col-span-7">
            <p className="prose-muted text-base md:text-lg">{company.intro}</p>
            <PlaceholderNote>Company introduction is draft copy — confirm with Micronix (src/data/company.ts → intro).</PlaceholderNote>
            <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:underline">
              More about the company <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section border-t border-line" aria-labelledby="categories-heading">
        <div className="container-x">
          <SectionHeading
            id="categories-heading"
            eyebrow="Product catalogue"
            title="Browse by category"
            description="Everything on the current Micronix product list, organised so you can find a part in two clicks."
            action={
              <Button to="/products" variant="secondary">
                All {products.length} products <ArrowRightIcon width={16} height={16} />
              </Button>
            }
          />
          <CategoryGrid categories={categories} counts={counts} />
        </div>
      </section>

      {/* Featured products */}
      <section className="section border-t border-line bg-surface-alt" aria-labelledby="featured-heading">
        <div className="container-x">
          <SectionHeading
            id="featured-heading"
            eyebrow="Popular lines"
            title="Featured products"
            description={`One product from each of our ${featuredCategories.length} main categories.`}
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <BrandsStrip />
      <WhyChoose />
      <EnquiryCta />
      <ContactPreview />
    </>
  )
}
