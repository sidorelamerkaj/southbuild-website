'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ConsultingPage() {
  const { t } = useLanguage()
  
  const serviceData = {
    title: t.services.consulting.title,
    description: t.services.consulting.description,
    longDescription: t.services.consulting.longDescription,
    image: '/consulting.jpg',
    iconName: 'FileText' as const,
    features: t.services.consulting.features,
    benefits: t.services.consulting.benefits,
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28">
        <ServiceDetail service={serviceData} />
      </div>
      <Footer />
    </main>
  )
}

