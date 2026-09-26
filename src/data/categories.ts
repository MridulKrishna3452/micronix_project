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
    description:
      'FRC (IDC), 2510 RMC, CPU/Molex and MRS connectors, pin headers & sockets, terminal blocks, D-sub connectors and flat cables.',
    image: '/images/products/connectors.webp',
    featured: true,
  },
  {
    id: 'relays',
    name: 'Relays',
    description: 'OEN relays — all types available.',
    image: '/images/products/oen-relay.webp',
    featured: true,
  },
  {
    id: 'heat-sinks',
    name: 'Heat Sinks',
    description: 'SUCCESS heat sinks — all types available.',
    image: '/images/products/heat-sink.webp',
  },
  {
    id: 'tools-accessories',
    name: 'Tools & Accessories',
    description: 'SOLDRON soldering irons and bits, MULTITEC hand tools, cable ties, glue sticks and batteries.',
    image: '/images/products/soldron.webp',
  },
  {
    id: 'heat-shrink-sleeves',
    name: 'Heat Shrink Sleeves',
    description: 'Heat shrink sleeves in assorted sizes.',
    image: '/images/products/heat-shrink-sleeves.webp',
  },
  {
    id: 'ics-regulators',
    name: 'ICs & Regulators',
    description: 'Integrated circuits and voltage regulators.',
    image: '/images/products/ic-regulators.webp',
  },
  {
    id: 'soynia',
    name: 'SOYNIA',
    description: 'Distributors of SOYNIA products.',
    image: '/images/products/soynia.webp',
  },
  {
    id: 'other-components',
    name: 'Other Components',
    description: 'Potentiometers, fuses and LCD displays.',
    image: '/images/products/pankaj-potentiometer.webp',
  },
]

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>
