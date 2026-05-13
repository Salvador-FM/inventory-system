module.exports = {
  '**/*.{ts,tsx}': (filenames) => {
    const filtered = filenames.filter(
      (f) =>
        !f.includes('.spec.') &&
        !f.includes('.test.') &&
        !f.includes('test/') &&
        !f.includes('next.config.') &&
        !f.includes('next-env.d.'),
    );
    if (!filtered.length) return [];
    const files = filtered.map((f) => `"${f}"`).join(' ');
    return [
      `eslint --fix ${files}`,
      `prettier --write ${files}`,
    ];
  },
  '**/*.{json,md,yml,yaml}': (filenames) => {
    const files = filenames.map((f) => `"${f}"`).join(' ');
    return [`prettier --write ${files}`];
  },
};