import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-xl border border-white/10 bg-carbon p-6 hover:border-papaya/40 transition-colors duration-300"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-papaya/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-f1-white group-hover:text-papaya transition-colors">
          {project.name}
        </h3>
        <span className="font-mono text-[10px] tracking-wider text-papaya border border-papaya/30 rounded px-2 py-0.5">
          BAY {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="text-sm text-grey leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5 text-[11px]">
        <div className="rounded-lg bg-background/50 px-3 py-2">
          <p className="font-mono text-grey/70 uppercase tracking-wider mb-0.5">
            Build Status
          </p>
          <p className="text-f1-white font-medium">{project.buildStatus}</p>
        </div>
        <div className="rounded-lg bg-background/50 px-3 py-2">
          <p className="font-mono text-grey/70 uppercase tracking-wider mb-0.5">
            System Type
          </p>
          <p className="text-f1-white font-medium">{project.systemType}</p>
        </div>
        <div className="rounded-lg bg-background/50 px-3 py-2">
          <p className="font-mono text-grey/70 uppercase tracking-wider mb-0.5">
            Performance Focus
          </p>
          <p className="text-f1-white font-medium">{project.performanceFocus}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] tracking-wide text-grey border border-white/10 rounded-full px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-lg border border-white/15 text-sm font-medium text-f1-white hover:border-papaya hover:text-papaya transition-colors"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-lg bg-papaya/10 border border-papaya/30 text-sm font-medium text-papaya hover:bg-papaya hover:text-background transition-colors"
        >
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}
