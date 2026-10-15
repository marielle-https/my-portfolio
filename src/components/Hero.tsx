import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'
import ProfilePhoto from './ProfilePhoto'

const iconLink = 'grid size-11 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent2'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative scroll-mt-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="light-sweep" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="label rise mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg2/70 px-3 py-1">
            <span className="size-1.5 rounded-full bg-accent2" aria-hidden="true" /> {profile.role}
          </p>
          <h1 id="hero-title" className="rise text-balance text-4xl font-semibold leading-[1.08] tracking-tight [animation-delay:.08s] sm:text-6xl">
            {profile.headline} <span className="text-accent2">{profile.highlight}</span>
            <span className="caret" aria-hidden="true" />
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted [animation-delay:.16s] sm:text-lg">{profile.intro}</p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:.24s]">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </div>
          <div className="rise mt-8 flex gap-3 [animation-delay:.3s]">
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub profile"><GithubIcon className="size-5" /></a>}
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn profile"><LinkedinIcon className="size-5" /></a>}
            <a href={`mailto:${profile.email}`} className={iconLink} aria-label="Send an email"><Mail size={20} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="rise [animation-delay:.2s]"><ProfilePhoto /></div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted hover:text-accent2 lg:block">
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  )
}
