/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  ignoreFiles: ['**/*.{js,jsx,ts,tsx,json,mjs,md}', 'node_modules/**', '.next/**', '.husky'],
  rules: {
    // https://stylelint.io/user-guide/rules/list/block-no-empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
}

module.exports = config
