module.exports = {
  extends: ['../../.eslintrc.base.json'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  ignorePatterns: ['dist/', 'test/', '**/*.spec.ts', 'prisma.config.ts'],
};
