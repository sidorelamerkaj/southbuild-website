'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Prevent horizontal scroll
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
    }
    setIsMobileMenuOpen(false)
    
    if (href.startsWith('#')) {
      // If we're on a different page, navigate to home first with hash
      if (pathname !== '/') {
        router.push(`/${href}`)
      } else {
        // If we're on home page, scroll to section
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 50)
      }
    } else {
      // External link or projects page
      router.push(href)
    }
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-navy-900 transition-all duration-300 ${
        isScrolled
          ? 'shadow-xl border-b border-gold-500/20 backdrop-blur-md bg-navy-900/98'
          : 'border-b border-transparent'
      }`}
    >
      {/* Subtle decorative line at top */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="SouthBuild Invest"
                  width={240}
                  height={80}
                  className="h-16 md:h-20 w-auto transition-opacity group-hover:opacity-90"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href && !item.href.startsWith('#')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 group ${
                    isActive
                      ? 'text-gold-500'
                      : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  {/* Background on hover */}
                  <span className="absolute inset-0 bg-gold-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              )
            })}
          </nav>

          {/* Phone Contact - Right Side */}
          <div className="hidden lg:flex items-center z-10">
            <a
              href="tel:+355XXXXXXXXX"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-navy-800/40 hover:bg-gold-500/10 border border-gold-500/20 hover:border-gold-500/40 text-gray-300 hover:text-gold-400 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-semibold">+355 XX XX XX XXX</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2.5 rounded-lg bg-navy-800/50 hover:bg-gold-500/10 border border-gold-500/20 text-gray-300 hover:text-gold-500 transition-all duration-300 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-t border-gold-500/20 shadow-lg w-full overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden w-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="block text-gray-300 hover:text-gold-500 font-medium py-3 px-2 rounded-lg hover:bg-navy-800/50 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gold-500/20">
                <a
                  href="tel:+355XXXXXXXXX"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold-400 py-3 px-4 rounded-xl hover:bg-navy-800/50 border border-gold-500/10 hover:border-gold-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="font-medium">+355 XX XX XX XXX</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
