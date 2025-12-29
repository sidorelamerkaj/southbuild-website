'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CookiePolicyPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-navy-900">
      <Header />
      
      {/* Banner Section */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="relative w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gold-500/40">
              <Cookie className="w-10 h-10 text-navy-900" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-white via-gold-100 to-white bg-clip-text text-transparent">
                {t.cookiePolicy.title}
              </span>
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            {t.cookiePolicy.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy-800/50 rounded-2xl p-8 md:p-12 border border-gold-500/20 space-y-8"
            >
              {t.cookiePolicy.sections.map((section: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gold-500 mb-4">
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3 text-gray-300 list-disc list-inside">
                      {section.content.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-8 border-t border-gold-500/20"
              >
                <p className="text-gray-400 text-sm">
                  {t.cookiePolicy.contact}{' '}
                  <a href="mailto:info@southbuildinvest.com" className="text-gold-500 hover:text-gold-400">
                    info@southbuildinvest.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

