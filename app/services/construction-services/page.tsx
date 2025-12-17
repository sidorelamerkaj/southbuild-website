import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'

const serviceData = {
  title: 'Construction Services',
  description: 'Residential buildings, villas, commercial spaces, renovations, full project execution.',
  longDescription: `Our Construction Services division delivers excellence in every project, from luxury residential buildings and villas to state-of-the-art commercial spaces. We combine traditional craftsmanship with modern construction techniques to create structures that stand the test of time.

Whether you need a complete new build or a comprehensive renovation, our experienced team manages every aspect of the construction process. We ensure quality, efficiency, and adherence to the highest industry standards throughout the entire project lifecycle.`,
  image: '/construction.jpg',
  iconName: 'Building2' as const,
  features: [
    'Residential building construction',
    'Luxury villa development',
    'Commercial space construction',
    'Renovation and remodeling',
    'Full project execution',
    'Quality assurance and control',
    'Timeline and budget management',
    'Sustainable building practices',
  ],
  benefits: [
    'Expert craftsmanship combined with modern construction techniques',
    'Comprehensive project management ensuring on-time and on-budget delivery',
    'Quality assurance at every stage of construction',
    'Sustainable and environmentally conscious building practices',
  ],
}

export default function ConstructionServicesPage() {
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

