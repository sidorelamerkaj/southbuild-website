'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set target date (3 months from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 3)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

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

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-gold-500" />
                <span className="text-gold-400 font-semibold text-lg">Launching In</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-gold-500/40 transition-all duration-300">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-500 mb-2 font-display">
                        {String(unit.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                        {unit.label}
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gold-500/5 rounded-2xl blur-xl -z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email subscription form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-gold-500" />
                  Get Notified
                </h3>
                <p className="text-gray-400 mb-6">
                  Be the first to know when we launch. Enter your email below.
                </p>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-500" />
                    <span className="text-gold-400 font-semibold">Thanks! We'll notify you soon.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 bg-navy-900/50 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                    >
                      Notify Me
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Decorative lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
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

