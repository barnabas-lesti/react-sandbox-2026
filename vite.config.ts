import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const port = 3000;

// https://vite.dev/config/
export default defineConfig({
  root: "./src",
  envDir: "..",
  server: { port },
  preview: { port },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
});
