import Layout from '../components/Layout'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
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

      await emailjs.send(
        'service_j0zrql9',
        'template_snbxu4c',
        {
          name,
          email,
        },
        'kjcjNoWw85U1Wl7IG'
      )

      setSuccessMessage(
        'Thank you for contacting EMFIS. Your message has been sent successfully.'
      )
      setTimeout(() => {
        setSuccessMessage('')
      }, 3000)

      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setSuccessMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden bg-[#0a0f1d] pb-20 pt-28 md:pb-28 md:pt-36">
        {/* Background Ambient Glows & Grid */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[160px]" />

          {/* Subtle Engineering Dot Grid */}
          <div className="absolute inset-0 h-full w-full opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="contact_dot_grid"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="#38bdf8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact_dot_grid)" />
            </svg>
          </div>
        </div>

        {successMessage && (
          <div className="fixed left-1/2 top-24 z-50 w-[90%] max-w-md -translate-x-1/2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-center text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur-xl">
              {successMessage}
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          {/* ==================== HEADER SECTION ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-10 space-y-4 text-center"
          >
            {/* Badge Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 shadow-[0_0_24px_rgba(56,189,248,0.15)] sm:gap-2.5 sm:px-4 sm:py-1.5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-sky-400" />
              </span>
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-sky-200 sm:text-xs sm:tracking-[0.25em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Contact Our Engineering Team
            </h1>

            <p className="mx-auto max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
              Have questions about EMFIS transmission field calculations or need
              a custom technical demo? Send us a message below.
            </p>
          </motion.div>

          {/* ==================== FORM CONTAINER CARD ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-800 bg-[#0d1527]/80 p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10"
          >
            {/* Top Subtle Neon Glow Bar */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-3xl bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

            {/* ==================== INSTRUCTION GUIDE BOX ==================== */}
            <div className="mb-8 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3 sm:p-3">
              <div className="flex items-start space-x-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <h4 className="font-semibold text-sky-200">
                    Request a Technical Demo
                  </h4>
                  <p className="leading-relaxed text-slate-400">
                    Fill in your details below and our team will get in touch with you.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== FORM INPUTS ==================== */}
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-slate-800 bg-[#0a0f1d]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 transition-all duration-300 focus:border-sky-400 focus:bg-[#0a0f1d] focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">
                    Work Email <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-800 bg-[#0a0f1d]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 transition-all duration-300 focus:border-sky-400 focus:bg-[#0a0f1d] focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">
                  Project / Message Details{' '}
                  <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-500" />
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry or transmission system modeling requirement..."
                    className="w-full rounded-xl border border-slate-800 bg-[#0a0f1d]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 transition-all duration-300 focus:border-sky-400 focus:bg-[#0a0f1d] focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
