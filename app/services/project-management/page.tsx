import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceDetail from '@/components/ServiceDetail'

const serviceData = {
  title: 'Project Management',
  description: 'Budgeting, cost control, planning, supervision.',
  longDescription: `Our Project Management services ensure your construction and development projects are delivered successfully, on time, and within budget. We provide comprehensive oversight and coordination throughout the entire project lifecycle.

From initial planning and budgeting to final delivery, our experienced project managers work closely with all stakeholders to ensure seamless execution. We implement rigorous cost control measures and maintain detailed supervision to keep your project on track.`,
  image: '/project.jpg',
  iconName: 'ClipboardCheck' as const,
  features: [
    'Comprehensive project planning',
    'Budget development and management',
    'Cost control and monitoring',
    'Timeline scheduling and tracking',
    'Quality supervision',
    'Stakeholder coordination',
    'Risk management',
    'Progress reporting',
  ],
  benefits: [
    'Professional project oversight ensuring successful delivery',
    'Rigorous budget and cost control maximizing value',
    'Detailed planning and scheduling preventing delays',
    'Comprehensive supervision maintaining quality standards',
  ],
}

export default function ProjectManagementPage() {
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

