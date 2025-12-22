import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCatalogue from '@/components/ProjectCatalogue'

export default function LuxuryResidentialComplexPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28">
        <ProjectCatalogue />
      </div>
      <Footer />
    </main>
  )
}

