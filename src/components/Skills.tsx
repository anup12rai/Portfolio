import { skills } from '@/data/portfolio';

export function SkillsCompact() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <div
          key={group.title}
          className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <h3 className="text-xs font-semibold text-zinc-900 dark:text-white">
            {group.title}
          </h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
