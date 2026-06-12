import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { timelineEvents } from '../data/timeline'

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Championship Path"
          subtitle="The milestones that shaped my engineering trajectory."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-papaya via-papaya/30 to-transparent" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year + event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-6 pl-12"
              >
                <div className="absolute left-3 top-1.5 h-3 w-3 rounded-full border-2 border-papaya bg-background" />

                <div className="flex-1 rounded-xl border border-white/10 bg-carbon p-5 hover:border-papaya/30 transition-colors">
                  <span className="font-mono text-xs text-papaya tracking-wider">
                    {event.year}
                  </span>
                  <h3 className="text-f1-white font-semibold mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-grey leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
