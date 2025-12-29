'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function GoogleTags() {
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    // Check consent on mount
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        setConsentGiven(true)
      }

      // Listen for consent changes
      const handleStorageChange = () => {
        const newConsent = localStorage.getItem('cookie-consent')
        if (newConsent === 'accepted' && !consentGiven) {
          setConsentGiven(true)
        }
      }

      window.addEventListener('storage', handleStorageChange)
      // Also listen for custom event from CookieConsent
      window.addEventListener('cookieConsentAccepted', handleStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('cookieConsentAccepted', handleStorageChange)
      }
    }
  }, [consentGiven])

  if (!consentGiven) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MPV4LGQ9');
          `,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Analytics (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NJCNQ2ZVEX"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NJCNQ2ZVEX');
          `,
        }}
      />
    </>
  )
}

