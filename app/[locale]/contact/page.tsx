'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-navy-900">
      <Header />
      
      {/* Banner Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Animated gold decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Animated gold particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(195, 167, 106, 0.1) 50%, transparent 70%),
                              linear-gradient(-45deg, transparent 30%, rgba(195, 167, 106, 0.1) 50%, transparent 70%)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Enhanced gold accent lines with animation */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
          style={{
            transform: 'skewX(-20deg)',
            width: '50%',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <motion.div
                className="relative w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gold-500/40"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(195, 167, 106, 0.4)',
                    '0 0 40px rgba(195, 167, 106, 0.6)',
                    '0 0 20px rgba(195, 167, 106, 0.4)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <MapPin className="w-10 h-10 text-navy-900 relative z-10" />
                {/* Pulsing glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold-400"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                <span className="bg-gradient-to-r from-white via-gold-100 to-white bg-clip-text text-transparent">
                  {t.contact.title}
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="pt-16">
        <Contact />
      </div>

      {/* Map Section */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 via-gold-500/30 to-gold-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-navy-800/20 backdrop-blur-sm">
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-500/50 rounded-tl-2xl z-10"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-500/50 rounded-tr-2xl z-10"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-500/50 rounded-bl-2xl z-10"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-500/50 rounded-br-2xl z-10"></div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734147816!2d19.818451315287!3d41.32750697927059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310370%3A0x5a6b5b5b5b5b5b5b!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full relative z-0"
                title="Tirana, Albania Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

