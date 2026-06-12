import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

/**
 * A garage bay panel housing each project car.
 * Layout: top sign (BAY 0X), big project title, telemetry stats, tyre-style tech tags,
 * actions. On hover papaya floor-light intensifies and signage glows.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const bay = String(index + 1).padStart(2, '0')
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {/* hanging bay sign */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-papaya text-background font-display font-black text-xs tracking-[0.2em] px-2.5 py-1 group-hover:glow-papaya transition-shadow">
            BAY {bay}
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-grey uppercase">
            {project.systemType}
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-grey">
          <span className="w-1.5 h-1.5 rounded-full bg-papaya blink-led" />
          {project.buildStatus.toUpperCase()}
        </span>
      </div>

      {/* the bay box */}
      <div className="relative diagonal-cut border border-white/10 bg-carbon group-hover:border-papaya/50 transition-colors overflow-hidden">
        {/* floor light */}
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-papaya to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-papaya/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* corrugated wall pattern (faint vertical lines) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)',
          }}
        />

        <div className="relative p-6">
          <h3 className="font-display font-black text-2xl md:text-3xl text-f1-white uppercase tracking-tight leading-tight group-hover:text-papaya transition-colors">
            {project.name}
          </h3>

          <p className="mt-3 text-sm text-grey leading-relaxed">
            {project.description}
          </p>

          {/* telemetry-style stat row */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="border border-white/10 px-3 py-2 bg-background/40">
              <div className="font-mono text-[9px] tracking-[0.2em] text-grey uppercase">
                Performance
              </div>
              <div className="font-display font-bold text-sm text-f1-white mt-0.5">
                {project.performanceFocus}
              </div>
            </div>
            <div className="border border-white/10 px-3 py-2 bg-background/40">
              <div className="font-mono text-[9px] tracking-[0.2em] text-grey uppercase">
                Build
              </div>
              <div className="font-display font-bold text-sm text-papaya mt-0.5">
                {project.buildStatus}
              </div>
            </div>
          </div>

          {/* tyre compounds = tech stack */}
          <div className="mt-4 flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[9px] tracking-[0.2em] text-grey uppercase mr-1">
              Stack
            </span>
            {project.techStack.map((t, i) => {
              const color =
                i % 4 === 0
                  ? 'border-papaya/60 text-papaya'
                  : i % 4 === 1
                    ? 'border-speed-blue/60 text-speed-blue'
                    : i % 4 === 2
                      ? 'border-f1-white/30 text-f1-white'
                      : 'border-soft-orange/60 text-soft-orange'
              return (
                <span
                  key={t}
                  className={`inline-flex items-center gap-1 border ${color} font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full`}
                >
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {t}
                </span>
              )
            })}
          </div>

          {/* actions */}
          <div className="flex gap-2 mt-6">
            <a
              data-testid={`project-${index}-github`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 border border-white/15 font-display font-bold text-xs tracking-[0.18em] uppercase text-f1-white hover:border-papaya hover:text-papaya transition-colors"
            >
              ↗ Repo
            </a>
            <a
              data-testid={`project-${index}-demo`}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 bg-papaya text-background font-display font-bold text-xs tracking-[0.18em] uppercase hover:bg-soft-orange transition-colors"
            >
              ▶ Live Lap
            </a>
          </div>
        </div>
      </div>

      {/* floor reflection */}
      <div className="mx-6 h-3 bg-gradient-to-b from-papaya/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  )
}
