import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ArrowRightIcon, WhatsAppIcon } from '../ui/Icons'
import { company, whatsappUrl } from '../../data/company'
import { brands } from '../../data/brands'
import { categories } from '../../data/categories'

/**
 * Hero: value proposition + primary/secondary CTA on the left, the company's
 * existing component collage on the right (contained, never stretched).
 */
export function HeroSection() {
  return (
    <section className="bg-navy-950 text-white" aria-labelledby="hero-heading">
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Authorised distributors &amp; dealers · Chennai · Since {company.establishedYear}
          </p>
          <h1 id="hero-heading" className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Reliable Electronic Components for Industrial Applications
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Capacitors, resistors, connectors, pin headers, terminal blocks, relays, cables and tools — supplied from
            stock or on order, with quotes over email or WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/request-quote" variant="accent" size="lg">
              Request a Quote
            </Button>
            <Button to="/products" variant="outline-light" size="lg">
              Explore Products <ArrowRightIcon width={18} height={18} />
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70" aria-label="Quick facts">
            <li>{categories.length} product categories</li>
            <li>{brands.length} brands represented</li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                <WhatsAppIcon width={16} height={16} /> WhatsApp {company.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <Link to="/products" className="block rounded-lg bg-white p-4 md:p-6" aria-label="Browse the product catalogue">
            <img
              src="/images/brand/hero-components.webp"
              alt="Assortment of industrial electronic components: potentiometers, relays, connectors, transistors and capacitors"
              width={500}
              height={500}
              fetchPriority="high"
              decoding="async"
              className="mx-auto aspect-square w-full max-w-xs object-contain sm:max-w-md"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
