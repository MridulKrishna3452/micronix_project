import type { Brand } from './types'

/**
 * Brands / manufacturers Micronix represents.
 * All entries are VERIFIED against the current website's wording
 * ("We are dealers of…", "Distributor of…", "Dealers of…").
 * Logos are not included — the current site carries no approved logo files
 * apart from SOLDRON and MULTITEC marks embedded in product photos.
 * Add a `logo` path once each manufacturer supplies an approved logo.
 */
export const brands: Brand[] = [
  { id: 'samwha', name: 'SAMWHA', relationship: 'Dealer', productLine: 'Electrolytic capacitors', verified: true },
  { id: 'keltron', name: 'KELTRON', relationship: 'Dealer', productLine: 'Electrolytic capacitors', verified: true },
  { id: 'jwco', name: 'JWCO', relationship: 'Dealer', productLine: 'Electrolytic capacitors', verified: true },
  {
    id: 'mega',
    name: 'MEGA',
    relationship: 'Distributor',
    productLine: 'Silicone-coated, ceramic-encased and heat-sink power resistors',
    website: 'http://www.megaresistor.com/',
    verified: true,
  },
  { id: 'xinya', name: 'Xinya', relationship: 'Dealer', productLine: 'Combicon (terminal block) connectors', verified: true },
  { id: 'soynia', name: 'SOYNIA', relationship: 'Distributor', productLine: 'SOYNIA products', verified: true },
  { id: 'success', name: 'SUCCESS', relationship: 'Dealer', productLine: 'Heat sinks', verified: true },
  { id: 'oen', name: 'OEN', relationship: 'Dealer', productLine: 'Relays', verified: true },
  { id: 'crown', name: 'CROWN', relationship: 'Dealer', productLine: 'Glue sticks', verified: true },
  { id: 'pankaj', name: 'Pankaj', relationship: 'Dealer', productLine: 'Potentiometers', verified: true },
  { id: 'eii', name: 'EII', relationship: 'Dealer', productLine: 'Fuses', verified: true },
  { id: 'soldron', name: 'SOLDRON', relationship: 'Dealer', productLine: 'Soldering irons and bits', verified: true },
  {
    id: 'multitec',
    name: 'MULTITEC',
    relationship: 'Dealer',
    productLine: 'Wire strippers, cutters, pliers, nippers and tool kits',
    verified: true,
  },
  { id: 'weidy', name: 'WEIDY', relationship: 'Dealer', productLine: '5 mm capacitors', verified: true },
]

export const brandById = Object.fromEntries(brands.map((b) => [b.id, b])) as Record<string, Brand>
