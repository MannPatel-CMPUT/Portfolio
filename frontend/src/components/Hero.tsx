import { useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  onViewProjects: () => void
  onDownloadResume: () => void
}

const TELEMETRY = [
  { pos: 'top-left', label: 'TEAM', value: 'MCL · CS', sub: 'U of Alberta' },
  { pos: 'top-right', label: 'SPEC', value: 'BACKEND', sub: 'AI / Systems' },
  { pos: 'bot-left', label: 'FOCUS', value: 'I·R', sub: 'Info Retrieval' },
  { pos: 'bot-right', label: 'STATUS', value: 'OPEN', sub: 'Intern 2026' },
] as const

const TICKER_ITEMS = [
  'PYTHON · FASTAPI · MONGODB',
  'AI / ML · INFORMATION RETRIEVAL',
  'STATUS · OPEN TO INTERNSHIPS 2026',
  'BASED · EDMONTON, AB',
  'STACK · REACT · TS · NODE',
  'CURRENTLY ENGINEERING · CAREER OS',
  'SYSTEMS · APIS · DATABASES',
]

const cornerPos: Record<string, string> = {
  'top-left': 'top-20 lg:top-24 left-2 md:left-8 text-left items-start',
  'top-right': 'top-20 lg:top-24 right-2 md:right-8 text-right items-end',
  'bot-left': 'bottom-28 md:bottom-32 left-2 md:left-8 text-left items-start',
  'bot-right': 'bottom-28 md:bottom-32 right-2 md:right-8 text-right items-end',
}

/**
 * Hero = centerpiece driver portrait.
 * The racer (transparent PNG) sits dead-center against an asphalt + spotlight stage.
 * On hover, the helmet cross-fades into the driver's portrait.
 * MANN PATEL display type is layered behind the racer; telemetry chips sit in the corners.
 */
