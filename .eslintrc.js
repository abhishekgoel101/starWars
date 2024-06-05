module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react-native/no-inline-styles': 0,
  },
};
