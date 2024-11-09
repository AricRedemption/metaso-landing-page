import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});