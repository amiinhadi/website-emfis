'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function WhyAndCTA() {
  const whyItems = [
    {
      title: 'Accurate Calculations',
      desc: 'Trusted field models with exacting precision.',
    },
    {
      title: 'Engineering Focused',
      desc: 'Built specifically for transmission line professionals.',
    },
    {
      title: 'Fast Analysis',
      desc: 'Quick results for complex electromagnetic studies.',
    },
    {
      title: 'Professional Reporting',
      desc: 'Presentation-ready output for stakeholders.',
    },
  ]

  return (
    <section
      id="why"
      className="relative scroll-mt-20 overflow-hidden bg-[#0a0f1d] py-16 md:py-20"
    >
      {/* Background Seamless Layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[140px]" />
        <div className="absolute left-1/2 top-3/4 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute inset-0 h-full w-full opacity-[0.05]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="seamless_dot_grid"
                x="0"
                y="0"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seamless_dot_grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 px-6 md:space-y-28">
        {/* Why header + cards (tight spacing) */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-3xl flex-col items-center space-y-5 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/15 px-3.5 py-1.5 shadow-[0_0_24px_rgba(56,189,248,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-sky-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                Why EMFIS
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Why Choose EMFIS?
            </h2>
          </motion.div>

          {/* Animated Grid Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className="group relative overflow-hidden rounded-2xl border border-sky-400/20 bg-[#0d1527]/80 p-8 text-center shadow-[0_0_25px_rgba(56,189,248,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
              >
                {/* Neon Top Line Effect */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80 transition-opacity group-hover:opacity-100"
                />
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0a1020] via-[#0d1527] to-[#111b33] p-12 text-center shadow-[0_0_60px_-15px_rgba(56,189,248,0.15)] backdrop-blur-sm"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent"
          />
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Ready to validate your transmission lines?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Get in touch with our team to request a demo or discuss your
            engineering requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Request Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
