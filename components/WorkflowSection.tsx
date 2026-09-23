'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Select Configuration',
    description:
      'Choose the transmission system to be analyzed: 132kV, 275kV or Quadruple Circuit.',
  },
  {
    number: '02',
    title: 'Define Geometry',
    description:
      'Configure tower geometry, conductor arrangement, phase spacing and line parameters.',
  },
  {
    number: '03',
    title: 'Run Simulation',
    description:
      'Execute electric field and magnetic field calculations using the EMFIS computation engine.',
  },
  {
    number: '04',
    title: 'Visualize Results',
    description:
      'View field distribution, contour mapping and graphical analysis outputs.',
  },
  {
    number: '05',
    title: 'Engineering Assessment',
    description:
      'Review calculated results and identify critical electromagnetic field zones.',
  },
  {
    number: '06',
    title: 'Generate Reports',
    description:
      'Export professional engineering reports with figures, calculations and project documentation.',
  },
]

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-20 overflow-hidden bg-[#0a0f1d] py-10 md:scroll-mt-20 md:py-16"
    >
      {/* CSS Animation Keyframes for Laser Flow */}
      <style>{`
        @keyframes laserFlow1 {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 1; }
          40% { transform: translateX(100%); opacity: 1; }
          45% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes laserFlow2 {
          0% { transform: translateX(-100%); opacity: 0; }
          45% { transform: translateX(-100%); opacity: 0; }
          60% { opacity: 1; }
          85% { transform: translateX(100%); opacity: 1; }
          90% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-laser-row1 {
          animation: laserFlow1 4s linear infinite;
        }
        .animate-laser-row2 {
          animation: laserFlow2 4s linear infinite;
        }
      `}</style>

      {/* ==================== ELEGANT CORNER TECH BACKGROUNDS ==================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Ambient Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[160px]" />

        {/* Subtle Dot Grid */}
        <div className="absolute inset-0 h-full w-full opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dot_grid_clean"
                x="0"
                y="0"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot_grid_clean)" />
          </svg>
        </div>

        {/* Subtle Engineering Circuit Pattern (behind cards) */}
        <div
          aria-hidden
          className="absolute inset-0 hidden opacity-[0.09] md:block"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="eng_circuit_traces"
                x="0"
                y="0"
                width="180"
                height="180"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40 H60 V100 H120 V140 H180 M40 0 V40 M120 100 V180 M90 70 H150"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                />
                <circle cx="60" cy="40" r="2" fill="#38bdf8" />
                <circle cx="120" cy="100" r="2" fill="#38bdf8" />
                <circle cx="90" cy="70" r="1.5" fill="#0ea5e9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eng_circuit_traces)" />
          </svg>
        </div>

        {/* TOP-LEFT CORNER CIRCUIT */}
        <svg
          className="absolute hidden h-80 w-80 text-sky-400 opacity-[0.12] md:left-0 md:top-0 md:block"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M0 40 H120 L160 80 V180 L220 240 H300"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M40 0 V90 L90 140 H200"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="160" cy="80" r="3" fill="currentColor" />
          <circle cx="90" cy="140" r="3" fill="currentColor" />
          <circle
            cx="220"
            cy="240"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* TOP-RIGHT CORNER CIRCUIT */}
        <svg
          className="absolute hidden h-80 w-80 scale-x-[-1] text-sky-400 opacity-[0.12] md:right-0 md:top-0 md:block"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M0 40 H120 L160 80 V180 L220 240 H300"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M40 0 V90 L90 140 H200"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="160" cy="80" r="3" fill="currentColor" />
          <circle cx="90" cy="140" r="3" fill="currentColor" />
        </svg>

        {/* BOTTOM-LEFT CORNER CIRCUIT */}
        <svg
          className="absolute bottom-0 left-0 h-80 w-80 scale-y-[-1] text-sky-400 opacity-[0.12]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M0 40 H120 L160 80 V180 L220 240 H300"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M40 0 V90 L90 140 H200"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="160" cy="80" r="3" fill="currentColor" />
        </svg>

        {/* BOTTOM-RIGHT CORNER CIRCUIT */}
        <svg
          className="absolute bottom-0 right-0 h-80 w-80 scale-x-[-1] scale-y-[-1] text-sky-400 opacity-[0.12]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M0 40 H120 L160 80 V180 L220 240 H300"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M40 0 V90 L90 140 H200"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="160" cy="80" r="3" fill="currentColor" />
        </svg>

        {/* ==================== MOBILE VERTICAL NEON FLOW ==================== */}
        <div className="absolute inset-0 h-full w-full md:hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="mobile-neon-gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
              <filter id="mobile-laser-blur">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 28 180 L 28 92%"
              fill="none"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="2"
            />

            <motion.path
              d="M 28 180 L 28 92%"
              fill="none"
              stroke="url(#mobile-neon-gradient)"
              strokeWidth="3"
              strokeDasharray="100 350"
              filter="url(#mobile-laser-blur)"
              animate={{ strokeDashoffset: [-450, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'linear',
              }}
            />
          </svg>
        </div>
      </div>

      {/* ==================== CONTENT CONTAINER ==================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section (With Background Mask to clear text area) */}
        <div className="relative mx-auto mb-12 flex max-w-3xl flex-col items-center space-y-5 px-4 text-center sm:px-6 md:mb-16">
          {/* Radial Mask to hide background patterns behind the text */}
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 rounded-full bg-[#0a0f1d]/90 blur-xl" />

          {/* Badge Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 shadow-[0_0_24px_rgba(56,189,248,0.15)] sm:gap-2.5 sm:px-4 sm:py-1.5">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-sky-400" />
            </span>
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-200 sm:text-xs sm:tracking-[0.25em]">
              How EMFIS Works
            </span>
          </div>

          {/* Main Section Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            EMFIS Workflow
          </h2>

          {/* Sub-heading Paragraph */}
          <p className="w-full max-w-md px-2 text-center text-sm leading-relaxed text-slate-400 sm:max-w-xl sm:text-sm md:text-base">
            From transmission line setup to professional engineering reporting.
          </p>
        </div>

        {/* ==================== DESKTOP GRID WITH CSS LASER FLOW TRACKS ==================== */}
        <div className="relative hidden grid-cols-3 gap-6 md:grid">
          {/* Track Line 1 (Row Atas: Kad 01 -> 03) */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[23%] z-0 h-[2px] overflow-hidden bg-sky-500/10">
            <div className="animate-laser-row1 h-full w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]" />
          </div>

          {/* Track Line 2 (Row Bawah: Kad 04 -> 06) */}
          <div className="pointer-events-none absolute bottom-[23%] left-[8%] right-[8%] z-0 h-[2px] overflow-hidden bg-sky-500/10">
            <div className="animate-laser-row2 h-full w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]" />
          </div>

          {/* Kad 01 - 06 */}
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative z-10 overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1527]/80 p-5 pb-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] md:p-6"
            >
              {/* Top Neon Line Accent */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              {/* Inline Header: Enlarged Badge (h-9 w-9) + Title */}
              <div className="mb-3 flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10 text-xs font-semibold text-sky-300">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm font-normal leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ==================== MOBILE SINGLE-EXPANSION STACK ==================== */}
        <div className="relative z-10 mx-auto max-w-sm space-y-5 px-2 md:hidden">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial="initial"
              whileInView="active"
              viewport={{ amount: 0.85, margin: '-150px 0px -150px 0px' }}
              variants={{
                initial: {
                  borderColor: 'rgba(30, 41, 59, 1)',
                  backgroundColor: 'rgba(13, 21, 39, 0.6)',
                  boxShadow: '0 0 0 rgba(56, 189, 248, 0)',
                },
                active: {
                  borderColor: 'rgba(56, 189, 248, 0.6)',
                  backgroundColor: 'rgba(13, 21, 39, 0.95)',
                  boxShadow: '0 0 25px rgba(56, 189, 248, 0.25)',
                },
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  active: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 top-0 h-[1.5px] rounded-t-2xl bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              />

              {/* Inline Header: Enlarged Badge (h-9 w-9) + Title */}
              <div className="mb-3 flex items-center gap-3.5">
                <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10 text-xs font-semibold text-sky-300">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              <motion.div
                variants={{
                  initial: { opacity: 0, height: 0, marginTop: 0 },
                  active: { opacity: 1, height: 'auto', marginTop: 12 },
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}