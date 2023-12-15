module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'no-tabs': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'no-unused-expressions': 'off',
    'block-scoped-var': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'max-classes-per-file': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
