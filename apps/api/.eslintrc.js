module.exports = {
  extends: ['../../.eslintrc.base.json'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  ignorePatterns: ['dist/', 'test/', '**/*.spec.ts'],
};