import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  const hasLearning = skills.some((g) => g.items.some((i) => i.learning))
  return (
    <Section id="skills" label="Technical skills" title="Tools I use and am still learning.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="bg-bg p-6 sm:p-7">
            <h3 className="mb-4 text-sm font-medium">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i.name} className={`rounded-md border px-3 py-1.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-fg ${i.learning ? 'border-dashed border-line text-muted' : 'border-line bg-surface/60 text-fg/90'}`}>
                  {i.name}{i.learning && <span className="ml-1.5 text-accent2">(learning)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {hasLearning && <p className="mt-4 text-sm text-muted">Dashed labels mark technologies I am currently learning.</p>}
    </Section>
  )
}
