import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Driver', id: 'about', no: '01' },
  { label: 'Garage', id: 'projects', no: '02' },
  { label: 'Telemetry', id: 'skills', no: '03' },
  { label: 'Stints', id: 'timeline', no: '04' },
  { label: 'Pit Radio', id: 'contact', no: '05' },
]

interface NavbarProps { onNavigate: (sectionId: string) => void }

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const mm = String(d.getMinutes()).padStart(2, '0')
      const ss = String(d.getSeconds()).padStart(2, '0')
      const ms = String(d.getMilliseconds()).padStart(3, '0').slice(0, 2)
      setTime(`${String(d.getHours()).padStart(2, '0')}:${mm}:${ss}.${ms}`)
    }
    tick()
    const id = setInterval(tick, 73)
    return () => clearInterval(id)
  }, [])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    // wait for the mobile menu collapse animation to settle so the smooth scroll isn't cancelled
    setTimeout(() => onNavigate(id), 60)
  }

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-lg border-b border-papaya/15' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <button
          data-testid="nav-logo"
          onClick={() => handleNav('hero')}
          className="flex items-center gap-3 group"
        >
          <span className="relative inline-block w-8 h-8 lg:w-10 lg:h-10">
            <span className="absolute inset-0 rounded-full bg-papaya group-hover:glow-papaya transition-shadow" />
            <span className="absolute inset-[6px] rounded-full bg-background" />
            <span className="absolute inset-[11px] rounded-full bg-papaya" />
          </span>
          <span
            className="font-display font-black text-xl lg:text-3xl tracking-wider text-f1-white group-hover:text-papaya transition-colors leading-none"
          >
            MP<span className="text-papaya">·</span>81
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => handleNav(item.id)}
              className="group relative px-3 lg:px-4 py-2 font-display font-bold text-[13px] lg:text-base tracking-[0.2em] text-grey hover:text-papaya transition-colors uppercase"
            >
              <span className="text-papaya/60 mr-1.5 lg:mr-2 font-mono text-[10px] lg:text-xs">
                {item.no}
              </span>
              {item.label}
              <span className="absolute left-3 right-3 lg:left-4 lg:right-4 -bottom-0.5 h-[2px] bg-papaya scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div data-testid="nav-clock" className="font-mono text-[10px] lg:text-xs tracking-wider text-grey">
            <span className="text-papaya">●</span> LIVE · <span className="text-f1-white">{time}</span>
          </div>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-f1-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-f1-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-f1-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-papaya/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-testid={`nav-mobile-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className="font-mono text-sm tracking-wider text-grey hover:text-papaya transition-colors uppercase text-left py-3 border-b border-white/5"
                >
                  <span className="text-papaya mr-2">{item.no}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
