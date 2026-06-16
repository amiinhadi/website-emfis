'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollObserver } from '../hooks/useScrollObserver'

const navLinks = [
  { href: '/#features', label: 'Features', id: 'features' },
  { href: '/#configurations', label: 'Applications', id: 'configurations' },
  { href: '/#workflow', label: 'Workflow', id: 'workflow' },
  { href: '/#showcase', label: 'Documentation', id: 'showcase' },
  { href: '/contact', label: 'Contact', id: 'contact' }
]

export default function Header() {
  const pathname = usePathname()
  const { activeSection, isScrolled } = useScrollObserver()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/' || !href.startsWith('/#')) {
      return
    }

    e.preventDefault()
    const targetId = href.replace('/#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-[96px] transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/60 border-b border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-slate-950/40 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 text-white flex-shrink-0">
          <Image
            src="/Logo EMFIS.png"
            alt="EMFIS logo"
            width={160}
            height={42}
            className="h-[42px] w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative px-4 py-2 transition-all duration-300 group ${
                  isActive
                    ? 'text-white font-medium'
                    : 'hover:text-white'
                }`}
                style={
                  isActive
                    ? {
                        textShadow: '0 0 20px rgba(56, 139, 253, 0.5)'
                      }
                    : {}
                }
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 origin-left group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                  style={
                    isActive || true
                      ? {
                          boxShadow: 'isActive ? 0 0 12px rgba(56, 139, 253, 0.6) : none'
                        }
                      : {}
                  }
                />
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(56,139,253,0.3)] hover:shadow-[0_12px_32px_rgba(56,139,253,0.4)] flex-shrink-0"
        >
          Request Demo
        </Link>
      </div>
    </header>
  )
}
