import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { timelineEvents } from '../data/timeline'

/**
 * Timeline = career circuit. Each milestone is a turn on the track.
 * Background: aerial track schematic (a serpentine SVG path) on the left,
 * cards as turn-by-turn entries on the right.
 */
export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-asphalt to-background" />
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="absolute -bottom-20 right-0 w-[40%] h-[40%] bg-papaya/8 blur-[140px] rounded-full" />
      <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-papaya/40 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeading
          sectorNumber={4}
          kicker="CIRCUIT · CAREER LAYOUT"
          title="The Circuit"
          subtitle="A turn-by-turn breakdown — each corner is a milestone that shaped the engineer behind the wheel."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* Track schematic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative diagonal-cut border border-papaya/20 bg-carbon/60 backdrop-blur p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-papaya uppercase">
                CIRCUIT · MANN-2026
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
                LAP RECORD · 0:00.000
              </span>
            </div>

            <svg
              viewBox="0 0 400 540"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* runoff */}
              <path
                d="M60 60 L340 60 Q380 60 380 100 L380 200 Q380 240 340 240 L120 240 Q80 240 80 280 L80 380 Q80 420 120 420 L340 420 Q380 420 380 460 L380 500"
                stroke="#2a2d31"
                strokeWidth="34"
                fill="none"
                strokeLinecap="round"
              />
              {/* asphalt */}
              <path
                d="M60 60 L340 60 Q380 60 380 100 L380 200 Q380 240 340 240 L120 240 Q80 240 80 280 L80 380 Q80 420 120 420 L340 420 Q380 420 380 460 L380 500"
                stroke="#0b0c0e"
                strokeWidth="24"
                fill="none"
                strokeLinecap="round"
              />
              {/* center papaya racing line */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: 'easeInOut' }}
                d="M60 60 L340 60 Q380 60 380 100 L380 200 Q380 240 340 240 L120 240 Q80 240 80 280 L80 380 Q80 420 120 420 L340 420 Q380 420 380 460 L380 500"
                stroke="#ff8000"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 6px #ff8000)' }}
              />

              {/* Start/Finish line */}
              <g>
                <rect x="50" y="48" width="20" height="24" fill="#f4f5f6" />
                <rect x="50" y="48" width="10" height="12" fill="#08090b" />
                <rect x="60" y="60" width="10" height="12" fill="#08090b" />
              </g>
              <text x="44" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#ff8000">
                S/F
              </text>

              {/* turn markers */}
              {[
                { x: 340, y: 60, n: 1 },
                { x: 380, y: 200, n: 2 },
                { x: 120, y: 240, n: 3 },
                { x: 80, y: 380, n: 4 },
                { x: 380, y: 460, n: 5 },
              ].map((t) => (
                <g key={t.n}>
                  <circle cx={t.x} cy={t.y} r="14" fill="#08090b" stroke="#ff8000" strokeWidth="2" />
                  <text
                    x={t.x}
                    y={t.y + 4}
                    textAnchor="middle"
                    fontFamily="Saira Condensed"
                    fontWeight="900"
                    fontSize="14"
                    fill="#ff8000"
                  >
                    T{t.n}
                  </text>
                </g>
              ))}

              {/* checker at finish */}
              <g transform="translate(372, 500)">
                <rect width="16" height="20" fill="#f4f5f6" />
                <rect width="8" height="10" fill="#08090b" />
                <rect x="8" y="10" width="8" height="10" fill="#08090b" />
              </g>
            </svg>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { k: 'TURNS', v: String(timelineEvents.length) },
                { k: 'YEARS', v: timelineEvents.length.toString() },
                { k: 'GRADE', v: 'FIA-A' },
              ].map((s) => (
                <div key={s.k} className="text-center border border-white/10 py-2">
                  <div className="font-display font-black text-xl text-papaya">{s.v}</div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-grey uppercase mt-0.5">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* turn-by-turn list */}
          <div className="space-y-4">
            {timelineEvents.map((e, i) => (
              <motion.div
                key={e.year + e.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex gap-5"
              >
                {/* turn number */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 border-2 border-papaya/50 group-hover:border-papaya group-hover:glow-papaya transition-all flex items-center justify-center bg-carbon">
                    <span className="absolute top-1 left-1 font-mono text-[9px] text-grey">T{i + 1}</span>
                    <span className="font-display font-black text-2xl text-papaya">
                      {e.year.slice(-2)}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-center mt-1 tracking-widest text-grey">
                    {e.year}
                  </div>
                </div>

                <div className="flex-1 border-l-2 border-papaya/30 group-hover:border-papaya pl-5 pb-4 transition-colors">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display font-bold text-lg text-f1-white uppercase tracking-wide">
                      {e.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-papaya">
                      TURN {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-grey leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* finish flag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-2"
            >
              <div className="w-16 h-10 checker" />
              <div>
                <div className="font-display font-black text-lg text-f1-white uppercase">
                  Currently Racing
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-papaya">
                  CHEQUERED FLAG · IN SIGHT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
