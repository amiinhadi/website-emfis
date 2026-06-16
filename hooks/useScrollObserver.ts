import { useEffect, useState } from 'react'

export function useScrollObserver() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Track scroll position for navbar glassmorphism
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Detect active section
      const sections = ['features', 'configurations', 'workflow', 'showcase', 'why', 'contact']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { activeSection, isScrolled }
}
