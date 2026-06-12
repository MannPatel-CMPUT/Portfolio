import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const links = [
  {
    label: 'Email',
    href: 'mailto:mannpatel@example.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'in',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'gh',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-carbon/30">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          title="Pit Wall Contact"
          subtitle="Ready to collaborate on something high-performance? Drop a line."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-carbon hover:border-papaya hover:glow-papaya transition-all duration-200"
            >
              <span className="font-mono text-xs text-papaya w-6 h-6 flex items-center justify-center rounded-full border border-papaya/30">
                {link.icon}
              </span>
              <span className="text-sm font-medium text-f1-white group-hover:text-papaya transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-papaya/20 bg-gradient-to-br from-carbon to-background p-8 md:p-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-papaya uppercase mb-4">
            Final Lap
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-f1-white mb-4">
            Let&apos;s build something high-performance.
          </h3>
          <p className="text-grey max-w-md mx-auto mb-6">
            I&apos;m open to internships, co-op roles, and engineering
            collaborations. If you need someone who thinks in systems and ships
            with precision — let&apos;s talk.
          </p>
          <a
            href="mailto:mannpatel@example.com"
            className="inline-block px-8 py-3 rounded-full bg-papaya text-background font-semibold text-sm hover:bg-soft-orange transition-colors glow-papaya"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
