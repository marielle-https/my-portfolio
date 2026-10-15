import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { projects, type Project } from '../data/portfolio'
import { GithubIcon } from './icons'
import Section from './Section'

function Preview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  if (project.image && !failed) {
    return <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" onError={() => setFailed(true)} className="aspect-video w-full object-cover" />
  }
  return (
    <div className="hero-grid grid aspect-video w-full place-items-center bg-bg2 !opacity-100" role="img" aria-label={`Preview placeholder for ${project.title}`}>
      <span className="rounded border border-dashed border-line bg-bg/80 px-3 py-1 font-mono text-xs text-muted">Add screenshot</span>
    </div>
  )
}

const linkCls = 'inline-flex min-h-10 items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent2'

export default function Projects() {
  return (
    <Section id="projects" label="Featured projects" title="Work in progress, described accurately.">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface/70 transition-colors hover:border-accent/60">
            <Preview project={p} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted">
                <span>{p.category}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-fg">
                  <span className="size-1.5 rounded-full bg-accent2" aria-hidden="true" />{p.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              {p.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{t}</li>)}
                </ul>
              )}
              {(p.github || p.demo) && (
                <div className="mt-4 flex gap-5 border-t border-line pt-3">
                  {p.github && <a className={linkCls} href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="size-4" />Source<span className="sr-only"> for {p.title}</span></a>}
                  {p.demo && <a className={linkCls} href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" />Live demo<span className="sr-only"> of {p.title}</span></a>}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
