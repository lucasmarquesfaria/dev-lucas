import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Projects />
      </div>
    </main>
  )
}

