import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="aspect-video w-full shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          width={800}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-2.5 flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-2 pt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
            >
              <Github className="h-3.5 w-3.5" aria-hidden />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-blue-600 px-3 py-1.5 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live Preview
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
