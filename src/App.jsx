import Hero from './components/Hero'
import About from './components/About'
import Links from './components/Links'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Hero />
      <About />
      <Links />
      <Projects />
      <Footer />
    </main>
  )
}
