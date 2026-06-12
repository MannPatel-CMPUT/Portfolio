import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Tachometer LED colour at index i (0..13). */
function tachColor(i: number): string {
  if (i < 9) return 'bg-papaya'
  if (i < 12) return 'bg-soft-orange'
  return 'bg-speed-blue'
}

/**
 * Formula 1 race-start lights sequence used as a page-load intro overlay.
 * Five red light pairs illuminate one-by-one, hold, then all extinguish ("LIGHTS OUT")
 * and the overlay sweeps off to start the experience.
 */
export default function LightsOut({ onDone }: { onDone: () => void }) {
  const [lit, setLit] = useState(0) // 0..5
  const [phase, setPhase] = useState<'lights' | 'go' | 'sweep' | 'done'>('lights')

  useEffect(() => {
    if (phase !== 'lights') return
    if (lit < 5) {
      const t = setTimeout(() => setLit((n) => n + 1), 700)
      return () => clearTimeout(t)
    }
    // hold then go dark
    const hold = setTimeout(() => setPhase('go'), 900 + Math.random() * 700)
    return () => clearTimeout(hold)
  }, [lit, phase])

  useEffect(() => {
    if (phase === 'go') {
      const t = setTimeout(() => setPhase('sweep'), 700)
      return () => clearTimeout(t)
    }
    if (phase === 'sweep') {
      const t = setTimeout(() => {
        setPhase('done')
        onDone()
      }, 900)
      return () => clearTimeout(t)
    }
  }, [phase, onDone])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          data-testid="lights-out-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* sweep wipe */}
          <motion.div
            initial={{ x: '-110%' }}
            animate={phase === 'sweep' ? { x: '110%' } : { x: '-110%' }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-papaya via-soft-orange to-papaya z-10"
          />

          {/* tiny telemetry line */}
          <div className="absolute top-8 left-8 font-mono text-[10px] tracking-[0.3em] text-papaya/80">
            FIA · RACE CONTROL · MCL-MP
          </div>
          <div className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.3em] text-grey">
            SESSION · LOADING
          </div>

          {/* lights rig */}
          <div className="relative grid grid-cols-5 gap-4 md:gap-6 px-6">
            {[0, 1, 2, 3, 4].map((i) => {
              const on = phase === 'lights' && lit > i
              return (
                <div
                  key={i}
                  data-testid={`start-light-${i}`}
                  className="flex flex-col gap-1.5 md:gap-2"
                >
                  {[0, 1].map((row) => (
                    <div
                      key={row}
                      className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-[3px] border-black/80 bg-black"
                      style={{
                        boxShadow: on
                          ? '0 0 30px rgba(255,0,30,0.9), inset 0 0 14px rgba(255,200,200,0.6)'
                          : 'inset 0 0 10px rgba(0,0,0,0.95)',
                        backgroundColor: on ? '#ff0028' : '#1a0407',
                        transition: 'all 120ms ease-out',
                      }}
                    >
                      {on && (
                        <span className="absolute inset-2 rounded-full bg-white/30 blur-sm" />
                      )}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>

          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 font-display font-black text-3xl md:text-5xl tracking-wider"
          >
            {phase === 'lights' && (
              <span className="text-grey">
                LIGHTS<span className="text-papaya"> · </span>WAITING FOR GO
              </span>
            )}
            {phase === 'go' && (
              <span className="text-papaya text-glow">LIGHTS OUT — AND AWAY WE GO!</span>
            )}
          </motion.div>

          {/* tachometer-style progress */}
          <div className="mt-8 flex items-center gap-2 font-mono text-[10px] text-grey">
            <span>RPM</span>
            {Array.from({ length: 14 }).map((_, i) => {
              const active = (lit / 5) * 14 > i || phase === 'go'
              const color = tachColor(i)
              return (
                <span
                  key={i}
                  className={`w-2 h-4 rounded-sm ${active ? color : 'bg-white/8'}`}
                  style={{ opacity: active ? 1 : 0.35 }}
                />
              )
            })}
          </div>

          <button
            type="button"
            data-testid="skip-intro-btn"
            onClick={() => {
              setPhase('done')
              onDone()
            }}
            className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.2em] text-grey hover:text-papaya transition-colors"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
