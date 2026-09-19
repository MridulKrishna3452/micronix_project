import { Link } from 'react-router-dom'
import { brands } from '../../data/brands'
import { company, whatsappUrl } from '../../data/company'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'
import { ArrowRightIcon, BoxIcon, ChatIcon, ShieldIcon, StoreIcon, WhatsAppIcon } from '../ui/Icons'
import { ContactInfo } from '../contact/ContactInfo'

/* ------------------------------------------------------------ Brands strip */
export function BrandsStrip() {
  return (
    <section className="section border-y border-line bg-surface-alt" aria-labelledby="brands-heading">
      <div className="container-x">
        <SectionHeading
          id="brands-heading"
          eyebrow="Authorised distributors & dealers"
          title="Brands we represent"
          description="Micronix supplies genuine components from these manufacturers, as listed on our current dealership line-up."
          action={
            <Link to="/brands" className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:underline">
              All brands <ArrowRightIcon width={16} height={16} />
            </Link>
          }
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7" role="list">
          {brands.map((b) => (
            <li key={b.id}>
              <Link
                to={`/products?brand=${b.id}`}
                className="flex h-16 items-center justify-center rounded-md border border-line bg-white px-3 text-center text-sm font-bold tracking-wide text-navy-900 transition-colors hover:border-navy-600"
                title={`${b.relationship} · ${b.productLine}`}
              >
                {b.logo ? <img src={b.logo} alt={`${b.name} logo`} className="max-h-10 object-contain" loading="lazy" /> : b.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Why choose */
const REASONS = [
  {
    icon: StoreIcon,
    title: `Established ${company.establishedYear}`,
    text: 'Serving industrial and electronics customers from Chintadripet, Chennai for over three decades.',
  },
  {
    icon: ShieldIcon,
    title: 'Authorised dealers & distributors',
    text: `Genuine parts from ${brands.length} manufacturers including MEGA, SAMWHA, KELTRON, OEN and SOLDRON.`,
  },
  {
    icon: BoxIcon,
    title: 'Wide component range',
    text: 'Passives, connectors, terminal blocks, relays, heat sinks, cables, soldering equipment and tools under one roof.',
  },
  {
    icon: ChatIcon,
    title: 'Fast quotes on WhatsApp & email',
    text: 'Send a part number or specification and get a quotation during working hours — no account or checkout needed.',
  },
]

export function WhyChoose() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container-x">
        <SectionHeading id="why-heading" eyebrow="Why Micronix" title="Why customers choose Micronix" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {REASONS.map((r) => (
            <li key={r.title} className="rounded-lg border border-line p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy-50 text-navy-800">
                <r.icon />
              </span>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Enquiry CTA */
export function EnquiryCta() {
  return (
    <section className="bg-navy-800 text-white" aria-labelledby="cta-heading">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
            Have a part number or specification?
          </h2>
          <p className="mt-2 text-white/75">
            Send it across and we will confirm availability and price. Bulk and repeat orders welcome.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button to="/request-quote" variant="accent" size="lg">
            Request a Quote
          </Button>
          <Button href={whatsappUrl('Hello Micronix, I have an enquiry about: ')} target="_blank" rel="noopener noreferrer" variant="outline-light" size="lg">
            <WhatsAppIcon width={18} height={18} /> WhatsApp us
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Contact preview */
export function ContactPreview() {
  return (
    <section className="section" aria-labelledby="contact-preview-heading">
      <div className="container-x">
        <SectionHeading
          id="contact-preview-heading"
          eyebrow="Visit or call"
          title="Contact Micronix"
          action={
            <Button to="/contact" variant="secondary">
              Contact page &amp; map <ArrowRightIcon width={16} height={16} />
            </Button>
          }
        />
        <ContactInfo />
      </div>
    </section>
  )
}
