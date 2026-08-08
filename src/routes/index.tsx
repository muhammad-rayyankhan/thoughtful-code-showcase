import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { About, Approach, FeaturedProjects, Hero, ResumeCta } from "@/components/sections";

import { Contact, SiteFooter } from "@/components/contact";

const title = "Muhammad Rayyan Khan — Software Engineer";
const description =
  "Projects and engineering work by Muhammad Rayyan Khan — AI agent systems, full-stack platforms, and the APIs that hold them together.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "460" },
      { property: "og:image:height", content: "460" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
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
        <Approach />
        <ResumeCta />

        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
