import { experience } from '@/data/portfolio';

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="flex h-full flex-col">
      <div className="mb-4 shrink-0">
        <h2
          id="experience-heading"
          className="font-mono text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400"
        >
          Experience & Education
        </h2>
        <div className="mt-2 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <ol className="relative ml-2 max-w-2xl border-l border-zinc-200 dark:border-zinc-800">
          {experience.map((item) => (
            <li key={item.title} className="ml-6 pb-7 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-zinc-950"
              />
              <p className="font-mono text-xs text-zinc-500">
                {item.period}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                {item.organization}
              </p>
              {item.description && (
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
