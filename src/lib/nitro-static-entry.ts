// Nitro's build always needs a JS/TS request-handler entry to produce its final server
// bundle, even for the "github-pages" static preset — an unset entry makes that build
// step fail. This bundle is never actually run: GitHub Pages serves .output/public as
// plain static files, so this only exists to satisfy Nitro's build pipeline and to let
// Nitro's own prerender crawler render real pages (see vite.config.ts).
import "#nitro/virtual/polyfills";
import { useNitroApp } from "nitro/app";

const nitroApp = useNitroApp();

export default { fetch: nitroApp.fetch };
