import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const d = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
})

export const SearchIcon = (p: P) => (
  <svg {...d(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)
export const MenuIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const CloseIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
export const ArrowRightIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const ChevronRightIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)
export const PhoneIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
)
export const MailIcon = (p: P) => (
  <svg {...d(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)
export const PinIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
export const ClockIcon = (p: P) => (
  <svg {...d(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const CheckIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="m5 12 4 4L19 6" />
  </svg>
)
export const ExternalIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </svg>
)
export const DirectionsIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="m3 11 18-8-8 18-2-8-8-2z" />
  </svg>
)
export const WhatsAppIcon = (p: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3c.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z" />
  </svg>
)
/* Simple category glyphs for the "Why choose" section */
export const BoxIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
  </svg>
)
export const ShieldIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
  </svg>
)
export const StoreIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M4 10 5 4h14l1 6M4 10h16v10H4zM10 20v-5h4v5" />
  </svg>
)
export const ChatIcon = (p: P) => (
  <svg {...d(p)}>
    <path d="M4 5h16v11H8l-4 4V5z" />
  </svg>
)
