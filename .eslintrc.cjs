/* eslint-env node */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  root: true,
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "no-var": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-dupe-keys": "error",
    "no-debugger": "error",
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "vue/component-definition-name-casing": [
      "error",
      "kebab-case"
    ],
    "no-trailing-spaces": ["error"]
  }
};
