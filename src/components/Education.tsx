import { education } from '../data/portfolio'
import Section from './Section'

export default function Education() {
  const rows: [string, string][] = [['School', education.school], ['Status', education.status]]
  if (education.graduation) rows.push(['Graduation', education.graduation])
  return (
    <Section id="education" label="Education" title={education.degree}>
      <dl className="max-w-2xl divide-y divide-line border-y border-line">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">{k}</dt><dd className="text-sm">{v}</dd>
          </div>
        ))}
        {education.coursework.length > 0 && (
          <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">Relevant coursework</dt>
            <dd><ul className="flex flex-wrap gap-2">{education.coursework.map((c) => <li key={c} className="rounded border border-line px-2 py-0.5 text-sm">{c}</li>)}</ul></dd>
          </div>
        )}
      </dl>
    </Section>
  )
}
