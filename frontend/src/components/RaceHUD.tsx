import { useEffect, useRef, useState } from 'react'

/**
 * Fixed left-edge HUD that mimics an F1 steering wheel display.
 * - RPM bar (driven by scroll velocity)
 * - Gear indicator (driven by section index, 1..6)
 * - Lap progress (driven by overall scroll progress)
 * - Speed/% (driven by scroll progress)
 *
 * The HUD pins to the bottom-left on desktop, collapses to a thin bar on mobile.
 */
const SECTIONS = ['hero', 'about', 'projects', 'skills', 'timeline', 'contact'] as const

/** Colour for the i-th RPM LED segment out of 18 (papaya → soft-orange → speed-blue shift light). */
function rpmSegmentColor(i: number): string {
  if (i < 11) return 'bg-papaya'
  if (i < 15) return 'bg-soft-orange'
  return 'bg-speed-blue'
}

/** Compute the active section index based on which section sits closest to the top. */
function detectActiveSection(): number {
  let active = 0
  SECTIONS.forEach((id, i) => {
    const el = document.getElementById(id)
    if (!el) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.35) active = i
  })
  return active
}

export default function RaceHUD() {
  const [progress, setProgress] = useState(0)
  const [section, setSection] = useState(0)
  const [rpm, setRpm] = useState(0.2)
  const lastY = useRef(0)
  const lastT = useRef(performance.now())
  const decay = useRef<number | null>(null)

  useEffect(() => {
    const handle = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      const p = max > 0 ? Math.min(1, y / max) : 0
      setProgress(p)

      // section detection
      setSection(detectActiveSection())

      // RPM from instantaneous scroll velocity
      const now = performance.now()
      const dt = Math.max(1, now - lastT.current)
      const dy = Math.abs(y - lastY.current)
      lastY.current = y
      lastT.current = now
      const v = Math.min(1, dy / dt / 4) // 0..1
      setRpm((prev) => Math.max(prev * 0.6, 0.18 + v * 0.82))

      if (decay.current) window.clearTimeout(decay.current)
      decay.current = window.setTimeout(() => setRpm(0.2), 240)
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [])

  const gear = section + 1
  const speed = Math.round(progress * 327) // MCL38 top speed-ish kph

  return (
    <>
      {/* desktop dock */}
      <aside
        data-testid="race-hud"
        className="hidden md:flex fixed left-4 bottom-4 z-40 flex-col gap-2 pointer-events-none select-none"
      >
        <div className="diagonal-cut-l bg-carbon/85 backdrop-blur-md border border-papaya/25 px-3 py-3 w-52">
          {/* RPM strip */}
          <div className="flex items-end gap-[3px] h-7">
            {Array.from({ length: 18 }).map((_, i) => {
              const active = rpm * 18 > i
              const color = rpmSegmentColor(i)
              return (
                <span
                  key={i}
                  className={`flex-1 rounded-sm ${active ? color : 'bg-white/8'} rpm-bar`}
                  style={{
                    height: `${30 + (i / 18) * 70}%`,
                    animationPlayState: rpm > 0.45 && active ? 'running' : 'paused',
                    opacity: active ? 1 : 0.35,
                  }}
                />
              )
            })}
          </div>

          {/* meta row */}
          <div className="mt-3 flex items-center justify-between font-mono text-[9px] tracking-widest text-grey">
            <span>GEAR</span>
            <span>SPEED</span>
            <span>LAP</span>
          </div>
          <div className="flex items-center justify-between font-display font-black text-2xl text-f1-white leading-none mt-1">
            <span className="text-papaya text-glow">{gear}</span>
            <span>
              {speed}
              <span className="font-mono text-[9px] text-grey ml-0.5">KPH</span>
            </span>
            <span>
              {String(section + 1).padStart(2, '0')}
              <span className="font-mono text-[9px] text-grey">/6</span>
            </span>
          </div>

          {/* section name */}
          <div className="mt-3 font-mono text-[10px] tracking-[0.18em] text-papaya uppercase">
            S{section + 1} · {SECTIONS[section]}
          </div>

          {/* progress strip */}
          <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-papaya via-soft-orange to-speed-blue"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </aside>

      {/* mobile thin progress */}
      <div
        data-testid="race-hud-mobile"
        className="md:hidden fixed top-16 left-0 right-0 z-40 h-0.5 bg-white/5 pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-papaya via-soft-orange to-speed-blue"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </>
  )
}
