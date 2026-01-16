import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use root base for username.github.io deployments
  // If you deploy under a subpath (e.g., /react-portfolio/),
  // change this to that subpath or set via env at build time.
  base: "/",
});
