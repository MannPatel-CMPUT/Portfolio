import { useEffect, useRef, useState } from 'react'

/**
 * Custom papaya cursor with a trailing speedline ghost.
 * Pointer-events none so it never interferes.
 */
export default function PapayaCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const t = e.target as HTMLElement | null
      const interactive = !!t?.closest('a, button, [role="button"], input, textarea, label')
      setHovering(interactive)
    }
    window.addEventListener('mousemove', move)

    let raf = 0
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18
      ring.current.y += (pos.current.y - ring.current.y) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[120] pointer-events-none w-2 h-2 rounded-full bg-papaya"
        style={{ boxShadow: '0 0 16px rgba(255,128,0,0.85)' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[120] pointer-events-none w-9 h-9 rounded-full border border-papaya/70 transition-[width,height,opacity] duration-200"
        style={{
          opacity: hovering ? 1 : 0.55,
          transform: 'translate3d(-100px,-100px,0)',
          backgroundColor: hovering ? 'rgba(255,128,0,0.12)' : 'transparent',
          boxShadow: hovering ? '0 0 24px rgba(255,128,0,0.45)' : 'none',
        }}
      />
    </>
  )
}
