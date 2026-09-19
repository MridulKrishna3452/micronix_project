import { useSearchParams } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { company, whatsappUrl } from '../data/company'
import { SectionHeading } from '../components/ui/SectionHeading'
import { QuoteForm } from '../components/contact/EnquiryForm'
import { CheckIcon, PhoneIcon, WhatsAppIcon } from '../components/ui/Icons'

export function RequestQuotePage() {
  usePageMeta('Request a quote', 'Request a quotation for electronic components from Micronix Corporation, Chennai.')
  const [params] = useSearchParams()
  const product = params.get('product') ?? ''

  return (
    <>
      <section className="border-b border-line bg-surface-alt">
        <div className="container-x py-8 md:py-10">
          <SectionHeading
            as="h1"
            eyebrow="Pricing & availability"
            title="Request a quote"
            description="Tell us the product, quantity and specification. We reply during working hours with price and lead time."
            className="mb-0"
          />
        </div>
      </section>

      <section className="section" aria-label="Quote request form">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-lg border border-line p-5 md:p-6">
              <QuoteForm key={product} initialProduct={product} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-lg border border-line bg-surface-alt p-5">
              <h2 className="font-semibold">What to include</h2>
              <ul className="mt-3 grid gap-2 text-sm text-ink-muted">
                {[
                  'Product name or manufacturer part number',
                  'Electrical values (capacitance, resistance, voltage, current)',
                  'Pitch, pin count, mounting style for connectors',
                  'Quantity and expected delivery date',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-navy-700" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-lg border border-line p-5">
              <h2 className="font-semibold">Prefer to talk?</h2>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <a href={whatsappUrl('Hello Micronix, I would like a quote for: ')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-navy-800 hover:underline">
                    <WhatsAppIcon width={18} height={18} /> WhatsApp {company.whatsapp.display}
                  </a>
                </li>
                {company.phones.slice(0, 2).map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="inline-flex items-center gap-2 font-medium text-navy-800 hover:underline">
                      <PhoneIcon width={18} height={18} /> {p.display}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-subtle">
                {company.hours[0].days}, {company.hours[0].time}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
