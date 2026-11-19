import { Award } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

// Hidden automatically while the achievements list in the data file is empty.
export function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading id="achievements-heading" title="Achievements" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a) => (
            <li
              key={a.title}
              className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {a.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
