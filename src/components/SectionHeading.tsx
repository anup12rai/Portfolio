interface SectionHeadingProps {
  id?: string;
  title: string;
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2
        id={id}
        className="font-mono text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400"
      >
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
}
