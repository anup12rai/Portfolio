import { House, User, Rocket, LayoutGrid, Phone } from 'lucide-react';
import type { SectionId } from '@/data/portfolio';

interface DockNavProps {
  active: SectionId;
  onNavigate: (section: SectionId) => void;
}

const items = [
  { id: 'home' as const, label: 'Home', icon: House },
  { id: 'about' as const, label: 'About', icon: User },
  { id: 'experience' as const, label: 'Experience', icon: Rocket },
  { id: 'projects' as const, label: 'Projects', icon: LayoutGrid },
  { id: 'contact' as const, label: 'Contact', icon: Phone },
];

export function DockNav({ active, onNavigate }: DockNavProps) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-blue-600/60 bg-zinc-950/95 px-2 py-1.5 shadow-[0_0_18px_rgba(37,99,235,0.45)] backdrop-blur-md dark:bg-zinc-950/95">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-[0_0_14px_rgba(37,99,235,0.7)]'
                  : 'text-zinc-400 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-200 opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
