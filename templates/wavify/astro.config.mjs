import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// @ts-check
// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".tsx", ".jsx", ".mjs", ".astro", ".ts", ".js", ".json", ".md"],
    },
  },

  integrations: [react()],
});
