import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";


const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "additional", label: "More" },
  { id: "contact", label: "Contact" },
];



export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-[2px]">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-foreground">
          <span className="text-highlight">◆</span> rayyan
          <span className="text-primary">.dev</span>
        </a>


        <div className="flex items-center gap-2">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "true" : undefined}
                    className={`rounded-sm px-2.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:text-foreground ${
                      active === s.id
                        ? "text-foreground underline decoration-primary decoration-2 underline-offset-[6px]"
                        : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 min-h-9 w-9 min-w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-border bg-surface md:hidden"
        >
          <ul className="mx-auto max-w-5xl px-5 py-2 sm:px-8">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-border last:border-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === s.id ? "true" : undefined}
                  className="flex items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {s.label}
                  {active === s.id && <span className="text-primary">current</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
