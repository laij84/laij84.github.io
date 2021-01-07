module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/.jest/empty-module.js',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: './coverage/',
  globals: {
    __PATH_PREFIX__: '',
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
}
