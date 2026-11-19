import { profile } from '@/data/portfolio';
import { SkillsCompact } from '@/components/Skills';

export function About() {
  return (
    <section aria-labelledby="about-heading" className="flex h-full flex-col">
      <div className="mb-4 shrink-0">
        <h2
          id="about-heading"
          className="font-mono text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400"
        >
          About
        </h2>
        <div className="mt-2 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            I am a Computer Applications student with hands-on software development experience, focused on building practical tools with Python and modern web technologies. My main interest lies in Artificial Intelligence and Machine Learning, especially connecting LLM-powered backends to real-world interfaces.
          </p>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Beyond software, I work with hardware and embedded systems such as ESP32 and Arduino, building IoT projects that bridge the physical and digital worlds. I enjoy problem-solving and continuous learning, always working to deepen my engineering fundamentals.
          </p>
          <p className="font-mono text-xs text-zinc-500">
            Based in {profile.location}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Technical Skills
          </h3>
          <SkillsCompact />
        </div>
      </div>
    </section>
  );
}
