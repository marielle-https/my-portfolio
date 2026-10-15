import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number }

/** Fixed, non-interactive digital network plus a few floating code fragments. */
export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let w = 0, h = 0, raf = 0, nodes: Node[] = []
    let rgb = '53,214,255', rgb2 = '22,139,255', alpha = 1
    const LINK = 150

    const readColors = () => {
      const s = getComputedStyle(document.documentElement)
      rgb = s.getPropertyValue('--node-rgb').trim() || rgb
      rgb2 = s.getPropertyValue('--node-rgb2').trim() || rgb2
      alpha = parseFloat(s.getPropertyValue('--node-alpha')) || 1
    }

    const seed = () => {
      const small = w < 768
      const count = Math.min(small ? 26 : 64, Math.round((w * h) / (small ? 17000 : 22000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: 0.8 + Math.random() * 1.4, phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number, move: boolean) => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (move) {
          n.x += n.vx; n.y += n.vy
          if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20
          if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK * LINK) {
            const k = 1 - Math.sqrt(d2) / LINK
            ctx.strokeStyle = `rgba(${rgb2},${(k * 0.2 * alpha).toFixed(3)})`
            ctx.lineWidth = 0.7
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        const glow = Math.max(0, Math.sin(t * 0.0011 + n.phase)) ** 6 // occasional brighter node
        ctx.fillStyle = `rgba(${rgb},${((0.28 + glow * 0.6) * alpha).toFixed(3)})`
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + glow * 1.2, 0, Math.PI * 2); ctx.fill()
      }
    }

    const loop = (t: number) => { draw(t, true); raf = requestAnimationFrame(loop) }
    const start = () => { cancelAnimationFrame(raf); if (reduced) draw(0, false); else raf = requestAnimationFrame(loop) }

    let lastW = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const nw = window.innerWidth, nh = window.innerHeight
      w = nw; h = nh
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (nw !== lastW || !nodes.length) { seed(); lastW = nw } // ignore mobile address-bar height changes
      start()
    }
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start())

    readColors()
    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    const themeObserver = new MutationObserver(() => { readColors(); if (reduced) draw(0, false) })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      themeObserver.disconnect()
    }
  }, [reduced])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  )
}
