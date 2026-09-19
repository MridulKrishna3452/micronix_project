import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-navy-800 text-white hover:bg-navy-700 focus-visible:outline-navy-700',
  accent: 'bg-accent text-navy-950 hover:bg-accent-600 focus-visible:outline-accent',
  secondary: 'bg-white text-navy-800 border border-line-strong hover:border-navy-700 hover:text-navy-700 focus-visible:outline-navy-700',
  ghost: 'text-navy-800 hover:bg-navy-50 focus-visible:outline-navy-700',
  'outline-light': 'border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }
type LinkProps = CommonProps & { to: string; href?: undefined } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
type AnchorProps = CommonProps & { href: string; to?: undefined } & AnchorHTMLAttributes<HTMLAnchorElement>

export type Props = ButtonProps | LinkProps | AnchorProps

function cls(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(' ')
}

/** Button that renders as <button>, <Link> (internal) or <a> (external) depending on props. */
export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cls(variant, size, className)

  if (props.to !== undefined) {
    const { to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  const { variant: _v, size: _s, className: _c, children: _ch, type = 'button', ...rest } = props
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
