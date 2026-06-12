import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

/**
 * Projects = the team garage.
 * Background: dark hangar with corrugated metal walls, a glowing papaya floor strip,
 * pit-lane number markings at the top.
 */
export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      {/* hangar wall - vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#0c0e10',
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 80px)',
        }}
      />
      {/* floor stripe */}
      <div className="absolute bottom-12 left-0 right-0 h-2 kerb-papaya opacity-60" />
      <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-papaya/40 to-transparent" />

      {/* big bay number watermark */}
      <div className="absolute right-6 top-32 font-display font-black text-[18rem] leading-none text-papaya/[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeading
          sectorNumber={2}
          kicker="THE GARAGE · PROJECT BAYS"
          title="Race Wins"
          subtitle="Each bay houses a project — built with precision, tuned for performance."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* garage console */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-carbon/60 backdrop-blur px-5 py-3">
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-grey uppercase">
            <span className="text-papaya">●</span> GARAGE · ONLINE
            <span className="text-dim-grey">|</span>
            CARS · {String(projects.length).padStart(2, '0')}
            <span className="text-dim-grey">|</span>
            PIT CREW · 01
          </div>
          <a
            data-testid="all-projects-link"
            href="https://github.com/MannPatel-CMPUT"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs tracking-[0.2em] uppercase text-papaya hover:text-soft-orange transition-colors"
          >
            View Team Roster →
          </a>
        </div>
      </div>
    </section>
  )
}
