import { ArrowUpRight, Download } from "lucide-react";
import { CtaLink } from "@/components/cta";
import { Section } from "@/components/section";
import { about, approach, featuredProjects, profile } from "@/data/portfolio";


export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <p className="meta">
        <span className="text-primary">$</span> {profile.role} · {profile.location}
      </p>
      <h1
        id="hero-heading"
        className="chrome mt-5 max-w-3xl font-display text-[2.6rem] font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl"
      >
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {profile.summary}
        <span className="blink-cursor ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.08em] bg-primary align-middle" />
      </p>

      <p className="mt-7 inline-flex items-center gap-2 border border-highlight bg-highlight/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-highlight">
        <span aria-hidden="true">●</span>
        {profile.available}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <CtaLink href="#projects" variant="solid">
          View projects
        </CtaLink>
        <CtaLink href="#contact" variant="outline">
          Get in touch
        </CtaLink>
        <CtaLink
          href="/Muhammad_Rayyan_Khan_Resume.pdf"
          download="Muhammad_Rayyan_Khan_Resume.pdf"
          variant="outline"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download resume
        </CtaLink>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline font-mono text-xs uppercase tracking-[0.12em]"
            >
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
      <div className="grid gap-10 sm:grid-cols-[var(--layout-label-col)_minmax(0,1fr)] sm:gap-8">
        <div className="sm:col-start-2 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/90">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
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
      title="Selected projects"
      lead="What I've designed and built, how I approached it, and what it does."
    >
      <div className="space-y-12">
        {featuredProjects.map((p) => (
          <article
            key={p.title}
            className="grid gap-6 sm:grid-cols-[var(--layout-label-col)_minmax(0,1fr)] sm:gap-8"
          >
            <div className="sm:pt-2">
              <p className="font-display text-4xl font-bold text-border-strong">{p.index}</p>
              <p className="meta mt-2">{p.year}</p>
              <p className="meta">{p.role}</p>
            </div>

            <div className="panel max-w-2xl p-5 sm:p-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                {p.title}
              </h3>
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
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {p.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
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


export function Approach() {
  return (
    <Section id="approach" index="03" title="How I work" lead={approach.lead}>
      <div className="space-y-8">
        <ol className="grid gap-6 md:grid-cols-3">
          {approach.principles.map((p) => (
            <li key={p.index} className="panel p-5">
              <p className="meta">
                <span className="text-primary">[{p.index}]</span>
              </p>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-6 sm:grid-cols-[var(--layout-label-col)_minmax(0,1fr)] sm:gap-8">
          <p className="meta pt-1">Toolkit</p>
          <p className="max-w-2xl font-mono text-sm leading-relaxed text-foreground/90">
            {approach.toolkit}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-[var(--layout-label-col)_minmax(0,1fr)] sm:gap-8">
          <p className="meta pt-1">Why hire me</p>
          <ul className="max-w-2xl space-y-2">
            {approach.hire.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-highlight" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function ResumeCta() {
  return (
    <aside className="panel my-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-xl">
        <p className="meta">
          <span className="text-primary">$</span> full details
        </p>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          This page is the highlights reel. The resume has the full chronology — education,
          certifications, and the complete skill list.
        </p>
      </div>
      <CtaLink
        href="/Muhammad_Rayyan_Khan_Resume.pdf"
        download="Muhammad_Rayyan_Khan_Resume.pdf"
        variant="solid"
        className="shrink-0"
      >
        <Download className="h-3.5 w-3.5" aria-hidden="true" />
        Download resume (PDF)
      </CtaLink>
    </aside>
  );
}
