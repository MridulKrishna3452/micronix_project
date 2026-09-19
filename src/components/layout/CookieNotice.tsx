import { useState } from 'react'
import { company } from '../../data/company'
import { Button } from '../ui/Button'

const KEY = 'micronix-cookie-notice'

/**
 * Compact, non-blocking cookie notice.
 * The site sets no tracking cookies by default, so this renders nothing
 * unless `company.usesTrackingCookies` is switched on (e.g. after adding
 * Google Analytics). When shown it sits in the bottom corner and never
 * covers the header, hero or primary CTAs.
 */
export function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    if (!company.usesTrackingCookies) return false
    try {
      return !localStorage.getItem(KEY)
    } catch {
      return true
    }
  })

  function choose(value: 'accepted' | 'declined') {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-50 rounded-lg border border-line bg-white p-4 shadow-lg sm:left-auto sm:max-w-sm"
    >
      <p className="text-sm text-ink-muted">
        We use cookies to understand site traffic. You can decline and the site will work exactly the same.
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" variant="secondary" onClick={() => choose('declined')}>
          Decline
        </Button>
        <Button size="sm" onClick={() => choose('accepted')}>
          Accept
        </Button>
      </div>
    </div>
  )
}
