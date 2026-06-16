import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-8 text-slate-300">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white">Contact Us</h1>
            <p className="text-lg leading-8 text-slate-300">
              Get in touch for a demo, licensing or support.
            </p>
          </div>

          <form className="mt-10 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Name</label>
              <input className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Email</label>
              <input className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Message</label>
              <textarea className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10" rows={6} />
            </div>
            <div>
              <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-base font-semibold text-white shadow-[0_14px_40px_rgba(56,139,253,0.25)] transition duration-300 hover:-translate-y-0.5">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
