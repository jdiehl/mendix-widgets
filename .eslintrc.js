module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '18'
    }
  },
  ignorePatterns: ['**/typings/**'],
  rules: {
    'arrow-parens': 0,
    camelcase: 0,
    'comma-dangle': 0,
    curly: ['error', 'multi-line'],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'], 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'no-console': ['warn'],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-unreachable': ['warn'],
    'no-unused-vars': ['warn', { args: 'none' }],
    'object-curly-spacing': ['warn', 'always'],
    quotes: ['warn', 'single'],
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 0,
    'require-await': 0,
    semi: ['error', 'never'],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/strict-boolean-expressions': 0
  }
}
