import Link from 'next/link'
import { useRouter } from 'next/router'

const footerLinks = [
  { name: 'Features', path: '/features', sectionId: 'features' },
  { name: 'Applications', path: '/applications', sectionId: 'applications' },
  { name: 'Workflow', path: '/workflow', sectionId: 'workflow' },
  { name: 'Documentation', path: '/documentation', sectionId: 'documentation' },
  { name: 'Contact', path: '/contact', sectionId: 'why' },
]

export default function Footer() {
  const router = useRouter()
  const pathname = router.pathname

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    path: string
  ) => {
    if (pathname !== '/') {
      return
    }

    e.preventDefault()

    const element = document.getElementById(sectionId)
    if (!element) return

    const offsets: Record<string, number> = {
      features: 80,
      applications: 80,
      workflow: 80,
      documentation: 80,
      why: 75,
    }

    const offset = offsets[sectionId] ?? 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    window.history.pushState(null, '', path)
  }

  return (
    <footer className="bg-[#020b1f] border-t border-slate-800/80 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="rounded-[28px] border border-slate-700/50 bg-slate-950/40 p-8 backdrop-blur-sm">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                EMFIS
                <sup className="ml-1 align-super text-[10px] font-semibold tracking-normal text-white">
                  TM
                </sup>
              </h2>
              <p className="max-w-md leading-7 text-slate-300">
                Electromagnetic Field Analysis Software for High Voltage
                Transmission Systems.
              </p>
              <p className="text-sm text-slate-500">
                Designed for Power System Engineers
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Quick Links
              </h3>
              <nav className="mt-6 flex flex-col items-start gap-3 text-sm text-slate-300">
                {footerLinks.map((link) => (
                  <Link
                    key={link.sectionId}
                    href={link.path}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.sectionId, link.path)
                    }
                    className="transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 EMFIS. All rights reserved.</span>
          <span>Developed by Solvex Integrated Solutions</span>
        </div>
      </div>
    </footer>
  )
}
