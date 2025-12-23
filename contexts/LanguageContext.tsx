'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import enTranslations from '@/translations/en.json'
import sqTranslations from '@/translations/sq.json'

export type Language = 'en' | 'sq'

type Translations = typeof enTranslations

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: enTranslations,
  sq: sqTranslations,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>('en')

  // Extract locale from URL path
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const localeFromPath = pathSegments[0] as Language
    
    if (localeFromPath === 'en' || localeFromPath === 'sq') {
      if (language !== localeFromPath) {
        setLanguageState(localeFromPath)
        document.documentElement.lang = localeFromPath
        localStorage.setItem('language', localeFromPath)
      }
    } else if (pathname !== '/') {
      // If no locale in path and not root, redirect to /en
      router.replace(`/en${pathname}`)
    }
  }, [pathname, router, language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    
    // Update URL with new locale
    const pathSegments = pathname.split('/').filter(Boolean)
    const currentLocale = pathSegments[0]
    
    // Remove old locale and add new one
    if (currentLocale === 'en' || currentLocale === 'sq') {
      pathSegments[0] = lang
    } else {
      pathSegments.unshift(lang)
    }
    
    const newPath = '/' + pathSegments.join('/')
    router.push(newPath)
  }

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

