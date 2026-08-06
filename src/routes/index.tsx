import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { About, Archive, Experience, FeaturedProjects, Hero, Skills } from "@/components/sections";
import { Contact, SiteFooter } from "@/components/contact";

const title = "Ada Kensington — Software Engineer";
const description =
  "Portfolio of Ada Kensington, a software engineer building backend systems, developer tooling, and observable platform architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <About />
        <FeaturedProjects />
        <Archive />
        <Skills />
        <Experience />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
