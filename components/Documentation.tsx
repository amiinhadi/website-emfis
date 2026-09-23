'use client'

import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="relative mx-auto max-w-7xl scroll-mt-16 px-6 py-16 md:scroll-mt-40"
    >
      <ScrollAnimation>
        <div className="space-y-4 text-center">
          <span className="text-sm uppercase tracking-[0.32em] text-sky-300">
            See EMFIS In Action
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            See EMFIS In Action
          </h2>
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
  )
}
