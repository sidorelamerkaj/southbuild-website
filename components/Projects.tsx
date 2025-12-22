'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Luxury Residential Complex',
    location: 'Albania',
    year: '2026',
    description:
      'Modern residential complex featuring sustainable design and premium amenities in the heart of southern Albania.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Residential',
  },
  {
    title: 'Commercial Business Center',
    location: 'Albania',
    year: '2026 - 2027',
    description:
      'State-of-the-art commercial center with cutting-edge facilities and design, setting new standards for business spaces.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Commercial',
  },
  {
    title: 'Tourist Development',
    location: 'Albania',
    year: '2026 - 2027',
    description:
      'Innovative tourist development combining luxury accommodations with sustainable practices along the beautiful coastline.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Tourist',
  },
  {
    title: 'Mixed-Use Development',
    location: 'Albania',
    year: '2026 - 2027',
    description:
      'Comprehensive mixed-use project combining residential, retail, and office spaces to create vibrant communities.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Mixed-Use',
  },
  {
    title: 'Luxury Villas',
    location: 'Albania',
    year: '2026 - 2027',
    description:
      'Exclusive luxury villas with panoramic views, premium finishes, and sustainable design principles.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Residential',
  },
  {
    title: 'Urban Regeneration Project',
    location: 'Albania',
    year: '2026 - 2027',
    description:
      'Comprehensive urban regeneration project revitalizing neighborhoods with modern infrastructure and green spaces.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Commercial',
  },
]

export default function Projects() {
  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-navy-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-500/10 hover:border-gold-500/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-500 text-navy-900 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* View More */}
                <a
                  href="/coming-soon"
                  className="inline-flex items-center text-gold-500 font-semibold hover:text-gold-400 transition-colors group/link"
                >
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

