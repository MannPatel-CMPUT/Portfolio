import { motion } from 'framer-motion'

interface SectionHeadingProps {
  sectorNumber: number
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  accent?: 'papaya' | 'blue' | 'kerb'
}

/**
 * F1-styled section heading: track sector tag + bold display heading + telemetry meta strip.
 */
export default function SectionHeading({
  sectorNumber,
  kicker,
  title,
  subtitle,
  align = 'left',
  accent = 'papaya',
}: SectionHeadingProps) {
  const tagClasses = {
    papaya: 'text-papaya border-papaya/40',
    blue: 'text-speed-blue border-speed-blue/40',
    kerb: 'text-f1-white border-white/30',
  }[accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`inline-flex items-center gap-2 border ${tagClasses} px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] uppercase rounded-sm`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current blink-led" />
          SECTOR {String(sectorNumber).padStart(2, '0')}
        </span>
        <span className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
          {kicker}
        </span>
      </div>
      <h2 className="font-display font-black text-4xl md:text-6xl text-f1-white uppercase leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-grey text-base md:text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-[3px] w-16 bg-papaya" />
        <span className="h-[3px] w-3 bg-papaya/50" />
        <span className="h-[3px] w-1 bg-papaya/30" />
      </div>
    </motion.div>
  )
}
