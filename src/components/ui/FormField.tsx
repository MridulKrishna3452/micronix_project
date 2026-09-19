import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

const control =
  'w-full rounded-md border bg-white px-3 text-[15px] text-ink placeholder:text-ink-subtle ' +
  'focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20 ' +
  'disabled:bg-surface-alt'

function border(error?: string) {
  return error ? 'border-danger' : 'border-line-strong'
}

interface BaseProps {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
}

function Wrapper({ id, label, error, hint, required, className, children }: BaseProps & { children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-danger"> *</span> : <span className="text-ink-subtle font-normal"> (optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-ink-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

function a11y(id: string, error?: string, hint?: string) {
  return {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
  }
}

export function TextField({ id, label, error, hint, required, className, ...rest }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <input id={id} name={id} required={required} className={`${control} ${border(error)} h-11`} {...a11y(id, error, hint)} {...rest} />
    </Wrapper>
  )
}

export function TextAreaField({ id, label, error, hint, required, className, ...rest }: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <textarea id={id} name={id} required={required} rows={5} className={`${control} ${border(error)} py-2.5`} {...a11y(id, error, hint)} {...rest} />
    </Wrapper>
  )
}

export function SelectField({
  id,
  label,
  error,
  hint,
  required,
  className,
  children,
  ...rest
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <select id={id} name={id} required={required} className={`${control} ${border(error)} h-11`} {...a11y(id, error, hint)} {...rest}>
        {children}
      </select>
    </Wrapper>
  )
}
