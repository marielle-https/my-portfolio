import type { ReactNode } from 'react'

export default function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative scroll-mt-16 border-t border-line/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="label mb-3">{label}</p>
        <h2 id={`${id}-title`} className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
