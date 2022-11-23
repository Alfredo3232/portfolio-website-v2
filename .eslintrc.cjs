/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-dupe-keys': 'error',
    'no-debugger': 'error'
  }
}
