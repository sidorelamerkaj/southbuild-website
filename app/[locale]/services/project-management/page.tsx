'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectManagementPage() {
  const { t } = useLanguage()
  
  const serviceData = {
    title: t.services.projectManagement.title,
    description: t.services.projectManagement.description,
    longDescription: t.services.projectManagement.longDescription,
    image: '/project.jpg',
    iconName: 'ClipboardCheck' as const,
    features: t.services.projectManagement.features,
    benefits: t.services.projectManagement.benefits,
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

