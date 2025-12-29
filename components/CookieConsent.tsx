'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { getLocalizedPath } from '@/lib/utils'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // If consent was given, load both GTM and GA4 immediately
      if (consent === 'accepted') {
        loadGoogleTagManager()
        loadGoogleAnalytics()
      }
    }
  }, [])

  const loadGoogleTagManager = () => {
    if (typeof window === 'undefined') return
    
    // Check if already loaded
    if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
      return
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    
    // Load Google Tag Manager script
    // Initialize dataLayer first
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })
    
    // Create and inject GTM script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MPV4LGQ9'
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.head.appendChild(script)
    }

    // Add noscript fallback if not already present
    if (!document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]')) {
      const noscript = document.createElement('noscript')
      const iframe = document.createElement('iframe')
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MPV4LGQ9'
      iframe.height = '0'
      iframe.width = '0'
      iframe.style.display = 'none'
      iframe.style.visibility = 'hidden'
      noscript.appendChild(iframe)
      document.body.insertBefore(noscript, document.body.firstChild)
    }
  }

  const loadGoogleAnalytics = () => {
    if (typeof window === 'undefined') return
    
    // Check if already loaded
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-NJCNQ2ZVEX'
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-NJCNQ2ZVEX')
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentAccepted'))
    }
    // Also load scripts directly as fallback
    loadGoogleTagManager()
    loadGoogleAnalytics()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 border-2 border-gold-500/30 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
              </div>

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold-500 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Cookie Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Cookie className="w-8 h-8 text-navy-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t.cookieConsent.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">
                    {t.cookieConsent.description}{' '}
                    <Link
                      href={getLocalizedPath('/privacy-policy', language)}
                      className="text-gold-500 hover:text-gold-400 underline"
                    >
                      {t.cookieConsent.privacyPolicy}
                    </Link>
                    {' '}{t.cookieConsent.and}{' '}
                    <Link
                      href={getLocalizedPath('/cookie-policy', language)}
                      className="text-gold-500 hover:text-gold-400 underline"
                    >
                      {t.cookieConsent.cookiePolicy}
                    </Link>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/50 whitespace-nowrap"
                  >
                    {t.cookieConsent.accept}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 bg-navy-700/50 text-gray-300 font-semibold rounded-lg hover:bg-navy-700 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 whitespace-nowrap"
                  >
                    {t.cookieConsent.decline}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

