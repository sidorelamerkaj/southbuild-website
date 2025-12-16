import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}

