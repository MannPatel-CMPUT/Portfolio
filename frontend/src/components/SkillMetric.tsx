import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'

interface SkillMetricProps {
  skill: Skill
  index: number
}

/** Telemetry-bar segment colour: papaya body → soft-orange near redline → speed-blue shift light. */
function segmentColor(i: number): string {
  if (i < 7) return 'bg-papaya'
  if (i < 11) return 'bg-soft-orange'
  return 'bg-speed-blue'
}

/**
 * A single telemetry readout. Uses a 14-LED RPM bar where the level fills
 * across green → papaya → soft-orange → speed-blue (shift light).
 */
export default function SkillMetric({ skill, index }: SkillMetricProps) {
  const segments = 14
  const filled = Math.round((skill.level / 100) * segments)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group border border-white/10 bg-carbon/70 hover:border-papaya/50 hover:bg-carbon transition-colors px-4 py-3"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-display font-bold text-sm text-f1-white tracking-wide truncate">
          {skill.name}
        </span>
        <span className="font-mono text-xs font-bold text-papaya">
          {skill.level}
          <span className="text-grey">{skill.unit}</span>
        </span>
      </div>

      <div className="flex items-end gap-[2px] h-4">
        {Array.from({ length: segments }).map((_, i) => {
          const on = i < filled
          const color = segmentColor(i)
          return (
            <motion.span
              key={i}
              initial={{ scaleY: 0.2, opacity: 0.3 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 + i * 0.025, duration: 0.25 }}
              className={`flex-1 origin-bottom ${on ? color : 'bg-white/8'}`}
              style={{
                height: `${30 + (i / segments) * 70}%`,
                opacity: on ? 1 : 0.3,
                boxShadow: on && i >= 11 ? '0 0 6px rgba(56,200,255,0.6)' : 'none',
              }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}
