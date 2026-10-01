import { company, mapsDirectionsUrl, whatsappUrl } from '../../data/company'
import { Button } from '../ui/Button'
import { PlaceholderNote } from '../ui/Badge'
import { ClockIcon, DirectionsIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../ui/Icons'

/** Address, phones, email, hours — every number and email is a clickable link. */
export function ContactInfo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-6 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <div className="flex gap-3">
        <PinIcon className="mt-0.5 shrink-0 text-navy-700" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <address className="mt-1 text-sm not-italic text-ink-muted">
            {company.name}
            <br />
            {company.address.line1}, {company.address.line2}
            <br />
            {company.address.city}, {company.address.state}
            {company.address.pincode ? ` ${company.address.pincode}` : ''}, {company.address.country}
          </address>
          {!company.address.pincode && <PlaceholderNote>PIN code missing — add it in src/data/company.ts.</PlaceholderNote>}
          <Button href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" className="mt-3">
            <DirectionsIcon width={16} height={16} /> Get directions
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
        <PhoneIcon className="mt-0.5 shrink-0 text-navy-700" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <ul className="mt-1 grid gap-1 text-sm">
            {company.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="font-medium text-ink hover:text-navy-700">
                  {p.display}
                </a>
                <span className="text-ink-subtle"> · {p.label}</span>
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" className="mt-3">
            <WhatsAppIcon width={16} height={16} /> WhatsApp {company.whatsapp.display}
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
        <MailIcon className="mt-0.5 shrink-0 text-navy-700" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <a href={`mailto:${company.email}`} className="mt-1 block break-all text-sm font-medium text-ink hover:text-navy-700">
            {company.email}
          </a>
        </div>
      </div>

      <div className="flex gap-3">
        <ClockIcon className="mt-0.5 shrink-0 text-navy-700" />
        <div>
          <h3 className="font-semibold">Working hours</h3>
          <dl className="mt-1 grid gap-1 text-sm">
            {company.hours.map((h) => (
              <div key={h.days} className="flex gap-2">
                <dt className="w-36 text-ink-subtle">{h.days}</dt>
                <dd className="font-medium">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
