//
//eslint
//eslint-plugin-react-app
//eslint-plugin-react-hooks
//
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react-app/recommended'],
  plugins: ['react', 'react-app', '@typescript-eslint'],
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'no-debugger': 1,
    'no-var': 1,
    'no-eq-null': 1,
    'no-implicit-coercion': 1,
    'no-implied-eval': 1,
    'linebreak-style': ['error', 'unix'],
    'space-before-function-paren': 0,
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
