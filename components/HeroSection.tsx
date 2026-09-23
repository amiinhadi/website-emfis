import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

type Node = { x: number; y: number }
type Edge = { from: number; to: number; length: number }
type Pulse = {
  edgeIndex: number
  progress: number
  speed: number
  hue: 'blue' | 'cyan' | 'purple'
}

type WaveConfig = {
  amplitude: number
  wavelength: number
  speed: number
  offsetY: number
  strokeStyle: string
  lineWidth: number
}

function buildMesh(width: number, height: number) {
  const nodes: Node[] = []
  const edges: Edge[] = []
  const cols = 8
  const rows = 9
  const paddingX = width * 0.06
  const paddingY = height * 0.08
  const cellW = (width - paddingX * 2) / (cols - 1)
  const cellH = (height - paddingY * 2) / (rows - 1)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const stagger = row % 2 === 0 ? 0 : cellW * 0.18
      nodes.push({
        x: paddingX + col * cellW + stagger,
        y: paddingY + row * cellH + Math.sin(col * 0.7 + row * 0.4) * 8
      })
    }
  }

  const indexAt = (row: number, col: number) => row * cols + col

  const addEdge = (from: number, to: number) => {
    if (from >= nodes.length || to >= nodes.length || from === to) {
      return
    }

    const duplicate = edges.some(
      (edge) =>
        (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from)
    )
    if (duplicate) {
      return
    }

    const dx = nodes[to].x - nodes[from].x
    const dy = nodes[to].y - nodes[from].y
    const length = Math.hypot(dx, dy)
    if (length < 12) {
      return
    }

    edges.push({ from, to, length })
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const current = indexAt(row, col)
      if (col < cols - 1) {
        addEdge(current, indexAt(row, col + 1))
      }
      if (row < rows - 1) {
        addEdge(current, indexAt(row + 1, col))
        if (col < cols - 1) {
          addEdge(current, indexAt(row + 1, col + 1))
        }
        if (col > 0) {
          addEdge(current, indexAt(row + 1, col - 1))
        }
      }
    }
  }

  return { nodes, edges }
}

function createPulses(edgeCount: number): Pulse[] {
  const pulses: Pulse[] = []
  const pulseCount = Math.min(edgeCount, 24)
  const hues: Pulse['hue'][] = ['blue', 'cyan', 'purple']

  for (let i = 0; i < pulseCount; i++) {
    pulses.push({
      edgeIndex: Math.floor(Math.random() * edgeCount),
      progress: Math.random(),
      speed: 0.0008 + Math.random() * 0.0016,
      hue: hues[Math.floor(Math.random() * hues.length)]
    })
  }

  return pulses
}

const waves: WaveConfig[] = [
  {
    amplitude: 32,
    wavelength: 0.008,
    speed: 0.01,
    offsetY: 0.28,
    strokeStyle: 'rgba(34, 211, 238, 0.18)',
    lineWidth: 1.4
  },
  {
    amplitude: 24,
    wavelength: 0.011,
    speed: 0.008,
    offsetY: 0.62,
    strokeStyle: 'rgba(168, 85, 247, 0.16)',
    lineWidth: 1.2
  },
  {
    amplitude: 18,
    wavelength: 0.014,
    speed: 0.012,
    offsetY: 0.82,
    strokeStyle: 'rgba(56, 189, 248, 0.14)',
    lineWidth: 1
  }
]

const contentVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 }
}

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' as const }
  })
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    let animationFrameId = 0
    let phase = 0
    let nodes: Node[] = []
    let edges: Edge[] = []
    let pulses: Pulse[] = []

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) {
        return
      }

      const rect = parent.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      canvas.style.width = `${Math.floor(rect.width)}px`
      canvas.style.height = `${Math.floor(rect.height)}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const mesh = buildMesh(rect.width, rect.height)
      nodes = mesh.nodes
      edges = mesh.edges
      pulses = createPulses(edges.length)
    }

    const drawSineWaves = (width: number, height: number, time: number) => {
      for (const wave of waves) {
        ctx.beginPath()

        const yBase = height * wave.offsetY
        for (let x = 0; x <= width; x += 3) {
          const y =
            yBase +
            Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.strokeStyle = wave.strokeStyle
        ctx.lineWidth = wave.lineWidth
        ctx.lineCap = 'round'
        ctx.stroke()
      }
    }

    const drawGrid = (time: number) => {
      for (const edge of edges) {
        const from = nodes[edge.from]
        const to = nodes[edge.to]
        const wave =
          Math.sin(time * 0.012 + edge.from * 0.25) * 4 +
          Math.cos(time * 0.01 + edge.to * 0.18) * 3

        const isPurple = (edge.from + edge.to) % 3 === 0
        ctx.beginPath()
        ctx.moveTo(from.x, from.y + wave * 0.2)
        ctx.lineTo(to.x, to.y - wave * 0.2)
        ctx.strokeStyle = isPurple
          ? 'rgba(168, 85, 247, 0.22)'
          : 'rgba(34, 211, 238, 0.2)'
        ctx.lineWidth = 1.1
        ctx.stroke()
      }

      for (const node of nodes) {
        const glow = 2 + Math.sin(time * 0.03 + node.x * 0.008) * 0.7
        const isPurple = Math.floor(node.x + node.y) % 4 === 0
        ctx.beginPath()
        ctx.arc(node.x, node.y, glow, 0, Math.PI * 2)
        ctx.fillStyle = isPurple
          ? 'rgba(192, 132, 252, 0.28)'
          : 'rgba(34, 211, 238, 0.3)'
        ctx.fill()
      }
    }

    const drawPulses = () => {
      const pulseColors: Record<Pulse['hue'], [string, string]> = {
        blue: ['rgba(56, 189, 248, 0.9)', 'rgba(56, 189, 248, 0)'],
        cyan: ['rgba(34, 211, 238, 0.95)', 'rgba(34, 211, 238, 0)'],
        purple: ['rgba(192, 132, 252, 0.9)', 'rgba(192, 132, 252, 0)']
      }

      for (const pulse of pulses) {
        const edge = edges[pulse.edgeIndex]
        if (!edge) {
          continue
        }

        const from = nodes[edge.from]
        const to = nodes[edge.to]
        const x = from.x + (to.x - from.x) * pulse.progress
        const y = from.y + (to.y - from.y) * pulse.progress
        const [core, fade] = pulseColors[pulse.hue]

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12)
        gradient.addColorStop(0, core)
        gradient.addColorStop(1, fade)

        ctx.beginPath()
        ctx.arc(x, y, 12, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 2.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(224, 242, 254, 0.95)'
        ctx.fill()

        pulse.progress += pulse.speed
        if (pulse.progress >= 1) {
          pulse.progress = 0
          pulse.edgeIndex = Math.floor(Math.random() * edges.length)
          pulse.speed = 0.0008 + Math.random() * 0.0016
        }
      }
    }

    const animate = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      ctx.clearRect(0, 0, width, height)
      drawSineWaves(width, height, phase)
      drawGrid(phase)
      drawPulses()

      phase += 1
      animationFrameId = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isMounted])

  const scrollToFeatures = () => {
    const target = document.getElementById('features')
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden bg-[#0a0f1d] min-h-screen w-full flex flex-col justify-center items-center">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
      <video
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover z-[-1]">
      <source src="/hero-bg3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0f1d] to-transparent" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 py-0 pt-20 text-center"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="mb-6 rounded-full border border-blue-800/40 bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-400"
          variants={fadeInUpVariants}
          custom={0.1}
        >
          EMFIS · High Voltage Transmission Systems
        </motion.span>

        <motion.div
          variants={fadeInUpVariants}
          custom={0.3}
        >
          <h1 className="text-5xl font-bold leading-[1.3] tracking-[-0.02em] text-white md:text-6xl md:leading-[1.35]">
            Electromagnetic{' '}
            <span className="text-cyan-400">Field Analysis Software</span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          custom={0.5}
        >
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-sm md:text-base">
          Your complete engineering toolkit to accurately simulate, analyze and optimize electromagnetic fields.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-row flex-wrap items-center justify-center gap-3"
          variants={fadeInUpVariants}
          custom={0.7}
        >
          <Link
            href="/request-demo"
            className="rounded-3xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
          >
            Request Demo
          </Link>
          <button
            type="button"
            onClick={scrollToFeatures}
            className="rounded-3xl border border-slate-700 px-5 py-2.5 text-sm font-medium tracking-wide text-slate-300 transition-all hover:bg-slate-800/50"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
