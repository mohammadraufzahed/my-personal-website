import { defineConfig } from "astro/config";
import commonjs from "vite-plugin-commonjs";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [commonjs()],
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
    robotsTxt({}),
  ],
  site: "https://mohammadraufzahed.ir",
});
