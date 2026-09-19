/**
 * Data model for the Micronix catalogue.
 *
 * `verified: true`  — the name/description appears on the current Micronix website.
 * `verified: false` — placeholder content that MUST be confirmed by the company
 *                     before deployment (search the codebase for "PLACEHOLDER").
 */

export type CategoryId =
  | 'capacitors'
  | 'resistors'
  | 'connectors'
  | 'pin-headers'
  | 'terminal-blocks'
  | 'd-sub-connectors'
  | 'relays-heat-sinks'
  | 'cables-accessories'
  | 'tools-soldering'
  | 'other-components'

export interface Category {
  id: CategoryId
  name: string
  /** One-line description shown on category cards. */
  description: string
  /** Path under /public. */
  image: string
  /** Show on the homepage "featured categories" section. */
  featured?: boolean
}

export interface Brand {
  id: string
  name: string
  /** Wording used on the current website, e.g. "Dealers of", "Distributor of". */
  relationship: 'Distributor' | 'Dealer'
  /** What Micronix supplies from this brand, in Micronix's own words. */
  productLine: string
  website?: string
  /** Path under /public — optional; a text mark is rendered when absent. */
  logo?: string
  verified: boolean
}

export interface Spec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: CategoryId
  /** Brand ids from brands.ts. */
  brands: string[]
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  /** Variant / option list, e.g. pin counts, mounting styles. */
  variants?: string[]
  /** Only verified specifications. Leave empty rather than inventing. */
  specs?: Spec[]
  /** Manufacturer part numbers / type codes, searchable. */
  partNumbers?: string[]
  /** Manufacturer datasheet / product page. */
  externalLink?: { label: string; href: string }
  /** Show on the homepage. */
  featured?: boolean
  verified: boolean
}
