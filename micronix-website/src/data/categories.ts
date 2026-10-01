import type { Category } from './types'

/** Categories are derived from the product families listed on the current site. */
export const categories: Category[] = [
  {
    id: 'capacitors',
    name: 'Capacitors',
    description: 'Electrolytic capacitors from SAMWHA, KELTRON and JWCO; WEIDY 5 mm capacitors.',
    image: '/images/products/electrolytic-capacitors.webp',
    featured: true,
  },
  {
    id: 'resistors',
    name: 'Resistors',
    description: 'MEGA silicone-coated, ceramic-encased and heat-sink power resistors.',
    image: '/images/products/mega-resistor.webp',
    featured: true,
  },
  {
    id: 'connectors',
    name: 'Connectors',
    description: 'FRC (IDC), 2510 RMC, CPU/Molex and MRS connectors — all types available.',
    image: '/images/products/connectors.webp',
    featured: true,
  },
  {
    id: 'pin-headers',
    name: 'Pin Headers & Sockets',
    description: 'Single/double row pin headers, flow-solder female headers and jumpers.',
    image: '/images/products/pin-header.webp',
    featured: true,
  },
  {
    id: 'terminal-blocks',
    name: 'Terminal Blocks',
    description: 'Screw-type terminal blocks and Xinya Combicon pluggable connectors.',
    image: '/images/products/terminal-blocks.webp',
    featured: true,
  },
  {
    id: 'd-sub-connectors',
    name: 'D-sub Connectors',
    description: 'D-sub connectors and plastic dust covers.',
    image: '/images/products/d-sub-connector.webp',
    featured: true,
  },
  {
    id: 'relays-heat-sinks',
    name: 'Relays & Heat Sinks',
    description: 'OEN relays and SUCCESS heat sinks.',
    image: '/images/products/oen-relay.webp',
  },
  {
    id: 'cables-accessories',
    name: 'Cables & Accessories',
    description: 'Flat cables, cable ties, heat-shrink sleeves, glue sticks and batteries.',
    image: '/images/products/flat-cable.webp',
  },
  {
    id: 'tools-soldering',
    name: 'Tools & Soldering',
    description: 'SOLDRON soldering irons and bits; MULTITEC hand tools.',
    image: '/images/products/soldron.webp',
  },
  {
    id: 'other-components',
    name: 'Other Components',
    description: 'Potentiometers, fuses, ICs and regulators, LCD displays, SOYNIA products.',
    image: '/images/products/ic-regulators.webp',
  },
]

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>
