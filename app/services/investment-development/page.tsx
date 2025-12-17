import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'

const serviceData = {
  title: 'Investment & Development',
  description: 'Real estate investments, residential/commercial/tourist developments, land feasibility, joint ventures.',
  longDescription: `Our Investment & Development services are designed to help you make informed decisions and maximize returns on your real estate investments. We specialize in identifying high-potential opportunities across Albania, from prime residential developments to strategic commercial projects and tourist developments.

With our comprehensive approach, we handle everything from initial land feasibility studies to joint venture partnerships. Our team combines market expertise with financial acumen to deliver projects that create long-term value for investors and communities alike.`,
  image: '/investment.jpg',
  iconName: 'TrendingUp' as const,
  features: [
    'Real estate investment analysis',
    'Residential development projects',
    'Commercial development opportunities',
    'Tourist development planning',
    'Land feasibility studies',
    'Joint venture partnerships',
    'Market research and analysis',
    'Investment portfolio management',
  ],
  benefits: [
    'Expert market analysis to identify high-return opportunities across Albania',
    'Comprehensive feasibility studies ensuring project viability and profitability',
    'Strategic partnerships and joint ventures to maximize investment potential',
    'End-to-end development support from concept to completion',
  ],
}

export default function InvestmentDevelopmentPage() {
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

