import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

const ids = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const menuBtn = useRef<HTMLButtonElement>(null)
  const firstLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); menuBtn.current?.focus() } }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    firstLink.current?.focus()
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-base font-semibold tracking-tight" aria-label={`${profile.name}, back to top`}>
          {profile.initials}<span className="text-accent2">_</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}
                className={`relative px-3 py-2 text-sm transition-colors hover:text-fg ${active === l.id ? 'text-fg' : 'text-muted'}`}>
                {l.label}
                {active === l.id && <span className="absolute inset-x-3 -bottom-[17px] h-px bg-accent2" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#projects" className="btn btn-primary hidden !min-h-10 lg:inline-flex">View projects</a>
          <button ref={menuBtn} type="button" className="grid size-10 place-items-center rounded-lg border border-line lg:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-30 lg:hidden">
          <button type="button" aria-label="Close menu" tabIndex={-1} className="absolute inset-0 bg-bg/70" onClick={() => setOpen(false)} />
          <ul id="mobile-nav" className="relative border-b border-line bg-bg2 px-5 py-3 sm:px-8">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a ref={i === 0 ? firstLink : undefined} href={`#${l.id}`} onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-line/60 text-base last:border-0 ${active === l.id ? 'text-accent2' : 'text-fg'}`}>
                  {l.label}
                  {active === l.id && <span className="size-1.5 rounded-full bg-accent2" aria-hidden="true" />}
                </a>
              </li>
            ))}
            <li className="py-3"><a href="#projects" onClick={() => setOpen(false)} className="btn btn-primary w-full">View projects</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
