/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: '@boolfly.chat/eslint-config-alt/typescript',
  env: {
    jest: true,
  },
  rules: {
    'new-cap': 'off',
  },
  ignorePatterns: ['dist', 'node_modules', 'src/lame/*.js'],
};
