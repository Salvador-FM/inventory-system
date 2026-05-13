// @ts-check
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginImport from 'eslint-plugin-import';

const rootRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-explicit-any': 'error',
  'import/order': [
    'warn',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
    },
  ],
  'no-console': 'off',
};

export default tseslint.config(
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'dist/',
      'eslint.config.mjs',
      'postcss.config.mjs',
      'tailwind.config.*',
    ],
  },
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      ...rootRules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
);