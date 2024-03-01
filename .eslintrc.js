module.exports = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "out/",
    "example/",
    "coverage/",
    "node_modules",
    "jest-coverage/",
    "dist/",
    "dist",
    ".husky",
    ".yarn",
    ".github",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:jest/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "promise",
    "import",
  ],
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./",
      },
    },
  },
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  globals: {},
  rules: {
    // OFF
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-namespace": "off",
    "jest/expect-expect": "off",
    // WARN
    "eol-last": 1,
    "no-console": "warn" + "",
  },
};
