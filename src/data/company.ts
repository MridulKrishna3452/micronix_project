/**
 * Company information.
 * Everything marked VERIFIED was taken from the current website
 * (https://micronixcorporation.godaddysites.com/) on 13 Sep 2026.
 * Everything marked PLACEHOLDER must be confirmed by Micronix before go-live.
 */
export const company = {
  name: 'Micronix Corporation', // VERIFIED
  shortName: 'Micronix', // VERIFIED
  establishedYear: 1992, // VERIFIED — "SINCE 1992" on the logo
  tagline: 'Industrial Electronic Components', // VERIFIED — hero image alt text on the current site
  positioning: 'Authorised distributors and dealers of industrial electronic components in Chennai.', // VERIFIED wording: "Authorised distributors and dealers for"

  /** PLACEHOLDER — short company introduction. Replace with approved copy. */
  intro:
    'Micronix Corporation supplies electronic components to industrial customers from Chintadripet, Chennai. ' +
    'We stock capacitors, resistors, connectors, pin headers, terminal blocks, D-sub connectors, relays, ' +
    'heat sinks, cables, soldering equipment and tools from the manufacturers we represent.',

  address: {
    line1: 'Seeal Amman Koil Street', // VERIFIED
    line2: 'Mount Road, Chintadripet', // VERIFIED
    city: 'Chennai', // VERIFIED
    state: 'Tamil Nadu', // VERIFIED
    pincode: '', // PLACEHOLDER — add PIN code
    country: 'India', // VERIFIED
  },

  phones: [
    { label: 'Mobile', display: '93810 11348', tel: '+919381011348' }, // VERIFIED
    { label: 'Mobile', display: '99406 11348', tel: '+919940611348' }, // VERIFIED
    { label: 'Landline', display: '044 4214 4258', tel: '+914442144258' }, // VERIFIED
    { label: 'Landline', display: '044 2851 4418', tel: '+914428514418' }, // VERIFIED
  ],
  whatsapp: { display: '+91 93810 11348', number: '919381011348' }, // VERIFIED — wa.me/919381011348
  email: 'micronixcorp@gmail.com', // VERIFIED

  hours: [
    // VERIFIED from "Working Hours" on the current site
    { days: 'Monday – Saturday', time: '11:00 am – 7:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],

  gstin: '', // PLACEHOLDER — optional, shown in the footer if provided

  /** Set to true only if analytics/marketing cookies are added. Enables the cookie notice. */
  usesTrackingCookies: false,
}

export const fullAddress = [
  company.name,
  company.address.line1,
  company.address.line2,
  `${company.address.city}, ${company.address.state}${company.address.pincode ? ' ' + company.address.pincode : ''}`,
  company.address.country,
].join(', ')

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${company.whatsapp.number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
