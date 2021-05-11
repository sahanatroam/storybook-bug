module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-canvas-mock', '<rootDir>/__tests__/setupTests.js'],
  testEnvironment: 'jsdom',
  testRegex: '(<rootDir>/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/file-transformer.js',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'html', 'text'],
  coveragePathIgnorePatterns: ['src/constants/', 'src/svg-icons/', 'src/types/', 'stories/'],
};
