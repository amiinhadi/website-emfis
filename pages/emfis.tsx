import Layout from '../components/Layout'
import Link from 'next/link'

export default function EMFIS(){
  return (
    <Layout>
      <section className="relative overflow-hidden rounded-[40px] bg-slate-950/80 border border-white/10 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_right,_rgba(99,150,255,0.25),_transparent_30%)]" />
        <div className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-sky-300">
              EMFIS product spotlight
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl sm:text-6xl font-semibold leading-[0.95] text-white">
                Electromagnetic Field Analysis Software for High Voltage Transmission Systems
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Professional electric and magnetic field analysis for high-voltage transmission systems.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(56,139,253,0.24)] transition duration-300 hover:-translate-y-0.5">
                Request a demo
              </Link>
              <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/10">
                Back to Solvex
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[32px] p-6 sm:p-8">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Dashboard</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Live</span>
              </div>
              <div className="mt-6 rounded-[28px] bg-slate-900/90 p-6">
                <div className="h-64 rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-4 border border-white/10">
                    <div className="h-3 w-20 rounded-full bg-slate-800" />
                    <div className="mt-4 h-3 w-16 rounded-full bg-slate-800" />
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 border border-white/10">
                    <div className="h-3 w-24 rounded-full bg-slate-800" />
                    <div className="mt-4 h-3 w-10 rounded-full bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 top-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="glass-card p-8 space-y-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300">
            <span className="text-xl">⚡</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">High-voltage precision</h2>
          <p className="text-slate-300 leading-7">Targeted analysis built for transmission networks, not generic simulations.</p>
        </div>
        <div className="glass-card p-8 space-y-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
            <span className="text-xl">📈</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Clear performance insight</h2>
          <p className="text-slate-300 leading-7">Turn field metrics into decision-ready models with fast, polished visuals.</p>
        </div>
        <div className="glass-card p-8 space-y-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
            <span className="text-xl">🛡️</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Enterprise ready</h2>
          <p className="text-slate-300 leading-7">Secure workflows and modern interfaces for engineering and operations teams.</p>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-card p-10">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300">Supported Transmission Configurations</span>
            <h2 className="text-3xl font-semibold text-white">Designed for the exact voltage classes you rely on</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="glass-card p-6 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300">
                <span className="text-xl">132</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">132kV</h3>
              <p className="mt-4 text-slate-300 leading-7">Precise field analysis for regional transmission corridors and substation design.</p>
            </div>
            <div className="glass-card p-6 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
                <span className="text-xl">275</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">275kV</h3>
              <p className="mt-4 text-slate-300 leading-7">Engineered for high-capacity networks and large-scale transmission planning.</p>
            </div>
            <div className="glass-card p-6 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                <span className="text-xl">QC</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">Quadruple Circuit</h3>
              <p className="mt-4 text-slate-300 leading-7">Advanced support for complex multi-circuit configurations and load analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="glass-card p-10">
          <span className="text-sm uppercase tracking-[0.32em] text-sky-300">Screenshot showcase</span>
          <h2 className="mt-5 text-3xl font-semibold text-white">See EMFIS in a refined product experience</h2>
          <p className="mt-4 text-slate-300 leading-7">A polished interface for modeling, review, and field insight without the clutter.</p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
          <div className="relative h-[420px] rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6">
            <div className="h-full rounded-[28px] bg-slate-900/95 border border-white/10 p-5">
              <div className="flex items-center justify-between text-slate-400">
                <div className="h-3 w-24 rounded-full bg-slate-800" />
                <div className="h-3 w-16 rounded-full bg-slate-800" />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="h-32 rounded-[24px] bg-gradient-to-br from-sky-500/15 to-blue-500/5" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-24 rounded-[24px] bg-slate-800" />
                  <div className="h-24 rounded-[24px] bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-gradient-to-r from-slate-950/80 via-slate-950/70 to-slate-950/80 border border-white/10 rounded-[36px] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div className="space-y-5">
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300">Why EMFIS</span>
            <h2 className="text-4xl font-semibold text-white">Professional electric and magnetic field analysis for high-voltage transmission networks.</h2>
            <p className="max-w-xl text-slate-300 leading-8">EMFIS is built for product-focused teams who need speed, clarity, and confidence in complex grid environments.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white">Focused workflows</h3>
              <p className="mt-3 text-slate-300 leading-7">Everything feels purposeful and fast, from modeling to review.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white">Polished controls</h3>
              <p className="mt-3 text-slate-300 leading-7">Smooth interactions and premium spacing deliver a modern SaaS feel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[36px] border border-white/10 bg-gradient-to-r from-slate-950/80 to-slate-900/80 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.16)]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Get started</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Experience EMFIS with a dedicated demo</h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5">
              Book a demo
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/10">
              Explore Solvex
            </Link>
          </div>
        </div>
      </section>

      <p className="mt-10 text-center text-sm text-slate-500">Electromagnetic Field Analysis Software for High Voltage Transmission Systems — developed by Solvex Integrated Solutions.</p>
    </Layout>
  )
}
