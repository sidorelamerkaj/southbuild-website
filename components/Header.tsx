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
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        backgroundColor: '#020811',
        transition: 'box-shadow 0.3s ease, border-bottom 0.3s ease',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(195, 167, 106, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="SouthBuild Invest"
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-gray-300 hover:text-gold-500 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+355XXXXXXXXX"
              className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+355 XX XX XX XXX</span>
            </a>
            <a
              href="mailto:info@southbuild.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">info@southbuild.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-gold-500 transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
              <div className="pt-4 border-t border-gold-500/20 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 py-2 px-2 rounded-lg hover:bg-navy-800/50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:info@southbuild.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 py-2 px-2 rounded-lg hover:bg-navy-800/50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@southbuild.com</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
