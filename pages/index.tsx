import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import WorkflowSection from '../components/WorkflowSection'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Applications from '../components/Applications'
import Documentation from '../components/Documentation'
import Why from '../components/Why'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const scrollOffsets: Record<string, number> = {
      features: 75,
      applications: 75,
      workflow: 80,
      documentation: 80,
      why: 75,
    }

    const pathToSection: Record<string, string> = {
      features: 'features',
      applications: 'applications',
      workflow: 'workflow',
      documentation: 'documentation',
      contact: 'why',
    }

    const pathKey = router.asPath.replace(/^\//, '').split(/[?#]/)[0]
    const sectionParam =
      typeof router.query.section === 'string' ? router.query.section : null

    const sectionId =
      (sectionParam && pathToSection[sectionParam]
        ? pathToSection[sectionParam]
        : sectionParam) ?? pathToSection[pathKey]

    if (!sectionId) return

    const cleanPath =
      Object.entries(pathToSection).find(([, id]) => id === sectionId)?.[0] ??
      pathKey

    const timer = window.setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const offset = scrollOffsets[sectionId] ?? 80
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({ top: y, behavior: 'smooth' })
      // Keep clean path in the URL (no hash, no query)
      window.history.replaceState({}, '', `/${cleanPath}`)
    }, 80)

    return () => window.clearTimeout(timer)
  }, [router.isReady, router.asPath, router.query.section])

  return (
    <Layout>
      <HeroSection />

      <Features />

      <Applications />

      <WorkflowSection />

      <Documentation />

      <Why />
    </Layout>
  )
}
