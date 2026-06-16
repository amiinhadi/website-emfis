'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Select Configuration',
    description: 'Choose the transmission system to be analyzed: 132kV, 275kV or Quadruple Circuit.'
  },
  {
    number: '02',
    title: 'Define Geometry',
    description: 'Configure tower geometry, conductor arrangement, phase spacing and line parameters.'
  },
  {
    number: '03',
    title: 'Run Simulation',
    description: 'Execute electric field and magnetic field calculations using the EMFIS computation engine.'
  },
  {
    number: '04',
    title: 'Visualize Results',
    description: 'View field distribution, contour mapping and graphical analysis outputs.'
  },
  {
    number: '05',
    title: 'Engineering Assessment',
    description: 'Review calculated results and identify critical electromagnetic field zones.'
  },
  {
    number: '06',
    title: 'Generate Reports',
    description: 'Export professional engineering reports with figures, calculations and project documentation.'
  }
]

const cardBaseClasses =
  'glass-card group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer h-[170px] p-5 flex flex-col items-center justify-center text-center gap-4'

export default function WorkflowSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="space-y-4 text-center mb-16">
        <span className="text-sm uppercase tracking-[0.32em] text-sky-300">
          How EMFIS Works
        </span>
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          EMFIS Workflow
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          From transmission line setup to professional engineering reporting.
        </p>
      </div>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Animated connector line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent">
            <div
              className={`h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{
                boxShadow: '0 0 20px rgba(56, 139, 253, 0.6)'
              }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(-1)}
                className={`transition-all duration-300 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 100}ms` : '0ms'
                }}
              >
                {/* Step card */}
                <div
                  className={`${cardBaseClasses} ${
                    activeStep === idx
                      ? 'h-[290px] border-sky-400/40 bg-slate-950/80 -translate-y-2'
                      : 'border-white/10 hover:-translate-y-1 hover:border-sky-400/20'
                  }`}
                  style={
                    activeStep === idx
                      ? {
                          boxShadow:
                            '0 0 30px rgba(56, 139, 253, 0.3), inset 0 0 30px rgba(56, 139, 253, 0.1)'
                        }
                      : {}
                  }
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                      activeStep === idx ? 'opacity-100' : 'group-hover:opacity-50'
                    }`}
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(56, 139, 253, 0.15), transparent 70%)'
                    }}
                  />

                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center gap-3">
                    {/* Number circle */}
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 ${
                        activeStep === idx
                          ? 'bg-sky-500/40 text-sky-200'
                          : 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20'
                      }`}
                      style={
                        activeStep === idx
                          ? {
                              boxShadow: '0 0 20px rgba(56, 139, 253, 0.5)'
                            }
                          : {}
                      }
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {step.title}
                    </h3>

                    {/* Description placeholder for alignment */}
                    <p
                      className={`text-xs text-slate-300 leading-relaxed max-w-[220px] overflow-hidden transition-all duration-300 ${
                        activeStep === idx
                          ? 'opacity-100 max-h-24 mt-2'
                          : 'opacity-0 max-h-0'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="md:hidden space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? `${idx * 100}ms` : '0ms'
            }}
          >
            <div className={`${cardBaseClasses} border-white/10 hover:border-sky-400/20`}>
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(56, 139, 253, 0.15), transparent 70%)'
                }}
              />

              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 font-semibold text-sm text-sky-400 group-hover:bg-sky-500/20 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-[220px] mx-auto opacity-0 max-h-0 overflow-hidden transition-all duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Connector line for mobile */}
            {idx < steps.length - 1 && (
              <div
                className={`h-6 w-0.5 bg-gradient-to-b from-sky-500/50 to-transparent mx-auto transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(idx + 1) * 100}ms` : '0ms'
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
