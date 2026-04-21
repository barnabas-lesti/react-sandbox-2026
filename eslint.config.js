import eslintJs from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
    },
    extends: [
      eslintJs.configs.recommended,
      eslintPluginReactHooks.configs.flat.recommended,
      eslintPluginReactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "eol-last": ["error", "always"],
      "default-param-last": ["error"],
      "no-trailing-spaces": ["error"],
      "arrow-spacing": ["error"],
      "prefer-const": ["error"],
      "no-console": ["error", { allow: ["debug", "warn", "error"] }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "MethodDefinition[kind='set']",
          message: "Property setters are not allowed.",
        },
        {
          selector: "MethodDefinition[kind='get']",
          message: "Property getters are not allowed.",
        },
      ],

      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",

      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], ["^#?\\w"], ["^\\./", "^\\.\\./"], ["^/"], ["^.+\\.(css|scss)([?].*)?$"]],
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [typescriptEslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.node.json", "./tsconfig.spec.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
  eslintConfigPrettier,
]);
