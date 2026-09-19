import { Link } from 'react-router-dom'
import { company } from '../../data/company'

/** Existing company logo (unchanged) with a wordmark. */
export function Logo({ onDark = false, className = '' }: { onDark?: boolean; className?: string }) {
  return (
    <Link to="/" className={`flex min-w-0 items-center gap-2.5 rounded-sm sm:gap-3 ${className}`} aria-label={`${company.name} — home`}>
      <img
        src="/images/brand/logo.webp"
        width={44}
        height={44}
        alt=""
        className="h-10 w-10 shrink-0 rounded-sm sm:h-11 sm:w-11"
        decoding="async"
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={`text-[13px] font-bold tracking-wide uppercase sm:text-[15px] ${onDark ? 'text-white' : 'text-navy-900'}`}>
          {company.name}
        </span>
        <span className={`truncate text-[10px] font-medium tracking-wider uppercase sm:text-[11px] ${onDark ? 'text-white/60' : 'text-ink-subtle'}`}>
          Since {company.establishedYear} · Chennai
        </span>
      </span>
    </Link>
  )
}
