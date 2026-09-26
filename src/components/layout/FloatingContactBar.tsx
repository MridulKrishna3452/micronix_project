import { company, whatsappUrl } from '../../data/company'
import { MailIcon, WhatsAppIcon } from '../ui/Icons'

/**
 * Fixed vertical Email/WhatsApp tab on the left edge of the viewport.
 * Deliberately only these two channels — see change request for rationale.
 * Sits below the sticky header (z-40, 64px tall) since it is vertically
 * centred, and stays clear of the bottom-corner CookieNotice (z-50).
 */
export function FloatingContactBar() {
  const items = [
    {
      key: 'email',
      href: `mailto:${company.email}`,
      label: `Email us at ${company.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      key: 'whatsapp',
      href: whatsappUrl('Hello Micronix, I have an enquiry about: '),
      label: `WhatsApp us at ${company.whatsapp.display}`,
      Icon: WhatsAppIcon,
      external: true,
    },
  ] as const

  return (
    // z-30: stays below the header/mobile-menu stack (z-40) and CookieNotice (z-50)
    // so the mobile nav panel and search row are never hidden behind it.
    <nav aria-label="Quick contact" className="fixed left-0 top-1/2 z-30 -translate-y-1/2">
      <ul className="flex flex-col divide-y divide-white/15 overflow-hidden rounded-r-xl shadow-lg" role="list">
        {items.map(({ key, href, label, Icon, external }) => (
          <li key={key}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex h-12 w-12 items-center justify-center bg-navy-800 text-white transition-colors hover:bg-accent hover:text-navy-950 focus-visible:bg-accent focus-visible:text-navy-950 sm:h-14 sm:w-14"
            >
              <Icon width={22} height={22} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
