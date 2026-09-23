'use client'

import { type LucideIcon, Zap, Magnet, Activity, Cpu, Layers, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

type FeatureTheme = 'sky' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'emerald'

type Feature = {
  title: string
  description: string
  icon: LucideIcon
  theme: FeatureTheme
}

const featuresData: Feature[] = [
  {
    title: 'Electric Field Modeling',
    description:
      'High-voltage field modeling for conductor geometry, insulation planning and clearance verification.',
    icon: Zap,
    theme: 'sky',
  },
  {
    title: 'Magnetic Field Assessment',
    description:
      'Magnetic field evaluation for circuits, grounding and nearby infrastructure impact.',
    icon: Magnet,
    theme: 'cyan',
  },
  {
    title: '132kV System Modeling',
    description:
      'Dedicated support for 132kV transmission corridors, regional planning and design verification.',
    icon: Activity,
    theme: 'blue',
  },
  {
    title: '275kV Engineering Workflows',
    description:
      'Optimized for high-capacity transmission line studies and utility network analysis.',
    icon: Cpu,
    theme: 'indigo',
  },
  {
    title: 'Quadruple Circuit Analysis',
    description:
      'Analyze bundled and multi-circuit systems with precise field distribution insight.',
    icon: Layers,
    theme: 'violet',
  },
  {
    title: 'Technical Reporting',
    description:
      'Generate engineering-ready reports with field diagrams, results and compliance notes.',
    icon: FileText,
    theme: 'emerald',
  },
]

const themeStyles: Record<
  FeatureTheme,
  {
    accent: string
    iconBg: string
    iconText: string
    borderHover: string
    glow: string
  }
> = {
  sky: {
    accent: 'from-sky-400 via-sky-500 to-transparent',
    iconBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    iconText: 'text-sky-300',
    borderHover: 'group-hover:border-sky-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)]',
  },
  cyan: {
    accent: 'from-cyan-400 via-cyan-500 to-transparent',
    iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    iconText: 'text-cyan-300',
    borderHover: 'group-hover:border-cyan-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]',
  },
  blue: {
    accent: 'from-blue-400 via-blue-500 to-transparent',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    iconText: 'text-blue-300',
    borderHover: 'group-hover:border-blue-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(96,165,250,0.35)]',
  },
  indigo: {
    accent: 'from-indigo-400 via-indigo-500 to-transparent',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    iconText: 'text-indigo-300',
    borderHover: 'group-hover:border-indigo-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(129,140,248,0.35)]',
  },
  violet: {
    accent: 'from-violet-400 via-violet-500 to-transparent',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    iconText: 'text-violet-300',
    borderHover: 'group-hover:border-violet-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(167,139,250,0.35)]',
  },
  emerald: {
    accent: 'from-emerald-400 via-emerald-500 to-transparent',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconText: 'text-emerald-300',
    borderHover: 'group-hover:border-emerald-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(52,211,153,0.35)]',
  },
}

// Fixed initial position helper (Prevents disappeared cards on mobile)
const getInitialPosition = (index: number, isDesktop: boolean) => {
  if (isDesktop) {
    const isTopRow = index < 3
    return { opacity: 0, x: isTopRow ? -120 : 120, y: 0 }
  }

  // Mobile: Use exact 40px offsets so cards sit just at the screen border
  const isEven = index % 2 === 0
  return { opacity: 0, x: isEven ? -40 : 40, y: 0 }
}

export default function Features() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    setReady(true)
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <section
      id="features"
      className="relative scroll-mt-20 overflow-hidden bg-[#0a0f1d] py-16 md:scroll-mt-20 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollAnimation>
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 shadow-[0_0_24px_rgba(56,189,248,0.15)] sm:gap-2.5 sm:px-4 sm:py-1.5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-sky-400" />
              </span>
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-200 sm:text-xs sm:tracking-[0.25em]">
                Built for Transmission Line Engineers
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Purpose-built for transmission engineering
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-sm md:text-base">
              Professional software for electric and magnetic field analysis of
              high-voltage transmission systems.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {ready &&
            featuresData.map((feature, idx) => {
              const Icon = feature.icon
              const styles = themeStyles[feature.theme]

              return (
                <motion.div
                  key={`${feature.title}-${isDesktop ? 'lg' : 'sm'}`}
                  initial={getInitialPosition(idx, isDesktop)}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{
                    duration: 0.4,
                    ease: 'linear',
                    delay: isDesktop ? (idx % 3) * 0.07 : (idx % 2) * 0.06,
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform, opacity' }}
                  className="group relative overflow-hidden rounded-2xl border border-sky-400/40 bg-[#0d1527]/80 p-5 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl transition-all duration-300 md:border-slate-800 md:p-6 md:shadow-none md:hover:border-sky-400/50 md:hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                >
                  {/* Mobile: Always active top line | Desktop: Hover active */}
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[2px] origin-left scale-x-100 bg-gradient-to-r opacity-100 transition-all duration-500 ease-out md:scale-x-0 md:opacity-0 md:group-hover:scale-x-100 md:group-hover:opacity-100 ${styles.accent}`}
                  />

                  {/* Inline Header: Original Icon Box + Title */}
                  <div className="mb-3 flex items-center gap-3.5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${styles.iconBg}`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110 ${styles.iconText}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm font-normal leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
        </div>
      </div>
    </section>
  )
}