import { ArrowUpRight, Download } from "lucide-react";
import { Section } from "@/components/section";
import {
  about,
  additional,
  certifications,
  education,
  featuredProjects,
  profile,
  skillGroups,
} from "@/data/portfolio";


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
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center border border-primary bg-primary px-5 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center border border-border-strong px-5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-highlight hover:text-highlight"
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
              <div key={f.label} className="border-t-2 border-border pt-3">
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
      title="Selected projects"
      lead="Things I designed and built, with what they do and what I learned."
    >
      <div className="space-y-12">
        {featuredProjects.map((p) => (
          <article key={p.title} className="grid gap-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8">
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

export function Skills() {
  return (
    <Section id="skills" index="03" title="Technical skills">
      <div className="grid gap-6 sm:grid-cols-2 sm:pl-40 lg:gap-8">
        {skillGroups.map((g) => (
          <div key={g.title} className="panel p-4">
            <h3 className="meta text-primary">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <li key={i} className="chip">
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

function Timeline({ items }: { items: typeof education }) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li key={item.title} className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
          <p className="meta sm:pt-1">{item.period}</p>
          <div className="max-w-2xl border-l-2 border-border pl-4">
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

export function Education() {
  return (
    <Section id="education" index="04" title="Education & certifications">
      <div className="space-y-12 sm:pl-40">
        <div>
          <h3 className="meta border-t-2 border-border pt-4 text-primary">Education</h3>
          <div className="mt-6">
            <Timeline items={education} />
          </div>
        </div>
        <div>
          <h3 className="meta border-t-2 border-border pt-4 text-primary">Certifications</h3>
          <div className="mt-6">
            <Timeline items={certifications} />
          </div>
        </div>
      </div>
    </Section>
  );
}


export function Additional() {
  const groups = [
    { title: "Languages", items: additional.languages },
    { title: "Soft skills", items: additional.softSkills },
    { title: "Interests", items: additional.interests },
  ];

  return (
    <Section id="additional" index="05" title="Additional">
      <div className="grid gap-6 sm:grid-cols-3 sm:pl-40">
        {groups.map((g) => (
          <div key={g.title} className="border-t-2 border-border pt-4">
            <h3 className="meta text-highlight">{g.title}</h3>
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
