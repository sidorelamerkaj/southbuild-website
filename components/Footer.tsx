'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedPath } from '@/lib/utils'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const { t, language } = useLanguage()

  const footerLinks = {
    company: [
      { name: t.footer.aboutUs, href: '#about' },
      { name: t.nav.projects, href: '/projects' },
      { name: t.footer.privacyPolicy, href: '#' },
      { name: t.footer.cookiePolicy, href: '#' },
    ],
    services: [
      { name: t.services.investment.title, href: '/services/investment-development' },
      { name: t.services.construction.title, href: '/services/construction-services' },
      { name: t.services.projectManagement.title, href: '/services/project-management' },
      { name: t.services.consulting.title, href: '/services/consulting' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-navy-950 to-navy-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={getLocalizedPath('/', language)} className="inline-block mb-3">
                <Image
                  src="/logo.png"
                  alt="SouthBuild Invest"
                  width={300}
                  height={100}
                  className="h-20 md:h-24 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              {/* Slogan */}
              <p className="text-gray-400 font-semibold text-sm mb-6 italic relative inline-block">
                {t.footer.slogan}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent -mb-2"></span>
              </p>
              {/* Social Links */}
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gradient-to-br from-navy-800/50 to-navy-800/30 hover:from-gold-500 hover:to-gold-600 hover:text-navy-900 rounded-lg flex items-center justify-center transition-all duration-300 border border-gold-500/20 hover:border-gold-500"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t.footer.company}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={getLocalizedPath(link.href, language)}
                      className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t.footer.services}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={getLocalizedPath(link.href, language)}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold-500 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t.footer.contact}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></span>
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-500/20 to-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-gray-300">+355 69 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-500/20 to-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-gray-300 break-all">info@southbuildinvest.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-500/20 to-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-gray-300">{t.common.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-gold-500 font-semibold">SouthBuild Invest</span>. {t.footer.rights}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{t.footer.builtWith}</span>
              <span className="text-gold-500">{t.footer.excellence}</span>
              <span>{t.footer.and}</span>
              <span className="text-gold-500">{t.footer.innovation}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

