module.exports = {
  root: true,
  extends: ['@dxweb/eslint-config'],
  ignorePatterns: ['dist'],
  rules: {
    'react/jsx-props-no-spreading': 'off', // allow props sprading for ui components to support propagated props
  },
};
