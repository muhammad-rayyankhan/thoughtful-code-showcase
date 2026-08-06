import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import {
  About,
  Additional,
  Archive,
  Experience,
  FeaturedProjects,
  Hero,
  Skills,
} from "@/components/sections";
import { Contact, SiteFooter } from "@/components/contact";

const title = "Muhammad Rayyan Khan — Software Engineer";
const description =
  "Portfolio of Muhammad Rayyan Khan, a software engineering student building AI-powered applications, web platforms, and REST APIs with Python, FastAPI, React, and Next.js.";

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
    <div className="crt min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground"
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
        <Additional />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
