import { useState, type FormEvent } from 'react'
import { products } from '../../data/products'
import { company } from '../../data/company'
import {
  submitEnquiry,
  validateEnquiry,
  type EnquiryKind,
  type EnquiryPayload,
  type FieldErrors,
} from '../../lib/enquiry'
import { Button } from '../ui/Button'
import { SelectField, TextAreaField, TextField } from '../ui/FormField'
import { CheckIcon, MailIcon, WhatsAppIcon } from '../ui/Icons'

interface Props {
  kind: EnquiryKind
  /** Product slug or free text to pre-select (from ?product= on the quote page). */
  initialProduct?: string
}

type Errors = FieldErrors<keyof EnquiryPayload>

/**
 * Shared enquiry / quote form.
 * Client-side validation with inline, screen-reader-announced messages.
 * Delivery is via mailto: or WhatsApp — see src/lib/enquiry.ts to plug in a backend.
 */
export function EnquiryForm({ kind, initialProduct = '' }: Props) {
  const knownSlug = products.find((p) => p.slug === initialProduct)
  const [form, setForm] = useState<EnquiryPayload>({
    kind,
    name: '',
    company: '',
    email: '',
    phone: '',
    product: knownSlug ? knownSlug.name : initialProduct,
    quantity: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof EnquiryPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  async function send(channel: 'mailto' | 'whatsapp', e?: FormEvent) {
    e?.preventDefault()
    const errs = validateEnquiry(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0]
      document.getElementById(first)?.focus()
      return
    }
    setStatus('sending')
    const res = await submitEnquiry(form, channel)
    if (res.ok) {
      setStatus('sent')
    } else {
      setStatus('error')
      setErrorMsg(res.error)
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-lg border border-success/30 bg-success/5 p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success text-white">
            <CheckIcon width={18} height={18} />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Your {kind === 'quote' ? 'quote request' : 'enquiry'} is ready to send</h3>
            <p className="prose-muted mt-1 text-sm">
              We opened your email or WhatsApp app with the message pre-filled — just press send. We usually reply during working
              hours ({company.hours[0].days}, {company.hours[0].time}).
            </p>
            <Button variant="secondary" size="sm" className="mt-4" onClick={() => setStatus('idle')}>
              Send another
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const isQuote = kind === 'quote'

  return (
    <form noValidate onSubmit={(e) => send('mailto', e)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="name" label="Your name" required autoComplete="name" value={form.name} onChange={set('name')} error={errors.name} />
        <TextField id="company" label="Company" autoComplete="organization" value={form.company} onChange={set('company')} />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          value={form.phone}
          onChange={set('phone')}
          error={errors.phone}
        />
        <TextField id="email" label="Email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} error={errors.email} />
      </div>

      {isQuote ? (
        <div className="grid gap-4 sm:grid-cols-[1fr_10rem]">
          {/* Free-text with datalist so any product (even unlisted) can be requested */}
          <TextField
            id="product"
            label="Product"
            required
            list="product-options"
            placeholder="Start typing a product name"
            value={form.product}
            onChange={set('product')}
            error={errors.product}
          />
          <datalist id="product-options">
            {products.map((p) => (
              <option key={p.id} value={p.name} />
            ))}
          </datalist>
          <TextField id="quantity" label="Quantity" inputMode="numeric" placeholder="e.g. 500" value={form.quantity} onChange={set('quantity')} />
        </div>
      ) : (
        <SelectField id="product" label="Related product" value={form.product} onChange={set('product')}>
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </SelectField>
      )}

      <TextAreaField
        id="message"
        label={isQuote ? 'Specification / part numbers' : 'Message'}
        required
        placeholder={isQuote ? 'Value, voltage, pitch, pin count, part number, target delivery date…' : 'How can we help?'}
        value={form.message}
        onChange={set('message')}
        error={errors.message}
      />

      {status === 'error' && (
        <p role="alert" className="rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-sm text-danger">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={status === 'sending'} className="sm:flex-1">
          <MailIcon width={18} height={18} /> Send by email
        </Button>
        <Button type="button" variant="secondary" size="lg" disabled={status === 'sending'} onClick={() => send('whatsapp')} className="sm:flex-1">
          <WhatsAppIcon width={18} height={18} /> Send on WhatsApp
        </Button>
      </div>
      <p className="text-xs text-ink-subtle">
        Both options open your own email or WhatsApp app with the message filled in. Fields marked * are required.
      </p>
    </form>
  )
}

export function ContactForm() {
  return <EnquiryForm kind="enquiry" />
}

export function QuoteForm({ initialProduct }: { initialProduct?: string }) {
  return <EnquiryForm kind="quote" initialProduct={initialProduct} />
}
