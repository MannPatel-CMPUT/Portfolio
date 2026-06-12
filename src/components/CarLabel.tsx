import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CarLabelProps {
  label: string
  tooltipTitle: string
  tooltipDescription: string
  top: string
  left: string
  onClick: () => void
}

export default function CarLabel({
  label,
  tooltipTitle,
  tooltipDescription,
  top,
  left,
  onClick,
}: CarLabelProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
    >
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative font-mono text-[10px] sm:text-xs tracking-wider text-f1-white uppercase px-3 py-1.5 rounded-full border border-papaya/60 bg-background/70 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-papaya hover:shadow-[0_0_20px_rgba(255,135,0,0.35)] focus:outline-none focus:ring-2 focus:ring-papaya/50"
      >
        {label}
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 sm:w-60 p-3 rounded-lg border border-papaya/30 bg-carbon/95 backdrop-blur-lg shadow-lg pointer-events-none z-20"
          >
            <p className="font-mono text-[10px] tracking-[0.15em] text-papaya mb-1">
              {tooltipTitle}
            </p>
            <p className="text-xs text-grey leading-relaxed">
              {tooltipDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
