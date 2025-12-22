'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const contactInfoKeys = ['phone', 'email', 'address'] as const
const contactIcons = [Phone, Mail, MapPin]
const contactLinks = [
  'tel:+355XXXXXXXXX',
  'mailto:info@southbuildinvest.com',
  '#',
]

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactContent = [
    '+355 XX XXX XXXX',
    'info@southbuildinvest.com',
    t.common.location,
  ]

  const contactInfo = contactInfoKeys.map((key, index) => ({
    icon: contactIcons[index],
    title: t.contact.info[key],
    content: contactContent[index],
    link: contactLinks[index],
  }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Web3Forms - Replace 'YOUR_ACCESS_KEY' with your actual access key
      // Get your free access key at https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY',
          subject: 'New Contact Form Submission - SouthBuild Invest',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="relative py-16 bg-navy-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
                {t.contact.contactInformation.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                {t.contact.contactInformation.description}
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 p-6 bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gold-500/10 hover:border-gold-500/40 hover:bg-gradient-to-br hover:from-navy-800 hover:to-navy-900"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-gold-500/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <info.icon className="w-7 h-7 text-navy-900" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1.5 text-lg group-hover:text-gold-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-base group-hover:text-gray-200 transition-colors">
                      {info.content}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <Send className="w-5 h-5 text-gold-500" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gold-500/20 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
                {t.contact.form.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  {t.contact.form.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-navy-900/50 border border-gold-500/20 text-white rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder-gray-500 text-base hover:border-gold-500/40"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  {t.contact.form.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-navy-900/50 border border-gold-500/20 text-white rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder-gray-500 text-base hover:border-gold-500/40"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  {t.contact.form.phoneNumber}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-gold-500/20 text-white rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder-gray-500 text-base hover:border-gold-500/40"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-gold-500/20 text-white rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none placeholder-gray-500 text-base hover:border-gold-500/40"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                >
                  {t.contact.form.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                >
                  {t.contact.form.error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold py-5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl text-lg mt-2 relative overflow-hidden group ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10">
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </span>
                {!isSubmitting && (
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
