import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { Button } from '../ui/Button'
import { CloseIcon, MenuIcon, SearchIcon } from '../ui/Icons'
import { NAV_LINKS } from '../../data/navigation'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Close overlays on route change (derived during render — no extra effect pass).
  const [seenLocation, setSeenLocation] = useState(location.key)
  if (seenLocation !== location.key) {
    setSeenLocation(location.key)
    setMenuOpen(false)
    setSearchOpen(false)
  }

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container-x flex h-16 items-center gap-3 md:gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="ml-2 hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    [
                      'inline-flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors',
                      isActive ? 'bg-navy-50 text-navy-900' : 'text-ink-muted hover:bg-surface-alt hover:text-ink',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Desktop search */}
          <SearchForm className="hidden md:flex" inputClassName="w-44 lg:w-56 xl:w-64" />

          {/* Wrapped so `hidden` is not overridden by the button's own `inline-flex` */}
          <div className="hidden md:block">
            <Button to="/request-quote" size="sm">
              Request Quote
            </Button>
          </div>

          {/* Mobile controls */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-alt md:hidden"
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            aria-controls="mobile-search"
            onClick={() => {
              setSearchOpen((v) => !v)
              setMenuOpen(false)
            }}
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-alt lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMenuOpen((v) => !v)
              setSearchOpen(false)
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile search row — sits below the header bar so it never overlaps the logo or icons */}
      <div id="mobile-search" hidden={!searchOpen} className="border-t border-line bg-white md:hidden">
        <div className="container-x py-3">
          <SearchForm className="flex" inputClassName="w-full" inputRef={searchInputRef} autoFocus />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

interface SearchFormProps {
  className?: string
  inputClassName?: string
  inputRef?: React.RefObject<HTMLInputElement | null>
  autoFocus?: boolean
}

/** Compact product search that navigates to /products?q=… */
export function SearchForm({ className = '', inputClassName = '', inputRef, autoFocus }: SearchFormProps) {
  const navigate = useNavigate()
  const id = useId()
  const [value, setValue] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const q = value.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
  }

  return (
    <form role="search" onSubmit={onSubmit} className={`items-center ${className}`}>
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <div className="relative flex w-full items-center">
        <SearchIcon className="pointer-events-none absolute left-3 text-ink-subtle" width={18} height={18} />
        <input
          ref={inputRef}
          id={id}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search products, brands, part no."
          autoComplete="off"
          autoFocus={autoFocus}
          className={`h-10 rounded-md border border-line-strong bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20 ${inputClassName}`}
        />
      </div>
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  )
}
