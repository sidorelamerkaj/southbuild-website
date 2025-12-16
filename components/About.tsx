'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lightbulb, Leaf, TrendingUp, Target, Eye, Building2 } from 'lucide-react'

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent, responsible, and ethical operations',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'High standards in every project delivered',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Modern solutions in construction and investment',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmentally aware development',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Long-term value for communities and partners',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-5 py-2 bg-gold-500/10 rounded-full border border-gold-500/30">
            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            SouthBuild Invest
          </h2>
        </motion.div>

        {/* Main Content: Overview Left, Mission/Vision Right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
          {/* Left: Company Overview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/30 to-transparent"></div>
            
            <div className="pl-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-1">
                    Company
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Overview
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  SouthBuild Invest is an Albanian investment and development company focused on creating
                  high-value, sustainable projects across Albania.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Starting with strong opportunities in the south and expanding nationwide, we operate in
                  real estate development, construction, strategic investments, and project management.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-gold-500/30 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-gold-500/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Mission */}
            <div className="relative">
              {/* Number indicator */}
              <div className="absolute -left-12 top-0 text-6xl font-bold text-gold-500/10">01</div>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-navy-900" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-2">
                    Our Purpose
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Mission
                  </h3>
                  <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-transparent mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    To invest, develop, and deliver high-quality projects that enhance
                    communities, create long-term value, and set new standards in Albania's
                    real estate and investment landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-500/20 to-transparent"></div>
            </div>

            {/* Vision */}
            <div className="relative">
              {/* Number indicator */}
              <div className="absolute -left-12 top-0 text-6xl font-bold text-gold-500/10">02</div>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <Eye className="w-6 h-6 text-navy-900" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-2">
                    Our Aspiration
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Vision
                  </h3>
                  <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-transparent mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    To become one of Albania's leading investment and development companies
                    by expanding our national presence, embracing innovation, and building
                    projects that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-5 py-2 bg-gold-500/10 rounded-full border border-gold-500/30">
              <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
                Our Foundation
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Core Values
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-navy-800/50 to-navy-800 rounded-2xl hover:from-navy-800 hover:to-navy-700 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-navy-900" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
