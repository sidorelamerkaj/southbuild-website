'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Investment & Development',
    description: 'Real estate investments, residential/commercial/tourist developments, land feasibility, joint ventures.',
    image: '/SouthBuild_Invest-3.png',
    color: 'from-gold-400 to-gold-500',
  },
  {
    title: 'Construction Services',
    description: 'Residential buildings, villas, commercial spaces, renovations, full project execution.',
    image: '/SouthBuild_Invest-3.png',
    color: 'from-gold-500 to-gold-600',
  },
  {
    title: 'Project Management',
    description: 'Budgeting, cost control, planning, supervision.',
    image: '/SouthBuild_Invest-3.png',
    color: 'from-gold-600 to-gold-700',
  },
  {
    title: 'Consulting',
    description: 'Market analysis, feasibility studies, urban planning, permits assistance.',
    image: '/SouthBuild_Invest-3.png',
    color: 'from-gold-400 to-gold-700',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for investment, development, construction, and
            project management across Albania
          </p>
        </motion.div>

        {/* Services Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>
                  
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {category.description}
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-gold-500 font-semibold text-sm group-hover:text-gold-400 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
