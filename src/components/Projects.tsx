import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-carbon/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Garage / Projects"
          subtitle="Engineered systems built with precision — each bay tells a story."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
