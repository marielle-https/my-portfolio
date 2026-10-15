import { Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's connect.">
      <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        I'm open to discussing projects, learning opportunities, and technology. Feel free to reach out.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary"><Mail size={18} aria-hidden="true" />{profile.email}</a>
        {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><GithubIcon className="size-[18px]" />GitHub</a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><LinkedinIcon className="size-[18px]" />LinkedIn</a>}
      </div>
    </Section>
  )
}
