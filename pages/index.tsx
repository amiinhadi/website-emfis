import Layout from '../components/Layout'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import WorkflowSection from '../components/WorkflowSection'
import ScrollAnimation from '../components/ScrollAnimation'

export default function Home(){
  const [selectedTower, setSelectedTower] = useState('/user-interface.png')
  const [isChanging, setIsChanging] = useState(false)
  useEffect(() => {
  const resetTower = () => {
    setSelectedTower('/user-interface.png')
  }

  window.addEventListener('resetHome', resetTower)

  return () => {
    window.removeEventListener('resetHome', resetTower)
  }
}, [])
  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden -mt-[16px] bg-[radial-gradient(circle_at_top_left,_rgba(56,139,253,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(99,150,255,0.1),_transparent_32%),linear-gradient(180deg,_#031027_0%,_#020612_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(130deg,_rgba(56,139,253,0.12)_0%,_transparent_50%),linear-gradient(225deg,_rgba(56,139,253,0.08)_0%,_transparent_40%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-start px-6 pt-8 pb-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-sky-300 backdrop-blur-sm">
                EMFIS · High-voltage field analysis software
              </div>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Electromagnetic Field Analysis Software
              </h1>

              <div className="space-y-4 text-lg leading-8 text-slate-300 sm:text-xl">
                <p>for High Voltage Transmission Systems</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact"  
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-4 text-base font-semibold text-white shadow-[0_24px_80px_rgba(56,139,253,0.24)] transition duration-300 hover:-translate-y-0.5">
                      Request Demo
                </Link>
                <button
                      onClick={() => {
                  const element = document.getElementById('features')

                if (element) {
                  const y = element.getBoundingClientRect().top + window.pageYOffset -
                  80

                        window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                      })
                  }
           }}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/10">
                    Learn More
              </button>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center text-sm text-slate-300 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
              <button
                  onClick={() => {
                  setIsChanging(true)

                  setTimeout(() => {
                  setSelectedTower('/tower132.png')
                  setIsChanging(false)
                  }, 250)
                }}
                  className={`rounded-2xl py-3 transition ${
                  selectedTower === '/tower132.png'
                  ? 'bg-sky-500/20 text-white shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                  : 'bg-white/5 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                }`}
                >
                132kV     
              </button>

              <button
                  onClick={() => {
                  setIsChanging(true)

                  setTimeout(() => {
                  setSelectedTower('/tower275.png')
                  setIsChanging(false)
                  }, 250)
                }}
                  className={`rounded-2xl py-3 transition ${
                  selectedTower === '/tower275.png'
                  ? 'bg-sky-500/20 text-white shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                  : 'bg-white/5 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                  }`}
                  >
                  275kV
              </button>

              <button
                  onClick={() => {
                  setIsChanging(true)

                  setTimeout(() => {
                  setSelectedTower('/towerquad.png')
                  setIsChanging(false)
                  }, 250)
                }}
                  className={`rounded-2xl py-3 transition ${
                  selectedTower === '/towerquad.png'
                  ? 'bg-sky-500/20 text-white shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                  : 'bg-white/5 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(56,139,253,0.5)]'
                  }`}
                  >
                  Quadruple Circuit
              </button>
          </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl" />
                <div className="absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
                  <div className={`group relative mx-auto w-full max-w-[520px] rounded-[34px] border bg-slate-950/40 p-5 shadow-2xl transition-all duration-500 ease-out hover:scale-[1.04]
                        ${
                          isChanging
                              ? 'border-sky-400/70 shadow-[0_0_60px_rgba(56,139,253,0.5)]'
                              : 'border-cyan-300/20 shadow-cyan-950/30 hover:border-cyan-300/40 hover:shadow-cyan-500/20'
                        }`}
                  >
                  <div className="rounded-[28px] border border-slate-700/60 bg-[#050b1f] p-5">
                  <div className="mb-4 flex items-center justify-between rounded-[22px] border border-slate-700/70 bg-slate-900/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">EMFIS Terminal</span>
                    <span className="rounded-full bg-slate-800/90 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-white">
                      BETA
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-[24px] border border-slate-700/70 bg-slate-950 shadow-inner">
                    <Image
                        key={selectedTower}
                        src={selectedTower}
                        alt="Transmission Tower"
                        width={1100}
                        height={800}
                        className={`h-auto w-full object-contain transition-all duration-500 ease-out group-hover:scale-[1.03]
                        ${
                        isChanging
                            ? 'opacity-0 blur-md scale-95'
                            : 'opacity-100 blur-0 scale-100'
                        }`}
                        priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 right-8 rounded-full bg-sky-400/10 p-5 shadow-[0_0_120px_rgba(56,139,253,0.28)]" />
              <div className="absolute -bottom-8 left-8 rounded-full bg-cyan-400/10 p-5 shadow-[0_0_100px_rgba(56,214,255,0.18)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="features"  className="relative mx-auto max-w-7xl px-6 py-16 scroll-mt-16 md:scroll-mt-40">
        <ScrollAnimation>
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Built for Transmission Line Engineers</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">Purpose-built for transmission engineering</h2>
            <p className="max-w-2xl mx-auto text-slate-300 leading-8">
              Professional software for electric and magnetic field analysis of high-voltage transmission systems.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300 transition duration-300 group-hover:bg-sky-500/15">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Electric Field Modeling</h3>
              <p className="mt-3 text-slate-300 leading-7">High-voltage field modeling for conductor geometry, insulation planning and clearance verification.</p>
            </div>
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-500/15">
                <span className="text-xl">🧲</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Magnetic Field Assessment</h3>
              <p className="mt-3 text-slate-300 leading-7">Magnetic field evaluation for circuits, grounding and nearby infrastructure impact.</p>
            </div>
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300 transition duration-300 group-hover:bg-sky-500/15">
                <span className="text-xl">132</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">132kV System Modeling</h3>
              <p className="mt-3 text-slate-300 leading-7">Dedicated support for 132kV transmission corridors, regional planning and design verification.</p>
            </div>
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 transition duration-300 group-hover:bg-blue-500/15">
                <span className="text-xl">275</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">275kV Engineering Workflows</h3>
              <p className="mt-3 text-slate-300 leading-7">Optimized for high-capacity transmission line studies and utility network analysis.</p>
            </div>
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 transition duration-300 group-hover:bg-violet-500/15">
                <span className="text-xl">QC</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Quadruple Circuit Analysis</h3>
              <p className="mt-3 text-slate-300 leading-7">Analyze bundled and multi-circuit systems with precise field distribution insight.</p>
            </div>
            <div className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-500/10 text-slate-300 transition duration-300 group-hover:bg-slate-500/15">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Technical Reporting</h3>
              <p className="mt-3 text-slate-300 leading-7">Generate engineering-ready reports with field diagrams, results and compliance notes.</p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section id="configurations" className="relative mx-auto max-w-7xl px-6 py-16 scroll-mt-16 md:scroll-mt-40">
        <ScrollAnimation>
          <div className="space-y-4 text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300">Supported Transmission Configurations</span>
            <h2 className="text-4xl font-semibold tracking-tight text-white">Designed for exact transmission classes</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="glass-card p-8 border border-white/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300">
              <span className="text-xl">132</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">132kV</h3>
            <p className="mt-4 text-slate-300 leading-7">High-voltage transmission line EMF assessment.</p>
          </div>
          <div className="glass-card p-8 border border-white/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
              <span className="text-xl">275</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">275kV</h3>
            <p className="mt-4 text-slate-300 leading-7">Advanced electric and magnetic field studies.</p>
          </div>
          <div className="glass-card p-8 border border-white/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
              <span className="text-xl">QC</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Quadruple Circuit</h3>
            <p className="mt-4 text-slate-300 leading-7">Multi-circuit transmission structure analysis.</p>
          </div>
        </div>
        </ScrollAnimation>
      </section>

      <WorkflowSection />

      <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-16 scroll-mt-16 md:scroll-mt-40">
        <ScrollAnimation>
          <div className="space-y-4 text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300">See EMFIS In Action</span>
            <h2 className="text-4xl font-semibold text-white">See EMFIS In Action</h2>
          </div>
          <div className="relative mx-auto mt-12 flex w-full justify-center overflow-visible">
            <div className="group relative w-full max-w-[520px] rounded-[34px] border border-cyan-300/20 bg-slate-950/45 p-5 shadow-2xl shadow-cyan-950/40 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-3 hover:scale-[1.08] hover:border-cyan-300/50 hover:shadow-cyan-400/25">
              <div className="rounded-[28px] border border-slate-700/60 bg-[#050b1f] p-5">
                <div className="mb-4 flex items-center justify-between px-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    REPORT PREVIEW
                  </span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                    PDF
                  </span>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-inner shadow-slate-950/20">
                  <div className="aspect-[4/5] w-full bg-white">
                    <Image
                      src="/Report PDF.png"
                      alt="EMFIS report PDF preview"
                      width={900}
                      height={1300}
                      className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-24 scroll-mt-32">
        <ScrollAnimation>
          <div className="space-y-4 text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300">Why EMFIS</span>
            <h2 className="text-4xl font-semibold text-white">Why EMFIS</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card p-8 text-center">
            <p className="text-lg font-semibold text-white">Accurate Calculations</p>
            <p className="mt-4 text-slate-300 leading-7">Trusted field models with exacting precision.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <p className="text-lg font-semibold text-white">Engineering Focused</p>
            <p className="mt-4 text-slate-300 leading-7">Built specifically for transmission line professionals.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <p className="text-lg font-semibold text-white">Fast Analysis</p>
            <p className="mt-4 text-slate-300 leading-7">Quick results for complex electromagnetic studies.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <p className="text-lg font-semibold text-white">Professional Reporting</p>
            <p className="mt-4 text-slate-300 leading-7">Presentation-ready output for stakeholders.</p>
          </div>
        </div>
        </ScrollAnimation>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 scroll-mt-32 md:scroll-mt-32">
        <ScrollAnimation>
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-slate-950/95 to-slate-900/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Ready to validate your transmission field model?</p>
                <h2 className="text-4xl font-semibold text-white">Ready to validate your transmission field model?</h2>
                <p className="max-w-xl text-slate-300 leading-8">Schedule a technical demo or connect with our engineering team for high-voltage transmission analysis.</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5">
                  Request Demo
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </Layout>
  )
}