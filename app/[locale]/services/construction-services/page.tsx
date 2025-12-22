'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ConstructionServicesPage() {
  const { t } = useLanguage()
  
  const serviceData = {
    title: t.services.construction.title,
    description: t.services.construction.description,
    longDescription: t.services.construction.longDescription,
    image: '/construction.jpg',
    iconName: 'Building2' as const,
    features: t.services.construction.features,
    benefits: t.services.construction.benefits,
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

