import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { categories } from '../../data/categories'
import { company, whatsappUrl } from '../../data/company'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../ui/Icons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo onDark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{company.positioning}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-white/10 px-3 text-sm font-medium text-white hover:bg-white/15"
            >
              <WhatsAppIcon width={18} height={18} /> WhatsApp
            </a>
            <a
              href={`tel:${company.phones[0].tel}`}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-white/10 px-3 text-sm font-medium text-white hover:bg-white/15"
            >
              <PhoneIcon width={18} height={18} /> Call
            </a>
          </div>
        </div>

        {/* Products */}
        <nav aria-labelledby="footer-products" className="lg:col-span-3">
          <h2 id="footer-products" className="text-sm font-semibold uppercase tracking-wider text-white">
            Products
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.id}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-labelledby="footer-company" className="lg:col-span-2">
          <h2 id="footer-company" className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/brands" className="hover:text-white">Brands</Link></li>
            <li><Link to="/products" className="hover:text-white">Product catalogue</Link></li>
            <li><Link to="/request-quote" className="hover:text-white">Request a quote</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <address className="mt-4 grid gap-3 text-sm not-italic">
            <p className="flex gap-2">
              <PinIcon className="mt-0.5 shrink-0" width={18} height={18} />
              <span>
                {company.address.line1}, {company.address.line2},<br />
                {company.address.city}, {company.address.state}
                {company.address.pincode ? ` ${company.address.pincode}` : ''}, {company.address.country}
              </span>
            </p>
            <p className="flex gap-2">
              <PhoneIcon className="mt-0.5 shrink-0" width={18} height={18} />
              <span className="flex flex-col">
                {company.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-white">
                    {p.display}
                  </a>
                ))}
              </span>
            </p>
            <p className="flex gap-2">
              <MailIcon className="mt-0.5 shrink-0" width={18} height={18} />
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
            {company.gstin ? ` · GSTIN ${company.gstin}` : ''}
          </p>
          <p>
            {company.hours[0].days}: {company.hours[0].time} · {company.hours[1].days}: {company.hours[1].time}
          </p>
        </div>
      </div>
    </footer>
  )
}
