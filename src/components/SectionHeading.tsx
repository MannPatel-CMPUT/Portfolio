import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-papaya" />
        <span className="font-mono text-xs tracking-[0.2em] text-papaya uppercase">
          Section
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-f1-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-grey max-w-2xl text-base md:text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
