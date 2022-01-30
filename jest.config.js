module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ],
  "automock": false,
  "resetMocks": false,
  setupFiles: ["<rootDir>/jestSetupFile.js"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ]
}
