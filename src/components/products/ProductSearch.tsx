import { useEffect, useId, useState } from 'react'
import { CloseIcon, SearchIcon } from '../ui/Icons'

interface Props {
  value: string
  onChange: (q: string) => void
  resultCount: number
}

/** Catalogue search box with a clear button. Debounced so the URL is not rewritten on every keystroke. */
export function ProductSearch({ value, onChange, resultCount }: Props) {
  const id = useId()
  const [local, setLocal] = useState(value)

  // Re-sync when the URL value changes from outside (e.g. Reset, back button).
  const [seenValue, setSeenValue] = useState(value)
  if (seenValue !== value) {
    setSeenValue(value)
    setLocal(value)
  }

  useEffect(() => {
    if (local === value) return
    const t = setTimeout(() => onChange(local), 200)
    return () => clearTimeout(t)
  }, [local, value, onChange])

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        Search products by name, category, brand or part number
      </label>
      <div className="relative flex items-center">
        <SearchIcon className="pointer-events-none absolute left-3 text-ink-subtle" />
        <input
          id={id}
          type="search"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Search by name, category, brand or part number"
          autoComplete="off"
          className="h-12 w-full rounded-md border border-line-strong bg-white pl-10 pr-11 text-[15px] text-ink placeholder:text-ink-subtle focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20 [&::-webkit-search-cancel-button]:hidden"
        />
        {local && (
          <button
            type="button"
            onClick={() => {
              setLocal('')
              onChange('')
            }}
            aria-label="Clear search"
            className="absolute right-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-alt hover:text-ink"
          >
            <CloseIcon width={18} height={18} />
          </button>
        )}
      </div>
      <p className="mt-2 text-sm text-ink-subtle" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'product' : 'products'}
        {value ? ` for “${value}”` : ''}
      </p>
    </div>
  )
}
