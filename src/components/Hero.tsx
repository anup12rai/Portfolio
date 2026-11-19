import { Download, FolderKanban, Github, Linkedin, Mail } from 'lucide-react';
import { profile, rotatingTitles } from '@/data/portfolio';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export function Hero({ onNavigate }: { onNavigate: () => void }) {
  const title = useTypingEffect(rotatingTitles);

  return (
    <section aria-label="Introduction" className="flex h-full flex-col items-center justify-center text-center">
      <img
        src={profile.image}
        alt={`Portrait of ${profile.name}`}
        width={112}
        height={112}
        className="h-24 w-24 rounded-full border border-zinc-200 object-cover shadow-sm dark:border-zinc-700 md:h-28 md:w-28"
      />
      <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
        {profile.name}
      </h1>
      <p
        className="mt-2 h-7 font-mono text-sm text-blue-600 dark:text-blue-400 md:text-base"
        aria-live="polite"
      >
        {title}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-blue-600 align-middle dark:bg-blue-400" style={{ height: '1em' }} aria-hidden />
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={onNavigate} className="btn-primary">
          <FolderKanban className="h-4 w-4" aria-hidden />
          View Projects
        </button>
        <a href={profile.resume} download className="btn-secondary">
          <Download className="h-4 w-4" aria-hidden />
          Download Resume
        </a>
      </div>

      <div className="mt-5 flex items-center gap-1">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn">
          <Github className="h-5 w-5" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`} className="icon-btn">
          <Mail className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="ml-1 font-mono text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
