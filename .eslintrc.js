module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/first': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    'import/prefer-default-export': 'off',
    semi: 'off' /** handled by prettier */,
  },
}
