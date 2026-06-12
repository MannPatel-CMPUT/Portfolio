import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const links = [
  { label: 'Pit Radio', sub: 'mannpatel@example.com', href: 'mailto:mannpatel@example.com', tag: 'EMAIL' },
  { label: 'Team Roster', sub: 'github.com/MannPatel-CMPUT', href: 'https://github.com/MannPatel-CMPUT', tag: 'GITHUB' },
  { label: 'Engineer Net', sub: 'linkedin.com/in/mannpatel', href: 'https://linkedin.com', tag: 'LINKEDIN' },
]

/**
 * Contact = pit wall radio.
 * Background: chequered flag corners + walkie panel + animated radio waveform.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-asphalt" />
      {/* chequered corners */}
      <div className="absolute top-0 left-0 w-32 h-32 checker opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 checker opacity-30" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-papaya/10 blur-[160px] rounded-full" />

      {/* kerb stripe */}
      <div className="absolute top-1/2 left-0 right-0 h-1 kerb-papaya opacity-25 -translate-y-32" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        <SectionHeading
          sectorNumber={5}
          kicker="PIT WALL · CHANNEL 81"
          title="Pit Radio"
          subtitle="Engineer to driver — open the channel. Ready to collaborate on something high-performance?"
          align="center"
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-stretch">
          {/* Radio panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="diagonal-cut border border-papaya/30 bg-carbon/80 backdrop-blur p-6"
          >
            <div className="flex items-center justify-between border-b border-papaya/20 pb-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.25em] text-papaya uppercase">
                ◉ LIVE · CH-81
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
                COMMS · OPEN
              </span>
            </div>

            {/* waveform */}
            <div className="flex items-center justify-center gap-[3px] h-20 mb-4">
              {Array.from({ length: 56 }).map((_, i) => {
                const seed = Math.sin(i * 1.7) * Math.cos(i * 0.6)
                const h = 18 + Math.abs(seed) * 60
                return (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-papaya rpm-bar"
                    style={{
                      height: `${h}%`,
                      opacity: 0.5 + Math.abs(seed) * 0.5,
                      animationDelay: `${i * 0.04}s`,
                      animationDuration: `${0.6 + (i % 5) * 0.1}s`,
                    }}
                  />
                )
              })}
            </div>

            <div className="font-mono text-[11px] text-grey leading-relaxed border border-white/10 bg-background/40 px-3 py-3">
              <div className="text-papaya mb-1">[ENGINEER → DRIVER]</div>
              <p>
                &quot;Mann, box this lap — internships, co-op roles, and engineering
                collabs available. Need someone who thinks in systems and ships with
                precision. Channel&apos;s open. Over.&quot;
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[9px] tracking-widest text-grey uppercase">
              <div className="border border-white/10 px-2 py-1.5 text-center">
                <span className="block text-papaya">RSSI</span>
                STRONG
              </div>
              <div className="border border-white/10 px-2 py-1.5 text-center">
                <span className="block text-papaya">BAND</span>
                UHF-81
              </div>
              <div className="border border-white/10 px-2 py-1.5 text-center">
                <span className="block text-papaya">CRYPTO</span>
                AES-256
              </div>
            </div>
          </motion.div>

          {/* contact buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {links.map((l) => (
              <a
                key={l.label}
                data-testid={`contact-${l.tag.toLowerCase()}`}
                href={l.href}
                target={l.tag === 'EMAIL' ? undefined : '_blank'}
                rel={l.tag === 'EMAIL' ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between border border-white/10 bg-carbon/60 hover:bg-carbon hover:border-papaya/60 transition-colors p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 border border-papaya/40 text-papaya font-display font-black text-xs tracking-wider group-hover:bg-papaya group-hover:text-background transition-colors">
                    {l.tag.slice(0, 2)}
                  </span>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] text-grey uppercase">
                      {l.tag}
                    </div>
                    <div className="font-display font-bold text-xl text-f1-white uppercase tracking-wide group-hover:text-papaya transition-colors">
                      {l.label}
                    </div>
                    <div className="font-mono text-xs text-grey mt-0.5">{l.sub}</div>
                  </div>
                </div>
                <span className="font-display font-black text-2xl text-papaya group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            ))}

            <a
              data-testid="contact-email-cta"
              href="mailto:mannpatel@example.com"
              className="block text-center bg-papaya hover:bg-soft-orange text-background font-display font-black text-base tracking-[0.2em] uppercase py-4 diagonal-cut glow-papaya transition-colors"
            >
              Open Channel · Email Mann →
            </a>
          </motion.div>
        </div>

        {/* Final stat line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] tracking-[0.25em] text-grey uppercase"
        >
          <span><span className="text-papaya">●</span> SEASON · 2026</span>
          <span className="text-dim-grey">|</span>
          <span>HQ · EDMONTON · AB</span>
          <span className="text-dim-grey">|</span>
          <span>STATUS · OPEN TO INTERNSHIPS</span>
        </motion.div>
      </div>
    </section>
  )
}
