import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'
import GoogleTags from '@/components/GoogleTags'
import GoogleTagManagerNoscript from '@/components/GoogleTagManagerNoscript'

export const metadata: Metadata = {
  title: 'SouthBuild Invest - Premium Construction & Investment',
  description: 'Leading construction and investment company delivering excellence in every project',
  keywords: 'construction, investment, real estate, building, development',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sq' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <head>
        {/* Google Tag Manager and Google Analytics - loaded after cookie consent */}
        <GoogleTags />
      </head>
      <body>
        {/* Google Tag Manager (noscript) - loaded after cookie consent */}
        <GoogleTagManagerNoscript />
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}

