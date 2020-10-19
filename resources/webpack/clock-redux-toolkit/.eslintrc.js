module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react-app/recommended'],
  plugins: ['react', 'react-app', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-debugger': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
};
