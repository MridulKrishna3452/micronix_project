import type { ReactNode } from 'react'

interface Props {
  /** Small uppercase label above the heading. */
  eyebrow?: string
  title: string
  description?: string
  /** Rendered to the right on desktop, e.g. a "View all" link. */
  action?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  /** id for aria-labelledby on the parent section. */
  id?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, action, align = 'left', as: Tag = 'h2', id, className }: Props) {
  const center = align === 'center'
  return (
    <div
      className={[
        'mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between',
        center ? 'text-center md:flex-col md:items-center' : '',
        className ?? '',
      ].join(' ')}
    >
      <div className={center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-700">{eyebrow}</p>}
        <Tag id={id} className={Tag === 'h1' ? 'text-3xl font-bold tracking-tight md:text-4xl' : 'text-2xl font-bold tracking-tight md:text-3xl'}>
          {title}
        </Tag>
        {description && <p className="prose-muted mt-3">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
