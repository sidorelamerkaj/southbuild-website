'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedPath } from '@/lib/utils'

interface LocalizedLinkProps extends React.ComponentProps<typeof Link> {
  href: string
  children: React.ReactNode
}

export default function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage()
  const localizedHref = getLocalizedPath(href, language)
  
  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}

