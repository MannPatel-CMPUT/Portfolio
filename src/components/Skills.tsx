import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SkillMetric from './SkillMetric'
import {
  skills,
  SKILLS_PREVIEW_COUNT,
  groupSkillsByCategory,
} from '../data/skills'

const skillGroups = groupSkillsByCategory(skills)

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  )

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Telemetry"
          subtitle="Live readouts from the engineering stack — skills measured like race data."
        />

        <div className="space-y-10">
          {Object.entries(skillGroups).map(([category, categorySkills]) => {
            const isExpanded = expandedCategories.has(category)
            const hasMore = categorySkills.length > SKILLS_PREVIEW_COUNT
            const visibleSkills = isExpanded
              ? categorySkills
              : categorySkills.slice(0, SKILLS_PREVIEW_COUNT)
            const hiddenCount = categorySkills.length - SKILLS_PREVIEW_COUNT

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-6 bg-papaya/60" />
                  <h3 className="font-mono text-xs tracking-[0.2em] text-papaya uppercase">
                    {category}
                  </h3>
                  <span className="font-mono text-[10px] text-grey">
                    {categorySkills.length} metrics
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AnimatePresence initial={false}>
                    {visibleSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                      >
                        <SkillMetric
                          skill={skill}
                          index={index}
                          showCategory={false}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {hasMore && (
                  <button
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className="mt-4 font-mono text-xs tracking-wider text-grey hover:text-papaya border border-white/10 hover:border-papaya/40 rounded-full px-4 py-2 transition-colors"
                  >
                    {isExpanded
                      ? 'Show less'
                      : `View all (+${hiddenCount} more)`}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
