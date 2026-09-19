import { usePageMeta } from '../lib/usePageMeta'
import { company } from '../data/company'
import { brands } from '../data/brands'
import { categories } from '../data/categories'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PlaceholderNote } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { CheckIcon } from '../components/ui/Icons'
import { ContactInfo } from '../components/contact/ContactInfo'
import { Link } from 'react-router-dom'

export function AboutPage() {
  usePageMeta('About us', `${company.name} — ${company.positioning}`)
  const dealers = brands.filter((b) => b.relationship === 'Dealer')
  const distributors = brands.filter((b) => b.relationship === 'Distributor')

  return (
    <>
      {/* Header band */}
      <section className="border-b border-line bg-surface-alt">
        <div className="container-x py-8 md:py-10">
          <SectionHeading
            as="h1"
            eyebrow={`Since ${company.establishedYear}`}
            title={`About ${company.name}`}
            description={company.positioning}
            className="mb-0"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="section" aria-labelledby="overview-heading">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="overview-heading" className="text-2xl font-bold tracking-tight">
              Company overview
            </h2>
            <p className="prose-muted mt-4">{company.intro}</p>
            <PlaceholderNote>
              Overview, history, mission and values are not published on the current website. The paragraph above is draft
              copy — replace it with approved text in src/data/company.ts and this page.
            </PlaceholderNote>

            <h2 className="mt-10 text-2xl font-bold tracking-tight">Areas of expertise</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {categories.map((c) => (
                <li key={c.id} className="flex items-start gap-2 text-sm">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-navy-700" />
                  <Link to={`/products?category=${c.id}`} className="hover:text-navy-700">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company facts */}
          <aside className="lg:col-span-5">
            <div className="rounded-lg border border-line bg-white p-5">
              <img src="/images/brand/logo-lg.webp" alt={`${company.name} logo`} width={96} height={96} className="h-24 w-24 rounded-md" />
              <h2 className="mt-4 text-lg font-semibold">Company information</h2>
              <dl className="mt-3 grid gap-2 text-sm">
                <Row k="Company" v={company.name} />
                <Row k="Established" v={String(company.establishedYear)} />
                <Row k="Business" v="Distribution and dealership of electronic components" />
                <Row k="Location" v={`${company.address.line2}, ${company.address.city}`} />
                <Row k="Hours" v={`${company.hours[0].days}, ${company.hours[0].time}`} />
                <Row k="GSTIN" v={company.gstin || 'To be confirmed'} />
              </dl>
              <PlaceholderNote>Add GSTIN, registration details and any certifications only once verified.</PlaceholderNote>
            </div>
          </aside>
        </div>
      </section>

      {/* Dealerships */}
      <section className="section border-t border-line bg-surface-alt" aria-labelledby="dealership-heading">
        <div className="container-x">
          <SectionHeading
            id="dealership-heading"
            eyebrow="Distribution & dealerships"
            title="Manufacturers we represent"
            description="The relationships below are exactly as stated on our current product list."
            action={<Button to="/brands" variant="secondary">View brands page</Button>}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <BrandList title="Distributor of" items={distributors} />
            <BrandList title="Dealers of" items={dealers} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" aria-labelledby="about-contact-heading">
        <div className="container-x">
          <SectionHeading id="about-contact-heading" title="Visit us" />
          <ContactInfo />
        </div>
      </section>
    </>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-2">
      <dt className="text-ink-subtle">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  )
}

function BrandList({ title, items }: { title: string; items: typeof brands }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        {items.map((b) => (
          <li key={b.id}>
            <span className="font-semibold text-navy-900">{b.name}</span>
            <span className="text-ink-subtle"> — {b.productLine}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
