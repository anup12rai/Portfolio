import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No email backend is configured yet, so do not fake a successful send.
    setNotice(
      'Email delivery is not configured yet. Please reach out directly via the email, GitHub or LinkedIn links.',
    );
  };

  const inputClasses =
    'w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-400';

  return (
    <section aria-labelledby="contact-heading" className="flex h-full flex-col">
      <div className="mb-4 shrink-0">
        <h2
          id="contact-heading"
          className="font-mono text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400"
        >
          Contact
        </h2>
        <div className="mt-2 h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
      </div>

      <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto pr-1 md:grid-cols-2">
        <ul className="space-y-3">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              <Mail className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              <Github className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              <Linkedin className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <MapPin className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
            {profile.location}
          </li>
        </ul>

        <form onSubmit={handleSubmit} noValidate className="max-w-md">
          <div className="space-y-3">
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClasses}
              />
            </div>
            {notice && (
              <p role="alert" className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
                {notice}
              </p>
            )}
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
