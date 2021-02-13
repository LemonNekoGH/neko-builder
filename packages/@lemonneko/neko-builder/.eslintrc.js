module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'off'
  },
  ignorePatterns: [
    'node_modules',
    'lib',
    'test'
  ]
}