export default function Hero({ onViewProjects, onDownloadResume }: HeroProps) {
  const [hover, setHover] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden asphalt-tex"
    >
      {/* pit-lane stripes baseline */}
      <div className="absolute inset-x-0 bottom-0 h-44 pitlane-stripes opacity-60" />
      {/* stage spotlight behind the racer */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] bg-papaya/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] bg-soft-orange/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-speed-blue/5 blur-[140px] rounded-full pointer-events-none" />

      {/* speed streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[14, 28, 46, 62, 78].map((top, i) => (
          <span
            key={top}
            className="absolute h-px bg-gradient-to-r from-transparent via-papaya/55 to-transparent speedline"
            style={{
              top: `${top}%`,
              left: 0,
              right: 0,
              width: '45%',
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${1.4 + (i % 2) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* corner kerb */}
      <div className="absolute top-20 left-0 h-1.5 w-32 kerb-papaya" />
      <div className="absolute bottom-44 right-0 h-1.5 w-32 kerb-papaya" />

      {/* corner telemetry chips */}
      {TELEMETRY.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
          className={`hidden md:flex absolute flex-col z-30 ${cornerPos[t.pos]} pointer-events-none`}
        >
          <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-papaya">
            <span className="w-1.5 h-1.5 rounded-full bg-papaya animate-pulse" />
            {t.label}
          </div>
          <div className="font-display font-black text-xl text-f1-white leading-none mt-1">
            {t.value}
          </div>
          <div className="font-mono text-[10px] text-grey mt-1 tracking-wider">{t.sub}</div>
        </motion.div>
      ))}

      {/* CENTER STAGE */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 py-24 lg:py-28 flex flex-col items-center">
        {/* race number chip + driver tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4 z-30"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-papaya">
            ◉ DRIVER · CARD 81
          </span>
          <span className="h-px w-12 bg-papaya/50" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-grey">
            MCL · MP-26 · UALBERTA
          </span>
        </motion.div>

        {/* The driver stage */}
        <div className="relative flex items-center justify-center w-full">
          {/* Big race number 81 ghosted behind */}
          <div
            className="absolute font-display font-black text-[36vw] md:text-[28vw] lg:text-[22vw] leading-none text-papaya/[0.06] select-none pointer-events-none -z-0 top-1/2 -translate-y-1/2"
            aria-hidden
          >
            81
          </div>

          {/* MANN on left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] text-f1-white uppercase leading-[0.85] tracking-tight z-20 hidden md:block"
            style={{ marginRight: '-3vw' }}
          >
            MANN
          </motion.div>

          {/* The racer image — centerpiece */}
          <button
            type="button"
            data-testid="hero-driver"
            aria-label="Hover to reveal the driver's face"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            className="relative z-20 group focus:outline-none"
          >
            {/* halo */}
            <div
              className="absolute inset-0 -m-12 rounded-full pointer-events-none transition-all duration-500"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,128,0,0.32) 0%, rgba(255,128,0,0.10) 35%, transparent 70%)',
                filter: hover ? 'blur(40px)' : 'blur(30px)',
                opacity: hover ? 1 : 0.7,
              }}
            />
            {/* HUD corner brackets */}
            <span className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-papaya/60 group-hover:border-papaya transition-colors" />
            <span className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-papaya/60 group-hover:border-papaya transition-colors" />
            <span className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-papaya/60 group-hover:border-papaya transition-colors" />
            <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-papaya/60 group-hover:border-papaya transition-colors" />

            <div className="relative w-[58vw] sm:w-[42vw] md:w-[32vw] lg:w-[26vw] max-w-[420px] min-w-[240px] aspect-[634/663]">
              {/* helmeted version */}
              <motion.img
                src="/images/racer-suited-transparent.png"
                alt="Mann Patel · helmet on"
                draggable={false}
                animate={{ opacity: hover ? 0 : 1, scale: hover ? 1.02 : 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-contain select-none"
                style={{ filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.6))' }}
              />
              {/* face-reveal version on hover */}
              <motion.img
                src={`/images/driver-face-transparent.png?v=2`}
                alt="Mann Patel"
                draggable={false}
                initial={{ opacity: 0 }}
                animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-contain object-[center_top] select-none"
                style={{
                  filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.6))',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 90% 100% at 50% 45%, #000 78%, transparent 100%)',
                  maskImage:
                    'radial-gradient(ellipse 90% 100% at 50% 45%, #000 78%, transparent 100%)',
                }}
              />

              {/* hover hint */}
              <motion.div
                animate={{ opacity: hover ? 0 : 1 }}
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] text-papaya"
              >
                ◉ HOVER · VISOR UP
              </motion.div>
            </div>
          </button>

          {/* PATEL on right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] uppercase leading-[0.85] tracking-tight z-20 hidden md:block"
            style={{ marginLeft: '-3vw' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-papaya via-soft-orange to-papaya">
              PATEL
            </span>
          </motion.div>
        </div>

        {/* Mobile-only MANN PATEL above CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden mt-6 text-center"
        >
          <h1 className="font-display font-black text-5xl uppercase leading-[0.85] tracking-tight text-f1-white">
            MANN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-papaya via-soft-orange to-papaya">
              PATEL
            </span>
          </h1>
        </motion.div>

        {/* tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 md:mt-12 text-center max-w-2xl"
        >
          <p className="text-base md:text-lg text-grey leading-relaxed">
            Software engineer who builds systems the way a race team builds cars —
            every component tuned, every metric measured,{' '}
            <span className="text-f1-white">every detail intentional.</span>
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              data-testid="hero-projects-btn"
              onClick={onViewProjects}
              className="px-7 py-3 bg-papaya text-background font-display font-bold text-sm tracking-[0.15em] uppercase diagonal-cut hover:bg-soft-orange transition-colors duration-200 glow-papaya"
            >
              View Garage →
            </button>
            <button
              data-testid="hero-resume-btn"
              onClick={onDownloadResume}
              className="px-7 py-3 border border-white/20 text-f1-white font-display font-bold text-sm tracking-[0.15em] uppercase hover:border-papaya hover:text-papaya transition-colors duration-200"
            >
              <span className="text-papaya/70 mr-2">↓</span>
              Race Card / CV
            </button>
          </div>
        </motion.div>
      </div>

      {/* race-control ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-y border-papaya/20 bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center h-9">
          <span className="font-mono text-[10px] tracking-[0.2em] text-background bg-papaya px-3 h-full flex items-center whitespace-nowrap font-bold">
            RACE CONTROL
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap font-mono text-[11px] tracking-wider text-grey">
              {[0, 1].map((dup) => (
                <span key={dup} className="flex items-center">
                  {TICKER_ITEMS.map((t) => (
                    <span key={t} className="px-6 flex items-center gap-3">
                      <span className="text-papaya">▣</span>
                      <span>{t}</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.3em] text-grey uppercase">
          Roll out
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-papaya to-transparent" />
      </div>
    </section>
  )
}
