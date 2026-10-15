import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

export default function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg">
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
