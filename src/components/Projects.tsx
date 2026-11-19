import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/ProjectCard';

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="flex h-full flex-col">
      <div className="mb-4 shrink-0">
        <h2
          id="projects-heading"
          className="font-mono text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400"
        >
          Featured Projects
        </h2>
        <div className="mt-2 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
