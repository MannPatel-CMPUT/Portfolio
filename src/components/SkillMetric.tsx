import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'

interface SkillMetricProps {
  skill: Skill
  index: number
  showCategory?: boolean
}

export default function SkillMetric({
  skill,
  index,
  showCategory = true,
}: SkillMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/10 bg-carbon p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          {showCategory && (
            <p className="font-mono text-[10px] tracking-widest text-grey uppercase">
              {skill.category}
            </p>
          )}
          <p
            className={`text-f1-white font-semibold ${showCategory ? 'mt-0.5' : ''}`}
          >
            {skill.name}
          </p>
        </div>
        <span className="font-mono text-xl font-bold text-papaya">
          {skill.level}
          <span className="text-sm text-grey">{skill.unit}</span>
        </span>
      </div>

      <div className="h-2 rounded-full bg-background overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-papaya to-soft-orange"
        />
      </div>
    </motion.div>
  )
}
