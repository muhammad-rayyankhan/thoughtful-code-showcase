import { useState } from "react";
import { Section } from "@/components/section";
import { profile } from "@/data/portfolio";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please write at least 10 characters.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground";

  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      lead="Happy to talk about backend architecture, platform work, or a role you're hiring for."
    >
      <div className="grid gap-10 sm:pl-[8.5rem] lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-12">
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="meta">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={field}
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 font-mono text-xs text-destructive">
                Error: {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="meta">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={field}
              placeholder="jane@company.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 font-mono text-xs text-destructive">
                Error: {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="meta">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={field}
              placeholder="A short note about what you're working on."
            />
            {errors.message && (
              <p id="message-error" className="mt-2 font-mono text-xs text-destructive">
                Error: {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex min-h-11 items-center rounded-sm bg-primary px-5 font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send message
          </button>

          <p aria-live="polite" className="min-h-5 font-mono text-xs text-primary">
            {sent ? "Sent — thanks, I'll reply within a couple of days." : ""}
          </p>
        </form>

        <dl className="space-y-4 text-sm">
          <div className="border-t border-border pt-3">
            <dt className="meta">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${profile.email}`} className="link-inline">
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="meta">Elsewhere</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
              {profile.links.map((l) => (
                <a key={l.label} href={l.href} className="link-inline">
                  {l.label}
                </a>
              ))}
            </dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="meta">Location</dt>
            <dd className="mt-1 text-muted-foreground">{profile.location}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="meta">
          © {new Date().getFullYear()} {profile.name} — built and maintained by hand
        </p>
        <a href="#top" className="link-inline font-mono text-xs uppercase tracking-[0.12em]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
