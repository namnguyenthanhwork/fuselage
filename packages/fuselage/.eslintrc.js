module.exports = {
  extends: [
    '@boolfly.chat/eslint-config-alt/typescript',
    '@boolfly.chat/eslint-config-alt/react',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/display-name': 'off',
    'react/no-multi-comp': 'off',
  },
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        'react/self-closing-comp': 'off',
      },
    },
  ],
};
