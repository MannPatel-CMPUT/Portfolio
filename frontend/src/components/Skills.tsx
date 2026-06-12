import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SkillMetric from './SkillMetric'
import { skills, groupSkillsByCategory } from '../data/skills'

const CATEGORY_ORDER = [
  'Languages',
  'Frontend',
  'Backend',
  'Data',
  'AI/ML',
  'Mobile',
  'DevOps',
  'Tooling',
  'Concepts',
]

/** Wheel-LED colour for the 11-segment shift bar. */
function wheelLedColor(i: number): string {
  if (i < 4) return 'bg-emerald-400'
  if (i < 8) return 'bg-papaya'
  return 'bg-speed-blue'
}

/**
 * Skills = the steering wheel digital dashboard.
 * Background: dark circuit board grid + tech-grid. Category selector mimics
 * the rotary dials on an F1 wheel. Top row: gear LED + DRS/ENGINE switches.
 */
export default function Skills() {
  const groups = useMemo(() => groupSkillsByCategory(skills), [])
  const orderedCats = useMemo(
    () =>
      CATEGORY_ORDER.filter((c) => groups[c]).concat(
        Object.keys(groups).filter((c) => !CATEGORY_ORDER.includes(c)),
      ),
    [groups],
  )
  const [active, setActive] = useState<string>(orderedCats[0])

  const activeSkills = groups[active] ?? []
  const avg = activeSkills.length
    ? Math.round(activeSkills.reduce((s, x) => s + x.level, 0) / activeSkills.length)
    : 0

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      {/* circuit grid */}
      <div className="absolute inset-0 grid-tech opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-asphalt to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-speed-blue/4 blur-[140px] rounded-full" />

      {/* corner kerb */}
      <div className="absolute top-12 right-0 h-1 w-40 kerb-papaya opacity-50" />
      <div className="absolute bottom-12 left-0 h-1 w-40 kerb-papaya opacity-50" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeading
          sectorNumber={3}
          kicker="LIVE TELEMETRY · STEERING WHEEL"
          title="Telemetry"
          subtitle="Live readouts from the engineering stack — skills measured the way race engineers measure pace."
          accent="blue"
        />

        {/* Steering wheel LED bar */}
        <div className="border border-papaya/30 bg-carbon/80 backdrop-blur-md p-5 md:p-6 diagonal-cut mb-8">
          {/* top row: simulated wheel LEDs + DRS */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 11 }).map((_, i) => {
                const c = wheelLedColor(i)
                return (
                  <span
                    key={i}
                    className={`w-3 h-1.5 ${c}`}
                    style={{ boxShadow: '0 0 6px currentColor', opacity: 0.85 }}
                  />
                )
              })}
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-grey">
              <span className="text-emerald-400">● ENGINE</span>
              <span className="text-papaya">● DRS</span>
              <span className="text-speed-blue">● ERS</span>
            </div>
          </div>

          {/* main dash */}
          <div className="grid grid-cols-3 items-center">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
                Selected
              </div>
              <div className="font-display font-black text-3xl md:text-4xl text-papaya text-glow uppercase tracking-tight mt-0.5">
                {active}
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-black text-7xl text-f1-white leading-none">
                {avg}
                <span className="text-papaya text-3xl align-top">%</span>
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase mt-1">
                AVG PACE
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
                Metrics
              </div>
              <div className="font-display font-black text-3xl md:text-4xl text-f1-white tracking-tight mt-0.5">
                {String(activeSkills.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* category dial selector */}
        <div className="flex flex-wrap gap-2 mb-7">
          {orderedCats.map((cat) => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                data-testid={`skill-cat-${cat}`}
                onClick={() => setActive(cat)}
                className={`relative font-display font-bold text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all ${
                  isActive
                    ? 'bg-papaya text-background border-papaya glow-papaya'
                    : 'border-white/15 text-grey hover:text-f1-white hover:border-papaya/50'
                }`}
              >
                {cat}
                <span className="ml-2 font-mono text-[9px] opacity-70">
                  {String(groups[cat].length).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>

        {/* skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {activeSkills.map((s, i) => (
            <SkillMetric key={s.name} skill={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
