import { ExternalLink } from 'lucide-react'
import { certificates } from '../data/portfolio'
import Section from './Section'

export default function Certificates() {
  return (
    <Section id="certificates" label="Certificates" title="Courses and credentials.">
      {certificates.length === 0 ? (
        <p className="max-w-xl rounded-lg border border-dashed border-line px-5 py-6 text-sm text-muted">
          No certificates added yet. Add them in <code className="font-mono text-fg">src/data/portfolio.ts</code>.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <li key={c.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface/70">
              {c.image && <img src={c.image} alt={`Certificate: ${c.title}`} loading="lazy" className="aspect-[4/3] w-full border-b border-line object-cover" />}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted">{c.date}</p>
                {c.credentialUrl && (
                  <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent2">
                    <ExternalLink size={16} aria-hidden="true" />View credential<span className="sr-only"> for {c.title}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}