import { useCallback, useEffect, useRef, useState } from 'react'

const SECTIONS = [
  'features',
  'applications',
  'workflow',
  'documentation',
  'why',
] as const

/** Distance from viewport top used to decide the active section */
const ACTIVE_LINE = 120

export function useScrollObserver() {
  const [activeSection, setActiveSectionState] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)
  const lockedUntilRef = useRef(0)

  const detectActiveSection = useCallback(() => {
    let current = ''

    for (const section of SECTIONS) {
      const element = document.getElementById(section)
      if (!element) continue

      const rect = element.getBoundingClientRect()
      if (rect.top <= ACTIVE_LINE) {
        current = section
      }
    }

    setActiveSectionState(current)
  }, [])

  const setActiveSection = useCallback((sectionId: string) => {
    setActiveSectionState(sectionId)
    // Ignore scroll-driven updates while smooth-scroll animation runs
    lockedUntilRef.current = Date.now() + 900
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      if (Date.now() < lockedUntilRef.current) return
      detectActiveSection()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [detectActiveSection])

  return { activeSection, setActiveSection, isScrolled }
}
