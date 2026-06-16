import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-[#020b1f] border-t border-slate-800/80 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="rounded-[28px] border border-slate-700/50 bg-slate-950/40 p-8 backdrop-blur-sm">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                EMFIS
                <sup className="ml-1 align-super text-[10px] font-semibold tracking-normal text-white">TM</sup>
              </h2>
              <p className="max-w-md text-slate-300 leading-7">
                Electromagnetic Field Analysis Software for High Voltage Transmission Systems.
              </p>
              <p className="text-sm text-slate-500">Developed by Solvex Integrated Solutions</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Quick Links
              </h3>
              <nav className="mt-6 flex flex-col items-start gap-3 text-sm text-slate-300">
                <Link href="/#features" className="hover:text-white transition">Features</Link>
                <Link href="/#configurations" className="hover:text-white transition">Applications</Link>
                <Link href="/#workflow" className="hover:text-white transition">Workflow</Link>
                <Link href="/#showcase" className="hover:text-white transition">Documentation</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 EMFIS. All rights reserved.</span>
          <span>Designed for Power System Engineers</span>
        </div>
      </div>
    </footer>
  )
}
