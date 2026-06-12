import { useState } from 'react'

interface DriverRevealProps {
  portraitImage: string
  suitedImage: string
  helmetImage: string
  alt?: string
  helmetTop?: string
  helmetWidth?: string
}

export default function DriverReveal({
  portraitImage,
  suitedImage,
  helmetImage,
  alt = 'Driver reveal',
  helmetTop = '1%',
  helmetWidth = '74%',
}: DriverRevealProps) {
  const [revealed, setRevealed] = useState(false)

  const overlayClass = revealed
    ? 'opacity-0 -translate-y-2 scale-[0.98]'
    : 'opacity-100 translate-y-0 scale-100 group-hover:opacity-0 group-hover:-translate-y-2 group-hover:scale-[0.98]'

  return (
    <div
      className="group relative w-full max-w-md mx-auto aspect-[3/4]"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setRevealed((prev) => !prev)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${alt} — hover or tap to reveal`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-papaya/10 to-transparent blur-3xl opacity-60" />

      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
        {/* Portrait revealed on hover */}
        <img
          src={portraitImage}
          alt={`${alt} — portrait`}
          className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
        />

        <div className={`absolute inset-0 z-[1] pointer-events-none transition-all duration-300 ease-out ${overlayClass}`}>
          <img
            src={suitedImage}
            alt={`${alt} — racing suit`}
            className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
          />
          <img
            src={helmetImage}
            alt={`${alt} — helmet`}
            style={{ top: helmetTop, width: helmetWidth }}
            className="absolute left-1/2 -translate-x-1/2 object-contain drop-shadow-md"
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-lg border border-white/10 bg-background/80 px-3 py-2 backdrop-blur-sm">
          <span className="font-mono text-[10px] tracking-widest text-grey uppercase">
            Driver Reveal
          </span>
          <span className="font-mono text-[10px] text-papaya">
            {revealed ? 'FACE REVEALED' : 'HOVER TO UNMASK'}
          </span>
        </div>
      </div>
    </div>
  )
}
