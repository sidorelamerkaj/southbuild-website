import { Language } from '@/contexts/LanguageContext'

export function getLocalizedPath(path: string, locale: Language): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // If path already has a locale, replace it
  if (cleanPath.startsWith('en/') || cleanPath.startsWith('sq/')) {
    const pathWithoutLocale = cleanPath.split('/').slice(1).join('/')
    return `/${locale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`
  }
  
  // Add locale prefix
  return `/${locale}${cleanPath ? '/' + cleanPath : ''}`
}

export function removeLocaleFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  if (segments[0] === 'en' || segments[0] === 'sq') {
    return '/' + segments.slice(1).join('/')
  }
  return path
}

