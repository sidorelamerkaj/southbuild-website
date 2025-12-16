'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Building2, Award, MapPin } from 'lucide-react'
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
            <span className="text-white">Building the Future</span>
            <br />
            <span className="text-gold-500">of Albania</span>
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
            <a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
