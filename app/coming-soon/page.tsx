'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComingSoonPage() {

  return (
    <main className="min-h-screen bg-navy-900 overflow-hidden relative">
      <Header />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(195, 167, 106, 0.1) 50%, transparent 70%),
                              linear-gradient(-45deg, transparent 30%, rgba(195, 167, 106, 0.1) 50%, transparent 70%)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Sparkle icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Sparkles className="w-16 h-16 text-gold-500" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-400 rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display"
            >
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                Something Amazing
              </span>
              <br />
              <span className="text-white">Is Coming Soon</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              We're working hard to bring you an exceptional experience. Stay tuned for something extraordinary!
            </motion.p>

            {/* Decorative lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex items-center justify-center gap-4"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/30" />
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

