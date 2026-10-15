import { about } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" label="About me" title={about.heading}>
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-medium">Technical interests</h3>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((i) => <li key={i} className="rounded-md border border-line bg-surface/60 px-3 py-1.5 text-sm text-muted">{i}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">How I work</h3>
            <ul className="divide-y divide-line border-y border-line">
              {about.habits.map((h) => <li key={h} className="py-3 text-sm text-muted">{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
