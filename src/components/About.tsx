import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const focusAreas = [
  'AI Systems',
  'Backend Engineering',
  'Databases',
  'Information Retrieval',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Driver Profile"
          subtitle="The engineer behind the systems — background, focus, and approach."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-5 gap-8"
        >
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-carbon p-8 h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-papaya to-soft-orange flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-background">MP</span>
              </div>

              <h3 className="text-2xl font-bold text-f1-white">Mann Patel</h3>
              <p className="font-mono text-sm text-papaya mt-1 tracking-wide">
                Software Developer
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-grey uppercase tracking-wider w-20">
                    Education
                  </span>
                  <span className="text-sm text-f1-white">
                    Computer Science, University of Alberta
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-grey uppercase tracking-wider w-20 mt-0.5">
                    Focus
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="text-xs text-f1-white border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="text-grey leading-relaxed mb-4">
              I&apos;m a Computer Science student at the University of Alberta
              who builds software the way an engineering team prepares a race
              car — every component tuned, every system measured, every detail
              intentional.
            </p>
            <p className="text-grey leading-relaxed mb-4">
              My work sits at the intersection of backend systems, AI, and data.
              I care about writing code that performs under pressure: APIs that
              scale, databases that stay consistent, and retrieval pipelines that
              deliver the right information at the right time.
            </p>
            <p className="text-grey leading-relaxed">
              I&apos;m not here to collect technologies — I&apos;m here to
              engineer solutions. Whether it&apos;s a career platform, an AI
              retrieval system, or a backend service, I approach every project
              with the discipline of a pit crew and the curiosity of a driver
              pushing for the next lap.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
