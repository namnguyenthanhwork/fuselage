module.exports = {
  extends: '@boolfly.chat/eslint-config-alt/typescript',
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
