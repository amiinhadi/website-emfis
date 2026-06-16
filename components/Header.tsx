'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollObserver } from '../hooks/useScrollObserver'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/60 border-b border-white/10 backdrop-blur-xl'
          : 'bg-slate-950/40 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[96px] flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Logo EMFIS.png"
            alt="EMFIS logo"
            width={160}
            height={42}
            className="h-[42px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`transition ${
                activeSection === link.id
                  ? 'text-white'
                  : 'hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Request Demo
          </Link>

          <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden text-white text-3xl"
>
  {mobileMenuOpen ? <HiX /> : <HiMenu />}
</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[96px] left-0 right-0 bg-slate-950 border-t border-white/10 z-50">
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-white border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}

            
          </div>
        </div>
      )}
    </header>
  )
}