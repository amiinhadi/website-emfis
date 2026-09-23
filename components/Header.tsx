'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useScrollObserver } from '../hooks/useScrollObserver'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

type NavLink = {
  name: string
  path: string
  sectionId: string
}

const navLinks: NavLink[] = [
  { name: 'Features', path: '/features', sectionId: 'features' },
  { name: 'Applications', path: '/applications', sectionId: 'applications' },
  { name: 'Workflow', path: '/workflow', sectionId: 'workflow' },
  { name: 'Documentation', path: '/documentation', sectionId: 'documentation' },
  { name: 'Contact', path: '/contact', sectionId: 'why' },
]

const SCROLL_THRESHOLD = 10

/** Fixed navbar clearance for precise section landing */
const HEADER_OFFSET = 80

const getHeaderOffset = (sectionId: string) =>
  sectionId === 'features' ||
  sectionId === 'applications' ||
  sectionId === 'workflow' ||
  sectionId === 'why'
    ? 75
    : HEADER_OFFSET

export default function Header() {
  const router = useRouter()
  const pathname = router.pathname
  const { activeSection, setActiveSection } = useScrollObserver()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string, path: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerOffset = getHeaderOffset(sectionId)
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    setActiveSection(sectionId)
    // Update URL path without reload, hash, or 404
    window.history.pushState(null, '', path)
    setMobileMenuOpen(false)
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    // Homepage (including rewrite paths): smooth-scroll + pushState
    if (pathname === '/') {
      e.preventDefault()
      scrollToSection(link.sectionId, link.path)
      return
    }

    // Other real pages: let the Link navigate to the rewritten home path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-b border-slate-800/60 bg-[#0a0f1d]/80 py-4 shadow-lg backdrop-blur-md'
          : 'border-transparent bg-transparent py-6 shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()

              window.dispatchEvent(new Event('resetHome'))

              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })

              setActiveSection('')
              window.history.pushState(null, '', '/')
            }
          }}
        >
          <Image
            src="/Logo EMFIS.png"
            alt="EMFIS logo"
            width={160}
            height={42}
            className="h-[42px] w-auto"
            priority
          />
        </Link>

        <nav className="ml-auto mr-12 hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.sectionId}
              href={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className={`group relative px-2 py-1.5 text-sm transition-colors ${
                activeSection === link.sectionId
                  ? 'font-medium text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  activeSection === link.sectionId
                    ? 'scale-x-100 opacity-100'
                    : 'origin-center scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/request-demo"
            className="hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-3.5 py-2 text-sm font-semibold tracking-wide text-black shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] md:inline-flex"
          >
            Get Started
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-slate-300 md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-slate-800/60 bg-[#0a0f1d]/95 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col px-6 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.sectionId}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`border-b border-slate-800/60 py-2.5 text-sm transition-colors ${
                  activeSection === link.sectionId
                    ? 'font-medium text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/request-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-semibold tracking-wide text-slate-950 transition-all hover:bg-cyan-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
