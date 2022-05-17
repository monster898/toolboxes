import type { RuleSetting } from "../config"

export const rules: Record<string, RuleSetting> = {
  // import
  "import/order": "error",
  "import/first": "error",
  "import/no-mutable-exports": "error",
  "import/no-unresolved": "off",
  "import/no-absolute-path": "off",
  // es6
  "no-var": "error",
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "template-curly-spacing": "error",
  "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
  "generator-star-spacing": "off",
  "spaced-comment": [
    "error",
    "always",
    {
      line: {
        markers: ["/"],
        exceptions: ["/", "#"],
      },
      block: {
        markers: ["!"],
        exceptions: ["*"],
        balanced: true,
      },
    },
  ],

  // best-practice
  "array-callback-return": "error",
  "block-scoped-var": "error",
  "consistent-return": "off",
  complexity: ["off", 11],
  eqeqeq: ["error", "smart"],
  "no-alert": "warn",
  "no-case-declarations": "error",
  "no-multi-spaces": "error",
  "no-multi-str": "error",
  "no-with": "error",
  "no-void": "error",
  "no-useless-escape": "off",
  "vars-on-top": "error",
  "require-await": "off",
  "no-return-assign": "off",
  "operator-linebreak": ["error", "before"],

  // unicorns
  // Pass error message when throwing errors
  "unicorn/error-message": "error",
  // Uppercase regex escapes
  "unicorn/escape-case": "error",
  // Array.isArray instead of instanceof
  "unicorn/no-array-instanceof": "error",
  // Prevent deprecated `new Buffer()`
  "unicorn/no-new-buffer": "error",
  // Keep regex literals safe!
  "unicorn/no-unsafe-regex": "off",
  // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
  "unicorn/number-literal-case": "error",
  // ** instead of Math.pow()
  "unicorn/prefer-exponentiation-operator": "error",
  // includes over indexOf when checking for existence
  "unicorn/prefer-includes": "error",
  // String methods startsWith/endsWith instead of more complicated stuff
  "unicorn/prefer-starts-ends-with": "error",
  // textContent instead of innerText
  "unicorn/prefer-text-content": "error",
  // Enforce throwing type error when throwing error while checking typeof
  "unicorn/prefer-type-error": "error",
  // Use new when throwing error
  "unicorn/throw-new-error": "error",

  "no-use-before-define": [
    "error",
    { functions: false, classes: false, variables: true },
  ],
  "eslint-comments/disable-enable-pair": "off",
  "import/no-named-as-default-member": "off",

  // yml
  "yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
  "yml/no-empty-document": "off",
}
