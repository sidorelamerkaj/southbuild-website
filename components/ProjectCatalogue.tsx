'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Calendar,
  Building2,
  Home,
  Users,
  Car,
  TreePine,
  Award,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react'

const projectData = {
  title: 'Luxury Residential Complex',
  location: 'Albania',
  year: '2026',
  category: 'Residential',
  status: 'In Development',
  description:
    'A modern residential complex featuring sustainable design and premium amenities in the heart of southern Albania. This exceptional development combines luxury living with environmental consciousness, offering residents an unparalleled lifestyle experience.',
  longDescription: `The Luxury Residential Complex represents a new standard in residential development for Southern Albania. This meticulously planned community features state-of-the-art architecture, sustainable building practices, and world-class amenities designed to enhance the quality of life for all residents.

Located in a prime area with easy access to major transportation routes, shopping centers, and educational institutions, this development offers the perfect balance of urban convenience and peaceful living. Each unit is thoughtfully designed to maximize natural light, ventilation, and energy efficiency.`,
  features: [
    'Sustainable design with LEED certification',
    'Premium finishes and high-quality materials',
    'Smart home technology integration',
    'Energy-efficient systems',
    'Modern architectural design',
    'Premium landscaping and green spaces',
    '24/7 security and concierge services',
    'Underground parking facilities',
    'Recreational facilities and fitness center',
    'Community spaces and gathering areas',
  ],
  specifications: {
    units: '150+',
    bedrooms: '2-4',
    area: '85-180 sqm',
    floors: '8',
    parking: '200+',
    amenities: '15+',
  },
  highlights: [
    {
      icon: Building2,
      title: 'Modern Architecture',
      description: 'Contemporary design with clean lines and premium materials',
    },
    {
      icon: TreePine,
      title: 'Sustainable Living',
      description: 'LEED certified with eco-friendly building practices',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'High-end finishes and luxury amenities throughout',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Designed to foster connections and community spirit',
    },
  ],
  images: [
    '/SouthBuild_Invest-3.png',
    '/SouthBuild_Invest-3.png',
    '/SouthBuild_Invest-3.png',
    '/SouthBuild_Invest-3.png',
  ],
}

export default function ProjectCatalogue() {
  return (
    <div className="bg-navy-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/si-hero-bg.png"
            alt={projectData.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>

            <div className="inline-block mb-4 px-4 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full border border-gold-500/30">
              <span className="text-sm font-semibold text-gold-400">
                {projectData.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {projectData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span className="text-lg">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-500" />
                <span className="text-lg">{projectData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" />
                <span className="text-lg">{projectData.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>{projectData.description}</p>
                <p>{projectData.longDescription}</p>
              </div>
            </motion.section>

            {/* Image Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${projectData.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-navy-800/50 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gold-500/10">
                    <span className="text-gray-400">Total Units</span>
                    <span className="text-white font-semibold">{projectData.specifications.units}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gold-500/10">
                    <span className="text-gray-400">Bedrooms</span>
                    <span className="text-white font-semibold">{projectData.specifications.bedrooms}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gold-500/10">
                    <span className="text-gray-400">Unit Area</span>
                    <span className="text-white font-semibold">{projectData.specifications.area}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gold-500/10">
                    <span className="text-gray-400">Floors</span>
                    <span className="text-white font-semibold">{projectData.specifications.floors}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gold-500/10">
                    <span className="text-gray-400">Parking</span>
                    <span className="text-white font-semibold">{projectData.specifications.parking}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-400">Amenities</span>
                    <span className="text-white font-semibold">{projectData.specifications.amenities}</span>
                  </div>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Highlights</h3>
                <div className="space-y-6">
                  {projectData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="w-6 h-6 text-navy-900" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Interested in this Project?
                </h3>
                <p className="text-navy-900/80 mb-6">
                  Contact us to learn more about availability and investment opportunities.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Contact Us
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

