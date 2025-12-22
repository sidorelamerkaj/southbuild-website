import type { Metadata } from 'next'
import '../globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

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
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

