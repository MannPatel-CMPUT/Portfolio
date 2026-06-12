import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import CarLabel from './CarLabel'
import { carLabels } from '../data/carLabels'

interface InteractiveCarProps {
  onNavigate: (sectionId: string) => void
}

export default function InteractiveCar({ onNavigate }: InteractiveCarProps) {
  return (
    <section id="explore" className="relative py-24 md:py-32 bg-carbon/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Explore the Machine"
          subtitle="Every component represents a part of my engineering journey."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative aspect-[16/9] w-full">
            <img
              src="/images/f1-car-clean.png"
              alt="F1-inspired engineering machine"
              className="w-full h-full object-contain"
            />

            {carLabels.map((item) => (
              <CarLabel
                key={item.id}
                label={item.label}
                tooltipTitle={item.tooltipTitle}
                tooltipDescription={item.tooltipDescription}
                top={item.top}
                left={item.left}
                onClick={() => onNavigate(item.targetId)}
              />
            ))}
          </div>

          <p className="text-center font-mono text-[10px] tracking-widest text-grey/60 mt-6 uppercase">
            Click any component to navigate
          </p>
        </motion.div>
      </div>
    </section>
  )
}
