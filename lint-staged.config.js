module.exports = {
  '**/*.{ts,tsx}': (filenames) => {
    const filtered = filenames.filter(
      (f) => !f.includes('.spec.') && !f.includes('test/'),
    );
    if (!filtered.length) return [];
    const files = filtered.map((f) => `"${f}"`).join(' ');
    return [
      `eslint --fix --max-warnings=0 ${files}`,
      `prettier --write ${files}`,
    ];
  },
  '**/*.{json,md,yml,yaml}': (filenames) => {
    const files = filenames.map((f) => `"${f}"`).join(' ');
    return [`prettier --write ${files}`];
  },
};