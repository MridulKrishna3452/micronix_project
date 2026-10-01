import type { Brand } from './types'

/**
 * Brands / manufacturers Micronix represents.
 * All entries are VERIFIED against the current website's wording
 * ("We are dealers of…", "Distributor of…", "Dealers of…") or the supplied
 * product list (MICRONIX WEBSITE.docx). Logos under /images/brand/logos/
 * are the manufacturer artwork supplied in that document; brands without
 * a `logo` path had none supplied, so a text mark is rendered instead.
 */
export const brands: Brand[] = [
  { id: 'samwha', name: 'SAMWHA', relationship: 'Dealer', productLine: 'Electrolytic capacitors', logo: '/images/brand/logos/samwha.webp', verified: true },
  { id: 'keltron', name: 'KELTRON', relationship: 'Dealer', productLine: 'Electrolytic capacitors', logo: '/images/brand/logos/keltron.webp', verified: true },
  { id: 'jwco', name: 'JWCO', relationship: 'Dealer', productLine: 'Electrolytic capacitors', logo: '/images/brand/logos/jwco.webp', verified: true },
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
  { id: 'success', name: 'SUCCESS', relationship: 'Distributor', productLine: 'Heat sinks', verified: true },
  { id: 'oen', name: 'OEN', relationship: 'Dealer', productLine: 'Relays', verified: true },
  { id: 'crown', name: 'CROWN', relationship: 'Distributor', productLine: 'Glue sticks', verified: true },
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

  // Relays
  { id: 'hongfa', name: 'HONGFA', relationship: 'Dealer', productLine: 'Relays', logo: '/images/brand/logos/hongfa.webp', verified: true },
  { id: 'leone', name: 'LEONE', relationship: 'Dealer', productLine: 'Relays', logo: '/images/brand/logos/leone.webp', verified: true },
  { id: 'omron', name: 'OMRON', relationship: 'Dealer', productLine: 'Relays', logo: '/images/brand/logos/omron.webp', verified: true },
  { id: 'pla', name: 'PLA', relationship: 'Dealer', productLine: 'Relays', logo: '/images/brand/logos/pla.webp', verified: true },

  // Heat shrink sleeves
  { id: 'woer', name: 'WOER', relationship: 'Dealer', productLine: 'Heat shrink sleeves and tubing', verified: true },

  // ICs & Regulators
  { id: 'st', name: 'STMicroelectronics', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/st-microelectronics.webp', verified: true },
  { id: 'ti', name: 'Texas Instruments', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/texas-instruments.webp', verified: true },
  { id: 'nxp', name: 'NXP Semiconductors', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/nxp.webp', verified: true },
  { id: 'microchip', name: 'Microchip', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/microchip.webp', verified: true },
  { id: 'geehy', name: 'Geehy Semiconductor', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/geehy.webp', verified: true },
  { id: 'onsemi', name: 'Onsemi', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/onsemi.webp', verified: true },
  { id: 'infineon', name: 'Infineon', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/infineon.webp', verified: true },
  { id: 'htc-korea', name: 'HTC Korea', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/htc-korea.webp', verified: true },
  { id: 'ik-semicon', name: 'IK Semicon', relationship: 'Dealer', productLine: 'ICs and regulators', logo: '/images/brand/logos/ik-semicon.webp', verified: true },

  // Other components
  { id: 'mean-well', name: 'MEAN WELL', relationship: 'Dealer', productLine: 'Switch-mode power supplies (SMPS)', logo: '/images/brand/logos/mean-well.webp', verified: true },
  { id: 'epcos', name: 'EPCOS', relationship: 'Dealer', productLine: 'EPCOS / TDK products', logo: '/images/brand/logos/epcos.webp', verified: true },
  { id: 'cdil', name: 'CDIL', relationship: 'Dealer', productLine: 'Semiconductors', logo: '/images/brand/logos/cdil.webp', verified: true },
  { id: 'bourns', name: 'BOURNS', relationship: 'Dealer', productLine: 'Trimpots', logo: '/images/brand/logos/bourns.webp', verified: true },
  { id: 'protectron', name: 'PROTECTRON', relationship: 'Dealer', productLine: 'Fuses', logo: '/images/brand/logos/protectron.webp', verified: true },
  { id: 'everlight', name: 'EVERLIGHT', relationship: 'Dealer', productLine: 'Optoelectronic components', logo: '/images/brand/logos/everlight.webp', verified: true },
  { id: 'te-connectivity', name: 'TE Connectivity', relationship: 'Dealer', productLine: 'Connectors and components', logo: '/images/brand/logos/te-connectivity.webp', verified: true },
  { id: 'yxc', name: 'YXC', relationship: 'Dealer', productLine: 'Crystal oscillators', logo: '/images/brand/logos/yxc.webp', verified: true },

  // SMD passive components
  { id: 'walsin', name: 'WALSIN', relationship: 'Dealer', productLine: 'SMD chip resistors and capacitors', logo: '/images/brand/logos/walsin.webp', verified: true },
  { id: 'royalohm', name: 'ROYALOHM', relationship: 'Dealer', productLine: 'SMD chip resistors and capacitors', logo: '/images/brand/logos/royalohm.webp', verified: true },
  { id: 'yageo', name: 'YAGEO', relationship: 'Dealer', productLine: 'SMD chip resistors and capacitors', logo: '/images/brand/logos/yageo.webp', verified: true },
]

export const brandById = Object.fromEntries(brands.map((b) => [b.id, b])) as Record<string, Brand>
