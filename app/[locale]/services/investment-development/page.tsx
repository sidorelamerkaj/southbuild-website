'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'
import { useLanguage } from '@/contexts/LanguageContext'

export default function InvestmentDevelopmentPage() {
  const { t } = useLanguage()
  
  const serviceData = {
    title: t.services.investment.title,
    description: t.services.investment.description,
    longDescription: t.services.investment.longDescription,
    image: '/investment.jpg',
    iconName: 'TrendingUp' as const,
    features: t.services.investment.features,
    benefits: t.services.investment.benefits,
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

