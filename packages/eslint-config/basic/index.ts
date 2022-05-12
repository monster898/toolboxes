import type { CommonConfigData } from "../config"
import { rules } from "./rules"

const config: CommonConfigData = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  plugins: ["html", "unicorn"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  rules,
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": [
          "error",
          { beforeColon: false, afterColon: true },
        ],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": [
          "error",
          { multiline: true, consistent: true },
        ],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": [
          "error",
          { allowMultiplePropertiesPerLine: true },
        ],
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off",
        "yml/quotes": ["error", { prefer: "double" }],
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "keywords",
              "license",
              "author",
              "repository",
              "funding",
              "main",
              "module",
              "types",
              "unpkg",
              "jsdelivr",
              "exports",
              "files",
              "bin",
              "sideEffects",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "husky",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/comma-dangle": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
      },
    },
  ],
}

module.exports = config
