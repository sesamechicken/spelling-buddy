module.exports = {
  moduleNameMapper: {
    "\\.(css|sass|svg|png)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!|react-jss).*/"
  ]
};
