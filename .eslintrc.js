const INDENT = 2;

module.exports = {
  env: {
    browser: true, // Enables browser globals
    node: true, // Enables node globals
    es2020: true, // Enables ECMAScript 2020 globals
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".css",
        ],
      },
    },
  },
  rules: {
    quotes: [
      "error",
      "double",
    ],
    semi: [ // Always use semi coolons
      "error",
      "always",
    ],
    curly: [ // Always use curly braces
      "error",
      "all",
    ],
    "arrow-body-style": ["warn", "as-needed"],
    "no-unused-vars": ["warn"],
    "linebreak-style": 0, // disable linebreak checks
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "array-element-newline": [
      "error", {
        ArrayExpression: "consistent",
        ArrayPattern: { minItems: 3 },
      },
    ],
    "array-bracket-newline": [
      "error",
      { multiline: true },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
      },
    ],
    "import/prefer-default-export": 0,
    // REACT
    "react/jsx-indent": ["warn", INDENT],
    "react/prop-types": "off",
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-indent-props": ["error", INDENT],
    "react/jsx-max-props-per-line": ["warn", { maximum: 1 }],
  },
};
