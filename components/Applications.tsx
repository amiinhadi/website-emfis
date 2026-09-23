import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

type ApplicationTheme = 'sky' | 'cyan' | 'violet'

type Application = {
  tag: string
  title: string
  description: string
  theme: ApplicationTheme
}

const applicationsData: Application[] = [
  {
    tag: '132',
    title: '132kV System Modeling',
    description:
      'High-voltage transmission line EMF assessment, clearance verification, and regional grid planning.',
    theme: 'sky',
  },
  {
    tag: '275',
    title: '275kV System Modeling',
    description:
      'Advanced electric and magnetic field studies for high-capacity transmission corridors.',
    theme: 'cyan',
  },
  {
    tag: 'QC',
    title: 'Quadruple Circuit Analysis',
    description:
      'Multi-circuit transmission structure analysis, bundled system evaluation, and field distribution.',
    theme: 'violet',
  },
]

const themeStyles: Record<
  ApplicationTheme,
  {
    accent: string
    tagBg: string
    tagText: string
    borderHover: string
    glow: string
  }
> = {
  sky: {
    accent: 'from-sky-400 via-sky-500 to-transparent',
    tagBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    tagText: 'text-sky-300',
    borderHover: 'group-hover:border-sky-400/50',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)]',
  },
  cyan: {
    accent: 'from-cyan-400 via-cyan-500 to-transparent',
    tagBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    tagText: 'text-cyan-300',
    borderHover: 'group-hover:border-cyan-400/50',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]',
  },
  violet: {
    accent: 'from-violet-400 via-violet-500 to-transparent',
    tagBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    tagText: 'text-violet-300',
    borderHover: 'group-hover:border-violet-400/50',
    glow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(167,139,250,0.35)]',
  },
}

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative scroll-mt-20 overflow-hidden bg-[#0a0f1d] py-16 md:scroll-mt-20 md:py-20"
    >
      {/* Soft depth accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.10)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 z-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148,163,184,0.9) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollAnimation>
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 shadow-[0_0_24px_rgba(56,189,248,0.15)] sm:gap-2.5 sm:px-4 sm:py-1.5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-sky-400" />
              </span>
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-200 sm:text-xs sm:tracking-[0.25em]">
                Supported Transmission Configurations
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Designed for exact transmission classes
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
              Professional software for electric and magnetic field analysis
              across standard voltage levels.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative z-10 mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {applicationsData.map((application) => {
            const styles = themeStyles[application.theme]

            return (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d1527]/60 p-5 backdrop-blur-xl transition-colors duration-300 md:p-6 ${styles.borderHover} ${styles.glow}`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r ${styles.accent} transition-transform duration-500 ease-out group-hover:scale-x-100`}
                />

                {/* Inline Header: Original Tag Box + Title */}
                <div className="mb-3 flex items-center gap-3.5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${styles.tagBg}`}
                  >
                    <span
                      className={`text-base font-semibold tracking-tight ${styles.tagText}`}
                    >
                      {application.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-white">
                    {application.title}
                  </h3>
                </div>

                <p className="text-sm font-normal leading-relaxed text-slate-400">
                  {application.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
