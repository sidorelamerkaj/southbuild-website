'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Building2, TrendingUp, ClipboardCheck, FileText } from 'lucide-react'

interface ServiceDetailProps {
  service: {
    title: string
    description: string
    longDescription: string
    image: string
    iconName: 'TrendingUp' | 'Building2' | 'ClipboardCheck' | 'FileText'
    features: string[]
    benefits: string[]
  }
}

const iconMap = {
  TrendingUp,
  Building2,
  ClipboardCheck,
  FileText,
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = iconMap[service.iconName]
  
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero Section */}
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
            <Link
              href="/#services"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>

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
                {IconComponent && (
                  <IconComponent className="w-10 h-10 text-navy-900 relative z-10" />
                )}
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
                  {service.title}
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              {service.description}
            </p>
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
              {/* Styled Image - Full width matching text area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group mb-8"
              >
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                  {/* Gold frame effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/30 group-hover:border-gold-500/60 transition-all duration-300 z-10"></div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  
                  {/* Blue and Gold shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-500/40 via-gold-500/30 to-navy-500/40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-gold-500/20"></div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
                  
                  {/* Gold corner accents */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold-500/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold-500/50 rounded-br-2xl"></div>
                </div>
                
                {/* Floating shadow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gold-500/10 rounded-2xl blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Overview
              </h2>
              
              {/* Full Description Below */}
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                {service.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
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

            {/* Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl border border-gold-500/10"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Interested in this Service?
                </h3>
                <p className="text-navy-900/80 mb-6">
                  Contact us to learn more about how we can help with your project.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Our Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                <div className="space-y-3">
                  <Link
                    href="/services/investment-development"
                    className="block text-gray-300 hover:text-gold-500 transition-colors py-2"
                  >
                    Investment & Development
                  </Link>
                  <Link
                    href="/services/construction-services"
                    className="block text-gray-300 hover:text-gold-500 transition-colors py-2"
                  >
                    Construction Services
                  </Link>
                  <Link
                    href="/services/project-management"
                    className="block text-gray-300 hover:text-gold-500 transition-colors py-2"
                  >
                    Project Management
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block text-gray-300 hover:text-gold-500 transition-colors py-2"
                  >
                    Consulting
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

