module.exports = {
  testMatch: ["**/__tests__/**/*.test.js"],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.test.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(babel-plugin-rewire|other-module-to-compile)/)',
  ],
  moduleNameMapper: {
    '^@babel/preset-env$': require.resolve('@babel/preset-env'),
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
