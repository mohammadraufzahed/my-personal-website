import { defineConfig } from "astro/config";
import commonjs from "vite-plugin-commonjs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [commonjs()],
  },
});
