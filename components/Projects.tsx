'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Luxury Residential Complex',
    location: 'Southern Albania',
    year: '2024',
    description:
      'Modern residential complex featuring sustainable design and premium amenities in the heart of southern Albania.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Residential',
  },
  {
    title: 'Commercial Business Center',
    location: 'Tirana',
    year: '2023',
    description:
      'State-of-the-art commercial center with cutting-edge facilities and design, setting new standards for business spaces.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Commercial',
  },
  {
    title: 'Tourist Development',
    location: 'Albanian Riviera',
    year: '2024',
    description:
      'Innovative tourist development combining luxury accommodations with sustainable practices along the beautiful coastline.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Tourist',
  },
  {
    title: 'Mixed-Use Development',
    location: 'Southern Albania',
    year: '2024',
    description:
      'Comprehensive mixed-use project combining residential, retail, and office spaces to create vibrant communities.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Mixed-Use',
  },
  {
    title: 'Luxury Villas',
    location: 'Coastal Region',
    year: '2024',
    description:
      'Exclusive luxury villas with panoramic views, premium finishes, and sustainable design principles.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Residential',
  },
  {
    title: 'Urban Regeneration Project',
    location: 'Tirana',
    year: '2023',
    description:
      'Comprehensive urban regeneration project revitalizing neighborhoods with modern infrastructure and green spaces.',
    image: '/SouthBuild_Invest-3.png',
    category: 'Commercial',
  },
]

export default function Projects() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our portfolio of exceptional construction and development
            projects
          </p>
        </motion.div>

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
                  href={project.title === 'Luxury Residential Complex' ? '/projects/luxury-residential-complex' : '#'}
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

