'use client'

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function HomeContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle navigation from other pages (like projects page)
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [searchParams])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <HomeContent />
      </Suspense>
    </main>
  )
}
