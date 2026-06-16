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
  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    96

  window.scrollTo({
    top: y,
    behavior: 'smooth'
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

        <nav className="hidden md:flex items-center gap-2 text-slate-300 ml-auto mr-16">
          {navLinks.map((link) => (
            <Link
  key={link.id}
  href={link.href}
  onClick={(e) => handleSmoothScroll(e, link.href)}
  className={`relative px-4 py-2 transition-all duration-300 group ${
    activeSection === link.id
      ? 'text-white font-medium'
      : 'hover:text-white'
  }`}
>
  {link.label}

  <span
  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 ${
    activeSection === link.id
      ? 'opacity-100 scale-x-100'
      : 'opacity-0 scale-x-0 origin-center group-hover:opacity-100 group-hover:scale-x-100'
  }`}
/>
</Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(56,139,253,0.45)]"
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
          <div className="flex flex-col px-6 py-4">
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