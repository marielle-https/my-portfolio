import { Mail } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const ic = 'grid size-10 place-items-center rounded-lg text-muted transition-colors hover:text-accent2'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono font-semibold">{profile.initials}<span className="text-accent2">_</span></p>
          <p className="mt-1 text-sm text-muted">{profile.closing}</p>
        </div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-1">
          {navLinks.filter((l) => l.id !== 'home').map((l) => <li key={l.id}><a href={`#${l.id}`} className="inline-flex min-h-10 items-center text-sm text-muted hover:text-fg">{l.label}</a></li>)}
        </ul></nav>
        <div className="flex">
          {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className={ic} aria-label="GitHub profile"><GithubIcon className="size-5" /></a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={ic} aria-label="LinkedIn profile"><LinkedinIcon className="size-5" /></a>}
          <a href={`mailto:${profile.email}`} className={ic} aria-label="Send an email"><Mail size={20} aria-hidden="true" /></a>
        </div>
      </div>
      <p className="border-t border-line py-4 text-center text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
