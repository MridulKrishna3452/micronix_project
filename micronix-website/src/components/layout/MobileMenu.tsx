import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'
import { Button } from '../ui/Button'
import { MailIcon, PhoneIcon, WhatsAppIcon } from '../ui/Icons'
import { company, whatsappUrl } from '../../data/company'

interface Props {
  open: boolean
  onClose: () => void
}

/**
 * Slide-down navigation panel for < lg screens.
 * - Escape closes it
 * - focus moves to the first link when opened
 * - body scroll is locked while open
 */
export function MobileMenu({ open, onClose }: Props) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-16 z-30 bg-navy-950/40 transition-opacity lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-40 origin-top border-t border-line bg-white shadow-lg transition-all duration-200 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-x max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <li key={l.to}>
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={l.to}
                  end={l.end}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    [
                      'flex h-12 items-center rounded-md px-3 text-base font-medium',
                      isActive ? 'bg-navy-50 text-navy-900' : 'text-ink hover:bg-surface-alt',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-2 border-t border-line pt-4">
            <Button to="/request-quote" tabIndex={open ? 0 : -1}>
              Request Quote
            </Button>
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`tel:${company.phones[0].tel}`}
                tabIndex={open ? 0 : -1}
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-line-strong text-sm font-medium text-navy-800"
              >
                <PhoneIcon width={18} height={18} /> Call
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-line-strong text-sm font-medium text-navy-800"
              >
                <WhatsAppIcon width={18} height={18} /> WhatsApp
              </a>
              <a
                href={`mailto:${company.email}`}
                tabIndex={open ? 0 : -1}
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-line-strong text-sm font-medium text-navy-800"
              >
                <MailIcon width={18} height={18} /> Email
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
