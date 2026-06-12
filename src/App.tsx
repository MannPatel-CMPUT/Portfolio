import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InteractiveCar from './components/InteractiveCar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  return (
    <div className="min-h-screen bg-background text-f1-white">
      <Navbar onNavigate={scrollToSection} />

      <Hero
        onViewProjects={() => scrollToSection('projects')}
        onDownloadResume={() => {
          window.open('/resume.pdf', '_blank')
        }}
      />

      <InteractiveCar onNavigate={scrollToSection} />

      <About />
      <Projects />
      <Skills />
      <Timeline />

      <Contact />

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-grey tracking-wider">
            © {new Date().getFullYear()} Mann Patel — Engineered with precision.
          </p>
          <p className="font-mono text-[10px] text-grey/50 tracking-widest uppercase">
            F1-Inspired · No Official Branding
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
