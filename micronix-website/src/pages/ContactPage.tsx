import { usePageMeta } from '../lib/usePageMeta'
import { company, whatsappUrl } from '../data/company'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { WhatsAppIcon } from '../components/ui/Icons'
import { ContactInfo } from '../components/contact/ContactInfo'
import { ContactForm } from '../components/contact/EnquiryForm'
import { MapPreview } from '../components/contact/MapPreview'

export function ContactPage() {
  usePageMeta('Contact', `Call, email or WhatsApp ${company.name}, ${company.address.line2}, ${company.address.city}. Working hours ${company.hours[0].days} ${company.hours[0].time}.`)

  return (
    <>
      <section className="border-b border-line bg-surface-alt">
        <div className="container-x py-8 md:py-10">
          <SectionHeading
            as="h1"
            eyebrow="Get in touch"
            title="Contact Micronix"
            description="Call, WhatsApp or email us during working hours, or send an enquiry using the form. For pricing, use the request-a-quote form."
            className="mb-0"
            action={
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <WhatsAppIcon width={18} height={18} /> WhatsApp
                </Button>
                <Button to="/request-quote">Request a quote</Button>
              </div>
            }
          />
        </div>
      </section>

      <section className="section" aria-label="Contact details and enquiry form">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-bold tracking-tight">Contact details</h2>
            <div className="mt-5">
              <ContactInfo compact />
            </div>
            <MapPreview className="mt-8" />
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-line p-5 md:p-6">
              <h2 className="text-xl font-bold tracking-tight">Send an enquiry</h2>
              <p className="prose-muted mt-1 text-sm">Questions about availability, brands or a product you cannot find? Write to us.</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
