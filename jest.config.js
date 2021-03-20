
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**'
  ],
  coverageDirectory: './test-reports',
  coverageReporters: ['lcov'],
  moduleDirectories: [
    'node_modules',
    './'
  ],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-reports',
      suiteName: 'react-sandbox'
    }]
  ],
  testMatch: [
    '**/test/**/*.spec.ts',
    '**/test/**/*.spec.tsx'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
}
