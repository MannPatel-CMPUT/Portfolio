import { motion } from 'framer-motion'
import DriverReveal from './DriverReveal'

interface HeroProps {
  onViewProjects: () => void
  onDownloadResume: () => void
}

/**
 * Hero = pit-lane / starting grid. Background uses asphalt + pit-lane stripes
 * + papaya speed-streaks + race-control ticker.
 */
export default function Hero({ onViewProjects, onDownloadResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden asphalt-tex"
    >
      {/* pit-lane stripes baseline */}
      <div className="absolute inset-x-0 bottom-0 h-40 pitlane-stripes opacity-70" />
      {/* horizon glow */}
      <div className="absolute -top-32 left-1/3 w-[60%] h-[60%] bg-papaya/15 blur-[140px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-[40%] h-[40%] bg-speed-blue/8 blur-[120px] rounded-full" />

      {/* speed streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 32, 48, 64, 78].map((top, i) => (
          <span
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-papaya/60 to-transparent speedline"
            style={{
              top: `${top}%`,
              left: 0,
              right: 0,
              width: '40%',
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${1.4 + (i % 2) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* corner kerb accent */}
      <div className="absolute top-20 left-0 h-2 w-40 kerb-papaya" />
      <div className="absolute bottom-44 right-0 h-2 w-56 kerb-papaya" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 lg:py-32">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left – the driver intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* race number plate */}
            <div className="flex items-center gap-4 mb-7">
              <div className="relative">
                <div className="font-display font-black text-7xl md:text-8xl leading-none text-papaya text-glow">
                  81
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-papaya/60" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-grey uppercase">
                  Car #81 · Driver Card
                </div>
                <div className="font-display font-bold text-xl text-f1-white mt-1 tracking-wide">
                  MCL · MP-26
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-papaya animate-pulse" />
                  <span className="font-mono text-[10px] tracking-wider text-papaya">
                    SYSTEMS · ARMED
                  </span>
                </div>
              </div>
            </div>

            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-[9rem] text-f1-white leading-[0.85] uppercase tracking-tight">
              MANN
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-papaya via-soft-orange to-papaya">
                  PATEL
                </span>
                <span className="absolute -right-4 top-2 font-mono text-xs text-papaya/60 tracking-wider rotate-90 origin-left">
                  ROOKIE · CS · UALBERTA
                </span>
              </span>
            </h1>

            <p className="mt-7 text-base md:text-lg text-grey max-w-lg leading-relaxed">
              Software engineer who builds systems the way a race team builds cars —
              every component tuned, every metric measured, every detail intentional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                data-testid="hero-projects-btn"
                onClick={onViewProjects}
                className="group relative px-7 py-3 bg-papaya text-background font-display font-bold text-sm tracking-[0.15em] uppercase diagonal-cut hover:bg-soft-orange transition-colors duration-200 glow-papaya"
              >
                <span className="relative z-10">View Garage →</span>
              </button>
              <button
                data-testid="hero-resume-btn"
                onClick={onDownloadResume}
                className="group px-7 py-3 border border-white/20 text-f1-white font-display font-bold text-sm tracking-[0.15em] uppercase hover:border-papaya hover:text-papaya transition-colors duration-200"
              >
                <span className="text-papaya/70 group-hover:text-papaya mr-2">↓</span>
                Race Card / CV
              </button>
            </div>

            {/* telemetry strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { label: 'TEAM', value: 'MCL · CS', sub: 'University of Alberta' },
                { label: 'SPEC', value: 'BACKEND', sub: 'AI / Systems' },
                { label: 'FOCUS', value: 'I·R', sub: 'Information Retrieval' },
              ].map((s) => (
                <div key={s.label} className="border-l border-papaya/40 pl-3">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-grey uppercase">
                    {s.label}
                  </div>
                  <div className="font-display font-black text-xl text-f1-white mt-0.5">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] text-grey/80 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – driver reveal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            {/* HUD corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-papaya" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-papaya" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-papaya" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-papaya" />

            <div className="absolute -top-8 left-0 font-mono text-[10px] tracking-[0.25em] text-papaya">
              ◉ REC · DRIVER CAM
            </div>
            <div className="absolute -top-8 right-0 font-mono text-[10px] tracking-[0.25em] text-grey">
              FOV · 16:9
            </div>

            <DriverReveal
              portraitImage="/images/driver-face-reveal.png"
              suitedImage="/images/driver-suited.png"
              helmetImage="/images/driver-helmet.png"
              helmetTop="3%"
              helmetWidth="68%"
              alt="Mann Patel driver reveal"
            />

            <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[9px] tracking-wider text-grey">
              <div className="border border-white/10 px-2 py-1.5">
                <span className="text-papaya">●</span> HEART · 72 BPM
              </div>
              <div className="border border-white/10 px-2 py-1.5">
                <span className="text-papaya">●</span> G · 0.0
              </div>
              <div className="border border-white/10 px-2 py-1.5">
                <span className="text-papaya">●</span> COMM · OPEN
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* race-control ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-y border-papaya/20 bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center h-9">
          <span className="font-mono text-[10px] tracking-[0.2em] text-background bg-papaya px-3 h-full flex items-center whitespace-nowrap font-bold">
            RACE CONTROL
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap font-mono text-[11px] tracking-wider text-grey">
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k} className="flex items-center">
                  {[
                    'PYTHON · FASTAPI · MONGODB',
                    'AI / ML · INFORMATION RETRIEVAL',
                    'STATUS · OPEN TO INTERNSHIPS 2026',
                    'BASED · EDMONTON, AB',
                    'STACK · REACT · TS · NODE',
                    'CURRENTLY ENGINEERING · CAREER OS',
                    'SYSTEMS · APIS · DATABASES',
                  ].map((t, i) => (
                    <span key={i} className="px-6 flex items-center gap-3">
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
        <span className="w-px h-10 bg-gradient-to-b from-papaya to-transparent" />
      </div>
    </section>
  )
}
