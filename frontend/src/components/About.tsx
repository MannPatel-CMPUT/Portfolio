import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const focusAreas = [
  { label: 'AI Systems', stat: '04', sub: 'PROJECTS' },
  { label: 'Backend Engineering', stat: 'PY', sub: 'PRIMARY' },
  { label: 'Databases', stat: 'SQL+NoSQL', sub: 'STACK' },
  { label: 'Information Retrieval', stat: 'IR', sub: 'FOCUS' },
]

/**
 * About = cockpit POV / driver profile.
 * Background: visor-style curved gradient + grandstand motion blur + telemetry HUD lines.
 */
export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* visor gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-asphalt via-background to-carbon" />
      {/* grandstand blur */}
      <div className="absolute top-10 right-0 w-1/2 h-1/2 bg-papaya/8 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-speed-blue/5 blur-[120px] rounded-full" />

      {/* faint visor curve */}
      <svg
        viewBox="0 0 1440 600"
        className="absolute inset-x-0 top-0 w-full opacity-[0.07] pointer-events-none"
        preserveAspectRatio="none"
      >
        <path d="M0,80 Q720,260 1440,80 L1440,0 L0,0 Z" fill="#ff8000" />
        <path d="M0,140 Q720,320 1440,140" stroke="#ff8000" strokeWidth="1" fill="none" />
        <path d="M0,200 Q720,380 1440,200" stroke="#ff8000" strokeWidth="1" fill="none" />
      </svg>

      {/* horizontal HUD lines */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-papaya/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-papaya/30 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeading
          sectorNumber={1}
          kicker="DRIVER PROFILE · INT/EXT"
          title="The Driver"
          subtitle="The engineer behind the wheel — background, focus areas, and what powers the system."
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
          {/* Left – bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <p className="text-lg md:text-xl text-f1-white leading-relaxed">
              I&apos;m <span className="text-papaya font-semibold">Mann Patel</span>,
              a Computer Science student at the University of Alberta who builds software
              the way an engineering team prepares a race car — every component tuned,
              every system measured, every detail intentional.
            </p>
            <p className="text-grey leading-relaxed">
              My work sits at the intersection of <span className="text-f1-white">backend systems, AI, and data</span>.
              I care about writing code that performs under pressure: APIs that scale,
              databases that stay consistent, and retrieval pipelines that deliver the
              right information at the right time.
            </p>
            <p className="text-grey leading-relaxed">
              I&apos;m not here to collect technologies — I&apos;m here to engineer
              solutions. Whether it&apos;s a career platform, an AI retrieval system, or
              a backend service, I approach every project with the discipline of a pit
              crew and the curiosity of a driver pushing for the next lap.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {focusAreas.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="group relative border border-white/10 bg-carbon/60 backdrop-blur-sm px-4 py-3 hover:border-papaya/60 transition-colors"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-papaya/0 group-hover:bg-papaya transition-colors" />
                  <div className="flex items-baseline justify-between">
                    <span className="text-f1-white font-display font-bold text-sm uppercase tracking-wide">
                      {f.label}
                    </span>
                    <span className="font-mono text-[10px] text-papaya">{f.stat}</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-grey uppercase mt-0.5">
                    {f.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – driver stat card (cockpit HUD style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative"
          >
            <div className="relative diagonal-cut border border-papaya/30 bg-asphalt/80 backdrop-blur-md p-6 scan-line overflow-hidden">
              {/* header */}
              <div className="flex items-center justify-between border-b border-papaya/20 pb-3 mb-4">
                <span className="font-display font-black text-lg text-papaya tracking-widest">
                  DRIVER · ID 81
                </span>
                <span className="font-mono text-[10px] tracking-widest text-grey">
                  ROW 01 · GRID
                </span>
              </div>

              {/* row data */}
              {[
                { k: 'NAME', v: 'Mann Patel' },
                { k: 'ROLE', v: 'Software Engineer' },
                { k: 'TEAM', v: 'University of Alberta' },
                { k: 'SPEC', v: 'CS · AI · Backend' },
                { k: 'STATUS', v: 'Open to Internships 2026' },
                { k: 'BASE', v: 'Edmonton, AB, Canada' },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-grey uppercase">
                    {r.k}
                  </span>
                  <span className="font-display font-bold text-f1-white text-sm tracking-wide">
                    {r.v}
                  </span>
                </div>
              ))}

              {/* footer stats */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-papaya/20">
                {[
                  { k: 'PB', v: '04' },
                  { k: 'WINS', v: '12' },
                  { k: 'PODS', v: '99%' },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <div className="font-display font-black text-2xl text-papaya text-glow">
                      {s.v}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.25em] text-grey uppercase mt-0.5">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-3 left-4 right-4 h-1 bg-papaya/50 blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
