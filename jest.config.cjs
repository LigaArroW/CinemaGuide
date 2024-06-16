// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // transform: {
  //     '^.+\\.tsx?$': 'babel-jest',
  //     '^.+\\.scss$': 'jest-transform-stub'
  // },
  // "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // transformIgnorePatterns: [
  //     'node_modules/(?!(jest-)?@?react|@?react-test-renderer|@?react-dom)'
  //   ],
  //   modulePaths: [
  //     '<rootDir>/src'
  //   ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
   
    // "/\.(css|less|scss|sass)$/": "identity-obj-proxy"
  },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

