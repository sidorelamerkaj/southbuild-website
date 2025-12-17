import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'

const serviceData = {
  title: 'Consulting',
  description: 'Market analysis, feasibility studies, urban planning, permits assistance.',
  longDescription: `Our Consulting services provide expert guidance to help you make informed decisions about your real estate and development projects. We offer comprehensive market analysis, detailed feasibility studies, and strategic planning support.

Our team of experienced consultants works closely with clients to navigate complex regulatory requirements, obtain necessary permits, and develop effective urban planning strategies. We combine local market knowledge with international best practices to deliver actionable insights.`,
  image: '/consulting.jpg',
  iconName: 'FileText' as const,
  features: [
    'Market analysis and research',
    'Feasibility studies',
    'Urban planning consultation',
    'Permits and regulatory assistance',
    'Strategic planning',
    'Risk assessment',
    'Financial analysis',
    'Due diligence support',
  ],
  benefits: [
    'Expert market insights helping you make informed investment decisions',
    'Comprehensive feasibility studies ensuring project viability',
    'Regulatory expertise streamlining permits and approvals',
    'Strategic planning support for optimal project outcomes',
  ],
}

export default function ConsultingPage() {
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

