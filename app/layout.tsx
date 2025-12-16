import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

