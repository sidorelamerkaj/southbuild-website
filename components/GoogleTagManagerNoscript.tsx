'use client'

import { useEffect, useState } from 'react'

export default function GoogleTagManagerNoscript() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Check consent on mount
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent')
      setShouldRender(consent === 'accepted')

      // Listen for consent changes
      const handleStorageChange = () => {
        const newConsent = localStorage.getItem('cookie-consent')
        setShouldRender(newConsent === 'accepted')
      }

      window.addEventListener('storage', handleStorageChange)
      // Also listen for custom event from CookieConsent
      window.addEventListener('cookieConsentAccepted', handleStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('cookieConsentAccepted', handleStorageChange)
      }
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MPV4LGQ9"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

