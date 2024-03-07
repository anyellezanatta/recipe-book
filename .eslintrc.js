module.exports = {
  root: true,
  extends: ["@react-native", "plugin:react/jsx-runtime", "prettier"],
  plugins: ["import"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*"],
      },
    ],
    "import/default": "off",
    "import/export": "error",
    "import/first": "warn",
    "import/namespace": ["error", { allowComputed: true }],
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"]],
        pathGroups: [
          {
            pattern: "react+(|-native)",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "react-native"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/ignore": [
      // react-native's main module is Flow, not JavaScript, and raises parse errors. Additionally,
      // several other react-native-related packages still publish Flow code as their main source.
      "node_modules[\\\\/]+@?react-native",
    ],
  },
};
