import type { ReactNode } from 'react'

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'navy' | 'accent' }) {
  const tones = {
    neutral: 'bg-surface-alt text-ink-muted border-line',
    navy: 'bg-navy-50 text-navy-800 border-navy-100',
    accent: 'bg-accent/15 text-navy-900 border-accent/40',
  }
  return (
    <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>
  )
}

/** Visible marker for content that must be verified/replaced before launch. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  if (import.meta.env.PROD) return null
  return (
    <p className="mt-2 rounded-sm border border-dashed border-accent-600 bg-accent/10 px-2 py-1 text-xs text-navy-900">
      <strong>PLACEHOLDER (dev only):</strong> {children}
    </p>
  )
}
