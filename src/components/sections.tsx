import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import {
  about,
  archiveProjects,
  education,
  experience,
  featuredProjects,
  profile,
  skillGroups,
} from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <p className="meta">{profile.role} · {profile.location}</p>
      <h1
        id="hero-heading"
        className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
      >
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>

      <p className="mt-6 inline-flex items-center gap-2 border-l-2 border-highlight pl-3 font-mono text-xs uppercase tracking-[0.12em] text-highlight">
        <span aria-hidden="true">●</span>
        {profile.available}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-sm bg-primary px-5 font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center rounded-sm border border-border-strong px-5 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
        >
          Get in touch
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="link-inline font-mono text-xs uppercase tracking-[0.12em]">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8">
        <div className="sm:col-start-2 sm:grid sm:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] sm:gap-10">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/90">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 space-y-4 sm:mt-0">
            {about.facts.map((f) => (
              <div key={f.label} className="border-t border-border pt-3">
                <dt className="meta">{f.label}</dt>
                <dd className="mt-1 text-sm text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      index="02"
      title="Featured projects"
      lead="Three systems I designed and shipped, with the constraints and the results."
    >
      <div className="space-y-14">
        {featuredProjects.map((p) => (
          <article key={p.title} className="grid gap-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8">
            <div className="sm:pt-2">
              <p className="font-mono text-3xl font-medium text-border-strong">{p.index}</p>
              <p className="meta mt-2">{p.year}</p>
              <p className="meta">{p.role}</p>
            </div>

            <div className="max-w-2xl border-l border-border pl-5 sm:pl-6">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.summary}</p>

              <ul className="mt-5 space-y-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                    {o}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm border border-border px-2 py-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {p.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="link-inline inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em]"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Archive() {
  return (
    <Section
      id="archive"
      index="03"
      title="Project archive"
      lead="Smaller tools and experiments, most of them open source."
    >
      <ul className="sm:pl-40">
        {archiveProjects.map((p) => (
          <li key={p.title} className="border-t border-border last:border-b">
            <a
              href={p.href}
              className="group grid gap-1 py-4 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
            >
              <span className="meta">{p.year}</span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-x-3">
                  <span className="text-base font-medium text-foreground underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-link">
                    {p.title}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-link"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </span>
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
                {p.tags.join(" · ")}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2 sm:pl-40 lg:gap-10">
        {skillGroups.map((g) => (
          <div key={g.title} className="border-t border-border pt-4">
            <h3 className="meta">{g.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {g.items.map((i) => (
                <li key={i} className="text-sm text-foreground/90">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li key={item.title} className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
          <p className="meta sm:pt-1">{item.period}</p>
          <div className="max-w-2xl">
            <h4 className="text-base font-semibold text-foreground">
              {item.title}
              <span className="font-normal text-muted-foreground"> — {item.org}</span>
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="05" title="Experience & education">
      <div className="space-y-12 sm:pl-40">
        <div>
          <h3 className="meta border-t border-border pt-4">Experience</h3>
          <div className="mt-6">
            <Timeline items={experience} />
          </div>
        </div>
        <div>
          <h3 className="meta border-t border-border pt-4">Education</h3>
          <div className="mt-6">
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </Section>
  );
}
