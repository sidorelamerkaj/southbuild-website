'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Building2, Award, MapPin, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/si-hero-bg.png"
          alt="SouthBuild Invest"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/85 to-navy-900/90"></div>
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
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

      {/* Pulsing Gold Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Shimmer Wave Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
        style={{
          transform: 'skewX(-25deg)',
          width: '60%',
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

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(195, 167, 106, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(195, 167, 106, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0 0', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-gold-500/20"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '4px' : '0',
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Corner Accents */}
      <div className="absolute inset-0 z-0">
        {[
          { top: '2%', left: '2%', border: 'border-t border-l' },
          { top: '2%', right: '2%', border: 'border-t border-r' },
          { bottom: '2%', left: '2%', border: 'border-b border-l' },
          { bottom: '2%', right: '2%', border: 'border-b border-r' },
        ].map((corner, i) => (
          <motion.div
            key={i}
            className={`absolute w-24 h-24 ${corner.border} border-gold-500/40`}
            style={{
              top: corner.top,
              left: corner.left,
              right: corner.right,
              bottom: corner.bottom,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 0px rgba(195, 167, 106, 0)',
                '0 0 30px rgba(195, 167, 106, 0.4)',
                '0 0 0px rgba(195, 167, 106, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-gold-500/10 backdrop-blur-sm rounded-full border border-gold-500/30"
          >
            <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
              Albanian Investment & Development
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <motion.span
              className="text-white block"
              animate={{
                textShadow: [
                  '0 0 30px rgba(255, 255, 255, 0.2)',
                  '0 0 60px rgba(195, 167, 106, 0.4)',
                  '0 0 30px rgba(255, 255, 255, 0.2)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Building the Future
            </motion.span>
            <motion.span
              className="text-gold-500 block -mt-1"
              animate={{
                textShadow: [
                  '0 0 30px rgba(195, 167, 106, 0.4)',
                  '0 0 80px rgba(195, 167, 106, 0.7)',
                  '0 0 30px rgba(195, 167, 106, 0.4)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              of Albania
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            High-value, sustainable projects across Albania. Real estate development,
            construction, strategic investments, and project management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="/contact"
              className="group inline-flex items-center px-10 py-5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 30px rgba(195, 167, 106, 0.3)',
                  '0 10px 50px rgba(195, 167, 106, 0.5)',
                  '0 10px 30px rgba(195, 167, 106, 0.3)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>
            <Link
              href="/projects"
              className="inline-flex items-center px-10 py-5 bg-transparent hover:bg-gold-500/10 text-white font-bold text-lg rounded-lg border-2 border-gold-500/50 hover:border-gold-500 transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Building2, value: '500+', label: 'Projects' },
              { icon: TrendingUp, value: '$2B+', label: 'Investments' },
              { icon: Award, value: '25+', label: 'Years' },
              { icon: MapPin, value: 'Nationwide', label: 'Presence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-navy-800/40 backdrop-blur-md rounded-xl p-6 border border-gold-500/20 hover:bg-navy-800/60 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-gold-500 mb-3 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => {
          const aboutSection = document.querySelector('#about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center group-hover:border-gold-500 transition-colors"
            animate={{
              boxShadow: [
                '0 0 0px rgba(195, 167, 106, 0)',
                '0 0 20px rgba(195, 167, 106, 0.5)',
                '0 0 0px rgba(195, 167, 106, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 group-hover:bg-gold-400"
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              y: [0, 5, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gold-500/70 group-hover:text-gold-400 transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.button>
    </section>
  )
}
