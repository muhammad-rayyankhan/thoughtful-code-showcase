// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { promises as fsp } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Repo "thoughtful-code-showcase" deployed as a GitHub Pages project site:
// https://<user>.github.io/thoughtful-code-showcase/
const base = "/thoughtful-code-showcase/";

export default defineConfig({
  vite: { base },
  nitro: {
    preset: "github-pages",
    // The github-pages preset also sets `static: true`, which (on the currently pinned
    // nitro beta) disables the SSR renderer during Nitro's own build-time prerender crawl,
    // so crawled pages come back empty. The site still ships as pure static files either
    // way — Nitro's own server never runs in production — this only affects the crawler.
    static: false,
    // Nitro always needs a JS entry to build its final server bundle, even for a
    // static-only site — leaving it unset makes that build step crash. This just wraps
    // the app's own request handler; see the file for details.
    entry: "src/lib/nitro-static-entry.ts",
    // Crawl our actual base-prefixed route to prerender it to static HTML. The preset's
    // own default routes ("/", "/404.html") get crawled too but don't match the
    // base, so the `compiled` hook below cleans up after them.
    prerender: { routes: [base] },
    hooks: {
      async compiled(nitro) {
        const { publicDir } = nitro.options.output;

        // With base "/thoughtful-code-showcase/" the crawler writes the real prerendered
        // page to "<publicDir>/thoughtful-code-showcase/index.html". Flatten it to the
        // public dir root, which is what GitHub Pages serves as "/thoughtful-code-showcase/".
        const basedDir = join(publicDir, base.replace(/^\/|\/$/g, ""));
        await fsp.rename(join(basedDir, "index.html"), join(publicDir, "index.html")).catch(() => {});
        await fsp.rm(basedDir, { recursive: true, force: true });

        // Drop stray files produced by crawling the preset's unprefixed default routes
        // ("/", "/404.html"), which don't match the base.
        await fsp.rm(join(publicDir, "index"), { force: true });
        await fsp.rm(join(publicDir, "404.html"), { force: true });

        // GitHub Pages serves 404.html for unmatched paths; reuse the app shell so a
        // hard refresh/deep link still loads the app instead of GitHub's default 404.
        await fsp.copyFile(join(publicDir, "index.html"), join(publicDir, "404.html")).catch(() => {});

        // The github-pages preset also writes this; do it ourselves too in case our
        // `hooks.compiled` here replaces rather than composes with the preset's own hook.
        await fsp.writeFile(join(publicDir, ".nojekyll"), "");
      },
    },
  },
});
