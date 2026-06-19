import Layout from '../components/Layout'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [successMessage, setSuccessMessage] = useState('')

const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    // Email kepada anda
    await emailjs.send(
      'service_j0zrql9',
      'template_r9tyvrh',
      {
        name,
        email,
        message,
      },
      'kjcjNoWw85U1Wl7IG'
    )

    // Auto reply kepada customer
    await emailjs.send(
      'service_j0zrql9',
      'template_snbxu4c',
      {
        name,
        email,
      },
      'kjcjNoWw85U1Wl7IG'
    )

    setSuccessMessage('Thank you for contacting EMFIS. Your message has been sent successfully.')
          setTimeout(() => {
    setSuccessMessage('')
    }, 3000)

    setName('')
    setEmail('')
    setMessage('')
  } catch (error) {
    console.error(error)
    setSuccessMessage('Failed to send message. Please try again.')
  }
}
  return (
    <Layout>
        <section className="mx-auto max-w-6xl px-6 pt-6 pb-16 md:px-12 md:pt-3 lg:px-16">
            {successMessage && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-center text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur-xl">
              {successMessage}
            </div>
          </div>
        )}
        <div className="mx-auto max-w-3xl space-y-8 text-slate-300">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white">Contact Us</h1>
            <p className="text-lg leading-8 text-slate-300">
              Get in touch for a demo, licensing or support.
            </p>
          </div>

          <form onSubmit={sendEmail} className="mt-10 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10"/>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10"/>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/10"/>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-base font-semibold text-white shadow-[0_14px_40px_rgba(56,139,253,0.25)] transition duration-300 hover:-translate-y-0.5">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
