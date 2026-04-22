import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    root: ".",
    test: {
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        include: ["./src/**/*.{ts,tsx}"],
      },
    },
  }),
);
