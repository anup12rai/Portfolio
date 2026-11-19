import { useState } from 'react';
import { DockNav } from '@/components/DockNav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import type { SectionId } from '@/data/portfolio';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [section, setSection] = useState<SectionId>('home');

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-white text-zinc-800 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-200">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800 sm:px-6">
        <button
          type="button"
          onClick={() => setSection('home')}
          className="font-mono text-sm font-semibold tracking-widest text-zinc-900 dark:text-white"
        >
          ANIRUDDHA RAI
        </button>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="mx-auto w-full max-w-6xl min-h-0 flex-1 px-4 pb-24 pt-4 sm:px-6">
        {section === 'home' && <Hero onNavigate={() => setSection('projects')} />}
        {section === 'about' && <About />}
        {section === 'experience' && <Experience />}
        {section === 'projects' && <Projects />}
        {section === 'contact' && <Contact />}
      </main>

      <footer className="hidden shrink-0 border-t border-zinc-200 py-3 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 md:block">
        {`Aniruddha Rai · ${new Date().getFullYear()}`}
      </footer>

      <DockNav active={section} onNavigate={setSection} />
    </div>
  );
}

export default App;
