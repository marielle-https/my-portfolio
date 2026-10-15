import { useTheme } from './hooks/useTheme'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded bg-accent px-3 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero /><About /><Skills /><Projects /><Certificates /><Education /><Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
