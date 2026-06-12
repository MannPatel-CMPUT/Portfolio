import { motion } from 'framer-motion'
import DriverReveal from './DriverReveal'

interface HeroProps {
  onViewProjects: () => void
  onDownloadResume: () => void
}

export default function Hero({ onViewProjects, onDownloadResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden carbon-texture"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-carbon" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-papaya/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-soft-orange/5 blur-[100px] rounded-full" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-papaya animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-grey uppercase">
                Systems Online
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-f1-white leading-[0.95]">
              MANN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya to-soft-orange">
                PATEL
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-grey max-w-lg leading-relaxed">
              Software Engineer building high-performance digital systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onViewProjects}
                className="px-6 py-3 rounded-full bg-papaya text-background font-semibold text-sm tracking-wide hover:bg-soft-orange transition-colors duration-200 glow-papaya"
              >
                View Projects
              </button>
              <button
                onClick={onDownloadResume}
                className="px-6 py-3 rounded-full border border-white/20 text-f1-white font-semibold text-sm tracking-wide hover:border-papaya hover:text-papaya transition-colors duration-200"
              >
                Download Resume
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-mono text-2xl font-bold text-f1-white">CS</p>
                <p className="text-xs text-grey mt-1">University of Alberta</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-mono text-2xl font-bold text-f1-white">AI</p>
                <p className="text-xs text-grey mt-1">Systems & Backend</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-mono text-2xl font-bold text-f1-white">IR</p>
                <p className="text-xs text-grey mt-1">Information Retrieval</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <DriverReveal
              portraitImage="/images/driver-face-reveal.png"
              suitedImage="/images/driver-suited.png"
              helmetImage="/images/driver-helmet.png"
              helmetTop="3%"
              helmetWidth="68%"
              alt="Mann Patel driver reveal"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
