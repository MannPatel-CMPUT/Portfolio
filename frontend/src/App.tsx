import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import LightsOut from './components/LightsOut'
import PapayaCursor from './components/PapayaCursor'
import RaceHUD from './components/RaceHUD'

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('mp-intro-seen') === '1'
  })

  useEffect(() => {
    if (introDone) sessionStorage.setItem('mp-intro-seen', '1')
  }, [introDone])

  return (
    <div className="min-h-screen bg-background text-f1-white relative">
      {!introDone && <LightsOut onDone={() => setIntroDone(true)} />}

      <PapayaCursor />

      <Navbar onNavigate={scrollToSection} />

      <Hero
        onViewProjects={() => scrollToSection('projects')}
        onDownloadResume={() => {
          window.open('/resume.pdf', '_blank')
        }}
      />

      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />

      <RaceHUD />

      <footer className="relative border-t border-papaya/15 py-8 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-0.5 kerb-papaya opacity-50" />
        <div className="mx-auto max-w-[1280px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <div className="flex items-center gap-3">
            <span className="relative inline-block w-5 h-5">
              <span className="absolute inset-0 rounded-full bg-papaya" />
              <span className="absolute inset-[3px] rounded-full bg-background" />
              <span className="absolute inset-[6px] rounded-full bg-papaya" />
            </span>
            <p className="font-mono text-[11px] text-grey tracking-wider">
              © {new Date().getFullYear()} Mann Patel · Engineered with precision.
            </p>
          </div>
          <p className="font-mono text-[10px] text-grey/60 tracking-[0.25em] uppercase">
            F1-Inspired · Independent Work · No Official Branding
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
