import { useState } from 'react'
import { User } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(profile.photo) && !failed

  return (
    <figure className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:mr-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface/90 shadow-2xl shadow-black/30">
        {showPhoto ? (
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} className="size-full object-cover" />
        ) : (
          <div className="hero-grid grid size-full place-items-center !opacity-100" role="img" aria-label="Photo placeholder">
            <div className="flex flex-col items-center gap-3 text-muted">
              <User size={72} strokeWidth={1} aria-hidden="true" />
              <span className="rounded border border-dashed border-line bg-bg/80 px-3 py-1 font-mono text-xs"></span>
            </div>
          </div>
        )}
      </div>
      <span aria-hidden="true" className="absolute -left-2 -top-2 size-6 border-l-2 border-t-2 border-accent2" />
      <span aria-hidden="true" className="absolute -bottom-2 -right-2 size-6 border-b-2 border-r-2 border-accent2" />
      <figcaption className="mt-4 font-mono text-xs text-muted">{profile.name} · {profile.role}</figcaption>
    </figure>
  )
}