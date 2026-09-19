import { company, whatsappUrl } from '../data/company'

/**
 * Enquiry / quote submission.
 *
 * The site is a static frontend with no backend, so submissions are delivered
 * through the customer's own mail client (mailto:) or WhatsApp with a
 * pre-filled message. Both work without any server.
 *
 * TO CONNECT A BACKEND (recommended before go-live):
 *   Replace the body of `submitEnquiry` with a POST to your form endpoint
 *   (e.g. Formspree, Netlify Forms, EmailJS, or your own API) and return
 *   `{ ok: true, channel: 'api' }` on success. The forms already handle
 *   validation, loading and success/error states.
 */

export type EnquiryKind = 'enquiry' | 'quote'

export interface EnquiryPayload {
  kind: EnquiryKind
  name: string
  company?: string
  email: string
  phone: string
  product?: string
  quantity?: string
  message: string
}

export type SubmitResult = { ok: true; channel: 'mailto' | 'whatsapp' | 'api' } | { ok: false; error: string }

export function buildSubject(p: EnquiryPayload) {
  const base = p.kind === 'quote' ? 'Quote request' : 'Enquiry'
  return p.product ? `${base}: ${p.product}` : `${base} from ${p.name}`
}

export function buildMessage(p: EnquiryPayload) {
  const lines = [
    p.kind === 'quote' ? 'Request for quotation' : 'Website enquiry',
    '',
    `Name: ${p.name}`,
    p.company ? `Company: ${p.company}` : null,
    `Phone: ${p.phone}`,
    `Email: ${p.email}`,
    p.product ? `Product: ${p.product}` : null,
    p.quantity ? `Quantity: ${p.quantity}` : null,
    '',
    p.message,
  ].filter((l): l is string => l !== null)
  return lines.join('\n')
}

export function mailtoUrl(p: EnquiryPayload) {
  return `mailto:${company.email}?subject=${encodeURIComponent(buildSubject(p))}&body=${encodeURIComponent(buildMessage(p))}`
}

export function whatsappEnquiryUrl(p: EnquiryPayload) {
  return whatsappUrl(buildMessage(p))
}

export async function submitEnquiry(p: EnquiryPayload, channel: 'mailto' | 'whatsapp'): Promise<SubmitResult> {
  try {
    const url = channel === 'whatsapp' ? whatsappEnquiryUrl(p) : mailtoUrl(p)
    if (channel === 'whatsapp') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
    return { ok: true, channel }
  } catch {
    return { ok: false, error: 'Could not open your mail or messaging app. Please call or email us directly.' }
  }
}

/* ---------------------------------------------------------------- validation */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const PHONE_RE = /^[+\d][\d\s()-]{6,}$/

export type FieldErrors<T extends string> = Partial<Record<T, string>>

export function validateEnquiry(p: EnquiryPayload): FieldErrors<keyof EnquiryPayload> {
  const e: FieldErrors<keyof EnquiryPayload> = {}
  if (!p.name.trim()) e.name = 'Please enter your name.'
  if (!p.phone.trim()) e.phone = 'Please enter a phone number.'
  else if (!PHONE_RE.test(p.phone.trim())) e.phone = 'Enter a valid phone number (digits, spaces, + and - only).'
  if (!p.email.trim()) e.email = 'Please enter an email address.'
  else if (!EMAIL_RE.test(p.email.trim())) e.email = 'Enter a valid email address, e.g. name@company.com.'
  if (p.kind === 'quote' && !p.product?.trim()) e.product = 'Tell us which product you need.'
  if (!p.message.trim()) e.message = p.kind === 'quote' ? 'Add the specification or part number you need.' : 'Please enter a message.'
  return e
}
