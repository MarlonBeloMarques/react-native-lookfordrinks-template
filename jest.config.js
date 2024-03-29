module.exports = {
  preset: 'react-native',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 15,
      lines: 50,
      statements: 50,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/index.{js,ts}',
    '!src/services/**',
    '!src/themes/**',
    '!src/assets/**',
    '!src/navigation/**',
    '!src/screens/**',
    '!src/utils/enums/*',
    '!src/api/request.ts',
    '!src/stores/*',
    '!src/**/*.d.ts',
  ],
  transformIgnorePatterns: [],
  modulePathIgnorePatterns: ['helpers'],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    './__mocks__/react-native-firebase.ts',
    './__mocks__/react-native-config.ts',
    './__mocks__/react-native-flash-message.tsx',
    './__mocks__/react-native-vector-icons.ts',
    './__mocks__/@react-native-async-storage/async-storage.ts',
    './__mocks__/formik.ts',
  ],
};