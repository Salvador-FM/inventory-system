module.exports = {
  extends: ['../../.eslintrc.base.json'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['dist/', '.next/', 'next.config.ts', 'next-env.d.ts'],
};